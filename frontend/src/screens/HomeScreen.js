import React from 'react'
import { Row, Col, Card, Image, Container } from 'react-bootstrap'
import profilePicture from './profile.png'
import DoubleDCard from '../components/DoubleDCard'
import NeonMegCard from '../components/NeonMegCard'
import SportsCard from '../components/SportsCard'
import JuliasCard from '../components/JuliasCard'

const HomeScreen = () => {
  return (
    <div className='content-div'>
      <div className='about-div'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card className='home-card'>
              <Card.Img variant='top' src={profilePicture} />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={8}>
            <Card className='home-card'>
              <Card.Body>
                <h5>About</h5>
                <ul className='about-list'>
                  <br />
                  <li>
                    Hello, I am Edward Olszewski. I am currently a freelance web
                    developer. my current focus has been on the MERN stack. I
                    graduated with my bachelors of computer science from
                    Governors State University December 2020.
                  </li>

                  <br />
                  <br />
                  <li>
                    I have experience in Java, JavaScript, JavaFXML, C++, HTML,
                    CSS, and SQL.
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <div>
                  <a href='callto:12243881409'>
                    <h5 className='nav-icons'>
                      <i className='fas fa-phone-square'></i>
                    </h5>
                  </a>
                  <a href='mailto:edolszewski96@gmail.com'>
                    <h5 className='nav-icons'>
                      <i className='fas fa-envelope-square'></i>
                    </h5>
                  </a>
                  <a href='www.linkedin.com'>
                    <h5 className='nav-icons'>
                      <i className='fab fa-linkedin'></i>
                    </h5>
                  </a>
                  <a href='www.linkedin.com'>
                    <h5 className='nav-icons'>
                      <i className='fab fa-github-square'></i>
                    </h5>
                  </a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>

      <h4 className='project-title'>MERN Stack Projects</h4>
      <div className='seperation-line'></div>

      <Row
        noGutters
        style={{ width: '99%', textAlign: 'center', margin: 'auto' }}
      >
        <Col xl={6}>
          <NeonMegCard />
        </Col>
        <Col xl={6}>
          <DoubleDCard />
        </Col>
        <Col xl={6}>
          <SportsCard />
        </Col>
        <Col xl={6}>
          <JuliasCard />
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
