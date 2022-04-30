import John from "../images/john-round.png";

export const About = () => (
  <section id="about" className="bg-white grid">
    <div className="xs10-offset-1 s8-offset-2 l4-offset-2 text-center grid-center">
      <p className="text-title">John Chang</p>
      <p className="text-title">Software Developer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sequi
        quasi dolore quo, a placeat sit voluptatem consequuntur, tenetur at in
        voluptatum eum molestias architecto perspiciatis reiciendis! Cupiditate,
        nam voluptate?
      </p>
    </div>
    <div className="xs10-offset-1 s8-offset-2 l4-offset-6 flex flex-center">
      <img src={John} alt="john chang" />
    </div>
  </section>
);
