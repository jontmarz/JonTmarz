import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { Store, BarChart3, Globe, Briefcase } from 'lucide-react'
import CardSection from './CardSection'

const AudienceSection: React.FC = () => {
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

    // Obtener el array de características desde las traducciones
    const featuresData = t('audience.audiences', { returnObjects: true }) as Array<{
        id: string;
        title: string;
        description: string;
    }>
    // Mapeo de iconos por ID
    const iconMap: Record<string, React.ReactNode> = {
        'entrepreneurs': <Store size={36} />,
        'marketing-agencies': <BarChart3 size={36} />,
        'content-creators': <Globe size={36} />,
        'influencers': <Briefcase size={36} />,
    }

    // Crear el array de features combinando datos de traducción con iconos
    const audiences = featuresData.map(audience => ({
        icon: iconMap[audience.id] || <Store size={32} />, // Icono por defecto si no se encuentra
        title: audience.title,
        description: audience.description
    }))

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <Box
            id="para-quien"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(30deg, rgba(0,0,15,1) 20%, rgba(0, 170, 255, 0.5) 70%)',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                color: '#F4CE2C'
                            }}
                        >
                            {t('audience.title')}
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                maxWidth: '700px',
                                mx: 'auto',
                                color: 'text.secondary',
                                fontSize: '1.125rem'
                            }}
                        >
                            {t('audience.description')}
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={4} sx={{ mt: 6 }}>
                    {audiences.map((audience, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                <CardSection
                                    icon={audience.icon}
                                    title={audience.title}
                                    description={audience.description}
                                    setMaxHeight={updateMaxHeight}
                                    maxHeight={maxContentHeight}
                                />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AudienceSection;