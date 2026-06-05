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
import { useRouter } from "next/navigation";

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currentPage: string;
  navigateTo?: (page: string) => void; 
}

export default function Header({
  lang,
  setLang,
  currentPage,
  navigateTo,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Safe fallback: always use "en" if lang is invalid
  const safeLang: Lang = lang && DICTIONARY[lang] ? lang : "en";
  const t: DictType = DICTIONARY[safeLang];

//  const handleNavigate = (page: string) => {
//   navigateTo?.(page);  
//   setMobileMenuOpen(false);
// };
const handleNavigate = (page: string) => {
  if (page === "home") {
    router.push("/");
  } else {
    router.push(`/${page}`);
  }
  navigateTo?.(page);
  setMobileMenuOpen(false);
};

  const navItems = [
    { id: "home", label: t?.home },
    { id: "about", label: t?.about },
    { id: "activities", label: t?.activities },
    { id: "trustees", label: t?.trustees },
    { id: "events", label: t?.events },
    { id: "donate", label: t?.contact },
  ];

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="bg-[#f1d8c9] text-slate-300 text-xs py-2 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1 bg-[#C35214]/20 text-black px-2 py-0.5 rounded font-semibold uppercase tracking-wider text-[10px]">
              {t.regLabel}
            </span>
            <span className="text-black">|</span>
            <span className="flex items-center gap-1 text-black font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-black" />
              {t.cert12a}
            </span>
            <span className="text-black">•</span>
            <span className="flex items-center gap-1 text-black font-medium">
              <Award className="w-3.5 h-3.5 text-black" />
              {t.cert80g}
            </span>
            <span className="text-black">•</span>
            <span className="text-black font-medium text-[11px] px-2 py-0.5">
              {t.csrReady}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-between md:justify-end">
            <div className="flex items-center gap-4 text-[11px]">
              <a
                href={`mailto:${t.email}`}
                className="text-black transition flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>{t.email}</span>
              </a>
              <a
                href={`tel:${t.phone}`}
                className="text-black transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>{t.phone}</span>
              </a>
            </div>

            <div className="flex items-center bg-[#C35214]/20 rounded-md p-1">
              <Globe className="w-3.5 h-3.5 text-black mr-1.5 ml-1" />
              {(["en", "hi", "gu"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                    safeLang === l ? "bg-[#C35214] text-white" : "text-black hover:text-white"
                  }`}
                >
                  {l === "en" ? "ENG" : l === "hi" ? "हिन्दी" : "ગુજરાતી"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate("home")}
          >
            <div className="relative w-12 h-12 bg-white rounded-full border border-slate-100 p-0.5 shadow-sm overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
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
              <span className="block text-[#C35214] font-semibold text-[10px] tracking-widest uppercase">
                Education &amp; Medical Trust
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                  currentPage === item.id
                    ? "text-[#C35214] bg-[#EA580C]/5 font-bold"
                    : "text-slate-700 hover:text-[#C35214] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* DONATE BUTTON */}
            <button
              onClick={() => handleNavigate("donate")}
              className="bg-[#C35214] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-transform flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.donateCta}</span>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
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
                        ? "text-[#C35214] bg-white/10 font-bold border-l-4 border-[#C35214] pl-3"
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
      </header>
    </>
  );
}