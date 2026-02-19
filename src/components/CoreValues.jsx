import ValueCard from './ValueCard'
import { VALUES } from '../utils/constants'
import { Shield, CheckCircle, Handshake, Star, Leaf, Users } from 'lucide-react'

const iconMap = {
  'Safety First': Shield,
  'Reliability': CheckCircle,
  'Integrity': Handshake,
  'Excellence': Star,
  'Sustainability': Leaf,
  'Customer Focus': Users,
}

export default function CoreValues() {
  return (
    <section className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-widest">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mt-2 mb-4">
            Core Values
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            These principles guide every decision and define who we are as a company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((value, index) => (
            <div key={value.title} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
              <ValueCard
                icon={iconMap[value.title]}
                title={value.title}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
