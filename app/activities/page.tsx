"use client";

// pages/ActivitiesPage.tsx
import Image from "next/image";
import {
  BookOpen,
  Activity,
  Heart,
  Award,
  UserCheck,
  Users,
  ShieldCheck,
} from "lucide-react";
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
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#C35214] text-lg">✦</span>
              <span className="text-[#C35214] text-[18px] font-bold uppercase tracking-widest">
                WHAT WE DO
              </span>
              <span className="text-[#C35214] text-lg">✦</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">
              Focused Projects & Welfare Schemes
            </h1>

            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              All activities are designed with direct-reach validation under the
              strict supervision of our medical directors and board trustees.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[320px]">
                <Image
                  src="/activities_img2.jpeg"
                  fill
                  alt="Medical Camp"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-100 text-[10px] font-semibold uppercase tracking-wider">
                    Education Division
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    Empowering Young Scholastic Dreamers
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Education is the master key to breakthrough economic cycle
                    constraints. Late Popatbhai Premjibhai Maniya Trust operates
                    dedicated student assistance systems that clear hurdles for
                    low-income candidates across government and municipal school
                    circles.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      {
                        title: "Merit Scholarships",
                        desc: "Technical and engineering streams.",
                        icon: Award,
                      },
                      {
                        title: "Scholastic Toolkits",
                        desc: "Free notebooks, geometry boxes, bags.",
                        icon: BookOpen,
                      },
                      {
                        title: "Target Mentoring",
                        desc: "Guidance seminars for board studies.",
                        icon: UserCheck,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-amber-50 border border-amber-100 rounded-2xl p-3"
                      >
                        <item.icon className="w-5 h-5 text-amber-700 mb-2" />
                        <p className="text-xs font-bold text-amber-900 mb-1">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#C35214] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setDonationForm((prev: any) => ({
                        ...prev,
                        amount: "1000",
                        message: "Supporting Educational Scholarships",
                      }));
                      navigateTo("donate");
                    }}
                    className="flex items-center gap-2 px-5 py-3 bg-[#C35214] hover:bg-[#C35214]/90 text-white font-bold text-xs uppercase tracking-wide rounded-2xl transition shadow-md"
                  >
                    Support Underprivileged Students
                    <span className="bg-white/20 px-2 py-0.5 rounded-lg">
                      ₹1,000
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="bg-white p-8 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    Pristine Medical Diagnostic Camps & Medicine Banks
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    We believe that financial distress must never block basic
                    healthcare access. We organize routine wellness camps where
                    modern medical checks are offered completely complimentary
                    to rural residents.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      {
                        title: "Subsidized Diagnosis",
                        desc: "Assisting high-cost lab pathology bills.",
                        icon: Activity,
                      },
                      {
                        title: "Medicine Subsidies",
                        desc: "Complimentary distribution of critical items.",
                        icon: Heart,
                      },
                      {
                        title: "Cataract Screenings",
                        desc: "Free optical assemblies and standard glasses.",
                        icon: ShieldCheck,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-amber-50  border border-amber-100 rounded-2xl p-3"
                      >
                        <item.icon className="w-5 h-5 text-amber-700 mb-2" />
                        <p className="text-xs font-bold text-amber-900 mb-1">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#C35214] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setDonationForm((prev: any) => ({
                        ...prev,
                        amount: "5000",
                        message: "Supporting Medical Camps",
                      }));
                      navigateTo("donate");
                    }}
                    className="flex items-center gap-2 px-5 py-3 bg-[#C35214] hover:bg-[#C35214]/90 text-white font-bold text-xs uppercase tracking-wide rounded-2xl transition shadow-md"
                  >
                    Sponsor Medical Camp Day
                    <span className="bg-white/20 px-2 py-0.5 rounded-lg">
                      ₹5,000
                    </span>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[320px] order-1 lg:order-2">
                <Image
                  src="/activities_img3.jpeg"
                  fill
                  alt="Medical Camp"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-100 text-[10px] font-semibold uppercase tracking-wider">
                    Healthcare Division
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[320px]">
                <Image
                  src="/activities_img4.jpeg"
                  fill
                  alt="Community Welfare"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-100 text-[10px] font-semibold uppercase tracking-wider">
                    Community Division
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    Ensuring Basic Resource & Food Security
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Late Popatbhai Premjibhai Maniya Trust drives direct
                    humanitarian aid assemblies that distribute bulk staples,
                    pulses, and dry organic assets directly into marginalized
                    sections in Saurashtra and Gujarat.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      {
                        title: "Nutritious Food Kits",
                        desc: "Grains, oil, lentils support packs.",
                        icon: Heart,
                      },
                      {
                        title: "Monsoon Security Aid",
                        desc: "Shelter components and immediate assets.",
                        icon: ShieldCheck,
                      },
                      {
                        title: "Clean Water Reach",
                        desc: "Setting temporary drinking water posts.",
                        icon: Users,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-amber-50 border border-amber-100 rounded-2xl p-3"
                      >
                        <item.icon className="w-5 h-5 text-amber-700 mb-2" />
                        <p className="text-xs font-bold text-amber-900 mb-1">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#C35214] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setDonationForm((prev: any) => ({
                        ...prev,
                        amount: "2500",
                        message: "Supporting Community Relief",
                      }));
                      navigateTo("donate");
                    }}
                    className="flex items-center gap-2 px-5 py-3 bg-[#C35214] hover:bg-[#C35214]/90 text-white font-bold text-xs uppercase tracking-wide rounded-2xl transition shadow-md"
                  >
                    Sponsor Local Resource Kits
                    <span className="bg-white/20 px-2 py-0.5 rounded-lg">
                      ₹2,500
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Empowerment & Yoga */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                img: "/activities_img5.jpeg",
                tag: "Empowerment",
                tagColor: "#be123c",
                title: "Vocational Stitching Skill Center",
                desc: "Driving sewing technology sessions for women and daughters in rural blocks to foster financial confidence and independent business structures.",
                stats: [
                  { label: "Women Trained", value: "500+" },
                  { label: "Villages", value: "12" },
                ],
              },
              {
                img: "/activities_img6.jpeg",
                tag: "Wellness & Mind",
                tagColor: "#0284c7",
                title: "Yoga & Pranayama Wellness Retreats",
                desc: "Providing comprehensive state wellness guidance sessions, focusing on correct mental alignment, stress release, and traditional wellness guidelines.",
                stats: [
                  { label: "Sessions Held", value: "80+" },
                  { label: "Participants", value: "2,000+" },
                ],
              },
            ].map((item, i) => (
              <div key={i} className="group">
                {/* Image - no card wrapper */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={item.img}
                    fill
                    alt={item.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    {item.stats.map((s, j) => (
                      <div
                        key={j}
                        className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2"
                      >
                        <p className="text-white font-extrabold text-sm">
                          {s.value}
                        </p>
                        <p className="text-white/70 text-[10px]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text - plain, no card */}
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: item.tagColor }}
                >
                  {item.tag}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
