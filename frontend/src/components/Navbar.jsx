import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/pricing", label: "Pricing" },
    { path: "/team", label: "Team" },
];

function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar">
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.path} className={`nav-item${location.pathname === item.path ? " active" : ""}`}> 
                        <Link to={item.path} className="nav-link">{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
