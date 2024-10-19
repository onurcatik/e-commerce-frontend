import React from "react";

// Assuming your uploaded image is located at /mnt/data/image.png
const Banner = ({ data }) => {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12">
            <div className="container mx-auto px-4">
                <div
                    style={{ backgroundColor: data.bgColor }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
                >
                    {/* İlk Kolon */}
                    <div className="p-6 sm:p-8">
                        <p className="text-sm">{data.discount}</p>
                        <h1 className="hover-text-effect bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-700 bg-[length:200%_100%] bg-[0%] transition-all duration-500 ease-in-out hover:bg-[100%] uppercase text-4xl lg:text-7xl font-bold">
                            {data.title}
                        </h1>
                        {/* <h1 className="uppercase text-4xl lg:text-7xl font-bold">
                            {data.title}
                        </h1> */}
                        <p className="text-sm">{data.date}</p>
                    </div>

                    {/* İkinci Kolon - Resim */}
                    <div className="h-full flex items-center justify-center overflow-hidden w-full p-6">
                        <img
                            src={data.image || "/mnt/data/image.png"} // Use the uploaded image path
                            alt="Resim açıklaması"
                            className="w-full max-w-xs md:max-w-md lg:max-w-lg object-cover drop-shadow-lg opacity-80" // 80% opacity
                        />
                    </div>

                    {/* Üçüncü Kolon */}
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p className="font-bold text-xl">{data.title2}</p>
                        <p className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
                        <p className="text-sm tracking-wide leading-5">{data.title4}</p>
                        <div>
                            <button
                                style={{ color: data.bgColor }}
                                className="bg-white py-2 px-4 rounded hover:bg-indigo-600 duration-300 transition-all ease-out"
                            >
                                Şimdi Alışveriş Yap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
