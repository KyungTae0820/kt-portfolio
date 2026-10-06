import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/lib/profile";

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="scroll-mt-4 pt-20 pb-16 xl:py-24">
    <div className="container mx-auto">
      <SectionHeading id="about-heading" eyebrow="Who I am" title="About Me" />

      <div className="grid gap-10 xl:grid-cols-[1fr_1.15fr] xl:gap-14">
        <div className="flex flex-col gap-5 text-white/85 leading-relaxed text-center xl:text-left">
          {about.bio.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} as="p" delay={i * 0.08}>
              {paragraph}
            </Reveal>
          ))}
        </div>

        <ul className="grid gap-5 sm:grid-cols-2" aria-label="Skills">
          {about.skills.map((skill, i) => (
            <Reveal key={skill.group} as="li" delay={(i % 2) * 0.06} className="rounded-xl bg-[#232329] p-5">
              <h3 className="text-accent font-semibold">{skill.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs leading-relaxed text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
