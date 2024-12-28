import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from "@mui/material"
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout: React.FC = () => {
    return (
        <Container maxWidth="xl" sx={{ mx: "auto", p: "0 !important", }}>
            <Header />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default RootLayout