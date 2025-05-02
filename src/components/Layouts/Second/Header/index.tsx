import React, { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import { Link } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../../LanguageSwitcher'
import Logo from '../../../../assets/nuevo_logo-dark.webp'
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

const Header: React.FC = () => {
    const { t } = useTranslation('OnePage')

    const [scroll, setScroll] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const menuItems = [
        { id: "Home", to:'hero', label: t("navbar.home2") },
        { id: "About", to:'about', label: t("navbar.about"), external: false, className: "opacity-0" },
        { id: "Services", to:'services', label: t("navbar.services"), external: false,  className: "opacity-0" },
        { id: "Portfolio", to:'portfolio', label: t("navbar.portfolio"), external: false,  className: "opacity-0" },
        { id: "Skills", to:'skills', label: t("navbar.skills"), external: false,  className: "opacity-0" },
        // { id: "Blog", to:'/blog', label: t("navbar.blog"), external: true },
        { id: "Contact", to:'/#contact', label: t("navbar.contact"), external: true },
        // { id: "Login", to:'/login', label: t("navbar.login"), external: true },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScroll(scrollPosition > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleDrawer = () => setMobileOpen(!mobileOpen)

    const renderMenuItems = () => (
        <>
            {menuItems.map((item) => (
                item.external ? (
                    <ListItem button component={RouterLink} to={item.to} key={item.id} onClick={() => closeDrawer && toggleDrawer()} >
                        <ListItemText primary={item.label} />
                    </ListItem>
                ) : (
                    <ListItem button key={item.id}>
                        <Link to={item.to} smooth={true} duration={500}>{item.label}</Link>
                    </ListItem>
                )
            ))}
        </>
    )

    return (
    <>
        <AppBar position="fixed" color={scroll ? "primary" : "transparent"} sx={{ boxShadow: scroll ? '' : 'none', maxWidth: '1250px', left: "50%", transform: 'translate(-50%);', borderRadius: scroll ? '0 0 10px 10px' : '' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <RouterLink to="/">
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            style={{ height: "80px", cursor: 'pointer' }} 
                        />
                    </RouterLink>
                </Typography>
                
                {/* Desktop Menu */}
                <div className="menu-desktop opacity-0">
                    {renderMenuItems()}
                </div>

                {/* Mobile Menu */}
                <IconButton className="menu-burger" edge="end" color="inherit" onClick={toggleDrawer} sx={{ display: { md: "none" }, marginRight: '1em' }}>
                    <MenuIcon sx={{ width: '1.5em', height: '1.5em' }} />
                </IconButton>
                {/* <div>
                    {menuItems.map((item) => (
                        item.external ? (
                            <Button component={RouterLink} to={item.to} color="inherit" key={item.id}>
                                {item.label}
                            </Button>
                        ) : (
                            <Button color="inherit" key={item.id}>
                                <Link to={item.to} smooth={true} duration={500}>{item.label}</Link>
                            </Button>
                        )
                    ))}
                </div> */}
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