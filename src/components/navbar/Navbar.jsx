import { NavLink } from "react-router";
import "./Navbar.scss";
 
const Navbar = () => {
    return (
        <>
            {/* ── Mobile only: top logo strip ── */}
            <div className="navbar__mobile-header">
                <h1 className="navbar__logo">CINEPHILE</h1>
            </div>
 
            {/* ── Mobile: bottom tab bar  |  Desktop: full top header ── */}
            <header className="navbar">
                <nav className="navbar__container-wrapper">
 
                    {/* Logo — desktop only (rendered above on mobile) */}
                    <div className="navbar__logo-container">
                        <h1 className="navbar__logo">CINEPHILE</h1>
                    </div>
 
                    {/* Nav links — NavLink sets .active automatically */}
                    <ul className="navbar__links">
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
 
                    {/* Auth — desktop only */}
                    <div className="navbar__auth">
                        <NavLink to="/signin" className="navbar__signin">Sign In</NavLink>
                        <NavLink to="/get-access" className="navbar__cta">Get Access</NavLink>
                    </div>
 
                </nav>
            </header>
        </>
    );
};
 
export default Navbar;
 
