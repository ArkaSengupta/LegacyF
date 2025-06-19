import { Container, Row, Col, Card, Button } from "react-bootstrap";

const items = [
  {
    title: "Reporting",
    img: "https://via.placeholder.com/300x200",
    desc: "Detailed financial reports.",
  },
  {
    title: "Automation",
    img: "https://via.placeholder.com/300x200",
    desc: "Automate tasks easily.",
  },
  {
    title: "Insights",
    img: "https://via.placeholder.com/300x200",
    desc: "Data driven insights.",
  },
];

function Products() {
  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2>Products</h2>
          <p className="lead">Explore what we offer</p>
        </Col>
      </Row>
      <Row className="g-4">
        {items.map((item) => (
          <Col key={item.title} md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
