import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Jobs', href: '#jobs' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-blue-sky/15 backdrop-blur-xl
      ${scrolled ? 'bg-blue-deep/98 shadow-[0_4px_24px_rgba(0,0,0,0.3)]' : 'bg-blue-deep/95'}`}>
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-bright to-blue-sky flex items-center justify-center overflow-hidden">
            <span className="font-sora font-extrabold text-[13px] text-white tracking-wide z-10">ADPS</span>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-adps-yellow clip-triangle" />
          </div>
          <div className="flex flex-col">
            <span className={`font-sora font-bold text-base ${scrolled ? 'text-black' : 'text-white'}`}>PT ALIH DAYA</span>
            <span className="text-[10px] font-semibold text-adps-yellow uppercase tracking-widest">Pamungkas Sejahtera</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className={`${scrolled ? 'nav-link-scrolled': 'nav-link'}`}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="ml-2 px-5 py-2 bg-gradient-to-r from-adps-yellow to-yellow-light text-blue-deep font-bold text-sm rounded-xl hover:shadow-[0_4px_20px_rgba(245,197,24,0.4)] hover:-translate-y-0.5 transition-all duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className={`md:hidden ${scrolled ? 'text-black' :'text-white'} p-1`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-deep border-t border-blue-sky/10 px-6 py-4 flex flex-col gap-2">
          {[...links, { label: 'Contact', href: '#contact' }].map(link => (
            <a key={link.href} href={link.href}
              className="block py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-blue-sky/10 font-semibold text-sm transition-all"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
