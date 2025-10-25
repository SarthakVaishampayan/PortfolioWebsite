// src/components/Hero/Hero.jsx
import './Hero.css'
import heroPhoto from '../../assets/images/hero-photo.png'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="hero-title">
            I'M A <span className="highlight">FULL STACK</span>
            <br />
            <span className="outline">DEVELOPER</span>
          </h1>

          {/* Your Photo */}
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={heroPhoto} alt="Sarthak Vaishampayan" />
            </div>
          </div>

          {/* Orange Geometric Shape */}
          <div className="orange-shape"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
