import React from 'react'
import { Typography, Box, Container, Grid} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CheckCircleOutline } from '@mui/icons-material'
import BenefitCard from './BenefitCard'
import { courseWebM } from '../../../../config/variables' // Import to access imgBenefits

const Benefits: React.FC = () => {
    const { t } = useTranslation('CurseWeb')
    const { imgBenefits } = courseWebM // Get the image URL
    
    // Array of benefits
    const benefits = [
        {
            icon: <CheckCircleOutline fontSize="large" color="primary" />,
            titleKey: 'benefits.benif1.title',
            listKey: 'benefits.benif1.list'  // Changed from descriptionKey to listKey
        },
        {
            icon: <CheckCircleOutline fontSize="large" color="primary" />,
            titleKey: 'benefits.benif2.title',
            listKey: 'benefits.benif2.list'  // Changed from descriptionKey to listKey
        },
        {
            icon: <CheckCircleOutline fontSize="large" color="primary" />,
            titleKey: 'benefits.benif3.title',
            listKey: 'benefits.benif3.list'  // Changed from descriptionKey to listKey
        }
    ];

    return (
        <>
            {/* Benefits Section */}
            <Box 
                component="section" 
                className="py-16"
                id="benefits"
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${imgBenefits})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // Parallax effect
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#00000F',
                        opacity: 0.1,
                        zIndex: 1
                    }
                }}
            >
                <Container sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography component="h2" variant="h3" align="center" className="text-[#F4CE2C]" sx={{ mb: 8 }}>
                        {t('benefits.title')}
                    </Typography>
                    <Grid container spacing={4} className="mx-auto">
                        {benefits.map((benefit, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <BenefitCard
                                    icon={benefit.icon}
                                    title={t(benefit.titleKey)}
                                    list={t(benefit.listKey, { returnObjects: true }) as string[]}  // Use returnObjects to get the array
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
export default Benefits