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

                    {/* Logo — hidden on mobile (rendered above), visible on desktop */}
                    <div className="navbar__logo-container">
                        <h1 className="navbar__logo">CINEPHILE</h1>
                    </div>

                    {/* Nav links */}
                    <ul className="navbar__links">
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#" className="active">Contact</a></li>
                    </ul>

                    {/* Auth — desktop only */}
                    <div className="navbar__auth">
                        <a href="#" className="navbar__signin">Sign In</a>
                        <a href="#" className="navbar__cta">Get Access</a>
                    </div>

                </nav>
            </header>
        </>
    );
};

export default Navbar;