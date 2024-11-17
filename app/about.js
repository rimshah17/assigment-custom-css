import Header from '../components/header';
import Footer from '../components/footer';


export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="small-banner">
          <div className="container">
            <h1>About Us</h1>
          </div>
        </section>
        <section className="about-us">
          <div className="container">
            <div className="content-left">
              <h2>Who We Are</h2>
              <p>We are a team dedicated to excellence in all we do.</p>
            </div>
            <div className="content-right">
              <img src="/img/about-us.jpg" alt="About Us" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
