import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contact } from "@/lib/profile";

import ContactForm from "./ContactForm";

const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-4 pt-20 pb-16 xl:py-24">
    <div className="container mx-auto">
      <SectionHeading id="contact-heading" eyebrow="Say hello" title="Contact" description={contact.blurb} />
      <div className="grid gap-8 xl:grid-cols-[1fr_1.4fr] xl:items-start">
        <ul className="grid gap-5 sm:grid-cols-3 xl:grid-cols-1">
          {contact.links.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} as="li" delay={i * 0.08}>
              <a
                href={href}
                {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex h-full items-center gap-4 rounded-xl bg-[#27272c] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xl text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                  <Icon aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{label}</span>
                  <span className="block break-all text-sm text-white/60">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
