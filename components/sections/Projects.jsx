"use client";

import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/profile";

import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-4 pt-20 pb-16 xl:py-24">
    <div className="container mx-auto">
      <SectionHeading
        id="projects-heading"
        eyebrow="What I've built"
        title="Projects"
        description="Open Games to play my C++ games right here in the browser. The other cards open GitHub or the live product in a new tab."
      />
      <ul className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))]">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
