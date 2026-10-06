import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/profile";

import Timeline from "./Timeline";

const Experience = () => (
  // overflow-x-clip keeps the slide-in cards from causing a sideways scrollbar (and, unlike
  // overflow-hidden on <body>, does not break the sticky header)
  <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-4 pt-20 pb-16 xl:py-24 overflow-x-clip">
    <div className="container mx-auto">
      <SectionHeading
        id="experience-heading"
        eyebrow="My journey"
        title="Experience"
        description="From an ML summer program at MIT to building LLM tooling at Samsung Semiconductor: the newest chapter is at the top."
      />
      <Timeline items={experience} />
    </div>
  </section>
);

export default Experience;
