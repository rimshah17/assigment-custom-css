import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
      <section className="small-banner">
          <div className="container">
            <h1>Connect with my dream</h1>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            {/* <h1>Contact Us</h1> */}
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
