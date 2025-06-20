
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CNavbar() {
    return (
        <Navbar expand="lg" bg="transparent" variant="light" fixed="top" className="main-navbar py-3">
            <Container>
                <Navbar.Brand as={Link} to="/">FinanceAI</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mx-auto gap-lg-4 gap-3">
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/team">Team</Nav.Link>
                    </Nav>
                    <Nav className="align-items-lg-center">
                        <Button as={Link} to="/pricing" variant="primary" className="get-started-btn">Get early access</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CNavbar;
