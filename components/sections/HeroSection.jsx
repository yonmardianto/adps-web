import { useState, useEffect } from 'react';
import { FaBriefcase, FaStar, FaHandshake } from 'react-icons/fa';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop&crop=center',
    badge: { icon: FaStar, text: '#1 HR Outsourcing Partner' },
    title: <>Solusi <span className="text-adps-yellow">SDM Profesional</span><br />untuk Bisnis Anda</>,
    desc: 'PT Alih Daya Pamungkas Sejahtera menghadirkan tenaga kerja berkualitas, terekrut dengan presisi, dan siap mendorong pertumbuhan perusahaan Anda.',
    cta1: { label: 'Lihat Lowongan', href: '#jobs', icon: FaBriefcase },
    cta2: { label: 'Layanan Kami', href: '#services' },
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop&crop=center',
    badge: { icon: FaHandshake, text: 'Trusted Since 2015' },
    title: <>Rekrut <span className="text-adps-yellow">Tepat</span>, Tumbuh <span className="text-adps-yellow">Bersama</span></>,
    desc: 'Kami menghubungkan perusahaan terbaik dengan talenta terpilih melalui proses seleksi profesional yang terukur dan transparan.',
    cta1: { label: 'Hubungi Kami', href: '#contact' },
    cta2: { label: 'Konsultasi Gratis', href: '#services' },
  },
];

const stats = [
  { num: '500+', label: 'Tenaga Kerja Ditempatkan' },
  { num: '120+', label: 'Perusahaan Klien' },
  { num: '9+', label: 'Tahun Pengalaman' },
  { num: '98%', label: 'Tingkat Kepuasan' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" className="mt-[70px]">
      {/* Slider */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, i) => {
          const BadgeIcon = slide.badge.icon;
          return (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide.img} alt="" className="w-full h-full object-cover brightness-[0.45]" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-deep/80 via-blue-mid/60 to-blue-bright/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="inline-flex items-center gap-2 bg-adps-yellow/15 border border-adps-yellow/40 text-adps-yellow text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                  <BadgeIcon size={10} /> {slide.badge.text}
                </div>
                <h1 className="font-sora text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl">{slide.title}</h1>
                <p className="text-white/75 text-base max-w-[560px] leading-relaxed mb-8">{slide.desc}</p>
                <div className="flex gap-3 flex-wrap justify-center">
                  <a href={slide.cta1.href} className="btn-primary flex items-center gap-2">
                    {slide.cta1.icon && <slide.cta1.icon />} {slide.cta1.label}
                  </a>
                  <a href={slide.cta2.href} className="btn-outline">{slide.cta2.label}</a>
                </div>
              </div>
            </div>
          );
        })}
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-adps-yellow' : 'w-2 bg-white/35'}`} />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-gradient-to-r from-blue-mid to-blue-deep py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-sora text-3xl font-extrabold text-adps-yellow">{s.num}</div>
              <div className="text-xs font-medium text-white/65 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
