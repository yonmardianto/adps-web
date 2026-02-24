import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const socials = [
  { icon: FaInstagram, href: 'https://www.instagram.com/adps.official', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-deep py-7 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label, color }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
              className={`w-10 h-10 rounded-xl bg-white/7 border border-white/8 flex items-center justify-center text-white/60 hover:text-white ${color} transition-all duration-200 hover:-translate-y-0.5`}>
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40 text-center md:text-right leading-relaxed">
        <span className="text-adps-yellow font-semibold">PT Alih Daya Pamungkas Sejahtera</span><br />
            &copy; 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
