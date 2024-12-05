import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="top-4 right-4 z-50"
    >
      <ButtonGroup variant="contained" size="small">
        <Button
          onClick={() => changeLanguage('en')}
          sx={{backgroundColor: i18n.language === 'en' ? '#CCA70A' : '#C0C0C0'}}
        >
          EN
        </Button>
        <Button
          onClick={() => changeLanguage('es')}
          sx={{backgroundColor: i18n.language === 'es' ? '#CCA70A' : '#C0C0C0'}}
        >
          ES
        </Button>
      </ButtonGroup>
    </motion.div>
  );
};

export default LanguageSwitcher;