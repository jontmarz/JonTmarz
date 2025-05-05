import React from 'react'
import { useTranslation } from 'react-i18next'  // Corregido de userTranslation a useTranslation
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import { Users, FileText, Calendar, LayoutGrid, Bot, Check } from 'lucide-react'
import { DLauncerGPT } from '../../../../config/variables'

const BenefitsSection: React.FC = () => {
    const { t } = useTranslation('DLGpt')  // Corregido de userTranslation a useTranslation
    const { bgBenefits } = DLauncerGPT
    const benefitsList = t('benefits.list', { returnObjects: true }) as string[]
    
    // Iconos para cada beneficio
    const benefitIcons = [
        <Users size={20} />,
        <FileText size={20} />,
        <Calendar size={20} />,
        <LayoutGrid size={20} />,
        <Bot size={20} />
    ]
    
    // Crear la lista de beneficios combinando los iconos con los textos traducidos
    const benefits = benefitsList.map((text, index) => ({
        icon: benefitIcons[index] || <Check size={20} />, // Usa Check como fallback si no hay suficientes iconos
        text: text
    }))

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5
            }
        })
    }

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(150deg, rgba(0,0,15,1) 20%, rgba(0, 170, 255, 0.5) 70%)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    mb: 4,
                                    fontWeight: 700,
                                    position: 'relative',
                                    '&:after': {
                                        content: '""',
                                        display: 'block',
                                        width: '60px',
                                        height: '4px',
                                        background: 'linear-gradient(to right, #6366F1, #8B5CF6)',
                                        mt: 2,
                                        borderRadius: '2px',
                                    }
                                }}
                            >
                                {t('benefits.title')}
                            </Typography>

                            <List disablePadding>
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={itemVariants}
                                    >
                                        <ListItem sx={{ py: 1.5, px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                                                {benefit.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={benefit.text}
                                            />
                                        </ListItem>
                                    </motion.div>
                                ))}
                            </List>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            sx={{
                                position: 'relative',
                                height: { xs: '400px', md: '500px' },
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease-in-out',
                                cursor: 'pointer',
                                '&:hover img': {
                                    filter: 'brightness(0.4)',
                                    transform: 'scale(1.05)',
                                },
                                '&:hover .description-text': {
                                    transform: 'translateY(-5px)',
                                },
                                '&:hover .title-text': {
                                    fontSize: '1.8rem',
                                },
                                '&:hover .body-text': {
                                    fontSize: '1.05rem',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={bgBenefits}
                                alt="Equipo trabajando con Lanzador Digital"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'filter 0.5s ease, transform 0.5s ease',
                                }}
                            />
                            <Box
                                className="description-text"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
                                    p: 3,
                                    color: 'white',
                                    transition: 'all 0.5s ease',
                                }}
                            >
                                <Typography 
                                    variant="h5" 
                                    component="h3" 
                                    className="title-text"
                                    sx={{ 
                                        mb: 1, 
                                        fontWeight: 600,
                                        transition: 'font-size 0.5s ease' 
                                    }}
                                >
                                    { t('benefits.subtitle') }
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    className="body-text"
                                    sx={{ transition: 'font-size 0.5s ease' }}
                                >
                                    { t('benefits.description') }
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BenefitsSection;