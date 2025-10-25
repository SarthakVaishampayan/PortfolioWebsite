// src/components/Services/Services.jsx
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Full Stack Development",
      description: "Building scalable web applications using React, Node.js, and modern frameworks. Experience with both frontend and backend development."
    },
    {
      id: 2,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with Figma. Focus on user-centric design and seamless experiences."
    },
    {
      id: 3,
      icon: "📊",
      title: "Data Analytics",
      description: "Leveraging Power BI and Excel for data visualization and business intelligence. Transforming complex data into actionable insights."
    },
    {
      id: 4,
      icon: "🗄️",
      title: "Database Management",
      description: "Designing and optimizing relational databases with MySQL and MongoDB. Expertise in data modeling and query optimization."
    },
    {
      id: 5,
      icon: "⚙️",
      title: "System Optimization",
      description: "Improving system performance and workflow efficiency. Experience in resource allocation and process automation."
    },
    {
      id: 6,
      icon: "🔒",
      title: "Security Implementation",
      description: "Implementing role-based access control and security standards. Ensuring data protection and compliance with organizational requirements."
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services I Offer</h2>
        <p className="services-subtitle">
          Leveraging technical expertise to deliver comprehensive solutions
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
