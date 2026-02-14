import { motion } from "framer-motion";
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
      features: ["100% Pure Chana", "High Protein", "Hygienic Process"]
    },
    {
      title: "Chana Sattu",
      description: "A nutritious, high-fiber roasted gram flour that provides instant energy and authentic traditional flavor.",
      image: sattu,
      features: ["Traditional Roast", "High Fiber", "Zero Preservatives"]
    },
    {
      title: "Bengal Tiger Special Farsan Flour",
      description: "Premium grinding quality specifically designed for commercial snack production and crispy textures.",
      image: product1,
      features: ["Industrial Grade", "30Kg Bulk Pack", "Superior Crisp"]
    },
    {
      title: "Bengal Tiger Regular Besan",
      description: "High-purity gram flour processed for everyday culinary use and consistent culinary results.",
      image: product2,
      features: ["Sortex Cleaned", "Versatile Use", "Natural Flavor"]
    },
    {
      title: "Bengal Tiger Premium Farsan",
      description: "A specialized flour blend optimized for long-lasting freshness in savory fried snacks.",
      image: product3,
      features: ["Low Oil Absorption", "High Adhesion", "Uniform Quality"]
    },
    {
      title: "Bengal Tiger Super Fine Besan",
      description: "Extra-fine grinding quality that ensures smooth batters and premium sweet preparation.",
      image: product4,
      features: ["Extra Fine Mesh", "Lump-Free", "Professional Choice"]
    },
    {
      title: "Bengal Tiger Selection Flour",
      description: "Sourced from premium chickpeas to provide the authentic taste and aroma of traditional Farsan.",
      image: product5,
      features: ["Selected Grains", "Aromatic Quality", "Protein Rich"]
    },
    {
      title: "Bengal Tiger Commercial Blend",
      description: "Consistent performance flour designed for large-scale production and catering needs.",
      image: product6,
      features: ["Bulk Value", "Tested Quality", "High Yield"]
    },
    {
      title: "Bengal Tiger Export Quality",
      description: "Our highest grade of gram flour, ensuring international standards of purity and texture.",
      image: product7,
      features: ["Global Standards", "Strict QC", "Premium Grinding"]
    }
  ];

  return (
    <main className="px-5 py-20 mx-auto max-w-7xl bg-gray-50">
      <div className="mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-bold tracking-widest text-red-600 uppercase"
        >
          Balaji Traders
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-4xl font-black text-gray-900 md:text-5xl"
        >
          Our Premium Products
        </motion.h2>
        <div className="w-24 h-1 mx-auto mt-4 bg-red-600 rounded-full" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative h-64 p-6 bg-[#fdfdfd] flex items-center justify-center group">
              <img
                src={p.image}
                alt={p.title}
                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-grow p-8">
              <h3 className="mb-3 text-xl font-bold text-gray-900">{p.title}</h3>
              <p className="flex-grow mb-6 text-sm leading-relaxed text-gray-600">
                {p.description}
              </p>
              
              <div className="space-y-2">
                {p.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs font-semibold tracking-tight text-gray-500 uppercase">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* <button className="w-full py-3 mt-8 text-sm font-bold text-white transition-colors duration-300 bg-gray-900 rounded-xl hover:bg-red-700">
                View Specifications
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}