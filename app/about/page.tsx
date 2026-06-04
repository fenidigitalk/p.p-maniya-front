"use client";

// pages/AboutPage.tsx
import { Award, Users, ShieldCheck, Download, Heart, Check, UserCheck, Clock } from "lucide-react";
import { DICTIONARY, Lang, DictType } from "@/lib/constants";

interface AboutPageProps {
  lang: Lang;
  navigateTo: (page: string) => void;
}

export default function AboutPage({ lang, navigateTo }: AboutPageProps) {
  const t: DictType = DICTIONARY[lang];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">ABOUT US</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1 mb-4">{t.trustName}</h1>
          <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4" />
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
            Late Popatbhai Premjibhai Maniya Trust was formed by the proud children and wider Gujarat lineage of स्व. पोपटभाई मनिया to create a self-sustaining social welfare organization.
          </p>
        </div>

        {/* Core Attributes */}
        <div className="grid md:grid-cols-4 gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner mb-16">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Registered Entity</span>
            <span className="block text-slate-950 font-bold text-sm sm:text-base leading-tight">Public Charitable & Educational Trust</span>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Registered Office</span>
            <span className="block text-slate-600 font-bold text-xs sm:text-sm leading-relaxed select-all">{t.address}</span>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Established Year</span>
            <span className="block text-slate-950 font-bold text-sm sm:text-base">2019 (Surat Registry)</span>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Area of Services</span>
            <span className="block text-slate-950 font-bold text-sm sm:text-base">Gujarat & Sovereign Indian Territories</span>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-[#EA580C]/5 border border-[#EA580C]/25 shadow-md flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950 mb-2">Our Mission</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To establish direct-reach educational supports, verified health diagnostics camps, and disaster relief activities that alleviate structural hurdles for impoverished and marginalized sections across Surat, Saurashtra, and broader communities.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/20 shadow-md flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950 mb-2">Our Vision</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To design a robustly educated, completely healthy, self-sufficient, and economically empowered local society where every citizen enjoys immediate access to clean wellness guidelines and merit student fellowships.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 text-center">Our Core Operating Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { title: "Integrity", desc: "Absolute honesty in fund allocation", icon: ShieldCheck, border: "border-t-[#EA580C]" },
              { title: "Transparency", desc: "100% public audited ledger accounts", icon: Download, border: "border-t-blue-600" },
              { title: "Compassion", desc: "Placing human welfare in the center", icon: Heart, border: "border-t-rose-500" },
              { title: "Accountability", desc: "Tracing impact itemization cleanly", icon: Check, border: "border-t-emerald-500" },
              { title: "Service", desc: "Voluntary selflessness as progress", icon: UserCheck, border: "border-t-indigo-500" },
              { title: "Equality", desc: "Zero bias based on creed or zone", icon: Award, border: "border-t-amber-500" },
            ].map((val, idx) => (
              <div key={idx} className={`p-4 rounded-xl bg-slate-50 border border-slate-100 border-t-4 text-center ${val.border}`}>
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-2">
                  <val.icon className="w-4 h-4 text-slate-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{val.title}</h3>
                <p className="text-slate-500 text-[11px] leading-snug">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-950 mb-10 text-center">Our Journey & Expansion Timeline</h2>
          <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
            <div className="sm:hidden absolute left-0.5 h-full w-0.5 bg-slate-200" />
            {[
              { year: "2019", title: "Trust Formation", desc: "Established in memory of Popatbhai P. Maniya to institutionalize local family charity work into a registered Gujarat state public fund entity." },
              { year: "2020", title: "Merit Scholarship Initiative", desc: "Formulated the student tuition assistance draft, supporting the first batch of 50 low-income scholars during general economic lockdowns." },
              { year: "2021", title: "Healthcare Aid Launch", desc: "Affiliated with partner medical diagnostic labs in Surat to subsidize oncology and primary testing bills for underprivileged cases." },
              { year: "2022", title: "State Welfare Expansions", desc: "Rolled out persistent food rations support across 15 high-need communities and organized direct health assemblies." },
              { year: "2024", title: "Specialist Medical Camps Expansion", desc: "Incorporated cardiologist and ophthalmologist specialist pools, providing complimentary cataract operations with corporate backing." },
              { year: "2026", title: "Empowering Next-Gen Futures", desc: "Aiming to build dedicated diagnostic clinics and vocational computer programming arrays for rural students." },
            ].map((item, index) => (
              <div key={index} className={`relative sm:flex items-center justify-between mb-8 sm:mb-12 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                <div className="absolute left-[-22px] sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 rounded-full bg-[#EA580C] border-4 border-white shadow-md z-10" />
                <div className="hidden sm:block w-[45%]" />
                <div className="w-full sm:w-[45%] bg-white p-5 rounded-2xl shadow-md border border-slate-100 hover:border-amber-300 transition-colors">
                  <span className="inline-block bg-[#EA580C]/10 text-[#EA580C] font-bold text-xs px-2.5 py-1 rounded-md mb-2">{item.year}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}