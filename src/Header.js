import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header id="header">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="title">Movies R US</div>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link
                        to="/"
                        className="nav-link"
                        activeClassName="active"
                        exact
                    >
                        Home
                    </Link>
                    <Link
                        to="/table"
                        className="nav-link"
                        activeClassName="active"
                    >
                        Table
                    </Link>
                    <Link
                        to="/create"
                        className="nav-link"
                        activeClassName="active"
                    >
                        Add Movie
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
