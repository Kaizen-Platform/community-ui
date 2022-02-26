import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export const progress = () => {
  return (
    <Container>
    <div>
      <h4>Remark Menu</h4>
      <Form>
      <Form.Group>
          <Form.Label>Full name of the idea creater</Form.Label>
          <Form.Control type="text" 
         placeholder="Enter full name of the idea creater" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email id of creater</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter email address of the idea creater" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating the idea out of 10</Form.Label>
          <Form.Control type="number" placeholder="Enter rating of the idea" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Remarks</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter suggestions" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>
    </Container>
  )
}
