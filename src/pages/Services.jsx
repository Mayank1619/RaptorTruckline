import { SERVICES } from '../utils/constants'
import ServiceCard from '../components/ServiceCard'
import CTA from '../components/CTA'
import { Truck, Package, MapPin, Cog, Wrench, Users, Target, ClipboardList, CheckCircle } from 'lucide-react'

const iconMap = {
  'Long-Haul Trucking': Truck,
  'Regional Distribution': Package,
  'Dispatch & Logistics': MapPin,
  'Specialized Freight': Cog,
  'Fleet Management': Wrench,
  'Dedicated Carriage': Users,
}

export default function Services() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-r from-charcoal to-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Comprehensive trucking and logistics solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light-gray dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
                <ServiceCard
                  icon={iconMap[service.title]}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Service Excellence</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Each service is backed by professional expertise, modern equipment, and a commitment to exceeding expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service Methodology */}
            <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Our Approach</h3>
              <ul className="space-y-4">
                {[
                  'Advanced route optimization',
                  'Real-time GPS tracking',
                  'Professional driver training',
                  'Comprehensive insurance coverage',
                  'Flexible scheduling options',
                  'Transparent communication',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-red rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Solutions */}
            <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Custom Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Every business has unique logistics needs. We work with you to create customized solutions that fit your requirements, budget, and timeline.
              </p>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <Target className="text-accent-red w-6 h-6 mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Consultation:</strong> We understand your specific needs</span>
                </p>
                <p className="flex items-start gap-3">
                  <ClipboardList className="text-accent-red w-6 h-6 mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Planning:</strong> We develop a tailored logistics plan</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="text-accent-red w-6 h-6 mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Execution:</strong> We deliver with precision and care</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
