import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";
import Sections from "./components/Sections";
import { OneBook } from "./components/OneBook";
import { OpenDev } from "./components/OpenDev";
import { OpenScheme } from "./components/OpenScheme";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

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
    <Router>
      <div className="App">
        <nav>
          <i
            className={`${showNav ? "fas fa-times" : "fas fa-bars"}`}
            onClick={() => setShowNav(!showNav)}
          />
          <ul className={`${showNav && "nav-show"}`}>
            <li onClick={() => handleNavClick(aboutRef)}>About</li>
            <li onClick={() => handleNavClick(technologiesRef)}>
              Technologies
            </li>
            <li onClick={() => handleNavClick(projectsRef)}>Projects</li>
            <li onClick={() => handleNavClick(contactRef)}>Contact</li>
          </ul>
        </nav>
        {/* <About aboutRef={aboutRef} />
        <Technologies technologiesRef={technologiesRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} /> */}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Sections
              aboutRef={aboutRef}
              technologiesRef={technologiesRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
          }
        />
        <Route path="/pros" element={<OneBook />} />
        <Route path="/ProDetails" element={<OpenDev />} />
        <Route path="/ProDetails" element={<OpenScheme />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Link to="/pros">OB</Link>
    </Router>
  );
}

export default App;
