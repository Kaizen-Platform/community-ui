import React from 'react'
import { Card } from 'react-bootstrap'
import { icons } from 'react-icons'
const Cards1=(props) => { 
  return (
      
    <div>
        <>
  <Card style={{ margin: '20 0 20 0' }}>
    <Card.Img style={{paddingLeft:'100px', paddingTop:'150px', marginBottom :'15px'  }} variant="top" src='https://mdbootstrap.com/img/Photos/Avatars/avatar-1.webp '/>
    <Card.Body style={{paddingLeft:'120px', fontSize:'20px' }}> {props.name}
      <Card.Text>
      {props.description}
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card style={{ margin: '20 0 20 0' }}>
  <Card.Img style={{paddingLeft:'100px', paddingTop:'10px', marginTop :'15px'  }} variant="bottom" src='https://mdbootstrap.com/img/Photos/Avatars/avatar-1.webp' />
    <Card.Body style={{ paddingLeft:'120px', fontSize:'10px' }}> {props.name}
      <Card.Text style={{paddingTop:'40px', fontSize:'20px' }} >
      {props.description}
      </Card.Text>
    </Card.Body>
    
  </Card>
</>
    </div>
  )
}
export default Cards1;
