import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply the theme to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <nav>
        <div className="logo">Vamshi</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/qualifications">Qualifications</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
              <i
                className={`fa-regular ${
                  darkMode ? "fa-lightbulb" : "fa-moon"
                }`}
                id="theme-icon"
              ></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
