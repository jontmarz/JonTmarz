import React from 'react'
import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import SkillCategory from './SkillCategory'
import { useTranslation } from 'react-i18next';
import { Skill } from '../../../types'

const Skills: React.FC = () => {
  const { t } = useTranslation('OnePage')
  const skills: Record<string, Skill[]> = {
    'Languages & Frameworks': [
      { name: 'JavaScript', progress: 90, category: 'language' },
      { name: 'PHP', progress: 80, category: 'language' },
      { name: 'Python', progress: 40, category: 'language' },
      { name: 'NodeJS', progress: 70, category: 'framework' },
      { name: 'VueJS', progress: 80, category: 'framework' },
      { name: 'ReactJS', progress: 70, category: 'framework' },
    ],
    
    'CMS & Development Tools': [
      { name: 'WordPress', progress: 98, category: 'cms' },
      { name: 'Web Services', progress: 98, category: 'tools' },
      { name: 'Firebase', progress: 60, category: 'tools' },
    ],
    'Infrastructure & Cloud': [
      { name: 'AWS', progress: 40, category: 'cloud' },
      { name: 'Azure', progress: 40, category: 'cloud' },
      { name: 'CPanel', progress: 95, category: 'cloud' },
    ],
    'Databases': [
      { name: 'MySQL', progress: 80, category: 'database' },
      { name: 'MongoDB', progress: 90, category: 'database' },
    ],
    'Soft Skills': [
      { name: t('skills.mainSkill'), progress: 80, category: 'Soft Skills' },
      { name: t('skills.secondSkill'), progress: 80, category: 'Soft Skills' },
      { name: t('skills.thirdSkill'), progress: 95, category: 'Soft Skills' },
      { name: t('skills.fourthSkill'), progress: 95, category: 'Soft Skills' },
    ],
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-accent to-primary">
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
            {t('skills.title')}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, categorySkills], index) => (
              <SkillCategory
                key={category}
                title={category}
                skills={categorySkills}
                baseDelay={index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;