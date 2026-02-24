import { FaComments, FaUserPlus, FaBuilding, FaGraduationCap, FaArrowRight, FaCog } from 'react-icons/fa';

const services = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop&crop=top',
    icon: FaComments,
    iconClass: 'bg-blue-bright/10 text-blue-bright',
    title: 'Konsultasi HR',
    desc: 'Solusi strategis pengelolaan SDM mencakup audit organisasi, penyusunan SOP, evaluasi jabatan, dan pengembangan budaya perusahaan yang sesuai kebutuhan bisnis Anda.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=500&fit=crop&crop=top',
    icon: FaUserPlus,
    iconClass: 'bg-adps-yellow/10 text-yellow-600',
    title: 'Rekrutmen Profesional',
    desc: 'Proses seleksi berbasis kompetensi untuk menemukan kandidat yang paling sesuai dengan profil dan kebutuhan perusahaan Anda. Cepat, terukur, dan efisien.',
  },
  {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop&crop=center',
    icon: FaBuilding,
    iconClass: 'bg-blue-bright/10 text-blue-bright',
    title: 'Outsourcing Tenaga Kerja',
    desc: 'Pengelolaan tenaga kerja kontrak secara menyeluruh mulai dari perekrutan, payroll, administrasi BPJS, hingga manajemen kinerja karyawan alih daya Anda.',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop&crop=center',
  //   icon: FaGraduationCap,
  //   iconClass: 'bg-adps-yellow/10 text-yellow-600',
  //   title: 'Training & Development',
  //   desc: 'Program pelatihan dan pengembangan kompetensi karyawan yang dirancang khusus untuk meningkatkan produktivitas dan kapabilitas SDM di organisasi Anda.',
  // },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-tag"><FaCog size={11} /> Layanan Kami</div>
          <h2 className="section-title">Solusi <span className="text-blue-bright">HR Komprehensif</span><br />untuk Kebutuhan Bisnis Anda</h2>
          <p className="text-gray-mid max-w-xl mx-auto leading-relaxed">Kami menyediakan layanan pengelolaan sumber daya manusia yang menyeluruh, dari rekrutmen hingga penempatan tenaga ahli profesional.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-blue-bright/8 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(30,111,217,0.15)] transition-all duration-300">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.iconClass}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-sora font-bold text-lg text-blue-deep mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-mid leading-relaxed mb-5">{s.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-bright hover:gap-3 transition-all">
                    Pelajari lebih lanjut <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
