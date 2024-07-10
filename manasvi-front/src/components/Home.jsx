import React from 'react'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ProductCarousel from './ProductCarousel'
import ServicesPage from './ServicesPage'
import OurTeam from './OurTeam'

function Home() {
  return (
    <div>
      <ServicesPage />
      <ProductCarousel />
      <OurTeam />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
