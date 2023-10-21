import React from 'react'
import Navbar from '../public/components/Navbar'
import Hero from '../public/components/Hero'
import Card from '../public/components/Card'

export default function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Navbar />
        <Hero />
        <Card />
      </div>
    </div>
  )
}


