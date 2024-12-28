import React, { useEffect, useState } from "react"
import { useUserContext } from "../context/UserContext"
import { Navigate, Outlet } from "react-router-dom"
import { Grid, CircularProgress } from "@mui/material"
import Footer from "../components/Footer"

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
        <>
        <div className="min-h-screen">
            <Outlet />
        </div>
        <Footer />
        </>
    )
}

export default PrivateLayout