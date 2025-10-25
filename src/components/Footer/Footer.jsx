// src/components/Footer/Footer.jsx
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left - Branding */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-icon">◉</span> Sarthak Vaishampayan
            </h3>
            <p className="footer-tagline">
              Building scalable solutions and crafting exceptional user experiences.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right - Social */}
          <div className="footer-social">
            <h4 className="footer-title">Connect</h4>
            <div className="social-icons">
              <a href="https://linkedin.com/in/Sarthak-Vaishampayan" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/SarthakVaishampayan" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="mailto:sarthakvaishampayan22@gmail.com">
                Email
              </a>
              <a href="https://instagram.com/_sxrthxkk_">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sarthak Vaishampayan. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
