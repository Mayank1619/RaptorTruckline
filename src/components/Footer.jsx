import { Link } from 'react-router-dom'
import { COMPANY } from '../utils/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal dark:bg-black text-white">
      {/* Contact Bar */}
      <div className="border-b border-gray-700 dark:border-dark-border">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-accent-red to-accent-red-light bg-clip-text text-transparent">{COMPANY.name}</h3>
              <p className="text-gray-400 dark:text-gray-500 text-sm">{COMPANY.legalName}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500">
                <li><Link to="/" className="hover:text-accent-red transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-accent-red transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-accent-red transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-accent-red transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500">
                <li><a href={`mailto:${COMPANY.emails.dispatch}`} className="hover:text-accent-red transition-colors">Dispatch: {COMPANY.emails.dispatch}</a></li>
                <li><a href={`mailto:${COMPANY.emails.contact}`} className="hover:text-accent-red transition-colors">Contact: {COMPANY.emails.contact}</a></li>
                <li><a href={`tel:${COMPANY.headOffice.phone}`} className="hover:text-accent-red transition-colors">Phone: {COMPANY.headOffice.phone}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="border-b border-gray-700 dark:border-dark-border">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Head Office */}
            <div>
              <h4 className="font-semibold mb-3">Head Office</h4>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                {COMPANY.headOffice.street}<br />
                {COMPANY.headOffice.city}, {COMPANY.headOffice.country}
              </p>
            </div>

            {/* Terminal */}
            <div>
              <h4 className="font-semibold mb-3">Terminal</h4>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                {COMPANY.terminal.street}<br />
                {COMPANY.terminal.city}, {COMPANY.terminal.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            © {currentYear} Raptor Truckline. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href={COMPANY.socialMedia.linkedin} className="text-gray-400 hover:text-accent-red transition-colors" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.553-1.553-2.553-1.553 0-1.792 1.212-1.792 2.46v3.721H8.084V9.56h2.514v1.194h.037c.35-.663 1.203-1.362 2.476-1.362 2.633 0 3.12 1.732 3.12 3.988v4.358zM4.462 8.357a1.781 1.781 0 11.502-3.562 1.781 1.781 0 01-.502 3.562zM2.962 16.338h2.962V9.56H2.962v6.778zM17.224 0H.772C.307 0 0 .307 0 .772v18.456c0 .465.307.772.772.772h16.452c.465 0 .772-.307.772-.772V.772C17.996.307 17.689 0 17.224 0z" />
              </svg>
            </a>
            <a href={COMPANY.socialMedia.facebook} className="text-gray-400 hover:text-accent-red transition-colors" title="Facebook">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-4.5-5h1.5V4a7 7 0 00-7-7h-1.5v2h1.5a5 5 0 015 5v1.5z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={COMPANY.socialMedia.twitter} className="text-gray-400 hover:text-accent-red transition-colors" title="Twitter">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-80 py-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 dark:text-gray-600 space-x-4">
          <a href="#" className="hover:text-accent-red transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-accent-red transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-accent-red transition-colors">Safety Guidelines</a>
          <span>•</span>
          <span>Powered by <a href="https://netfroot.com" target="_blank" rel="noopener noreferrer" className="text-accent-red hover:underline">netfroot.com</a></span>
        </div>
      </div>
    </footer>
  )
}
