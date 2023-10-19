'use client';
import React from 'react'
import { Card, Row, Col, Container, FloatingLabel } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import './UpdatesCard.css';

const UpdatesCard = () => {
  return (
    <Container style={{marginTop: 15}}>
      <Row>
        
        <Col><h5 style={{marginTop: 15}}>All Updates</h5></Col>
        <Col>
        <FloatingLabel 
                label="Show"
                id="floatLabel"
        ></FloatingLabel>
              <Dropdown>
                <Dropdown.Toggle variant="light" size="lg" id="dropdown-basic">
        Everything
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>
      </Container>
  )
}

export default UpdatesCard