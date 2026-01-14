import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'

interface ContactSectionProps {
    title: string
    text: string
    contact: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, text, contact }) => {
    return (
        <>
        <Typography variant="h6" component="h4" fontWeight={600} mb={1}>
            {title}
        </Typography>
        <Typography variant="body2" mb={2}>
            {text}
        </Typography>
        <Typography component="a" href="mailto:help@jontmarz.com" variant="body2" sx={{ textDecoration: 'underline' }}>
            {contact}
        </Typography>
        </>
    )

}

export default ContactSection