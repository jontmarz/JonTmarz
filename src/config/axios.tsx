import axios from 'axios'

const tokenKey: string = import.meta.env.VITE_TOKEN_KEY

const setToken = (token: string) => {
    localStorage.setItem(tokenKey, JSON.stringify(token))
}

const getToken = (): string | null => {
    let tk = localStorage.getItem(tokenKey)
    return tk ? JSON.parse(tk) : null
}

const deleteToken = (): void => {
    localStorage.removeItem(tokenKey)
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_REST,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use((config) => {
    if (!config.url?.endsWith('/')) {
        config.url += '/'
    }

    const token = getToken()    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
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
        console.error("Axios Response Error:", error.response || error);
        return Promise.reject(error);
    }
);

export { api, setToken, getToken, deleteToken }