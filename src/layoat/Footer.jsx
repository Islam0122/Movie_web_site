import React from 'react';
import { useTranslation } from 'react-i18next';
import Gmail from "../assets/icons/gmail.svg";
import Phone from "../assets/icons/phone.svg";
import Telegram from "../assets/icons/telegram.svg";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black text-white py-6">
            <div className="bg-[#1A1A1A] py-12">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center text-center lg:text-left">

                    {/* Первый столбец */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('footer.company')}</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline transition">{t('footer.about')}</a></li>
                            <li><a href="#" className="hover:underline transition">{t('footer.blog')}</a></li>
                            <li><a href="#" className="hover:underline transition">{t('footer.jobs')}</a></li>
                            <li><a href="#" className="hover:underline transition">{t('footer.offers')}</a></li>
                        </ul>
                    </div>

                    {/* Второй столбец */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('footer.help')}</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline transition">{t('footer.faq')}</a></li>
                            <li><a href="#" className="hover:underline transition">{t('footer.contacts')}</a></li>
                        </ul>
                    </div>

                    {/* Третий столбец */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('footer.support')}</h3>
                        <p className="mb-6">
                            {t('footer.support_text')}
                        </p>
                        <div className="flex space-x-4 mb-6 justify-center lg:justify-start">
                            <a href="#" aria-label="Позвонить" className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                                <img src={Phone} alt="Phone" className="w-5 h-5"/>
                            </a>
                            <a href="#" aria-label="Написать на Gmail" className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                                <img src={Gmail} alt="Gmail" className="w-5 h-5"/>
                            </a>
                            <a href="#" aria-label="Написать в Telegram" className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                                <img src={Telegram} alt="Telegram" className="w-5 h-5"/>
                            </a>
                        </div>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                            {t('footer.chat')}
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center py-4 px-6 text-sm font-medium">
                <p className="text-left">© 2015-2024 Cinemax</p>
                <a href="#" className="text-right hover:underline">{t('footer.terms')}</a>
            </div>
        </footer>
    );
};

export default Footer;
