import React from 'react'
import { Box, Container, Typography, IconButton, Stack } from '@mui/material'
import { Instagram, LinkedIn, GitHub, YouTube, X } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialMedia = [
    { name: 'LinkedIn', icon: LinkedIn, link: 'https://www.linkedin.com/in/john-tmarz/' },
    { name: 'GitHub', icon: GitHub, link: 'https://github.com/jontmarz' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/jon_tmarz/' },
    { name: 'YouTube', icon: YouTube, link: 'https://www.youtube.com/user/hardjonedi' },
    { name: 'X', icon: X, link: 'https://twitter.com/JonTMarz' },
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
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          {/* Redes Sociales */}
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

          {/* Copyright */}
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Jon Tmarz. Todos los derechos reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;