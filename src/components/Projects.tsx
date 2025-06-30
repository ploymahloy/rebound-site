import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Fan Repair',
      description: 'Fabricatedreplacement blades for a large industrial fan and conducted precision balancing as part of a comprehensive repair for a local theme park’s ventilation system. This ensured reliable operation and improved performance for the client’s critical equipment.',
      image: './public/Shaftmachining.jpg',
      services: [ 'Low speed balance', 'Replacement parts', 'Gearbox repair' ]
    },
    {
      title: 'Platen Refurbishment',
      description: 'Provided on-site machining services to re-bore an aluminum extrusion press platen, making it compatible with upgraded equipment. This solution minimized downtime and costs while extending the service life of the client’s press components.',
      image: './public/platenproject.jpg',
      services: ['Field Machining', 'Change Out and Alignment', 'Replacement Parts']
    },
    {
      title: 'Industrial Plant Modernization',
      description: 'Comprehensive modernization of a manufacturing facility, including machine shop upgrades, valve system overhauls, and alignment of critical equipment. This project improved production efficiency by 35% and reduced maintenance downtime by 40%.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      services: ['Machine Shop', 'Valve Repair', 'Change Out and Alignment']
    },
    {
      title: 'Manufacture Precision Motor Base',
      description: 'Manufactured a multilevel motor/gearbox to hold a precise footprint and height requirements',
      image: './public/motorbase.JPG',
      services: ['Machine Shop']
    },
    {
      title: 'Water Treatment Facility Upgrade',
      description: 'Major upgrade of pump systems and valve networks in a municipal water treatment plant. The project included installation of new replacement parts and comprehensive testing of all systems.',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      services: ['Pump Repair', 'Valve Repair', 'Replacement Parts']
    },
    {
      title: 'Industrial Complex System',
      description: 'Provide support through industrial outages, including emergency machine work and on-site support to minimize downtime and improve efficiency.',
      image: './public/BladeMachining.jpg',
      services: ['Power Generation', 'Change Out and Alignment', 'Valve Repair', 'Compressor Repair']
    }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1>Recent Projects</h1>
          <p>Explore our latest industrial solutions and success stories</p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-services">
                  <h4>Services Provided:</h4>
                  <div className="service-tags">
                    {project.services.map((service, idx) => (
                      <span key={idx} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;