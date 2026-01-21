import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingActions() {
  // Official contact from Balaji Fresh Food details
  const phoneNumber = "+919955545013"; 
  const whatsappMessage = "Hello Balaji Fresh Food! I am interested in your products.";
  
  // Format for WhatsApp: Remove '+' and spaces
  const whatsappLink = `https://wa.me/919955545013?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      {/* WhatsApp Button with Pulse effect */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group relative animate-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
        <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
          Chat with us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={callLink}
        className="flex items-center justify-center w-14 h-14 bg-red-700 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={24} />
        <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
          Call us now
        </span>
      </a>
    </div>
  );
}