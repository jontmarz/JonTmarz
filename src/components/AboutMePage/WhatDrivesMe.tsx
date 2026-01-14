import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { Clock, Rocket, Users } from 'lucide-react'

const WhatDrivesMe: React.FC = () => {
    const { t } = useTranslation('AboutMe')
    
    const driveItems = t('whatDrivesMe.items', { returnObjects: true }) as Array<{
        id: string
        title: string
        description: string
    }>

    return (
        <Box id="drives" sx={{ bgcolor: 'rgba(0, 170, 255, 0.05)', py: 8 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 700,
                            mb: 6,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #00AAFF 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('whatDrivesMe.title')}
                    </Typography>
                    <Grid container spacing={4}>
                        {driveItems.map((item, index) => (
                            <Grid item xs={12} md={4} key={item.id} sx={{ display: 'flex' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    style={{ width: '100%', display: 'flex' }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            background: 'rgba(0, 170, 255, 0.08)',
                                            border: '1px solid rgba(0, 170, 255, 0.3)',
                                            borderRadius: '16px',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 40px rgba(0, 170, 255, 0.3)',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 2,
                                                    color: 'white',
                                                }}
                                            >
                                                {index === 0 && <Clock size={32} />}
                                                {index === 1 && <Rocket size={32} />}
                                                {index === 2 && <Users size={32} />}
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 700, mb: 1, color: '#00AAFF', textAlign: { xs: 'center', md: 'left' } }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, textAlign: { xs: 'center', md: 'left' } }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default WhatDrivesMe
