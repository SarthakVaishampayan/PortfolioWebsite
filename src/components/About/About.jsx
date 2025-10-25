// src/components/About/About.jsx
import './About.css'
import aboutPhoto from '../../assets/images/about-photo.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Side - Text Content */}
          <div className="about-text">
            <p className="about-greeting">HELLO</p>
            <h2 className="about-title">
              I'M <span className="highlight">SARTHAK VAISHAMPAYAN</span>
            </h2>
            <p className="about-description">
              Computer Science Engineering student at Manipal University Jaipur with a passion 
              for building scalable web applications and optimizing user experiences. Former intern 
              at DRDO where I redesigned employee management platforms for 5,000+ users and improved 
              page load times by 50%. Experienced in full-stack development, UI/UX design, and 
              database management with a proven track record of delivering impactful solutions.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <h3 className="stat-number">2+</h3>
                  <p className="stat-label">Internship Experience</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <h3 className="stat-number">5+</h3>
                  <p className="stat-label">Completed Projects</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <h3 className="stat-number">15K+</h3>
                  <p className="stat-label">Users Impacted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="about-image">
            <div className="image-container">
              <img src={aboutPhoto} alt="Sarthak Vaishampayan" />
              
              {/* Decorative Elements */}
              <div className="decorative-lines">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
