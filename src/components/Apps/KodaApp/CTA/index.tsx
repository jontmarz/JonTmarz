import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { MessageCircle, FileText, Send } from 'lucide-react'

const CTASection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    
    return (
        <Box
            id="tryIt"
            sx={{
                py: { xs: 10, md: 14 },
                background: 'linear-gradient(135deg, rgba(0, 170, 255, 0.15) 0%, rgba(0, 0, 15, 1) 30%, rgba(0, 0, 15, 1) 70%, rgba(204, 167, 10, 0.15) 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 170, 255, 0.12) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Stack spacing={4} alignItems="center" textAlign="center">
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 10px 40px rgba(0, 170, 255, 0.3)',
                            }}
                        >
                            <MessageCircle size={40} color="white" />
                        </Box>

                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2rem', md: '3rem' },
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #00AAFF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {t('cta.title')}
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                color: '#CCA70A',
                                fontWeight: 600,
                                fontSize: { xs: '1.3rem', md: '1.5rem' }
                            }}
                        >
                            {t('cta.subtitle')}
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                maxWidth: '700px',
                                lineHeight: 1.7,
                                fontSize: { xs: '1.1rem', md: '1.2rem' }
                            }}
                        >
                            {t('cta.description')}
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            sx={{ mt: 4, width: '100%', justifyContent: 'center' }}
                        >
                            {/* <Button
                                variant="contained"
                                size="large"
                                startIcon={<Send />}
                                sx={{
                                    bgcolor: '#00AAFF',
                                    color: 'white',
                                    px: 5,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    boxShadow: '0 10px 40px rgba(0, 170, 255, 0.4)',
                                    minWidth: '220px',
                                    '&:hover': {
                                        bgcolor: '#0099DD',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 15px 50px rgba(0, 170, 255, 0.5)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                                href="https://wa.me/573222287009?text=Hola%2C%20quiero%20solicitar%20una%20cotización%20automática"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('cta.btn1')}
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<FileText />}
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    px: 5,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    minWidth: '220px',
                                    borderWidth: '2px',
                                    '&:hover': {
                                        borderColor: '#CCA70A',
                                        bgcolor: 'rgba(204, 167, 10, 0.1)',
                                        borderWidth: '2px',
                                        transform: 'translateY(-3px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                                href="#portfolio"
                            >
                                {t('cta.btn2')}
                            </Button> */}
                        </Stack>

                        <Box
                            sx={{
                                mt: 4,
                                p: 3,
                                borderRadius: '16px',
                                background: 'rgba(0, 170, 255, 0.05)',
                                border: '1px solid rgba(0, 170, 255, 0.2)',
                                maxWidth: '500px',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgba(255, 255, 255, 1)',
                                    fontSize:  { xs: '1.3rem', md: '1.5rem' },
                                    lineHeight: 1.6,
                                    fontWeight: 800,
                                }}
                            >
                                {t('cta.comingSoon')}
                            </Typography>
                            {/* <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                💬 {t('cta.contactText')}: <br />
                                <Box component="span" sx={{ color: '#00AAFF', fontWeight: 600 }}>
                                    WhatsApp: +57 322 228 7009
                                </Box>
                                {' | '}
                                <Box component="span" sx={{ color: '#00AAFF', fontWeight: 600 }}>
                                    Telegram: @JonTmarz
                                </Box>
                            </Typography> */}
                        </Box>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    )
}

export default CTASection
