import React from 'react'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ProductCarousel from './ProductCarousel'

function Home() {
  return (
    <div>
      <ProductCarousel />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
