import React from 'react'
import Staricon from "../images/Star 1.png"

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.img} alt="Katie Zaferas" className='card--image' />
      <div className='card--stats'>
          <div className='card--rating'>
              <img src={Staricon} alt="star icon" className='card--star'/>
              <span>{props.rating}</span>
              <span className='gray'>({props.reviewCount})•</span>
              <span className='gray'>{props.country}</span>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p><span className='bold'>From $ {props.price} </span>/ person</p>
      </div>
    </div>
  )
}
