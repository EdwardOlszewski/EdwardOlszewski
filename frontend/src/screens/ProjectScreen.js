import React from 'react'
import { Row, Col } from 'react-bootstrap'
import DoubleDCard from '../components/DoubleDCard'
import NeonMegCard from '../components/NeonMegCard'
import SportsCard from '../components/SportsCard'
import JuliasCard from '../components/JuliasCard'

const ProjectScreen = () => {
  return (
    <div className='project-div'>
      <h5 style={{ color: 'black' }}>MERN Stack Projects</h5>
      <div className='line'></div>
      <Row>
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
          <DoubleDCard />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
          <NeonMegCard />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
          <SportsCard />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
          <JuliasCard />
        </Col>
      </Row>
      <div className='line'></div>
    </div>
  )
}

export default ProjectScreen
