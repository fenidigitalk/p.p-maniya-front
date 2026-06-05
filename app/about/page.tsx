"use client";

// pages/AboutPage.tsx
import {
  Award,
  Users,
  ShieldCheck,
  Download,
  Heart,
  Check,
  UserCheck,
  Clock,
} from "lucide-react";
import { DICTIONARY, Lang, DictType } from "@/lib/constants";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface AboutPageProps {
  lang: Lang;
  navigateTo: (page: string) => void;
}

export default function AboutPage({ lang, navigateTo }: AboutPageProps) {
  const t = DICTIONARY[lang as keyof typeof DICTIONARY] ?? DICTIONARY.en;

  return (
    <>
      <Header
        lang={lang}
        navigateTo={navigateTo}
        currentPage="about"
        setLang={() => {}}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#C35214] text-lg">✦</span>
              <span className="text-[#C35214] text-[18px] font-bold uppercase tracking-widest">
                About Us
              </span>
              <span className="text-[#C35214] text-lg">✦</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">
              {t.trustName}
            </h1>

            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Late Popatbhai Premjibhai Maniya Trust was formed by the proud
              children and wider Gujarat lineage of स्व. पोपटभाई मनिया to create
              a self-sustaining social welfare organization.
            </p>
          </div>

          {/* Core Attributes */}
          <div className="grid md:grid-cols-4 gap-0 bg-white border border-slate-100 rounded-3xl shadow-sm mb-16 overflow-hidden">
            <div className="p-8">
              <span className="block text-[10px] uppercase tracking-widest text-[#C35214] font-bold mb-3">
                Registered Entity
              </span>
              <span className="block text-slate-900 font-bold text-sm leading-snug">
                Public Charitable & Educational Trust
              </span>
            </div>

            <div className="p-8 border-t md:border-t-0 md:border-l border-slate-100">
              <span className="block text-[10px] uppercase tracking-widest text-[#C35214] font-bold mb-3">
                Registered Office
              </span>
              <span className="block text-slate-900 font-bold text-sm leading-snug">
                {t.address}
              </span>
            </div>

            <div className="p-8 border-t md:border-t-0 md:border-l border-slate-100">
              <span className="block text-[10px] uppercase tracking-widest text-[#C35214] font-bold mb-3">
                Established Year
              </span>
              <span className="block text-slate-900 font-bold text-sm leading-snug">
                2019 (Surat Registry)
              </span>
            </div>

            <div className="p-8 border-t md:border-t-0 md:border-l border-slate-100">
              <span className="block text-[10px] uppercase tracking-widest text-[#C35214] font-bold mb-3">
                Area of Services
              </span>
              <span className="block text-slate-900 font-bold text-sm leading-snug">
                Gujarat & Sovereign Indian Territories
              </span>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="flex flex-col gap-16 mb-16">
            {/* Our Mission - text left, image right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  To establish direct-reach educational supports, verified
                  health diagnostics camps, and disaster relief activities that
                  alleviate structural hurdles for impoverished and marginalized
                  sections across Surat, Saurashtra, and broader communities.
                </p>
                {/* Highlight box */}
                <div className="flex items-center gap-4 bg-[#f1d8c9] rounded-2xl p-5">
                  <div className="w-12 h-12 rounded-xl bg-[#C35214] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-white/60" />
                  </div>
                  <p className="text-[#C35214] text-sm font-semibold leading-relaxed">
                    Empowering impoverished communities through education,
                    healthcare & disaster relief.
                  </p>
                </div>
              </div>

              {/* Right - Images */}
              <div className="grid grid-cols-2 gap-3 h-80">
                <div className="rounded-2xl bg-slate-200 overflow-hidden row-span-2">
                  <div className="w-full h-full bg-gradient-to-br from-[#C35214]/20 to-[#C35214]/5 flex items-center justify-center">
                    <img
                      src="/mission_img3.jpeg"
                      alt="charity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                    <img
                      src="/mission_img1.jpeg"
                      alt="healthcare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                    <img
                      src="/mission_img2.jpeg"
                      alt="charity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Vision - image left, text right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Images */}
              <div className="grid grid-cols-2 gap-3 h-80">
                <div className="rounded-2xl bg-slate-200 overflow-hidden row-span-2">
                  <div className="w-full h-full bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/5 flex items-center justify-center">
                    <img
                      src="/vision_img1.jpeg"
                      alt="Community"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                    <img
                      src="/vision_img2.jpeg"
                      alt="Donation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                    <img
                      src="/vision_img3.jpeg"
                      alt="welfare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Text */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  To design a robustly educated, completely healthy,
                  self-sufficient, and economically empowered local society
                  where every citizen enjoys immediate access to clean wellness
                  guidelines and merit student fellowships.
                </p>
                {/* Highlight box */}
                <div className="flex items-center gap-4 bg-[#f1d8c9] rounded-2xl p-5">
                  <div className="w-12 h-12 rounded-xl bg-[#C35214] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-white/60" />
                  </div>
                  <p className="text-[#C35214] text-sm font-semibold leading-relaxed">
                    Building a self-sufficient, empowered society with access to
                    wellness & education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          
          <div className="mb-16">
            <h2 className="text-xl sm:text-[28px] font-bold text-slate-950 mb-10 text-center">
              Our Core Operating Values
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  title: "Integrity",
                  desc: "Absolute honesty in fund allocation",
                  icon: ShieldCheck,
                  color: "#C35214",
                },
                {
                  title: "Transparency",
                  desc: "100% public audited ledger accounts",
                  icon: Download,
                  color: "#C35214",
                },
                {
                  title: "Compassion",
                  desc: "Placing human welfare in the center",
                  icon: Heart,
                  color: "#C35214",
                },
                {
                  title: "Accountability",
                  desc: "Tracing impact itemization cleanly",
                  icon: Check,
                  color: "#C35214",
                },
                {
                  title: "Service",
                  desc: "Voluntary selflessness as progress",
                  icon: UserCheck,
                  color: "#C35214",
                },
                {
                  title: "Equality",
                  desc: "Zero bias based on creed or zone",
                  icon: Award,
                  color: "#C35214",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  {/* Decorative dots - top left */}
                  <span className="absolute top-3 left-3 text-[#C35214] opacity-30 text-xs leading-none select-none">
                    ✦
                  </span>
                  <span className="absolute top-5 left-6 text-[#C35214] opacity-20 text-[8px] leading-none select-none">
                    ✦
                  </span>

                  {/* Decorative dots - bottom right */}
                  <span className="absolute bottom-3 right-3 text-[#C35214] opacity-30 text-xs leading-none select-none">
                    ✦
                  </span>
                  <span className="absolute bottom-5 right-6 text-[#C35214] opacity-20 text-[8px] leading-none select-none">
                    ✦
                  </span>

                  {/* Icon */}
                  <div className="mb-5 mt-2">
                    <val.icon
                      className="w-10 h-10"
                      style={{ color: val.color }}
                      strokeWidth={1.2}
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-px bg-slate-200 mb-4" />

                  {/* Title */}
                  <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                    {val.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-slate-400 text-[13px] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-[28px] font-bold text-slate-950 mb-12 text-center">
              Our Journey & Expansion Timeline
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Center vertical line - solid, continuous */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />

              {[
                {
                  year: "2019",
                  title: "Trust Formation",
                  desc: "Established in memory of Popatbhai P. Maniya to institutionalize local family charity work into a registered Gujarat state public fund entity.",
                  icon: "🏛️",
                  side: "left",
                },
                {
                  year: "2020",
                  title: "Merit Scholarship Initiative",
                  desc: "Formulated the student tuition assistance draft, supporting the first batch of 50 low-income scholars during general economic lockdowns.",
                  icon: "🎓",
                  side: "right",
                },
                {
                  year: "2021",
                  title: "Healthcare Aid Launch",
                  desc: "Affiliated with partner medical diagnostic labs in Surat to subsidize oncology and primary testing bills for underprivileged cases.",
                  icon: "🏥",
                  side: "left",
                },
                {
                  year: "2022",
                  title: "State Welfare Expansions",
                  desc: "Rolled out persistent food rations support across 15 high-need communities and organized direct health assemblies.",
                  icon: "🤝",
                  side: "right",
                },
                {
                  year: "2024",
                  title: "Specialist Medical Camps",
                  desc: "Incorporated cardiologist and ophthalmologist specialist pools, providing complimentary cataract operations with corporate backing.",
                  icon: "💊",
                  side: "left",
                },
                {
                  year: "2026",
                  title: "Empowering Next-Gen Futures",
                  desc: "Aiming to build dedicated diagnostic clinics and vocational computer programming arrays for rural students.",
                  icon: "🚀",
                  side: "right",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex mb-0 last:mb-0 ${item.side === "right" ? "justify-end" : "justify-start"}`}
                >
                  {/* Card side */}
                  <div
                    className={`w-[45%] ${item.side === "left" ? "pr-0" : "pl-0"}`}
                  >
                    {/* Year pill */}
                    <div
                      className={`flex mb-4  ${item.side === "left" ? "justify-end" : "justify-start"}`}
                    >
                      <div className="inline-flex items-center border border-[#C35214]/30 bg-[#FEF0E8] rounded-full px-4 py-1.5 shadow-sm">
                        <span className="text-sm font-semibold text-[#C35214]">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-[16px] font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer lang={lang} navigateTo={navigateTo} setToastMessage={() => {}} />
    </>
  );
}
