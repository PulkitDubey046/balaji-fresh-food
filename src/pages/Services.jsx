import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Assets
import besan from "../assets/besan_img.png";
import sattu from "../assets/Sattu_img.png";
import product1 from "../assets/balaji1.jpg";
import product2 from "../assets/balaji2.jpg";
import product3 from "../assets/balaji3.jpg";
import product4 from "../assets/balaji4.jpg";
import product5 from "../assets/balaji5.jpg";
import product6 from "../assets/balaji6.jpg";
import product7 from "../assets/balaji7.jpg";

export default function Services() {
  const products = [
    {
      title: "Chana Besan",
      description: "Finely milled from high-quality chickpeas, our besan is perfect for premium snacks and traditional sweets.",
      image: besan,
      features: ["100% Pure Chana", "Advanced Milling", "Rich in Protein", "Hygienic Pack"]
    },
    {
      title: "Chana Sattu",
      description: "A nutritious, high-fiber roasted gram flour that provides instant energy and authentic traditional flavor.",
      image: sattu,
      features: ["Roasted Gram", "High Fiber", "Traditional Taste", "No Preservatives"]
    },
    {
      title: "Bengal Tiger Special Farsan",
      description: "Premium grinding quality specifically designed for commercial snack production and crispy textures.",
      image: product1,
      features: ["Industrial Grade", "30Kg Bulk Pack", "Superior Crisp", "Pro Choice"]
    },
    {
      title: "Bengal Tiger Regular Besan",
      description: "High-purity gram flour processed for everyday culinary use and consistent culinary results.",
      image: product2,
      features: ["Sortex Cleaned", "Versatile Use", "Natural Flavor", "High Yield"]
    },
    {
      title: "Bengal Tiger Premium Farsan",
      description: "A specialized flour blend optimized for long-lasting freshness in savory fried snacks.",
      image: product3,
      features: ["Low Oil Absorption", "High Adhesion", "Uniform Quality", "Freshness"]
    },
    {
      title: "Bengal Tiger Super Fine",
      description: "Extra-fine grinding quality that ensures smooth batters and premium sweet preparation.",
      image: product4,
      features: ["Extra Fine Mesh", "Lump-Free", "Professional Grade", "Smooth"]
    },
    {
      title: "Bengal Tiger Selection",
      description: "Sourced from premium chickpeas to provide the authentic taste and aroma of traditional Farsan.",
      image: product5,
      features: ["Selected Grains", "Aromatic", "Protein Rich", "Traditional"]
    },
    {
      title: "Bengal Tiger Commercial",
      description: "Consistent performance flour designed for large-scale production and catering needs.",
      image: product6,
      features: ["Bulk Value", "Tested Quality", "High Yield", "Reliable"]
    },
    {
      title: "Bengal Tiger Export Quality",
      description: "Our highest grade of gram flour, ensuring international standards of purity and texture.",
      image: product7,
      features: ["Global Standards", "Strict QC", "Premium Texture", "Export Grade"]
    }
  ];

  // Reusable Card Design
  const ProductCard = ({ p, i, isMobile = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white overflow-hidden rounded-[2.5rem] shadow-xl border-t-8 border-red-600 hover:shadow-2xl transition-all duration-300 h-full mx-2 my-4"
    >
      {/* Image Area - Tall h-96 on mobile, standard h-64 on desktop */}
      <div className={`relative flex items-center justify-center overflow-hidden bg-yellow-50/50 ${isMobile ? 'h-[400px] p-4' : 'h-64 p-8'}`}>
        <img
          src={p.image}
          alt={p.title}
          className={`object-contain w-full h-full transition-transform duration-500 group-hover:scale-110 ${isMobile ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-4 right-6">
          <span className="px-3 py-1 text-[10px] font-black text-red-700 uppercase bg-white/90 rounded-full shadow-sm">
            Premium
          </span>
        </div>
      </div>

      {/* Text Area */}
      <div className="flex flex-col flex-grow p-8">
        <h3 className="mb-3 text-2xl font-black text-gray-900 leading-tight">
          {p.title}
        </h3>
        <p className="flex-grow mb-6 text-sm leading-relaxed text-gray-600">
          {p.description}
        </p>

        {/* Features list */}
        <div className="pt-5 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {p.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="px-5 py-20 mx-auto max-w-7xl overflow-hidden" id="services">
      {/* Section Title */}
      <div className="mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-bold tracking-widest text-red-600 uppercase"
        >
          Balaji Traders
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-2 text-4xl font-black text-red-700 md:text-5xl"
        >
          Our Premium Products
        </motion.h2>
        <div className="w-24 h-1.5 mx-auto mt-4 bg-red-600 rounded-full" />
      </div>

      {/* --- DESKTOP VIEW: Grid --- */}
      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={i} p={p} i={i} isMobile={false} />
        ))}
      </div>

      {/* --- MOBILE VIEW: Slideshow with LARGE Images --- */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1.05} // Slightly larger card focus
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-14"
        >
          {products.map((p, i) => (
            <SwiperSlide key={i} className="h-auto">
              {/* Force larger mobile image style here */}
              <ProductCard p={p} i={0} isMobile={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: #e5e7eb; opacity: 1; }
        .swiper-pagination-bullet-active {
          background: #b91c1c !important;
          width: 25px;
          border-radius: 5px;
          transition: all 0.3s;
        }
        .swiper-pagination { bottom: 0px !important; }
      `}} />
    </main>
  );
}