import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    params : {
        api_key:import.meta.env.VITE_API_KEY,
    }

});
