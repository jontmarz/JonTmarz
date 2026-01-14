import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Stack, Button, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { Linkedin, Github, Instagram } from 'lucide-react'
import { socialMedia } from '../../../../config/variables'
import jonImage from '/src/assets/img-jon-tmarz.webp'

const AboutSection: React.FC = () => {
    const { t } = useTranslation('TributosCo')

    const socialLinks = [
        {
            id: 'linkedin',
            label: t('about.links.linkedin'),
            url: socialMedia.find(item => item.name.toLowerCase() === 'linkedin')?.link || 'https://www.linkedin.com',
            icon: <Linkedin size={24} />,
            color: '#0A66C2',
        },
        {
            id: 'github',
            label: t('about.links.github'),
            url: socialMedia.find(item => item.name.toLowerCase() === 'github')?.link || 'https://github.com',
            icon: <Github size={24} />,
            color: '#FFFFFF',
        },
        {
            id: 'instagram',
            label: t('about.links.instagram'),
            url: socialMedia.find(item => item.name.toLowerCase() === 'instagram')?.link || 'https://www.instagram.com',
            icon: <Instagram size={24} />,
            color: '#E4405F',
        },
    ]

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 10, md: 14 },
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 15, 1) 30%, rgba(0, 0, 15, 1) 70%, rgba(168, 85, 247, 0.15) 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
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
                                position: 'relative',
                                width: { xs: '120px', md: '120px' },
                                mx: 'auto',
                                padding: '4px',
                                background: 'linear-gradient(270deg, #f5f5f5 0%, #c0c0c0 100%)',
                                borderRadius: '50%',
                            }}
                        >
                            <Avatar
                                src={jonImage}
                                alt="Jon Tmarz"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2rem', md: '3rem' },
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #9333EA 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {t('about.title')}
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                maxWidth: '700px',
                                lineHeight: 1.8,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                            }}
                        >
                            {t('about.description')}
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: '#A855F7',
                                fontWeight: 600,
                                fontStyle: 'italic',
                                maxWidth: '700px',
                                lineHeight: 1.8,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                            }}
                        >
                            {t('about.vision')}
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            sx={{ mt: 4 }}
                        >
                            {socialLinks.map((link) => (
                                <Button
                                    key={link.id}
                                    variant="outlined"
                                    size="large"
                                    startIcon={link.icon}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: link.color,
                                        borderColor: link.color,
                                        borderWidth: 2,
                                        fontWeight: 700,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: link.color,
                                            bgcolor: `${link.color}20`,
                                            transform: 'translateY(-2px)',
                                            borderWidth: 2,
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </Stack>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    )
}

export default AboutSection
