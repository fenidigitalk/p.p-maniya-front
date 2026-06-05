"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Users,
  Activity,
  BookOpen,
  Building2,
  Heart,
  Clock,
  ArrowRight,
  ChevronRight,
  Check,
  Download,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  Award,
  Laptop,
  AlertTriangle,
  Wrench,
  PersonStanding,
} from "lucide-react";
import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";

import Footer from "@/components/footer";
import Header from "@/components/header";

interface HomePageProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currentPage: string;
  navigateTo: (page: string) => void;
  setDonationForm: (fn: (prev: any) => any) => void;
  setToastMessage: (msg: string) => void;
}
const accentMap: Record<
  string,
  {
    icon: string;
    iconBg: string;
    border: string;
    hoverBorder: string;
    bar: string;
    num: string;
    badge: string;
  }
> = {
  amber: {
    icon: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-amber-300",
    bar: "bg-amber-400",
    num: "text-amber-400",
    badge: "",
  },
  blue: {
    icon: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-blue-300",
    bar: "bg-blue-400",
    num: "text-blue-400",
    badge: "",
  },
  emerald: {
    icon: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-emerald-300",
    bar: "bg-emerald-400",
    num: "text-emerald-400",
    badge: "",
  },
  pink: {
    icon: "text-pink-600",
    iconBg: "bg-pink-50 border-pink-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-pink-300",
    bar: "bg-pink-400",
    num: "text-pink-400",
    badge: "",
  },
  violet: {
    icon: "text-violet-600",
    iconBg: "bg-violet-50 border-violet-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-violet-300",
    bar: "bg-violet-400",
    num: "text-violet-400",
    badge: "",
  },
  red: {
    icon: "text-red-600",
    iconBg: "bg-red-50 border-red-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-red-300",
    bar: "bg-red-400",
    num: "text-red-400",
    badge: "",
  },
  sky: {
    icon: "text-sky-600",
    iconBg: "bg-sky-50 border-sky-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-sky-300",
    bar: "bg-sky-400",
    num: "text-sky-400",
    badge: "",
  },
  orange: {
    icon: "text-orange-600",
    iconBg: "bg-orange-50 border-orange-200",
    border: "border-slate-200",
    hoverBorder: "hover:border-orange-300",
    bar: "bg-orange-400",
    num: "text-orange-400",
    badge: "",
  },
};


