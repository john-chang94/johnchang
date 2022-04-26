import React, { useState } from "react";
import quickSchedulesGif from "../images/coffee-logo.jpg";

export const Projects = () => {
  return (
    <section id="projects">
      <p className="text-title text-center">Personal Projects</p>
      <div className="project-section grid">
        <div className="l2-offset-3">
          <p className="text-subtitle">Quick Schedules</p>
          <p className="text-regular">
            An employee management system with exclusive administrative and
            employee privileges.
          </p>
        </div>
        <div className="l3-offset-6">
          <img
            src={quickSchedulesGif}
            className="project-img"
            alt="project gif"
          />
        </div>
      </div>
      <div className="project-section grid">
        <div className="l2-offset-3">
          <p className="text-subtitle">Monch!</p>
          <p className="text-regular">
            An employee management system with exclusive administrative and
            employee privileges.
          </p>
        </div>
        <div className="l3-offset-6">
          <img
            src={quickSchedulesGif}
            className="project-img"
            alt="project gif"
          />
        </div>
      </div>
      <div className="project-section grid">
        <div className="l2-offset-3">
          <p className="text-subtitle">CryptoNet</p>
          <p className="text-regular">
            An employee management system with exclusive administrative and
            employee privileges.
          </p>
        </div>
        <div className="l3-offset-6">
          <img
            src={quickSchedulesGif}
            className="project-img"
            alt="project gif"
          />
        </div>
      </div>
    </section>
  );
};
