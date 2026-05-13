import "./Navbar.scss";


const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <div className="navbar__logo-container">
                    <h1 className="navbar__logo">CINEPHILE</h1>
                </div>
                <ul>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
                <div className="navbar__btns">
                    <a href="#">Sign In</a>
                    <a href="#" className="btn__access">Get Access</a>
                </div>


            </nav>
        </header >
    );
};

export default Navbar
