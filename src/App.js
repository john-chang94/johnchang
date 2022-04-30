import "./App.css";
import React, { useRef } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";

function App() {
  const aboutRef = useRef();
  const technologiesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}>About</li>
          <li onClick={() => technologiesRef.current.scrollIntoView({ behavior: "smooth" })}>Technologies</li>
          <li onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth" })}>Projects</li>
          <li onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>Contact</li>
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
