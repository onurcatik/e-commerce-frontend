import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Kart bölümü */}
        {data.map((data) => (
          <div className="group" key={data.id}>
            <div className="relative">
              <img
                src={data.img}
                alt={data.title}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover butonu */}
              <div className="hidden group-hover:flex absolute top-1/2 right-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text={"Sepete Ekle"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">{data.price}₺</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
