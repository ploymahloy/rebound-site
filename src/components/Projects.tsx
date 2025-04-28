import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Industrial Plant Modernization',
      description: 'Comprehensive modernization of a manufacturing facility, including machine shop upgrades, valve system overhauls, and alignment of critical equipment. This project improved production efficiency by 35% and reduced maintenance downtime by 40%.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      services: ['Machine Shop', 'Valve Repair', 'Change Out and Alignment']
    },
    {
      title: 'Power Plant Compressor Overhaul',
      description: 'Complete overhaul of critical compressor systems in a power generation facility. Our team performed field machining, gearbox repairs, and implemented new control systems to restore optimal performance.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      services: ['Field Machining', 'Compressor Repair', 'Gear Box Repair']
    },
    {
      title: 'Water Treatment Facility Upgrade',
      description: 'Major upgrade of pump systems and valve networks in a municipal water treatment plant. The project included installation of new replacement parts and comprehensive testing of all systems.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      services: ['Pump Repair', 'Valve Repair', 'Replacement Parts']
    },
    {
      title: 'Industrial Complex Power System',
      description: 'Implementation of a new power generation system for an industrial complex, including installation, alignment, and commissioning of all components. The project resulted in a 25% reduction in energy costs.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      services: ['Power Generation', 'Change Out and Alignment']
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