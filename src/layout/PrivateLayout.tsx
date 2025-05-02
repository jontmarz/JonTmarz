import React, { useEffect, useState } from "react"
import { useUserContext } from "../context/UserContext"
import { Navigate, Outlet } from "react-router-dom"
import { Grid, CircularProgress, Container, Box } from "@mui/material"
import Footer from "../components/Layouts/Footer"

const PrivateLayout: React.FC = () =>  {
    const [ loading, setLoading ] = useState(true)
    const { isLoggedIn, logIn } = useUserContext()

    useEffect(() => {
        setLoading(logIn())
    }, [logIn])

    if (loading) {
        return (
            <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                <CircularProgress />
            </Grid>
        )
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <Box
            id="private-layout"
            maxWidth="xl"
            sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
            <Box sx={{ flex: '1', p: 2 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export default PrivateLayout