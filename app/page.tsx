/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

/* ─────────────────────── DATA ─────────────────────── */

const PROFILE = {
  name: "Gerry Abel Al Ashby",
  role: "Web Developer · UI/UX Designer · Programmer",
  phone: "081266291189",
  email: "abelgerry11@gmail.com",
  location: "Bukittinggi, Sumatera Barat",
  linkedin: "https://www.linkedin.com/in/gerry-abel-al-ashby-487a1124b",
  summary:
    "Mahasiswa lulusan D3 Universitas Brawijaya Program Studi Teknologi Informasi minat Sistem Informasi. Memiliki pengalaman sebagai Programmer di Dinas Perpustakaan dan Kearsipan Kota Bukittinggi serta PT. Era Bangun Jaya. Memiliki kemampuan dalam UI/UX, Backend Developer, Frontend Developer, komunikasi, dan dapat beradaptasi dengan cepat terhadap perubahan dan tantangan di lingkungan kerja.",
};

const EXPERIENCE = [
  {
    company: "PT. Era Bangun Jaya",
    location: "Sangatta, Kalimantan Timur",
    period: "Nov 2025 – Mei 2026",
    role: "IT Programmer — Magang (Maganghub)",
    details: [
      "Mengembangkan dan mengelola sistem manajemen aset perusahaan menggunakan SELIA dan SMMS (Sangatta Management Maintenance System)",
      "Menginput, memperbarui, dan memvalidasi data aset, sparepart, serta maintenance unit alat berat",
      "Membantu perancangan fitur dan alur sistem sesuai kebutuhan operasional perusahaan",
      "Melakukan dokumentasi sistem dan pembuatan laporan penggunaan sistem",
    ],
  },
  {
    company: "Dinas Perpustakaan dan Kearsipan Kota Bukittinggi",
    location: "Bukittinggi, Sumatera Barat",
    period: "Sep 2024 – Mar 2025",
    role: "Programmer — Magang",
    details: [
      "Desain dan rancang website Cuti Pegawai",
      "Desain dan rancang website Arsip",
      "Desain dan rancang website Perpustakaan Daring Kota Bukittinggi",
    ],
  },
];

const EDUCATION = {
  school: "Universitas Brawijaya — Malang, Jawa Timur",
  degree: "Ahli Madya Teknologi Informasi",
  gpa: "3.81 / 4.00",
  period: "Agus 2022 – Juli 2025",
  highlights: [
    "Mempelajari programming website, database MySQL, desain web, database MongoDB, mengoperasikan Packet Tracer, dan merancang aplikasi mobile dengan Flutter",
    "Tugas Akhir: Rancang Bangun Sistem Informasi Komunitas Pecinta Kucing (KOPEKU) Berbasis Website",
  ],
};

const SOFT_SKILLS = [
  "Problem Solving",
  "Komunikasi",
  "Berpikir Kritis",
  "Manajemen Waktu",
  "Beradaptasi dengan cepat",
];

const HARD_SKILLS = [
  { name: "PHP", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "Laravel", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "UI/UX Design", level: 75 },
  { name: "Flutter", level: 65 },
  { name: "MongoDB", level: 40 },
];

const CERTIFICATES = [
  {
    name: "TOEFL ITP — Nilai: 453",
    issuer: "Universitas Brawijaya",
    date: "18 Nov 2024 – 18 Nov 2026",
  },
  {
    name: "Junior Web Developer",
    issuer: "Universitas Brawijaya (Sertifikat Kompetensi)",
    date: "25 Jan 2025 – 25 Jan 2028",
  },
  {
    name: "IC3 Digital Literacy",
    issuer: "Universitas Brawijaya",
    date: "8 Mei 2025",
  },
];

const LANGUAGES = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "Bahasa Inggris", level: "Intermediate" },
];

/* ─────────────────────── ICONS (inline SVG) ─────────────────────── */

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}

function IconMapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
  );
}

function IconLinkedin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

function IconBriefcase() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
  );
}

function IconGradCap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>
  );
}

function IconAward() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
  );
}

function IconCode() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  );
}

