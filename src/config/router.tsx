import { RouteObject } from "react-router-dom"
import { UserContextProvider } from "../context/UserContext"
import RootLayout from '../layout/RootLayout'
import PrivateLayout from '../layout/PrivateLayout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Post from '../pages/Post'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import EditBlog from '../pages/EditPost'
import EditIdBlog from '../pages/EditIdBlog'
import ErrorPage from '../pages/ErrorPage'

export const router: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "post/:idBlog",
                element: <Post />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
        ]
    },
    {
        path: "dashboard",
        element: (
            <UserContextProvider>
                <PrivateLayout />
            </UserContextProvider>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "edit",
                element: <EditBlog />
            },
            {
                path: "edit/:idBlog",
                element: <EditBlog />
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]