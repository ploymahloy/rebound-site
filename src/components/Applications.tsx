import './Applications.css';

const Applications = () => {
  const jobListings = [
    {
      title: 'Industrial Machinist',
      location: 'Richmond, VA',
      type: 'Full-time',
      description: 'We are seeking an experienced Industrial Machinist to join our team. The ideal candidate will have experience with precision machining, equipment maintenance, and industrial repair work.',
      requirements: [
        'Minimum 5 years experience in industrial machining',
        'Proficiency in operating various machine tools',
        'Ability to read and interpret technical drawings',
        'Strong problem-solving skills',
        'Experience with preventive maintenance'
      ]
    },
    {
      title: 'Field Service Technician',
      location: 'Richmond, VA',
      type: 'Full-time',
      description: 'Join our team as a Field Service Technician, providing on-site maintenance and repair services to our industrial clients. This position requires travel to various job sites.',
      requirements: [
        '3+ years experience in industrial maintenance',
        'Valid driver\'s license',
        'Ability to work independently',
        'Strong mechanical aptitude',
        'Experience with industrial equipment repair'
      ]
    },
    {
      title: 'Welder/Fabricator',
      location: 'Richmond, VA',
      type: 'Full-time',
      description: 'We are looking for a skilled Welder/Fabricator to join our team. The position involves welding, fabrication, and repair work for industrial equipment and structures.',
      requirements: [
        'Certified welder with 3+ years experience',
        'Experience with various welding techniques',
        'Ability to read blueprints',
        'Strong attention to detail',
        'Experience with industrial fabrication'
      ]
    },
    {
      title: 'Maintenance Supervisor',
      location: 'Richmond, VA',
      type: 'Full-time',
      description: 'Lead our maintenance team as a Maintenance Supervisor. This position requires strong leadership skills and extensive experience in industrial maintenance.',
      requirements: [
        '7+ years experience in industrial maintenance',
        '2+ years in a supervisory role',
        'Strong leadership and communication skills',
        'Experience with maintenance planning',
        'Knowledge of safety regulations'
      ]
    }
  ];

  return (
    <div className="applications">
      <section className="applications-hero">
        <div className="applications-hero-content">
          <h1>Career Opportunities</h1>
          <p>Join our team of industrial maintenance experts</p>
        </div>
      </section>

      <section className="applications-content">
        <div className="job-listings">
          {jobListings.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <h2>{job.title}</h2>
                <div className="job-meta">
                  <span className="location">{job.location}</span>
                  <span className="type">{job.type}</span>
                </div>
              </div>
              <div className="job-description">
                <p>{job.description}</p>
              </div>
              <div className="job-requirements">
                <h3>Requirements:</h3>
                <ul>
                  {job.requirements.map((requirement, idx) => (
                    <li key={idx}>{requirement}</li>
                  ))}
                </ul>
              </div>
              <div className="job-actions">
                <a href="mailto:services@reboundindustrialmaintenance.com" className="apply-button">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Applications;