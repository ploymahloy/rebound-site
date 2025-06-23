import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Machine Shop',
      description: 'Precision machining services for industrial components and equipment. With the ability to turn up to 72" OD, our state-of-the-art facility handles everything from routine maintenance to complex custom parts manufacturing.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Field Machining',
      description: 'On-site machining services for large equipment and structures. Our mobile units bring precision machining capabilities directly to your facility, minimizing downtime and transportation costs.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Compressor Repair',
      description: 'Expert repair and maintenance services for industrial compressors. We handle all types of compressors, from small units to large industrial systems, ensuring optimal performance and efficiency.',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Pump Repair',
      description: 'Comprehensive pump repair and maintenance services. Our team specializes in diagnosing and fixing issues with all types of industrial pumps, from centrifugal to positive displacement pumps.',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Valve Repair',
      description: 'Specialized valve repair and maintenance services. We handle all types of industrial valves, ensuring proper operation and preventing costly downtime.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Gear Box Repair',
      description: 'Expert gearbox repair and maintenance services. Our team has extensive experience working with all types of industrial gearboxes, from small units to large, complex systems.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Change Out and Alignment',
      description: 'Professional equipment change-out and alignment services. We ensure precise installation and alignment of new equipment, maximizing performance and longevity.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Replacement Parts',
      description: 'High-quality replacement parts for industrial equipment. We source and provide genuine parts that meet or exceed OEM specifications, ensuring reliable performance.',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      title: 'Power Generation',
      description: 'Comprehensive power generation solutions and maintenance services. We work with all types of power generation equipment, ensuring reliable and efficient operation.',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive industrial solutions for your business needs</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;