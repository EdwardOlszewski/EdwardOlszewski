import React from 'react'
import { Card, Image, Button, Row, Col } from 'react-bootstrap'

import sportsIMG from './SportsAndSneakers.png'

const SportsCard = () => {
  const color = 'red'

  return (
    <Card className='project-card'>
      <Card.Body>
        <h5 style={{ color }}>SportsAndSneakers.com</h5>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <Image className='project-img' src={sportsIMG} />
            </Row>
            <Row>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://sportsandsneakers.com'
                    className='project-btn-txt'
                  >
                    <i className='fas fa-desktop' /> View Live
                  </a>
                </Button>
              </Col>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://github.com/EdwardOlszewski/SportsAndSneakers'
                    className='project-btn-txt'
                  >
                    <i className='fab fa-github' /> View GitHub
                  </a>
                </Button>
              </Col>
            </Row>

            <h5 style={{ color }}>Technologies Used</h5>
            <Row style={{ color: 'black' }}>
              <Col xs={6} style={{ textAlign: 'left' }}>
                <li>Webpack</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>YouTube API</li>
                <li>Stripe API</li>
              </Col>
              <Col xs={6} style={{ textAlign: 'left' }}>
                <li>Amazon AWS</li>
                <li>Mongo DB</li>
                <li>Cloudflare</li>
                <li>JWT</li>
                <li>Heroku</li>
                <br />
              </Col>
            </Row>
            <h5 style={{ color }}>Notable Features</h5>
            <Row style={{ color: 'black' }}>
              <Col xs={6}>
                <li>Admin Menus</li>
                <li>YouTube API Videos</li>
                <li>About Me Section</li>
                <br />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} style={{ padding: '0rem 2rem 0rem' }}>
            <Row>
              <h5 style={{ color }}>My Role</h5>
              <p className='project-txt'>
                In this project I was the full stack developer. I over saw the
                entire SDLC process. I met weekly with the client to discuss the
                project requirements, needs, and end goals. I did all of this
                while working in an agile scrum like manner.
              </p>
            </Row>
            <br />
            <Row>
              <h5 style={{ color }}>Project Difficulties</h5>
              <p className='project-txt'>
                During this project I had to learn how to use the YouTube API.
                At first it took some time to understand. After I understood how
                to use it. It became an integral part of this application
              </p>
            </Row>
            <br />
            <Row>
              <h5 style={{ color }}>My Solution</h5>
              <p className='project-txt'>
                After assessing the customers initial requirements as well as
                new ones as they came up. I was able to create a full functional
                website to showcase the customers images as well as their
                YouTube Videos.
              </p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default SportsCard
