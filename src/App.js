import "./App.css";
import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
