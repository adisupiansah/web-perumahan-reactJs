import { Container, Row, Col, Card} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SyaratKredit = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rumahId = searchParams.get('id');


  return (
    <div className="syratkredit d-flex justify-content-center align-items-center vh-100">
      <Container className="px-5">
        <Row>
          <Col>
            <Card className="syaratkredit-card">
              <Card.Header>
                <h4 className="syaratkredit-cardheader">Syarat Kredit</h4>
              </Card.Header>
              <Card.Body>
                <ul className="syaratkredit-pemohon">
                  <li className="mt-3">
                    <span className="fw-bold">Kewarganegaraan:</span> <span>Pemohon harus berwarganegaraan Indonesia</span>
                  </li>
                  <li className="mt-3">
                    <span className="fw-bold">Usia:</span> <span>Pemohon harus berusia 21 Tahun</span>
                  </li>
                  <li className="mt-3">
                    <span className="fw-bold">Pendapatan:</span> <span>Pemohon harus memiliki gaji minimal Rp4 juta dan kisaran pendapatan antara Rp4 juta dan Rp7 juta</span>
                  </li>
                  <li className="mt-3">
                    <span className="fw-bold">Dokumen:</span> <span>Pemohon harus menyerahkan dokumen-dokumen seperti fotokopi e-KTP, Kartu Keluarga, surat nikah/cerai, rekening koran, dan NPWP/SPT PPh 21</span>
                  </li>
                  <li className="mt-3">
                    <span className="fw-bold">Pemahaman:</span> <span>Pemohon harus memahami mekanisme pembayaran dan bunga</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <div className="syaratkredit-button d-flex justify-content-center">
              <Link to={`/detailrumah/${rumahId}`} className='btn-syaratkredit'>kembali</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SyaratKredit;
