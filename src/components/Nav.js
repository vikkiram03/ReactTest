import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            {/* <a href="#" class="navbar-brand">Ethnus</a>
            <div class="Nav">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">About</a>
                <a href="#" class="nav-link">Blog</a>
                <a href="#" class="nav-link">Contact</a>
            </div> */}
            {/* For routers, we can use link components instead of anchor tags */}
            <Link to="#" className="navbar-brand">Ethnus</Link>
            <div class="nav">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    )
}
export default Nav;