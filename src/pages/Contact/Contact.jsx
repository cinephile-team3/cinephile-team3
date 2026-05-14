import Navbar from "../../components/navbar/Navbar";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton"
import "./Contact.scss";

function Contact() {
  return (
    <div className="page-offset">
      <Navbar />
      <main className="contact">
        <div className="contact__container">
          {/* Header Text - Layout changes based on Desktop mockup */}
          <section className="contact__info">
            <p className="contact__overline">ESTABLISH LINK</p>
            <h1 className="contact__title">
              STAY <br /> CONNECTED
            </h1>
            <p className="contact__description">
              Experience precision-engineered streaming. Our specialized team is
              standing by to resolve technical queries and partnership requests
              with cinematic efficiency.
            </p>
            
            {/* Mobile-only text variant from Contact Us - Mobile_2.jpg */}
            <div className="contact__mobile-text">
                <h1>Contact Us</h1>
                <p>Send a transmission to our orbital station.</p>
            </div>
          </section>

          {/* Form Card */}
          <section className="contact__card">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>IDENTIFIER</label>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="contact__field">
                  <label>E-MAIL</label>
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>

              <div className="contact__field">
                <label>MESSAGE</label>
                <textarea placeholder="How can we assist your cinephile experience?"></textarea>
              </div>

              <div className="contact__footer">
                <span className="contact__security">
                  <i className="icon-lock"></i> END-TO-END SECURE
                </span>
                <div className="contact__button-wrapper">
                  <PrimaryButton label="Send" />
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Contact;