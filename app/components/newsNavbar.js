'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
function NewsNavbar() {
  return (
    <Navbar style={{backgroundColor: "#5d5df5"}} data-bs-theme="dark"  className="justify-content-between">
       <Col>
        <Navbar className="">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              alt=""
              src="/headShot.png"
              width="50"
              height="70"
              className="d-inline-block "
            />{' '}
           <span class="font-weight-bolder">SAMPLE PAGE</span> 
           <Image
              alt=""
              src="/cubes.png"
              width="50"
              height="50"
              className=" justify-content-end "
            />{' '}
          </Navbar.Brand>
      
        </Container>
      </Navbar>
      </Col>
      <Col>
      
            <Nav className="me-auto justify-content-begin flex-grow-1 pe-3">

            <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
            <NavDropdown  title="Features" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Col>
          <Col>
          <Nav className="justify-content-begin flex-grow-1 pe-3">
      <Form inline="true">
        <Row>
          <Col xs="auto">
            <Form.Control
            style={{backgroundColor: "#4b4ac4"}} 
              type="text"
              placeholder="Enter your search here..."
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
          </Col>
        </Row>
      </Form>
      </Nav>
      </Col>
      <Col>
      <Nav className="justify-content-end flex-grow-1 pe-3">
      <Button type="submit">Login</Button>
    </Nav>
      </Col>
    </Navbar>
  );
}

export default NewsNavbar;