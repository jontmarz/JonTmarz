import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, LinearProgress } from '@mui/material';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="mb-4"
    >
      <Box className="flex justify-between items-center mb-1">
        <Typography variant="body1" className="text-tertiary font-montserrat">
          {skill.name}
        </Typography>
        <Typography variant="body2" className="text-secondary font-montserrat">
          {skill.progress}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={skill.progress}
        className="h-2 rounded-full bg-accent/30"
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#CCA70A',
            borderRadius: '9999px',
          },
        }}
      />
    </motion.div>
  );
};

export default SkillBar;