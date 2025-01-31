import React from 'react';
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Search from "../components/Search/Search.jsx";
import Category from "../components/Category/Category.jsx";
import FilterButton from "../components/FilterSection/FilterSection.jsx";
import MovieUpcoming from "../components/ MovieUpcoming/MovieUpcoming.jsx";


const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <Search/>
            <Category/>
            <FilterButton/>
            <MovieUpcoming/>
        </main>
    );
};

export default HomePage;
