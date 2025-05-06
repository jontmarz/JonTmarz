import React from 'react';
import { Box } from '@mui/material';
import { Play } from 'lucide-react';
import MuteButton from './MuteButton';

interface VideoPlayerProps {
  videoUrl: string;
  videoThumbnail: string;
  isPlaying: boolean;
  isMuted: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  handleTimeUpdate: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  toggleMute: (e: React.MouseEvent) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVideoLoaded: (isLoaded: boolean) => void;
  videoLoaded: boolean;
  isInView: boolean;
  controls?: boolean;
  fullscreen?: boolean;
  videoEnded?: boolean; // New prop
  onPlayClick?: () => void; // New prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  videoThumbnail,
  isPlaying,
  isMuted,
  videoRef,
  handleTimeUpdate,
  toggleMute,
  setIsPlaying,
  setVideoLoaded,
  videoLoaded,
  isInView,
  controls = false,
  fullscreen = false,
  videoEnded = false,
  onPlayClick
}) => {
  // Handle play button click with direct handler call
  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlayClick) {
      console.log("Play button clicked in VideoPlayer");
      onPlayClick();
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {!fullscreen && (
        <Box
          sx={{
            width: '100%',
            height: { xs: '240px', sm: '400px', md: fullscreen ? '80vh' : '500px' },
            backgroundColor: '#111',
            display: isInView ? 'none' : 'block',
          }}
        />
      )}
      
      <Box
        component="video"
        ref={videoRef}
        src={videoUrl}
        autoPlay={isInView && isPlaying && !videoEnded}
        muted={isMuted}
        controls={controls && !videoEnded} // Hide controls when ended
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        sx={{
          position: isInView || fullscreen ? 'relative' : 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: fullscreen ? '80vh' : { xs: '240px', sm: '400px', md: '500px' },
          display: 'block',
          objectFit: 'cover',
          maxWidth: fullscreen ? '1200px' : 'none',
        }}
      />
      
      {/* Play overlay when video ended */}
      {videoEnded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={handlePlayButtonClick}
        >
          <Box
            sx={{
              width: { xs: '70px', sm: '100px' },
              height: { xs: '70px', sm: '100px' },
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <Play size={fullscreen ? 50 : 40} color="white" />
          </Box>
        </Box>
      )}
      
      {/* Thumbnail overlay if not loaded yet */}
      {!videoLoaded && isInView && !videoEnded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img 
            src={videoThumbnail} 
            alt="Video Thumbnail" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          zIndex: 10
        }}
      >
        <MuteButton isMuted={isMuted} toggleMute={toggleMute} size={fullscreen ? 'large' : 'small'} />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
