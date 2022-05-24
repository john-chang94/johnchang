import emailLogoBlack from "../images/logo-email-black.png";
import linkedInLogoBlack from "../images/logo-linkedin-black.png";
import githubLogoBlack from "../images/logo-github-black.png";

export const Contact = ({ contactRef }) => (
  <section id="contact" ref={contactRef}>
    <p className="text-center">
      Have any questions or comments? That's great!
      <br />
      Send me a message and I will get back to you as soon as possible!
    </p>
    <div className="flex flex-wrap justify-evenly">
      <div className="text-center contact-icon-wrapper">
        <a href="mailto:changjohn94@gmail.com">
          <p>changjohn94@gmail.com</p>
          <img src={emailLogoBlack} alt="email icon" />
        </a>
      </div>
      <div className="text-center contact-icon-wrapper">
        <a
          href="https://www.linkedin.com/in/johnjchang94/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Linkedin</p>
          <img src={linkedInLogoBlack} alt="linkedin icon" />
        </a>
      </div>
      <div className="text-center contact-icon-wrapper">
        <a
          href="https://github.com/john-chang94"
          target="_blank"
          rel="noreferrer"
        >
          <p>Github</p>
          <img src={githubLogoBlack} alt="github icon" />
        </a>
      </div>
    </div>
  </section>
);
