import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";

const Layoat = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layoat;