import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';

interface AboutSectionProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <Typography variant="h6" className="flex items-center gap-2 mb-2 text-secondary font-kanit">
        <span className="text-2xl">{icon}</span>
        {title}
      </Typography>
      <Typography variant="body1" className="text-tertiary font-montserrat">
        {description}
      </Typography>
    </motion.div>
  );
};

export default AboutSection;