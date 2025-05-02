import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-scroll'
import { Handshake } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation('OnePage');

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary bg-hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-50" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
        >
          {t('hero.greeting')}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold mb-6 text-tertiary"
        >
          {t('hero.title')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl mb-8 text-tertiary max-w-2xl mx-auto"
        >
          {t('hero.description')}
        </motion.p>
        <Grid container spacing={3} alignItems="center" justifyContent="space-around">
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Handshake className="w-5 h-5" />}
                className="btn-primary"
              >
                <Link to="contact" smooth={true} duration={500}>{t('buttons.hero')}</Link>
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Handshake className="w-5 h-5" />}
                className="btn-primary"
                href="https://calendly.com/jontmarz/30min?back=1"
                target='_blank'
              >
                {t('buttons.bookCall')}
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
};

export default Hero;