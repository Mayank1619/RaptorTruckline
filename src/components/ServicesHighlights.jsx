import ServiceCard from './ServiceCard'
import { SERVICES } from '../utils/constants'
import { Truck, Package, MapPin, Cog, Wrench, Users } from 'lucide-react'

const iconMap = {
  'Long-Haul Trucking': Truck,
  'Regional Distribution': Package,
  'Dispatch & Logistics': MapPin,
  'Specialized Freight': Cog,
  'Fleet Management': Wrench,
  'Dedicated Carriage': Users,
}

export default function ServicesHighlights() {
  return (
    <section className="section-padding bg-light-gray dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-widest">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mt-2 mb-4">
            Comprehensive Trucking Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            From long-haul transport to specialized cargo, we deliver excellence across all logistics services.
          </p>
        </div>

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
  )
}
