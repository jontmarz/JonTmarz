import React, { useState, useEffect, useMemo } from 'react'
import { AppBar, Toolbar, Box, Button, Container, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home, Menu as MenuIcon, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../../../assets/nuevo_logo-dark.webp'
import LanguageSwitcher from '../../../LanguageSwitcher'
import { createMenus } from '../../../../config/variablesHeader'

const DigitalLaunchNavbar: React.FC = () => {
    const navigate = useNavigate()
    const { t } = useTranslation('DLGpt')
    const [scroll, setScroll] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const menuItems = useMemo(() => createMenus(t).gtpLDigital, [t])

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        setMobileMenuOpen(false)
        const element = document.getElementById(sectionId)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <AppBar
                position="fixed"
                elevation={scroll ? 4 : 0}
                sx={{
                    bgcolor: scroll ? 'rgba(0, 0, 15, 0.95)' : 'rgba(0, 0, 15, 0.5)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    borderBottom: scroll ? '1px solid rgba(204, 167, 10, 0.2)' : '1px solid transparent',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                        {/* Logo */}
                        <Box
                            component="img"
                            src={Logo}
                            alt="Logo"
                            sx={{
                                height: { xs: 40, md: 50 },
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}
                            onClick={() => scrollToSection('hero')}
                        />

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.to)}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        px: 2,
                                        '&:hover': {
                                            color: '#CCA70A',
                                            bgcolor: 'rgba(204, 167, 10, 0.1)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}  
                            
                            {/* Language Switcher */}
                            <Box sx={{ ml: 1 }}>
                                <LanguageSwitcher />
                            </Box>
                            
                            {/* Home Button */}
                            <Button
                                variant="outlined"
                                startIcon={<Home size={18} />}
                                onClick={() => navigate('/')}
                                sx={{
                                    color: '#CCA70A',
                                    borderColor: '#CCA70A',
                                    fontWeight: 600,
                                    px: 3,
                                    ml: 2,
                                    borderRadius: '50px',
                                    '&:hover': {
                                        borderColor: '#CCA70A',
                                        bgcolor: 'rgba(204, 167, 10, 0.15)',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {t('navbar.home')}
                            </Button>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 70,
                            left: 0,
                            right: 0,
                            zIndex: 1100,
                            backgroundColor: 'rgba(0, 0, 15, 0.98)',
                            backdropFilter: 'blur(10px)',
                            borderBottom: '1px solid rgba(204, 167, 10, 0.2)',
                        }}
                    >
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', p: 2 }}>
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Button
                                        fullWidth
                                        onClick={() => scrollToSection(item.to)}
                                        sx={{
                                            color: 'white',
                                            justifyContent: 'flex-start',
                                            py: 1.5,
                                            fontSize: '1rem',
                                            '&:hover': {
                                                color: '#CCA70A',
                                                bgcolor: 'rgba(204, 167, 10, 0.1)',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                            
                            {/* Language Switcher Mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: menuItems.length * 0.1 }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 1 }}>
                                    <LanguageSwitcher />
                                </Box>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (menuItems.length + 1) * 0.1 }}
                            >
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<Home size={18} />}
                                    onClick={() => {
                                        setMobileMenuOpen(false)
                                        navigate('/')
                                    }}
                                    sx={{
                                        color: '#CCA70A',
                                        borderColor: '#CCA70A',
                                        fontWeight: 600,
                                        py: 1.5,
                                        mt: 2,
                                        '&:hover': {
                                            borderColor: '#CCA70A',
                                            bgcolor: 'rgba(204, 167, 10, 0.15)',
                                        },
                                    }}
                                >
                                    {t('navbar.home')}
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default DigitalLaunchNavbar
