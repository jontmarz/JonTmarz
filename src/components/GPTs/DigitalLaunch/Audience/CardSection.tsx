import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'

interface CardSectionProps {
    icon: React.ReactNode
    title: string
    description: string
    setMaxHeight: (height: number) => void
    maxHeight: number
}

const CardSection: React.FC<CardSectionProps> = ({ 
    icon, 
    title, 
    description
}) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                height: 350, // Altura fija para todas las tarjetas
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
                }
            }}
        >
            <CardContent sx={{ 
                p: 4, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%', // Asegura que CardContent llene la tarjeta
                background: 'linear-gradient(0deg, rgba(0, 170, 255, 0.5), rgba(42, 0, 43, 0.5))',
            }}>
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                        color: 'primary.main',
                        mb: 2,
                    }}
                >
                    {icon}
                </Box>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {title}
                </Typography>
                <Box 
                    sx={{ 
                        flexGrow: 1,
                        overflow: 'auto',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}
                >
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        component="div"
                        sx={{
                            width: '100%',
                        }}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardSection