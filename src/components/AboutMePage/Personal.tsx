import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Grid, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Personal: React.FC = () => {
    const { t } = useTranslation('AboutMe')
    const interests = t('personal.interests', { returnObjects: true }) as string[]

    return (
        <Container id="personal" maxWidth="lg" sx={{ py: 8 }}>
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
                        mb: 3,
                        color: '#00AAFF',
                    }}
                >
                    {t('personal.title')}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}
                >
                    {t('personal.description')}
                </Typography>
                <Grid container spacing={2}>
                    {interests.map((interest, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <CheckCircle size={20} color="#00AAFF" />
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'rgba(255, 255, 255, 0.85)' }}
                                >
                                    {interest}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Container>
    )
}

export default Personal
