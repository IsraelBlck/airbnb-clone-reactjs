import React from 'react'
import Navbar from '../public/components/Navbar'
import Hero from '../public/components/Hero'
import Card from '../public/components/Card'
import data from "../data"

export default function App() {

    const datas = data.map(card => {
      return (
          <Card 
              key = {card.id}
              card = {card}
          />
      )
    })
    
  return (
      <div>
        <Navbar />
        <Hero />
        <section className='card--list'>
            {datas}
        </section>
      </div>
  )
}


