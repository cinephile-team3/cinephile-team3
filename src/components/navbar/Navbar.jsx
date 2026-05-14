import { NavLink } from "react-router";
import "./Navbar.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton"

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
                        <li><NavLink to="/">Movies</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>

                    <div className="navbar__auth">
                        {/* Static Sign In Button */}
                        <button className="navbar__signin-btn">Sign In</button>
                        
                        {/* Precise PrimaryButton implementation */}
                        <div className="navbar__button-wrapper">
                            <PrimaryButton label="Get Access" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
 
export default Navbar;
 
