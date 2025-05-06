import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Button } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { DLauncerGPT } from '../../../../config/variables'

// Import subcomponents
import MiniaturePlayer from './MiniaturePlayer'
import VideoPlayer from './VideoPlayer'
import FullscreenPlayer from './FullscreenPlayer'

const Demonstration: React.FC = () => {
    const { t } = useTranslation('DLGpt')
    const [isPlaying, setIsPlaying] = useState(true) // Start playing automatically
    const [isInView, setIsInView] = useState(false)
    const [isMiniature, setIsMiniature] = useState(true)
    const [videoTime, setVideoTime] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [videoInitialized, setVideoInitialized] = useState(false)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [videoEnded, setVideoEnded] = useState(false)
    
    const { videoUrl, videoThumbnail, urlDLG } = DLauncerGPT
    
    const sectionRef = useRef<HTMLDivElement>(null)
    const mainVideoRef = useRef<HTMLVideoElement>(null)
    const miniVideoRef = useRef<HTMLVideoElement>(null)

    // Auto start video when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoInitialized(true);
            handlePlayVideo();
        }, 1000); // Small delay to ensure DOM is fully rendered
        
        return () => clearTimeout(timer);
    }, [])

    // Handle video end events
    useEffect(() => {
        const handleVideoEnded = () => {
            setIsPlaying(false)
            setVideoEnded(true)
        }

        // Set up event listeners for video end
        if (mainVideoRef.current) {
            mainVideoRef.current.addEventListener('ended', handleVideoEnded)
        }
        if (miniVideoRef.current) {
            miniVideoRef.current.addEventListener('ended', handleVideoEnded)
        }

        // Cleanup event listeners
        return () => {
            if (mainVideoRef.current) {
                mainVideoRef.current.removeEventListener('ended', handleVideoEnded)
            }
            if (miniVideoRef.current) {
                miniVideoRef.current.removeEventListener('ended', handleVideoEnded)
            }
        }
    }, [mainVideoRef.current, miniVideoRef.current])

    // Force video reload if it doesn't display correctly
    useEffect(() => {
        if (isInView && mainVideoRef.current) {
            // Force reload of video element if it's not showing
            if (!videoLoaded) {
                const currentTime = miniVideoRef.current?.currentTime || 0;
                
                // Clone and replace the video element to force a fresh load
                if (mainVideoRef.current) {
                    const parent = mainVideoRef.current.parentNode;
                    if (parent) {
                        const oldVideo = mainVideoRef.current;
                        const newVideo = oldVideo.cloneNode(true) as HTMLVideoElement;
                        
                        // Set up event listeners for the new video
                        newVideo.onloadedmetadata = () => {
                            newVideo.currentTime = currentTime;
                            if (isPlaying) {
                                newVideo.play().catch(e => console.error("Error playing cloned video:", e));
                            }
                            setVideoLoaded(true);
                        }
                        
                        newVideo.onplay = () => setIsPlaying(true)
                        newVideo.onpause = () => setIsPlaying(false)
                        newVideo.ontimeupdate = (e) => handleTimeUpdate(e as any)
                        
                        parent.replaceChild(newVideo, oldVideo);
                        (mainVideoRef as React.MutableRefObject<HTMLVideoElement>).current = newVideo
                    }
                }
            }
        }
    }, [isInView]);

    useEffect(() => {
        // Force play the miniature video when it becomes visible
        if (miniVideoRef.current && videoInitialized && !isInView && isMiniature) {
            // Use a timeout to ensure DOM is ready
            const timer = setTimeout(() => {
                if (miniVideoRef.current) {
                    miniVideoRef.current.play()
                        .catch(err => {
                            console.error("Could not autoplay miniature video:", err)
                            // If autoplay fails, show the thumbnail instead
                            setIsPlaying(false)
                        });
                }
            }, 300);
            
            return () => clearTimeout(timer)
        }
    }, [videoInitialized, isInView, isMiniature])

    // Main observer effect - handle video visibility transitions
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                const wasVisible = isInView
                const newVisible = entry.isIntersecting
                
                setIsInView(newVisible)

                // Only switch modes if video has started playing
                if (videoInitialized) {
                    // When section comes into view
                    if (!wasVisible && newVisible) {
                        setIsMiniature(false)
                        
                        // Ensure main video plays at miniature's current time
                        if (mainVideoRef.current && miniVideoRef.current) {
                            const currentTime = miniVideoRef.current.currentTime
                            mainVideoRef.current.currentTime = currentTime
                            
                            // Force load and play
                            mainVideoRef.current.load()
                            setTimeout(() => {
                                if (mainVideoRef.current) {
                                    mainVideoRef.current.currentTime = currentTime
                                    mainVideoRef.current.play().catch(err => console.error("Error playing main video:", err))
                                }
                            }, 100)
                        }
                    } 
                    // When section goes out of view
                    else if (wasVisible && !newVisible) {
                        setIsMiniature(true)
                        
                        // Ensure miniature plays at main's current time
                        if (miniVideoRef.current && mainVideoRef.current) {
                            miniVideoRef.current.currentTime = mainVideoRef.current.currentTime
                            miniVideoRef.current.play().catch(err => console.error("Error playing mini video:", err))
                        }
                    }
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        };
    }, [isInView, videoInitialized]);

    const handlePlayVideo = () => {
        console.log("Play video called, videoEnded:", videoEnded)
        
        // If video has ended, restart it with additional safeguards
        if (videoEnded) {
            setVideoEnded(false)
            // Reset video position to beginning
            if (mainVideoRef.current) {
                mainVideoRef.current.currentTime = 0
                
                // Wait a tiny bit before triggering play
                setTimeout(() => {
                    if (mainVideoRef.current) {
                        const playPromise = mainVideoRef.current.play()
                        if (playPromise !== undefined) {
                            playPromise
                                .then(() => {
                                    setIsPlaying(true)
                                    console.log("Video playing after restart")
                                })
                                .catch(err => console.error("Error playing video after restart:", err))
                        }
                    }
                }, 50)
            }
            if (miniVideoRef.current) {
                miniVideoRef.current.currentTime = 0
            }
            return // Exit early, we already handled the play
        }
        
        setIsPlaying(true)
        
        // Determine which video to play based on visibility
        if (isInView || isFullscreen) {
            if (mainVideoRef.current) {
                mainVideoRef.current.play().catch(err => console.error("Error playing video:", err))
            }
        } else {
            if (miniVideoRef.current) {
                miniVideoRef.current.play().catch(err => console.error("Error playing video:", err))
            }
        }
    };
    
    const handlePauseVideo = () => {
        setIsPlaying(false);
        if (mainVideoRef.current) {
            mainVideoRef.current.pause()
        }
        if (miniVideoRef.current) {
            miniVideoRef.current.pause()
        }
    };

    // Handle time synchronization between videos
    const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const currentTime = e.currentTarget.currentTime
        setVideoTime(currentTime)
        
        // Only sync if time difference is significant
        if (e.currentTarget === mainVideoRef.current && miniVideoRef.current) {
            if (Math.abs(miniVideoRef.current.currentTime - currentTime) > 0.5) {
                miniVideoRef.current.currentTime = currentTime
            }
        } else if (e.currentTarget === miniVideoRef.current && mainVideoRef.current) {
            if (Math.abs(mainVideoRef.current.currentTime - currentTime) > 0.5) {
                mainVideoRef.current.currentTime = currentTime
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsMuted(!isMuted)
    };
    
    useEffect(() => {
        if (mainVideoRef.current) {
            mainVideoRef.current.muted = isMuted
        }
        if (miniVideoRef.current) {
            miniVideoRef.current.muted = true // Miniature always muted
        }
    }, [isMuted])
    
    useEffect(() => {
        if (isPlaying) {
            if (mainVideoRef.current && Math.abs(mainVideoRef.current.currentTime - videoTime) > 0.5) {
                mainVideoRef.current.currentTime = videoTime
            }
            if (miniVideoRef.current && Math.abs(miniVideoRef.current.currentTime - videoTime) > 0.5) {
                miniVideoRef.current.currentTime = videoTime
            }
        }
    }, [videoTime, isPlaying])

    const handleMinimize = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsMiniature(true)
        setIsFullscreen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    const handleExpandMiniature = () => {
        if (isMiniature) {
            setIsFullscreen(false); // Close fullscreen if open
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    };
    
    /* const handleFullscreenClose = () => {
        setIsFullscreen(false);
    }; */

    const handleMiniaturePlayPause = (e: React.MouseEvent) => {
        e.stopPropagation() // Prevent navigation when clicking play/pause
        
        if (isPlaying) {
            handlePauseVideo()
        } else {
            handlePlayVideo()
        }
    };

    return (
        <>
            <AnimatePresence>
                {isMiniature && !isInView && !isFullscreen && (
                    <MiniaturePlayer
                        videoUrl={videoUrl}
                        videoThumbnail={videoThumbnail}
                        isPlaying={isPlaying}
                        miniVideoRef={miniVideoRef}
                        handleTimeUpdate={handleTimeUpdate}
                        handlePlayPause={handleMiniaturePlayPause}
                        handleExpand={handleExpandMiniature}
                        toggleMute={toggleMute}
                        isMuted={isMuted}
                        videoInitialized={videoInitialized}
                    />
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {isFullscreen && (
                    <FullscreenPlayer
                        videoUrl={videoUrl}
                        videoThumbnail={videoThumbnail}
                        isPlaying={isPlaying}
                        isMuted={isMuted}
                        videoRef={mainVideoRef}
                        handleTimeUpdate={handleTimeUpdate}
                        toggleMute={toggleMute}
                        setIsPlaying={setIsPlaying}
                        handleClose={handleMinimize}
                        setVideoLoaded={setVideoLoaded}
                        videoLoaded={videoLoaded}
                    />
                )}
            </AnimatePresence>

            <Box
                ref={sectionRef}
                id="demo"
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
                            <VideoPlayer
                                videoUrl={videoUrl}
                                videoThumbnail={videoThumbnail}
                                isPlaying={isPlaying}
                                isMuted={isMuted}
                                videoRef={mainVideoRef}
                                handleTimeUpdate={handleTimeUpdate}
                                toggleMute={toggleMute}
                                setIsPlaying={setIsPlaying}
                                setVideoLoaded={setVideoLoaded}
                                videoLoaded={videoLoaded}
                                isInView={isInView}
                                controls={isInView && !videoEnded}
                                videoEnded={videoEnded}
                                onPlayClick={handlePlayVideo}
                            />
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
