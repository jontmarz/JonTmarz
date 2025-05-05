import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Globe, 
  MessageSquare, 
  Calendar, 
  LineChart,
  ArrowRight
} from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: <Globe size={32} />,
      title: '¿Qué contenidos incluir en tu web?',
      description: 'Descubre exactamente qué mostrar para cautivar a tu audiencia.',
      color: '#4338CA',
    },
    {
      icon: <MessageSquare size={32} />,
      title: '¿Cómo crear publicaciones que destaquen?',
      description: 'Haz que cada post cuente con ideas y estructura personalizadas.',
      color: '#9333EA',
    },
    {
      icon: <Calendar size={32} />,
      title: '¿Necesitas un calendario de contenidos?',
      description: 'Organiza tu estrategia digital en segundos.',
      color: '#DB2777',
    },
    {
      icon: <LineChart size={32} />,
      title: '¿Quieres entender mejor tu marca?',
      description: 'Obtén diagnósticos automáticos y consejos de acción.',
      color: '#E11D48',
    }
  ];

  return (
    <Box 
      id="soluciones"
      sx={{ 
        py: { xs: 8, md: 12 },
        // backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 2,
                fontWeight: 700,
              }}
            >
              Soluciones instantáneas
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="subtitle1" 
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: 'text.secondary',
                fontSize: '1.125rem'
              }}
            >
              Respuestas y estrategias personalizadas para hacer crecer tu negocio digital
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mb: 3,
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 56,
                          height: 56,
                          borderRadius: '16px',
                          backgroundColor: `${solution.color}10`,
                          color: solution.color,
                          flexShrink: 0,
                        }}
                      >
                        {solution.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                        {solution.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {solution.description}
                    </Typography>
                    <Button 
                      variant="text" 
                      color="primary" 
                      endIcon={<ArrowRight size={16} />}
                      sx={{ 
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(99, 102, 241, 0.08)',
                        }
                      }}
                    >
                      Saber más
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionsSection;