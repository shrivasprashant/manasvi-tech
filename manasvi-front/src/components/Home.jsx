import React from 'react'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ProductCarousel from './ProductCarousel'
import ServicesPage from './ServicesPage'

function Home() {
  return (
    <div>
      <ServicesPage />
      <ProductCarousel />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
