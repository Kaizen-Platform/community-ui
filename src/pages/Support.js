import React from 'react'
import i from '../images/Screenshot (755).png'
import a from '../images/Screenshot (756).png'
import d from '../images/Screenshot (757).png'
import f from '../images/Screenshot (759).png'
import g from '../images/Screenshot (760).png'
import s from '../images/thank you.jpg'
export default function Support() {
  return (
    <div>
      <img src={g}  style={{
              paddingLeft:'250px',
              resizeMode: "cover",
              
            }} class="img-fluid" 
      
      ></img>
        <img src={i}  style={{
              paddingLeft:'250px',
              resizeMode: "cover",
              height: 1200,
              width: 1200
            }} class="img-fluid" 
      
      ></img>
      <img src={a}  style={{
              paddingLeft:'250px',
              resizeMode: "cover",
              height: 1000,
              width: 1300
            }} class="img-fluid" 
      
      ></img>
      <img src={d}  style={{
              paddingLeft:'250px',
              
              height: 1000,
              width: 1300
            }} class="img-fluid" 
      ></img> </div>
  )
}
