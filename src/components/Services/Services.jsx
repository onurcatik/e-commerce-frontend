import React from "react";
import { 
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa"

const ServiceData = [
    {
      id: 1,
      icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
      title: "Ücretsiz Kargo",
      description: "Tüm Siparişlerde Ücretsiz Kargo",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
      title: "Güvenli Alışveriş",
      description: "30 Gün İçinde Para İade Garantisi",
    },
    {
      id: 3,
      icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
      title: "Güvenli Ödeme",
      description: "Tüm Ödemeler Güvence Altında",
    },
    {
      id: 4,
      icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
      title: "7/24 Destek",
      description: "7/24 Teknik Destek",
    },
  ];
  

const Services = () => {
  return (
    <div>
      <div className="container mt-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              {data.icon}
              <div>
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