function IconHeart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  );
}

function IconGlobe() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  );
}

function IconDownload() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  );
}

function IconChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  );
}

/* ─────────────────────── COMPONENTS ─────────────────────── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-card-border">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="font-bold text-lg gradient-text">GAA</span>
        <ul className="flex gap-6 text-sm font-medium text-muted">
          <li><a href="#about" className="hover:text-primary transition-colors">Tentang</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">Pengalaman</a></li>
          <li><a href="#education" className="hover:text-primary transition-colors">Pendidikan</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#certificates" className="hover:text-primary transition-colors">Sertifikat</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Avatar */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden shadow-2xl shadow-blue-500/30 animate-fade-in-up border-4 border-white/20">
          <Image
            src="/foto-profil.jpg"
            alt="Foto Profil Gerry Abel Al Ashby"
            width={128}
            height={128}
            priority
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-up animation-delay-100">
          {PROFILE.name}
        </h1>

        <p className="text-lg sm:text-xl text-blue-200 font-medium mb-6 animate-fade-in-up animation-delay-200">
          {PROFILE.role}
        </p>

        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
          {PROFILE.summary}
        </p>

        {/* Contact pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-400">
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm backdrop-blur-sm transition-colors">
            <IconMail /> {PROFILE.email}
          </a>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm">
            <IconPhone /> {PROFILE.phone}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm">
            <IconMapPin /> {PROFILE.location}
          </span>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm backdrop-blur-sm transition-colors">
            <IconLinkedin /> LinkedIn
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-500">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-lg shadow-blue-600/30"
          >
            Lihat Pengalaman
          </a>
          <a
            href="/CV_Gerry.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors backdrop-blur-sm"
          >
            <IconDownload /> Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#experience" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce">
        <IconChevronDown />
      </a>
    </section>
  );
}

function SectionTitle({ icon, title, id }: { icon: React.ReactNode; title: string; id: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-10 scroll-mt-20">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-sky-400">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    </div>
  );
}

function Experience() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <SectionTitle id="experience" icon={<IconBriefcase />} title="Pengalaman Kerja" />

      <div className="space-y-8">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="card-hover relative bg-card border border-card-border rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                <p className="text-primary font-semibold">{exp.company}</p>
                <p className="text-sm text-muted">{exp.location}</p>
              </div>
              <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-600 dark:text-sky-400 dark:bg-sky-400/10">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2 ml-4">
              {exp.details.map((d, j) => (
                <li key={j} className="flex items-start gap-2 text-sm sm:text-base text-muted leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="education" icon={<IconGradCap />} title="Pendidikan" />

        <div className="card-hover bg-card border border-card-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-bold">{EDUCATION.school}</h3>
              <p className="text-primary font-semibold">{EDUCATION.degree}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400">
                GPA: {EDUCATION.gpa}
              </span>
              <p className="text-xs text-muted mt-1">{EDUCATION.period}</p>
            </div>
          </div>
          <ul className="space-y-2 ml-4">
            {EDUCATION.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <SectionTitle id="skills" icon={<IconCode />} title="Keahlian" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Hard Skills */}
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-blue-500"><IconCode /></span> Hard Skills
          </h3>
          <div className="space-y-4">
            {HARD_SKILLS.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
                    style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills + Languages */}
        <div className="space-y-8">
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-rose-500"><IconHeart /></span> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-foreground border border-card-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-emerald-500"><IconGlobe /></span> Bahasa
            </h3>
            <div className="space-y-3">
              {LANGUAGES.map((l, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-medium text-sm">{l.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="certificates" icon={<IconAward />} title="Sertifikat" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <div
              key={i}
              className="card-hover bg-card border border-card-border rounded-2xl p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                <IconAward />
              </div>
              <h4 className="font-bold text-sm mb-1">{cert.name}</h4>
              <p className="text-xs text-muted mb-3">{cert.issuer}</p>
              <span className="mt-auto inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Gerry Abel Al Ashby. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors">
            <IconMail />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <IconLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Certificates />
      <Footer />
    </div>
  );
}
