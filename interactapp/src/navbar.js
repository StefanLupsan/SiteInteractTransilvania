import { Link } from "react-router-dom"
import logo from "./homeImages/interactlogo.png";

export default function Navbar() {
    return <nav className = "nav">
        <Link to="/" className="site-title"><img src={logo} width="235" height="50" alt="Interact Logo"></img></Link>
        <ul>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
        </ul>
    </nav>
}