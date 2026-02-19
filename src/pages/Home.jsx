import Hero from '../components/Hero'
import ServicesHighlights from '../components/ServicesHighlights'
import MissionVision from '../components/MissionVision'
import CoreValues from '../components/CoreValues'
import WhyChooseUs from '../components/WhyChooseUs'
import SafetyCompliance from '../components/SafetyCompliance'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesHighlights />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <SafetyCompliance />
      <CTA />
    </div>
  )
}
