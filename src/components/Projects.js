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
import reactQueryLogo from "../images/full-logo-react-query.png";
import ReactPlayer from "react-player";

export const Projects = ({ projectsRef }) => {
  const [yAxis, setYAxis] = useState(window.scrollY);
  const [wHeight, setWHeight] = useState(window.innerHeight);
  const [showProjectOne, setShowProjectOne] = useState(false);
  const [showProjectTwo, setShowProjectTwo] = useState(false);
  const [showProjectThree, setShowProjectThree] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState();
  const modalRef = useRef();
  const projectOneRef = useRef();
  const projectTwoRef = useRef();
  const projectThreeRef = useRef();

  const QuickSchedules = () => (
    <div className="project-section bg-white" ref={projectsRef}>
      {video === 1 && Modal()}
      <div
        className={`grid project-one ${showProjectOne && "project-one-open"}`}
        ref={projectOneRef}
      >
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
            <a
              href="https://github.com/john-chang94/quick-schedules"
              target="_blank"
              rel="noreferrer"
            >
              <button className="pointer hovered">Github</button>
            </a>
            <button
              className="pointer hovered"
              onClick={() =>
                handleShowModal(true, 1, "https://youtu.be/ZFu_kXCAAVI")
              }
            >
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
    </div>
  );

  const Monch = () => (
    <div className="project-section bg-white">
      {video === 2 && Modal()}
      <div
        className={`grid project-two ${showProjectTwo && "project-one-open"}`}
        ref={projectTwoRef}
      >
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
            <button
              className="pointer hovered"
              onClick={() =>
                handleShowModal(false, 2, "https://youtu.be/MU5CRHsBVUA")
              }
            >
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
    </div>
  );

  const CryptoNet = () => (
    <div className="project-section bg-white">
      {video === 3 && Modal()}
      <div
        className={`grid project-three ${
          showProjectThree && "project-three-open"
        }`}
        ref={projectThreeRef}
      >
        <div className="project-info s12 m5-offset-1 l4-offset-2">
          <>
            <p className="text-subtitle">CryptoNet</p>
            <p>
              Cryptocurrency price tracker. View global market capitalization,
              trading volume, and more. Utilized Live Coin Watch API and
              NewsCatcher API.
            </p>
          </>
          <div className="tech-logos">
            <img src={reactLogo} alt="react logo" />
            <img src={antdLogo} alt="ant design logo" />
            <img src={chartLogo} alt="chart js logo" />
            <img src={reactQueryLogo} alt="react query logo" />
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
            <button
              className="pointer hovered"
              onClick={() =>
                handleShowModal(false, 3, "https://youtu.be/oJGa4jXiwGo")
              }
            >
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
          <div>
            <ReactPlayer url={url} width="100%" controls={true} />
            <br />
            {isInfo && (
              <p>
                <strong>Note!</strong> After several retakes of the
                recording, I came to realize that trying to showcase all of the
                features would take quite some time as there are two separate
                portals to navigate through with their own little details.
                Therefore, I'll go over the main features as swiftly as I can!
                <br />
              </p>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );

  // Set info for modal
  const handleShowModal = (isInfo, video, url) => {
    setIsInfo(isInfo);
    setUrl(url);
    setVideo(video);
    setShowModal(true);
  };

  const handleSetYAxis = () => setYAxis(window.scrollY);
  const handleSetHeight = () => setWHeight(window.innerHeight);

  // Set scrollY and window height to keep track for project fade in
  useEffect(() => {
    window.addEventListener("scroll", handleSetYAxis);
    window.addEventListener("resize", handleSetHeight);

    return () => {
      window.removeEventListener("scroll", handleSetYAxis);
      window.removeEventListener("resize", handleSetHeight);
    };
  }, []);

  useEffect(() => {
    // Render each project if component is scrolled into view
    // scrollY keeps track of scroll position from top of page (starting 0)
    // offsetTop is the distance from top of page
    // Therefore, (current scrollY + window height) >= component's offsetTop
    // means that the component has been scrolled into view from the bottom
    if (yAxis + wHeight >= projectOneRef.current.offsetTop)
      setShowProjectOne(true);
    if (yAxis + wHeight >= projectTwoRef.current.offsetTop)
      setShowProjectTwo(true);
    if (yAxis + wHeight >= projectThreeRef.current.offsetTop)
      setShowProjectThree(true);
  }, [yAxis, wHeight]);

  return (
    <section id="projects" className="bg-white">
      <p className="text-regular text-center">Personal Projects</p>
      {QuickSchedules()}
      {Monch()}
      {CryptoNet()}
    </section>
  );
};
