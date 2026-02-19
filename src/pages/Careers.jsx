import { useState } from 'react'
import { COMPANY } from '../utils/constants'
import { Briefcase, Truck, Shield, TrendingUp, DollarSign, Users, MapPin, CheckCircle, Mail } from 'lucide-react'

// TODO: Integrate with Firebase
// import { db } from '../config/firebase'
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const jobs = [
    {
      id: 1,
      title: 'Professional Truck Driver',
      location: 'Various Locations',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Seeking experienced truck drivers with Class DZ license for long-haul operations.',
      requirements: [
        'Valid Class DZ/AZ Commercial Driver\'s License',
        'Minimum 3 years trucking experience',
        'Clean driving record',
        'Safety certification',
        'Available for cross-Canada routes',
      ]
    },
    {
      id: 2,
      title: 'Dispatch Coordinator',
      location: 'Brampton Terminal',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Join our dispatch team managing logistics and route optimization for our fleet.',
      requirements: [
        'Experience in dispatch or logistics',
        'Strong communication skills',
        'Proficiency with dispatch software',
        'Problem-solving abilities',
        'Available for shift work',
      ]
    },
    {
      id: 3,
      title: 'Fleet Maintenance Technician',
      location: 'Brampton Terminal',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Maintain and repair our modern fleet of heavy-duty trucks and trailers.',
      requirements: [
        'Commercial vehicle maintenance certification',
        'Experience with heavy trucks',
        'Diagnostic and repair skills',
        'Tool proficiency',
        'Safety-conscious approach',
      ]
    },
    {
      id: 4,
      title: 'Safety & Compliance Officer',
      location: 'Paris Head Office',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Ensure all operations meet DOT, CVSA, and provincial safety standards.',
      requirements: [
        'DOT/CVSA compliance knowledge',
        'Safety audit experience',
        'Strong attention to detail',
        'Documentation skills',
        'Industry certifications preferred',
      ]
    },
    {
      id: 5,
      title: 'Operations Manager',
      location: 'Paris Head Office',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Lead daily operations and oversee fleet, dispatch, and maintenance teams.',
      requirements: [
        'Management experience in logistics',
        'Leadership abilities',
        'Strategic planning skills',
        'Budget management experience',
        'Industry knowledge',
      ]
    },
    {
      id: 6,
      title: 'Office Administrator',
      location: 'Paris Head Office',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Provide administrative support to our growing operations team.',
      requirements: [
        'Office administration experience',
        'Excellent organizational skills',
        'Computer proficiency',
        'Customer service experience',
        'Typing and communication skills',
      ]
    },
  ]

  const handleSelectJob = (job) => {
    setSelectedJob(job)
    setShowApplicationForm(false)
    setFormData(prev => ({
      ...prev,
      position: job.title
    }))
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleApplicationSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Implement Firebase submission
      // const docRef = await addDoc(collection(db, 'career_applications'), {
      //   ...formData,
      //   appliedAt: serverTimestamp(),
      //   status: 'new'
      // })

      console.log('Application submitted:', formData)
      alert('Thank you for your application! We\'ll review it and contact you soon.')
      setShowApplicationForm(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      })
      setSelectedJob(null)
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Error submitting application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-r from-charcoal to-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers at Raptor Truckline</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our team and be part of a professional, growing logistics company.
          </p>
        </div>
      </section>

      {/* Why Join US */}
      <section className="section-padding bg-light-gray dark:bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-12 text-center">Why Work With Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: 'Professional Environment', desc: 'Work with experienced, dedicated professionals.' },
              { icon: Truck, title: 'Modern Fleet', desc: 'Operate state-of-the-art vehicles and equipment.' },
              { icon: Shield, title: 'Safety First', desc: 'Industry-leading safety standards and training.' },
              { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Advance your career with a growing company.' },
              { icon: DollarSign, title: 'Competitive Compensation', desc: 'Fair wages and benefits for all positions.' },
              { icon: Users, title: 'Team Culture', desc: 'Join a supportive, collaborative team.' },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 text-center hover:shadow-lg dark:hover:shadow-glow transition-all">
                  <Icon className="w-12 h-12 text-accent-red mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-bold text-charcoal dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-12 text-center">Open Positions</h2>

          {!selectedJob ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-glow transition-all cursor-pointer hover:-translate-y-1"
                  onClick={() => handleSelectJob(job)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-charcoal dark:text-white">{job.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{job.location}</p>
                    </div>
                    <span className="text-xs font-semibold bg-accent-red text-white px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent-red font-semibold">{job.salary}</span>
                    <span className="text-gray-600 dark:text-gray-400">Click to view details →</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedJob(null)}
                className="mb-6 flex items-center gap-2 text-accent-red hover:gap-3 transition-all font-semibold"
              >
                ← Back to Positions
              </button>

              <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-2">{selectedJob.title}</h2>
                    <div className="flex gap-4 text-sm items-center">
                      <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" strokeWidth={1.5} />
                        {selectedJob.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                        {selectedJob.type}
                      </span>
                      <span className="flex items-center gap-1 text-accent-red font-semibold">
                        <DollarSign className="w-4 h-4" strokeWidth={1.5} />
                        {selectedJob.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">{selectedJob.description}</p>

                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Requirements:</h3>
                <ul className="space-y-3 mb-8">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-700 dark:text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>

                {!showApplicationForm && (
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="bg-gradient-to-r from-accent-red to-accent-red-light text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                  >
                    Apply Now
                  </button>
                )}

                {showApplicationForm && (
                  <form onSubmit={handleApplicationSubmit} className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl p-8 mt-8">
                    <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Application Form</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal dark:text-white mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-charcoal dark:text-white mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-charcoal dark:text-white mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-charcoal dark:text-white mb-2">Cover Letter</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red resize-none"
                          placeholder="Tell us about yourself and why you'd be great for this role..."
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-accent-red to-accent-red-light text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowApplicationForm(false)}
                          className="flex-1 border-2 border-gray-300 dark:border-dark-border text-charcoal dark:text-white font-bold py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="section-padding bg-accent-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Position?</h2>
          <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep it on file.
          </p>
          <a
            href={`mailto:${COMPANY.emails.contact}?subject=Employment Inquiry`}
            className="inline-flex items-center gap-2 bg-white text-accent-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  )
}
