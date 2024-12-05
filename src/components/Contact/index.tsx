import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import { Grid, Container, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import jonTmarz from '../../assets/img-jon-tmarz.webp'

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary to-accent">
      <Container>
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={12} >
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
                {t('contact.title')}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
              <Typography component='p' sx={{mb: '1em'}}>{t('contact.resume')}</Typography>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<FileDown className="w-5 h-5" />}
                  className="btn-primary"
                  href="../assets/documents/JT_resumé.pdf"
                  download="JT_resumé.pdf"
                  target="_blank"
                >
                  {t('buttons.downloadCV')}
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={jonTmarz} alt="Contact" className="w-full h-auto" />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
