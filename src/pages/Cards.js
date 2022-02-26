import React from 'react'
import { Card,Button } from 'react-bootstrap'
const Cards=(props) => { 
  return (
    <div>
        <Card style={{ margin: '20 0 20 0' }}>
        <Card.Header style={{backgroundColor:'#39C0ED',  marginBottom :'15px'  }}>{props.name}</Card.Header>
  <Card.Body style={{ fontSize:'20px' }}>
    <Card.Title style={{ fontSize :'28px' }}>{props.category}</Card.Title>
    <Card.Text style={{ }}>
      {props.description}
    </Card.Text>
    <Button style={{ backgroundColor:'#00A0FF', padding : '10px',fontSize :'20px', color :'#fff', marginTop :'10px'}} variant="primary">{props.status}</Button>
  </Card.Body>
</Card>
    </div>
  )
}
export default Cards;