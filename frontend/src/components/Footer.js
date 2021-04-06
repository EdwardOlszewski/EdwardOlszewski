import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const color = '#FFFFFF'

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Edward Olszewski
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
