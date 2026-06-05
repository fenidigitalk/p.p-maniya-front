"use client";

// pages/EventsPage.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Check, Play } from "lucide-react";
import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface EventsPageProps {
  lang: Lang;
  navigateTo: (page: string) => void;
}

const galleryItems = [
  {
    id: 1,
    category: "healthcare",
    url: IMAGES.medicalCamp,
    title: "Rural Multi-Specialty Health Camp",
  },
  {
    id: 2,
    category: "education",
    url: IMAGES.education,
    title: "Free Educational Kit Distribution",
  },
  {
    id: 3,
    category: "community",
    url: IMAGES.charityWelfare,
    title: "Surat Slum Food Security Drive",
  },
  {
    id: 4,
    category: "healthcare",
    url: IMAGES.yogaCamp,
    title: "Community Yoga & Pranayama Wellness Session",
  },
  {
    id: 5,
    category: "education",
    url: IMAGES.volunteerBoard,
    title: "Merit-cum-Means Scholarships Seminar",
  },
  {
    id: 6,
    category: "community",
    url: IMAGES.womenEmpower,
    title: "Vocational Tailoring Skill Training for Women",
  },
];

export default function EventsPage({ lang, navigateTo }: EventsPageProps) {
  const t: DictType = DICTIONARY[lang];
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [eventReg, setEventReg] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    event: "Mega Diagnostic & Medical Camp",
  });
  const [eventRegSuccess, setEventRegSuccess] = useState(false);
  const [eventRegId, setEventRegId] = useState("");

  const filteredGallery =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventReg.name || !eventReg.mobile) return;
    setEventRegId("PPMT-" + Math.floor(100000 + Math.random() * 900000));
    setEventRegSuccess(true);
  };

  return (
    <>
      <Header
        lang={lang}
        navigateTo={navigateTo}
        currentPage="events"
        setLang={() => {}}
      />
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">
              GALLERY & UPDATES
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1 mb-4">
              Latest Events & Media Archive
            </h1>
            <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4" />
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              Follow our direct operational milestones, volunteer camps, student
              gatherings, and browse our public service gallery.
            </p>
          </div>

          {/* Events + Registration */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* Events List */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="text-[#EA580C] w-5 h-5" />
                <span>Featured Operations & Events Schedule</span>
              </h2>

              {[
                {
                  day: "12",
                  month: "JUNE",
                  badge: "Upcoming Camp",
                  badgeColor: "bg-emerald-100 text-emerald-800",
                  title: "Specialized Geriatric Screening & Optical Camp",
                  desc: "Offering free ophthalmologist reviews, glaucoma assessments and distributing cataract reading assistance lenses in Surat municipal zones.",
                  location: "A/35, Rachna Society Compound, Varachha, Surat",
                  dateColor: "bg-amber-500/10 text-[#EA580C]",
                  opacity: "",
                },
                {
                  day: "24",
                  month: "AUG",
                  badge: "Scholarship Batch",
                  badgeColor: "bg-amber-100 text-amber-800",
                  title: "P.P. Maniya Merit Scholarship Distribution 2026",
                  desc: "Meeting selected high-school of Gujarat state and vocational institution candidates for tuition assistance check distributions.",
                  location: "Surat central civic auditorium hall",
                  dateColor: "bg-blue-500/10 text-blue-600",
                  opacity: "",
                },
                {
                  day: "18",
                  month: "MAY",
                  badge: "COMPLETED Event",
                  badgeColor: "bg-slate-100 text-slate-700",
                  title: "Pre-Monsoon Food Resource & Staple Security Drive",
                  desc: "Successfully deployed 3,400 dry rations packs to backward area workers and families ahead of high coastal weather seasons.",
                  location: "",
                  dateColor: "bg-slate-200 text-slate-600",
                  opacity: "opacity-75",
                },
              ].map((ev, i) => (
                <div
                  key={i}
                  className={`bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 ${ev.opacity}`}
                >
                  <div
                    className={`${ev.dateColor} font-extrabold rounded-xl px-4 py-3 flex flex-col justify-center items-center text-center shrink-0 w-16 self-start`}
                  >
                    <span className="block text-2xl leading-none">
                      {ev.day}
                    </span>
                    <span className="block text-[10px] uppercase font-bold tracking-widest mt-1">
                      {ev.month}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`inline-block ${ev.badgeColor} text-[9px] font-bold uppercase px-2 py-0.5 rounded mb-2`}
                    >
                      {ev.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {ev.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2">
                      {ev.desc}
                    </p>
                    {ev.location && (
                      <span className="block text-[11px] text-[#64748B] font-semibold">
                        Location: {ev.location}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md">
                <h2 className="text-lg font-bold text-slate-950 mb-2">
                  Event Guest Registration
                </h2>
                <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                  Reserve a complimentary diagnosis seat, join as a voluntary
                  guide or secure a delegate seat at scholarship award events.
                </p>

                {eventRegSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                    <Check className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                    <h3 className="text-md font-bold text-slate-900 mb-1">
                      Registration Complete!
                    </h3>
                    <p className="text-xs text-slate-600 mb-4">
                      Present this receipt code on arrival:
                    </p>
                    <span className="block font-mono bg-white border border-emerald-200 text-emerald-700 font-bold px-4 py-2 rounded-lg text-base tracking-wider mb-4 select-all">
                      {eventRegId}
                    </span>
                    <button
                      onClick={() => {
                        setEventRegSuccess(false);
                        setEventReg({
                          name: "",
                          mobile: "",
                          email: "",
                          city: "",
                          event: "Mega Diagnostic & Medical Camp",
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-900 underline"
                    >
                      Register another attendee
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={eventReg.name}
                        onChange={(e) =>
                          setEventReg({ ...eventReg, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={eventReg.mobile}
                          onChange={(e) =>
                            setEventReg({ ...eventReg, mobile: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="10 digit phone"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / Village
                        </label>
                        <input
                          type="text"
                          value={eventReg.city}
                          onChange={(e) =>
                            setEventReg({ ...eventReg, city: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g. Surat"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Event *
                      </label>
                      <select
                        value={eventReg.event}
                        onChange={(e) =>
                          setEventReg({ ...eventReg, event: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
                      >
                        <option value="Mega Diagnostic & Medical Camp">
                          Specialist Geriatric Optical Diagnostics (June 12)
                        </option>
                        <option value="P.P. Maniya Merit Scholarship Distribution">
                          Scholarship Awards Distribution (Aug 24)
                        </option>
                        <option value="Monsoon Disaster Aid Volunteer Meet">
                          Pre-Monsoon Disaster Support Assembly (May 18)
                        </option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#EA580C] hover:bg-[#EA580C]/95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition"
                    >
                      Generate Compliant Entry Pass
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Media Gallery Archive
            </h2>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {["all", "healthcare", "education", "community"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${activeCategory === cat ? "bg-slate-900 text-white font-bold" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-60 rounded-xl overflow-hidden shadow-inner cursor-pointer bg-slate-100"
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                    <span className="block text-xs uppercase text-amber-400 font-bold mb-1">
                      {item.category}
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-white mb-2">
                      {item.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                      <Play className="w-3.5 h-3.5 shrink-0 fill-white" />
                      <span>Expand visual view</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 p-3 text-white hover:text-amber-400 bg-white/10 rounded-full transition"
            >
              ✕
            </button>
            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative aspect-video w-full max-h-[70vh] rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={galleryItems[lightboxIndex].url}
                  alt={galleryItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h3 className="text-white font-bold text-lg mt-1">
                  {galleryItems[lightboxIndex].title}
                </h3>
                <div className="flex gap-4 mt-4 justify-center text-xs text-white">
                  <button
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + galleryItems.length) %
                          galleryItems.length,
                      )
                    }
                    className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-md font-bold"
                  >
                    ◀ Previous
                  </button>
                  <button
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % galleryItems.length,
                      )
                    }
                    className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-md font-bold"
                  >
                    Next ▶
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer lang={lang} navigateTo={navigateTo} setToastMessage={() => {}} />
    </>
  );
}