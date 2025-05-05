import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { Zap, Target, Clock, BarChart, FileText, PenTool } from 'lucide-react'
import CardSection from './CardSection'

const WhatIsSection: React.FC = () => {
  const { t } = useTranslation('DLGpt')
  const [maxContentHeight, setMaxContentHeight] = useState<number>(0)

  // Función para actualizar la altura máxima
  const updateMaxHeight = (height: number) => {
    setMaxContentHeight(prevHeight => Math.max(prevHeight, height))
  }

  // Reiniciar la altura cuando cambie el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setMaxContentHeight(0); // Reiniciar para recalcular
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // Obtener el array completo de descripciones
  const descriptions = t('whatIs.description', { returnObjects: true }) as string[]
  // Obtener el array de características desde las traducciones
  const featuresData = t('whatIs.features', { returnObjects: true }) as Array<{
    id: string
    title: string
    description: string
  }>

  // Función para renderizar HTML de manera segura
  const renderHTML = (html: string) => {
    return html.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {/* Render the HTML in this line */}
        <div dangerouslySetInnerHTML={{ __html: line }} />
        {/* Add a line break if it's not the last line */}
        {i !== html.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  // Mapeo de iconos por ID
  const iconMap: Record<string, React.ReactNode> = {
    'intelligent': <Zap size={32} />,
    'personalized': <Target size={32} />,
    'efficient': <Clock size={32} />,
    'analytics': <BarChart size={32} />,
    'content': <FileText size={32} />,
    'creative': <PenTool size={32} />,
  }

  // Crear el array de features combinando datos de traducción con iconos
  const features = featuresData.map(feature => ({
    icon: iconMap[feature.id] || <Target size={32} />,
    title: feature.title,
    description: feature.description
  }))

  return (
    <Box
      id="que-es"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(0,0,15,1) 20%, rgba(0, 170, 255, 0.5) 70%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(to right, #6366F1, #8B5CF6)',
                    mt: 2,
                    borderRadius: '2px',
                  }
                }}
              >
                {renderHTML(t('whatIs.title'))}
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: '1.125rem', }}
                component="div"
              >
                {renderHTML(descriptions[0])}
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: '1.125rem' }}
                component="div"
              >
                {renderHTML(descriptions[1])}
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid 
              container 
              spacing={3} 
              sx={{
                '& .MuiGrid-item': {
                  display: 'flex',
                },
                '& .card-wrapper': {
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }
              }}
            >
              {features.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    className="card-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <CardSection
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatIsSection;