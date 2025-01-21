import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "../pages/HomePage.jsx";
import Layoat from "../layoat/Layoat.jsx";
import  "../App.css"
import MoviePage from "../pages/MoviePage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <Layoat/>}>
                        <Route index element={ <HomePage/>} />
                        <Route path="/movie/:id" element={<MoviePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
