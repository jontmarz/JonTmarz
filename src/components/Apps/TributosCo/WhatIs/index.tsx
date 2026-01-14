import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { Calculator, Clock, Wallet, Heart, FileText, Code } from 'lucide-react'

const WhatIsSection: React.FC = () => {
    const { t } = useTranslation('TributosCo')
    
    const features = t('whatIs.features', { returnObjects: true }) as Array<{
        id: string
        title: string
        description: string
    }>

    const audiences = t('whatIs.audiences', { returnObjects: true }) as Array<{
        id: string
        title: string
        description: string
    }>

    const iconMap: Record<string, React.ReactNode> = {
        'net-salary': <Calculator size={36} />,
        'extra-hours': <Clock size={36} />,
        'social-benefits': <Wallet size={36} />,
        'social-security': <Heart size={36} />,
        'withholding': <FileText size={36} />,
    }

    const audienceIconMap: Record<string, React.ReactNode> = {
        'developers': <Code size={36} />,
        'startups': <Calculator size={36} />,
        'consultants': <FileText size={36} />,
    }

    return (
        <Box
            id="whatIs"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, rgba(0,0,15,1) 20%, rgba(147, 51, 234, 0.1) 70%)',
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
                            mb: 2,
                            fontWeight: 700,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #9333EA 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('whatIs.title')}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 2,
                            fontWeight: 600,
                            textAlign: 'center',
                            color: '#A855F7',
                        }}
                    >
                        {t('whatIs.subtitle')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 6,
                            textAlign: 'center',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '1.1rem',
                            maxWidth: '800px',
                            mx: 'auto',
                        }}
                    >
                        {t('whatIs.description')}
                    </Typography>
                </motion.div>

                <Grid container spacing={3} sx={{ mb: 8 }}>
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
                                        background: 'rgba(147, 51, 234, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(147, 51, 234, 0.2)',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 40px rgba(147, 51, 234, 0.3)',
                                            border: '1px solid rgba(147, 51, 234, 0.4)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '12px',
                                                background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                                color: 'white',
                                            }}
                                        >
                                            {iconMap[feature.id] || <Calculator size={36} />}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 1,
                                                color: '#A855F7',
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                lineHeight: 1.6,
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

                {/* Audience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 4,
                            fontWeight: 700,
                            textAlign: 'center',
                            color: '#9333EA',
                        }}
                    >
                        {t('whatIs.audienceTitle')}
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {audiences.map((audience, index) => (
                        <Grid item xs={12} md={4} key={audience.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '2px solid rgba(147, 51, 234, 0.3)',
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 16px 48px rgba(147, 51, 234, 0.4)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 3,
                                                color: 'white',
                                            }}
                                        >
                                            {audienceIconMap[audience.id] || <Code size={40} />}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            {audience.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {audience.description}
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

export default WhatIsSection
