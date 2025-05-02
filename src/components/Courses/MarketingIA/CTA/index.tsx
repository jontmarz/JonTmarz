import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { courseWebM } from '../../../../config/variables'

// Static counter to track which content variations have been used
const usedContentNumbers = new Set<number>();
const totalContentVariations = 3;

interface CTAProps {
  instanceId?: string; // Optional prop to identify this instance
}

const CTA: React.FC<CTAProps> = ({ instanceId = 'default' }) => {
    const { t } = useTranslation('CurseWeb')
    const { urlHotmartCP, bgCTA, imgCTA } = courseWebM
    
    // State to store the content number (1-3)
    const [contentNum, setContentNum] = useState<number>(1);
    // State to store the illustration
    const [illustration, setIllustration] = useState<string>("");
    
    // Helper function to get a random item from an array
    const getRandomItem = (array: any[]) => {
        return array[Math.floor(Math.random() * array.length)]
    };
    
    // Get a unique content number (0-based index for array access)
    const getUniqueContentNumber = (): number => {
        // If all variations have been used, reset the tracking
        if (usedContentNumbers.size >= totalContentVariations) {
            usedContentNumbers.clear();
        }
        
        // Find an unused number (0-based for array indexing)
        let num: number;
        do {
            num = Math.floor(Math.random() * totalContentVariations);
        } while (usedContentNumbers.has(num));
        
        // Mark this number as used
        usedContentNumbers.add(num);
        return num;
    };
    
    useEffect(() => {
        // Get a unique content number
        const uniqueNum = getUniqueContentNumber();
        setContentNum(uniqueNum);
        
        // Select random illustration
        if (Array.isArray(imgCTA)) {
            setIllustration(getRandomItem(imgCTA))
        } else {
            setIllustration(imgCTA)
        }
    }, [instanceId, imgCTA]);
    
    // Updated: Use array-style access for content
    const contentIndex = contentNum; // Now 0-based index
    
    // Helper function to safely get translation with array access
    const getContent = (field: string) => {
        try {
            // Try accessing as array first (new structure)
            const arrayContent = t(`cta.contents`, { returnObjects: true });
            if (Array.isArray(arrayContent) && arrayContent[contentIndex] && arrayContent[contentIndex][field]) {
                return arrayContent[contentIndex][field];
            }
            
            // Fall back to old structure if array access fails
            return t(`cta.content${contentIndex + 1}.${field}`);
        } catch (error) {
            console.warn(`Error accessing translation for cta.contents[${contentIndex}].${field}`, error);
            return `[Missing translation: cta.contents.${field}]`;
        }
    };
    
    return (
        <>
            {/* CTA Section */}
            <Box 
                component="section" 
                className="pt-16"
                sx={{
                    backgroundImage: `url(${bgCTA})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    // backgroundAttachment: 'fixed', // parallax effect
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 15, 0.7)', // Dark overlay with brand colors
                        zIndex: 1
                    }
                }}
            >
                <Container sx={{ position: 'relative', zIndex: 2 }}>
                    <Box className="text-center">                        
                        {/* Two column layout */}
                        <Grid container spacing={4} sx={{ mb: 4 }}>
                            {/* Left column - Description */}
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography component="h2" variant="h3" align="center" className="text-[#F4CE2C]" sx={{ mb: 4 }}>
                                    {getContent('title')}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                    className="text-white"
                                    align="left"
                                    sx={{ mb: 3 }}
                                >
                                    {getContent('description')}
                                </Typography>
                                
                                <Button
                                    variant="contained"
                                    size="large"
                                    className="px-8 py-3 text-lg"
                                    href={urlHotmartCP}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        minWidth: { xs: '100%', sm: '60%', md: '40%' },
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            animation: 'doubleZoom 1.5s ease-in-out'
                                        },
                                        '@keyframes doubleZoom': {
                                            '0%': { transform: 'scale(1)' },
                                            '25%': { transform: 'scale(1.2)' },
                                            '50%': { transform: 'scale(1)' },
                                            '75%': { transform: 'scale(1.2)' },
                                            '100%': { transform: 'scale(1)' }
                                        }
                                    }}
                                >
                                    {getContent('btnCta')}
                                </Button>
                            </Grid>
                            
                            {/* Right column - Illustration */}
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box 
                                    component="img"
                                    src={illustration}
                                    alt="CTA Illustration"
                                    sx={{
                                        maxWidth: { xs: '100%', md: '80%', lg: '60%'},
                                        height: { xs: '200px', md: 'auto' },
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                        animation: 'pulse 2s infinite ease-in-out',
                                        '@keyframes pulse': {
                                            '0%': { transform: 'scale(1)' },
                                            '50%': { transform: 'scale(1.05)' },
                                            '100%': { transform: 'scale(1)' }
                                        },
                                        width: "100%",
                                        objectFit: "cover",
                                        objectPosition: "top center",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    
                    {/* Warranty text */}
                    <Typography 
                        variant="caption" 
                        align="right" 
                        sx={{ 
                            display: 'block', 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            mt: 2,
                            py: 1
                        }}
                    >
                        {t('cta.warranty')}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default CTA
