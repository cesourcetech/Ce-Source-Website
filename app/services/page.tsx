import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ServicesSection } from '@/components/services-section'
import React from 'react'

export default function ServicesPage() {
  return (
    <div>
        <Navbar/>
        <div className='mb-8 mt-18'>
        <ServicesSection />
        </div>
        <Footer/>
    </div>
  )
}
