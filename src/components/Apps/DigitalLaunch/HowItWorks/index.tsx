import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper, useMediaQuery, useTheme, } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { DLauncerGPT } from '../../../../config/variables'

const HowItWorksSection: React.FC = () => {
    const { t } = useTranslation('DLGpt')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { bgHowItWorks } = DLauncerGPT
    
    // Intentar obtener los pasos desde las traducciones - corregir la ruta de la traducción
    interface Step {
        label: string;
        description: string;
    }

    let steps: Step[] = [];
    try {
        // Probar con la ruta corregida "howItWork" (sin 's' al final)
        const translatedSteps = t('howItWork.steps', { returnObjects: true })
        
        // Verificar que el resultado es un array y tiene elementos
        if (Array.isArray(translatedSteps) && translatedSteps.length > 0) {
            steps = translatedSteps as { label: string; description: string }[]
        } else {
            // Intento alternativo con otra ruta posible
            const altTranslatedSteps = t('howItWorks.steps', { returnObjects: true })
            
            if (Array.isArray(altTranslatedSteps) && altTranslatedSteps.length > 0) {
                steps = altTranslatedSteps as { label: string; description: string }[]
            } else {
                console.warn('Translated steps not available or invalid format, using defaults');
            }
        }
    } catch (error) {
        console.error('Error retrieving translated steps:', error);
    }

    return (
        <Box
            id="howItWorks"
            sx={{
                py: { xs: 8, md: 12 },
                background: `linear-gradient(rgba(0, 0, 15, 0.6), rgba(0, 0, 15, 0.7)), url(${bgHowItWorks}) no-repeat center center`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                position: 'relative',
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
                                color: '#CCA70A',
                            }}
                        >
                            { t('howItWork.title') }
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
                            { t('howItWork.description') }
                        </Typography>
                    </motion.div>
                </Box>

                <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                    <Stepper orientation={isMobile ? "vertical" : "horizontal"} sx={{ mb: 4 }}>
                        {steps.map((step, index) => (
                            <Step key={index} active={true}>
                                <StepLabel>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >
                                        <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                                            {step.label}
                                        </Typography>
                                    </motion.div>
                                </StepLabel>
                                {isMobile && (
                                    <StepContent>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                                            {step.description}
                                        </Typography>
                                    </StepContent>
                                )}
                            </Step>
                        ))}
                    </Stepper>

                    {!isMobile && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                                    style={{ width: '30%' }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            height: '100%',
                                            borderRadius: 3,
                                            border: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {step.description}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            ))}
                        </Box>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                            <Button
                                variant="contained"
                                component={ScrollLink}
                                to="Demo"
                                color="primary"
                                size="large"
                                sx={{
                                    px: 6,
                                    py: 1.5,
                                    borderRadius: '50px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                    animation: 'doubleZoom 1.5s ease-in-out',
                                    },
                                    '@keyframes doubleZoom': {
                                        '0%': { transform: 'scale(1)' },
                                        '25%': { transform: 'scale(1.2)' },
                                        '50%': { transform: 'scale(1)' },
                                        '75%': { transform: 'scale(1.2)' },
                                        '100%': { transform: 'scale(1)' }
                                    }
                                }}
                            >
                                { t('howItWork.btnText') }
                            </Button>
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default HowItWorksSection
