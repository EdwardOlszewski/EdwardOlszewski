import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar className='nav' expand='lg'>
        <Container>
          <h5 className='header-title'>Edward Olszewski</h5>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav className='mr-right'>
              <LinkContainer to='/home' activeClassName='nav-icons-active'>
                <Nav.Link className='nav-links'>
                  <h6>About</h6>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/projects'>
                <Nav.Link className='nav-links'>
                  <h6>Projects</h6>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
