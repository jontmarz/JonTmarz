import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'

const ServicesSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    const services = t('services.list', { returnObjects: true }) as string[]

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    }

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(to bottom, rgba(0,0,15,1) 0%, rgba(0,0,30,1) 100%)',
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                <Zap size={28} color="#CCA70A" />
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: '#CCA70A',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        letterSpacing: '2px'
                                    }}
                                >
                                    SERVICIOS AUTOMATIZABLES
                                </Typography>
                            </Box>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    mb: 4,
                                    fontWeight: 700,
                                    fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                                    position: 'relative',
                                    '&:after': {
                                        content: '""',
                                        display: 'block',
                                        width: '80px',
                                        height: '4px',
                                        background: 'linear-gradient(to right, #00AAFF, #CCA70A)',
                                        mt: 2,
                                        borderRadius: '2px',
                                    }
                                }}
                                dangerouslySetInnerHTML={{ __html: t('services.title') }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem',
                                    mb: 3
                                }}
                            >
                                El sistema Koda App puede generar cotizaciones automáticas para una amplia gama de servicios tecnológicos:
                            </Typography>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, rgba(0, 170, 255, 0.08) 0%, rgba(204, 167, 10, 0.08) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '24px',
                                    p: 4,
                                }}
                            >
                                <List disablePadding>
                                    {services.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            custom={index}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={itemVariants}
                                        >
                                            <ListItem
                                                sx={{
                                                    py: 1.5,
                                                    px: 0,
                                                    borderBottom: index < services.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                                                }}
                                            >
                                                <ListItemIcon sx={{ minWidth: 40 }}>
                                                    <Box
                                                        sx={{
                                                            width: 28,
                                                            height: 28,
                                                            borderRadius: '8px',
                                                            background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <CheckCircle2 size={16} color="white" />
                                                    </Box>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={service}
                                                    primaryTypographyProps={{
                                                        fontSize: '1rem',
                                                        fontWeight: 500,
                                                        color: 'rgba(255, 255, 255, 0.9)',
                                                        lineHeight: 1.6
                                                    }}
                                                />
                                            </ListItem>
                                        </motion.div>
                                    ))}
                                </List>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ServicesSection
