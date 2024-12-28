import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Project } from '../../../types';

interface ProjectTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-8">
      <Tabs
        value={activeCategory}
        onChange={(_, newValue) => onCategoryChange(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        className="bg-accent/30 rounded-lg"
      >
        {categories.map((category) => (
          <Tab
            key={category}
            label={category}
            value={category}
            className={`text-tertiary ${
              activeCategory === category ? 'text-secondary' : ''
            }`}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ProjectTabs;