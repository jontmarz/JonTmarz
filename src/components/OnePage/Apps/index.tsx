import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'

interface App {
    id: number
    title: string
    description: string
    image: string
    route: string
    tags: string[]
    gradient: string
}

const AppsSection: React.FC = () => {
    const navigate = useNavigate()
    const { t } = useTranslation('OnePage')

    const apps: App[] = [
        {
            id: 1,
            title: t('appsSection.digitalLauncher.title'),
            description: t('appsSection.digitalLauncher.description'),
            image: '/digital-launcher-preview.webp',
            route: '/digital-launcher-gpt',
            tags: t('appsSection.digitalLauncher.tags', { returnObjects: true }) as string[],
            gradient: 'linear-gradient(135deg, rgba(244, 206, 44, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)'
        },
        {
            id: 2,
            title: t('appsSection.kodaApp.title'),
            description: t('appsSection.kodaApp.description'),
            image: '/koda-app-preview.webp',
            route: '/koda-app',
            tags: t('appsSection.kodaApp.tags', { returnObjects: true }) as string[],
            gradient: 'linear-gradient(135deg, rgba(0, 170, 255, 0.1) 0%, rgba(204, 167, 10, 0.1) 100%)'
        },
        {
            id: 3,
            title: t('appsSection.tributosCo.title'),
            description: t('appsSection.tributosCo.description'),
            image: '/tributos-co-preview.webp',
            route: '/tributos-co',
            tags: t('appsSection.tributosCo.tags', { returnObjects: true }) as string[],
            gradient: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
        },
    ]

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeOut'
            }
        })
    }

    return (
        <Box
            id="apps"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, rgba(0,0,15,1) 0%, rgba(0,0,30,1) 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,170,255,0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(204,167,10,0.08) 0%, transparent 70%)',
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
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
                        >
                            {t('appsSection.title')}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                maxWidth: '700px',
                                mx: 'auto',
                                lineHeight: 1.6
                            }}
                        >
                            {t('appsSection.subtitle')}
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {apps.map((app, index) => (
                        <Grid item xs={12} md={6} lg={4} key={app.id}>
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
                                        background: app.gradient,
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0, 170, 255, 0.2)',
                                        borderRadius: '20px',
                                        transition: 'all 0.4s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: '0 20px 60px rgba(0, 170, 255, 0.25)',
                                            border: '1px solid rgba(0, 170, 255, 0.4)',
                                        }
                                    }}
                                    onClick={() => {
                                        navigate(app.route)
                                        window.scrollTo(0, 0)
                                    }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            height: 200,
                                            background: app.id === 1 
                                                ? 'linear-gradient(135deg, rgba(0, 170, 255, 0.15) 0%, rgba(204, 167, 10, 0.15) 100%)'
                                                : 'linear-gradient(135deg, rgba(244, 206, 44, 0.15) 0%, rgba(138, 43, 226, 0.15) 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Placeholder for app icon/image */}
                                        <Box
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                borderRadius: '20px',
                                                background: app.id === 1 
                                                    ? 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)'
                                                    : 'linear-gradient(135deg, #F4CE2C 0%, #8A2BE2 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: app.id === 1 
                                                    ? '0 10px 30px rgba(0, 170, 255, 0.3)'
                                                    : '0 10px 30px rgba(244, 206, 44, 0.3)',
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 700,
                                                    fontSize: '3rem'
                                                }}
                                            >
                                                {app.id === 1 ? 'K' : 'D'}
                                            </Typography>
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#00AAFF',
                                            }}
                                        >
                                            {app.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                lineHeight: 1.7,
                                                mb: 3,
                                                minHeight: '80px'
                                            }}
                                        >
                                            {app.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                            {app.tags.map((tag, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(0, 170, 255, 0.15)',
                                                        color: '#00AAFF',
                                                        border: '1px solid rgba(0, 170, 255, 0.3)',
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            endIcon={<ExternalLink size={18} />}
                                            sx={{
                                                color: '#00AAFF',
                                                borderColor: '#00AAFF',
                                                fontWeight: 600,
                                                py: 1.5,
                                                borderRadius: '12px',
                                                '&:hover': {
                                                    borderColor: '#00AAFF',
                                                    bgcolor: 'rgba(0, 170, 255, 0.1)',
                                                }
                                            }}
                                        >
                                            {t('appsSection.viewApp')}
                                        </Button>
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

export default AppsSection
