import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import quickSchedulesMockup from "../images/mockup-quick-schedules.png";
import monchMockup from "../images/mockup-monch.png";
import cryptoNetMockup from "../images/mockup-cryptonet-ipad-iphone.png";
import reactLogo from "../images/full-logo-react.png";
import reactTransitionGroupLogo from "../images/full-logo-react-transition-group.png";
import nodeLogo from "../images/full-logo-node.png";
import expressLogo from "../images/full-logo-express.png";
import postgresLogo from "../images/full-logo-postgresql.png";
import firebaseLogo from "../images/full-logo-firebase.png";
import chartLogo from "../images/full-logo-chartjs.png";
import antdLogo from "../images/full-logo-antdesign.png";

export const Projects = () => {
  const [yAxis, setYAxis] = useState(window.scrollY);
  const [showSectionOne, setShowSectionOne] = useState(false);
  const [showSectionTwo, setShowSectionTwo] = useState(false);
  const [showSectionThree, setShowSectionThree] = useState(false);
  const [info, setInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleSetInfo = () => {
    setInfo(true);
    setShowModal(true);
  };

  const QuickSchedules = () => (
    <div className="project-section grid bg-white">
      <div className="project-info s12 m5-offset-1 l4-offset-2">
        <>
          <p className="text-subtitle">Quick Schedules</p>
          <p>
            Employee management system with exclusive administrative and
            standard privileges.
          </p>
        </>
        <div className="tech-logos">
          <img src={reactLogo} alt="react logo" />
          <img src={nodeLogo} alt="node logo" />
          <img src={expressLogo} alt="express logo" />
          <img src={postgresLogo} alt="postgres logo" />
        </div>
        <div className="project-actions">
          <span>
            <button disabled>Website</button>
            &nbsp;
            <i
              className="fas fa-question-circle text-regular pointer"
              onClick={handleSetInfo}
            />
          </span>
          <a
            href="https://github.com/john-chang94/quick-schedules"
            target="_blank"
            rel="noreferrer"
          >
            <button className="pointer hovered">Github</button>
          </a>
          <button className="pointer hovered">
            <i className="fas fa-play-circle" /> Demo
          </button>
        </div>
      </div>
      <div className="s12 m5-offset-7 l5-offset-6">
        <img
          src={quickSchedulesMockup}
          className="project-img qs-mockup"
          alt="project quick schedules mockup"
        />
      </div>
    </div>
  );

  const Monch = () => (
    <div className="project-section grid bg-white">
      <div className="project-info s12 m5-offset-1 l4-offset-2">
        <div>
          <p className="text-subtitle">Monch!</p>
          <p>Search for restaurants, read reviews, and submit your own!</p>
        </div>
        <div className="tech-logos">
          <img src={reactLogo} alt="react logo" />
          <img src={firebaseLogo} alt="firebase logo" />
          <img
            src={reactTransitionGroupLogo}
            alt="react transition group logo"
          />
        </div>
        <div className="project-actions">
          <a
            href="https://monch-8142.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="pointer hovered">Website</button>
          </a>
          <a
            href="https://github.com/john-chang94/monch"
            target="_blank"
            rel="noreferrer"
          >
            <button className="pointer hovered">Github</button>
          </a>
          <button className="pointer hovered">
            <i className="fas fa-play-circle" /> Demo
          </button>
        </div>
      </div>
      <div className="s12 m5-offset-7 l5-offset-6">
        <img
          src={monchMockup}
          className="project-img monch-mockup"
          alt="project monch mockup"
        />
      </div>
    </div>
  );

  const CryptoNet = () => (
    <div className="project-section grid bg-white">
      <div className="project-info s12 m5-offset-1 l4-offset-2">
        <>
          <p className="text-subtitle">CryptoNet</p>
          <p>
            Cryptocurrency price tracker. View global market capitalization,
            trading volume, and more. Utilized Coinranking API and Livecoinwatch
            API.
          </p>
        </>
        <div className="tech-logos">
          <img src={reactLogo} alt="react logo" />
          <img src={antdLogo} alt="ant design logo" />
          <img src={chartLogo} alt="chart js logo" />
        </div>
        <div className="project-actions">
          <a
            href="https://cryptonet-367.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="pointer hovered">Website</button>
          </a>
          <a
            href="https://github.com/john-chang94/cryptonet"
            target="_blank"
            rel="noreferrer"
          >
            <button className="pointer hovered">Github</button>
          </a>
          <button className="pointer hovered">
            <i className="fas fa-play-circle" /> Demo
          </button>
        </div>
      </div>
      <div className="s12 m5-offset-7 l5-offset-6 text-center">
        <img
          src={cryptoNetMockup}
          className="project-img cryptonet-mockup"
          alt="project cryptonet mockup"
        />
      </div>
    </div>
  );

  const Modal = () => (
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="modal-fade"
      unmountOnExit
      nodeRef={modalRef}
    >
      <div ref={modalRef}>
        <div
          className="modal-container"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="modal">
          <div onClick={() => setShowModal(false)}>
            <i className="fas fa-times" />
          </div>
          {info ? (
            <div>
              <p>
                Due to the nature of how this app is built (requiring
                credentials), only the sign-in page is available for viewing.
                If you are interested in exploring this application,
                feel free to shoot me a message or take a peek at the demo
                video!
              </p>
            </div>
          ) : (
            <div className="video">
              <p>data loaded</p>
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
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
      {
        // CSS transition needs to render like a function
        Modal()
      }
      <p className="text-regular text-center">Personal Projects</p>
      <QuickSchedules />
      <Monch />
      <CryptoNet />
    </section>
  );
};
