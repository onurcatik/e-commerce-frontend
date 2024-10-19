import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaShoppingCart, FaBars } from 'react-icons/fa';  // Imported Font Awesome icons
import { IoMdSearch } from "react-icons/io";  // Imported Ionicons search icon

const MenuLinks = [
    { id: 1, name: "Ana Sayfa", link: "/#" },
    { id: 2, name: "Mağaza", link: "/#shop" },
    { id: 3, name: "Hakkımızda", link: "/#about" },
    { id: 4, name: "Bloglar", link: "/#blogs" },
];

const DropdownLinks = [
    { id: 1, name: "Popüler Ürünler", link: "/#" },
    { id: 2, name: "En Çok Satanlar", link: "/#" },
    { id: 3, name: "En Yüksek Puanlı", link: "/#" }
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 duration-200 relative z-40'>
            <div className='py-6 shadow-md'>
                <div className="container mx-auto flex justify-between items-center px-6">
                    {/* Logo ve Menü Bölümü */}
                    <div className='flex gap-8 items-center'>
                        {/* Logo */}
                        <div>
                            <a href="#" className='text-indigo-600 font-bold text-3xl tracking-wide'>
                                Şirket İsmi
                            </a>
                        </div>
                        {/* Hamburger Menü İkonu */}
                        <div className='lg:hidden'>
                            <button onClick={() => setMenuOpen(!menuOpen)} className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
                                <FaBars className='text-2xl' />  {/* Hamburger icon */}
                            </button>
                        </div>
                        {/* Menü Öğeleri */}
                        <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'} lg:static ml-5 top-full left-0 w-full lg:w-auto bg-gray-100 dark:bg-gray-800 lg:bg-transparent shadow-lg lg:shadow-none p-6 lg:p-0 absolute`}>
                            <ul className='flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-4'>
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block px-4 py-2 hover:text-indigo-600 transition-colors'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                {/* Açılır Menü */}
                                <li className='relative group cursor-pointer'>
                                    <a href="#" className='flex items-center gap-2 py-4 hover:text-indigo-600 transition-colors'>
                                        <span>Hızlı Bağlantılar</span>
                                        <FaCaretDown className='mr-8 group-hover:rotate-180 transition-transform duration-300' />  {/* Dropdown arrow icon */}
                                    </a>

                                    {/* Açılır Menü Bağlantıları */}
                                    <div className='absolute hidden group-hover:block w-48 mt-2 rounded-lg bg-white shadow-lg dark:bg-gray-900 p-4 text-gray-800 dark:text-gray-300'>
                                        <ul className='space-y-3'>
                                            {DropdownLinks.map((data) => (
                                                <li key={data.id}>
                                                    <a href={data.link} className='block hover:text-indigo-600 transition-colors'>
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Navbar Sağ Bölüm */}
                    <div className='flex items-center gap-6'>
                        {/* Arama Çubuğu */}
                        <div className='relative hidden sm:block'>
                            <input
                                type="text"
                                placeholder="Ürün arayın..."
                                className='bg-white dark:bg-gray-700 text-sm py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            />
                            <IoMdSearch className='text-lg text-gray-500 dark:text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />  {/* Search icon */}
                        </div>
                        {/* Sepet İkonu */}
                        <button className='relative p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors'>
                            <FaShoppingCart className='text-xl' />  {/* Cart icon */}
                            <div className='w-5 h-5 bg-red-600 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                        </button>
                        {/* Karanlık Mod Geçişi */}
                        <button
                            onClick={toggleDarkMode}
                            className='p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-2xl'
                        >
                            {darkMode ? '🌙' : '☀️'}  {/* Dark Mode toggle with icons */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
