import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Machine Shop',
      description: 'Precision machining services for industrial components and equipment.',
      icon: '⚙️'
    },
    {
      title: 'Valve Repair',
      description: 'Expert repair and maintenance of industrial valves and control systems.',
      icon: '🔧'
    },
    {
      title: 'Field Machining',
      description: 'On-site machining services for large equipment and industrial machinery.',
      icon: '🏭'
    },
    {
      title: 'Change Out and Alignment',
      description: 'Professional equipment replacement and precision alignment services.',
      icon: '📏'
    },
    {
      title: 'Power Generation',
      description: 'Maintenance and repair services for power generation equipment.',
      icon: '⚡'
    },
    {
      title: 'Compressor Repair',
      description: 'Specialized repair and maintenance of industrial compressors.',
      icon: '💨'
    },
    {
      title: 'Gear Box Repair',
      description: 'Expert repair and rebuilding of industrial gearboxes.',
      icon: '⚙️'
    },
    {
      title: 'Pump Repair',
      description: 'Comprehensive pump repair and maintenance services.',
      icon: '💧'
    },
    {
      title: 'Replacement Parts',
      description: 'High-quality replacement parts for industrial equipment.',
      icon: '🔩'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive industrial solutions for your maintenance and repair needs</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;