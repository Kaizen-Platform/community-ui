import React from 'react'
import { Card } from 'react-bootstrap'
import { icons } from 'react-icons'
const Cards1=(props) => { 
  return (
      
    <div>
        <>
  <Card >
    
    <Card.Body style={{paddingTop:'10px', fontSize:'25x', backgroundColor: 'Yellow' }}> {props.name}
      <Card.Text  style={{ fontSize:'20px' }}>
      {props.description}
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card >
  
    <Card.Body style={{  fontSize:'25px',backgroundColor: '#0708' }}> {props.name}
      <Card.Text style={{ fontSize:'20px' }} >
      {props.description}
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</>
    </div>
  )
}
export default Cards1;
