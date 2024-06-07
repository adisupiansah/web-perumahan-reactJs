// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="clas-footer">
      <Container>
        <Row>
            <Col md={6}>
                <div className="footer-text">
                    <p>Hubungi kami</p>
                    <div className="footer-icon">
                       <FaWhatsapp  className='ikon'/> <span>0812-7566-9055</span>
                    </div>
                    <div className="footer-icon mt-2">
                       <FaInstagram  className='ikon'/> <span>adi.spiansyh</span>
                    </div>
                    <div className="footer-icon mt-2">
                       <MdEmail  className='ikon'/> <span>rumahGroup@gmail.com</span>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="footer-text">
                    <p>Alamat Rumah-Group</p>
                    <div className="footer-icon">
                       <FaHome className='ikon'/> <span>Jln. Jendral Ahmad Yani No.1 Karimun</span>
                    </div>
                </div>
            </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Footer
