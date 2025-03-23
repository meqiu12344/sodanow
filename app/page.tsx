import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import AboutUs from './components/aboutUs'
import Pricing from './components/pricing'
import PopUpForm from './components/PopUpForm'
import './globals.css'

const page = () => {
  return (
    <div>
      <Header />
      <PopUpForm />
      <Hero />
      <AboutUs />
      <Pricing />
    </div>
  )
}

export default page
