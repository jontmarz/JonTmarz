import React from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Sun, Folder, Brain, CheckCircle, BookPlus } from 'lucide-react'

const ModuleBonus: React.FC = () => {
    const { t } = useTranslation('CurseWeb');
    const items = t('complements.bonus.list', { returnObjects: true }) as string[];

    // Define icons for each bonus item
    const icons = [
        <Sun size={32} className="text-[#F4CE2C]" />,
        <Folder size={32} className="text-[#00AAFF]" />,
        <Brain size={32} className="text-purple-400" />,
        <CheckCircle size={32} className="text-green-400" />
    ];

    return (
        <Box sx={{ m: 4 }}>
            {/* Icon above title */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 6,
            }}>
                <BookPlus size={60} className="text-white" />
            </Box>

            <Typography variant="h3" component="h2" align="center" className="text-[#F4CE2C]" sx={{ mb: 4, }}>
                {t('complements.bonus.title')}
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                    borderColor: '#00AAFF'
                                }
                            }}
                        >
                            {/* Display icon */}
                            <Box sx={{ mb: 2 }}>
                                {icons[index % icons.length]}
                            </Box>
                            {/* Display text */}
                            <Typography variant="subtitle1" align="center" sx={{ fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item }} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ModuleBonus;