import React, { useEffect, useState } from "react";
import movieApi from "../../service/MovieServise.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router";
import { Autoplay, Pagination } from "swiper/modules";
import "../../App.css";

const MovieUpcoming = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        movieApi
            .getMovieByFilter("movie/upcoming")
            .then((res) => {
                setMovies(res.results ? res.results.slice(0, 3) : []);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h3 className="text-white">Загрузка...</h3>;
    }

    const img_url = "https://image.tmdb.org/t/p/original";
    return (
        <div className="w-[1160px] mx-auto  ">
            <Swiper
                slidesPerView={1}
                direction="vertical"
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination2",
                    bulletClass: "custom-pagination-line2",
                    bulletActiveClass: "swiper-pagination-bullet-active2",
                }}
                autoplay={{delay: 5000}}
                loop={true}
                modules={[Pagination, Autoplay]}
                style={{height: "560px"}}
                className=" relative"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="relative">
                        <div className="flex items-center text-white rounded-[10px] ">
                            <div className="w-[300px] h-[450px] bg-cover rounded-[10px] absolute">
                                <img
                                    src={`${img_url + movie.poster_path}`}
                                    className="rounded-[10px] object-cover w-full h-full"
                                    alt="Movie Poster"
                                />
                            </div>
                            <div className="bg-[#1A1A1A] w-[880px] h-[560px] ml-[82px] rounded-[10px]">
                                <div className="w-[442px] h-[260px] ml-[320px] mr-[125px] mt-[150px]">
                                    <h3 className="text-[34px] font-[600] flex gap-[30px] mb-[15px] font-montserrat">
                                        {movie.title}
                                        <span className="text-[24px] font-[500]">
                                            {movie.release_date.slice(0, 4)}
                                        </span>
                                    </h3>
                                    <div>
                                        <div className="flex w-[349px] h-[20px] mb-[24px] gap-[17px] text-red-900">
                                            <p className="font-montserrat text-[16px] font-normal leading-[19.5px] text-left">
                                                Драма
                                            </p>
                                            <p className="font-montserrat text-[16px] font-normal leading-[19.5px] text-left">
                                                Фантастика
                                            </p>
                                            <p className="font-montserrat text-[16px] font-normal leading-[19.5px] text-left">
                                                Приключения
                                            </p>
                                            <p className="font-montserrat text-[16px] font-normal leading-[19.5px] text-left">
                                                16+
                                            </p>
                                        </div>
                                        <p className="text-sm text-[#FFFFFF] mt-2 h-[86px] mb-[30px] overflow-hidden font-montserrat text-[16px] font-[400] leading-[28.54px] text-left">
                                            {movie.overview}
                                        </p>
                                        <Link
                                            to={`/movie/${movie.id}`}
                                            className="bg-red-600 w-[120px] text-white px-6 py-3 text-lg font-medium flex items-center hover:bg-red-700 transition"
                                            style={{borderRadius: "36px"}}
                                        >
                                            Смотреть
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination2"></div>

            </Swiper>
        </div>
    );
};

export default MovieUpcoming;
