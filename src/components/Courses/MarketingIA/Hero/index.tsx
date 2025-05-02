import React from 'react'
import { Button, Container, Typography, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { courseWebM } from '../../../../config/variables' // Import background image with correct file extension

const Hero: React.FC = () => {
  const { t } = useTranslation('CurseWeb')
  const { imgHero, urlHotmartCP } = courseWebM // Image of the course

  return (
    <>
      {/* Hero Section */}
      <Box 
        id="hero" 
        component="header" 
        className="py-16 md:py-24 relative"
        sx={{
          position: 'relative',
          backgroundImage: `url(${imgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Add parallax effect
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#00000F',
            opacity: 0.7,
            zIndex: 1
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Box className="max-w-4xl mx-auto text-center">
            <Typography component="h1" variant="h2" className="text-[#F4CE2C]" gutterBottom>
              {t('hero.title')}
            </Typography>
            <Typography variant="h5" className="text-white mb-8">
              {t('hero.description')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="px-8 text-lg"
              sx={{ 
                my: 5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  animation: 'doubleZoom 1.5s ease-in-out'
                },
                '@keyframes doubleZoom': {
                  '0%': { transform: 'scale(1)' },
                  '25%': { transform: 'scale(1.5)' },
                  '50%': { transform: 'scale(1)' },
                  '75%': { transform: 'scale(1.5)' },
                  '100%': { transform: 'scale(1)' }
                }
              }}
              href={urlHotmartCP}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.btnCta')}
            </Button>
            <Typography variant="h5" className="text-white mb-8">
              {t('hero.description2')}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Hero