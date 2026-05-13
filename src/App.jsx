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
          <img src="" alt="" />
          <Tags label="NOW TRENDING"/>
        </article>

      </section>
    </>
  );
}

export default App;
