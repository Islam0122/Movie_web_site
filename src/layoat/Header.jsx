import React from 'react';
import Logo from '../assets/logo/logo.svg';
import UserIcon from '../assets/logo/user.svg';
import {NavLink} from "react-router";

const Header = () => {
    return (
        <header className="fixed  w-full bg-transparent text-white z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Логотип и ссылка */}
                <div className="flex items-center gap-10">
                    <img src={Logo} alt="Logo" className="h-8"/>
                    <NavLink to="/" className="text-lg font-medium hover:text-red-500">Главная</NavLink>
                </div>

                {/* Язык и иконка пользователя */}
                <div className="flex items-center gap-10">
                    <p className="cursor-pointer hover:text-red-500">EN</p>
                    <img src={UserIcon} alt="User Icon" className="h-8 cursor-pointer"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
