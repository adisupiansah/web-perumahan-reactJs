// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import gambar1 from '../assets/img/sales-jumbotron.png'

const Jumbotron = () => {
  return (
    <div className="clas-jumbotron">
      <Container>
        <Row>
            <Col md={6}>
                <img src={gambar1} className='jumbotron-img'/>
            </Col>
            <Col md={6} className='jumbotron-title-text'>
                <div className="jumbotron-title">
                  <h2>Mau cari perumahan?</h2>
                </div>
                <div className="jumbotron-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam. Dignissimos velit necessitatibus quaerat error.</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Jumbotron
