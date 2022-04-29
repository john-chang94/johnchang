import reactLogoBlack from "../images/logo-react-black.png";
import awsS3LogoBlack from "../images/logo-aws-s3-black.png";
import cssLogoBlack from "../images/logo-css-black.png";
import expressLogoBlack from "../images/logo-express-black2.png";
import firebaseLogoBlack from "../images/logo-firebase-black.png";
import gitLogoBlack from "../images/logo-git-black.png";
import githubLogoBlack from "../images/logo-github-black.png";
import htmlLogoBlack from "../images/logo-html-black.png";
import javaLogoBlack from "../images/logo-java-black.png";
import jsLogoBlack from "../images/logo-javascript-black2.png";
import es6LogoBlack from "../images/logo-es6-black.jpg";
import mongoDbLogoBlack from "../images/logo-mongodb-black.png";
import nodeLogoBlack from "../images/logo-node-black.png";
import psqlLogoBlack from "../images/logo-postgresql-black.png";
import postmanLogoBlack from "../images/logo-postman-black.png";
import reduxLogoBlack from "../images/logo-redux-black.png";

export const Technologies = () => (
  <section id="technologies">
    <div className="tech-list">
      <p className="text-subtitle">Technologies</p>
      <ul>
        <li>
          <p>HTML/CSS</p>
          <img className="logo-black" src={htmlLogoBlack} alt="html logo" />&nbsp;
          <img className="logo-black" src={cssLogoBlack} alt="css logo" />
        </li>
        <li>
          <p>Javascript/ES6</p>
          <img className="logo-black" src={jsLogoBlack} alt="javascript logo" />&nbsp;
          <img className="logo-black" src={es6LogoBlack} alt="es6 logo" />
        </li>
        <li>
          <p>React.js</p>
          <img className="logo-black" src={reactLogoBlack} alt="react logo" />
        </li>
        <li>
          <p>Node.js</p>
          <img className="logo-black" src={nodeLogoBlack} alt="node logo" />
        </li>
        <li>
          <p>Express.js</p>
          <img className="logo-black" src={expressLogoBlack} alt="express logo" />
        </li>
        <li>
          <p>PostgreSQL</p>
          <img className="logo-black" src={psqlLogoBlack} alt="postgresql logo" />
        </li>
        <li>
          <p>Firebase</p>
          <img className="logo-black" src={firebaseLogoBlack} alt="firebase logo" />
        </li>
      </ul>
    </div>
    <div className="tech-list">
      <p className="text-subtitle">Utilities</p>
      <ul>
        <li>
          <p>Git</p>
          <img className="logo-black" src={gitLogoBlack} alt="git logo" />
        </li>
        <li>
          <p>Github</p>
          <img className="logo-black" src={githubLogoBlack} alt="github logo" />
        </li>
        <li>
          <p>Postman</p>
          <img className="logo-black" src={postmanLogoBlack} alt="postman logo" />
        </li>
      </ul>
    </div>
    <div className="tech-list">
      <p className="text-subtitle">Exposure</p>
      <ul>
        <li>
          <p>Java</p>
          <img className="logo-black" src={javaLogoBlack} alt="java logo" />
        </li>
        <li>
          <p>Redux.js</p>
          <img className="logo-black" src={reduxLogoBlack} alt="redux logo" />
        </li>
        <li>
          <p>MongoDB</p>
          <img className="logo-black" src={mongoDbLogoBlack} alt="mongo db logo" />
        </li>
        <li>
          <p>Amazon S3</p>
          <img className="logo-black" src={awsS3LogoBlack} alt="amazon s3 logo" />
        </li>
      </ul>
    </div>
  </section>
);
