import { useContext } from 'react'
import { RumahContext } from '../context/Rumah'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { numberWithCommas } from './format/util'
import { Link } from 'react-router-dom'
import Notif from './Notif'



const CardRumah2 = () => {
    const { rumah } = useContext(RumahContext)

    // Tambahkan pengecekan jika rumah undefined atau null
    if (!rumah || rumah.length === 0) {
        return (<div className='text-center p-5'>
            <Notif />
            <h3>KESALAHAN SAMBUNGAN</h3>
        </div>) // atau tampilkan pesan atau spinner loading
    }

    return (
        <div className='clas-cardrumah2' id='cardrumah'>
            <Container>
                <Row>
                    {rumah.map((item) => (
                        <Col key={item.id} md={4}>
                            <Card className="cardrumah2">
                                <Card.Img variant="top" src={"assets/image/" + item.gambar} className='cardrumah2-img' />
                                <Card.Body>
                                    <Card.Title className='cardrumah2-title'>{item.nama}</Card.Title>
                                    <Card.Text className='cardrumah2-text'>{item.deskripsi}</Card.Text>
                                    <Card.Text className='cardrumah2-text'>Uang Muka : {numberWithCommas(item.harga)} </Card.Text>
                                    <Link to={`/detailrumah/${item.id}`}>
                                        <span className='cardrumah2-view'>lihat rumah</span>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CardRumah2
