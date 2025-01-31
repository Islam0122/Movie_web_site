import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Импорт i18next
import search from "../../assets/icons/search.svg";
import movieApi from "../../service/MovieServise.js";
import {Link} from "react-router";

const Search = () => {
    const { t, i18n  } = useTranslation(); // Хук для перевода
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const img_url = "https://image.tmdb.org/t/p/original";

    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 2) {
            setLoading(true);
            const data = await movieApi.getMoviebyName(value, i18n.language);
            setSuggestions(data.results);
            setLoading(false);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="app-container text-left py-8 bg-black">
            <h3 className="text-white text-2xl font-semibold mb-4">
                {t("search_site")}
            </h3>
            <p className="text-gray-400 text-sm font-montserrat text-left w-[385px] mb-[60px] mt-[15px]">
                {t("find_movies")}
            </p>
            <div className="flex justify-start">
                <div
                    className="flex w-[1089px] h-[50px] rounded-md"
                    style={{ background: "rgba(26, 26, 26, 1)" }}
                >
                    <input
                        type="text"
                        placeholder={t("search_placeholder")}
                        className="flex-grow p-3 rounded-l-md text-white placeholder-gray-500"
                        style={{ background: "rgba(26, 26, 26, 1)" }}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="p-3 text-red-500 rounded-r-md flex items-center justify-center">
                        <img src={search} alt="search" className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {loading && <div className="text-white mt-4">{t("loading")}</div>}

            {suggestions.length > 0 && (
                <div
                    className="mt-4 rounded-lg shadow-lg p-4 max-w-[600px]"
                    style={{ background: "rgba(26, 26, 26, 1)" }}
                >
                    {suggestions.slice(0, 5).map((movie) => (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            className="block text-white py-3 px-4 mb-2 rounded-lg shadow-md transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center">
                                {movie.poster_path && (
                                    <img
                                        src={`${img_url + movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-16 h-24 rounded-md mr-4 object-cover"
                                    />
                                )}
                                <div>
                                    <h4 className="text-lg font-semibold">{movie.title}</h4>
                                    {movie.release_date && (
                                        <p className="text-sm text-gray-400">
                                            {new Date(movie.release_date).getFullYear()}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
