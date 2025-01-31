import React from 'react';
import Logo from '../assets/logo/logo.svg';
import UserIcon from '../assets/logo/user.svg';
import {NavLink} from "react-router";
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();

    // Функция смены языка
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="fixed w-full bg-transparent text-white z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Логотип и ссылка */}
                <div className="flex items-center gap-10">
                    <img src={Logo} alt="Logo" className="h-8" />
                    <NavLink to="/" className="text-lg font-medium hover:text-red-500">
                        {t('header.home')}
                    </NavLink>
                </div>

                {/* Выбор языка и иконка пользователя */}
                <div className="flex items-center gap-10">
                    <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        value={i18n.language}
                        className="bg-transparent text-white border border-gray-400 px-3 py-1 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    >
                        <option value="en" className="text-black">EN</option>
                        <option value="ru" className="text-black">RU</option>
                    </select>
                    <img src={UserIcon} alt="User Icon" className="h-8 cursor-pointer"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
