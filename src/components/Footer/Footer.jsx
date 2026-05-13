const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer__brand">
            <span className="footer__logo">CINEPHILE</span>
            <span className="footer__tagline">PRECISION ENGINEERED STREAMING.</span>
        </div>

        <nav className="footer__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
            <a href="#">API</a>
        </nav>

        <div className="footer__icons">
            <button className="footer__icon">🌐</button>
            <button className="footer__icon">↗</button>
        </div>

    </footer>
  )
}

export default Footer