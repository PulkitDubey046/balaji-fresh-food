import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Header({ navigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'services', 'contact']
      const headerOffset = 72
      const viewportCenter = window.scrollY + headerOffset + 1

      let closest = 'home'
      let minDistance = Infinity

      sections.forEach(section => {
        const el = document.getElementById(section)
        if (el) {
          const distance = Math.abs(viewportCenter - el.offsetTop)
          if (distance < minDistance) {
            minDistance = distance
            closest = section
          }
        }
      })

      setActiveSection(closest)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNav(section) {
    navigate(section)
    setActiveSection(section)
  }

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Products', section: 'services' },
    { label: 'Contact', section: 'contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-yellow-400 shadow-lg'
          : 'bg-white'
      }`}
      style={{ height: '72px' }}
    >
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl md:px-8">
        {/* Logo */}
        <div
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Balaji Fresh Food"
            className="w-12 h-auto"
          />
          <span className="text-lg font-extrabold tracking-wide text-red-700">
            Balaji Fresh Food
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-2 md:flex">
          {navItems.map(({ label, section }) => (
            <button
              key={section}
              onClick={() => handleNav(section)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                activeSection === section
                  ? 'bg-yellow-300 text-red-700 shadow-md'
                  : scrolled
                    ? 'text-red-700 hover:bg-yellow-200'
                    : 'text-gray-800 hover:bg-yellow-100'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-yellow-200 rounded-lg md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <span className="block h-0.5 bg-red-700 rounded"></span>
            <span className="block h-0.5 bg-red-700 rounded"></span>
            <span className="block h-0.5 bg-red-700 rounded"></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="bg-yellow-300 shadow-xl md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navItems.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => {
                  handleNav(section)
                  setOpen(false)
                }}
                className={`text-left px-5 py-3 rounded-xl font-semibold transition-all ${
                  activeSection === section
                    ? 'bg-yellow-400 text-red-700 shadow-md'
                    : 'text-gray-800 hover:bg-yellow-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
