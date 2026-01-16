import besan from "../assets/besan.png";
import sattu from "../assets/sattu.png";

export default function Services() {
  const products = [
    {
      title: "Chana Besan",
      description:
        "Finely milled chana besan made from high-quality chickpeas, ideal for cooking and food preparation.",
      image: besan,
    },
    {
      title: "Sattu",
      description:
        "Nutritious roasted gram flour, rich in protein and fiber, processed hygienically for freshness.",
      image: sattu,
    },
  ];

  return (
    <main className="max-w-5xl px-5 mx-auto py-14">
      <h2 className="mb-12 text-4xl font-black text-center text-red-700">
        Our Products
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {products.map((p, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 p-8 bg-white border-l-4 border-red-600 shadow-md md:flex-row rounded-2xl"
          >
            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={p.image}
                alt={p.title}
                className="object-contain w-32 h-32 p-3 rounded-xl bg-yellow-50"
              />
            </div>

            {/* Product Content */}
            <div>
              <h3 className="mb-3 text-2xl font-bold">{p.title}</h3>
              <p className="leading-relaxed text-gray-700">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
