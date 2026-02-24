import { useState } from 'react';
import { FaBriefcase, FaArrowRight, FaCalendar, FaList } from 'react-icons/fa';

const jobs = [
  {
    emoji: '🏦', type: 'full-time',
    title: 'HR Business Partner',
    company: 'Client – Sektor Perbankan & Keuangan • Jakarta Pusat',
    tags: [
      { label: 'Full Time', cls: 'bg-blue-bright/10 text-blue-bright' },
      { label: 'HR Specialist', cls: 'bg-adps-yellow/15 text-yellow-700' },
      { label: 'S1 Psikologi / Manajemen', cls: 'bg-gray-light text-gray-mid' },
      { label: 'Pengalaman 3 tahun', cls: 'bg-emerald-50 text-emerald-600' },
    ],
    salary: 'Rp 8 – 12 Juta',
    deadline: '31 Mar 2025',
  },
  {
    emoji: '🏭', type: 'contract',
    title: 'Staf Payroll & Kompensasi',
    company: 'Client – Sektor Manufaktur • Bekasi, Jawa Barat',
    tags: [
      { label: 'Kontrak 1 Tahun', cls: 'bg-blue-bright/10 text-blue-bright' },
      { label: 'Payroll Admin', cls: 'bg-adps-yellow/15 text-yellow-700' },
      { label: 'S1 Akuntansi / Ekonomi', cls: 'bg-gray-light text-gray-mid' },
      { label: 'Fresh Graduate', cls: 'bg-emerald-50 text-emerald-600' },
    ],
    salary: 'Rp 5 – 7 Juta',
    deadline: '20 Mar 2025',
  },
  {
    emoji: '💻', type: 'full-time',
    title: 'Talent Acquisition Specialist',
    company: 'Client – Startup Teknologi • Jakarta Selatan',
    tags: [
      { label: 'Full Time', cls: 'bg-blue-bright/10 text-blue-bright' },
      { label: 'Rekrutmen', cls: 'bg-adps-yellow/15 text-yellow-700' },
      { label: 'S1 Semua Jurusan', cls: 'bg-gray-light text-gray-mid' },
      { label: 'Pengalaman 2 tahun', cls: 'bg-emerald-50 text-emerald-600' },
    ],
    salary: 'Rp 7 – 10 Juta',
    deadline: '15 Apr 2025',
  },
  {
    emoji: '🌐', type: 'remote',
    title: 'HR Generalist (Remote)',
    company: 'Client – Perusahaan Multifinance • Work From Home',
    tags: [
      { label: 'Remote', cls: 'bg-blue-bright/10 text-blue-bright' },
      { label: 'HR Generalist', cls: 'bg-adps-yellow/15 text-yellow-700' },
      { label: 'S1 Psikologi / HRM', cls: 'bg-gray-light text-gray-mid' },
      { label: 'Pengalaman 2 tahun', cls: 'bg-emerald-50 text-emerald-600' },
    ],
    salary: 'Rp 6 – 9 Juta',
    deadline: '10 Apr 2025',
  },
  {
    emoji: '🏥', type: 'contract',
    title: 'Staf Administrasi BPJS & Jamsostek',
    company: 'Client – Rumah Sakit Swasta • Depok, Jawa Barat',
    tags: [
      { label: 'Kontrak 6 Bulan', cls: 'bg-blue-bright/10 text-blue-bright' },
      { label: 'HR Admin', cls: 'bg-adps-yellow/15 text-yellow-700' },
      { label: 'D3 / S1 Semua Jurusan', cls: 'bg-gray-light text-gray-mid' },
      { label: 'Fresh Graduate', cls: 'bg-emerald-50 text-emerald-600' },
    ],
    salary: 'Rp 3,5 – 5 Juta',
    deadline: '28 Mar 2025',
  },
  {
    emoji: '🏢', type: 'full-time',
    title: 'Organizational Development Manager',
    company: 'Client – Perusahaan FMCG Nasional • Jakarta Timur',
    tags: [
      { label: 'Full Time', cls: 'bg-blue-bright/10 text-blue-bright' },
      { label: 'Senior Level', cls: 'bg-adps-yellow/15 text-yellow-700' },
      { label: 'S2 Diutamakan', cls: 'bg-gray-light text-gray-mid' },
      { label: 'Min. 5 tahun', cls: 'bg-emerald-50 text-emerald-600' },
    ],
    salary: 'Rp 18 – 25 Juta',
    deadline: '30 Apr 2025',
  },
];

const filters = [
  { key: 'all', label: 'Semua' },
  { key: 'full-time', label: 'Full Time' },
  { key: 'contract', label: 'Kontrak' },
  { key: 'remote', label: 'Remote' },
];

export default function JobsSection() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? jobs : jobs.filter(j => j.type === active);

  return (
    <section id="jobs" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <div className="section-tag"><FaBriefcase size={11} /> Lowongan</div>
            <h2 className="section-title">Karir & <span className="text-blue-bright">Peluang Kerja</span></h2>
            <p className="text-gray-mid max-w-md leading-relaxed">Temukan posisi impian Anda bersama klien-klien terbaik kami.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button key={f.key} onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${active === f.key ? 'bg-blue-bright text-white border-blue-bright' : 'border-blue-bright/20 text-gray-mid hover:bg-blue-bright hover:text-white hover:border-blue-bright'}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filtered.map((job, i) => (
            <a key={i} href="#contact"
              className="flex items-center gap-5 px-7 py-6 rounded-2xl border-[1.5px] border-blue-bright/10 bg-white hover:border-blue-bright hover:shadow-[0_8px_32px_rgba(30,111,217,0.12)] hover:translate-x-1 transition-all duration-300 no-underline">
              <div className="w-14 h-14 rounded-xl bg-gray-light flex items-center justify-center text-2xl flex-shrink-0">
                {job.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-sora font-bold text-base text-blue-deep mb-1">{job.title}</div>
                <div className="text-sm text-gray-mid mb-2">{job.company}</div>
                <div className="flex gap-1.5 flex-wrap">
                  {job.tags.map((tag, ti) => (
                    <span key={ti} className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${tag.cls}`}>{tag.label}</span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0 hidden md:block">
                <div className="font-sora font-bold text-sm text-blue-bright mb-1">{job.salary}</div>
                <div className="text-xs text-gray-mid flex items-center gap-1 justify-end">
                  <FaCalendar size={10} /> {job.deadline}
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-bright to-blue-sky text-white text-xs font-semibold rounded-lg hover:shadow-[0_4px_16px_rgba(30,111,217,0.35)] transition-all">
                  Apply <FaArrowRight size={10} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-9">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <FaList /> Lihat Semua Lowongan
          </a>
        </div>
      </div>
    </section>
  );
}
