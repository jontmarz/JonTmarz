import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import { Link } from "react-scroll"
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { useTranslation } from 'react-i18next'
import { HandHelping } from 'lucide-react'

const Services: React.FC = () => {
  const { t } = useTranslation('OnePage')
  const services = [
    {
      icon: '🏗️',
      title: t('services.items.architecture.title'),
      description: t('services.items.architecture.description'),
      delay: 0.2,
    },
    {
      icon: '💻',
      title: t('services.items.webapps.title'),
      description: t('services.items.webapps.description'),
      delay: 0.4,
    },
    {
      icon: '🧠',
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      delay: 0.6,
    },
    {
      icon: '🤖',
      title: t('services.items.automation.title'),
      description: t('services.items.automation.description'),
      delay: 0.8,
    },
    /* {
      icon: '📈',
      title: t('services.items.seo.title'),
      description: t('services.items.seo.description'),
      delay: 1.0,
    }, */
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-accent to-primary bg-services">
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
            sx={{ mb:'1em'}}
          >
            {t('services.title')}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
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
              startIcon={<HandHelping className="w-5 h-5" />}
              className="btn-primary"
              sx={{mt: '2em'}}
              >
              <Link to="contact" smooth={true} duration={500}>{t('buttons.service')}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;