import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import movieApi from "../../service/MovieServise";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Category = () => {
    const { i18n, t } = useTranslation(); // Получаем текущий язык
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        movieApi
            .getMovieGenreList(i18n.language) // Передаем язык
            .then((res) => setGenres(res.genres))
            .finally(() => setLoading(false));
    }, [i18n.language]); // Запрос будет меняться при смене языка

    return (
        <div className="app-container text-left py-8 bg-black text-white">
            <h3 className="montserrat text-2xl font-bold mb-2">
                {t("watch_movies_you_like")}
            </h3>
            <p className="montserrat text-gray-400 w-[421px] mb-6">
                {t("site_has_many_movies")}
            </p>
            {loading ? (
                <p>{t("loading")}</p>
            ) : (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    modules={[Navigation]}
                    loop={true}
                    className="mySwiper"
                >
                    {genres.map((genre) => (
                        <SwiperSlide key={genre.id}>
                            <div className="w-[310px] h-[170px] bg-[#1A1A1A] rounded-lg flex flex-col justify-center items-center shadow-lg">
                                <h4 className="text-[20px] font-medium leading-[24.38px] text-left font-montserrat mb-2">
                                    {genre.name[0].toUpperCase() + genre.name.slice(1)}
                                </h4>
                                <p className="text-[16px] font-normal leading-[19.5px] text-left text-[#EF4234] font-montserrat">
                                    {genre.id}к+ {t("movies")}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Category;
