import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { Code, Calendar, CheckCircle, Settings, Zap, Award } from 'lucide-react'

const WhyUseSection: React.FC = () => {
    const { t } = useTranslation('TributosCo')
    
    const features = t('whyUse.features', { returnObjects: true }) as Array<{
        id: string
        title: string
        description: string
    }>

    const iconMap: Record<string, React.ReactNode> = {
        'typescript': <Code size={32} />,
        'updated': <Calendar size={32} />,
        'validations': <CheckCircle size={32} />,
        'flexible': <Settings size={32} />,
        'combinations': <Zap size={32} />,
        'social-benefits': <Award size={32} />,
    }

    return (
        <Box
            id="whyUse"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(30deg, rgba(0,0,15,1) 20%, rgba(168, 85, 247, 0.1) 70%)',
            }}
        >
            <Container maxWidth="lg">
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
                            mb: 6,
                            fontWeight: 700,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #A855F7 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('whyUse.title')}
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={feature.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(168, 85, 247, 0.05) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(147, 51, 234, 0.2)',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.3)',
                                            border: '1px solid rgba(147, 51, 234, 0.5)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: '16px',
                                                background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 3,
                                                color: 'white',
                                                boxShadow: '0 8px 24px rgba(147, 51, 234, 0.3)',
                                            }}
                                        >
                                            {iconMap[feature.id] || <CheckCircle size={32} />}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#FFFFFF',
                                                fontSize: '1.25rem',
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.75)',
                                                lineHeight: 1.7,
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default WhyUseSection
