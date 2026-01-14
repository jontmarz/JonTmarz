import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Button, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HowItWorksSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    
    interface Step {
        label: string
        description: string
    }

    const steps = t('howItWork.steps', { returnObjects: true }) as Step[]

    return (
        <Box
            id="howItWorks"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(to bottom, rgba(0,0,15,1) 0%, rgba(0,0,30,1) 100%)',
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
                                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                            }}
                        >
                            {t('howItWork.title')}
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
                            {t('howItWork.description')}
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
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                color: '#00AAFF',
                                                fontSize: { xs: '0.9rem', md: '1rem' }
                                            }}
                                        >
                                            {step.label}
                                        </Typography>
                                    </motion.div>
                                </StepLabel>
                                {isMobile && (
                                    <StepContent>
                                        <Typography
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontSize: '0.95rem',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                    </StepContent>
                                )}
                            </Step>
                        ))}
                    </Stepper>

                    {!isMobile && (
                        <Box sx={{ mt: 6 }}>
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <Box
                                        sx={{
                                            mb: 3,
                                            p: 3,
                                            borderRadius: '12px',
                                            background: 'rgba(0, 170, 255, 0.05)',
                                            border: '1px solid rgba(0, 170, 255, 0.2)',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#00AAFF',
                                                mb: 1
                                            }}
                                        >
                                            {index + 1}. {step.label}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    )}

                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowRight />}
                            sx={{
                                bgcolor: '#00AAFF',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: '50px',
                                '&:hover': {
                                    bgcolor: '#0099DD',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                            href="#tryIt"
                        >
                            {t('howItWork.btnText')}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default HowItWorksSection
