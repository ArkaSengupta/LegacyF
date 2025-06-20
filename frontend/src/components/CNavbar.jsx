
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CNavbar() {
    const location = useLocation();
    return (
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="main-navbar py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">FinanceAI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto gap-lg-4 gap-3">
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/team">Team</Nav.Link>
                    </Nav>
                    <Nav className="align-items-lg-center">
                        {location.pathname !== '/login' && (
                            <Nav.Link as={Link} to="/login" className="sign-in-link me-lg-3">Sign in</Nav.Link>
                        )}
                        <Button as={Link} to="/pricing" variant="primary" className="get-started-btn">Join waitlist</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default CNavbar;
