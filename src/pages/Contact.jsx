import './Contact.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';
import signal from '../assets/signal.png';

function Contact() {
  return (

    <div className="contact-page">
      <div className="contact-container">

        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for professional security solutions</p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Our Office</h3>
              <p>[Your Address]</p>
              <p>[City, State, ZIP]</p>
            </div>

            <div className="info-card">
              <h3>Contact Information</h3>
              <p>Email: pollenshava@gmail.com</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://x.com/miller_grt02" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={signal} alt="Signal" />
                </a>
                <a href="https://wa.link/ua7cjs" target="_blank" rel="noopener noreferrer">
                  <img src={whatsapp} alt="Whatsapp" />
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 0800 - 2230 Hrs</p>
              <p>Weekend: 0900 - 2000 Hrs</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
             
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 