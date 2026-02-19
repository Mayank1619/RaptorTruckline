import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../utils/constants'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Careers', to: '/careers' },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-charcoal shadow-lg py-3'
          : 'bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm shadow-md py-4'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-accent-red to-accent-red-light rounded-lg flex items-center justify-center text-white font-bold">
            RT
          </div>
          <span className="text-charcoal dark:text-white font-bold">
            Raptor
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-medium text-charcoal dark:text-gray-300 hover:text-accent-red dark:hover:text-accent-red-light transition-all hover:shadow-glow"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
          
          <a
            href={`tel:${COMPANY.headOffice.phone}`}
            className="bg-gradient-to-r from-accent-red to-accent-red-light text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Call Us
          </a>
        </div>

        {/* Mobile Menu & Toggle Container */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button
            className="p-2 rounded-lg focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
            className="w-6 h-6 text-charcoal dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-charcoal border-t border-gray-200 dark:border-gray-700">
          <div className="container-custom px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-charcoal dark:text-white font-medium hover:text-accent-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.headOffice.phone}`}
              className="block bg-gradient-to-r from-accent-red to-accent-red-light text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all w-full text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
