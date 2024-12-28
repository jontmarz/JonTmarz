import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const { t } = useTranslation();
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
      <Card className="h-full bg-accent/50 hover:bg-accent transition-colors duration-300 border border-secondary/20">
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          className="h-48 object-cover"
        />
        <CardContent className="p-6">
          <Typography variant="h6" component="h3" className="font-kanit mb-2 text-secondary">
            {project.title} - {project.year}
          </Typography>
          <Typography variant="body2" className="text-tertiary mb-4">
            {project.description}
          </Typography>
          <div className="flex flex-wrap gap-2 m-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-primary text-tertiary border border-secondary/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ExternalLink className="w-4 h-4" />}
            className="btn-secondary"
            sx={{ display: project.url ? 'inline-flex' : 'none' }}
            href={project.url}
            target='_blank'
          >
            {t('buttons.viewProject')}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;