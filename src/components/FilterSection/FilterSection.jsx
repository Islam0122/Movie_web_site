import movieApi from "../../service/MovieServise.js";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const filterBtns = [
    { name: "Новинки", method: "trending/movie/week" },
    { name: "Популярное", method: "movie/popular" },
    { name: "Смотрят сейчас", method: "movie/now_playing" },
    { name: "Рекомендации", method: "movie/top_rated" },
    { name: "Топ 10", method: "movie/top_rated" },
    { name: "Скоро на Cinemax", method: "movie/upcoming" },
];

const FilterButton = () => {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const handleFilterClick = (method) => {
        setLoading(true);
        movieApi
            .getMovieByFilter(method)
            .then((res) => {
                setMovies(res.results || []);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="app-container">
            {/* Кнопки фильтров */}
            <div className="flex gap-[70px] mb-[80px] pl-[70px] bg-black text-white rounded-[10px]">
                {filterBtns.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleFilterClick(item.method)}
                        className="py-[22px] hover:bg-gray-800 rounded transition"
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            {/* Слайдер или индикатор загрузки */}
            <div>
                {loading ? (
                    <p className="text-center text-lg text-gray-500">Загрузка...</p>
                ) : (
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={4}
                        className="movie-slider"
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id} className="movie-slide">
                                <div className="bg-gray-800 text-white p-4 rounded shadow">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="rounded mb-2"
                                    />
                                    <h3 className="text-sm font-bold">{movie.title}</h3>
                                    <p className="text-xs text-gray-400">
                                        {movie.release_date || "Дата неизвестна"}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default FilterButton;
