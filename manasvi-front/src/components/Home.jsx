import React from 'react'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ProductCarousel from './ProductCarousel'
import ServicesPage from './ServicesPage'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'
import HeroSection from './HeroSection'
import FrontPage from './FrontPage'

function Home() {
  return (
    <div>
      <FrontPage />
      <ServicesPage />
      <HeroSection/>
      <ProductCarousel />
      <OurTeam />
      <Testimonial/>
      <ContactForm />
    </div>
  )
}

export default Home
