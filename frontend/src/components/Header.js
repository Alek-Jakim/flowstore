import React from 'react'

//Bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

//Styling
import logo from '../img/logo.png'
import '../global.css'

const Header = () => {

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/"><Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="logo" style={{ height: '20px', width: '20px', marginRight: '10px' }} />FlowStore</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link className="link" ><i className="fas fa-shopping-cart"></i>Shopping Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link href="/login" className="link" ><i className="fas fa-user"></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}



export default Header
