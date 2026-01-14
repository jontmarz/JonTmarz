import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { CheckCircle, Rocket } from 'lucide-react'

const Projects: React.FC = () => {
    const { t } = useTranslation('AboutMe')
    
    const currentProjects = t('projects.current', { returnObjects: true }) as Array<{
        id: string
        name: string
        description: string
        status: string
    }>

    const upcomingProjects = t('projects.upcoming', { returnObjects: true }) as Array<{
        id: string
        name: string
        state: string
        description: string
        status: string
    }>

    return (
        <Box id="projects" sx={{ bgcolor: 'rgba(0, 170, 255, 0.05)', py: 8 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 700,
                            mb: 6,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #00AAFF 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('projects.title')}
                    </Typography>

                    <Typography variant="h5" sx={{ color: '#00AAFF', mb: 3, fontWeight: 600 }}>
                        Activos
                    </Typography>
                    <Grid container spacing={3} sx={{ mb: 6 }}>
                        {currentProjects.map((project) => (
                            <Grid item xs={12} md={4} key={project.id}>
                                <Card
                                    sx={{
                                        background: 'rgba(0, 170, 255, 0.08)',
                                        border: '1px solid rgba(0, 170, 255, 0.3)',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#FFFFFF', flex: 1 }}>
                                                {project.name}
                                            </Typography>
                                            <Chip
                                                icon={<CheckCircle size={16} />}
                                                label="Activo"
                                                size="small"
                                                sx={{
                                                    bgcolor: 'rgba(0, 255, 0, 0.2)',
                                                    color: '#00FF00',
                                                    border: '1px solid rgba(0, 255, 0, 0.3)',
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                        >
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Typography variant="h5" sx={{ color: '#CCA70A', mb: 3, fontWeight: 600 }}>
                        En Desarrollo
                    </Typography>
                    <Grid container spacing={3}>
                        {upcomingProjects.map((project) => (
                            <Grid item xs={12} sm={6} key={project.id}>
                                <Card
                                    sx={{
                                        background: 'rgba(204, 167, 10, 0.05)',
                                        border: '1px dashed rgba(204, 167, 10, 0.3)',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#FFFFFF', flex: 1 }}>
                                                {project.name}
                                            </Typography>
                                            <Chip
                                                icon={<Rocket size={16} />}
                                                label="Próximamente"
                                                size="small"
                                                sx={{
                                                    bgcolor: 'rgba(204, 167, 10, 0.2)',
                                                    color: '#CCA70A',
                                                    border: '1px solid rgba(204, 167, 10, 0.3)',
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'rgba(255, 255, 255, 0.6)', fontStyle: 'italic' }}
                                        >
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Projects
