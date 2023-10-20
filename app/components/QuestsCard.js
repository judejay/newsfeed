'use client';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';

const QuestsCard = ({quest}) => {
  return (
 
    <Container>
    <Row>
    <Col>
   
  <Image height={45} width={45} alt="" src="/cubes.png" />    
    </Col>
    <Col  xs={9}>
    <Row>
      <span>{quest.user} </span> 
    </Row>
    <Row>
       <span>
       {quest.quest}
    </span>
    </Row>
    
    </Col>
     </Row>
</Container>
    
  )
}

export default QuestsCard