import { axiosInstance as axios } from '../axios/index.js';



const movieApi = {
    getMovies: async () => {
        const response = await axios.get(`discover/movie?language=ru`);
        return response.data;
    },
    getMovieById: async (id) => {
        const response = await axios.get(`movie/${id}?language=ru`);
        return response.data;
    },
    getMovieCredits: async (movieId) => {
        const response = await axios.get(`movie/${movieId}/credits?language=ru`);
        return response.data;
    },

};

export default movieApi;