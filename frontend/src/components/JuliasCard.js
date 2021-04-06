import React from 'react'
import { Card, Image, Button, Row, Col } from 'react-bootstrap'

import juliasIMG from './Julia.png'

const JuliasCard = () => {
  const color = '#3d673b'

  return (
    <Card className='project-card'>
      <Card.Body>
        <h5 style={{ color }}>juliaswildliferehab.com</h5>
        <Row>
          <Col xl={6}>
            <Row>
              <Image className='project-img' src={juliasIMG} />
            </Row>
            <Row>
              <Col>
                <Button className='project-btns'>
                  <p className='project-btn-txt'>
                    <i className='fas fa-desktop' /> View Live Version
                  </p>
                </Button>
              </Col>
              <Col>
                <Button className='project-btns'>
                  <p className='project-btn-txt'>
                    <i className='fab fa-github' /> View On GitHub
                  </p>
                </Button>
              </Col>
            </Row>
            <h5 style={{ color }}>Technologies Used</h5>
            <Row>
              <Col xl={6} style={{ textAlign: 'left' }}>
                <ul className='project-txt'>
                  <li>Webpack</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Google Maps API</li>
                </ul>
              </Col>
              <Col xl={6} style={{ textAlign: 'left' }}>
                <ul className='project-txt'>
                  <li>Amazon AWS</li>
                  <li>Mongo DB</li>
                  <li>Cloudflare</li>
                  <li>Heroku</li>
                </ul>
              </Col>
            </Row>
            <h5 style={{ color }}>Notable Features</h5>
            <Row>
              <Col xl={6}>
                <ul className='project-txt'>
                  <li>Admin Menus</li>
                  <li>Reviews</li>
                  <li>About Section</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xl={6}>
            <br />

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
                new ones as they came up. I was able to create a web application
                for the customer to inform their community about their service.
              </p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default JuliasCard
