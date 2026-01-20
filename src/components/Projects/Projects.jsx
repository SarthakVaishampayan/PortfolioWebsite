// src/components/Projects/Projects.jsx
import './Projects.css'

function Projects() {
  const projects = [
     {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
      category: 'Real-time Systems',
      title: 'BookYourGame – Real-Time Console Booking System',
      description:
        'Built a cloud-enabled platform for real-time console availability and slot-based bookings, reducing manual coordination and improving user experience. Designed separate owner and user dashboards with live updates, console mapping, and automated booking flow, implementing responsive UI using React, Node.js, and Express to improve booking efficiency and resource utilization for gaming centers.',
      tags: ['React.js', 'Node.js', 'Express.js', 'Responsive UI'],
      achievements: ['Real-time Availability', 'Owner & User Dashboards', 'Improved Utilization'],
      liveUrl: 'https://bookyourgame.vercel.app/'
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=500&fit=crop',
      category: 'Real-time Collaboration',
      title: 'Scribbl – Collaborative Canvas',
      description:
        'Engineered a real-time collaborative drawing platform with dynamic user syncing and intuitive tool palettes, boosting team productivity by 25% during live sessions. Streamlined multi-user interactions by implementing canvas state management and conflict resolution, cutting lag issues by 30% and enabling seamless remote collaboration, using React.js, Socket.io, HTML5 Canvas, CSS3, Figma, and JavaScript.',
      tags: ['React.js', 'Socket.io', 'HTML5 Canvas', 'CSS3', 'Figma', 'JavaScript'],
      achievements: ['25% Productivity ↑', '30% Lag Reduction', 'Seamless Remote Collaboration'],
      liveUrl: 'https://scribbl-pearl.vercel.app/'
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      category: 'Full Stack Development',
      title: 'DRDO Employee Management System',
      description:
        'Architected and developed advanced role-based access control and employee profile management features, strengthening security and usability for 5,000+ users. Collaborated with 10+ senior DRDO scientists to align the application with strict organizational and security standards, ensuring compliance, using HTML5, CSS, Bootstrap, and Figma.',
      tags: ['HTML5', 'CSS', 'Bootstrap', 'Figma'],
      achievements: ['5,000+ Users', 'Role-Based Access', 'Security Compliance']
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      category: 'Full Stack Development',
      title: 'Inventory Management Interface',
      description:
        'Developed an adaptive customer-facing interface with affordability-based recommendation system, increasing engagement by 15%. Enhanced order management with separate flows for corporate and individual customers.',
      tags: ['React.js', 'JavaScript', 'Bootstrap', 'Figma'],
      achievements: ['15% Engagement ↑', '20% Error Reduction', 'Dual Customer Flows']
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      category: 'System Optimization',
      title: 'Resource Allocation System - GHS',
      description:
        'Designed and engineered a resource allocation system at Good Host Spaces, streamlining workflows across departments, improving task completion rates by 40%, and saving 100+ team hours annually. Optimized strategic decision-making by organizing and refining 50+ critical datasets with improved accuracy and reliability.',
      tags: ['Database Management', 'Excel', 'Optimization'],
      achievements: ['40% Efficiency ↑', '100+ Hours Saved', '50+ Datasets']
    }
   
  ]

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
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/800x500/FF8C00/FFFFFF?text=Project+Image'
                  }}
                />
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-achievements">
                  {project.achievements.map((achievement, index) => (
                    <span key={index} className="achievement">
                      ✓ {achievement}
                    </span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* New action section */}
                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Project ↗
                    </a>
                  )}

                  <a
                    href="#contact"
                    className="project-link secondary"
                    onClick={scrollToContact}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
