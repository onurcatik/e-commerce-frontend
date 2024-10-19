import React from "react";
import Heading from "../Shared/Heading";

const ProductData = [
  {
    title: "En Son Ürünlerimizi Keşfedin",
    subtitle: "Tarzınıza ve bütçenize uygun yüksek kaliteli ürün koleksiyonumuzu inceleyin.",
    published: "Şimdi Mevcut",
    image: "https://via.placeholder.com/220", // Placeholder image URL
  },
  {
    title: "Sadece Size Özel Fırsatlar",
    subtitle: "Birçok ürün kategorisinde özel indirimleri ve fırsatları kaçırmayın.",
    published: "Sınırlı Süre Teklif",
    image: "https://via.placeholder.com/220", // Placeholder image URL
  },
  {
    title: "Her Kategoride Yeni Gelenler",
    subtitle: "En yeni eklemelerimizi keşfedin ve trendlerin önünde kalın.",
    published: "Günlük Güncelleme",
    image: "https://via.placeholder.com/220", // Placeholder image URL
  },
  {
    title: "Yaşam Tarzınıza Uygun En İyi Seçimler",
    subtitle: "Günlük rutininizi iyileştiren ve deneyiminizi yükselten özenle seçilmiş ürünler.",
    published: "Sizin İçin Önerilen",
    image: "https://via.placeholder.com/220", // Placeholder image URL
  },
  {
    title: "En Çok Satan Ürünleri Satın Alın",
    subtitle: "Memnun müşterilerimize katılın ve en popüler, en yüksek puanlı ürünlerimizi tercih edin.",
    published: "Yüksek Puanlı",
    image: "https://via.placeholder.com/220", // Placeholder image URL
  },
  {
    title: "Mükemmel Hediyeyi Bulun",
    subtitle: "Kendiniz ya da sevdikleriniz için mükemmel hediyeyi bulabileceğiniz ürünlerimizi keşfedin.",
    published: "Hediye Fikirleri",
    image: "https://via.placeholder.com/220", // Placeholder image URL
  },
];

const Products = () => {
  return (
    <div className="my-12">
      <div className="container">

        {/* Başlık bölümü */}
        <Heading title="Ürünlerimiz" subtitle="En Son Trendleri ve Fırsatları Keşfedin" />

        {/* Ürünler bölümü */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Ürün Kartı */}
          {
            ProductData.map((data) => (
              <div key={data.title} className="bg-white dark:bg-gray-900">
                {/* Resim bölümü */}
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img src={data.image} alt="" 
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
                </div>
                {/* İçerik bölümü */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">{data.published}</p>
                  <p className="font-bold line-clamp-1">{data.title}</p>
                  <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
