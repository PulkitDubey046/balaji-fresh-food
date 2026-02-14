import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import gov1 from "../assets/made-in-India.png";
import gov2 from "../assets/lBIADA.png";
import gov3 from "../assets/Bihar-gov.png";

export default function Header({ navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effects + Section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "contact"];
      const headerOffset = 72;
      const viewportCenter = window.scrollY + headerOffset + 1;

      let closest = "home";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const distance = Math.abs(viewportCenter - el.offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            closest = section;
          }
        }
      });
      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNav(section) {
    navigate(section);
    setActiveSection(section);
  }

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Products", section: "services" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-yellow-400/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-md"
      }`}
      style={{ height: "72px" }}
    >
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl md:px-8">
        
        {/* Brand Logo & Text */}
        <div
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 cursor-pointer shrink-0 group"
        >
          <img
            src={logo}
            alt="Balaji Fresh Food"
            className="w-10 h-auto transition-transform duration-300 md:w-12 group-hover:scale-110"
          />
          <span className="text-lg font-extrabold tracking-wide text-red-700 md:text-xl">
            Balaji Fresh Food
          </span>
        </div>

        {/* Govt Logos - Hidden on mobile */}
        <div className="items-center hidden gap-4 mx-4 md:flex">
          <img src={gov1} alt="Made in India" className="w-auto h-8 transition-opacity lg:h-10 hover:opacity-100 opacity-90" />
          <img src={gov2} alt="LBIADA" className="w-auto h-8 transition-opacity lg:h-10 hover:opacity-100 opacity-90" />
          <img src={gov3} alt="Bihar-gov" className="w-auto h-8 transition-opacity lg:h-10 hover:opacity-100 opacity-90" />
        </div>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-2 md:flex">
          {navItems.map(({ label, section }) => (
            <button
              key={section}
              onClick={() => handleNav(section)}
              className={`relative px-5 py-2 rounded-full font-bold transition-all duration-300 ${
                activeSection === section
                  ? "bg-red-700 text-white shadow-lg scale-105"
                  : scrolled
                  ? "text-red-800 hover:bg-yellow-300"
                  : "text-gray-800 hover:bg-yellow-100"
              }`}
            >
              {label}
              {activeSection === section && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-700 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile "Cut" Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
            scrolled ? "bg-yellow-500" : "bg-yellow-100"
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block h-0.5 w-full bg-red-700 rounded-full transition-all duration-300 transform ${
                open ? "rotate-45 translate-y-2" : "translate-y-0"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-full bg-red-700 rounded-full transition-all duration-300 top-2 ${
                open ? "opacity-0 scale-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-full bg-red-700 rounded-full transition-all duration-300 transform ${
                open ? "-rotate-45 translate-y-2" : "translate-y-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-[72px] bg-yellow-400 shadow-2xl md:hidden border-t border-yellow-500/50 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2 px-4 py-6">
            {navItems.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => {
                  handleNav(section);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 text-left px-6 py-4 rounded-2xl font-bold transition-all ${
                  activeSection === section
                    ? "bg-red-700 text-white shadow-xl translate-x-2"
                    : "text-red-900 hover:bg-yellow-300"
                }`}
              >
                {activeSection === section && (
                   <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                )}
                {label}
              </button>
            ))}
            
            {/* Govt Logos inside mobile menu */}
            <div className="flex justify-around pt-6 mt-4 border-t border-red-700/20">
              <img src={gov1} alt="Gov 1" className="w-auto h-8" />
              <img src={gov2} alt="Gov 2" className="w-auto h-8" />
              <img src={gov3} alt="Gov 3" className="w-auto h-8" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}