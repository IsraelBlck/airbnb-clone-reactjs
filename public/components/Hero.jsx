import React from 'react'
import GroupLogo from "../images/Group 77.png"


export default function Hero() {
  return (
    <div className='hero'>
      <img src={GroupLogo} alt="Group Airbnb logo" />
      <h3>Online Experiences</h3>
      <p>Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
