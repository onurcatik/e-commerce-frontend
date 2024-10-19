import React, { useState } from "react";
import Button from "../Shared/Button";

// Online placeholder image URL
const placeholderImage = "https://via.placeholder.com/270";

const Category = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Kategorilerimizi Keşfedin
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* İlk Kolon */}
            <div className="p-8 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-xl relative h-[350px] sm:h-[370px] flex flex-col justify-between overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div>
                <p className="mb-[2px] text-white">Ürün</p>
                <p className="text-2xl font-semibold mb-[2px]">İle</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80 mb-2">Teknoloji</p>
                <h3 className="text-3xl font-bold mb-4">Kablo Aksesuarları</h3>
                <Button text="Gözat" bgColor="bg-white" textColor="text-indigo-600" />
              </div>
              <img
                src={placeholderImage}  // Replaced with placeholder image URL
                alt="Kablo Aksesuarları"
                className="absolute bottom-0 right-0 w-[270px] opacity-50 transform scale-80 translate-x-2 translate-y-2 dark:opacity-95"
              />
            </div>

            {/* İkinci Kolon */}
            <div className="p-8 bg-gradient-to-bl from-green-500 to-teal-400 text-white rounded-xl shadow-xl relative h-[350px] sm:h-[370px] flex flex-col justify-between overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div>
                <p className="mb-[2px] text-white">Ürün</p>
                <p className="text-2xl font-semibold mb-[2px]">İle</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80 mb-2">Ses Sistemleri</p>
                <h3 className="text-3xl font-bold mb-4">Ses Deneyimi</h3>
                <Button text="Gözat" bgColor="bg-white" textColor="text-green-700" />
              </div>
              <img
                src={placeholderImage}  // Replaced with placeholder image URL
                alt="Ses Sistemleri"
                className="absolute bottom-0 right-0 w-[270px] opacity-50 transform scale-80 translate-x-2 translate-y-2 dark:opacity-95"
              />
            </div>

            {/* Üçüncü Kolon */}
            <div className="p-8 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-xl shadow-xl relative h-[350px] sm:h-[370px] flex flex-col justify-between overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div>
                <p className="text-white">Ürün</p>
                <p className="text-2xl font-semibold mb-[2px]">İle</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">Dizüstü Bilgisayar</p>
                <h3 className="text-3xl font-bold mb-4">Oyun Bilgisayarı</h3>
                <Button text="Gözat" bgColor="bg-white" textColor="text-orange-700" />
              </div>
              <img
                src={placeholderImage}  // Replaced with placeholder image URL
                alt="Dizüstü Bilgisayar"
                className="absolute bottom-0 right-0 w-[270px] opacity-50 transform scale-80 translate-x-2 translate-y-2 dark:opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
