import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Methodology from './components/Methodology'
import Facilities from './components/Facilities'
import Admissions from './components/Admissions'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Facilities />
        <Admissions />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
