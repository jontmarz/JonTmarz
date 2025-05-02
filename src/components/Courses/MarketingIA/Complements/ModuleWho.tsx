import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Paper, Stack, Grid } from '@mui/material'
import { UserPlus } from 'lucide-react'

interface WhoProps {
    imgWho: string[]
    bgWho?: string
}

const Who: React.FC<WhoProps> = ({ imgWho, bgWho }) => {
    const { t } = useTranslation('CurseWeb')
    const whoList = t('complements.who.list', { returnObjects: true }) as string[];

    return (
        <Box id="Complements" component="section" className="py-16">
            <Container>
                {/* Icon above title */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 6,
                }}>
                    <UserPlus size={60} className="text-white" />
                </Box>
                <Typography variant="h3" component="h2" align="center" className="text-[#F4CE2C]" sx={{ mb: 4, }}>
                    {t('complements.who.title')}
                </Typography>
                
                <Grid container spacing={4} alignItems="center">
                    {/* Left column - bgWho image */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {bgWho && (
                            <Box 
                                component="img"
                                src={bgWho}
                                alt={t('complements.who.title')}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                }}
                            />
                        )}
                    </Grid>
                    
                    {/* Right column - Stack with items */}
                    <Grid item xs={12} md={6}>
                        <Stack 
                            spacing={3}
                            sx={{ width: '100%' }}
                        >
                            {whoList.map((item, index) => {
                                // Determine box alignment based on index
                                let boxStyle = {};
                                
                                if (index === 0) {
                                    // First item: left aligned
                                    boxStyle = { alignSelf: 'flex-start' };
                                } else if (index === 1) {
                                    // Second item: center aligned
                                    boxStyle = { alignSelf: 'center' };
                                } else {
                                    // Last item: right aligned
                                    boxStyle = { alignSelf: 'flex-end' };
                                }
                                
                                return (
                                    <Paper
                                        key={index}
                                        elevation={3}
                                        sx={{
                                            position: 'relative',
                                            maxWidth: '600px',
                                            p: 3,
                                            color: '#2A002B',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            backgroundImage: `url(${imgWho[index % imgWho.length]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'rgba(255, 255, 255, .8)',
                                                zIndex: 1
                                            },
                                            '&:hover': {
                                                transform: 'scale(1.03)',
                                                transition: 'transform 0.3s ease'
                                            },
                                            ...boxStyle // Apply position-specific styling
                                        }}
                                    >
                                        <Typography 
                                            variant="subtitle1" 
                                            align="center"
                                            sx={{ 
                                                position: 'relative', 
                                                zIndex: 2,
                                                fontWeight: 800,
                                                fontSize: '1.1rem',
                                            }} 
                                            dangerouslySetInnerHTML={{ __html: item }} 
                                        />
                                    </Paper>
                                );
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Who