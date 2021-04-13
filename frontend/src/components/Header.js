import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Pdf from './Resume.pdf'

const Header = () => {
  return (
    <div>
      <Navbar fixed='top' className='nav' expand='lg' variant='dark'>
        <Container>
          <h5 className='header-title'>Edward Olszewski </h5>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <div className='links-div'>
                <a className='nav-icons' href='callto:17089048915'>
                  <h5 className='icon'>
                    <i className='fas fa-phone-square'> </i>
                  </h5>
                </a>
                <a className='nav-icons' href='mailto:edolszewski96@gmail.com'>
                  <h5 className='icon'>
                    <i className='fas fa-envelope-square'></i>
                  </h5>
                </a>
                <a
                  className='nav-icons'
                  href='https://www.linkedin.com/in/edwardolszewski'
                >
                  <h5 className='icon'>
                    <i className='fab fa-linkedin'></i>
                  </h5>
                </a>
                <a
                  className='nav-icons'
                  href='https://github.com/EdwardOlszewski'
                >
                  <h5 className='icon'>
                    <i className='fab fa-github-square'></i>
                  </h5>
                </a>

                <a className='nav-icons' href={Pdf} target='_blank'>
                  <h5 className='icon'>
                    <i className='fas fa-file'></i>
                  </h5>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
