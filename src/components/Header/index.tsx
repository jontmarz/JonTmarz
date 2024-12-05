import React, { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-scroll"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'
import Logo from '../../assets/logo.webp'
import styled from "@emotion/styled"

const Button = styled("button")({
    color: "#FFF",
    fontSize: "1.2rem",
    margin: "0 1rem",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
        color: "#CCA70A",
    },
})

const Header: React.FC = () => {
    const { t } = useTranslation()

    const [scroll, setScroll] = useState(false)

    const menuItems = [
        // { id: "Home", to:'hero', label: t("navbar.home") },
        { id: "About", to:'about', label: t("navbar.about") },
        { id: "Services", to:'services', label: t("navbar.services") },
        { id: "Portfolio", to:'portfolio', label: t("navbar.portfolio") },
        { id: "Skills", to:'skills', label: t("navbar.skills") },
        { id: "Contact", to:'contact', label: t("navbar.contact") },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScroll(scrollPosition > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AppBar position="fixed" color={scroll ? "primary" : "transparent"} sx={{ boxShadow: scroll ? '' : 'none'}}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                    <Link to="hero" smooth={true} duration={500}>
                        <img src={Logo} alt="Logo" style={{ height: "80px" }} />
                    </Link>
                </Typography>
                <div>
                    {menuItems.map((item) => (
                        <Button color="inherit" key={item.id}>
                            <Link to={item.to} smooth={true} duration={500}>{item.label}</Link>
                        </Button>
                    ))}
                </div>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    )
}

export default Header;