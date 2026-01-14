import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Package } from 'lucide-react'

const HeroSection: React.FC = () => {
    const { t } = useTranslation('TributosCo')
    
    return (
        <Box
            id="hero"
            sx={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 15, 1) 30%, rgba(0, 0, 15, 1) 70%, rgba(168, 85, 247, 0.15) 100%)',
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
                        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0) 70%)',
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
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 70%)',
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
                        transition={{ duration: 0.8 }}
                    >
                        {/* npm logo/icon */}
                        <Box 
                            sx={{ 
                                width: { xs: '100px', md: '120px' }, 
                                height: { xs: '100px', md: '120px' }, 
                                margin: "0 auto 1em",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                borderRadius: '20px',
                                boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3)',
                            }}
                        >
                            <Package size={60} color="white" />
                        </Box>
                        
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                                mb: 2,
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #9333EA 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            {t('hero.title')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                mb: 3,
                                maxWidth: '900px',
                                mx: 'auto',
                                color: 'rgba(255,255,255,0.9)',
                            }}
                        >
                            {t('hero.subtitle')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            sx={{ mt: 4 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<Package size={20} />}
                                href="https://www.npmjs.com/package/tributos-co"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                    color: 'white',
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 40px rgba(147, 51, 234, 0.4)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {t('hero.btn1')}
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<BookOpen size={20} />}
                                href="https://github.com/jontmarz/tributos-co"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: '#A855F7',
                                    borderColor: '#A855F7',
                                    borderWidth: 2,
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#9333EA',
                                        color: '#9333EA',
                                        bgcolor: 'rgba(147, 51, 234, 0.1)',
                                        transform: 'translateY(-2px)',
                                        borderWidth: 2,
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {t('hero.btn2')}
                            </Button>
                        </Stack>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
};

export default HeroSection;
