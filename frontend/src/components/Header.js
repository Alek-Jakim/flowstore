import React from 'react'

//Bootstrap & Misc. styling
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/logo.png'
import '../global.css'

//React Router
import { useHistory } from 'react-router-dom'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../redux/actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const handleLogout = () => {
        dispatch(userLogout())
        history.go(0)
    }

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
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer to="/login">
                                <Nav.Link href="/login" className="link" ><i className="fas fa-user"></i>Sign In</Nav.Link>
                            </LinkContainer>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}



export default Header
