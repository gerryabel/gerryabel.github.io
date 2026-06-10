"use client";

import { useState } from "react";
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
    image: "/foto-magang-kerja.jpeg",
    imageAlt: "Foto saat bekerja di PT. Era Bangun Jaya",
    suratUrl: "/surat-keterangan-era-bangun-jaya.pdf",
    details: [
      "Mengelola sistem manajemen aset perusahaan menggunakan SELIA dan SMMS (Sangatta Management Maintenance System)",
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
    image: "/foto-magang-kuliah.jpg",
    imageAlt: "Foto magang di Dinas Perpustakaan dan Kearsipan Kota Bukittinggi",
    details: [
      "Desain dan rancang website Cuti Pegawai",
      "Desain dan rancang website Sistem Administrasi Pertanggungjawaban Keuangan",
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
  "Beradaptasi cepat",
];

const HARD_SKILLS = [
  { name: "PHP (Laravel, CI4)", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "HTML & CSS", level: 90 },
  { name: "MySQL", level: 85 },
  { name: "UI/UX Design (Figma)", level: 75 },
  { name: "Git & GitHub", level: 70 },
  { name: "Flutter", level: 40 },
  { name: "MongoDB", level: 40 },
];

const CERTIFICATES = [
  { name: "TOEFL ITP — Nilai: 453", issuer: "Universitas Brawijaya", date: "18 Nov 2024 – 18 Nov 2026", pdf: "/sertifikat-itp-toefl.pdf" },
  { name: "Junior Web Developer", issuer: "Universitas Brawijaya (Sertifikat Kompetensi BNSP)", date: "25 Jan 2025 – 25 Jan 2028", pdf: "/sertifikat-prestasi.pdf" },
  { name: "IC3 Digital Literacy", issuer: "Universitas Brawijaya", date: "8 Mei 2025", pdf: "/sertifikat-ic3.pdf" },
  { name: "Kelulusan Program Maganghub — IT Programmer", issuer: "PT. Mandau Jaya Kontrindo", date: "24 Mei 2026", pdf: "/sertifikat-maganghub.pdf" },
  { name: "Kelulusan Magang — Programmer", issuer: "Dinas Perpustakaan dan Kearsipan Kota Bukittinggi", date: "11 Mar 2025", pdf: "/sertifikat-kegiatan.pdf" },
];

const TOOLS = [
  "Laragon", "Git", "GitHub", "VS Code", "Figma", "XAMPP",
];

const LANGUAGES = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "Bahasa Inggris", level: "Intermediate" },
];

const NAV_LINKS = [
  { href: "#about", label: "Tentang" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#education", label: "Pendidikan" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Sertifikat" },
];

/* ─────────────────────── ICONS ─────────────────────── */

function IconPhone() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
}

function IconMail() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
}

function IconMapPin() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>);
}

function IconLinkedin() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
}

function IconBriefcase() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>);
}

function IconGradCap() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>);
}

function IconAward() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>);
}

function IconCode() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
}

function IconHeart() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>);
}

function IconGlobe() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>);
}

function IconDownload() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>);
}

function IconChevronDown() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>);
}

function IconMenu() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>);
}

function IconX() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
}

function IconExternal() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>);
}

/* ─────────────────────── COMPONENTS ─────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-card-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <span className="font-bold text-lg text-yellow-500">AbeL</span>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 text-sm font-medium text-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="sm:hidden border-t border-card-border bg-black/95 backdrop-blur-md animate-fade-in">
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-3 text-sm font-medium text-muted hover:text-primary hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20" id="about">
      {/* Background — gradient + decorative circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />
      <div className="absolute top-10 left-5 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-amber-500/12 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto w-full">
        {/* Avatar */}
        <div className="mx-auto mb-6 sm:mb-10 w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden avatar-glow animate-fade-in-up border-4 border-yellow-500/30">
          <Image
            src="/foto-profil.jpg"
            alt="Foto Profil Gerry Abel Al Ashby"
            width={160}
            height={160}
            priority
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>

        <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-4 animate-fade-in-up animation-delay-100">
          {PROFILE.name}
        </h1>

        <p className="text-sm sm:text-xl text-yellow-400 font-medium mb-3 sm:mb-6 animate-fade-in-up animation-delay-200">
          {PROFILE.role}
        </p>

        <p className="text-xs sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-8 animate-fade-in-up animation-delay-300">
          {PROFILE.summary}
        </p>

        {/* Contact pills */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 mb-5 sm:mb-8 animate-fade-in-up animation-delay-400">
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm transition-colors">
            <IconMail /> {PROFILE.email}
          </a>
          <span className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm">
            <IconPhone /> {PROFILE.phone}
          </span>
          <span className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm">
            <IconMapPin /> {PROFILE.location}
          </span>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm transition-colors">
            <IconLinkedin /> LinkedIn
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 animate-fade-in-up animation-delay-500">
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black text-sm sm:text-base font-semibold transition-colors shadow-lg shadow-yellow-500/20"
          >
            Lihat Pengalaman
          </a>
          <a
            href="/CV_Gerry.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full border border-yellow-500/30 hover:bg-yellow-500/10 text-yellow-400 text-sm sm:text-base font-semibold transition-colors"
          >
            <IconDownload /> Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#experience" className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-yellow-500/50 hover:text-yellow-400 transition-colors animate-bounce z-10">
        <IconChevronDown />
      </a>
    </section>
  );
}

