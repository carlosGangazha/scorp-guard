import './Contact.css';

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
              <p>Phone: [Your Phone]</p>
              <p>Email: [Your Email]</p>
            </div>

            <div className="info-card">
              <h3>Business Hours</h3>
              <p>Monday - Friday: [Hours]</p>
              <p>Weekend: [Hours]</p>
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