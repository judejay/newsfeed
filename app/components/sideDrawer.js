'use client';

import React, { useState } from 'react';
import {Calculator, CalendarHeart, PcDisplayHorizontal, Person, People, Award, Star, ChevronDoubleDown, Gem, Basket, ChatSquareQuote} from 'react-bootstrap-icons'
import './sideDrawer.css';
import Button from 'react-bootstrap/Button';
import { Container, ListGroup } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';



export default function SideDrawer() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
//todo 2 people icons & make it scroll
  return (
    <>
    <Container style={{backgroundColor: "white"}} className='sidebar'>
    <Stack gap={3}>
    <ListGroup>
    <ListGroup.Item><div className="p-2 ml-4"><Button variant="light"><PcDisplayHorizontal /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><Person /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><People /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><Award /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><Star /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><ChevronDoubleDown /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><Gem /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><Calculator /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><ChatSquareQuote /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><Basket /></Button></div></ListGroup.Item>
    <ListGroup.Item><div className="p-2"><Button variant="light"><CalendarHeart /></Button></div></ListGroup.Item>
      </ListGroup>

      </Stack>
      </Container>
    </>
  );
}