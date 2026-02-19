import { Link } from 'react-router-dom'
import { COMPANY } from '../utils/constants'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-20 bg-gradient-to-br from-charcoal via-gray-900 to-black dark:from-charcoal dark:via-gray-950 dark:to-black">
      {/* Video Background for Mobile - No Overlay */}
      <div className="absolute inset-0 md:hidden w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/animate.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent-red opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-red-light opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-in md:bg-transparent bg-black/40 p-6 rounded-lg md:p-0">
            <span className="text-accent-red font-semibold text-sm uppercase tracking-widest">
              Professional Trucking Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Moving Forward Together
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Reliable, professional trucking and logistics services across Canada. 
              With decades of industry experience, safety-focused operations, and a 
              commitment to excellence, Raptor Truckline is your trusted partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-gradient-to-r from-accent-red to-accent-red-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Explore Services
              </Link>
              <a
                href={`tel:${COMPANY.headOffice.phone}`}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-charcoal transition-all"
              >
                Call Us Today
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent-red">Founded</div>
                <div className="text-gray-400 text-sm">2014</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-red">500+</div>
                <div className="text-gray-400 text-sm">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-red">25+</div>
                <div className="text-gray-400 text-sm">Vehicles & Trailers</div>
              </div>
            </div>
          </div>

          {/* Video - Desktop Only */}
          <div className="relative h-96 md:h-full animate-slide-up hidden md:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            >
              <source src="/assets/videos/animate.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white text-sm uppercase tracking-widest">Scroll to explore</p>
          <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
