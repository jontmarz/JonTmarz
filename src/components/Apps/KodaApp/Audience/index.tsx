import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { Store, Building2, User, Briefcase } from 'lucide-react'

const AudienceSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')

    const featuresData = t('audience.audiences', { returnObjects: true }) as Array<{
        id: string
        title: string
        description: string
    }>

    const iconMap: Record<string, React.ReactNode> = {
        'entrepreneurs': <Store size={36} />,
        'agencies': <Building2 size={36} />,
        'freelancers': <User size={36} />,
        'consultants': <Briefcase size={36} />,
    }

    const audiences = featuresData.map(audience => ({
        icon: iconMap[audience.id] || <Store size={32} />,
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
    }

    return (
        <Box
            id="audience"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(150deg, rgba(0,0,15,1) 20%, rgba(0, 170, 255, 0.3) 70%)',
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
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '1.125rem'
                            }}
                        >
                            {t('audience.description')}
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={4}>
                    {audiences.map((audience, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
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
                                        background: 'rgba(0, 170, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0, 170, 255, 0.2)',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            border: '1px solid rgba(0, 170, 255, 0.4)',
                                            boxShadow: '0 12px 40px rgba(0, 170, 255, 0.2)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                        <Box
                                            sx={{
                                                display: 'inline-flex',
                                                p: 2,
                                                borderRadius: '12px',
                                                background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                                color: 'white',
                                                mb: 2,
                                            }}
                                        >
                                            {audience.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 1.5,
                                                color: '#00AAFF',
                                            }}
                                        >
                                            {audience.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
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

export default AudienceSection
