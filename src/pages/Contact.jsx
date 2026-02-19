import { useState } from 'react'
import { COMPANY } from '../utils/constants'
import { Phone, Building2, Zap, CheckCircle, XCircle } from 'lucide-react'

// TODO: Integrate with Firebase
// import { db } from '../config/firebase'
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // TODO: Implement Firebase submission
      // const docRef = await addDoc(collection(db, 'contact_messages'), {
      //   ...formData,
      //   timestamp: serverTimestamp(),
      //   status: 'new'
      // })

      // For now, log to console (replace with Firebase when configured)
      console.log('Form submission:', formData)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-r from-charcoal to-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? Our dispatch team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-light-gray dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-8">Contact Information</h2>

              {/* Quick Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <div className="bg-white dark:bg-dark-card dark:border-dark-border rounded-xl p-6 border-l-4 border-accent-red">
                  <h3 className="font-bold text-charcoal dark:text-white mb-2">Phone</h3>
                  <a href={`tel:${COMPANY.headOffice.phone}`} className="text-accent-red hover:underline text-lg font-semibold">
                    {COMPANY.headOffice.phone}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Mon-Fri 8am-6pm EST</p>
                </div>

                {/* Dispatch Email */}
                <div className="bg-white dark:bg-dark-card dark:border-dark-border rounded-xl p-6 border-l-4 border-accent-red">
                  <h3 className="font-bold text-charcoal dark:text-white mb-2">Dispatch</h3>
                  <a href={`mailto:${COMPANY.emails.dispatch}`} className="text-accent-red hover:underline font-semibold">
                    {COMPANY.emails.dispatch}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">For shipping inquiries</p>
                </div>

                {/* General Contact */}
                <div className="bg-white dark:bg-dark-card dark:border-dark-border rounded-xl p-6 border-l-4 border-accent-red">
                  <h3 className="font-bold text-charcoal dark:text-white mb-2">General Inquiries</h3>
                  <a href={`mailto:${COMPANY.emails.contact}`} className="text-accent-red hover:underline font-semibold">
                    {COMPANY.emails.contact}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Questions and partnerships</p>
                </div>

                {/* Safety */}
                <div className="bg-white dark:bg-dark-card dark:border-dark-border rounded-xl p-6 border-l-4 border-accent-red">
                  <h3 className="font-bold text-charcoal dark:text-white mb-2">Safety Concerns</h3>
                  <a href={`mailto:${COMPANY.emails.safety}`} className="text-accent-red hover:underline font-semibold">
                    {COMPANY.emails.safety}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Report safety issues</p>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-6">Office Locations</h3>

                <div className="mb-6">
                  <h4 className="font-bold text-charcoal dark:text-white mb-2">Head Office</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {COMPANY.headOffice.street}<br />
                    {COMPANY.headOffice.city}<br />
                    {COMPANY.headOffice.country}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-charcoal dark:text-white mb-2">Terminal</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {COMPANY.terminal.street}<br />
                    {COMPANY.terminal.city}<br />
                    {COMPANY.terminal.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-8 shadow-lg dark:shadow-glow">
              <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-6">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! We'll get back to you shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  <span>Error submitting form. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-charcoal dark:text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-charcoal dark:text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white rounded-lg focus:outline-none focus:border-accent-red transition-colors resize-none"
                    placeholder="Tell us more about your logistics needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-red to-accent-red-light text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="text-gray-600 dark:text-gray-400 text-xs mt-4">
                * Required fields. We'll respond within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8">
              <div className="flex justify-center mb-3">
                <Phone className="w-12 h-12 text-accent-red" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-3">Dispatch</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Available for shipment inquiries</p>
              <p className="font-semibold text-accent-red">24/7</p>
            </div>
            <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8">
              <div className="flex justify-center mb-3">
                <Building2 className="w-12 h-12 text-accent-red" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-3">Office Hours</h3>
              <p className="text-gray-700 dark:text-gray-300">Monday - Friday</p>
              <p className="font-semibold text-accent-red">8:00 AM - 6:00 PM EST</p>
            </div>
            <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8">
              <div className="flex justify-center mb-3">
                <Zap className="w-12 h-12 text-accent-red" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-3">Response Time</h3>
              <p className="text-gray-700 dark:text-gray-300">Expect replies within</p>
              <p className="font-semibold text-accent-red">24 Business Hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
