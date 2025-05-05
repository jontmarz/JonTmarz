import React from 'react'
import { Button, Stack } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

interface ButtonsSectionProps {
    urlDLG: string
    btn1Text: string
    btn2Text: string
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ urlDLG, btn1Text, btn2Text }) => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            sx={{ mt: 3 }}
        >
            <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowRight />}
                href={urlDLG}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: '50px',
                    boxShadow: '0px 4px 15px rgba(236, 72, 153, 0.35)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        animation: 'doubleZoom 1.5s ease-in-out',
                    },
                    '@keyframes doubleZoom': {
                        '0%': { transform: 'scale(1)' },
                        '25%': { transform: 'scale(1.2)' },
                        '50%': { transform: 'scale(1)' },
                        '75%': { transform: 'scale(1.2)' },
                        '100%': { transform: 'scale(1)' }
                    }
                }}
            >
                { btn1Text}
            </Button>

            <Button
                variant="outlined"
                component={ScrollLink}
                to="Demo"
                smooth={true}
                duration={500}
                offset={-80} // Ajustar según la altura del header
                sx={{
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.5)',
                    py: 1.5,
                    px: 4,
                    borderRadius: '50px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        animation: 'doubleZoom 1.5s ease-in-out',
                    },
                    '@keyframes doubleZoom': {
                        '0%': { transform: 'scale(1)' },
                        '25%': { transform: 'scale(1.2)' },
                        '50%': { transform: 'scale(1)' },
                        '75%': { transform: 'scale(1.2)' },
                        '100%': { transform: 'scale(1)' }
                    }
                }}
            >
                { btn2Text }
            </Button>
        </Stack>
    )
}

export default ButtonsSection