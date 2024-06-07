import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa' // pastikan Anda menginstall react-icons

const WhatsApp = () => {
  const [whatsapp, setWhatsapp] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleChange = (e) => {
    setWhatsapp({
      ...whatsapp,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const url = `https://wa.me/6281275669055?text=${encodeURIComponent(`Name: ${whatsapp.name}\nPhone: ${whatsapp.phone}\nMessage: ${whatsapp.message}`)}`

    window.open(url, '_blank')

    setWhatsapp({
      name: '',
      phone: '',
      message: ''
    })

    setIsFormVisible(false) // sembunyikan form setelah submit
  }

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible)
  }

  return (
    <div className="clas-whatsapp">
      <Container>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={8} xs={12}>
            {isFormVisible && (
              <form className="whatsapp-form" onSubmit={handleSubmit}>
                <p>Ada yang bisa kami bantu?</p>
                <div className="group-form">
                  <input 
                    type="text" 
                    placeholder='Your name' 
                    className='form-control mt-4' 
                    name="name" 
                    value={whatsapp.name} 
                    onChange={handleChange}
                  />
                </div>
                <div className="group-form">
                  <input 
                    type="number" 
                    placeholder='+62812XXXXXXXX' 
                    className='form-control mt-4' 
                    name="phone" 
                    value={whatsapp.phone} 
                    onChange={handleChange}
                  />
                </div>
                <div className="group-form">
                  <textarea 
                    placeholder='Your message' 
                    className='form-control mt-4 textarea' 
                    name="message" 
                    value={whatsapp.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="group-button d-flex justify-content-center align-items-center">
                  <button type='submit' className='btn whatsapp-tombol mt-4 col-4'>Send</button>
                </div>
              </form>
            )}
          </Col>
        </Row>
      </Container>
      <button 
        className="whatsapp-button" 
        onClick={toggleFormVisibility}
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  )
}

export default WhatsApp
