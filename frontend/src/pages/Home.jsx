import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <section className="hero d-flex align-items-center text-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-3 fw-bold mb-4">
                AI-powered finance for modern teams
              </h1>
              <p className="lead mb-4">
                Automate your workflow and gain insights with a single platform.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" href="/pricing">Join waitlist</Button>
                <Button variant="outline-light" href="/products">Watch demo</Button>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <img
                src="https://via.placeholder.com/700x420"
                alt="FinanceAI screenshot"
                className="img-fluid hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features text-center py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Built for productivity</h2>
              <p className="section-subtitle">
                Tools that help you work smarter and faster
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <img
                src="https://via.placeholder.com/80"
                className="mb-3 feature-icon"
                alt="Automation"
              />
              <h5>Automated Reporting</h5>
              <p className="text-muted">
                Generate detailed reports with a single click using our AI
                engine.
              </p>
            </Col>
            <Col md={4}>
              <img
                src="https://via.placeholder.com/80"
                className="mb-3 feature-icon"
                alt="Insights"
              />
              <h5>Predictive Insights</h5>
              <p className="text-muted">
                Stay ahead with forecasts and actionable insights.
              </p>
            </Col>
            <Col md={4}>
              <img
                src="https://via.placeholder.com/80"
                className="mb-3 feature-icon"
                alt="Security"
              />
              <h5>Secure Cloud</h5>
              <p className="text-muted">
                Your data is encrypted and safely stored in the cloud.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta text-center text-light py-5">
        <Container>
          <h2 className="mb-4">Ready to get started?</h2>
          <Button variant="light" href="/pricing" size="lg">
            Get started
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;
