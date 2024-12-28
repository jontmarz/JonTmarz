import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container, Typography, Button } from '@mui/material';
import { Link } from "react-scroll"
import { ThumbsUp } from 'lucide-react';
import AboutSection from './AboutSection';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary to-accent">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          >
            {t('about.title')}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className='mt-4 flex flex-col justify-center'>
              <AboutSection
                title=""
                description={t('about.work')}
                icon="👨🏽‍💻"
                delay={0.2}
              />
              <AboutSection
                title=""
                description={t('about.ai')}
                icon="🤖"
                delay={0.4}
              />
            </div>
            <div className='mt-4'>
              <AboutSection
                title={t('about.teamwork.title')}
                description={t('about.teamwork.description')}
                icon="💼"
                delay={0.6}
              />
              <AboutSection
                title={t('about.passion.title')}
                description={t('about.passion.description')}
                icon="❤️"
                delay={0.8}
              />
              <AboutSection
                title={t('about.learning.title')}
                description={t('about.learning.description')}
                icon="🚀"
                delay={1}
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ThumbsUp className="w-5 h-5" />}
              className="btn-primary"
              >
              <Link to="contact" smooth={true} duration={500}>{t('buttons.about')}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;