import { useState, useEffect, useContext, createContext } from 'react'
import { api, getToken, deleteToken } from '../config/axios'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext<any>(null)

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [ user, setUser ] = useState<any>(null)
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const token = getToken()
    const navigate = useNavigate()

    const checkSession = () => {
        if (token) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }    

    const logIn = () => {
        setIsLoggedIn(true)
    }

    const logOut = () => {
        deleteToken()
        setUser(null)
        setIsLoggedIn(false)
        navigate('/login')
    }

    const getUser = async () => {
        if(!isLoggedIn) navigate('/login')
            
        try {
            const res = await api.get("/auth/user")
            setUser(res.data.user)
            // setUser('Jon Tmarz')

        } catch (er: any) {
            console.log('Error fetching user', er,)
            if (er.response.status >= 500 || er.response.status >= 400) {
                // logOut()
            }
        }
    }

    useEffect(() => {
        checkSession()
        if (isLoggedIn) {
            getUser()
        } else {
            setUser(null)
        }
    }, [isLoggedIn])

    const contextValue = { user, setUser, isLoggedIn, setIsLoggedIn, logIn, logOut }

    return (
        <UserContext.Provider value={ contextValue }>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)