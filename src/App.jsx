import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Heading from "./components/Shared/Heading";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

// Online placeholder image URL
const placeholderImage = "https://via.placeholder.com/500x300";

const BannerData1 = {
  discount: "%75 İNDİRİM",
  title: "Büyük Sezon İndirim",
  date: "5 Haziran - 24 Ocak",
  image: placeholderImage,  // Replaced with placeholder image URL
  title2: "Kaçırılmayacak Fırsat",
  title3: "En Büyük İndirim",
  title4: "Yılın en büyük indirim fırsatını yakalayın.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "%65 İNDİRİM",
  title: "Yaz Coşkusu",
  date: "21 Ocak - 34 Ocak",
  image: placeholderImage,  // Replaced with placeholder image URL
  title2: "Akıllı Seçimler",
  title3: "Yaz İndirimi",
  title4: "Yazın tadını çıkarın! Akıllı ürünlerle dolu özel indirimlerimizden yararlanın.",
  bgColor: "#2dcc6f",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData1} />
      <Products />
      <Heading />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
