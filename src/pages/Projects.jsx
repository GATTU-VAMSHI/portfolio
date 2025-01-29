import  { useState } from 'react';
import courseImg from '../assets/course.png'
import capStone from '../assets/capstone.png'

const Projects = () => {
  // State to track the index of the current active project
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of projects (can be expanded with more projects)
  const projects = [
    {
      id: 'project1',
      image: courseImg,
      title: 'ONLINE COURSE PLATFORM',
      description: 'Developed a comprehensive online course platform using Django. The platform provides a seamless user experience for both instructors and students.',
      link: '#',
    },
    {
      id: 'project2',
      image: capStone,
      title: 'FULL STACK CAPSTONE',
      description: 'This project is a comprehensive full-stack web application designed to demonstrate end-to-end development skills. It showcases the ability to build dynamic and responsive web platforms by integrating front-end, back-end, and database technologies.',
      link: 'https://github.com/GATTU-VAMSHI/xrwvm-fullstack_developer_capstone',
    },
    // Add more projects here
  ];

  // Function to handle the previous project navigation
  const showPrevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Function to handle the next project navigation
  const showNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div>
      <h1 className="heading">Projects</h1>
      <main id="home">
        <div className="carousel">
          <button className="arrow prev" onClick={showPrevProject}>
            &#8592;
          </button>
          <div className="carousel-content">
            {projects.map((project, index) => (
              <div
                className={`project ${index === currentIndex ? 'active' : ''}`}
                key={project.id}
              >
                <div className="project-content">
                  <img src={project.image} alt={`Project ${index + 1}`} />
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                      Check out
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="arrow next" onClick={showNextProject}>
            &#8594;
          </button>
        </div>
      </main>
    </div>
  );
};

export default Projects;
