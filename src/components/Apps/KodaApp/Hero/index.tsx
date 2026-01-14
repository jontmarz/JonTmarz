import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    
    return (
        <Box
            id="hero"
            sx={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 15, 0.95), rgba(0, 0, 15, 0.85)), radial-gradient(circle at 50% 0%, rgba(0, 170, 255, 0.15) 0%, rgba(0, 0, 15, 1) 50%)',
                color: 'white',
                pt: { xs: 16, md: 20 },
                pb: { xs: 12, md: 16 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background shapes */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: '40%',
                        height: '40%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,170,255,0.3) 0%, rgba(0,170,255,0) 70%)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '-5%',
                        left: '-10%',
                        width: '50%',
                        height: '50%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(204,167,10,0.2) 0%, rgba(204,167,10,0) 70%)',
                    }}
                />
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Stack
                    direction="column"
                    alignItems="center"
                    textAlign="center"
                    spacing={4}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', mb: 2 }}>
                            <Sparkles size={24} color="#00AAFF" />
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#00AAFF',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    letterSpacing: '2px'
                                }}
                            >
                                KODA APP SYSTEM
                            </Typography>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                                fontWeight: 800,
                                lineHeight: 1.2,
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #00AAFF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 3,
                            }}
                        >
                            {t('hero.title')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                color: 'rgba(255, 255, 255, 0.85)',
                                maxWidth: '800px',
                                lineHeight: 1.6,
                                mb: 2,
                            }}
                        >
                            {t('hero.subtitle')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            sx={{ mt: 4 }}
                        >
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
                                    textTransform: 'none',
                                    boxShadow: '0 8px 32px rgba(0, 170, 255, 0.35)',
                                    '&:hover': {
                                        bgcolor: '#0099DD',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 40px rgba(0, 170, 255, 0.45)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                                href="#tryIt"
                            >
                                {t('hero.btn1')}
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#00AAFF',
                                        bgcolor: 'rgba(0, 170, 255, 0.1)',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                                href="#whatIs"
                            >
                                {t('hero.btn2')}
                            </Button>
                        </Stack>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                mt: 4,
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontStyle: 'italic',
                                fontSize: '0.95rem',
                            }}
                        >
                            {t('hero.disclaimer')}
                        </Typography>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSection
