import { COMPLIANCE } from '../utils/constants'
import { CheckCircle } from 'lucide-react'

export default function SafetyCompliance() {
  return (
    <section className="section-padding bg-light-gray dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-widest">
            Industry Standards
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mt-2 mb-4">
            Safety & Compliance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            We exceed industry standards and maintain the highest safety protocols in every operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPLIANCE.map((item, index) => (
            <div
              key={item.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in bg-white dark:bg-dark-card rounded-xl p-8 border-2 border-accent-red border-opacity-20 dark:border-accent-red dark:border-opacity-30 hover:border-accent-red dark:hover:shadow-glow transition-all"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-accent-red flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Safety Info */}
        <div className="mt-12 bg-gradient-to-r from-accent-red to-accent-red-light text-white rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Safety is Non-Negotiable</h3>
              <p className="text-red-100 leading-relaxed">
                Our comprehensive safety program includes driver training, vehicle maintenance protocols, and continuous monitoring to ensure every shipment arrives safely.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Compliance Excellence</h3>
              <p className="text-red-100 leading-relaxed">
                We maintain certifications for DOT, CVSA, and all relevant provincial regulations. Regular audits and inspections verify our commitment to compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
