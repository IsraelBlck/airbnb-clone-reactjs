import React from 'react'
import Katie from "../images/image 12.png"
import Staricon from "../images/Star 1.png"

export default function Card() {
  return (
    <div className='card'>
      <img src={Katie} alt="Katie Zaferas" className='card--image' />
      <div className='card--stats'>
          <div className='card--rating'>
              <img src={Staricon} alt="star icon"/>
              <span>5.0</span>
              <span>(6) •</span>
              <span>USA</span>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p>From $136 / person</p>
      </div>
    </div>
  )
}
