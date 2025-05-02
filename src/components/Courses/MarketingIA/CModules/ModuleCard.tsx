import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'

function ModuleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card 
            className="h-full hover:shadow-xl transition-shadow"
            sx={{
                backgroundColor: '#00000F',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease-out',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    backgroundColor: '#fff',
                    boxShadow: '0 8px 12px rgba(0, 170, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-4px)',
                    '& .card-title': {
                        color: '#2A002B'
                    },
                    '& .description-overlay': {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                }
            }}
        >
            <CardContent className="text-center">
                {/* Always visible content */}
                <Box className="flex justify-center mb-4">{icon}</Box>
                <Typography 
                    variant="h6" 
                    className="text-[#00AAFF] card-title" 
                    sx={{ mb: 2, fontWeight: 'bold' }}
                >
                    {title}
                </Typography>
                
                {/* Description overlay - only visible on hover */}
                <Box 
                    className="description-overlay"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        opacity: 0,
                        transform: 'translateY(100%)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography 
                        variant="body1"
                        sx={{ color: '#00000F' }}
                    >
                        {description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ModuleCard