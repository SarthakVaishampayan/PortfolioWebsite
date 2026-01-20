// src/components/Navbar/Navbar.jsx
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          <span className="logo-icon">◉</span>
          <span className="logo-text">Sarthak V.</span>
        </a>

        {/* Menu Items */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              ABOUT ME
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={closeMenu}>
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              PROJECT
            </a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link" onClick={closeMenu}>
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
        </ul>

        {/* Download CV Button */}
      <a href="/Sarthak_Vaishampayan.docx" download="Sarthak_Vaishampayan_CV" className="btn btn-primary nav-cta">
  DOWNLOAD CV
</a>



        {/* Mobile Hamburger */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
