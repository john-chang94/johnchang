import John from "../images/john.png";

export const About = () => (
  <section id="about" className="bg-white grid">
    <div className="xs10-offset-1 s8-offset-2 l4-offset-2 text-center grid-center">
      <p className="text-title">John Chang</p>
      <p>
        I am a full stack developer who loves bringing ideas to life. I always
        look forward to enhancing my skills through current and future projects,
        no matter how small or large, because any improvement is still an accomplishment.
        Besides going out with friends, I also enjoy looking into astronomy, finance,
        tech reviews, and on occasion some horror gameplay videos.
      </p>
    </div>
    <div className="xs10-offset-1 s8-offset-2 l4-offset-6 flex flex-center">
      <img src={John} alt="john chang" />
    </div>
  </section>
);
