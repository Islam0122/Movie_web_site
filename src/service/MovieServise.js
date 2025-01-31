import { axiosInstance as axios } from '../axios/index.js';



const movieApi = {
    getMovies: async (language = "ru") => {
        const response = await axios.get(`discover/movie?language=${language}`);
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
    getMoviebyName: async (movieName,language = "ru") => {
        const response = await axios.get(`search/movie?query=${movieName}&language=${language}`);
        return response.data;
    },
    getMovieGenreList: async (language = "ru") => {
        const response = await axios.get(`genre/movie/list?language=${language}`);
        return response.data;
    },
    getMovieByFilter: async (filter) => {
        const response = await axios.get(`${filter}?language=ru`);
        return response.data;
    },
    getMovieGenres : async (movieId) => {
        const response = await axios.get(`movie/${movieId}?language=ru`);
        return response.data.genres; // Получаем жанры фильма
    }
};

export default movieApi;