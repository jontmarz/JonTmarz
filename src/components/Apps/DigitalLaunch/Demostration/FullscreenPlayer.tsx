import React from 'react'
import { Box } from '@mui/material'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import VideoPlayer from './VideoPlayer'

interface FullscreenPlayerProps {
  videoUrl: string
  videoThumbnail: string
  isPlaying: boolean
  isMuted: boolean
  videoRef: React.RefObject<HTMLVideoElement>
  handleTimeUpdate: (e: React.SyntheticEvent<HTMLVideoElement>) => void
  toggleMute: (e: React.MouseEvent) => void
  setIsPlaying: (isPlaying: boolean) => void
  handleClose: (e: React.MouseEvent) => void
  setVideoLoaded: (isLoaded: boolean) => void
  videoLoaded: boolean
  videoEnded?: boolean
  onPlayClick?: () => void
}

const FullscreenPlayer: React.FC<FullscreenPlayerProps> = ({
  videoUrl,
  videoThumbnail,
  isPlaying,
  isMuted,
  videoRef,
  handleTimeUpdate,
  toggleMute,
  setIsPlaying,
  handleClose,
  setVideoLoaded,
  videoLoaded,
  videoEnded = false,
  onPlayClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1500,
        backgroundColor: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <VideoPlayer
        videoUrl={videoUrl}
        videoThumbnail={videoThumbnail}
        isPlaying={isPlaying}
        isMuted={isMuted}
        videoRef={videoRef}
        handleTimeUpdate={handleTimeUpdate}
        toggleMute={toggleMute}
        setIsPlaying={setIsPlaying}
        setVideoLoaded={setVideoLoaded}
        videoLoaded={videoLoaded}
        isInView={true}
        controls={true}
        fullscreen={true}
        videoEnded={videoEnded}
        onPlayClick={onPlayClick}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }
        }}
        onClick={handleClose}
      >
        <X size={24} color="white" />
      </Box>
    </motion.div>
  );
};

export default FullscreenPlayer;
