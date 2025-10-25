// src/components/Skills/Skills.jsx
import './Skills.css'

function Skills() {
  const skillCategories = {
    "Languages": [
      "C",
      "C++",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQL"
    ],
    "Frameworks & Libraries": [
      "React.js",
      "Node.js",
      "Express.js",
      "Bootstrap"
    ],
    "Tools & Software": [
      "Git/GitHub",
      "Microsoft Power BI",
      "MySQL Workbench",
      "MS Excel",
      "Figma",
      "VS Code",
      "MongoDB Compass"
    ],
    "Core Competencies": [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Object Oriented Programming",
      "Relational Databases",
      "Web Development",
      "Computer Networks",
      "Software Engineering"
    ]
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-dot">●</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
