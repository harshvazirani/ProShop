import React from 'react'
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header><Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Route render={({history}) => <SearchBox history = {history}/>}/>
          <Nav>
            <Nav.Item>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className='fas fa-shopping-cart'/>
                   Cart
                  </Nav.Link>
                  </LinkContainer>
            </Nav.Item>
            {userInfo ? (
             <NavDropdown title={userInfo.name} id='username'>
             <LinkContainer to="/profile">
             <NavDropdown.Item>Profile</NavDropdown.Item>
             </LinkContainer>
             <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
             </NavDropdown>
            ) : 
            <Nav.Item>
            <LinkContainer to="/login">
              <Nav.Link><i className='fas fa-user'/>
               Sign In
              </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            }
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
              <LinkContainer to="/admin/userlist">
              <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/productlist">
              <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orderlist">
              <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></header>
  )
}

export default Header
