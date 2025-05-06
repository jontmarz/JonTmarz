import React from 'react'
import { Box } from '@mui/material'
import { Play } from 'lucide-react'

interface PlayButtonProps {
  isPlaying: boolean
  onClick: (e: React.MouseEvent) => void
  size?: 'small' | 'large'
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, onClick, size = 'large' }) => {
  const dimensions = size === 'small' ? 30 : 40
  const iconSize = size === 'small' ? 16 : 30
  const pauseSize = size === 'small' ? 16 : 20

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: dimensions,
        height: dimensions,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {isPlaying ? (
        <Box 
          component="span" 
          sx={{ 
            width: pauseSize, 
            height: pauseSize, 
            backgroundColor: 'white', 
            borderRadius: 0.5 
          }} 
        />
      ) : (
        <Play size={iconSize} color="white" />
      )}
    </Box>
  );
};

export default PlayButton;
