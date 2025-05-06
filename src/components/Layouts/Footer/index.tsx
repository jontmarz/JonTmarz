import React from 'react'
import { Box, Container, Typography, IconButton, Grid, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { socialMedia, certifications } from '../../../config/variables'
import ChatBot from '../../ChatBot'
import logo from '/src/assets/nuevo_logo3.webp'

const Footer: React.FC = () => {
  const { t } = useTranslation('OnePage')

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: '#00000F',
        py: 3,
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Redes Sociales */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.social')}
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialMedia.map((item) => (
                <IconButton
                  key={item.name}
                  aria-label={item.name}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#00000F' }}
                >
                  <item.icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>
            
          {/* Certificaciones */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.cert')}
            </Typography>
            <Stack spacing={1}>
              {certifications.map((item) => (
                <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.badge} alt={item.name} style={{ height: 70 }} />
                  <span className="smallText text-center">{item.name}</span>
                </a>
              ))}
            </Stack>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              {/* Logo */}
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                  src={logo} 
                  alt="Jon Tmarz Logo" 
                  style={{ height: 100, }} 
                />
              </Link>
              
              {/* Copyright */}
              <Typography variant="body2" align="center">
                © {new Date().getFullYear()} Jon Tmarz. {t('footer.copyright')} | <Link to="/policy-privacy">{t('footer.privacy')}</Link>.
              </Typography>
            </Box>
            </Grid>
            {/* Chatbot */}
            <ChatBot />
        </Grid>


      </Container>
    </Box>
  );
};

export default Footer;