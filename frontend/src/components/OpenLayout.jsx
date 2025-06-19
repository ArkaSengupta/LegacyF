import CNavbar from "./CNavbar";
import "../styles/OpenLayout.css";

function OpenLayout({ children }) {
    return (
        <div>
            <CNavbar />
            <div className="page-body">{children}</div>
        </div>
    );
}

export default OpenLayout;
