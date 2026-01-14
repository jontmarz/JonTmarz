import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { Package, Rocket } from 'lucide-react'

const NextPackagesSection: React.FC = () => {
    const { t } = useTranslation('TributosCo')
    
    const packages = t('nextPackages.packages', { returnObjects: true }) as Array<{
        id: string
        name: string
        description: string
    }>

    return (
        <Box
            id="nextPackages"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(30deg, rgba(0,0,15,1) 20%, rgba(147, 51, 234, 0.1) 70%)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            mb: 2,
                            fontWeight: 700,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #9333EA 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('nextPackages.title')}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 6,
                            fontWeight: 500,
                            textAlign: 'center',
                            color: '#A855F7',
                        }}
                    >
                        {t('nextPackages.subtitle')}
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {packages.map((pkg, index) => (
                        <Grid item xs={12} md={4} key={pkg.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '2px dashed rgba(147, 51, 234, 0.4)',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 16px 48px rgba(147, 51, 234, 0.3)',
                                            border: '2px dashed rgba(147, 51, 234, 0.6)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                }}
                                            >
                                                <Package size={32} />
                                            </Box>
                                            <Chip
                                                icon={<Rocket size={16} />}
                                                label="En desarrollo"
                                                sx={{
                                                    background: 'rgba(147, 51, 234, 0.2)',
                                                    color: '#A855F7',
                                                    fontWeight: 600,
                                                    border: '1px solid rgba(147, 51, 234, 0.3)',
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: 'monospace',
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#00ff00',
                                                fontSize: '1.1rem',
                                            }}
                                        >
                                            {pkg.name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {pkg.description}
                                        </Typography>
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

export default NextPackagesSection
