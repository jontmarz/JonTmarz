import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Button, Fade } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, X } from 'lucide-react'
import { DLauncerGPT } from '../../../../config/variables'

const Demonstration: React.FC = () => {
    const { t } = useTranslation('DLGpt')
    const [isPlaying, setIsPlaying] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const [isMiniature, setIsMiniature] = useState(true)
    const { videoUrl, videoThumbnail, urlDLG } = DLauncerGPT
    const sectionRef = useRef<HTMLDivElement>(null)

    const handlePlayVideo = () => {
        setIsPlaying(true)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                setIsInView(entry.isIntersecting)

                if (entry.isIntersecting) {
                    setIsMiniature(false)
                } else {
                    setIsMiniature(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const handleMinimize = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsMiniature(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleExpandMiniature = () => {
        if (isMiniature) {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <AnimatePresence>
                {isMiniature && !isInView && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            bottom: 20,
                            left: 20,
                            zIndex: 1000,
                        }}
                        onClick={handleExpandMiniature}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: '180px', md: '240px' },
                                height: { xs: '100px', md: '135px' },
                                borderRadius: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                                '&:hover': {
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                                    transform: 'translateY(-5px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Box
                                component="img"
                                src={videoThumbnail}
                                alt="Video Thumbnail"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Play color="white" size={40} />
                            </Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    color: 'white',
                                    padding: '4px 8px',
                                    textAlign: 'center',
                                    fontSize: '0.75rem',
                                }}
                            >
                                {t('demo.miniatureText') || 'Ver demostración'}
                            </Typography>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            <Box
                ref={sectionRef}
                id="Demo"
                sx={{
                    py: { xs: 8, md: 12 },
                    background: 'linear-gradient(180deg, rgba(0, 170, 255, 0.1) 0%, rgba(0, 0, 15, 0.1) 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                                    color: '#CCA70A',
                                }}
                            >
                                {t('demo.title') || 'Mira cómo funciona'}
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    maxWidth: '700px',
                                    mx: 'auto',
                                    color: 'text.secondary',
                                    fontSize: '1.125rem',
                                    mb: 4
                                }}
                            >
                                {t('demo.subtitle') || 'Observa una demostración rápida de Digital Launcher en acción'}
                            </Typography>
                        </motion.div>
                    </Box>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                '&:hover': {
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                                },
                                transition: 'all 0.3s ease',
                                maxWidth: '900px',
                                mx: 'auto',
                            }}
                        >
                            {isPlaying ? (
                                <Box
                                    component="iframe"
                                    src={videoUrl}
                                    title="Digital Launcher Demonstration"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    sx={{
                                        width: '100%',
                                        height: { xs: '240px', sm: '400px', md: '500px' },
                                        display: 'block',
                                    }}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover .play-button': {
                                            transform: 'translate(-50%, -50%) scale(1.1)',
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                    }}
                                    onClick={handlePlayVideo}
                                >
                                    <Box
                                        component="img"
                                        src={videoThumbnail}
                                        alt="Video Thumbnail"
                                        sx={{
                                            width: '100%',
                                            height: { xs: '240px', sm: '400px', md: '500px' },
                                            objectFit: 'cover',
                                            display: 'block',
                                        }}
                                    />
                                    <Box
                                        className="play-button"
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: { xs: '60px', sm: '80px' },
                                            height: { xs: '60px', sm: '80px' },
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Play size={30} color="white" />
                                    </Box>
                                </Box>
                            )}

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    borderRadius: '50%',
                                    width: 36,
                                    height: 36,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    }
                                }}
                                onClick={handleMinimize}
                            >
                                <X size={20} color="white" />
                            </Box>
                        </Box>
                    </motion.div>

                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<ExternalLink size={20} />}
                                href={urlDLG}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                }}
                            >
                                {t('demo.ctaText') || 'Prueba Digital Launcher ahora'}
                            </Button>
                        </motion.div>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Demonstration
