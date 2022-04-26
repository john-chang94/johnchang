import React, { useState } from "react";
import quickSchedulesMockup from "../images/mockup-quick-schedules.png";
import monchMockup from "../images/mockup-monch.png";
import cryptoNetMockup from "../images/mockup-cryptonet.png";

export const Projects = () => {
  return (
    <section id="projects">
      <p className="text-title text-center">Personal Projects</p>
      <div className="project-section grid">
        <div className="project-info l4-offset-2">
          <p className="text-subtitle">Quick Schedules</p>
          <p className="text-regular">
            Employee management system with exclusive administrative and
            employee privileges.
          </p>
        </div>
        <div className="l5-offset-6">
          <img
            src={quickSchedulesMockup}
            className="project-img"
            alt="project gif"
          />
        </div>
      </div>
      <div className="project-section grid">
        <div className="project-info l4-offset-2">
          <p className="text-subtitle">Monch!</p>
          <p className="text-regular">
            Simple, easy-to-use, food review web application.
          </p>
        </div>
        <div className="l5-offset-6">
          <img src={monchMockup} className="project-img" alt="project gif" />
        </div>
      </div>
      <div className="project-section grid">
        <div className="project-info l4-offset-2">
          <p className="text-subtitle">CryptoNet</p>
          <p className="text-regular">
            Cryptocurrency price tracker. View global market capitalization,
            trading volume, and more.
          </p>
        </div>
        <div className="l5-offset-6">
          <img
            src={cryptoNetMockup}
            className="project-img"
            alt="project gif"
          />
        </div>
      </div>
    </section>
  );
};
