"use client";

// components/Footer.tsx
import { MapPin, Phone, Mail } from "lucide-react";
import { DICTIONARY, Lang, DictType } from "@/lib/constants";

interface FooterProps {
  lang: Lang;
  navigateTo: (page: string) => void;
  setToastMessage: (msg: string) => void;
}

export default function Footer({ lang, navigateTo, setToastMessage }: FooterProps) {
  const t: DictType = DICTIONARY[lang];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

        {/* Col 1: About */}
        <div className="col-span-2 space-y-4">
          <span className="text-[#EA580C] font-extrabold text-sm tracking-wider uppercase block">
            {t.fullName}
          </span>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            Formed in 2019 to honor the lifelong philanthropic vision of Late Popatbhai Premjibhai Maniya. Actively driving educational scholarship schemes, clinical medicine diagnostics, and social welfare programs.
          </p>
          <div className="pt-2">
            <span className="block text-xs text-slate-500 font-bold uppercase mb-1">State Registry ID</span>
            <span className="block font-mono text-xs text-amber-500 font-semibold select-all">Reg E/22531/SURAT</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <span className="text-white font-bold text-xs uppercase tracking-widest block">Quick Links</span>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              { id: "home", label: t.home },
              { id: "about", label: t.about },
              { id: "activities", label: t.activities },
              { id: "trustees", label: t.trustees },
              { id: "events", label: t.events },
              { id: "donate", label: t.contact },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigateTo(item.id)}
                  className="text-slate-400 hover:text-amber-400 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Core Divisions */}
        <div className="space-y-4">
          <span className="text-white font-bold text-xs uppercase tracking-widest block">Core Divisions</span>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            {["Education Fellowship", "Medical Subsidies Bank", "Rural Welfare Projects", "Tailoring Centers", "Yoga Wellness Camps"].map((item) => (
              <li key={item}>
                <button onClick={() => navigateTo("activities")} className="hover:text-amber-400 transition">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div className="col-span-2 lg:col-span-1 space-y-4">
          <span className="text-white font-bold text-xs uppercase tracking-widest block">Secretariat HQ</span>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="select-all">{t.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="select-all">{t.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="select-all">{t.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-slate-800 max-w-7xl mx-auto px-4 text-slate-500 text-[10.5px] sm:text-xs">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-center md:text-left">
          <div>
            <span className="block">&copy; {new Date().getFullYear()} Late Popatbhai Premjibhai Maniya Trust. All Rights Reserved.</span>
            <span className="block text-slate-600 mt-1">Compiled in accordance with Section 12A, 80G and corporate CSR regulations in India.</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-slate-400">
            <button onClick={() => setToastMessage("Privacy Policy: Standard public data usage guidelines are fully enforced.")} className="hover:text-white transition">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setToastMessage("Terms & Conditions: Sincere giving transactions operate compliant paths.")} className="hover:text-white transition">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => setToastMessage("Refund Policy: Philanthropic grants can be requested within 15 working days.")} className="hover:text-white font-medium text-amber-500 transition">Refund Policy</button>
            <span>•</span>
            <button onClick={() => setToastMessage("Disclaimer: The trust operates purely as a certified non-profit state NGO.")} className="hover:text-white transition">Donor Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
}