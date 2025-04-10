import React from 'react'
import { Box, Container, Typography, IconButton, Grid, Stack } from '@mui/material'
import { socialMedia, certifications } from '../../config/variables'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '/src/assets/nuevo_logo3.webp'

const Footer: React.FC = () => {
  const { t } = useTranslation();

  /* const socialMedia = [
    { name: 'LinkedIn', icon: LinkedIn, link: 'https://www.linkedin.com/in/john-tmarz/' },
    { name: 'Whatsapp', icon: WhatsApp, link: 'https://api.whatsapp.com/send?phone=573194356458&text=Hola%20%F0%9F%91%8B.%20Quiero%20iniciar%20un%20nuevo%20proyecto%20de%20desarrollo.%20' },
    { name: 'GitHub', icon: GitHub, link: 'https://github.com/jontmarz' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/jon_tmarz/' },
    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/jon.martz.co/' },
    // { name: 'YouTube', icon: YouTube, link: 'https://www.youtube.com/user/hardjonedi' },
    { name: 'X', icon: X, link: 'https://twitter.com/JonTMarz' },
    { name: 'Calendly', icon: EditCalendar, link: 'https://calendly.com/jontmarz' },
  ] */

 /*  const certifications = [
    { name: 'Scrum Profesional', link: 'https://www.credly.com/badges/d77dc8d9-18d9-426f-b038-cb18eac840a4/public_url', badge: scrumBadge },
  ] */

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
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;