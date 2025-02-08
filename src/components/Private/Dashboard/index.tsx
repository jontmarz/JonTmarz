import React, { useState } from 'react'
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, AppBar, Toolbar, stepButtonClasses } from '@mui/material'
// import DashboardIcon from '@mui/icons-material/Dashboard'
import BallotIcon from '@mui/icons-material/Ballot'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext'
import LogoutIcon from '@mui/icons-material/Logout'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import { useUserContext } from '../../../context/UserContext'
import logo from '../../../assets/logo.webp'
// import Content from '../Dashboard/content'
import BlogPage from '../ListBlog'
import NewPost from '../NewPost'
import EditPost from '../EditPost'

const NAVIGATION = [
    // { key: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
    { key: 'blog', title: 'Blog', icon: <BallotIcon /> },
    { key: 'post', title: 'New Post', icon: <QueuePlayNextIcon /> },
    { key: 'logout', title: 'LogOut', icon: <LogoutIcon /> },
]

const Dashboard:React.FC = () => {
    const { user, logOut } = useUserContext()
    const [activeComponent, setActiveComponent] = useState<string>('dashboard')
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

    const handleNavigation = (key: string, id?: string) => {
        if (key === 'logout') {
            logOut()
        } else {
            setActiveComponent(key)
            if (id) {
                setSelectedPostId(id)
            }
        }
    }

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'blog':
                return <BlogPage handleNavigation={handleNavigation} />
            case 'post':
                return <NewPost />
            case 'edit':
                return selectedPostId ? <EditPost postId={selectedPostId} /> : <BlogPage handleNavigation={handleNavigation} />
            case 'dashboard':
            default:
                return <BlogPage handleNavigation={handleNavigation} />
        }
    }

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Top bar */}
            <AppBar  sx={{ zIndex: 1201, width: '100%', heigth: '60px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Logo */}
                        <img src={logo} alt="App Logo" style={{ maxWidth: '100px', marginRight: '8px' }} />
                        {/* Nombre de la app */}
                        <Typography variant="h6" noWrap>
                            Utilities App
                        </Typography>
                    </Box>
                    {/* Mensaje de bienvenida */}
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        Welcome, {user?.name || 'User'}
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* Sidebar */}
            <Box
                sx={{
                    width: isSidebarOpen ? 180 : 60,
                    borderRight: '1px solid #CCA70A',
                    transition: 'width 0.3s',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(42, 0, 43, 0.4);'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isSidebarOpen ? 'flex-end' : 'center',
                        justifyContent: 'center',
                        mb: 4,
                        mt: '5em'
                    }}
                >
                    {isSidebarOpen}
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
                <List>
                    {NAVIGATION.map((item) => (
                        <ListItem
                            button
                            key={item.key}
                            onClick={() => handleNavigation(item.key)}
                            selected={activeComponent === item.key}
                            sx={{ cursor: 'pointer' }}
                        >
                            <ListItemIcon sx={{ minWidth: '35px' }}>{item.icon}</ListItemIcon>
                            <ListItemText sx={{ display: isSidebarOpen ? 'block' : 'none' }} primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            {/* Content place */}
            <Box sx={{ flex: 1, p: 4, mt: '3em' }}>
                {renderActiveComponent()}
            </Box>
        </Box>
    )
}

export default Dashboard