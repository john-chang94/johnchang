import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import quickSchedulesMockup from "../images/mockup-quick-schedules.png";
import monchMockup from "../images/mockup-monch.png";
import monchMockupTablet from "../images/mockup-monch-ipad.png";
import cryptoNetMockup from "../images/mockup-cryptonet.png";
import reactLogo from "../images/full-logo-react.png";
import nodeLogo from "../images/full-logo-node.png";
import expressLogo from "../images/full-logo-express.png";
import postgresLogo from "../images/full-logo-postgresql.png";
import firebaseLogo from "../images/full-logo-firebase.png";
import chartLogo from "../images/full-logo-chartjs.png";
import antdSimpleLogo from "../images/logo-antdesign.png";
import reactSimpleLogo from "../images/logo-react.png";

export const Projects = () => {
  const [yAxis, setYAxis] = useState(window.scrollY);
  const [showSectionOne, setShowSectionOne] = useState(false);
  const [showSectionTwo, setShowSectionTwo] = useState(false);
  const [showSectionThree, setShowSectionThree] = useState(false);

  const QuickSchedules = () => (
    <div className="project-section grid bg-white">
      <div className="project-info l4-offset-2">
        <p className="text-subtitle">Quick Schedules</p>
        <p className="text-regular">
          Employee management system with exclusive administrative and employee
          privileges.
        </p>
        <div className="tech-logos">
          <img src={reactLogo} alt="react logo" />
          <img src={nodeLogo} alt="node logo" />
          <img src={expressLogo} alt="express logo" />
          <img src={postgresLogo} alt="postgres logo" />
        </div>
        <div className="project-actions">
          <button disabled>Live site</button>
          <button className="pointer hovered">Github</button>
        </div>
      </div>
      <div className="l5-offset-6">
        <img
          src={quickSchedulesMockup}
          className="project-img"
          alt="project quick schedules mockup"
        />
      </div>
    </div>
  );

  const Monch = () => (
    <div className="project-section grid bg-white">
      <div className="l5-offset-2">
        <img
          src={monchMockupTablet}
          className="project-img project-two-mockup"
          alt="project monch mockup"
        />
      </div>
      <div className="project-info l4-offset-7">
        <p className="text-subtitle">Monch!</p>
        <p className="text-regular">
          Search for restaurants, read reviews, and submit your own!
        </p>
        <div className="tech-logos">
          <img src={reactLogo} alt="react logo" />
          <img src={firebaseLogo} alt="firebase logo" />
          <span>
            <img src={reactSimpleLogo} alt="react simple logo" />
            <p>
              <strong>&nbsp;React Transition Group</strong>
            </p>
          </span>
        </div>
        <div className="project-actions">
          <button className="pointer hovered">Live site</button>
          <button className="pointer hovered">Github</button>
        </div>
      </div>
    </div>
  );

  const CryptoNet = () => (
    <div className="project-section grid bg-white">
      <div className="project-info l4-offset-2">
        <p className="text-subtitle">CryptoNet</p>
        <p className="text-regular">
          Cryptocurrency price tracker. View global market capitalization,
          trading volume, and more. Utilized Coinranking API and Livecoinwatch
          API.
        </p>
        <div className="tech-logos">
          <img src={reactLogo} alt="react logo" />
          <span>
            <img src={antdSimpleLogo} alt="ant design simple logo" />
            <p>
              <strong>&nbsp;ANT DESIGN</strong>
            </p>
          </span>
          <img src={chartLogo} alt="chart js logo" />
        </div>
        <div className="project-actions">
          <button className="pointer hovered">Live site</button>
          <button className="pointer hovered">Github</button>
        </div>
      </div>
      <div className="l5-offset-6">
        <img
          src={cryptoNetMockup}
          className="project-img"
          alt="project cryptonet mockup"
        />
      </div>
    </div>
  );

  // const handleSetYAxis = () => {
  //   setYAxis(window.scrollY);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleSetYAxis);

  //   return () => window.removeEventListener("scroll", handleSetYAxis);
  // }, [])

  // useEffect(() => {
  //   console.log(yAxis)
  // }, [yAxis])

  return (
    <section id="projects" className="bg-white">
      <p className="text-regular text-center">Personal Projects</p>
      <QuickSchedules />
      <Monch />
      <CryptoNet />
    </section>
  );
};
