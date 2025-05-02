import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import bgBanner from '../../../assets/courses/banner-course-web.webp'

// Estilos personalizados
const BannerWrapper = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${bgBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left', // Default para móviles
    [theme.breakpoints.up('md')]: {
        backgroundPosition: 'center', // Para tabletas y desktop
    },
    padding: theme.spacing(6, 2),
    color: '#ffffff',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(255, 255, 255, 0.5)',
    margin: theme.spacing(4, 0),
}));

const HighlightText = styled('span')(({ theme }) => ({
    color: '#2A002B',
    fontWeight: 'bold',
}));

const ActionButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#CCA70A',
    color: '#2A002B',
    fontWeight: 'bold',
    padding: theme.spacing(1.5, 3),
    fontSize: '1rem',
    '&:hover': {
        backgroundColor: '#ffb300',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    transition: 'all 0.3s ease',
}));

const DiscountBadge = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#e53935',
    color: 'white',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: '4px',
    fontWeight: 'bold',
    transform: 'rotate(3deg)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
}));

interface BannerCourseProps {
    discount?: number;
}

const BannerCourse: React.FC<BannerCourseProps> = ({ discount }) => {
    const { t } = useTranslation('OnePage')
    const navigate = useNavigate();

    // Handler for navigation with scroll to top
    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Box 
            sx={{
                background: 'linear-gradient(45deg, #C0C0C0 50%, #ffffff 100%)',
                width: '100vw',
                position: 'relative',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                padding: '2rem 0',
            }}
        >
            <Container maxWidth="lg">
                <BannerWrapper>
                    {discount && (
                        <DiscountBadge>
                            {discount}% OFF
                        </DiscountBadge>
                    )}

                    <Box sx={{ p: 3, maxWidth: '650px' }}>
                        <Typography variant="h4" component="h2" gutterBottom className="text-[#00000F]" sx={{ fontSize: { xs: '1.8rem', md: '2rem' }, mb: 2 }}>
                            {t('bannerCWeb.title')} <HighlightText>{t('bannerCWeb.highlight')}</HighlightText>
                        </Typography>

                        <Typography variant="body1" className="text-[#00000F]" sx={{ mb: 3 }}>
                            {t('bannerCWeb.description')}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <ActionButton
                                variant="contained"
                                onClick={() => handleNavigation('/mia-course')}
                            >
                                {t('bannerCWeb.cta')}
                            </ActionButton>

                            {/* <Typography variant="body2" className="">
                                {t('bannerCWeb.slots')}
                            </Typography> */}
                        </Box>
                    </Box>
                </BannerWrapper>
            </Container>
        </Box>
    );
};

export default BannerCourse;
