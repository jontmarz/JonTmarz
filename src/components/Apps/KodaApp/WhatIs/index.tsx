import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import { MessageCircle, Cpu, FileCheck, CheckCircle } from 'lucide-react'

interface Step {
    id: string
    title: string
    description: string
    items?: string[]
}

const WhatIsSection: React.FC = () => {
    const { t } = useTranslation('KodaApp')
    const steps = t('whatIs.steps', { returnObjects: true }) as Step[]
    
    const stepIcons = [
        <MessageCircle size={32} />,
        <Cpu size={32} />,
        <FileCheck size={32} />
    ]

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    }

    return (
        <Box
            id="whatIs"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, rgba(0,0,15,1) 0%, rgba(0,0,30,1) 100%)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 2,
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        }}
                        dangerouslySetInnerHTML={{ __html: t('whatIs.title') }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            mb: 1,
                            color: '#00AAFF',
                            fontWeight: 600,
                            fontSize: { xs: '1.3rem', md: '1.5rem' }
                        }}
                    >
                        {t('whatIs.intro')}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '800px',
                            mx: 'auto',
                            fontSize: { xs: '1.1rem', md: '1.2rem' }
                        }}
                    >
                        {t('whatIs.description')}
                    </Typography>
                </motion.div>

                <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                        textAlign: 'center',
                        mb: 5,
                        fontWeight: 600,
                        color: '#CCA70A',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                >
                    {t('whatIs.sectionTitle')}
                </Typography>

                <Grid container spacing={4}>
                    {steps.map((step, index) => (
                        <Grid item xs={12} md={4} key={step.id}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={itemVariants}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(0, 170, 255, 0.05) 0%, rgba(204, 167, 10, 0.05) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 40px rgba(0, 170, 255, 0.2)',
                                            border: '1px solid rgba(0, 170, 255, 0.3)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 70,
                                                height: 70,
                                                borderRadius: '16px',
                                                background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                                mb: 3,
                                                color: 'white',
                                            }}
                                        >
                                            {stepIcons[index]}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            component="h4"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#00AAFF',
                                                fontSize: '1.3rem'
                                            }}
                                        >
                                            {step.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                lineHeight: 1.7,
                                                mb: step.items ? 2 : 0
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                        {step.items && (
                                            <List dense>
                                                {step.items.map((item: string, idx: number) => (
                                                    <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                                            <CheckCircle size={18} color="#CCA70A" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{
                                                                fontSize: '0.95rem',
                                                                color: 'rgba(255, 255, 255, 0.8)'
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
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

export default WhatIsSection
