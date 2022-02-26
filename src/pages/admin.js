import React from 'react'

import g from '../images/kisspng-mi-text-editor-computer-software-applescript-5cd9fb11de6875.258337731557789457911.png'
import { Table } from 'react-bootstrap'
import { Container, Row,Col } from 'react-bootstrap'
export default function admin() {
  return (
    <div>
        <img src={g} style={{  height:
        '500',width:'400'}} alt="" />
        


        <Table striped bordered hover  >
  <thead  >
    <tr className='a' >
      <th  >Serial no.</th >
      <th  >First Name </th >
      <th  >Last Name</th>

      <th  >Remarks for the idea</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th   >1</th>
      <td >Ankita</td>
      <td>Rai</td>
      <td>good</td>
    </tr>
    <tr >
      <th  >2</th>
      <td>Aditi</td>
      <td>Srivastava</td>
      <td>moderate</td>
    </tr>
    <tr>
      <th  >3</th>
      <td >Mansi</td>
      <td>Bhalotia</td>
      <td>excellent</td>
    </tr>
    <tr>
      <th  >4</th>
      <td>Astitva</td>
      <td>Otto</td>
      <td>excellent</td>
    </tr>
    <tr>
      <th  >5</th>
      <td>Astitva</td>
      <td>Otto</td>
      <td>excellent</td>
    </tr>
    <tr>
      <th  >6</th>
      <td>Astitva</td>
      <td>Otto</td>
      <td>excellent</td>
    </tr>
   
  </tbody>
</Table>

  

  
  

    </div>




  )
}

