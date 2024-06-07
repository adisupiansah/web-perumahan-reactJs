
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap"
import bgHome from '../assets/img/bg-home.jpg'
import bgHome1 from '../assets/img/bg-home1.jpg'
import bgHome2 from '../assets/img/bg-home2.jpg'
import bgHome3 from '../assets/img/bg-home3.jpg'
import bgHome4 from '../assets/img/bg-home4.jpg'


const Home = () => {
  // data background
  const backgrounds = [bgHome,bgHome1, bgHome2, bgHome3, bgHome4]
  // state untuk background
  const [currentBackground, setCurrentBackground] = useState(0);

  // useEffect untuk mengganti background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="component-home d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: `url(${backgrounds[currentBackground]})`}}>
      <Container>
            <Row>
              <div className="home-judul">
                <h1>Perumahan name perusahaan</h1>
                <p>mau cari rumah ? name perusahaan solusinya</p>
              </div>
              <div className="home-button">
                <a href="#cardrumah" className="btn btn-home">Lihat rumah</a>
              </div>
            </Row>
      </Container>
    </div>
  )
}

export default Home
