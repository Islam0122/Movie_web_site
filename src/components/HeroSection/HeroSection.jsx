import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import movieApi from "../../service/MovieServise.js";
import hero from "../../assets/icons/hero.svg";
import bn1 from "../../assets/icons/bn1.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next"; // Импорт i18n

const HeroSection = () => {
    const { t,i18n } = useTranslation(); // Используем переводы
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const img_url = "https://image.tmdb.org/t/p/original";
    const fallbackImage = "https://via.placeholder.com/1280x720";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { results } = await movieApi.getMovies(i18n.language); // Передаем язык
                setMovies(results.slice(0, 5));
                setLoading(false);
            } catch (error) {
                setError(t("error")); // Перевод ошибки
                setLoading(false);
            }
        };

        fetchMovies();
    }, [t]); // Обновляем при смене языка

    if (loading) {
        return (
            <section className="h-[700px] flex items-center justify-center text-white">
                <p>{t("loading")}</p> {/* Перевод загрузки */}
            </section>
        );
    }

    if (error) {
        return (
            <section className="h-[700px] flex items-center justify-center text-white">
                <p>{error}</p>
            </section>
        );
    }

    return (
        <section className="h-[700px] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination ", // Указываем контейнер для пагинации
                    bulletClass: "custom-pagination-line", // Класс для кастомных элементов
                    bulletActiveClass: "swiper-pagination-bullet-active", // Класс для активного элемента
                }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="h-full relative"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div
                            className="h-full bg-cover bg-center flex items-center"
                            style={{
                                backgroundImage: `url(${movie.backdrop_path ? img_url + movie.backdrop_path : fallbackImage})`,
                            }}
                        >
                            <div className="bg-transparent from-black via-transparent flex items-center px-8 w-[1300px] mx-auto">
                                <div className="text-white space-y-6">
                                    <h2 className="text-4xl font-semibold leading-tight text-left">
                                        {movie.title}
                                    </h2>
                                    <p className="text-lg font-medium leading-relaxed text-left w-[505px] h-[58px] overflow-hidden text-ellipsis whitespace-normal line-clamp-2">
                                        {movie.overview}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Link
                                            to={`/movie/${movie.id}`}
                                            className="bg-red-600 text-white px-6 py-3 text-lg font-medium flex items-center hover:bg-red-700 transition"
                                            style={{ borderRadius: "36px" }}
                                        >
                                            {t("watch")} {/* Перевод кнопки */}
                                            <img src={bn1} alt="button-icon" className="ml-2 w-6 h-6" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кастомные кнопки слайдера */}
            <div className="swiper-button-prev text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                 style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "white" }}>
                <FaArrowLeft size={24} />
            </div>
            <div className="swiper-button-next text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                 style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", color: "white" }}>
                <FaArrowRight size={24} />
            </div>
            <div className="swiper-pagination"></div>
        </section>
    );
};

export default HeroSection;
