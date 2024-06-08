import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { RumahContext } from '../context/Rumah';
import { Row, Col, Container } from 'react-bootstrap';
import { numberWithCommas } from '../components/format/util';
import Nodata from '../assets/img/no-data.png';


function DetailRumah() {
  const { id } = useParams(); // Ambil ID dari URL
  const { rumah } = useContext(RumahContext);
  
  const selectedRumah = rumah.find((item) => item.id === parseInt(id));

  if (!selectedRumah) {
    return(
      <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <img src={Nodata} alt="No Data" className='detailrumah-gambar'/>
        <h3 className='detailrumah-judul'>Maaf Rumah tidak ada</h3>
      </div>
    )
  }

  return (
    <div className='detailrumah d-flex justify-content-center align-items-center vh-100'>
      <Container>
        <Row>
          <div key={selectedRumah.id} className='flex-wrap d-flex'>
            <Col md={6} className='detailrumah-gambar'>
              <img src={"../assets/image/" + selectedRumah.gambar} alt={selectedRumah.nama} />
            </Col>
            <Col md={6} className='detailrumah-conten'>
              <div className="detailrumah-deskripsi">
                <h1>{selectedRumah.nama}</h1>
                <p>{selectedRumah.deskripsi}</p>
                <p>Uang Muka : {numberWithCommas(selectedRumah.harga)} <span className='fw-bold'>(apabila kredit)</span></p>
                <p>Harga Cash : {numberWithCommas(selectedRumah.hargaAsli)}</p>
                <p>lokasi: {selectedRumah.lokasi}</p>
                <p>Luas: {selectedRumah.luas}</p>
                <p>Kamar: {selectedRumah.kamar}</p>
                <p>Kamar Mandi: {selectedRumah.kamarMandi}</p>
                <p>Garasi: {selectedRumah.garasi}</p>
                <div className="d-flex">
                  <a href="/" className='detailrumah-back text-decoration-none'>Kembali</a>
                  <Link to={`/syarat?id=${id}`} className='detailrumah-back text-decoration-none mx-2'>Syarat Kredit</Link>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}


export default DetailRumah;
