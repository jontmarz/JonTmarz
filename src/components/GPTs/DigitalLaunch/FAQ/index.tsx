import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { Rocket, FileText, LayoutGrid, Calendar, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { DLauncerGPT } from '../../../../config/variables'
import AccordionSection from './AccordionSection'
import BoxSection from './BoxSection'
import ContactSection from './ContactSection'

const FAQSection: React.FC = () => {
  const { t } = useTranslation('DLGpt')
  const [expanded, setExpanded] = useState<string | false>(false)
  const { contact } = DLauncerGPT

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
}
  
  // Obtener el array completo de preguntas y respuestas
  const questionsList = t('faq.questions', { returnObjects: true }) as Array<{
    question: string
    answer: string
  }>
  // Obtener el array de características desde las traducciones
  const featureList = t('faq.features', { returnObjects: true }) as string[]
  const featureIcons = [
    <Rocket size={28} />,
    <FileText size={28} />,
    <LayoutGrid size={28} />,
    <Calendar size={28} />,
    <Globe size={28} />,
  ]

  const faqs = questionsList.map((faq, index) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  const features = featureList.map((feature, index) => ({
    icon: featureIcons[index] || <Globe size={28} />,
    title: feature,
  }))

  return (
    <Box 
      id="faq"
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: '',
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
                color: '#F4CE2C',
              }}
            >
              {t('faq.title')}
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
              {t('faq.description')}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Box>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionSection
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                    expanded={expanded}
                    handleChange={handleChange}
                  />
                </motion.div>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 4,
                  bgcolor: 'rgba(192, 192, 192, 1)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 600, color: '#00000F', textAlign: 'center' }}>
                    {t('faq.feature')}
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {features.map((feature, index) => (
                      <Grid item xs={12} sm={6} md={12} lg={6} key={index}>
                        <BoxSection
                          icon={feature.icon}
                          title={feature.title}
                          index={index}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      borderRadius: 2,
                      bgcolor: 'primary.main',
                      color: 'secondary.dark',
                      textAlign: 'center',
                    }}
                  >
                    <ContactSection
                      title={t('faq.moreQTitle')}
                      text={t('faq.moreQText')}
                      contact={contact}
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;