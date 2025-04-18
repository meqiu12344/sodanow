import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import AboutUs from './components/aboutUs'
import Pricing from './components/pricing'
import PopUpForm from './components/PopUpForm'
import How_to_replace from './components/how_to_replace'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const page = () => {
  return (
    <div>
      <Analytics />
      <Header />
      <PopUpForm />
      <Hero />
      <AboutUs />
      <Pricing />
      <How_to_replace />
    </div>
  )
}

export default page
