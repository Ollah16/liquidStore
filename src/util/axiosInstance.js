import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: `https://liquidserver.vercel.app`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// Request interceptor to add Authorization header
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
    (response) => {
        // Return the response as is if successful
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle token expiration or invalid token scenarios
            const errorMessage = error.response.data.message || '';

            if (errorMessage.includes('Token expired') || errorMessage.includes('Invalid token')) {
                // Remove the token from localStorage if it has expired or is invalid
                localStorage.removeItem('token');
            }
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
