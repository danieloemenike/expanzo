import Hero from '@/components/Contact/Hero'
import Header from '@/components/Header'
import React from 'react'

type Props = {}

function ContactPage({}: Props) {
  return (
    <div className='bg-white '>
      <Header showLogo/>
          <Hero />
    </div>
  )
}

export default ContactPage