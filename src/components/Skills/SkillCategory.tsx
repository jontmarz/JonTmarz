import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import SkillBar from './SkillBar';
import { Skill } from '../../types';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  baseDelay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, baseDelay }) => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: baseDelay }}
      >
        <Typography
          variant="h5"
          component="h3"
          className="mb-4 font-kanit text-secondary"
        >
          {title}
        </Typography>
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={baseDelay + index * 0.1}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCategory;