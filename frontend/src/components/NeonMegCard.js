import React from 'react'
import { Card, Image, Button, Row, Col } from 'react-bootstrap'

import NeonMegIMG from './NeonMeg.png'

const DoubleDCard = () => {
  const color = 'purple'

  return (
    <Card className='project-card'>
      <Card.Body>
        <h5 style={{ color }}>neonmegsshop.com</h5>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <Image className='project-img' src={NeonMegIMG} />
            </Row>
            <Row>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://neonmegsshop.com'
                    className='project-btn-txt'
                  >
                    <i className='fas fa-desktop' /> View Live Version
                  </a>
                </Button>
              </Col>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://github.com/EdwardOlszewski/NeonMegShop'
                    className='project-btn-txt'
                  >
                    <i className='fab fa-github' /> View On GitHub
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
                <li>Heroku</li>
                <li>Stripe API</li>
                <br />
              </Col>
              <Col xs={6} style={{ textAlign: 'left' }}>
                <li>Amazon AWS</li>
                <li>Mongo DB</li>
                <li>Cloudflare</li>
                <li>JWT</li>
              </Col>
            </Row>
            <h5 style={{ color }}>Notable Features</h5>
            <Row style={{ color: 'black' }}>
              <Col xs={6}>
                <li>Registration</li>
                <li>Login</li>
                <li>Ecommerce</li>
                <br />
              </Col>
              <Col xs={6}>
                <li>Admin menus</li>
                <li>Product Reviews</li>
                <li>About Me Section</li>
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
                During this project I exercised my backend as well as front end
                skills. I started with creating my express server. After having
                the server up and running I focused on the front end and the
                continued integration of the front to back end.
              </p>
            </Row>
            <br />
            <Row>
              <h5 style={{ color }}>My Solution</h5>
              <p className='project-txt'>
                After assessing the customers initial requirements as well as
                new ones as they came up. I was able to create an ecommerce
                website to allow the customer to sell their merchandise.
              </p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default DoubleDCard
