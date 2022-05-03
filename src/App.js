import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [yAxis, setYAxis] = useState(window.scrollY);
  const aboutRef = useRef();
  const technologiesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleSetYAxis = () => setYAxis(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleSetYAxis);

    return () => window.removeEventListener("scroll", handleSetYAxis);
  }, [])

  return (
    <div className="App">
      <nav className={`${yAxis > 0 && "nav-offset"}`}>
        <i
          className={`${showNav ? "fas fa-times" : "fas fa-bars"}`}
          onClick={() => setShowNav(!showNav)}
        />
        <ul className={`${showNav && "nav-show"} ${yAxis > 0 && "ul-offset"}`}>
          <li
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            onClick={() =>
              technologiesRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </li>
          <li
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
          <li
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </li>
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
