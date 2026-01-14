import React from 'react'
import { Box, Typography } from '@mui/material'

interface BoxSectionProps {
    icon: React.ReactNode
    title: string
    index: number
}

const BoxSection: React.FC<BoxSectionProps> = ({ icon, title, index }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                }}
            >
                {icon}
            </Box>
            <Typography variant="body2" fontWeight={500}>
                {title}
            </Typography>
        </Box>
    )
}

export default BoxSection