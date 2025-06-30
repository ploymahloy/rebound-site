import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Decades of industrial expertise and excellence</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Owner Sam "Bubba" Craig has over 25 years experience in the field of industrial machining.
              He graduated from the Newport News Shipbuilding Apprentice School, and moved to General Electric
              early in his career. While employed with GE, Sam had the opportunity to work with numerous
              Fortune 500 companies, and to hone a diverse and extensive skill set for mechanical repairs
              and machining. He became a fixture on site, and a leader in-shop. During his tenure with GE,
              Sam developed his quoting and management skills in addition to his machining talents. When GE
              consolidated its operations and left the Richmond VA Service Center closed, an opportunity
              presented itself. Sam and Teresa Craig decided their combined years of mechanical expertise,
              customer relationships, finance, management and business experience made the formation of
              Rebound Industrial Maintenance an idea worth pursuing.
            </p>
          </div>
          <div className="about-image">
            <img
              src="./public/aboutsam.jpg"
              alt="Industrial facility"
            />
          </div>
        </div>

        <div className="about-section">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Industrial team"
            />
          </div>
          <div className="about-text">
            <h2>Our Team</h2>
            <p>
              Rebound Industrial Maintenance's staff is by far our greatest asset. We are supported by
              employees that are also well experienced in our field. Though Rebound Industrial Maintenance
              is a young company, we come to a job with an abundant years combined experience. Rebound was
              fortunate to secure much of our employee talent from the long standing relationships with
              experienced technicians. Our machinist and mechanics are well established in the industrial
              field, and bring long career experience to every job we tackle.
            </p>
            <p>
              The majority of our employees individually bring 20 plus years of working knowledge, training
              and mechanical capability. We have Class A Machinists, mechanics and welders in our ranks that
              have worked in the industrial maintenance field and with large and small customers for decades.
              The combined pool of knowledge and experience gives us the confidence to take on any mechanical
              challenge. In short time, Rebound Industrial Maintenance has gained the trust of many industrial
              clients. Among our customers, we are proud to do business with many Fortune 500 Companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;