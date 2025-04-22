import About from '@/components/About'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <><Hero />
    <About />
    <Team/>
    <Testimonials/>
    </>
  )
}

export default page