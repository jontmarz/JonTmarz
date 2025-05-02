import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'

const Testimonials: React.FC = () => {
    const { t } = useTranslation('CurseWeb')
    return (
        <Box id="testimonials" component="section" className="py-16 bg-white">
            <Container>
                <Typography variant="h2" align="center" className="mb-12">
                    {t('testimonials.title')}
                </Typography>
                
                
            </Container>
        </Box>
    );
}

export default Testimonials
