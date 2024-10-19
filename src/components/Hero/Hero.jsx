import React from 'react';
import Slider from "react-slick";
import Button from '../Shared/Button';

// Online placeholder image URL
const placeholderImage = "https://via.placeholder.com/500";

const HeroData = [
    {
        id: 1,
        img: placeholderImage,  // Replaced with placeholder image URL
        subtitle: "Teknoloji",
        title: "Yenilik",
        title2: "Deneyim",
        description:
            "Geleceğin teknolojilerini keşfedin ve günlük hayatınıza entegre edin. Kolaylık ve verimlilik için en son çözümleri sunuyoruz.",
    },
    {
        id: 2,
        img: placeholderImage,  // Replaced with placeholder image URL
        subtitle: "Mühendislik",
        title: "Çözüm",
        title2: "Özgürlük",
        description:
            "Yaratıcılığı teknolojiyle buluşturun. Mühendislik çözümleriyle dünyayı daha iyi bir yer haline getiren projeler üzerinde çalışıyoruz.",
    },
    {
        id: 3,
        img: placeholderImage,  // Replaced with placeholder image URL
        subtitle: "İletişim",
        title: "Bağlantı",
        title2: "Güven",
        description:
            "Hızlı ve güvenilir iletişim çözümleriyle her zaman bağlı kalın. İhtiyaçlarınıza uygun güvenli iletişim sistemleriyle sizi destekliyoruz.",
    },
];

const Hero = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className="container mx-auto px-4 mt-4">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[700px] bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    {/* Hero Bölümü */}
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                                    {/* Resim Bölümü */}
                                    <div className="order-1 sm:order-1">
                                        <div className="flex justify-center">
                                            <img
                                                src={data.img}
                                                alt=""
                                                className="w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] object-contain mx-auto drop-shadow-lg transform transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    {/* Metin İçeriği */}
                                    <div className="flex flex-col justify-center gap-6 sm:pl-6 pt-8 sm:pt-0 text-center sm:text-left order-2 sm:order-2 relative z-10">
                                        <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold text-white dark:text-gray-100 drop-shadow-md">{data.subtitle}</h1>
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 dark:text-yellow-400 drop-shadow-md">{data.title}</h1>
                                        <h1 className="text-5xl uppercase text-blue-500 dark:text-blue-500 sm:text-[70px] md:text-[90px] xl:text-[120px] font-bold drop-shadow-lg">
                                            {data.title2}
                                        </h1>
                                        <p className="text-white dark:text-gray-300 text-sm sm:text-lg lg:text-xl max-w-md mx-auto sm:mx-0">
                                            {data.description}
                                        </p>
                                        <div>
                                            <Button
                                                text="Alışverişe Başla"
                                                bgColor="bg-indigo-600 hover:bg-blue-500 dark:bg-indigo-600 dark:hover:bg-blue-500"
                                                textColor="text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;
