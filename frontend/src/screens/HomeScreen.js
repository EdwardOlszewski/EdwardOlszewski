import React from 'react'
import { Row, Col, Card, Image, Container } from 'react-bootstrap'
import profilePicture from './profile.png'
import DoubleDCard from '../components/DoubleDCard'
import NeonMegCard from '../components/NeonMegCard'
import SportsCard from '../components/SportsCard'
import JuliasCard from '../components/JuliasCard'

import WindowSize from '../components/WindowSize'

const HomeScreen = () => {
  const size = WindowSize()

  return (
    <div>
      <div className='about-back'>
        <Row className='about-row'>
          <Col xs={12}>
            <Card className='home-card'>
              <Card.Body>
                <h3 className='about-headers'>Hello, Im Edward Olszewski,</h3>
                <br />
                <p style={{ textAlign: 'center' }}>
                  I am a self taught and degree holding web developer
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className='project-div'>
        <h4 className='project-title'>MERN Stack Projects</h4>
        {size.width < 1350 ? (
          <>
            <Row noGutters>
              <NeonMegCard />
            </Row>
            <Row noGutters>
              <DoubleDCard />
            </Row>
            <Row noGutters>
              <SportsCard />
            </Row>
            <Row noGutters>
              <JuliasCard />
            </Row>
          </>
        ) : (
          <>
            <Row noGutters>
              <Col md={12} xl={6}>
                <NeonMegCard />
              </Col>
              <Col md={12} xl={6}>
                <DoubleDCard />
              </Col>
              <Col md={12} xl={6}>
                <SportsCard />
              </Col>
              <Col md={12} xl={6}>
                <JuliasCard />
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  )
}

export default HomeScreen
