import Navbar from "./Navbar";
import "../styles/OpenLayout.css";

function OpenLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="page-body">{children}</div>
        </div>
    );
}

export default OpenLayout;
