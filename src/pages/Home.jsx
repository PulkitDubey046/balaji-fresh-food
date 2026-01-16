import logo from "../assets/logo.png";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectFade,
  Navigation,
} from "swiper/modules";

/* Swiper styles */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const heroImages = [hero1, hero2, hero3];

export default function Home({ onNavigate }) {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          pagination={{ clickable: true }}
          navigation={true}
          className="min-h-[70vh]"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative min-h-[70vh] flex items-center justify-center text-center"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 max-w-4xl px-6">
                  {/* Brand */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <img
                      src={logo}
                      alt="Balaji Fresh Food"
                      className="w-14 h-14"
                    />
                    <span className="text-2xl font-extrabold text-white md:text-3xl">
                      Balaji Fresh Food
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="mb-4 text-3xl font-black leading-tight text-white md:text-5xl">
                    Pure & Hygienic
                    <br />
                    Chana Besan and Sattu
                  </h1>

                  <p className="mb-8 text-lg text-gray-100 md:text-xl">
                    Manufactured with care, quality raw materials, and modern
                    hygienic processes. Trusted by households, retailers, and
                    distributors.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                      onClick={() => onNavigate("services")}
                      className="px-8 py-4 font-semibold text-white transition bg-red-700 rounded-xl hover:bg-red-800"
                    >
                      View Products
                    </button>
                    <button
                      onClick={() => onNavigate("contact")}
                      className="px-8 py-4 font-semibold text-gray-900 transition bg-yellow-400 rounded-xl hover:bg-yellow-300"
                    >
                      Contact for Orders
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* WHY BALAJI */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2 className="mb-10 text-3xl font-black text-red-700 md:text-4xl">
          Why Choose Balaji Fresh Food
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Pure Ingredients",
              text: "Carefully selected raw materials to ensure natural taste and nutrition.",
            },
            {
              title: "Hygienic Processing",
              text: "Manufactured using clean, modern processes under strict quality control.",
            },
            {
              title: "Trusted Supply",
              text: "Reliable production suitable for households, retailers, and bulk buyers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white border-t-4 border-red-600 shadow-md rounded-2xl"
            >
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-12 text-center bg-yellow-400">
        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
          Looking for Quality Besan & Sattu?
        </h3>
        <p className="mb-6 text-gray-800">
          Contact us today for bulk orders, distribution, or inquiries.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="px-10 py-4 font-semibold text-white transition bg-red-700 rounded-xl hover:bg-red-800"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
}
