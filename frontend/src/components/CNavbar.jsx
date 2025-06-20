
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CNavbar() {
    const location = useLocation();
    return (
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">FinanceAI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto gap-3">
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/team">Team</Nav.Link>
                    </Nav>
                    <Nav>
                        {location.pathname !== '/login' && (
                            <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
                        )}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default CNavbar;
