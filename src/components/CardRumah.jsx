import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const CardRumah = () => {
  return (
    <div className="rumah">
      <Container>
        <Row>
          <Col>
            <div className="card-rumahdeskripsi">
              <p className="text-center">
                rumah LBB group mulai dari RP 250.000 perbulan
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="card-rumah">
              <Carousel>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150/111"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150/222"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Rumah 1</Card.Title>
                <Card.Text>Deskripsi rumah 1</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="card-rumah">
              <Carousel>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150/111"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150/222"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Rumah 1</Card.Title>
                <Card.Text>Deskripsi rumah 1</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="card-rumah">
              <Carousel>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150/111"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150/222"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Rumah 1</Card.Title>
                <Card.Text>Deskripsi rumah 1</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default CardRumah;
