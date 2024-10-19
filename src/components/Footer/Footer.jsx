import React from "react";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Ana Sayfa",
        link: "/#",
    },
    {
        title: "Hakkımızda",
        link: "/#about",
    },
    {
        title: "İletişim",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const FooterRight = [
    {
        title: "Kontrol Paneli",
        link: "/#",
    },
    {
        title: "Sık Sorulan Sorular",
        link: "/#FAQs",
    },
    {
        title: "Destek",
        link: "/#support",
    },
    {
        title: "Hizmet Şartları",
        link: "/#terms",
    },
];

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* Şirket Detayları */}
                    <div className='py-8 px-4'>
                        <a href=""
                            className='text-indigo-600 font-semibold tracking-wide text-2xl sm:text-3xl'
                        >
                            Şirket İsmi
                        </a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                            Uzun metin!
                        </p>
                    </div>

                    {/* Footer Bağlantıları */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className="text-xl font-bold sm:text-left text mb-3"> Hızlı Bağlantılar</h1>
                            <ul className="space-y-3">
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 ">
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* İkinci Kolon Bağlantılar */}
                        <div className='py-8 px-4'>
                            <h1 className="text-xl font-bold sm:text-left text mb-3">Önemli Bağlantılar</h1>
                            <ul className="space-y-3">
                                {
                                    FooterRight.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 ">
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Şirket Adresi */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Adres: Lorem Ipsum Mahallesi, 12345 İstanbul, Türkiye</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt />
                                <p>Telefon: +90 555 123 4567</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
