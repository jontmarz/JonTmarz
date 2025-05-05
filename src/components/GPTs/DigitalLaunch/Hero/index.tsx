import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import ButtonsSection from './ButtonsSection'
import { DLauncerGPT } from '../../../../config/variables'

const HeroSection: React.FC = () => {
    const { t } = useTranslation('DLGpt')
    const { bgHero, favicon, urlDLG } = DLauncerGPT
    
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 15, 0.8), rgba(0, 0, 15, 0.8)), url(${bgHero})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
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
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
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
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
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
                        <Box 
                            component="img" 
                            src={favicon} 
                            alt="Digital Launcher Logo" 
                            sx={{ 
                                width: { xs: '80px', md: '100px' }, 
                                height: 'auto', 
                                margin: "0 auto 1em",
                                filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.3))',
                            }}
                        />
                        
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                mb: 2,
                                color: "#CCA70A",
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
                                maxWidth: '800px',
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
                        <ButtonsSection urlDLG={urlDLG} btn1Text={t('hero.btn1')} btn2Text={t('hero.btn2')} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Box
                            sx={{
                                mt: { xs: 6, md: 10 },
                                p: 2,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderRadius: 2,
                                backdropFilter: 'blur(10px)',
                                maxWidth: '650px',
                            }}
                        >
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                {t('hero.disclaimer')}
                            </Typography>
                        </Box>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
};

export default HeroSection;