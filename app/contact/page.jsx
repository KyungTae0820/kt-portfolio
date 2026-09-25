"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CONTACT_EMAIL = "kimkyungtae12386@gmail.com";

const services = [
  { value: "software-engineering", label: "Software Engineering" },
  { value: "electrical-engineering", label: "Electrical Engineering" },
  { value: "other", label: "Other" },
];

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) (917) 487 8930",
    href: "tel:+19174878930",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Los Angeles, CA",
  },
];

const Contact = () => {
  // Radix Select is not a native <select>, so its value is kept in state
  const [service, setService] = useState("");

  // Opens the visitor's mail app with the message filled in
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key) => (form.get(key) ?? "").toString().trim();

    const name = `${get("firstname")} ${get("lastname")}`.trim();
    const phone = get("phone");
    const serviceLabel = services.find((s) => s.value === service)?.label ?? "Not specified";

    const subject = `Portfolio contact from ${name}`;
    const lines = [`Name: ${name}`, `Email: ${get("email")}`];
    if (phone) lines.push(`Phone: ${phone}`);
    lines.push(`Service: ${serviceLabel}`, "", get("message"));
    const body = lines.join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h1 className="text-4xl text-accent">Contact me</h1>
              <p className="text-white/80">
                If given the opportunity, I would love to explore the new visions of Software Developing with
                diverse individuals or groups, learning, sharing and collaborating together. Please feel free to
                contact me through the form below.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" autoComplete="given-name" required placeholder="Firstname" aria-label="First name" />
                <Input name="lastname" type="text" autoComplete="family-name" required placeholder="Lastname" aria-label="Last name" />
                <Input name="email" type="email" autoComplete="email" required placeholder="Email address" aria-label="Email address" />
                <Input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" />
              </div>
              {/* select */}
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full" aria-label="Service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service below</SelectLabel>
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                required
                className="h-[200px]"
                placeholder="Type your message here."
                aria-label="Message"
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
              <p className="text-sm text-white/60">
                This opens your email app. You can also write to{" "}
                <a className="underline hover:text-accent" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl hover:text-accent transition-colors">
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-xl">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
