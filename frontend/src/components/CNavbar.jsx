
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function CNavbar() {
    const location = useLocation();
    return (
            <Navbar expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#">FinanceAI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                    <Nav className="mx-auto gap-4 fs-5">
                        {/* <Nav.Link href="#" active>Home</Nav.Link> */}
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default CNavbar;