export default function HomePage({
  lang,
  setLang,
  navigateTo,
  currentPage,
  setDonationForm,
  setToastMessage,
}: HomePageProps) {
  const safeLang: Lang = lang && DICTIONARY[lang] ? lang : "en";
  const t: DictType = DICTIONARY[safeLang];
  const pillars = [
    { num: "01", title: "Education Support", desc: "Merit-cum-means scholarships...", icon: BookOpen, accent: "amber" },
    { num: "02", title: "Medical Assistance", desc: "Patient treatment subsidies...", icon: Activity, accent: "blue" },
    { num: "03", title: "Community Welfare", desc: "Direct food distribution...", icon: Heart, accent: "emerald" },
    { num: "04", title: "Women Empowerment", desc: "Vocational tailoring skills...", icon: Users, accent: "pink" },
    { num: "05", title: "Youth Development", desc: "Digital literacy programs...", icon: Laptop, accent: "violet" },
    { num: "06", title: "Emergency Relief", desc: "Rapid monsoon/disaster...", icon: AlertTriangle, accent: "red" },
    { num: "07", title: "Skill Development", desc: "Professional workshop...", icon: Wrench, accent: "sky" },
    { num: "08", title: "Senior Citizen Support", desc: "Geriatric screening camps...", icon: PersonStanding, accent: "orange" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);


  return (
    <>
      <Header
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        navigateTo={navigateTo}
      />
      <div>
        {/* HERO */}
        <section className="relative bg-white overflow-hidden min-h-[600px] flex items-center">

          {/* Background decorative shapes */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-orange-50 via-amber-50 to-transparent" />
            <div className="absolute -top-20 right-[30%] w-72 h-72 bg-orange-100 rounded-full opacity-40 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-60 blur-3xl" />
            {/* Dotted pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT: Text Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 text-[#C35214] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-orange-200"
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Registered Charity • Govt. Act Compliant</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] text-slate-900 mb-5"
                >
                  {t.tagline}
                  <span className="block text-[#C35214] mt-1">—</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
                >
                  {t.subTagline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  <button
                    onClick={() => navigateTo("donate")}
                    className="px-6 py-3.5 bg-[#C35214] hover:bg-[#c2410c] text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{t.donateCta}</span>
                  </button>
                  <button
                    onClick={() => navigateTo("activities")}
                    className="px-6 py-3.5 bg-white text-slate-700 hover:text-[#C35214] font-semibold rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all flex items-center gap-1.5 text-sm shadow-sm"
                  >
                    <span>{t.knowWork}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-5"
                >
                  {[
                    { icon: ShieldCheck, label: "12A Certified", color: "text-emerald-600" },
                    { icon: Award, label: "80G Tax Exempt", color: "text-amber-600" },
                    { icon: Users, label: "10,000+ Lives", color: "text-blue-600" },
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-slate-600">
                      <badge.icon className={`w-4 h-4 ${badge.color}`} />
                      <span className="text-xs font-semibold">{badge.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT: Visual Card Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:block relative h-[480px]"
              >
                {/* Main large card */}
                <div className="absolute top-0 left-8 right-0 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={IMAGES.medicalCamp}
                    alt="Medical Camp"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-0.5">Healthcare</span>
                    <span className="block text-sm font-bold">Mega Medical Camps</span>
                  </div>
                </div>

                {/* Bottom left card */}
                <div className="absolute bottom-0 left-0 w-48 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={IMAGES.education}
                    alt="Education"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-amber-400 mb-0.5">Education</span>
                    <span className="block text-xs font-bold">Scholarships</span>
                  </div>
                </div>

                {/* Bottom right stat card */}
                <div className="absolute bottom-4 right-4 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-4 h-4 text-[#C35214] fill-[#C35214]" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">Trust Impact</span>
                  </div>
                  {[
                    { val: "10,000+", label: "Lives Touched" },
                    { val: "7+ Yrs", label: "Of Service" },
                    { val: "50+ Camps", label: "Organized" },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center py-1 border-b border-slate-50 last:border-0">
                      <span className="text-[11px] text-slate-500">{s.label}</span>
                      <span className="text-[11px] font-extrabold text-slate-900">{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-[#C35214] text-white rounded-2xl px-3 py-2 shadow-lg text-center">
                  <span className="block text-[9px] uppercase font-bold tracking-widest text-orange-200">Est.</span>
                  <span className="block text-xl font-black">2019</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="bg-gradient-to-b from-slate-900 to-[#10172A] text-white py-12 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { val: "10,000+", label: t.impactLives, icon: Users, color: "text-amber-400" },
              { val: "500+", label: t.impactMedical, icon: Activity, color: "text-orange-400" },
              { val: "200+", label: t.impactStudents, icon: BookOpen, color: "text-blue-400" },
              { val: "50+", label: t.impactCamps, icon: Building2, color: "text-indigo-400" },
              { val: "100+", label: t.impactVolunteers, icon: Heart, color: "text-rose-400" },
              { val: "7+", label: t.impactYears, icon: Clock, color: "text-emerald-400" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition group"
              >
                <div className="mx-auto w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold leading-tight">{stat.val}</div>
                <div className="text-[11.5px] text-slate-400 mt-1 uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ===================== CHAIRMAN SECTION ===================== */}
        <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf4ee 0%, #fff9f5 50%, #f8faff 100%)" }}>

          {/* Background accents */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: "#C35214" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(#C35214 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">

            {/* Section label */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-4" style={{ background: "#fff3ee", color: "#C35214", borderColor: "#f5c9b0" }}>
                <UserCheck className="w-3.5 h-3.5" />
                <span>Chairman's Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                A Legacy of Care and Action
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT: Chairman Image */}
              <div className="relative flex justify-center">
                <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[400px] lg:h-[400px]">
                  {/* Main photo */}
                  <div className="w-full h-full overflow-hidden border-8 border-white shadow-2xl relative">
                    <Image
                      src={IMAGES.chairman}
                      alt={t.chairmanName}
                      fill
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Est. badge */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white" style={{ background: "#C35214" }}>
                    <span className="text-[8px] uppercase font-bold text-orange-200 tracking-wider">Est.</span>
                    <span className="text-base font-black text-white leading-tight">2019</span>
                  </div>

                  {/* Name card */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white rounded-2xl px-5 py-2.5 shadow-xl border border-orange-100 text-center">
                    <span className="block text-sm font-extrabold text-slate-900">{t.chairmanName}</span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: "#C35214" }}>{t.chairmanTitle}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Quote + Content */}
              <div className="lg:pl-6">
                {/* Big quote */}
                <div className="relative mb-8">
                  <span className="absolute -top-6 -left-4 text-7xl font-serif leading-none select-none opacity-15" style={{ color: "#C35214" }}>&ldquo;</span>
                  <blockquote
                    className="relative z-10 text-lg sm:text-xl font-semibold leading-relaxed pl-4 border-l-4 py-2"
                    style={{ color: "#1e293b", borderColor: "#C35214" }}
                  >
                    {t.chairmanQuote}
                  </blockquote>
                  <span className="absolute -bottom-6 right-0 text-7xl font-serif leading-none select-none opacity-15 rotate-180" style={{ color: "#C35214" }}>&ldquo;</span>
                </div>

                {/* Body text */}
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  <p>
                    Late Popatbhai Premjibhai Maniya lived with a profound belief in the intrinsic value of every human life. He believed that no child should be denied access to schooling, and no citizen should struggle without proper medical support.
                  </p>
                  <p>
                    Working directly within Surat and broad rural belts across Western India, we establish structured, audited scholarships for outstanding low-income students and drive diagnostic assemblies to identify health ailments early.
                  </p>
                </div>

                {/* 3 highlight cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "10K+", label: "Lives Impacted", icon: Heart },
                    { val: "200+", label: "Students Aided", icon: BookOpen },
                    { val: "50+", label: "Camps Held", icon: Activity },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl p-3 text-center border border-orange-100 bg-white shadow-sm">
                      <div className="w-8 h-8 rounded-xl mx-auto mb-2 flex items-center justify-center" style={{ background: "#fff3ee" }}>
                        <item.icon className="w-4 h-4" style={{ color: "#C35214" }} />
                      </div>
                      <span className="block text-base font-extrabold text-slate-900">{item.val}</span>
                      <span className="block text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FOCUS AREAS */}
        {/* ===================== PILLARS SECTION ===================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-4" style={{ background: "#fff3ee", color: "#C35214", borderColor: "#f5c9b0" }}>

                <span>SOCIETY WELFARE MATTERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3 text-[#C35214]">
                Our Structural{" "}
                <span className="text-[#C35214]">Pillars</span> of Care
              </h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                We prioritize sustainable, direct-reach social care activities based
                on critical civic development paradigms.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((item, i) => {
                const a = accentMap[item.accent];
                const isHovered = hovered === i;

                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`
                  group relative rounded-2xl p-5 border bg-white
                  transition-all duration-300 cursor-default overflow-hidden
                  ${a.border} ${a.hoverBorder}
                  ${isHovered ? "-translate-y-1 shadow-md" : "shadow-sm"}
                `}
                  >
                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${a.iconBg}`}
                      >
                        <item.icon className={`w-5 h-5 ${a.icon}`} />
                      </div>
                      <span
                        className={`
                      text-3xl font-black leading-none select-none
                      transition-opacity duration-200
                      ${a.num}
                      ${isHovered ? "opacity-20" : "opacity-10"}
                    `}
                      >
                        {item.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`
                    text-xs leading-relaxed transition-colors duration-200
                    ${isHovered ? "text-slate-500" : "text-slate-400"}
                  `}
                    >
                      {item.desc}
                    </p>

                    {/* Bottom accent bar */}
                    <div
                      className={`
                    absolute bottom-0 left-0 h-0.5 rounded-none
                    transition-all duration-500
                    ${a.bar}
                    ${isHovered ? "w-full" : "w-0"}
                  `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>




        {/* ===================== PROJECTS SECTION ===================== */}

        <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #fafafa 0%, #fff7f3 100%)" }}>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20" style={{ background: "#C35214" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-[100px] opacity-40" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-14">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-4" style={{ background: "#fff3ee", color: "#C35214", borderColor: "#f5c9b0" }}>

                  <span>Impact Project</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  Our Leading <span style={{ color: "#C35214" }}>Strategic</span> Operations
                </h2>
              </div>

            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-7">
              {[
                {
                  title: "P.P. Maniya Merit Scholarship",
                  img: IMAGES.education,
                  impact: "200+ Students receiving tuition backing",
                  impactIcon: BookOpen,
                  desc: "A robust scholarship model targeting lower-income high performers in school and technical vocational institutions.",
                  amount: "1000",
                  message: "Supporting Educational Scholarships",
                  accentColor: "#C35214",
                },
                {
                  title: "Mega Diagnostic & Medical Camps",
                  img: IMAGES.medicalCamp,
                  impact: "5,000+ Screened for critical alignment checks",
                  impactIcon: Activity,
                  desc: "Mobilizing specialist doctors, modern testing reagents, and medicine modules to rural sectors around Surat.",
                  amount: "5000",
                  message: "Supporting Medical Camps",
                  accentColor: "#C35214",
                },
                {
                  title: "Food Security & Hunger Relief",
                  img: IMAGES.charityWelfare,
                  impact: "15,000+ Nutritious meals served this cycle",
                  impactIcon: Heart,
                  desc: "Providing staple grains, protein foods, and direct organic groceries support to daily labor zones and communities.",
                  amount: "2500",
                  message: "Supporting Community Relief",
                  accentColor: "#C35214",
                },
              ].map((prj, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl bg-white overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={prj.img}
                      alt={prj.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />




                    {/* Impact badge on image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                      <prj.impactIcon className="w-3.5 h-3.5 shrink-0" style={{ color: prj.accentColor }} />
                      <span className="text-[11px] font-semibold text-slate-800 line-clamp-1">{prj.impact}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    {/* Accent line */}
                    <div className="w-8 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16" style={{ background: prj.accentColor }} />

                    <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:transition-colors" style={{}}>
                      {prj.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">
                      {prj.desc}
                    </p>

                    {/* Donate button */}
                    <button
                      onClick={() => {
                        setDonationForm((prev: any) => ({ ...prev, amount: prj.amount, message: prj.message }));
                        navigateTo("donate");
                      }}
                      className="w-full py-3 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      style={{ background: `linear-gradient(135deg, #C35214` }}
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Support This Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigateTo("activities")}
                className="group flex items-center gap-2 mt-4 md:mt-0 font-bold text-sm px-5 py-2.5 rounded-xl border-2 transition-all hover:-translate-y-0.5"
                style={{ color: "#C35214", borderColor: "#C35214" }}
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="py-16 relative" style={{ background: "#0f172a" }}>
          <div className="max-w-7xl mx-auto px-4 relative z-10">

            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border mb-4"
                style={{ background: "#1e293b", color: "#C35214", borderColor: "#C3521440" }}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Regulatory Assurance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Transparency & Verified Credentials
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                We maintain absolute financial compliance matching statutory expectations for authorized NGOs in India.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Trust Registration",
                  code: "Reg No: E/22531/SURAT",
                  details: "Established under the Bombay Public Trusts Act, 1950. Operating with full state administrative authorizations.",
                  download: "Registration-Certificate.pdf",
                  icon: Building2,
                },
                {
                  title: "Section 12A Certification",
                  code: "ITBA/EXM/S/12A/2020",
                  details: "Permanent income tax exemption permit index validating institutional philanthropic status.",
                  download: "12A-Order-Exemption.pdf",
                  icon: Award,
                },
                {
                  title: "Section 80G Tax Exemption",
                  code: "ITBA/EXM/S/80G/28A",
                  details: "Authorizes our donors to claim standard deduction tax rebates under the Income Tax Act.",
                  download: "80G-Tax-Exempt-Certificate.pdf",
                  icon: ShieldCheck,
                },
                {
                  title: "PAN Registration",
                  code: "PAN: AALTP7522X",
                  details: "Formal Corporate PAN allocation for seamless banking accountability and compliant audits.",
                  download: "PAN-Card-Copy.pdf",
                  icon: UserCheck,
                },
                {
                  title: "Annual Compliance Audit 2025",
                  code: "Ledger: FY 2024–25",
                  details: "Full balance sheets and disbursement pathways signed by authorized external Chartered Accountants.",
                  download: "Annual-Audit-Report-2025.pdf",
                  icon: Activity,
                },
                {
                  title: "CSR Partnership Gateway",
                  code: "Reg No: CSR00031942",
                  details: "Permits public and private enterprises to deploy mandatory CSR reserves straight into our ventures.",
                  download: "CSR-1-Affiliation-Form.pdf",
                  icon: Users,
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl flex flex-col transition-all duration-200"
                  style={{
                    background: "#1e293b",
                    border: "0.5px solid #334155",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#C35214")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#334155")}
                >
                  {/* Top row: icon + verified badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "#C3521415" }}
                    >
                      <doc.icon className="w-4 h-4" style={{ color: "#C35214" }} />
                    </div>
                    <div className="flex items-center gap-1" style={{ color: "#34d399" }}>
                      <Check className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">Verified</span>
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-slate-100 text-sm font-medium mb-2 leading-snug">
                    {doc.title}
                  </p>

                  {/* Code pill */}
                  <span
                    className="inline-block font-mono text-[11px] font-semibold px-2 py-1 rounded-md mb-3 self-start"
                    style={{
                      color: "#C35214",
                      background: "#C3521412",
                      border: "0.5px solid #C3521430",
                    }}
                  >
                    {doc.code}
                  </span>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">
                    {doc.details}
                  </p>

                  {/* Download button */}
                  <button
                    onClick={() => setToastMessage(`Downloading ${doc.download}...`)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider px-3 py-2 rounded-lg self-start transition-all"
                    style={{
                      color: "#C35214",
                      background: "#C3521410",
                      border: "0.5px solid #C3521440",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#C3521425")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#C3521410")}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#fff3ee" }}>
          <div className="max-w-4xl mx-auto px-4 text-center">

            <Heart
              className="w-12 h-12 mx-auto mb-6"
              style={{ color: "#C35214", fill: "#C35214" }}
            />

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-slate-900 max-w-2xl mx-auto">
              Your Sincere Giving Powers Immediate Generational Upliftment
            </h2>

            <p className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "#7c4a2d" }}>
              Every single rupee translates to a student&apos;s clean workbook, life-saving geriatric care, or immediate disaster nutrition support.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigateTo("donate")}
                className="px-8 py-4 text-white font-medium text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all"
                style={{ background: "#C35214" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#a84310")}
                onMouseLeave={e => (e.currentTarget.style.background = "#C35214")}
              >
                Make Your Contribution Online
              </button>
              <button
                onClick={() => navigateTo("donate")}
                className="px-8 py-4 bg-white font-medium text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all"
                style={{ color: "#C35214", border: "1px solid #C35214" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#fff3ee")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
              >
                Become a Voluntary Pillar
              </button>
            </div>

          </div>
        </section>
      </div>
      <Footer lang={lang} navigateTo={navigateTo} setToastMessage={() => { }} />
    </>
  );
}
