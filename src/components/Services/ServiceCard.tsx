import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, Typography } from '@mui/material';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
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
    >
      <Card className="h-full bg-accent/50 hover:bg-accent transition-colors duration-300 border border-secondary/20 bg-card-services">
        <CardContent className="p-6">
          <div className="text-4xl mb-4">{icon}</div>
          <Typography variant="h5" component="h3" className="font-kanit mb-3 text-secondary">
            {title}
          </Typography>
          <Typography variant="body1" className="text-tertiary font-montserrat">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;