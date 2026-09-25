import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo (each page has its own h1) */}
        <Link href="/" aria-label="KT Portfolio home">
          <span className="text-4xl font-semibold">
            KT<span className="text-accent">.</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
