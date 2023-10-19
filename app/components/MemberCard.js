'use client';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';

const MemberCard = ({member}) => {
  return (
    <Container>
      <Row>
      <Col>
     
    <Image height={45} width={45} alt="" src="/cubes.png" />    
      </Col>
      <Col  xs={10}>
      <Row>
        <span>{member.firstName + " " + member.secondName} </span> 
      </Row>
      <Row>
         <span>
        {member.email}
      </span>
      </Row>
      
      </Col>
       </Row>
  </Container>
  )
}

export default MemberCard