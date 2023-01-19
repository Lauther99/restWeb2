import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

const NavBar = () => {

    return (
        <header className='nav-container'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link ><Link to="home">Inicio</Link></Nav.Link>
                            <Nav.Link ><Link to="menu">Menu</Link></Nav.Link>
                            <Nav.Link ><Link to="/">Galería</Link></Nav.Link>
                            <Nav.Link ><Link to="about">Nosotros</Link></Nav.Link>
                            <Nav.Link ><Link to="contact">Contáctanos</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>a</div>
        </header>

    );
};

export default NavBar;