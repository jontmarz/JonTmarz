import axios from 'axios'

const tokenKey: string = import.meta.env.VITE_TOKEN_KEY

const setToken = (token: string) => {
    if (typeof token === 'string' && token.trim() !== '') {
        // console.log('Generating Token:', token)
        localStorage.setItem(tokenKey, token.trim())
    } else {
        console.error('Invalid token, not saving to localStorage.')
    }
}

const getToken = (): string | null => {
    let token = localStorage.getItem(tokenKey)
    
    return token ? token.replace(/['"]+/g, '') : null
}

const deleteToken = (): void => {
    localStorage.removeItem(tokenKey)
}

const isTokenExpired = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const expiration = payload?.exp
        if(!expiration) return true

        // console.log("Token expiration:", new Date(expiration * 1000).toISOString())

        return Date.now() >= expiration * 1000

    } catch (error) {
        console.error('Error parsing token:', error)
        return true
    }
}

const getValidToken = (): string | null => {
    const token = getToken()
    if (!token) return null

    if (token && isTokenExpired(token)) {
        deleteToken()
        return null
    }

    return token
}

const api = axios.create({
    baseURL: `${import.meta.env.VITE_URL_SERVER}/api`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use((config) => {
    if (!config.url?.endsWith('/')) {
        config.url += '/'
    }

    const token = getValidToken()
    const auth = `Bearer ${token}`
    
    if (token) {
        config.headers.Authorization = auth
    }
    
    return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Axios Response Error:", error.response || error)
        return Promise.reject(error);
    }
);

export { api, setToken, getToken, deleteToken, getValidToken }