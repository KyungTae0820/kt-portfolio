import { profile } from "@/lib/profile";

const Footer = () => (
  <footer className="border-t border-white/10 py-6">
    <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-sm text-white/60 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Fight On!
      </p>
      <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
    </div>
  </footer>
);

export default Footer;
