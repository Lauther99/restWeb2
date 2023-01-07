import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    return (
        <section className='nav-container'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#">Menú</Nav.Link>
                            <Nav.Link href="#">Galería</Nav.Link>                            
                            <Nav.Link href="#">Nosotros</Nav.Link>                            
                            <Nav.Link href="#">Contáctanos</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

    );
};

export default NavBar;