import { RouteObject } from "react-router-dom"
import RootLayout from '../layout/RootLayout'
import PrivateLayout from '../layout/PrivateLayout'
import Home from '../pages/App'
import Blog from '../pages/Blog'
import Post from '../pages/Post'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import EditBlog from '../pages/EditBlog'

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
                path: "post/:id",
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
            {
                path: "dashboard",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <EditBlog />
                    },
                    {
                        path: "edit-blog/:id",
                        element: <EditBlog />
                    },
                ]
            },
        ]
    }
]