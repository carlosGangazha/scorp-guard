import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">

        <section className="about-header">
          <h1>About Us</h1>
          <div className="company-intro">
            <p>Scorp-Guard is a leading security company specializing in providing professional guard services. With years of experience, we ensure the safety and security of our clients through tailored solutions.</p>
            <p>Our team of highly trained security professionals brings expertise and dedication to every assignment, maintaining the highest standards of vigilance and professionalism.</p>
            <p>We pride ourselves on our commitment to customer satisfaction and our ability to adapt our services to meet the unique security needs of businesses and organizations of all sizes.</p>

          </div>
        </section>

        <section className="objectives-section">
          <h2>Objectives</h2>
          <div className="objectives-grid">
            <div className="objective-item">
              <h3>Provide Quality Security Services</h3>
              <p>Offer reliable and efficient security services to clients, ensuring their safety and security.</p>
            </div>
            <div className="objective-item">
              <h3>Protect People and Assets</h3>
              <p>Safeguard clients properties, assets, and personnel from potential threats, damages, or losses.</p>
            </div>
            <div className="objective-item">
              <h3>Prevent Crime and Disorder</h3>
              <p>Deter and prevent criminal activities, maintaining law and order in clients premises and surrounding areas.</p>
            </div>
            <div className="objective-item">
              <h3>Build Strong Client Relationships</h3>
              <p>Foster long-term partnerships with clients, understanding their unique security needs and providing tailored solutions.</p>
            </div>
            <div className="objective-item">
              <h3>Maintain High Professional Standards</h3>
              <p>Ensure all security personnel are trained, licensed, and adhere to industry best practices and codes of conduct.</p>
            </div>
            <div className="objective-item">
              <h3>Stay Up-to-Date with Industry Developments</h3>
              <p>Continuously update knowledge and skills to address emerging security threats and technologies.</p>
            </div>
            <div className="objective-item">
              <h3>Achieve Business Growth</h3>
              <p>Expand the company client base, increase revenue, and maintain profitability while ensuring long-term sustainability.</p>
            </div>
            <div className="objective-item">
              <h3>Contribute to Community Safety</h3>
              <p>Collaborate with local law enforcement agencies and community organizations to promote public safety and security.</p>
            </div>
            <div className="objective-item">
              <h3>Provide Employment Opportunities</h3>
              <p>Offer jobs and career development opportunities for security personnel, contributing to local economic growth.</p>
            </div>
            <div className="objective-item">
              <h3>Maintain a Positive Company Image</h3>
              <p>Uphold a professional reputation, adhering to ethical standards and demonstrating a commitment to excellence in security services.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;