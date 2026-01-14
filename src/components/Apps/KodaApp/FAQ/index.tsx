import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { ChevronDown, CheckCircle2, Rocket, FileText, Brain, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const FAQSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }
  
    const questionsList = t('faq.questions', { returnObjects: true }) as Array<{
        question: string
        answer: string
    }>

    const featureList = t('faq.features', { returnObjects: true }) as string[]
    
    const featureIcons = [
        <Rocket size={28} />,
        <FileText size={28} />,
        <Brain size={28} />,
        <Zap size={28} />,
        <Shield size={28} />,
    ]

    const faqs = questionsList.map((faq, index) => ({
        question: faq.question,
        answer: faq.answer,
    }))

    const features = featureList.map((feature, index) => ({
        icon: featureIcons[index] || <CheckCircle2 size={28} />,
        title: feature,
    }))

    return (
        <Box 
            id="faq"
            sx={{ 
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, rgba(0,0,15,1) 0%, rgba(42,0,43,0.2) 50%, rgba(0,0,15,1) 100%)',
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
                                color: '#00AAFF',
                                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
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
                                color: 'rgba(255, 255, 255, 0.7)',
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
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Accordion
                                        expanded={expanded === `panel${index}`}
                                        onChange={handleChange(`panel${index}`)}
                                        sx={{
                                            mb: 2,
                                            background: 'rgba(0, 170, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(0, 170, 255, 0.2)',
                                            borderRadius: '12px !important',
                                            '&:before': {
                                                display: 'none',
                                            },
                                            '&:hover': {
                                                border: '1px solid rgba(0, 170, 255, 0.4)',
                                            }
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ChevronDown color="#00AAFF" />}
                                            sx={{
                                                '& .MuiAccordionSummary-content': {
                                                    my: 2,
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    color: '#00AAFF',
                                                    fontSize: '1.1rem'
                                                }}
                                            >
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    lineHeight: 1.7
                                                }}
                                            >
                                                {faq.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                sx={{
                                    p: 4,
                                    borderRadius: '16px',
                                    background: 'rgba(0, 170, 255, 0.08)',
                                    border: '1px solid rgba(0, 170, 255, 0.3)',
                                    position: 'sticky',
                                    top: 100,
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                        color: '#00AAFF',
                                    }}
                                >
                                    {t('faq.feature')}
                                </Typography>
                                <List>
                                    {features.map((feature, index) => (
                                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 40, color: '#CCA70A' }}>
                                                {feature.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={feature.title}
                                                primaryTypographyProps={{
                                                    fontWeight: 500,
                                                    color: 'rgba(255, 255, 255, 0.9)'
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>

                                <Box
                                    sx={{
                                        mt: 4,
                                        p: 3,
                                        borderRadius: '12px',
                                        background: 'rgba(0, 170, 255, 0.1)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            color: '#00AAFF',
                                        }}
                                    >
                                        {t('faq.moreQTitle')}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                        }}
                                    >
                                        {t('faq.moreQText')}
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default FAQSection
