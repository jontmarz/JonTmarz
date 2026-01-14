import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { Code, Brain, Zap } from 'lucide-react'
import imgJohn from '../../assets/img-jon-tmarz2.webp'

const Hero: React.FC = () => {
    const { t } = useTranslation('AboutMe')

    return (
        <Box
            id="hero"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                py: { xs: 2, md: 4 },
                minHeight: { xs: 'auto', md: '80vh' },
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Vectores decorativos de fondo */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    overflow: 'hidden',
                }}
            >
                {/* Círculo grande azul */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: { xs: '300px', md: '600px' },
                        height: { xs: '300px', md: '600px' },
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0, 170, 255, 0.15) 0%, rgba(0, 170, 255, 0) 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Círculo mediano */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '10%',
                        width: { xs: '200px', md: '400px' },
                        height: { xs: '200px', md: '400px' },
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0, 170, 255, 0.1) 0%, rgba(0, 170, 255, 0) 70%)',
                        filter: 'blur(30px)',
                    }}
                />
                {/* Líneas diagonales */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        left: '-10%',
                        width: '150px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 170, 255, 0.3), transparent)',
                        transform: 'rotate(-45deg)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '30%',
                        right: '20%',
                        width: '200px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 170, 255, 0.3), transparent)',
                        transform: 'rotate(45deg)',
                    }}
                />
                {/* Puntos decorativos */}
                {[...Array(15)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'absolute',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 170, 255, 0.3)',
                            animation: 'float 3s ease-in-out infinite',
                            animationDelay: `${i * 0.2}s`,
                            '@keyframes float': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-10px)' },
                            },
                        }}
                    />
                ))}
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Texto a la izquierda */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                                    fontWeight: 800,
                                    mb: 3,
                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #00AAFF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    lineHeight: 1.2,
                                }}
                            >
                                {t('hero.title')}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    mb: 4,
                                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                                    lineHeight: 1.6,
                                }}
                            >
                                {t('hero.subtitle')}
                            </Typography>
                            {/* Elementos decorativos con el texto */}
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                {[
                                    { icon: <Code size={24} />, text: 'Full Stack' },
                                    { icon: <Brain size={24} />, text: 'IA' },
                                    { icon: <Zap size={24} />, text: 'Automatización' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    >
                                        <Chip
                                            icon={item.icon}
                                            label={item.text}
                                            sx={{
                                                backgroundColor: 'rgba(0, 170, 255, 0.1)',
                                                color: '#00AAFF',
                                                border: '1px solid rgba(0, 170, 255, 0.3)',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                py: 2.5,
                                                px: 1,
                                                '& .MuiChip-icon': {
                                                    color: '#00AAFF',
                                                },
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Imagen a la derecha */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {/* Resplandor detrás de la imagen */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '90%',
                                        height: '90%',
                                        background: 'radial-gradient(circle, rgba(0, 170, 255, 0.3) 0%, transparent 70%)',
                                        filter: 'blur(60px)',
                                        zIndex: 0,
                                    }}
                                />
                                {/* Imagen */}
                                <Box
                                    component="img"
                                    src={imgJohn}
                                    alt="John E. Torres M."
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: { xs: '350px', md: '500px' },
                                        objectFit: 'contain',
                                        position: 'relative',
                                        zIndex: 1,
                                        filter: 'drop-shadow(0 20px 40px rgba(0, 170, 255, 0.3))',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            filter: 'drop-shadow(0 25px 50px rgba(0, 170, 255, 0.5))',
                                        },
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Hero
