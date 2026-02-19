import { COMPANY, IMAGES } from '../utils/constants'
import MissionVision from '../components/MissionVision'
import CoreValues from '../components/CoreValues'
import CTA from '../components/CTA'
import OptimizedImage from '../components/OptimizedImage'

export default function About() {
  const team = [
    { role: 'Operations Director', description: 'Overseeing all fleet and logistics operations' },
    { role: 'Safety Manager', description: 'Ensuring compliance and driver safety protocols' },
    { role: 'Dispatch Manager', description: 'Coordinating routes and shipment optimization' },
    { role: 'Fleet Maintenance Supervisor', description: 'Managing vehicle maintenance and upkeep' },
  ]

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-r from-charcoal to-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Raptor Truckline</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional trucking and logistics with deep roots in Canadian industry.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Raptor Truckline was founded in 2014 with a simple mission: to provide professional, reliable trucking services 
                that businesses can depend on. Starting as a small Canadian operation, we've grown into a trusted logistics 
                partner for over 500 satisfied clients across Canada.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In 2022, we expanded our operations into the United States, broadening our service reach and capabilities. 
                Today, our fleet of 10 trucks and 15 trailers operates with unwavering commitment to safety, professional excellence, 
                and genuine care for our clients' success.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Every member of the Raptor Truckline team shares our core values, ensuring your shipments arrive safely, 
                on time, and in perfect condition.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-96 animate-slide-up">
              <OptimizedImage
                src={IMAGES.warehouse}
                alt="Modern warehouse facility"
                width={600}
                height={400}
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Cards */}
      <section className="section-padding bg-light-gray dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Head Office */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-glow transition-all">
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Head Office</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Address:</strong><br />
                  {COMPANY.headOffice.street}<br />
                  {COMPANY.headOffice.city}, {COMPANY.headOffice.country}
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href={`tel:${COMPANY.headOffice.phone}`} className="text-accent-red hover:underline">
                    {COMPANY.headOffice.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-glow transition-all">
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Terminal</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Address:</strong><br />
                  {COMPANY.terminal.street}<br />
                  {COMPANY.terminal.city}, {COMPANY.terminal.country}
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href={`tel:${COMPANY.terminal.phone}`} className="text-accent-red hover:underline">
                    {COMPANY.terminal.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Legal Info */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-glow transition-all">
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Legal Information</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Company Name:</strong> {COMPANY.name}
                </p>
                <p>
                  <strong>Legal Name:</strong> {COMPANY.legalName}
                </p>
                <p>
                  <strong>Province:</strong> Ontario, Canada
                </p>
              </div>
            </div>

            {/* Contact Emails */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-glow transition-all">
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Contact Emails</h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><a href={`mailto:${COMPANY.emails.dispatch}`} className="text-accent-red hover:underline">Dispatch: {COMPANY.emails.dispatch}</a></p>
                <p><a href={`mailto:${COMPANY.emails.safety}`} className="text-accent-red hover:underline">Safety: {COMPANY.emails.safety}</a></p>
                <p><a href={`mailto:${COMPANY.emails.contact}`} className="text-accent-red hover:underline">Contact: {COMPANY.emails.contact}</a></p>
                <p><a href={`mailto:${COMPANY.emails.accounts}`} className="text-accent-red hover:underline">Accounts: {COMPANY.emails.accounts}</a></p>
                <p><a href={`mailto:${COMPANY.emails.tracing}`} className="text-accent-red hover:underline">Tracing: {COMPANY.emails.tracing}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.role}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 text-center hover:shadow-lg dark:hover:shadow-glow transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-red to-accent-red-light flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal dark:text-white mb-2">{member.role}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <MissionVision />
      <CoreValues />

      <CTA />
    </div>
  )
}
