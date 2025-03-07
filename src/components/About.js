import John from "../images/john.png";

export const About = ({ aboutRef }) => (
  <section id="about" className="bg-white grid" ref={aboutRef}>
    <div className="xs10-offset-1 s8-offset-2 l4-offset-2 text-center grid-center">
      <p className="text-title">John Chang</p>
      <p>
        I am a full stack developer who loves bringing ideas to life. I always
        look forward to enhancing my skills through current and future projects,
        no matter how small or large, because any improvement is still an accomplishment.
        Besides going out with friends, I also enjoy watching YouTube videos about astronomy,
        tech reviews, and occasionally getting some good laughs from gameplay videos.
      </p>
    </div>
    <div className="xs10-offset-1 s8-offset-2 l4-offset-6 flex flex-center">
      <img src={John} alt="john chang" />
    </div>
  </section>
);
