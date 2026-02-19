export default function MissionVision() {
  return (
    <section className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-red-light mb-6" />
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              To provide reliable, safe, and professional trucking and logistics services that exceed our clients' expectations. We are committed to delivering exceptional service with integrity, transparency, and a deep respect for safety standards across all our operations.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Every shipment is handled with precision. Every driver is trained to excellence. Every route is planned for success. This is our commitment to you.
            </p>
          </div>

          {/* Vision */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-red-light mb-6" />
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              To become the most trusted, innovative, and safety-focused trucking company in Canada. We envision a future where modern technology, professional excellence, and customer-centric service define the trucking industry standard.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe in continuous improvement, sustainable practices, and building long-term partnerships with our clients, drivers, and industry community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
