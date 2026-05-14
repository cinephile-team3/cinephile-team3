import './App.scss';
import Navbar from "./components/navbar/Navbar";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton/SecondaryButton";
import Tags from "./components/Tags/Tags";

function App() {
  return (
    <>
      <section className="hero__landing">
        <Tags label="ULTRA HD STREAMING" />
        <h1 className="title__landing">Discover Pure Cinema.</h1>
        <p className="p__landing">
          Precision-engineered streaming for the world's most dedicated
          cinephiles.
        </p>
        <PrimaryButton label="Get Access" />
        <SecondaryButton label="View Catalog" />
      </section>
      <section className="trending__landing">
        <article className="card__landing">
          <img src="src\assets\card-landing.png" alt="Trending movie" />
          <Tags label="NOW TRENDING"/>
          <h2>Interstellar Voyage</h2>
        </article>
      </section>

      <section className="kw__landing">
        <div className="kw__landing__container">
          <h2>Keep Watching</h2>
          <button className="kw__landing__button">See All</button>
        </div>
        <article className="kw__landing__card">
          <img src="src\assets\kw-landing.jpg" alt="Neo Tokyo poster" />
          <h3 className="kw__card__title">Neo Tokyo 2088</h3>
          <p className="kw__card__p">S1:E4 "The Signal"</p>
          <div className="kw__loading__bar"></div>
        </article>
      </section>
    </>
  );
}

export default App;