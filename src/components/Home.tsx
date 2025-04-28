import './Home.css';

const Home = () => {
  const recentProjects = [
    {
      title: 'Industrial Automation System',
      description: 'State-of-the-art automation solution implemented for a leading manufacturing facility, increasing production efficiency by 40%.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Factory Modernization',
      description: 'Complete factory modernization project including equipment upgrades, process optimization, and worker training.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Sustainable Energy Solutions',
      description: 'Implementation of renewable energy systems and energy-efficient processes in industrial settings.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112f8f1f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Industrial Excellence Through Innovation</h1>
          <p>Delivering cutting-edge solutions for modern industrial challenges</p>
        </div>
      </section>

      <section className="recent-work">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {recentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;