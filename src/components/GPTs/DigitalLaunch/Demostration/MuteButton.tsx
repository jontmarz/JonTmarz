import React from 'react'
import { Box } from '@mui/material'
import { Volume2, VolumeX } from 'lucide-react'

interface MuteButtonProps {
  isMuted: boolean
  toggleMute: (e: React.MouseEvent) => void
  size?: 'small' | 'large'
}

const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, toggleMute, size = 'large' }) => {
  const dimensions = size === 'small' ? 30 : 40
  const iconSize = size === 'small' ? 16 : 20

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
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
        toggleMute(e);
      }}
    >
      {isMuted ? <VolumeX size={iconSize} color="white" /> : <Volume2 size={iconSize} color="white" />}
    </Box>
  );
};

export default MuteButton;
