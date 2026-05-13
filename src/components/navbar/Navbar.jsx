import "./Navbar.scss";


const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar__container-wrapper">
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
                


            </nav>
        </header >
    );
};

export default Navbar
