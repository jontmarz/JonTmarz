import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Tv2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PlayButton from './PlayButton'
import MuteButton from './MuteButton'

interface MiniaturePlayerProps {
  videoUrl: string
  videoThumbnail: string
  isPlaying: boolean
  miniVideoRef: React.RefObject<HTMLVideoElement>
  handleTimeUpdate: (e: React.SyntheticEvent<HTMLVideoElement>) => void
  handlePlayPause: (e: React.MouseEvent) => void
  handleExpand: () => void
  toggleMute: (e: React.MouseEvent) => void
  isMuted: boolean
  videoInitialized: boolean
  onEnded?: () => void
}

const MiniaturePlayer: React.FC<MiniaturePlayerProps> = ({
  videoUrl,
  videoThumbnail,
  isPlaying,
  miniVideoRef,
  handleTimeUpdate,
  handlePlayPause,
  handleExpand,
  toggleMute,
  isMuted,
  videoInitialized,
  onEnded = () => {}
}) => {
  const { t } = useTranslation('DLGpt')

  return (
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
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '180px', md: '240px' },
          height: { xs: '100px', md: '135px' },
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'default',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        {isPlaying ? (
          <Box component="video"
            ref={miniVideoRef}
            src={videoUrl}
            autoPlay={videoInitialized}
            muted
            playsInline
            loop={false}
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => {}}
            onPause={() => {}}
            onEnded={onEnded}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
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
        )}
        
        {/* Video Controls Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top controls */}
          <Box
            sx={{
              p: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(0, 170, 255, 0.7)',
                borderRadius: '4px',
                px: 1,
                py: 0.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(0, 170, 255, 0.9)',
                },
              }}
              onClick={handleExpand}
            >
              <Tv2 size={16} color="white" />
              {/* <Typography variant="caption" sx={{ color: 'white', fontSize: '0.7rem' }}>
                {t('demo.expandText') || 'Expandir'}
              </Typography> */}
            </Box>
          </Box>

          {/* Bottom controls */}
          <Box
            sx={{
              p: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            }}
          >
            <PlayButton 
              isPlaying={isPlaying} 
              onClick={handlePlayPause} 
              size="small" 
            />
            <MuteButton 
              isMuted={isMuted} 
              toggleMute={toggleMute} 
              size="small" 
            />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default MiniaturePlayer;
