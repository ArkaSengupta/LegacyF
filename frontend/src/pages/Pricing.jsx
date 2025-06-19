import { Container, Row, Col, Card, Button } from "react-bootstrap";

const tiers = [
  { title: "Free", price: "0", features: ["1 user", "Basic support"] },
  {
    title: "Pro",
    price: "9",
    features: ["Up to 5 users", "Priority support"],
  },
  {
    title: "Enterprise",
    price: "29",
    features: ["Unlimited users", "Dedicated support"],
  },
];

function Pricing() {
  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2>Pricing</h2>
          <p className="lead">Simple and transparent pricing</p>
        </Col>
      </Row>
      <Row className="g-4 justify-content-center">
        {tiers.map((tier) => (
          <Col key={tier.title} md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>{tier.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ${tier.price}/mo
                </Card.Subtitle>
                <ul className="list-unstyled my-3">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button variant="primary">Choose Plan</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Pricing;
