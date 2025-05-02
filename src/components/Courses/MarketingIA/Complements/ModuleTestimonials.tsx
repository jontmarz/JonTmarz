import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material'
import { Quote, BookOpenCheck } from 'lucide-react'
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface TestimonialsProps {
    imgTes: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ imgTes }) => {
    const { t } = useTranslation('CurseWeb')
    // Extract testimonials from translation file
    const testimonials = t('complements.testomonials.list', { returnObjects: true }) as string[];

    // Function to process testimonials and separate quote from author
    const processTestimonial = (testimonial: string) => {
        // Find the last occurrence of " – " or similar separator patterns
        const separators = [' – ', ' - ', ' — ', '–', '-'];
        let quoteText = testimonial;
        let authorText = '';

        for (const separator of separators) {
            const lastIndex = testimonial.lastIndexOf(separator);
            if (lastIndex !== -1) {
                quoteText = testimonial.substring(0, lastIndex);
                authorText = testimonial.substring(lastIndex + separator.length);
                break;
            }
        }

        return { quoteText, authorText };
    };
    
    return (
        <Box id="Testimonials" component="section" className="py-16">
            <Container>
                {/* Icon above title */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 6,
                }}>
                    <BookOpenCheck size={60} className="text-white" />
                </Box>
                <Typography variant="h3" component="h2" align="center" className="text-[#F4CE2C]" sx={{ mb: 6 }}>
                    {t('complements.testomonials.title')}
                </Typography>
                
                {/* Two-column layout */}
                <Grid container spacing={4} alignItems="center">
                    {/* Left side - Image */}
                    <Grid item xs={12} md={6}>
                        <Box 
                            sx={{ 
                                '.swiper': {
                                    width: '100%',
                                    padding: '20px 0 40px 0',
                                },
                                '.swiper-wrapper': {
                                    alignItems: 'stretch',
                                },
                                '.swiper-slide': {
                                    height: 'auto', // Allow slides to size according to content
                                    display: 'flex',
                                },
                                '.swiper-pagination': { 
                                    bottom: '0px !important',
                                },
                                '.swiper-pagination-bullet': { 
                                    backgroundColor: 'white',
                                    opacity: 0.5,
                                },
                                '.swiper-pagination-bullet-active': {
                                    opacity: 1,
                                    backgroundColor: '#F4CE2C',
                                },
                                '.swiper-button-next, .swiper-button-prev': {
                                    color: '#F4CE2C',
                                    display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on medium screens and up
                                },
                            }}
                        >
                            <Swiper
                                modules={[Pagination, Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                navigation={true}
                                loop={true}
                                autoplay={{ 
                                    delay: 5500, 
                                    disableOnInteraction: false 
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <Card
                                            elevation={3}
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                backgroundColor: 'rgba(0, 0, 15, 0.8)',
                                                color: 'white',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '10px',
                                                transition: 'transform 0.3s, box-shadow 0.3s',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)'
                                                }
                                            }}
                                        >
                                            <CardContent sx={{ 
                                                position: 'relative', 
                                                p: 4,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                px: {xs: 2, md: 10},
                                            }}>
                                                {/* Quote icon - centered */}
                                                <Box sx={{ 
                                                    marginBottom: 2,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    opacity: 0.5
                                                }}>
                                                    <Quote size={32} />
                                                </Box>
                                                
                                                {/* Testimonial content */}
                                                <Box sx={{ width: '100%' }}>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontSize: '1.1rem',
                                                            fontStyle: 'italic',
                                                            lineHeight: 1.6,
                                                            textAlign: 'center',
                                                            mb: 2
                                                        }}
                                                    >
                                                        {processTestimonial(testimonial).quoteText}
                                                    </Typography>
                                                    
                                                    {/* Author text */}
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{
                                                            fontSize: '0.9rem',
                                                            fontWeight: 700,
                                                            textAlign: 'right',
                                                            color: '#F4CE2C'
                                                        }}
                                                    >
                                                        {processTestimonial(testimonial).authorText}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid>
                    
                    {/* Right side - Testimonials slider */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={imgTes}
                            alt="Testimonials"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(255, 255, 255 ,0.2)',
                                maxHeight: '400px',
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Testimonials