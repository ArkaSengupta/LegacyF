import { Container, Row, Col, Card } from "react-bootstrap";

const members = [
  { name: "Jane Doe", role: "CEO", img: "https://via.placeholder.com/200" },
  { name: "John Smith", role: "CTO", img: "https://via.placeholder.com/200" },
  { name: "Sara Lee", role: "CFO", img: "https://via.placeholder.com/200" },
];

function Team() {
  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2>Our Team</h2>
          <p className="lead">Meet the people behind FinanceAI</p>
        </Col>
      </Row>
      <Row className="g-4 justify-content-center">
        {members.map((m) => (
          <Col key={m.name} md={4}>
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={m.img} className="object-fit-cover" />
              <Card.Body>
                <Card.Title>{m.name}</Card.Title>
                <Card.Text>{m.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;
