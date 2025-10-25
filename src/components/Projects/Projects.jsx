// src/components/Projects/Projects.jsx
import './Projects.css'

function Projects() {
  // Your actual projects from CV with placeholder images
  const projects = [
    {
      id: 1,
      // Using a placeholder - replace with your actual image when ready
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      category: "Full Stack Development",
      title: "DRDO Employee Management System",
      description: "Architected and implemented advanced role-based access control and employee profile management features for 5,000+ users. Collaborated with 10+ senior DRDO scientists to ensure compliance with organizational security standards.",
      tags: ["HTML5", "CSS", "Bootstrap", "Figma"],
      achievements: ["5,000+ Users", "Role-Based Access", "Security Compliance"]
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      category: "Full Stack Development",
      title: "Inventory Management Interface",
      description: "Developed an adaptive customer-facing interface with affordability-based recommendation system, increasing engagement by 15%. Enhanced order management with separate flows for corporate and individual customers.",
      tags: ["React.js", "JavaScript", "Bootstrap", "Figma"],
      achievements: ["15% Engagement ↑", "20% Error Reduction", "Dual Customer Flows"]
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      category: "System Optimization",
      title: "Resource Allocation System - GHS",
      description: "Designed and engineered a resource allocation system streamlining workflows across departments at Good Host Spaces, improving task completion rates by 40% and saving 100+ team hours annually.",
      tags: ["Database Management", "Excel", "Optimization"],
      achievements: ["40% Efficiency ↑", "100+ Hours Saved", "50+ Datasets"]
    }
  ]

  // Smooth scroll to contact section
  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      const offset = 80
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x500/FF8C00/FFFFFF?text=Project+Image'
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Achievements */}
                <div className="project-achievements">
                  {project.achievements.map((achievement, index) => (
                    <span key={index} className="achievement">✓ {achievement}</span>
                  ))}
                </div>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Learn More Button - Links to Contact */}
                <a href="#contact" className="project-link" onClick={scrollToContact}>
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
