import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Jobs", href: "#jobs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-blue-sky/15 backdrop-blur-xl
      ${scrolled ? "bg-blue-deep/98 shadow-[0_4px_24px_rgba(0,0,0,0.3)]" : "bg-blue-deep/95"}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between h-20">
        {/* Logo + Text */}
        <div className="flex items-center">
          <Image
            src="/assets/img/logo.png"
            alt="ADPS Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="leading-tight">
            <p className="text-[#C9A227] font-bold text-sm tracking-widest">
              ADPS
            </p>
            <p
              className={`text-[#C9A227] text-[12px] font-bold tracking-wide uppercase hidden sm:block`}
            >
              PT Alih Daya Pamungkas Sejahtera
            </p>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${scrolled ? "nav-link-scrolled" : "nav-link"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-gradient-to-r from-adps-yellow to-yellow-light text-blue-deep font-bold text-sm rounded-xl hover:shadow-[0_4px_20px_rgba(245,197,24,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-black" : "text-white"} p-1`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-deep border-t border-blue-sky/10 px-6 py-4 flex flex-col gap-2">
          {[...links, { label: "Contact", href: "#contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-blue-sky/10 font-semibold text-sm transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
