import { IMAGES } from '../utils/constants'
import OptimizedImage from './OptimizedImage'
import { Trophy, Truck, User, MapPin, DollarSign, Phone } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Industry Experience',
      description: 'Over 20 years of proven excellence in professional trucking and logistics.',
      icon: Trophy
    },
    {
      title: 'Modern Fleet',
      description: 'Well-maintained, state-of-the-art vehicles equipped with GPS tracking and safety systems.',
      icon: Truck
    },
    {
      title: 'Expert Drivers',
      description: 'Professional, trained, and certified drivers committed to safety and reliability.',
      icon: User
    },
    {
      title: 'Real-Time Visibility',
      description: 'Advanced tracking systems provide complete transparency of your shipments.',
      icon: MapPin
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent rates with no hidden fees. Value for money on every shipment.',
      icon: DollarSign
    },
    {
      title: '24/7 Dispatch',
      description: 'Round-the-clock dispatch support ready to assist with any logistics needs.',
      icon: Phone
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="text-accent-red font-semibold text-sm uppercase tracking-widest">
              Why Partner With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mt-2 mb-6">
              Your Trusted Logistics Partner
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              When you choose Raptor Truckline, you're choosing reliability, professionalism, and unwavering commitment to your success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div key={reason.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Icon className="w-8 h-8 text-accent-red mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full animate-slide-up">
            <OptimizedImage
              src={IMAGES.logistics_yard}
              alt="Logistics yard with neatly organized trailers"
              width={600}
              height={400}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
