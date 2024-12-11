import axios, { AxiosRequestConfig } from 'axios'

const tokenKey: string = import.meta.env.VITE_TOKEN_KEY

const setToken = (token: string) => {
    localStorage.setItem(tokenKey, token)
}

const getToken = (): string | null => {
    return localStorage.getItem(tokenKey)
}

const deleteToken = (): void => {
    localStorage.removeItem(tokenKey)
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_REST,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (!config.url?.endsWith('/')) {
        config.url += '/'
    }

    const token = getToken()
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`
    }

    return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export { api, setToken, getToken, deleteToken }