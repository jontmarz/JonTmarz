import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Grid } from '@mui/material'
import { GraduationCap } from 'lucide-react' // Import appropriate icon
import imgTrainer from '/src/assets/img-jon-tmarz.webp' // Adjust path as needed
import CTA from '../CTA'

const Trainer: React.FC = () => {
    const { t } = useTranslation('CurseWeb')
    
    // Function to safely render HTML content with preserved newlines
    const renderHTMLDescription = () => {
        const text = t('trainer.description');
        // Split the text by newlines
        return text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {/* Render the HTML in this line */}
                <div dangerouslySetInnerHTML={{ __html: line }} />
                {/* Add a line break if it's not the last line */}
                {i !== text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ))
    }
    
    return (
        <>
        <Box 
            component="section" 
            className="py-16"
            id="trainer"
            sx={{
                background: 'linear-gradient(225deg,rgba(0, 170, 255, 1) 0%, rgba(0, 0, 15, 1) 50%)',
                color: '#fff'
            }}
        >
            <Container>
                {/* Icon above title */}
                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <GraduationCap size={60} className="text-white" />
                </Box>
                
                <Typography variant="h2" align="center" className="text-[#F4CE2C]" sx={{ mb: 8 }}>
                    {t('trainer.title')}
                </Typography>
                
                <Grid container spacing={4} alignItems="center">
                    {/* Left side content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h3" className="text-[#C0C0C0]" sx={{ mb: 2, fontWeight: 700 }}>
                            {t('trainer.name')}
                        </Typography>
                        <Typography variant="subtitle1" component="h6" className="text-[#C0C0C0]" sx={{ mb: 2, fontWeight: 700 }}>
                            {t('trainer.role')}
                        </Typography>
                        <Box className="mb-4">
                            {renderHTMLDescription()}
                        </Box>
                    </Grid>
                    
                    {/* Right side image */}
                    <Grid item xs={12} md={6} className="flex justify-center">
                        <Box 
                            component="img"
                            src={imgTrainer}
                            alt={t('trainer.name')}
                            sx={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <CTA />
        </>
    );
}

export default Trainer
