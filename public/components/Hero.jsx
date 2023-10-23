import React from 'react'
import GroupLogo from '../images/Group 77.png'


export default function Hero() {
  return (
    <section className='hero'>
      <img src={GroupLogo} alt="Group Airbnb logo" className='hero--photo' />
      <h1 className='bold'>Online Experiences</h1>
      <p>Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
