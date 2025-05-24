import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

function NavigationBar() {
    return (
        <Navbar expand='lg' className='gradient-navbar w-100 fixed-top z-1' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#' className='fs-4 d-flex align-items-center gap-5'>
                     <img
                        className='d-inline-block align-top '
                        src={logo}
                        alt='Logo'
                        width='30'
                        height='30'
                      />
                    <span style={{ color: '#33c3ff' }}>Shubham Kumar</span>
                    {/* <span style={{ color: '#33c3ff' }}>hubham</span> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav '>
                    <Nav className='fs-5 me-auto w-100 d-flex justify-content-end'>
                       <Nav.Link href='#header' style={{ color: '#33c3ff' }}>Home</Nav.Link>
                       <Nav.Link href='#about' style={{ color: '#33c3ff' }}>About</Nav.Link>
                       <Nav.Link href='#projects' style={{ color: '#33c3ff' }}>Projects</Nav.Link>
                       <Nav.Link href='#contacts' style={{ color: '#33c3ff' }}>Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;