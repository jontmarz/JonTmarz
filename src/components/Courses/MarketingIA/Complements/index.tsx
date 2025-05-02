import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { courseWebM } from '../../../../config/variables'
import Bonus from './ModuleBonus'
import Who from './ModuleWho'
import Testimonials from './ModuleTestimonials'
import CTA from '../CTA'

const Complements: React.FC = () => {
    const { t } = useTranslation('CurseWeb')
    const { imgComplements, imgWho, bgWho, imgTestimonials } = courseWebM

    return (
        <Box 
            sx={{
                backgroundImage: `url(${imgComplements})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 1
                },
                '& > *': {
                    position: 'relative',
                    zIndex: 2
                }
            }}
        >
            
            {/* Complements Section */}
            <Bonus />
            <Who imgWho={imgWho} bgWho={bgWho} />
            <Testimonials imgTes={imgTestimonials} />
            {/* Pass a specific content number to ensure uniqueness */}
            <CTA />
        </Box>
    );
}
export default Complements