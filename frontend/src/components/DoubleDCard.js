import React from 'react'
import { Card, Image, Button, Row, Col } from 'react-bootstrap'

import doubleDIMG from './DoubleD.png'

const NeonMegCard = () => {
  const color = '#06aa0d'

  return (
    <Card className='project-card'>
      <Card.Body>
        <h5 style={{ color }}>officialdoubled.com</h5>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <Image className='project-img' src={doubleDIMG} />
            </Row>
            <Row>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://officialdoubled.com'
                    className='project-btn-txt'
                  >
                    <i className='fas fa-desktop' /> View Live Version
                  </a>
                </Button>
              </Col>
              <Col xs={6}>
                <Button className='project-btns'>
                  <a
                    href='https://github.com/EdwardOlszewski/OfficialDoubleD'
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
                <li>Google Maps API</li>
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
                <li>Registration</li>
                <li>Login</li>
                <li>Admin menus</li>
                <li>Ecommerce</li>
              </Col>
              <Col xs={6}>
                <li>Upcoming events</li>

                <li>Product Reviews</li>
                <li>Google Maps api</li>
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
                website to allow the customer to sell their merchandise. As well
                as update users on their upcoming events.
              </p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default NeonMegCard

/*


   <Row>
          <Col xl={6}>
            <Image className='project-img' src={doubleDIMG} />
          </Col>
          <Col xl={6}>
            <Row>
              <Col xl={12}>
                <h5>Technologies Used</h5>
              </Col>
              <Col xl={6} style={{ textAlign: 'left' }}>
                <ul>
                  <li>Webpack</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Google Maps API</li>
                  <li>Stripe API</li>
                </ul>
              </Col>
              <Col xl={6} style={{ textAlign: 'left' }}>
                <ul>
                  <li>Amazon AWS</li>
                  <li>Mongo DB</li>
                  <li>Cloudflar</li>
                  <li>JWS</li>
                  <li>Heroku</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <h5 style={{ color: 'black' }}>My Role</h5>
            <p>
              In this project I was the full stack developer. I over saw the
              entire SDLC process. I met weekly with the client to discuss the
              project requirements, needs, and end goals. I did all of this
              while working in an agile scrum like manner.
            </p>
          </Col>
          <Col xl={6}>
            <h5 style={{ color: 'black' }}>Project Difficulties</h5>
            <p>
              During this project I exercised my backend as well as front end
              skills. I started with creating my express server. After having
              the server up and running I focused on the front end and the
              continued integration of the front to back end.
            </p>
          </Col>
          <Col xl={6}>
            <h5 style={{ color: 'black' }}>My Solution</h5>
            <p>
              After assessing the customers initial requirements as well as new
              ones as they came up. I was able to create an ecommerce website to
              allow the customer to sell their merchandise. As well as update
              users on their upcoming events.
            </p>
            <br />
          </Col>
        </Row>

        */
