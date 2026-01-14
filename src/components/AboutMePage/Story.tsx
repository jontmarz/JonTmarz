import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card } from '@mui/material'
import { motion } from 'framer-motion'

const Story: React.FC = () => {
    const { t } = useTranslation('AboutMe')
    const storyParagraphs = t('story.paragraphs', { returnObjects: true }) as string[]

    return (
        <Container id="story" maxWidth="lg" sx={{ py: 8 }}>
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
                        color: '#00AAFF',
                    }}
                >
                    {t('story.title')}
                </Typography>
                <Grid container spacing={4}>
                    {storyParagraphs.map((paragraph, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'rgba(0, 170, 255, 0.05)',
                                        border: '1px solid rgba(0, 170, 255, 0.2)',
                                        borderRadius: '12px',
                                        p: 3,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: 'rgba(0, 170, 255, 0.08)',
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 24px rgba(0, 170, 255, 0.2)',
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                minWidth: 40,
                                                height: 40,
                                                borderRadius: '8px',
                                                background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                                display: { xs: 'none', md: 'flex' },
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 700,
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            {index + 1}
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '1.05rem',
                                                lineHeight: 1.8,
                                                color: 'rgba(255, 255, 255, 0.85)',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Container>
    )
}

export default Story
