import { RouteObject } from "react-router-dom"
import { UserContextProvider } from "../context/UserContext"
import RootLayout from '../layout/RootLayout'
import PrivateLayout from '../layout/PrivateLayout'
import Home from '../pages/Home'
import Blog from '../pages/Blog/Blog'
import SinglePost from '../pages/Blog/SinglePost'
import Login from '../pages/BackOffice/Login'
import Signup from '../pages/BackOffice/Signup'
import Dashboard from '../pages/BackOffice/Dashboard'
import EditPost from '../pages/Blog/EditPost'
import NewPost from '../pages/Blog/NewPost'
import MarketingIA from '../pages/Courses/MarketingIA'
import DLauncerGPT from '../pages/GPTs/DigitalLaunch'
import MasterclassWeb from '../pages/Landings/WebinarWeb'
import PolicyPrivacy from "../pages/PrivacyPolicy"
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
                path: "mia-course",
                element: <MarketingIA />
            },
            {
                path: "digital-launcher-gpt",
                element: <DLauncerGPT />
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
        path: "policy-privacy",
        element: <PolicyPrivacy />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]