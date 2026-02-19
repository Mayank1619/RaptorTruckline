import { Link } from 'react-router-dom'
import { COMPANY } from '../utils/constants'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-charcoal to-accent-red text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Move Your Freight?
        </h2>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Contact our dispatch team today and experience professional logistics done right.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a
            href={`tel:${COMPANY.headOffice.phone}`}
            className="inline-flex items-center justify-center bg-white text-accent-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            📞 Call Now
          </a>
          <a
            href={`mailto:${COMPANY.emails.dispatch}`}
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-accent-red transition-colors"
          >
            ✉️ Email Us
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-accent-red transition-colors"
          >
            💬 Contact Form
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-gray-100 text-sm mt-1">Dispatch Support</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold">99%</div>
            <div className="text-gray-100 text-sm mt-1">On-Time Delivery</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-gray-100 text-sm mt-1">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
