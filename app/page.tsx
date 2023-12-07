import Header from '@/components/Header'
import Hero from '@/components/Home/Hero'
import React from 'react'

type Props = {}

function HomePage({}: Props) {
  return (
    <div>
      <Header showLogo={ false } />
      <Hero />
    </div>
  )
}

export default HomePage