// --------------------------------------------------------

"use client";

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
} from "lucide-react";
import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";

import Footer from "@/components/footer";
import Header from "@/components/header";

interface HomePageProps {
  lang: Lang;
  navigateTo: (page: string) => void;
  setDonationForm: (fn: (prev: any) => any) => void;
  setToastMessage: (msg: string) => void;
}

export default function HomePage({
  lang,
  navigateTo,
  setDonationForm,
  setToastMessage,
}: HomePageProps) {
  const t: DictType = DICTIONARY[lang];

  return (
    <>
      <Header
        lang={lang}
        navigateTo={navigateTo}
        currentPage="home"
        setLang={() => {}}
      />
      <div>
        {/* HERO */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 lg:py-[130px]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={IMAGES.hero}
              alt="Education support"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] z-0" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] z-0" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>
                  Registered Charity Portal • Government Act Compliant
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200"
              >
                {t?.tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed font-light"
              >
                {t?.subTagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => navigateTo("donate")}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-bold rounded-xl shadow-lg shadow-orange-600/35 hover:scale-105 transition flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>{t?.donateCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo("activities")}
                  className="px-6 py-3.5 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700/80 hover:bg-slate-700 hover:text-amber-300 transition flex items-center gap-1.5 text-sm sm:text-base"
                >
                  <span>{t?.knowWork}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo("donate")}
                  className="px-6 py-3.5 bg-slate-900/60 text-slate-200 font-semibold rounded-xl border border-white/10 hover:bg-slate-900 hover:text-amber-400 transition text-sm sm:text-base"
                >
                  {t?.beVolunteer}
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="bg-gradient-to-b from-slate-900 to-[#10172A] text-white py-12 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              {
                val: "10,000+",
                label: t?.impactLives,
                icon: Users,
                color: "text-amber-400",
              },
              {
                val: "500+",
                label: t?.impactMedical,
                icon: Activity,
                color: "text-orange-400",
              },
              {
                val: "200+",
                label: t?.impactStudents,
                icon: BookOpen,
                color: "text-blue-400",
              },
              {
                val: "50+",
                label: t?.impactCamps,
                icon: Building2,
                color: "text-indigo-400",
              },
              {
                val: "100+",
                label: t?.impactVolunteers,
                icon: Heart,
                color: "text-rose-400",
              },
              {
                val: "7+",
                label: t?.impactYears,
                icon: Clock,
                color: "text-emerald-400",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition group"
              >
                <div className="mx-auto w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {stat.val}
                </div>
                <div className="text-[11.5px] text-slate-400 mt-1 uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHAIRMAN MESSAGE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-25" />
                <div className="relative aspect-square w-full max-w-[400px] mx-auto rounded-2xl bg-slate-100 overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={IMAGES.chairman}
                    alt={t?.chairmanName}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-2xl p-4 shadow-xl z-10 text-center border-2 border-white max-w-[200px]">
                  <span className="block text-xs uppercase font-bold tracking-widest text-amber-100 mb-0.5">
                    ESTD
                  </span>
                  <span className="block text-2xl font-black text-white">
                    2019
                  </span>
                  <span className="block text-[10px] uppercase font-bold text-slate-100 leading-tight">
                    By P. P. Maniya Family
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-1 text-[#EA580C] text-xs font-bold tracking-widest uppercase mb-2">
                  <UserCheck className="w-4 h-4" />
                  <span>CHAIRMAN&apos;S DESK</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  A Legacy of Care and Action
                </h2>
                <div className="relative mb-6">
                  <span className="absolute -top-8 -left-5 text-slate-100 text-8xl font-serif select-none z-0 leading-none">
                    &ldquo;
                  </span>
                  <blockquote className="relative z-10 text-[17px] sm:text-[19px] italic font-medium text-slate-800 leading-relaxed pl-2">
                    {t?.chairmanQuote}
                  </blockquote>
                </div>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Late Popatbhai Premjibhai Maniya lived with a profound
                    belief in the intrinsic value of every human life. He
                    believed that no child should be denied access to schooling,
                    and no citizen should struggle without proper medical
                    support.
                  </p>
                  <p>
                    Working directly within Surat and broad rural belts across
                    Western India, we establish structured, audited scholarships
                    for outstanding low-income students and drive diagnostic
                    assemblies to identify health ailments early.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-md font-bold text-slate-900">
                      {t?.chairmanName}
                    </span>
                    <span className="block text-xs uppercase font-extrabold tracking-widest text-[#EA580C] mt-0.5">
                      {t?.chairmanTitle}
                    </span>
                  </div>
                  <div className="text-right text-slate-300 font-serif text-xl italic select-none">
                    B. P. Maniya
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                SOCIETY WELFARE MATTERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3">
                Our Structural Pillars of Care
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We prioritize sustainable, direct-reach social care activities
                based on critical civic development paradigms.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                {
                  title: "Education Support",
                  desc: "Merit-cum-Means scholarships, free schooling toolkits, uniforms, and text-packs for rural children.",
                  icon: BookOpen,
                  color:
                    "border-t-4 border-t-amber-500 text-amber-600 bg-amber-500/5 hover:bg-amber-500/10",
                },
                {
                  title: "Medical Assistance",
                  desc: "Patient treatment subsidies, medicine supplies support, diagnostic assistance, and clinical hospital aid.",
                  icon: Activity,
                  color:
                    "border-t-4 border-t-blue-500 text-blue-600 bg-blue-500/5 hover:bg-blue-500/10",
                },
                {
                  title: "Community Welfare",
                  desc: "Direct food distribution, clean local resources access, and social relief activities in high-need rural areas.",
                  icon: Heart,
                  color:
                    "border-t-4 border-t-emerald-500 text-emerald-600 bg-emerald-500/5 hover:bg-emerald-500/10",
                },
                {
                  title: "Women Empowerment",
                  desc: "Vocational tailoring skills, basic financial literacy workshops, and self-reliance business mentorship.",
                  icon: Users,
                  color:
                    "border-t-4 border-t-rose-500 text-rose-600 bg-rose-500/5 hover:bg-rose-500/10",
                },
                {
                  title: "Youth Development",
                  desc: "Digital systems literacy programs, vocational computer classes, and employment search guidance.",
                  icon: BookOpen,
                  color:
                    "border-t-4 border-t-indigo-500 text-indigo-600 bg-indigo-500/5 hover:bg-indigo-500/10",
                },
                {
                  title: "Emergency Relief",
                  desc: "Rapid monsoon/disaster ration supplies distribution and immediate emergency aid assemblies.",
                  icon: Heart,
                  color:
                    "border-t-4 border-t-red-500 text-red-600 bg-red-500/5 hover:bg-red-500/10",
                },
                {
                  title: "Skill Development",
                  desc: "Professional workshop opportunities and practical industrial artisan training.",
                  icon: Building2,
                  color:
                    "border-t-4 border-t-cyan-500 text-cyan-600 bg-cyan-500/5 hover:bg-cyan-500/10",
                },
                {
                  title: "Senior Citizen Support",
                  desc: "Geriatric screening camps, complimentary visual testing, reading glasses, and health checks.",
                  icon: HeartHandshake,
                  color:
                    "border-t-4 border-t-violet-500 text-violet-600 bg-violet-500/5 hover:bg-violet-500/10",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-slate-100 ${item.color}`}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
              <div>
                <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">
                  IMPACT PROJECTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Our Leading Strategic Operations
                </h2>
              </div>
              <button
                onClick={() => navigateTo("activities")}
                className="text-amber-600 hover:text-[#EA580C] font-semibold text-sm flex items-center gap-1 mt-4 md:mt-0 transition"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "P.P. Maniya Merit Scholarship",
                  tag: "Education",
                  img: IMAGES.education,
                  impact: "200+ Students receiving tuition backing",
                  desc: "A robust scholarship model targeting lower-income high performers in school and technical vocational institutions.",
                  amount: "1000",
                  message: "Supporting Educational Scholarships",
                },
                {
                  title: "Mega Diagnostic & Medical Camps",
                  tag: "Healthcare",
                  img: IMAGES.medicalCamp,
                  impact: "5,000+ Screened for critical alignment checks",
                  desc: "Mobilizing specialist doctors, modern testing reagents, and medicine modules to rural sectors around Surat.",
                  amount: "5000",
                  message: "Supporting Medical Camps",
                },
                {
                  title: "Food Security & Hunger Relief",
                  tag: "Welfare",
                  img: IMAGES.charityWelfare,
                  impact: "15,000+ Nutritious meals served this cycle",
                  desc: "Providing staple grains, protein foods, and direct organic groceries support to daily labor zones and communities.",
                  amount: "2500",
                  message: "Supporting Community Relief",
                },
              ].map((prj, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white overflow-hidden border border-slate-100 shadow-md flex flex-col h-full hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prj.img}
                      alt={prj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#111827]/85 backdrop-blur-sm text-amber-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {prj.tag}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1 mb-2 group-hover:text-[#EA580C] transition-colors">
                      {prj.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                      {prj.desc}
                    </p>
                    <div className="mt-auto bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{prj.impact}</span>
                    </div>
                    <button
                      onClick={() => {
                        setDonationForm((prev: any) => ({
                          ...prev,
                          amount: prj.amount,
                          message: prj.message,
                        }));
                        navigateTo("donate");
                      }}
                      className="w-full py-2.5 bg-slate-900 hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors duration-200"
                    >
                      Support This Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="py-16 bg-slate-900 text-white relative">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest">
                REGULATORY ASSURANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white mb-3">
                Transparency & Verified Credentials
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                We maintain absolute financial compliance matching statutory
                expectations for authorized NGOs in India.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Trust Registration",
                  code: "Reg No: E/22531/SURAT",
                  details:
                    "Established under the Bombay Public Trusts Act, 1950. Operating with full state administrative authorizations.",
                  download: "Registration-Certificate.pdf",
                },
                {
                  title: "Section 12A Certification",
                  code: "Order No: ITBA/EXM/S/12A/2020",
                  details:
                    "Permanent income tax exemption permit index validating institutional philanthropic status.",
                  download: "12A-Order-Exemption.pdf",
                },
                {
                  title: "Section 80G Tax Exemption",
                  code: "Order No: ITBA/EXM/S/80G/28A",
                  details:
                    "Authorizes our donors to claim standard deduction tax rebates under the Income Tax Act.",
                  download: "80G-Tax-Exempt-Certificate.pdf",
                },
                {
                  title: "PAN Registration Desk",
                  code: "PAN: AALTP7522X",
                  details:
                    "Formal Corporate PAN allocation for seamless banking accountability and compliant audits.",
                  download: "PAN-Card-Copy.pdf",
                },
                {
                  title: "Annual Compliance Audit 2025",
                  code: "Audited Ledger: FY 2024-25",
                  details:
                    "Full balance sheets and disbursement pathways signed by authorized external Chartered Accountants.",
                  download: "Annual-Audit-Report-2025.pdf",
                },
                {
                  title: "CSR Partnership Gateway",
                  code: "Reg No: CSR00031942",
                  details:
                    "Permits public and private enterprises to deploy mandatory CSR reserves straight into our ventures.",
                  download: "CSR-1-Affiliation-Form.pdf",
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-white uppercase">
                        {doc.title}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="block text-xs font-mono text-amber-400 font-semibold mb-2">
                      {doc.code}
                    </span>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {doc.details}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setToastMessage(`Downloading ${doc.download}...`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-500 hover:text-amber-400 font-bold uppercase tracking-wider self-start mt-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Verified Document</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Heart className="w-12 h-12 fill-white animate-pulse mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Your Sincere Giving Powers Immediate Generational Upliftment
            </h2>
            <p className="text-amber-50 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Every single rupee translates to a student&apos;s clean workbook,
              life-saving geriatric care, or immediate disaster nutrition
              support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigateTo("donate")}
                className="px-8 py-4 bg-slate-950 text-[#F59E0B] hover:bg-slate-900 font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition shadow-xl"
              >
                Make Your Contribution Online
              </button>
              <button
                onClick={() => navigateTo("donate")}
                className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base tracking-wider uppercase rounded-xl transition shadow-md"
              >
                Become a Voluntary Pillar
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer lang={lang} navigateTo={navigateTo} setToastMessage={() => {}} />
    </>
  );
}
