import React from 'react';
import Gmail from "../assets/icons/gmail.svg";
import Phone from "../assets/icons/phone.svg";
import Telegram from "../assets/icons/telegram.svg";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div style={{background: "rgba(26, 26, 26, 1)", padding: "48px", alignItems: "center",justifyContent:"center",margin: "0px"}}>
                <div className="container mx-909 grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center m-auto">
                    {/* Первый столбец */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Cinemax</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">О нас</a></li>
                            <li><a href="#" className="hover:underline">Блог</a></li>
                            <li><a href="#" className="hover:underline">Вакансии</a></li>
                            <li><a href="#" className="hover:underline">Акции</a></li>
                        </ul>
                    </div>

                    {/* Второй столбец */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Помощь</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Вопросы и ответы</a></li>
                            <li><a href="#" className="hover:underline">Контакты</a></li>
                        </ul>
                    </div>

                    {/* Третий столбец */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Поддержка</h3>
                        <p className="mb-6">
                            Мы всегда готовы вам помочь.<br/>
                            Наши операторы онлайн 24/7.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" aria-label="Позвонить" className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                                <img src={Phone} alt="Phone" className="w-5 h-5"/>
                            </a>
                            <a href="#" aria-label="Написать на Gmail"
                               className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                                <img src={Gmail} alt="Gmail" className="w-5 h-5"/>
                            </a>
                            <a href="#" aria-label="Написать в Telegram"
                               className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                                <img src={Telegram} alt="Telegram" className="w-5 h-5"/>
                            </a>
                        </div>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                            Написать в чате
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center py-4 px-6 text-sm font-medium">
                <p className="text-left">© 2015-2024 Cinemax</p>
                <a href="#" className="text-right hover:underline">Пользовательское соглашение</a>
            </div>
        </footer>
    );
};

export default Footer;
