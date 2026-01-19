import React from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { useIsTouchDevice } from "../hooks/useTouchDetection";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    image: hero1,
    title: "Pure & Hygienic",
    subtitle: "Chana Besan & Sattu",
    desc: "Manufactured with care using premium raw materials and strict hygiene standards.",
    accent: "Natural Quality",
  },
  {
    image: hero2,
    title: "Authentic Taste",
    subtitle: "Traditional Milling",
    desc: "Stone-ground methods that preserve nutrition, aroma, and real flavor.",
    accent: "Traditional",
  },
  {
    image: hero3,
    title: "Trusted Supply",
    subtitle: "Retail & Bulk Orders",
    desc: "Reliable production trusted by homes, shops, and distributors.",
    accent: "Wholesale",
  },
];

export default function Home({ onNavigate }) {
  const isTouch = useIsTouchDevice();

  return (
    <div className="w-full overflow-hidden bg-white">
      <section className="relative min-h-screen lg:min-h-[85vh] flex items-center bg-[#fffcf7]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          // Only show navigation arrows on actual desktops with mice
          navigation={!isTouch && window.innerWidth > 1024}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="bg-[#fffcf7]">
              <div className="grid items-center grid-cols-1 gap-12 px-6 py-20 mx-auto max-w-7xl lg:grid-cols-2 force-mobile">
                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="order-2 lg:order-1"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-green-700 bg-green-100 rounded-full">
                    <span className="relative flex w-3 h-3">
                      <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
                    </span>
                    {s.accent}
                  </div>

                  <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black text-gray-900 leading-[1.1] mb-4">
                    {s.title}
                    <br />
                    <span className="text-orange-500">{s.subtitle}</span>
                  </h1>

                  <p className="max-w-lg mb-8 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-gray-600">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => onNavigate("services")}
                      className="px-8 py-4 font-bold text-[clamp(0.95rem,2vw,1rem)] text-white transition-all duration-300 bg-orange-500 shadow-lg rounded-2xl shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1"
                    >
                      View Products
                    </button>
                    <button
                      onClick={() => onNavigate("contact")}
                      className="px-8 py-4 font-bold text-[clamp(0.95rem,2vw,1rem)] text-gray-900 transition bg-white border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-orange-200"
                    >
                      Contact Us
                    </button>
                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  className="relative flex justify-center order-1 lg:order-2"
                >
                  <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-30" />

                  <div className="relative z-10 w-full max-w-[450px] aspect-square overflow-hidden rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-[12px] border-white bg-gray-100">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}