function SectionTitle({ icon, title, id }: { icon: React.ReactNode; title: string; id: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-6 sm:mb-10 scroll-mt-20">
      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-yellow-500/10 text-yellow-500 shrink-0">
        {icon}
      </div>
      <h2 className="text-lg sm:text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

function Experience() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionTitle id="experience" icon={<IconBriefcase />} title="Pengalaman Kerja" />

      <div className="space-y-5 sm:space-y-8">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="card-hover relative bg-card border border-card-border rounded-2xl overflow-hidden">
            {/* Layout: foto kiri, deskripsi kanan */}
            <div className="flex flex-col md:flex-row">
              {/* Foto — kiri */}
              {exp.image && (
                <div className="w-full md:w-2/5 h-48 md:h-auto shrink-0">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Deskripsi — kanan */}
              <div className="flex-1 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col gap-2 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted">{exp.location}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                      {exp.period}
                    </span>
                    {exp.suratUrl && (
                      <a
                        href={exp.suratUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                      >
                        <IconExternal /> Surat Keterangan
                      </a>
                    )}
                  </div>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed">
                      <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="education" icon={<IconGradCap />} title="Pendidikan" />

        <div className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-8">
          <div className="flex flex-col gap-2 mb-3 sm:mb-4">
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-white">{EDUCATION.school}</h3>
              <p className="text-primary font-semibold text-sm">{EDUCATION.degree}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                GPA: {EDUCATION.gpa}
              </span>
              <span className="text-xs text-muted">{EDUCATION.period}</span>
            </div>
          </div>
          <ul className="space-y-1.5 sm:space-y-2 ml-3 sm:ml-4">
            {EDUCATION.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-base text-muted leading-relaxed">
                <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
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
    <section className="py-12 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionTitle id="skills" icon={<IconCode />} title="Keahlian" />

      <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
        {/* Hard Skills */}
        <div className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-8">
          <h3 className="text-sm sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2 text-white">
            <span className="text-yellow-500"><IconCode /></span> Hard Skills
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {HARD_SKILLS.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="font-medium text-zinc-300">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-yellow-500 to-amber-400"
                    style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills + Languages + Tools */}
        <div className="space-y-5 sm:space-y-8">
          <div className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-8">
            <h3 className="text-sm sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2 text-white">
              <span className="text-rose-400"><IconHeart /></span> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {SOFT_SKILLS.map((s, i) => (
                <span key={i} className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-8">
            <h3 className="text-sm sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2 text-white">
              <span className="text-emerald-400"><IconGlobe /></span> Bahasa
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {LANGUAGES.map((l, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-medium text-xs sm:text-sm text-zinc-300">{l.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-8">
            <h3 className="text-sm sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2 text-white">
              <span className="text-yellow-500">🛠</span> Tools & Lingkungan Kerja
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {TOOLS.map((t, i) => (
                <span key={i} className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  {t}
                </span>
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
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="certificates" icon={<IconAward />} title="Sertifikat" />

        {/* Row 1: 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {CERTIFICATES.slice(0, 3).map((cert, i) => (
            <a
              key={i}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-6 flex flex-col group cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-3 group-hover:bg-yellow-500/20 transition-colors">
                <IconAward />
              </div>
              <h4 className="font-bold text-xs sm:text-sm mb-1 text-white group-hover:text-yellow-400 transition-colors">{cert.name}</h4>
              <p className="text-xs text-muted mb-2 sm:mb-3">{cert.issuer}</p>
              <span className="mt-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 w-fit">
                {cert.date}
              </span>
            </a>
          ))}
        </div>
        {/* Row 2: 2 items, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 mt-3 sm:mt-6 max-w-3xl mx-auto">
          {CERTIFICATES.slice(3).map((cert, i) => (
            <a
              key={i + 3}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-card border border-card-border rounded-2xl p-4 sm:p-6 flex flex-col group cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-3 group-hover:bg-yellow-500/20 transition-colors">
                <IconAward />
              </div>
              <h4 className="font-bold text-xs sm:text-sm mb-1 text-white group-hover:text-yellow-400 transition-colors">{cert.name}</h4>
              <p className="text-xs text-muted mb-2 sm:mb-3">{cert.issuer}</p>
              <span className="mt-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 w-fit">
                {cert.date}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-5 sm:py-8 px-4 sm:px-6 border-t border-card-border bg-black">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted">
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
    <div className="min-h-screen bg-black">
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
