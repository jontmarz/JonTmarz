import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { Code, Briefcase, Zap, Brain } from 'lucide-react'

const Journey: React.FC = () => {
    const { t } = useTranslation('AboutMe')
    
    const iconMap: Record<string, React.ReactNode> = {
        code: <Code size={32} />,
        briefcase: <Briefcase size={32} />,
        zap: <Zap size={32} />,
        brain: <Brain size={32} />,
    }

    const experiences = t('journey.experiences', { returnObjects: true }) as Array<{
        id: string
        role: string
        description: string
        icon: string
    }>

    return (
        <Container id="journey" maxWidth="lg" sx={{ py: 8 }}>
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
                        color: '#00AAFF',
                    }}
                >
                    {t('journey.title')}
                </Typography>
                <Grid container spacing={3}>
                    {experiences.map((exp, index) => (
                        <Grid item xs={12} sm={6} md={3} key={exp.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(0, 170, 255, 0.05) 0%, rgba(0, 0, 15, 1) 100%)',
                                        border: '1px solid rgba(0, 170, 255, 0.2)',
                                        borderRadius: '12px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #00AAFF 0%, #0088CC 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 2,
                                                color: 'white',
                                            }}
                                        >
                                            {iconMap[exp.icon]}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#FFFFFF' }}>
                                            {exp.role}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}
                                        >
                                            {exp.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Container>
    )
}

export default Journey
