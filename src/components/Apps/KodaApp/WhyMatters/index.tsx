import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'

interface Benefit {
    id: string
    icon: string
    title: string
    description: string
}

const WhyMattersSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    const benefits = t('whyMatters.benefits', { returnObjects: true }) as Benefit[]

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    }

    return (
        <Box
            id="whyMatters"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, rgba(0,0,15,1) 0%, rgba(42,0,43,0.3) 50%, rgba(0,0,15,1) 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,170,255,0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(204,167,10,0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 7,
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                display: 'block',
                                width: '100px',
                                height: '4px',
                                background: 'linear-gradient(to right, #00AAFF, #CCA70A)',
                                margin: '1.5rem auto 0',
                                borderRadius: '2px',
                            }
                        }}
                    >
                        {t('whyMatters.title')}
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={6} md={3} key={benefit.id}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            background: 'rgba(0, 170, 255, 0.05)',
                                            border: '1px solid rgba(0, 170, 255, 0.3)',
                                            boxShadow: '0 20px 60px rgba(0, 170, 255, 0.15)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontSize: '3rem',
                                                mb: 2,
                                            }}
                                        >
                                            {benefit.icon}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            component="h4"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#00AAFF',
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            {benefit.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.75)',
                                                lineHeight: 1.6,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {benefit.description}
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

export default WhyMattersSection
