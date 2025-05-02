import React, { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import { Link } from "react-scroll"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../../LanguageSwitcher'
import Logo from '../../../../assets/nuevo_logo-dark.webp'
// Import menus from config file
import { menus, MenuType } from '../../../../config/variablesHeader'
// import styled from "@emotion/styled"

/* const Button = styled("button")({
    color: "#FFF",
    fontSize: "1.2rem",
    margin: "0 1rem",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
        color: "#CCA70A",
    },
}) */

interface HeaderProps {
    menuType?: MenuType; // Optional prop to specify which menu to use
}

const Header: React.FC<HeaderProps> = ({ menuType = 'default' }) => {
    const { t } = useTranslation('OnePage')
    const navigate = useNavigate();

    const [scroll, setScroll] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    // Use the menu specified by menuType or fallback to default
    const menuItems = menus[menuType] || menus.default;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScroll(scrollPosition > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleDrawer = () => setMobileOpen(!mobileOpen)

    // Handler for links with hash/anchor
    const handleHashNavigation = (to: string, closeDrawer?: boolean) => {
        // Close drawer if needed
        if (closeDrawer) toggleDrawer();
        
        // Split path and hash
        const [path, hash] = to.split('#');
        const targetId = hash ? hash.replace(/^#+/, '') : ''; // Remove any leading # characters
        
        // Navigate to the path
        navigate(path || '/');
        
        // Scroll to the element with given ID after a delay to ensure page is loaded
        if (targetId) {
            // Use a longer timeout to ensure the page has loaded
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    // Scroll with offset to account for fixed header
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 500); // Increased delay to 500ms
        }
    };

    const renderMenuItems = (closeDrawer?: boolean) => (
        <>
            {menuItems.map((item) => {
                // Handle external links with hash
                if (item.external && item.to.includes('#')) {
                    return (
                        <ListItem 
                            button 
                            key={item.id} 
                            onClick={() => handleHashNavigation(item.to, closeDrawer)}
                            sx={{ justifyContent: 'center'}}
                        >
                            <ListItemText primary={item.label} className="anchor" />
                        </ListItem>
                    );
                }
                
                // Regular external links
                if (item.external) {
                    return (
                        <ListItem 
                            button 
                            component={RouterLink} 
                            to={item.to} 
                            key={item.id} 
                            onClick={() => closeDrawer && toggleDrawer()} 
                            sx={{ justifyContent: 'center'}}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    );
                }
                
                // Internal scroll links
                return (
                    <ListItem button key={item.id} sx={{ justifyContent: 'center'}}>
                        <Link to={item.to} smooth={true} duration={500}>{item.label}</Link>
                    </ListItem>
                );
            })}
        </>
    )

    return (
    <>
        <AppBar position="fixed" color={scroll ? "primary" : "transparent"} sx={{ boxShadow: scroll ? '' : 'none', maxWidth: '1250px', left: "50%", transform: 'translate(-50%);', borderRadius: scroll ? '0 0 10px 10px' : '' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo */}
                <Typography variant="h6" sx={{ cursor: 'pointer' }}>
                    <RouterLink to="/">
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            style={{ height: "80px", cursor: 'pointer' }} 
                        />
                    </RouterLink>
                </Typography>
                
                {/* Desktop Menu */}
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div className="menu-desktop">
                        {renderMenuItems()}
                    </div>

                    {/* Mobile Menu */}
                    <IconButton className="menu-burger" edge="end" color="inherit" onClick={toggleDrawer} sx={{ display: { md: "none" }, marginRight: '1em' }}>
                        <MenuIcon sx={{ width: '1.5em', height: '1.5em' }} />
                    </IconButton>
                </Box>

                {/* Language Switcher */}
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
            <div style={{ width: 250, padding: "1rem" }}>
                <IconButton onClick={toggleDrawer}>
                    <CloseIcon />
                </IconButton>
                <List>{renderMenuItems(true)}</List>
            </div>
        </Drawer>
    </>
    )
}

export default Header;