import React from 'react'
import { Card, Image, Button, Row, Col } from 'react-bootstrap'
import tooIMG from '../images/TooFighters.png'

const TooFightersCard = () => {
  const color = 'gray'

  return (
    <Card className='project-card'>
      <Card.Body>
        <h5 style={{ color }}>toofighterschicago.com</h5>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <Image className='project-img' src={tooIMG} />
            </Row>
            <Row>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://toofighterschicago.com'
                    className='project-btn-txt'
                  >
                    <i className='fas fa-desktop' /> View Live
                  </a>
                </Button>
              </Col>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://github.com/EdwardOlszewski/toofighters'
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
                <li>Reverb Nation API</li>
                <li>Google Maps API</li>
              </Col>
              <Col xs={6} style={{ textAlign: 'left' }}>
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
                <li>Reverb Nation Music</li>
                <li>Events</li>
                <br />
                <br />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} style={{ padding: '0rem 2rem 0rem' }}>
            <Row>
              <h5 style={{ color }}>My Role</h5>
              <p className='project-txt'>
                In this project I was the full stack developer. I over saw the
                entire SDLC process. I met bi-weekly with the client to discuss
                the project requirements, needs, and end goals. I did all of
                this while working in an agile scrum manner.
              </p>
            </Row>
            <br />
            <Row>
              <h5 style={{ color }}>Project Difficulties</h5>
              <p className='project-txt'>
                During this project I had to learn how to use the Reverb Nation
                API. At first it took some time to understand.
              </p>
            </Row>
            <br />
            <Row>
              <h5 style={{ color }}>My Solution</h5>
              <p className='project-txt'>
                After assessing the customers initial requirements as well as
                new ones as they came up. I was able to create a full functional
                website to showcase the customers events as well as their music.
              </p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TooFightersCard
