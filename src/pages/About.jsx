export default function About() {
  return (
    <main className="max-w-4xl px-5 py-12 mx-auto leading-relaxed">
      <h2 className="mb-6 text-4xl font-black text-center text-red-700 md:text-5xl">
        Who We Are
      </h2>

      <p className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-700">
        Balaji Fresh Food, a unit of Balaji Traders, is a trusted manufacturer of
        high-quality Chana Besan and Sattu. We focus on purity, hygiene, and
        consistent quality to serve households, retailers, and distributors.
      </p>

      <h3 className="mb-4 text-2xl font-bold text-red-700">
        Our Commitment
      </h3>

      <ul className="space-y-4">
        {[
          "Carefully sourced raw materials",
          "Modern hygienic processing",
          "Consistent taste and quality",
          "Strict quality control standards",
          "Reliable supply for bulk and retail orders"
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-bold text-red-700">✔</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
