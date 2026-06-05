"use client";

// pages/ActivitiesPage.tsx
import Image from "next/image";
import { BookOpen, Activity, Heart } from "lucide-react";
import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface ActivitiesPageProps {
  lang: Lang;
  navigateTo: (page: string) => void;
  setDonationForm: (fn: (prev: any) => any) => void;
}

export default function ActivitiesPage({
  lang,
  navigateTo,
  setDonationForm,
}: ActivitiesPageProps) {
  const t: DictType = DICTIONARY[lang];

  return (
    <>
      <Header
        lang={lang}
        navigateTo={navigateTo}
        currentPage="about"
        setLang={() => {}}
      />
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">
              WHAT WE DO
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1 mb-4">
              Focused Projects & Welfare Schemes
            </h1>
            <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4" />
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              All activities are designed with direct-reach validation under the
              strict supervision of our medical directors and board trustees.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 relative aspect-[4/3] w-full rounded-2xl bg-slate-100 overflow-hidden shadow-md">
                <Image
                  src={IMAGES.education}
                  fill
                  alt="Education"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-8">
                <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Education Upliftment Division</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Empowering Young Scholastic Dreamers
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  Education is the master key to breakthrough economic cycle
                  constraints. Late Popatbhai Premjibhai Maniya Trust operates
                  dedicated student assistance systems that clear hurdles for
                  low-income candidates across government and municipal school
                  circles.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      title: "Merit Scholarships",
                      desc: "Focusing on technical and engineering streams.",
                    },
                    {
                      title: "Scholastic Toolkits",
                      desc: "Free note-books, geometry boxes, and bags.",
                    },
                    {
                      title: "Target Mentoring",
                      desc: "Guidance seminars for final board studies.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-100"
                    >
                      <span className="block font-bold text-slate-900 text-sm">
                        {item.title}
                      </span>
                      <span className="block text-slate-500 text-xs mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setDonationForm((prev: any) => ({
                      ...prev,
                      amount: "1000",
                      message: "Supporting Educational Scholarships",
                    }));
                    navigateTo("donate");
                  }}
                  className="px-4 py-2 bg-[#EA580C] hover:bg-[#EA580C]/90 text-white font-bold text-xs uppercase rounded-xl transition"
                >
                  Support Underprivileged Students • ₹1,000
                </button>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 order-2 lg:order-1">
                <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <Activity className="w-4 h-4" />
                  <span>Healthcare Assistance Division</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Pristine Medical Diagnostic Camps & Medicine Banks
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  We believe that financial distress must never block basic
                  healthcare access. We organize routine wellness camps where
                  modern medical checks are offered completely complimentary to
                  rural residents.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      title: "Subsidized Diagnosis",
                      desc: "Assisting high-cost lab pathology bills.",
                    },
                    {
                      title: "Medicine Subsidies",
                      desc: "Complimentary distribution of critical items.",
                    },
                    {
                      title: "Cataract Screenings",
                      desc: "Free optical assemblies and standard glasses.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-100"
                    >
                      <span className="block font-bold text-slate-900 text-sm">
                        {item.title}
                      </span>
                      <span className="block text-slate-500 text-xs mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setDonationForm((prev: any) => ({
                      ...prev,
                      amount: "5000",
                      message: "Supporting Medical Camps",
                    }));
                    navigateTo("donate");
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase rounded-xl transition"
                >
                  Sponsor Medical Camp Day • ₹5,000
                </button>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2 relative aspect-[4/3] w-full rounded-2xl bg-slate-100 overflow-hidden shadow-md">
                <Image
                  src={IMAGES.medicalCamp}
                  fill
                  alt="Medical Camp"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 relative aspect-[4/3] w-full rounded-2xl bg-slate-100 overflow-hidden shadow-md">
                <Image
                  src={IMAGES.charityWelfare}
                  fill
                  alt="Community Welfare"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-8">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <Heart className="w-4 h-4 animate-pulse" />
                  <span>Community Nutrition & Relief</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Ensuring Basic Resource & Food Security
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  Late Popatbhai Premjibhai Maniya Trust drives direct
                  humanitarian aid assemblies that distribute bulk staples,
                  pulses, and dry organic assets directly into marginalized
                  sections in Saurashtra and Gujarat.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      title: "Nutritious Food Kits",
                      desc: "Grains, oil, lentils support packs.",
                    },
                    {
                      title: "Monsoon Security Aid",
                      desc: "Shelter components and immediate assets.",
                    },
                    {
                      title: "Clean Water Reach",
                      desc: "Setting temporary drinking water posts.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-100"
                    >
                      <span className="block font-bold text-slate-900 text-sm">
                        {item.title}
                      </span>
                      <span className="block text-slate-500 text-xs mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setDonationForm((prev: any) => ({
                      ...prev,
                      amount: "2500",
                      message: "Supporting Community Relief",
                    }));
                    navigateTo("donate");
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase rounded-xl transition"
                >
                  Sponsor Local Resource Kits • ₹2,500
                </button>
              </div>
            </div>
          </div>

          {/* Empowerment & Yoga */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: IMAGES.womenEmpower,
                tag: "Empowerment",
                tagColor: "text-rose-600",
                title: "Vocational Stitching Skill Center",
                desc: "Driving sewing technology sessions for women and daughters in rural blocks to foster financial confidence and independent business structures.",
              },
              {
                img: IMAGES.yogaCamp,
                tag: "Wellness & Mind",
                tagColor: "text-sky-600",
                title: "Yoga & Pranayama Wellness Retreats",
                desc: "Providing comprehensive state wellness guidance sessions, focusing on correct mental alignment, stress release, and traditional wellness guidelines.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="relative aspect-video w-full rounded-xl bg-slate-100 overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    fill
                    alt={item.title}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span
                  className={`${item.tagColor} font-bold text-xs uppercase tracking-widest block mb-1`}
                >
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
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
      <Footer lang={lang} navigateTo={navigateTo} setToastMessage={() => {}} />
    </>
  );
}