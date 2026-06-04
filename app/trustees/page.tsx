"use client";

// pages/TrusteesPage.tsx
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";

interface TrusteesPageProps {
  lang: Lang;
  navigateTo: (page: string) => void;
}

export default function TrusteesPage({ lang, navigateTo }: TrusteesPageProps) {
  const t: DictType = DICTIONARY[lang];

  const trustees = [
    { name: "Shri Batukbhai P. Maniya", title: "Chairman & Founder Trustee", img: IMAGES.chairman, bio: "Eminent Surat diamond entrepreneur and philanthropist who established the organization to institutionalize corporate and family-level rural care." },
    { name: "Shri Mansukhbhai P. Maniya", title: "Vice Chairman", img: IMAGES.trustee2, bio: "Active civic champion leading our Saurashtra community expansion programs and managing direct agricultural development aid." },
    { name: "Dr. Rasikbhai B. Maniya", title: "Secretary & Medical Superintendent", img: IMAGES.trustee3, bio: "Dedicated clinical physician heading pathology team rosters, medicine purchases, and organizing critical testing camps." },
    { name: "Smt. Tinaben M. Maniya", title: "Joint Treasurer & Trustee", img: IMAGES.trustee4, bio: "Grassroots mobilizer heading rural outreach modules, basic skill seminars, and supervising direct women tailoring hubs." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">GOVERNANCE</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1 mb-4">Board of Trustees & Compliance Core</h1>
          <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4" />
          <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
            Governed purely by the descendants and eminent medical partners who carry forward Sw. Popatbhai Maniya&apos;s life dream of social equity.
          </p>
        </div>

        {/* Trustees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustees.map((member, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-150 p-6 flex flex-col items-center text-center group hover:bg-[#EA580C]/5 hover:border-amber-400 transition-all">
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <Image src={member.img} alt={member.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors">{member.name}</h3>
              <span className="block text-xs uppercase font-extrabold text-[#EA580C] mt-1 mb-3">{member.title}</span>
              <p className="text-slate-600 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Org Chart */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-10 text-center uppercase tracking-wide">ORGANIZATIONAL MATRIX</h2>
          <div className="flex flex-col items-center">
            <div className="px-6 py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white rounded-xl shadow-md font-bold text-center w-full max-w-xs z-10">
              {t.chairmanName}
              <span className="block text-[10px] uppercase font-bold text-amber-100">{t.chairmanTitle}</span>
            </div>
            <div className="w-0.5 h-8 bg-slate-300" />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="block font-bold text-slate-800 text-sm">Shri Mansukhbhai P. Maniya</span>
                <span className="block text-[#EA580C] text-[10px] uppercase font-extrabold mt-0.5">Vice Chairman</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 col-span-2 lg:col-span-1">
                <span className="block font-bold text-slate-800 text-sm">Dr. Rasikbhai B. Maniya</span>
                <span className="block text-[#EA580C] text-[10px] uppercase font-extrabold mt-0.5">Secretary & Medical Director</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="block font-bold text-slate-800 text-sm">Smt. Tinaben M. Maniya</span>
                <span className="block text-[#EA580C] text-[10px] uppercase font-extrabold mt-0.5">Joint Treasurer</span>
              </div>
            </div>
            <div className="w-0.5 h-8 bg-slate-300" />
            <div className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider">
              Volunteers, Medical Staff & Field Activists Network (100+)
            </div>
          </div>
        </div>

        {/* Governance Summary */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-bold text-slate-950 mb-3">Governance Code</h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            We comply fully with Gujarati Public Trust norms, keeping separate accounting registries for individual program receipts. Every local donor receives formal printed invoice receipts with standard 80G tax rebate certificate stamps. Audit ledgers are submitted annually to administrative and finance bureaus.
          </p>
          <button
            onClick={() => navigateTo("home")}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#EA580C] hover:text-amber-600 transition">
            <ShieldCheck className="w-4 h-4" />
            <span>View Trust Compliances Desk</span>
          </button>
        </div>

      </div>
    </section>
  );
}