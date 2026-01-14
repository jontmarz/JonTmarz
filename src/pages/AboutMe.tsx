import React from 'react'
import { Box } from '@mui/material'
import { Hero, Story, WhatDrivesMe, Journey, Projects, Personal, CTA } from '../components/AboutMePage'

const AboutMePage: React.FC = () => {
    return (
        <Box sx={{ bgcolor: '#00000F', minHeight: '100vh', pt: 10 }}>
            <Hero />
            <Story />
            <WhatDrivesMe />
            <Journey />
            <Projects />
            <Personal />
            <CTA />
        </Box>
    )
}

export default AboutMePage
