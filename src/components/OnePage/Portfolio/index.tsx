import React, { useState, useMemo } from 'react'
import { Container, Typography, Button } from '@mui/material'
import { Link } from "react-scroll"
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Handshake, CalendarSearch } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectTabs from './ProjectTabs'
import { Project } from '../../../types'

const Portfolio: React.FC = () => {
  const { t } = useTranslation('OnePage')
  const [activeCategory, setActiveCategory] = useState('ReactJS')

  const projectImages = import.meta.glob('../../../assets/projects/*.{webp,png,jpg,jpeg,svg}', { eager: true })
  const images: Record<string, string> = {}
  for (const path in projectImages) {
    const fileName = path.split('/').pop(); // Extrae el nombre del archivo
    if (fileName) images[fileName] = (projectImages[path] as any).default || projectImages[path]
  }

  const projects: Project[] = [
    {
      id: 1,
      year: 2021,
      title: t('portfolio.websites.arrigui.title'),
      description: t('portfolio.websites.arrigui.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Elementor'],
      image: images['arrigui.webp'],
      url: 'https://arrigui.com/'
    },
    {
      id: 2,
      year: 2021,
      title: t('portfolio.websites.ceniflores.title'),
      description: t('portfolio.websites.ceniflores.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Elementor'],
      image: images['ceniflores.webp'],
      url: 'https://ceniflores.org/'
    },
    {
      id: 3,
      year: 2021,
      title: t('portfolio.websites.fresar.title'),
      description: t('portfolio.websites.fresar.description'),
      category: ['VueJS'],
      technologies: ['VueJS', 'Firebase'],
      image: images['fresar.webp'],
      url: 'https://fresaringenieros.co/'
    },
    {
      id: 4,
      year: 2022,
      title: t('portfolio.websites.lecafe.title'),
      description: t('portfolio.websites.lecafe.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['lecafe.webp'],
      url: 'https://lecaferd.com.do/'
    },
    {
      id: 5,
      year: 2022,
      title: t('portfolio.websites.mandolina.title'),
      description: t('portfolio.websites.mandolina.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Bootstrap'],
      image: images['Mandolina.webp'],
      url: 'https://mandolina.com/'
    },
    {
      id: 6,
      year: 2023,
      title: t('portfolio.websites.vinali.title'),
      category: ['WordPress'],
      description: t('portfolio.websites.vinali.description'),
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Vinali-Group.webp'],
      url: 'https://vinaligroup.com/'
    },
    {
      id: 7,
      year: 2023,
      title: t('portfolio.websites.tco.title'),
      description: t('portfolio.websites.tco.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Tree-Care-Office.webp'],
      url: 'https://treecareoffice.com/'
    },
    {
      id: 8,
      year: 2023,
      title: t('portfolio.websites.vinaliCalc.title'),
      category: ['VueJS'],
      description: t('portfolio.websites.vinaliCalc.description'),
      technologies: ['WordPress', 'PHP', 'JavaScript', 'VueJS'],
      image: images['Savings-Calculator-Vinali-Group.webp'],
      url: 'https://vinaligroup.com/'
    },
    {
      id: 9,
      year: 2023,
      title: t('portfolio.websites.tcoCalc.title'),
      description: t('portfolio.websites.tcoCalc.description'),
      category: ['VueJS'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'VueJS'],
      image: images['Savings-Calculator-Tree-Care.webp'],
      url: 'https://treecareoffice.com/'
    },
    {
      id: 10,
      year: 2023,
      title: t('portfolio.websites.holbie.title'),
      description: t('portfolio.websites.holbie.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Holbie.webp'],
      url: 'https://holisticbillingservices.com/'
    },
    {
      id: 11,
      year: 2023,
      title: t('portfolio.websites.ncg.title'),
      description: t('portfolio.websites.ncg.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['NCG-Medical.webp'],
      url: 'https://www.ncgmedical.com/'
    },
    {
      id: 12,
      year: 2024,
      title: t('portfolio.websites.taxpert.title'),
      description: t('portfolio.websites.taxpert.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Taxpert-Strategies.webp'],
      url: 'https://samuraiseb.org/'
    },
    {
      id: 13,
      year: 2024,
      title: t('portfolio.websites.acroskating.title'),
      description: t('portfolio.websites.taxpert.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Samurai-Seb.webp'],
      url: 'https://taxpertnow.com/'
    },
    {
      id: 14,
      year: 2024,
      title: t('portfolio.websites.netvin.title'),
      description: t('portfolio.websites.netvin.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Netvin.webp'],
      url: 'https://netvin.co/'
    },
    {
      id: 15,
      year: 2024,
      title: t('portfolio.websites.rcm.title'),
      description: t('portfolio.websites.rcm.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Oxygen Builder'],
      image: images['Vinali-RCM.webp'],
      url: 'https://vinalircm.com/'
    },
    {
      id: 16,
      year: 2024,
      title: t('portfolio.apps.researchpro.title'),
      description: t('portfolio.apps.researchpro.description'),
      category: ['NodeJS', 'ReactJS'],
      technologies: ['NodeJS', 'MongoDB', 'ReactJS'],
      image: images['researchpro.webp'],
      url: ''
    },
    {
      id: 17,
      year: 2024,
      title: t('portfolio.websites.jontmarz.title'),
      description: t('portfolio.websites.jontmarz.description'),
      category: ['NodeJS', 'ReactJS'],
      technologies: ['NodeJS', 'MongoDB', 'ReactJS'],
      image: images['Jon-Tmarz.webp'],
      url: 'https://jontmarz.com/'
    },
    {
      id: 18,
      year: 2025,
      title: t('portfolio.websites.iacero.title'),
      description: t('portfolio.websites.iacero.description'),
      category: ['WordPress'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'OpenAI', 'AI Automation', 'Elementor'],
      image: images['IA-Desde-Cero.webp'],
      url: 'https://iadesdecero.com/'
    },
    {
      id: 19,
      year: 2025,
      title: t('portfolio.websites.luckyhive.title'),
      description: t('portfolio.websites.luckyhive.description'),
      category: ['Firebase', 'ReactJS'],
      technologies: ['Firebase', 'Firestore', 'ReactJS'],
      image: images['LuckyHive.webp'],
      url: 'https://luckyhive.jontmarz.com/'
    },
  ];

  const categories = useMemo(() => {
    const allTechnologies = projects.flatMap(project => project.category);
    const uniqueTechnologies = ['All', ...new Set(allTechnologies)];
    return uniqueTechnologies;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(project => 
      project.category.includes(activeCategory)
    );
  }, [projects, activeCategory]);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-primary to-accent">
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
            sx={{ mb: '1em' }}
          >
            { t('portfolio.title')}
          </Typography>

          <ProjectTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice().reverse().map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.2}
              />
            ))}
          </div>

          <div className="flex justify-around mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Handshake className="w-5 h-5" />}
              className="btn-primary"
              sx={{ mt: '2em' }}
              >
              <Link to="contact" smooth={true} duration={500}>{t('buttons.hero')}</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<CalendarSearch className="w-5 h-5" />}
              className="btn-primary"
              sx={{ mt: '2em' }}
              href="https://calendly.com/jontmarz/30min?back=1"
              target="_blank"
              >
              {t('buttons.bookCall')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;