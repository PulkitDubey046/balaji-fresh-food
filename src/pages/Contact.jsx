import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_2kxswlt",     
        "template_soc41ki",    
        {
          name: form.name,
          email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        "ON-GsxYv5L4JlMCQQ"    
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  }

  return (
    <main className="max-w-3xl px-5 py-16 mx-auto text-center">
      {/* Heading */}
      <h2 className="mb-6 text-4xl font-black text-red-700 md:text-5xl">
        Contact Us
      </h2>

      <p className="mb-12 text-lg text-gray-700">
        For bulk orders, distribution inquiries, or business partnerships,
        please reach out using the form below.
      </p>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.12)] text-left border-t-8 border-yellow-400"
      >
        {/* Name */}
        <label className="block mb-6">
          <span className="block mb-2 text-lg font-semibold text-gray-800">
            Full Name
          </span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-5 py-4 text-lg transition border border-gray-300 rounded-2xl focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/20"
          />
        </label>

        {/* Email */}
        <label className="block mb-6">
          <span className="block mb-2 text-lg font-semibold text-gray-800">
            Email Address
          </span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-5 py-4 text-lg transition border border-gray-300 rounded-2xl focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/20"
          />
        </label>

        {/* Message */}
        <label className="block mb-8">
          <span className="block mb-2 text-lg font-semibold text-gray-800">
            Message
          </span>
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your requirement (bulk order, dealership, inquiry...)"
            className="w-full px-5 py-4 text-lg transition border border-gray-300 resize-none rounded-2xl focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/20"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-5 rounded-3xl text-lg font-semibold text-red-800
            bg-yellow-400 hover:bg-yellow-300
            shadow-lg hover:shadow-xl
            transition-all active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>

      {/* Status */}
      {status && (
        <p className="mt-8 text-lg font-semibold text-gray-800">
          {status}
        </p>
      )}
    </main>
  );
}
