"use client";

import { useState } from "react";

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
import { contact, profile } from "@/lib/profile";

const ContactForm = () => {
  // Radix Select is not a native <select>, so its value is kept in state
  const [service, setService] = useState("");

  // Opens the visitor's mail app with the message filled in
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key) => (form.get(key) ?? "").toString().trim();

    const name = `${get("firstname")} ${get("lastname")}`.trim();
    const phone = get("phone");
    const serviceLabel = contact.services.find((s) => s.value === service)?.label ?? "Not specified";

    const subject = `Portfolio contact from ${name}`;
    const lines = [`Name: ${name}`, `Email: ${get("email")}`];
    if (phone) lines.push(`Phone: ${phone}`);
    lines.push(`Service: ${serviceLabel}`, "", get("message"));

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl bg-[#27272c] p-6 xl:p-8">
      <h3 className="text-2xl xl:text-3xl text-accent">Send a message</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="firstname" type="text" autoComplete="given-name" required placeholder="Firstname" aria-label="First name" />
        <Input name="lastname" type="text" autoComplete="family-name" required placeholder="Lastname" aria-label="Last name" />
        <Input name="email" type="email" autoComplete="email" required placeholder="Email address" aria-label="Email address" />
        <Input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" />
      </div>
      <Select value={service} onValueChange={setService}>
        <SelectTrigger className="w-full" aria-label="Service">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service below</SelectLabel>
            {contact.services.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea name="message" required className="h-[120px]" placeholder="Type your message here." aria-label="Message" />
      <Button type="submit" size="md" className="max-w-40">
        Send message
      </Button>
      <p className="text-sm text-white/60">
        This opens your email app. You can also write to{" "}
        <a className="underline hover:text-accent" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>{" "}
        or call {profile.phone}.
      </p>
    </form>
  );
};

export default ContactForm;
