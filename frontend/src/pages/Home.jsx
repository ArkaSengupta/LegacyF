import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="hero-content">
                <h1 className="display-4 mb-3">Finance done right.</h1>
                <p className="lead">
                  The all‑in‑one platform to manage, track and analyse your
                  finances.
                </p>
                <div className="hero-buttons mt-4">
                  <Button variant="primary" href="/pricing" className="me-2">
                    Get Started
                  </Button>
                  <Button variant="outline-light" href="/login">
                    Sign In
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features">
        <Container>
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
        </Container>
      </section>
    </div>
  );
}

export default Home;
