import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Carousel controls={false} indicators interval={3000} className="vh-100">
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src="https://via.placeholder.com/1920x1080?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3>Welcome to FinanceAI</h3>
            <p>Smart solutions for your finances</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src="https://via.placeholder.com/1920x1080?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3>Manage with Ease</h3>
            <p>Our tools simplify your workflow</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src="https://via.placeholder.com/1920x1080?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3>Stay Ahead</h3>
            <p>Analytics to help you plan ahead</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Why FinanceAI?</h2>
            <p className="lead">Powerful tools designed for modern businesses</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <h4>Automation</h4>
            <p>Automate repetitive tasks so you can focus on what matters.</p>
          </Col>
          <Col md={4}>
            <h4>Insights</h4>
            <p>Gain insights through our comprehensive analytics dashboard.</p>
          </Col>
          <Col md={4}>
            <h4>Security</h4>
            <p>Your data is protected with industry‑leading security practices.</p>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <Button variant="primary" href="/pricing">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
