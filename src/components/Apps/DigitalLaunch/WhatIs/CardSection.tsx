import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'

interface CardSectionProps {
    icon: React.ReactNode
    title: string
    description: string
}

const CardSection: React.FC<CardSectionProps> = ({ icon, title, description }) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    borderColor: 'rgba(99, 102, 241, 0.3)',
                }
            }}
        >
            <CardContent 
                sx={{ 
                    p: 3,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(99, 102, 241, 0.3))',
                    },
                    '&:hover .icon-container': {
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                    }
                }}
            >
                <Box
                    className="icon-container"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        color: 'white',
                        mb: 2,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                >
                    {icon}
                </Box>
                <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                    {title}
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        component="div"
                        dangerouslySetInnerHTML={{ __html: description }}
                        sx={{ '& a': { color: '#CCA70A', textDecoration: 'none' } }}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardSection