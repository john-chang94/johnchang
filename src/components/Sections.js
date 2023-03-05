import { About } from "./About";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export default function Sections({
  aboutRef,
  technologiesRef,
  projectsRef,
  contactRef,
}) {
  return (
    <>
      <About aboutRef={aboutRef} />
      <Technologies technologiesRef={technologiesRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}
