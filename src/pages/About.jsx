import { motion } from "framer-motion";

export default function About() {
  // Animation variants for the value cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const values = [
    {
      title: "Consistent Quality",
      desc: "Every batch meets high standards of cleanliness, freshness, and uniformity through controlled processing.",
      icon: "💎",
    },
    {
      title: "Modern Facility",
      desc: "Equipped with state-of-the-art machinery and precision milling to maintain complete quality control.",
      icon: "🏭",
    },
    {
      title: "Strict Hygiene",
      desc: "Operating under strict sanitation protocols to deliver sattu and besan that retain natural nutrition.",
      icon: "🧼",
    },
  ];

  return (
    <main className="max-w-6xl px-6 py-20 mx-auto overflow-hidden">
      {/* --- Section Header: Fades in and slides up --- */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-black tracking-tight text-red-700 uppercase md:text-6xl">
          Who We Are
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "96px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-orange-500 mx-auto rounded-full mb-8"
        ></motion.div>
        <p className="max-w-3xl mx-auto text-xl font-medium leading-relaxed text-gray-700">
          Balaji Fresh Food, a unit of <span className="font-bold text-red-700">Balaji Traders</span>, 
          is a dedicated manufacturing powerhouse specializing in pure Chana Besan and Sattu.
        </p>
      </motion.div>

      {/* --- Main Content Grid: Left and Right reveal --- */}
      <div className="grid items-center gap-12 mb-20 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 text-lg leading-relaxed text-gray-700"
        >
          <h3 className="pl-4 text-3xl font-extrabold text-gray-900 border-l-8 border-orange-500">
            Quality You Can Rely On
          </h3>
          <p>
            We are committed to delivering products that stand for purity and consistency. 
            With a strong focus on hygienic processing and modern food manufacturing practices, 
            we serve households and wholesale partners with reliable products they can trust.
          </p>
          <p>
            From careful sourcing of quality chana to precision milling, every step of 
            production is managed in-house to maintain complete quality control.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-white p-8 rounded-[2rem] shadow-xl border-b-8 border-red-700"
        >
          <h3 className="mb-6 text-2xl font-bold text-red-700">Our Commitment</h3>
          <ul className="space-y-5">
            {[
              "Carefully sourced raw materials",
              "Modern hygienic processing",
              "Consistent taste and quality",
              "Strict quality control standards",
              "Reliable supply for bulk and retail"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full">
                  <span className="text-sm font-bold text-green-600">✔</span>
                </div>
                <span className="font-semibold text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* --- Value Pillars: Staggered Fade Up --- */}
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((val, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="p-8 transition-all border border-yellow-200 cursor-default bg-yellow-50 rounded-3xl hover:bg-white hover:shadow-2xl"
          >
            <div className="mb-4 text-4xl">{val.icon}</div>
            <h4 className="mb-2 text-xl font-bold text-red-700">{val.title}</h4>
            <p className="text-sm leading-relaxed text-gray-600">{val.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* --- Mission Statement: "Pop-in" Zoom Effect --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 p-10 bg-red-700 rounded-[3rem] text-center text-white shadow-2xl shadow-red-200"
      >
        <h3 className="mb-4 text-2xl font-bold">Naturally Processed for Better Nutrition</h3>
        <p className="max-w-4xl mx-auto leading-relaxed text-red-50 opacity-90">
          At Balaji Traders, hygiene is a responsibility. Our unit operates under 
          strict sanitation protocols, ensuring a clean environment so we consistently 
          deliver products that retain their natural taste and nutrition.
        </p>
      </motion.div>
    </main>
  );
}