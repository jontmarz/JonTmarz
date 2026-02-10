import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { CalendarSearch, Send, BotMessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CTA: React.FC = () => {
    const { t } = useTranslation('AboutMe')
    const navigate = useNavigate()

    return (
        <Box id="contact" sx={{ bgcolor: 'rgba(0, 170, 255, 0.05)', py: 10 }}>
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                            fontWeight: 700,
                            mb: 3,
                            textAlign: 'center',
                            color: '#FFFFFF',
                        }}
                    >
                        {t('howCanIHelp.title')}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 6,
                            textAlign: 'center',
                            color: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        {t('howCanIHelp.description')}
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Button
                                    href={import.meta.env.VITE_CALENDLY_URL}
                                    target="_blank"
                                    variant="contained"
                                    size="large"
                                    startIcon={<CalendarSearch size={20} />}
                                    fullWidth
                                    sx={{
                                        background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                        color: 'white',
                                        fontWeight: 700,
                                        py: 2,
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        boxShadow: '0 8px 32px rgba(0, 170, 255, 0.3)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #0088CC 0%, #006699 100%)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 12px 40px rgba(0, 170, 255, 0.4)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {t('howCanIHelp.bookCall')}
                                </Button>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Button
                                    onClick={() => {
                                        // Navigate to home
                                        navigate('/');
                                        // Scroll to contact section after navigation
                                        setTimeout(() => {
                                            const element = document.getElementById('contact');
                                            if (element) {
                                                const headerOffset = 100;
                                                const elementPosition = element.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }, 500);
                                    }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<Send size={20} />}
                                    fullWidth
                                    sx={{
                                        borderColor: '#00AAFF',
                                        color: '#00AAFF',
                                        fontWeight: 700,
                                        py: 2,
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        borderWidth: '2px',
                                        '&:hover': {
                                            borderColor: '#0088CC',
                                            backgroundColor: 'rgba(0, 170, 255, 0.1)',
                                            transform: 'translateY(-2px)',
                                            borderWidth: '2px',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {t('howCanIHelp.sendMessage')}
                                </Button>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Button
                                    onClick={() => {
                                        // Dispatch custom event to open chatbot
                                        window.dispatchEvent(new Event('openChatBot'));
                                        // Scroll to footer to make chatbot visible
                                        const footer = document.querySelector('footer');
                                        footer?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<BotMessageSquare size={20} />}
                                    fullWidth
                                    sx={{
                                        borderColor: '#9333EA',
                                        color: '#9333EA',
                                        fontWeight: 700,
                                        py: 2,
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        borderWidth: '2px',
                                        '&:hover': {
                                            borderColor: '#7C28C7',
                                            backgroundColor: 'rgba(147, 51, 234, 0.1)',
                                            transform: 'translateY(-2px)',
                                            borderWidth: '2px',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {t('howCanIHelp.chatWithMia')}
                                </Button>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default CTA
