import React from 'react'
import { Box, Container, Typography, IconButton, Grid, Stack } from '@mui/material'
import { Instagram, LinkedIn, GitHub, YouTube, X, WhatsApp } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import scrumBadge from '../../assets/scrum-foundation-certification-candidate.webp'

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialMedia = [
    { name: 'LinkedIn', icon: LinkedIn, link: 'https://www.linkedin.com/in/john-tmarz/' },
    { name: 'Whatsapp', icon: WhatsApp, link: 'https://api.whatsapp.com/send?phone=573194356458&text=Hola%20%F0%9F%91%8B.%20Quiero%20iniciar%20un%20nuevo%20proyecto%20de%20desarrollo.%20' },
    { name: 'GitHub', icon: GitHub, link: 'https://github.com/jontmarz' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/jon_tmarz/' },
    { name: 'YouTube', icon: YouTube, link: 'https://www.youtube.com/user/hardjonedi' },
    { name: 'X', icon: X, link: 'https://twitter.com/JonTMarz' },
  ]

  const certifications = [
    { name: 'Scrum Profesional', link: 'https://www.credly.com/badges/d77dc8d9-18d9-426f-b038-cb18eac840a4/public_url', badge: scrumBadge },
  ]

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: '#00000F',
        py: 3,
        mt: 'auto',
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
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Jon Tmarz. {t('footer.copyright')}.
            </Typography>
            </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;