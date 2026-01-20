import { motion } from "framer-motion";
import besan from "../assets/besan_img.png";
import sattu from "../assets/Sattu_img.png";

export default function Services() {
  const products = [
    {
      title: "Chana Besan",
      description: "Finely milled from high-quality chickpeas, our besan is perfect for premium snacks and traditional sweets.",
      image: besan,
      features: ["100% Pure Chana Dal", "Advanced Milling Process", "Rich in Protein", "Hygienic Packaging"]
    },
    {
      title: "Chana Sattu",
      description: "A nutritious, high-fiber roasted gram flour that provides instant energy and authentic traditional flavor.",
      image: sattu,
      features: ["Roasted Gram Excellence", "High Dietary Fiber", "Traditional Taste", "No Preservatives"]
    }
  ];

  return (
    <main className="max-w-6xl px-5 py-20 mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-4xl font-black text-center text-red-700 md:text-5xl"
      >
        Our Premium Products
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 force-mobile">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            /* Added the red line back here (border-t-8 border-red-600) */
            className="group flex flex-col bg-white overflow-hidden rounded-[2.5rem] shadow-xl border-t-8 border-red-600 hover:shadow-2xl transition-all duration-300"
          >
            {/* Larger Image Section */}
            <div className="relative flex items-center justify-center p-6 overflow-hidden h-80 bg-yellow-50">
              <img
                src={p.image}
                alt={p.title}
                className="object-contain w-full h-full transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold text-gray-900">{p.title}</h3>
                <span className="px-3 py-1 text-xs font-bold text-red-700 uppercase bg-red-100 rounded-full">Premium</span>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-600">
                {p.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="mb-3 text-sm font-bold tracking-widest text-red-700 uppercase">Product Details</h4>
                <div className="grid grid-cols-2 gap-y-3">
                  {p.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="font-bold text-green-600">✔</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}