"use client";

// components/Header.tsx
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  Globe,
  Heart,
  Menu,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  X,
} from "lucide-react";
import { useState } from "react";
import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Header({ lang, setLang, currentPage, navigateTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t: DictType = DICTIONARY[lang];

  const handleNavigate = (page: string) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  // const navItems = [
  //   { id: "home", label: t.home },
  //   { id: "about", label: t.about },
  //   { id: "activities", label: t.activities },
  //   { id: "trustees", label: t.trustees },
  //   { id: "events", label: t.events },
  //   { id: "donate", label: t.contact },
  // ];

  return (
    <>
      {/* TOP INFO BAR */}
      {/* <div className="bg-[#1E293B] text-slate-300 text-xs py-2 shadow-inner border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1 bg-[#EA580C]/20 text-[#EA580C] px-2 py-0.5 rounded font-semibold uppercase tracking-wider text-[10px]">
              {t.regLabel}
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {t.cert12a}
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
              {t.cert80g}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-300 font-medium text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
              {t.csrReady}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-between md:justify-end">
            <div className="flex items-center gap-4 text-[11px]">
              <a href={`mailto:${t.email}`} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.email}</span>
              </a>
              <a href={`tel:${t.phone}`} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.phone}</span>
              </a>
            </div>

          
            <div className="flex items-center bg-slate-800/80 rounded-md p-1 border border-slate-700">
              <Globe className="w-3.5 h-3.5 text-[#F59E0B] mr-1.5 ml-1" />
              {(["en", "hi", "gu"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                    lang === l ? "bg-[#EA580C] text-white" : "hover:text-white"
                  }`}
                >
                  {l === "en" ? "ENG" : l === "hi" ? "हिन्दी" : "ગુજરાતી"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* STICKY HEADER */}
      {/* <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate("home")}
          >
            <div className="relative w-12 h-12 bg-white rounded-full border border-slate-100 p-0.5 shadow-sm overflow-hidden flex items-center justify-center">
              <Image
                src={IMAGES.logo}
                alt="P P Maniya Hospital & Trust Logo"
                width={48}
                height={48}
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block text-slate-950 font-bold text-sm tracking-tight leading-tight uppercase">
                P.P. Maniya
              </span>
              <span className="block text-[#EA580C] font-semibold text-[10px] tracking-widest uppercase">
                Education & Medical Trust
              </span>
            </div>
          </div>

        
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                  currentPage === item.id
                    ? "text-[#EA580C] bg-[#EA580C]/5 font-bold"
                    : "text-slate-700 hover:text-[#EA580C] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavigate("donate")}
              className="bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-transform flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.donateCta}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

       
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 text-white border-t border-slate-800"
            >
              <div className="px-4 py-3 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`text-left w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      currentPage === item.id
                        ? "text-amber-400 bg-white/10 font-bold border-l-4 border-amber-400 pl-3"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header> */}
    </>
  );
}