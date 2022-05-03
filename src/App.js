import "./App.css";
import React, { useRef, useState } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";

function App() {
  const [showNav, setShowNav] = useState(false);
  const aboutRef = useRef();
  const technologiesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setShowNav(false);
  };

  return (
    <div className="App">
      <nav>
        <i
          className={`${showNav ? "fas fa-times" : "fas fa-bars"}`}
          onClick={() => setShowNav(!showNav)}
        />
        <ul className={`${showNav && "nav-show"}`}>
          <li onClick={() => handleNavClick(aboutRef)}>About</li>
          <li onClick={() => handleNavClick(technologiesRef)}>Technologies</li>
          <li onClick={() => handleNavClick(projectsRef)}>Projects</li>
          <li onClick={() => handleNavClick(contactRef)}>Contact</li>
        </ul>
      </nav>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={technologiesRef}>
        <Technologies />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
