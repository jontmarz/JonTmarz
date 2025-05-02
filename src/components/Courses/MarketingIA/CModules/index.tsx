import React from 'react'
import { Rocket, Cpu, ShoppingCart, Filter, PenTool, MessageCircle, BarChart, Link } from 'lucide-react'
import { Container, Typography, Grid, Box } from '@mui/material'
import CTA from '../CTA'
import { useTranslation } from 'react-i18next'
import ModuleCard from './ModuleCard'
import { courseWebM } from '../../../../config/variables'

const CModules: React.FC = () => {
    const { t } = useTranslation('CurseWeb')
    
    // Array of icons to use with modules
    const moduleIcons = [
        <Rocket className="w-12 h-12 text-purple-600" />,
        <Cpu className="w-12 h-12 text-blue-600" />,
        <ShoppingCart className="w-12 h-12 text-green-600" />,
        <Filter className="w-12 h-12 text-red-600" />,
        <PenTool className="w-12 h-12 text-yellow-600" />,
        <MessageCircle className="w-12 h-12 text-pink-600" />,
        <BarChart className="w-12 h-12 text-indigo-600" />,
        <Link className="w-12 h-12 text-teal-600" />
    ];
    
    // Get modules directly from translation file
    const getModulesFromTranslation = (): any[] => {
        try {
            // Try to get modules as an array (new structure)
            const modulesData = t('modules.items', { returnObjects: true });
            if (Array.isArray(modulesData)) {
                return modulesData.map((module, index) => ({
                    ...module,
                    icon: moduleIcons[index % moduleIcons.length]
                }));
            }
            
            // Fallback to old structure if array access fails
            return Array.from({ length: 8 }, (_, i) => {
                const moduleNum = i + 1;
                return {
                    title: t(`modules.mod${moduleNum}.title`),
                    description: t(`modules.mod${moduleNum}.description`),
                    icon: moduleIcons[i]
                };
            });
        } catch (error) {
            console.warn('Error accessing modules data from translations', error);
            return [];
        }
    };
    
    const modules = getModulesFromTranslation();

    return (
        <>
            {/* Modules Section */}
            <Box 
                component="section" 
                className="py-16"
                id="modules"
                sx={{
                    background: 'linear-gradient(to bottom, #00000F, #00AAFF)'
                }}
            >
                <Container>
                    <Typography component="h2" variant="h3" align="center" className="text-[#F4CE2C]" sx={{ mb: 8 }}>
                        {t('modules.title')}
                    </Typography>
                    <Grid container spacing={2}>
                        {modules.map((module, index) => (
                            <Grid 
                                item 
                                xs={12} 
                                md={6} 
                                lg={3} 
                                key={index}
                                sx={{
                                    '& > div': { // Target the ModuleCard component
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                            zIndex: 10, // Ensure it appears above other cards when zoomed
                                        }
                                    }
                                }}
                            >
                                <ModuleCard
                                    icon={module.icon}
                                    title={module.title}
                                    description={module.description}
                                    // Support for potential additional fields
                                    {...module}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <CTA />
        </>
    );
}

export default CModules