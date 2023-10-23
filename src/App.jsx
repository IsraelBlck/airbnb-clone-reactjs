import React from 'react'
import Navbar from '../public/components/Navbar'
import Hero from '../public/components/Hero'
import Card from '../public/components/Card'
import data from "../data"

export default function App() {

    const datas = data.map(card => {
      return (
          <Card 
              img = {card.coverImg}
              rating = {card.stats.rating}
              reviewCount = {card.stats.reviewCount}
              location = {card.location}
              title = {card.title}
              price = {card.price}
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


