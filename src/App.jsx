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
        <Card 
          img = '../images/image 12.png'
          rating= {5.0}
          reviewCount= {(6)}
          country= 'USA'
          title = 'Life Lessons with Katie Zaferes'
          price = {136}
         />
      </div>
    </div>
  )
}


