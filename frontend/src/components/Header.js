import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header><Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className='fas fa-shopping-cart'/>
                   Cart
                  </Nav.Link>
                  </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/login">
              <Nav.Link><i className='fas fa-user'/>
               Login
              </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></header>
  )
}

export default Header
