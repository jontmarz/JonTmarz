import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Typography, Button } from '@mui/material'
import { Link } from "react-scroll"
import { ThumbsUp } from 'lucide-react'
import AboutSection from './AboutSection'

const About: React.FC = () => {
  const { t } = useTranslation('OnePage')

  // Función para renderizar HTML desde un texto con posibles saltos de línea
  const renderHTML = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        <div dangerouslySetInnerHTML={{ __html: line }} />
        {i !== text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Obtenemos el array de párrafos directamente desde las traducciones
  const paragraphs = t('about.paragraph', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon?: string;
  }>;

  // Mapeamos los párrafos a los objetos que necesita AboutSection
  // y preparamos el contenido HTML para ser renderizado
  const aboutParagraphs = paragraphs.map((paragraph, index) => ({
    title: renderHTML(paragraph.title),
    description: renderHTML(paragraph.description),
    icon: paragraph.icon || ["🖥️", "🤖", "👨‍🏫", "❤️", "👥", "🚀", "📚"][index % 7] || "✨",
    delay: 0.2 + (index * 0.1),
  }));

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
            {aboutParagraphs.map((item, idx) => (
              <AboutSection
                key={idx}
                title={item.title}
                description={item.description}
                icon={item.icon}
                delay={item.delay}
              />
            ))}
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