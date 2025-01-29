import { useState } from 'react';

const Skills = () => {
  // State to track the visibility of each section
  const [languagesVisible, setLanguagesVisible] = useState(false);
  const [frameworksVisible, setFrameworksVisible] = useState(false);
  const [toolsVisible, setToolsVisible] = useState(false);

  // Function to toggle visibility of each section
  const toggleSection = (section) => {
    if (section === 'languages') setLanguagesVisible(!languagesVisible);
    if (section === 'frameworks') setFrameworksVisible(!frameworksVisible);
    if (section === 'tools') setToolsVisible(!toolsVisible);
  };

  return (
    <div>
      <h1 className="heading">Skills</h1>
      <section className="skills">
        {/* Languages Section */}
        <div className="skill-section">
          <div className="skill-header" onClick={() => toggleSection('languages')}>
            <h2>Languages<p>Languages that I have picked up over the years</p></h2>
            <i className={`fa-solid fa-angles-down expand ${languagesVisible ? 'active' : ''}`}></i>
          </div>
          {languagesVisible && (
            <div className="skill-content">
              <h4>Front-end</h4>
              <p><i className="fa-brands fa-html5 icn"></i> HTML</p>
              <p><i className="fa-brands fa-css3-alt icn"></i> CSS</p>
              <p><i className="fa-brands fa-js icn"></i> JavaScript</p>
              <h4>Back-end</h4>
              <p><i className="fa-brands fa-python icn"></i> Python</p>
              <p><i className="fa-brands fa-node icn"></i> Node.js</p>
            </div>
          )}
        </div>

        {/* Frameworks Section */}
        <div className="skill-section">
          <div className="skill-header" onClick={() => toggleSection('frameworks')}>
            <h2><i className="uil uil-brackets-curly"></i> Libraries & Frameworks<p>Libraries and Frameworks that I prefer to work with</p></h2>
            <i className={`fa-solid fa-angles-down expand ${frameworksVisible ? 'active' : ''}`}></i>
          </div>
          {frameworksVisible && (
            <div className="skill-content">
              <p><i className="fa-brands fa-react icn"></i> React.js</p>
              <p><i className="fa-solid fa-pepper-hot icn"></i> Flask</p>
              <p><i className="fa-brands fa-python icn"></i> Django</p>
              <p><i className="fa-brands fa-bootstrap icn"></i> Bootstrap</p>
              <p><i className="fa-solid fa-leaf icn"></i> MongoDB</p>
              <p><i className="fa-brands fa-node-js icn"></i> Express JS</p>
            </div>
          )}
        </div>

        {/* Tools Section */}
        <div className="skill-section">
          <div className="skill-header" onClick={() => toggleSection('tools')}>
            <h2>Tools<p>Tools that I know and use on a daily basis</p></h2>
            <i className={`fa-solid fa-angles-down expand ${toolsVisible ? 'active' : ''}`}></i>
          </div>
          {toolsVisible && (
            <div className="skill-content">
              <p><i className="fa-brands fa-git-alt icn"></i> Git</p>
              <p><i className="fa-brands fa-github icn"></i> GitHub</p>
              <p><i className="fa-brands fa-figma icn"></i> Figma</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Skills;
