import React from 'react';
import Heading from "../Shared/Heading";
import ProductCard from './ProductCard';

// Online placeholder image URL
const placeholderImage = "https://via.placeholder.com/220";

const ProductsData = [
    {
      id: 1,
      img: placeholderImage,  // Replaced with placeholder image URL
      title: "Ürün 1",
      price: "99.99",
      aosDelay: "0",
    },
    {
      id: 2,
      img: placeholderImage,  // Replaced with placeholder image URL
      title: "Ürün 2",
      price: "99.99",
      aosDelay: "200",
    },
    {
      id: 3,
      img: placeholderImage,  // Replaced with placeholder image URL
      title: "Ürün 3",
      price: "99.99",
      aosDelay: "400",
    },
    {
      id: 4,
      img: placeholderImage,  // Replaced with placeholder image URL
      title: "Ürün 4",
      price: "99.99",
      aosDelay: "600",
    },
];

const ProductsData2 = [];

const Products = () => {
    return (
      <div>
        <div className="container">

          {/* Başlık Bölümü */}
          <Heading title="Ürünlerimiz" subtitle="Ürünlerimizi Keşfedin" />

          {/* Gövde Bölümü */}
          <ProductCard data={ProductsData} />
          <ProductCard data={ProductsData2} />

        </div>
      </div>
    );
};

export default Products;
