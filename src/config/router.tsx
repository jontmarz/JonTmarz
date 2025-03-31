import { RouteObject } from "react-router-dom"
import { UserContextProvider } from "../context/UserContext"
import RootLayout from '../layout/RootLayout'
import PrivateLayout from '../layout/PrivateLayout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import SinglePost from '../pages/SinglePost'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import EditPost from '../pages/EditPost'
import NewPost from '../pages/NewPost'
import MasterclassWeb from '../pages/landings/WebinarWeb'
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
                element: <SinglePost />
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
                path: "new",
                element: <NewPost />
            },
            {
                path: "edit/:id",
                element: <EditPost />
            },
        ]
    },
    {
        path: "webinar-marketing-ia",
        element: <MasterclassWeb />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]