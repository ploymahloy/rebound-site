import './Contact.css';

const Contact = () => {
  const industryExperience = [
    'Industrial Manufacturing',
    'Power Generation',
    'Chemical Plants',
    'Pulp and Paper',
    'Petroleum Refining',
    'Rock Quarries',
    'Large Heavy Equipment',
    'Railroads',
    'Shipbuilding'
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team of experts</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-person">
              <h3>Sam Craig</h3>
              <p>Manager of Operations</p>
              <p>(804) 928-6405</p>
            </div>

            <div className="contact-person">
              <h3>Teresa Craig</h3>
              <p>Sales Manager</p>
              <p>(804) 928-6406</p>
            </div>

            <div className="quote-section">
              <h3>Schedule a FREE Quote</h3>
              <p>Call (804) 928-6405</p>
            </div>

            <div className="address-section">
              <h3>Rebound Industrial Maintenance</h3>
              <p>P.O. Box 1829</p>
              <p>Midlothian, Virginia 23113</p>
              <p>804.744.7477 (phone)</p>
              <p>804.744.7748 (fax)</p>
              <p>services@reboundindustrialmaintenance.com</p>
            </div>
          </div>

          <div className="industry-experience">
            <h2>INDUSTRY EXPERIENCE</h2>
            <div className="industry-list">
              {industryExperience.map((industry, index) => (
                <div key={index} className="industry-item">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;