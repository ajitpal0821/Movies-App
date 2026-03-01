import { Link } from "react-router-dom";
import "../css/Navbar.css"
export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movies App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorite" className="nav-link">Favorite Movies</Link>
            </div>
            <div className="navbar-credit">
                <span>Made by Ajitpal</span>
            </div>
        </nav>
    )
}
