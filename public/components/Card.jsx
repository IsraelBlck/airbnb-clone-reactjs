import React from 'react'
import Katie from "../images/image 12.png"
import Staricon from "../images/Star 1.png"

export default function Card() {
  return (
    <div className='card'>
      <img src={Katie} alt="Katie Zaferas" className='card--image' />
      <div className='card--stats'>
          <div className='card--rating'>
              <img src={Staricon} alt="star icon" className='card--star'/>
              <span>5.0</span>
              <span className='gray'>(6) •</span>
              <span className='gray'>USA</span>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p><span className='bold'>From $136 </span>/ person</p>
      </div>
    </div>
  )
}
