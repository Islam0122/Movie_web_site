import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import movieApi from "../service/MovieServise";
import bn1 from "../assets/icons/bn1.svg";
import bn2 from "../assets/icons/bn2.svg";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]); // Новый state для актеров
    const [crew, setCrew] = useState([]); // Новый state для создателей
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const img_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await movieApi.getMovieById(id);
                setMovie(data);


                const credits = await movieApi.getMovieCredits(id); // Получаем актеров и создателей
                setCast(credits.cast.slice(0, 10)); // Ограничиваем до 10 актеров
                setCrew(credits.crew.filter(person => person.job === "Director")); // Выбираем режиссеров

                setLoading(false);
            } catch (error) {
                setError("Failed to fetch movie details.");
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return (
            <section className="h-screen flex items-center justify-center text-white">
                <p>Загрузка...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="h-screen flex items-center justify-center text-white">
                <p>{error}</p>
            </section>
        );
    }

    return  (
        <section className="bg-black">
            <div className="relative h-[720px] bg-cover bg-center text-white"
                 style={{backgroundImage: `url(${img_url}${movie.backdrop_path})`,}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div
                    className="relative z-10 flex flex-col md:flex-row justify-center items-center  gap-8 px-8 md:px-16 py-16 max-w-7xl mx-auto h-full">
                    {/* Постер */}
                    <img
                        src={`${img_url}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-72 h-96 rounded-lg shadow-lg"
                        style={{
                            marginRight: "120px"
                        }}
                    />

                    {/* Контент */}
                    <div className="text-left">
                        <h1
                            className="text-4xl font-semibold leading-tight text-left  decoration-1 decoration-current underline-offset-2"
                        >
                            {movie.title}
                        </h1>


                        {/* Информация о фильме */}
                        <div className="flex flex-wrap items-center gap-4 text-white text-sm mb-6 " style={{
                            marginBottom: "20px",
                            marginTop: "15px"
                        }}>
                        <span className="font-montserrat text-base font-medium leading-[19.5px] text-left mr-[15px]">
                            {movie.release_date.split("-")[0]}
                        </span>
                            <span
                                className="font-montserrat text-base font-medium leading-[19.5px] text-left mr-[15px]">
                            {movie.runtime} мин
                        </span>
                            <span
                                className="font-montserrat text-base font-medium leading-[19.5px] text-left mr-[15px] uppercase">
                            {movie.adult ? "18+" : "PG-13"}
                        </span>
                            <span className="font-montserrat text-base font-medium leading-[19.5px] text-left">
                            {movie.genres.map((genre) => genre.name).join(", ")}
                        </span>
                        </div>

                        <p className="text-white-300 text-base leading-7 mb-6 text-left line-clamp-3">
                            {movie.overview}
                        </p>

                        {/* Кнопки */}
                        <div className="flex gap-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white py-3 px-6  flex items-center gap-2  h-[50px] "
                                style={{borderRadius: "36px", marginRight: "30px"}}
                            >
                                Смотреть по подписке
                                <img
                                    src={bn1}
                                    alt="button-icon"
                                    className="w-6 h-6"
                                />
                            </button>

                            <button
                                className="bg-red-500 hover:bg-red-600 text-white py-3 px-6  flex items-center gap-2  h-[50px] "
                                style={{borderRadius: "36px"}}
                            >В избранное
                                <img
                                    src={bn2}
                                    alt="button-icon"
                                    className="w-6 h-6"
                                /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cast-and-crew mt-10 relative p-6 max-w-[1164px]  mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white font-montserrat leading-[29.26px] text-left" style={{
                    marginBottom: "50px"
                }}>
                    Актеры и Создатели
                </h2>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    modules={[Navigation]}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {cast.map((person) => (
                        <SwiperSlide key={person.id}>
                            <div
                                className="relative w-[220px]  h-[180px]  rounded-lg flex flex-col items-center pt-[60px]" style={{
                                    marginTop:"79px",
                                    background: "rgba(26, 26, 26, 1)",
                            }}>
                                <div className="absolute top-[-47px]">
                                    <img
                                        src={person.profile_path ? `${img_url}${person.profile_path}` : "/placeholder.jpg"}
                                        alt={person.name}
                                        className="w-[130px] h-[130px] rounded-full border-4 border-gray-800 object-cover"
                                    />
                                </div>
                                <div className="mt-[40px] text-center ">
                                    <h3 className="text-white text-[18px] font-medium leading-[22px] mb-[10px]">
                                        {person.name}
                                    </h3>
                                    <p className="text-gray-400 text-[16px] font-normal leading-[19px]">
                                        {person.character || person.job}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>

    );
};


export default MoviePage;

