// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   Building2, 
//   MapPin, 
//   Calendar, 
//   Download, 
//   ChevronRight, 
//   Phone, 
//   Mail, 
//   Users, 
//   Heart, 
//   Award, 
//   BookOpen, 
//   Activity, 
//   Flame, 
//   ShieldCheck, 
//   Menu, 
//   X, 
//   Check, 
//   ArrowRight, 
//   QrCode, 
//   Copy, 
//   Search, 
//   Play, 
//   UserCheck, 
//   Globe, 
//   Clock,
//   HeartHandshake
// } from 'lucide-react';

// // Authentic visual asset registry
// const IMAGES = {
//   logo: "https://ppmaniyahospital.com/wp-content/uploads/2026/02/PP-Maniya-Hospital-Logo.webp",
//   hero: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200", 
//   education: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=800",
//   medicalCamp: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
//   charityWelfare: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800",
//   volunteerBoard: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
//   yogaCamp: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
//   womenEmpower: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
//   chairman: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
//   trustee2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
//   trustee3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
//   trustee4: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
// };

// // Language Dictionary (English, Hindi, Gujarati)
// const DICTIONARY = {
//   en: {
//     trustName: "Late Popatbhai Premjibhai Maniya Trust",
//     fullName: "Late Popatbhai Premjibhai Maniya (P.P. Maniya) Education & Medical Trust",
//     regLabel: "Registered Charitable Trust",
//     cert12a: "12A Certified",
//     cert80g: "80G Tax Exempt",
//     csrReady: "CSR Partner Ready",
//     donateCta: "DONATE NOW",
//     tagline: "Serving Humanity Through Education, Healthcare & Community Development",
//     subTagline: "Dedicated to uplifting rural and underprivileged lives through structured educational scholarships, premium medical assistance, state-wide community service, and long-term socio-economic empowerment across India.",
//     knowWork: "Explore Activities",
//     beVolunteer: "Volunteer With Us",
//     home: "Home",
//     about: "About Trust",
//     activities: "Activities & Projects",
//     trustees: "Trustees & Governance",
//     events: "Events & Gallery",
//     contact: "Donate & Contact",
//     address: "A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat-395006, Gujarat",
//     phone: "+91 98251 45431",
//     email: "info@ppmaniyatrust.org",
//     officeHours: "Mon - Sat: 9:00 AM - 6:00 PM",
//     chairmanQuote: "True compassion lies not just in feeling sorrow, but in creating durable, community-driven pathways to health and education.",
//     chairmanName: "Shri Batukbhai P. Maniya",
//     chairmanTitle: "Trust Chairman & Founder",
//     impactLives: "Lives Impacted",
//     impactMedical: "Medical Camp Attendees",
//     impactStudents: "Students Supported",
//     impactCamps: "Camps Organized",
//     impactVolunteers: "Active Volunteers",
//     impactYears: "Years of Commitment"
//   },
//   hi: {
//     trustName: "स्व. पोपटभाई प्रेमजीभाई मनिया ट्रस्ट",
//     fullName: "स्वर्गीय पोपटभाई प्रेमजी भाई मनिया (पी.पी. मनिया) शिक्षा और चिकित्सा ट्रस्ट",
//     regLabel: "पंजीकृत धर्मार्थ ट्रस्ट",
//     cert12a: "12A प्रमाणित",
//     cert80g: "80G कर छूट",
//     csrReady: "CSR भागीदार तैयार",
//     donateCta: "दान करें",
//     tagline: "शिक्षा, स्वास्थ्य सेवा और सामुदायिक विकास के माध्यम से मानवता की सेवा",
//     subTagline: "भारत भर में संरचित शैक्षिक छात्रवृत्ति, प्रीमियम चिकित्सा सहायता, राज्यव्यापी सामुदायिक सेवा और दीर्घकालिक सामाजिक-आर्थिक सशक्तिकरण के माध्यम से ग्रामीण और वंचित जीवन के उत्थान के लिए समर्पित।",
//     knowWork: "हमारे कार्य जानें",
//     beVolunteer: "स्वयंसेवक बनें",
//     home: "मुख्य पृष्ठ",
//     about: "ट्रस्ट के बारे में",
//     activities: "गतिविधियां और परियोजनाएं",
//     trustees: "ट्रस्टी और शासन",
//     events: "कार्यक्रम और गैलरी",
//     contact: "दान और संपर्क",
//     address: "ए/35, रचना सोसाइटी, कपोदरा चार रास्ता, वराछा रोड, सूरत-395006, गुजरात",
//     phone: "+91 98251 45431",
//     email: "info@ppmaniyatrust.org",
//     officeHours: "सोम - शनि: सुबह 9:00 - शाम 6:00",
//     chairmanQuote: "सच्ची करुणा न केवल दुख महसूस करने में है, बल्कि स्वास्थ्य और शिक्षा के लिए स्थायी, समुदाय-संचालित मार्ग बनाने में है।",
//     chairmanName: "श्री बटुकभाई पी. मनिया",
//     chairmanTitle: "ट्रस्ट अध्यक्ष और संस्थापक",
//     impactLives: "प्रभावित जीवन",
//     impactMedical: "चिकित्सा लाभार्थी",
//     impactStudents: "समर्थित छात्र",
//     impactCamps: "आयोजित चिकित्सा शिविर",
//     impactVolunteers: "सक्रिय स्वयंसेवक",
//     impactYears: "प्रतिबद्धता के वर्ष"
//   },
//   gu: {
//     trustName: "સ્વ. પોપટભાઈ પ્રેમજીભાઈ મણીયા ટ્રસ્ટ",
//     fullName: "સ્વર્ગસ્થ પોપટભાઈ પ્રેમજીભાઈ મણીયા (પી.પી. મણીયા) એજ્યુકેશન એન્ડ મેડિકલ ટ્રસ્ટ",
//     regLabel: "રજિસ્ટર્ડ ચેરિટેબલ ટ્રસ્ટ",
//     cert12a: "12A પ્રમાણિત",
//     cert80g: "80G ટેક્સ મુક્તિ",
//     csrReady: "CSR પાર્ટનર સજ્જ",
//     donateCta: "દાન આપો",
//     tagline: "શિક્ષણ, આરોગ્ય અને સામુદાયિક વિકાસ દ્વારા માનવતાની સેવા",
//     subTagline: "ગુજરાત અને દેશભરમાં વંચિતો સુધી શિક્ષણ સહાય, આરોગ્ય સહાય અને સર્વગ્રાહી સામાજિક અને આર્થિક ઉત્થાન પહોંચાડવા કટિબદ્ધ ટ્રસ્ટ.",
//     knowWork: "અમારી પ્રવૃત્તિઓ",
//     beVolunteer: "સ્વયંસેવક બનો",
//     home: "હોમ પેજ",
//     about: "ટ્રસ્ટ વિશે",
//     activities: "પ્રવૃત્તિઓ અને પ્રોજેક્ટ્સ",
//     trustees: "ટ્રસ્ટીઓ અને ગવર્નન્સ",
//     events: "ઇવેન્ટ્સ અને ગેલેરી",
//     contact: "દાન અને સંપર્ક",
//     address: "એ/૩૫, રચના સોસાયટી, કાપોદ્રા ચાર રસ્તા, વરાછા રોડ, સુરત-૩૯૫૦૦૬, ગુજરાત",
//     phone: "+91 98251 45431",
//     email: "info@ppmaniyatrust.org",
//     officeHours: "સોમ - શનિ: સવારે ૯ થી સાંજે ૬",
//     chairmanQuote: "સાચી કરુણા માત્ર હૃદયમાં દુખ રાખવાથી નહીં, પણ લોકો માટે ટકાઉ શિક્ષણ અને તબીબી વ્યવસ્થાઓ ઊભી કરવાથી સાબિત થાય છે.",
//     chairmanName: "શ્રી બટુકભાઈ પી. મણીયા",
//     chairmanTitle: "ટ્રસ્ટ પ્રમુખ અને સ્થાપક",
//     impactLives: "લાભાન્વિતો ની કુલ સંખ્યા",
//     impactMedical: "તબીબી સેવાનો લાભ મેળવનાર",
//     impactStudents: "વિદ્યાર્થીઓને શિષ્યવૃત્તિ",
//     impactCamps: "યોજાયેલા મેડિકલ કેમ્પ",
//     impactVolunteers: "સક્રિય સ્વયંસેવકો",
//     impactYears: "સેવાના વર્ષો"
//   }
// };

// export default function TrustPortal() {
//   const [lang, setLang] = useState<'en' | 'hi' | 'gu'>('en');
//   const [currentPage, setCurrentPage] = useState<string>('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

//   // Form states
//   const [eventReg, setEventReg] = useState({ name: '', mobile: '', email: '', city: '', event: 'Mega Diagnostic & Medical Camp' });
//   const [eventRegSuccess, setEventRegSuccess] = useState(false);
//   const [eventRegId, setEventRegId] = useState('');

//   const [contactForm, setContactForm] = useState({ name: '', mobile: '', email: '', message: '' });
//   const [contactSuccess, setContactSuccess] = useState(false);

//   const [donationForm, setDonationForm] = useState({ name: '', mobile: '', email: '', amount: '2500', message: '', method: 'upi' });
//   const [customDonationState, setCustomDonationState] = useState('2500');
//   const [showDonationSuccess, setShowDonationSuccess] = useState(false);

//   const [localDonationFeed, setLocalDonationFeed] = useState<any[]>([]);
//   const [toastMessage, setToastMessage] = useState('');

//   const t = DICTIONARY[lang];

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Utility to handle switching page and scrolling top
//   const navigateTo = (page: string) => {
//     setCurrentPage(page);
//     setMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     setToastMessage("Copied to clipboard successfully!");
//     setTimeout(() => setToastMessage(''), 3000);
//   };

//   const handleEventSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!eventReg.name || !eventReg.mobile) return;
//     const randomId = "PPMT-" + Math.floor(100000 + Math.random() * 900000);
//     setEventRegId(randomId);
//     setEventRegSuccess(true);
//   };

//   const handleContactSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!contactForm.name || !contactForm.message) return;
//     setContactSuccess(true);
//     setContactForm({ name: '', mobile: '', email: '', message: '' });
//     setTimeout(() => setContactSuccess(false), 5000);
//   };

//   const handleDonationSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const finalAmount = parseFloat(customDonationState) || parseFloat(donationForm.amount) || 500;
//     setShowDonationSuccess(true);
//     const newDonation = {
//       name: donationForm.name || 'Anonymous Donor',
//       amount: finalAmount,
//       date: new Date().toLocaleDateString(),
//       txId: "TXN" + Math.floor(10000000 + Math.random() * 90000000)
//     };
//     setLocalDonationFeed([newDonation, ...localDonationFeed]);
//   };

//   // Gallery items matching Indian contexts
//   const galleryItems = [
//     { id: 1, type: 'photo', category: 'healthcare', url: IMAGES.medicalCamp, title: "Rural Multi-Specialty Health Camp" },
//     { id: 2, type: 'photo', category: 'education', url: IMAGES.education, title: "Free Educational Kit Distribution" },
//     { id: 3, type: 'photo', category: 'community', url: IMAGES.charityWelfare, title: "Surat Slum Food Security Drive" },
//     { id: 4, type: 'photo', category: 'healthcare', url: IMAGES.yogaCamp, title: "Community Yoga & Pranayama Wellness Session" },
//     { id: 5, type: 'photo', category: 'education', url: IMAGES.volunteerBoard, title: "Merit-cum-Means Scholarships Seminar" },
//     { id: 6, type: 'photo', category: 'community', url: IMAGES.womenEmpower, title: "Vocational Tailoring Skill Training for Women" }
//   ];

//   const filteredGallery = activeCategory === 'all' 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === activeCategory);

//   return (
//     <div className="font-sans min-h-screen flex flex-col antialiased">
//       {/* Toast Alert */}
//       <AnimatePresence>
//         {toastMessage && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-blue-400 font-semibold text-sm"
//           >
//             <Check className="w-4 h-4 text-emerald-300" />
//             <span>{toastMessage}</span>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 1. TOP GOVERNMENT-STYLE INFORMATION BAR */}
//       <div className="bg-[#1E293B] text-slate-300 text-xs py-2 shadow-inner border-b border-slate-700/50">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
//           <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
//             <span className="inline-flex items-center gap-1 bg-[#EA580C]/20 text-[#EA580C] px-2 py-0.5 rounded font-semibold uppercase tracking-wider text-[10px]">
//               {t.regLabel}
//             </span>
//             <span className="text-slate-400">|</span>
//             <span className="flex items-center gap-1 text-slate-300 font-medium">
//               <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
//               {t.cert12a}
//             </span>
//             <span className="text-slate-400">•</span>
//             <span className="flex items-center gap-1 text-slate-300 font-medium">
//               <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
//               {t.cert80g}
//             </span>
//             <span className="text-slate-400">•</span>
//             <span className="text-emerald-300 font-medium text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">{t.csrReady}</span>
//           </div>

//           <div className="flex flex-wrap items-center gap-4 justify-between md:justify-end">
//             <div className="flex items-center gap-4 text-[11px]">
//               <a href={`mailto:${t.email}`} className="hover:text-amber-400 transition flex items-center gap-1.5">
//                 <Mail className="w-3.5 h-3.5 text-slate-400" />
//                 <span>{t.email}</span>
//               </a>
//               <a href={`tel:${t.phone}`} className="hover:text-amber-400 transition flex items-center gap-1.5">
//                 <Phone className="w-3.5 h-3.5 text-slate-400" />
//                 <span>{t.phone}</span>
//               </a>
//             </div>

//             {/* Language Switcher */}
//             <div className="flex items-center bg-slate-800/80 rounded-md p-1 border border-slate-700">
//               <Globe className="w-3.5 h-3.5 text-[#F59E0B] mr-1.5 ml-1" />
//               <button 
//                 onClick={() => setLang('en')} 
//                 className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${lang === 'en' ? 'bg-[#EA580C] text-white' : 'hover:text-white'}`}
//               >
//                 ENG
//               </button>
//               <button 
//                 onClick={() => setLang('hi')} 
//                 className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${lang === 'hi' ? 'bg-[#EA580C] text-white' : 'hover:text-white'}`}
//               >
//                 हिन्दी
//               </button>
//               <button 
//                 onClick={() => setLang('gu')} 
//                 className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${lang === 'gu' ? 'bg-[#EA580C] text-white' : 'hover:text-white'}`}
//               >
//                 ગુજરાતી
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. STICKY GLASSMORPHISM HEADER */}
//       <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">

//           {/* Logo Connection */}
//           <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
//             <div className="relative w-12 h-12 bg-white rounded-full border border-slate-100 p-0.5 shadow-sm overflow-hidden flex items-center justify-center">
//               <Image 
//                 src={IMAGES.logo} 
//                 alt="P P Maniya Hospital & Trust Logo" 
//                 width={48} 
//                 height={48}
//                 className="object-contain"
//                 referrerPolicy="no-referrer"
//               />
//             </div>
//             <div>
//               <span className="block text-slate-950 font-bold font-display text-sm tracking-tight leading-tight uppercase max-w-xs sm:max-w-md">
//                 P.P. Maniya
//               </span>
//               <span className="block text-[#EA580C] font-semibold text-[10px] tracking-widest uppercase">
//                 Education & Medical Trust
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {[
//               { id: 'home', label: t.home },
//               { id: 'about', label: t.about },
//               { id: 'activities', label: t.activities },
//               { id: 'trustees', label: t.trustees },
//               { id: 'events', label: t.events },
//               { id: 'donate', label: t.contact }
//             ].map((navItem) => (
//               <button
//                 key={navItem.id}
//                 onClick={() => navigateTo(navItem.id)}
//                 className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
//                   currentPage === navItem.id 
//                     ? 'text-[#EA580C] bg-[#EA580C]/5 font-bold' 
//                     : 'text-slate-700 hover:text-[#EA580C] hover:bg-slate-50'
//                 }`}
//               >
//                 {navItem.label}
//               </button>
//             ))}
//           </nav>

//           {/* Desktop & Mobile CTA Button */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => navigateTo('donate')}
//               className="bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-transform flex items-center gap-1.5"
//             >
//               <Heart className="w-4 h-4 fill-white" />
//               <span>{t.donateCta}</span>
//             </button>

//             {/* Mobile burger */}
//             <button 
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg"
//               aria-label="Toggle navigation menu"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Panel */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden bg-slate-900 text-white border-t border-slate-800"
//             >
//               <div className="px-4 py-3 flex flex-col gap-2">
//                 {[
//                   { id: 'home', label: t.home },
//                   { id: 'about', label: t.about },
//                   { id: 'activities', label: t.activities },
//                   { id: 'trustees', label: t.trustees },
//                   { id: 'events', label: t.events },
//                   { id: 'donate', label: t.contact }
//                 ].map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => navigateTo(item.id)}
//                     className={`text-left w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
//                       currentPage === item.id 
//                         ? 'text-amber-400 bg-white/10 font-bold border-l-4 border-amber-400 pl-3' 
//                         : 'text-slate-300 hover:text-white hover:bg-white/5'
//                     }`}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* MAIN ROUTED VIEWS WRAPPER WITH MOTION TRANSITIONS */}
//       <main className="grow">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPage}
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -15 }}
//             transition={{ duration: 0.35, ease: 'easeOut' }}
//           >

//             {/* ==================== 1. HOME VIEW ==================== */}
//             {currentPage === 'home' && (
//               <div>
//                 {/* HERO BANNER SECTION */}
//                 <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 py-[130px] relative">
//                   {/* Decorative backgrounds */}
//                   <div className="absolute inset-0 z-0 opacity-20">
//                     <Image 
//                       src={IMAGES.hero} 
//                       alt="Education support in rural school" 
//                       fill
//                       priority
//                       className="object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
//                   </div>
//                   <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] z-0"></div>
//                   <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] z-0"></div>

//                   <div className="max-w-7xl mx-auto px-4 relative z-10">
//                     <div className="max-w-3xl">
//                       <motion.div 
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-6"
//                       >
//                         <HeartHandshake className="w-3.5 h-3.5" />
//                         <span>Registered Charity Portal • Government Act Compliant</span>
//                       </motion.div>

//                       <motion.h1 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200"
//                         id="hero-title"
//                       >
//                         {t.tagline}
//                       </motion.h1>

//                       <motion.p 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="text-slate-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed font-light"
//                       >
//                         {t.subTagline}
//                       </motion.p>

//                       <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                         className="flex flex-wrap gap-4"
//                       >
//                         <button
//                           onClick={() => navigateTo('donate')}
//                           className="px-6 py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-bold rounded-xl shadow-lg shadow-orange-600/35 hover:scale-102 hover:shadow-orange-600/50 transition flex items-center gap-2 text-sm sm:text-base"
//                         >
//                           <span>{t.donateCta}</span>
//                           <ArrowRight className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => navigateTo('activities')}
//                           className="px-6 py-3.5 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700/80 hover:bg-slate-700 hover:text-amber-300 transition flex items-center gap-1.5 text-sm sm:text-base"
//                         >
//                           <span>{t.knowWork}</span>
//                           <ChevronRight className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => navigateTo('donate')}
//                           className="px-6 py-3.5 bg-slate-900/60 text-slate-200 font-semibold rounded-xl border border-white/10 hover:bg-slate-900 hover:text-amber-400 transition text-sm sm:text-base"
//                         >
//                           {t.beVolunteer}
//                         </button>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* IMPACT STATISTICS SECTION */}
//                 <section className="bg-gradient-to-b from-slate-900 to-[#10172A] text-white py-12 relative z-10 shadow-xl border-y border-slate-800/80">
//                   <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
//                     {[
//                       { val: "10,000+", label: t.impactLives, icon: Users, color: 'text-amber-400' },
//                       { val: "500+", label: t.impactMedical, icon: Activity, color: 'text-orange-400' },
//                       { val: "200+", label: t.impactStudents, icon: BookOpen, color: 'text-blue-400' },
//                       { val: "50+", label: t.impactCamps, icon: Building2, color: 'text-indigo-400' },
//                       { val: "100+", label: t.impactVolunteers, icon: Heart, color: 'text-rose-400' },
//                       { val: "7+", label: t.impactYears, icon: Clock, color: 'text-emerald-400' }
//                     ].map((stat, i) => (
//                       <div key={i} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition group">
//                         <div className="mx-auto w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
//                           <stat.icon className={`w-4.5 h-4.5 ${stat.color}`} />
//                         </div>
//                         <div className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">{stat.val}</div>
//                         <div className="text-[11.5px] text-slate-400 mt-1 uppercase tracking-wider leading-relaxed">{stat.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </section>

//                 {/* CHAIRMAN MESSAGE */}
//                 <section className="py-16 bg-white">
//                   <div className="max-w-7xl mx-auto px-4">
//                     <div className="grid lg:grid-cols-12 gap-12 items-center">

//                       {/* Left: Beautiful Styled Leadership Image Frame */}
//                       <div className="lg:col-span-5 relative">
//                         <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-505 rounded-2xl blur-lg opacity-25"></div>
//                         <div className="relative aspect-square w-full max-w-[400px] mx-auto rounded-2xl bg-slate-100 overflow-hidden border-4 border-white shadow-2xl">
//                           <Image 
//                             src={IMAGES.chairman} 
//                             alt={t.chairmanName}
//                             fill
//                             className="object-cover"
//                             referrerPolicy="no-referrer"
//                           />
//                         </div>
//                         {/* Indian Cultural Accent decoration */}
//                         <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-2xl p-4 shadow-xl z-10 text-center border-2 border-white max-w-[200px]">
//                           <span className="block text-xs uppercase font-bold tracking-widest text-amber-100 mb-0.5">ESTD</span>
//                           <span className="block text-2xl font-black font-display text-white">2019</span>
//                           <span className="block text-[10px] uppercase font-bold text-slate-100 leading-tight">By P. P. Maniya Family</span>
//                         </div>
//                       </div>

//                       {/* Right: Message Content */}
//                       <div className="lg:col-span-7">
//                         <div className="flex items-center gap-1 text-[#EA580C] text-xs font-bold tracking-widest uppercase mb-2">
//                           <UserCheck className="w-4 h-4" />
//                           <span>CHAIRMAN&apos;S DESK</span>
//                         </div>
//                         <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 leading-tight mb-6">
//                           A Legacy of Care and Action
//                         </h2>

//                         <div className="relative mb-6">
//                           <span className="absolute -top-8 -left-5 text-slate-150 text-8xl font-serif select-none z-0 leading-none">&ldquo;</span>
//                           <blockquote className="relative z-10 text-[17px] sm:text-[19px] italic font-medium text-slate-800 leading-relaxed pl-2">
//                             {t.chairmanQuote}
//                           </blockquote>
//                         </div>

//                         <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
//                           <p>
//                             Late Popatbhai Premjibhai Maniya lived with a profound belief in the intrinsic value of every human life. He believed that no child should be denied access to schooling, and no citizen should struggle without proper medical support. This organization is more than a trust; it is our commitment to keep his flame of kindness alive.
//                           </p>
//                           <p>
//                             Working directly within Surat and broad rural belts across Western India, we establish structured, audited scholarships for outstanding low-income students and drive diagnostic assemblies to identify health ailments early. We are deeply grateful to our volunteers, doctors, well-wishers, and CSR partners who unite with us to fulfill these critical service operations.
//                           </p>
//                         </div>

//                         <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
//                           <div>
//                             <span className="block text-md font-bold text-slate-900">{t.chairmanName}</span>
//                             <span className="block text-xs uppercase font-extrabold tracking-widest text-[#EA580C] mt-0.5">{t.chairmanTitle}</span>
//                           </div>
//                           {/* Elegant signature text rendering */}
//                           <div className="text-right text-slate-300 font-serif text-xl italic select-none">B. P. Maniya</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* FOCUS AREAS GRID */}
//                 <section className="py-16 bg-slate-50 border-t border-slate-100">
//                   <div className="max-w-7xl mx-auto px-4 text-center">
//                     <div className="max-w-2xl mx-auto mb-12">
//                       <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">SOCIETY WELFARE MATTERS</span>
//                       <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-1 mb-3">Our Structural Pillars of Care</h2>
//                       <p className="text-slate-600 text-sm sm:text-base">We prioritize sustainable, direct-reach social care activities based on critical civic development paradigms.</p>
//                     </div>

//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//                       {[
//                         { title: "Education Support", desc: "Merit-cum-Means scholarships, free schooling toolkits, uniforms, and text-packs for rural children.", icon: BookOpen, color: "border-t-4 border-t-amber-500 text-amber-600 bg-amber-500/5 hover:bg-amber-500/10" },
//                         { title: "Medical Assistance", desc: "Patient treatment subsidies, medicine supplies support, diagnostic assistance, and clinical hospital aid.", icon: Activity, color: "border-t-4 border-t-blue-500 text-blue-600 bg-blue-500/5 hover:bg-blue-500/10" },
//                         { title: "Community Welfare", desc: "Direct food distribution, clean local resources access, and social relief activities in high-need rural areas.", icon: Heart, color: "border-t-4 border-t-emerald-500 text-emerald-600 bg-emerald-500/5 hover:bg-emerald-500/10" },
//                         { title: "Women Empowerment", desc: "Vocational tailoring skills, basic financial literacy workshops, and self-reliance business mentorship.", icon: Users, color: "border-t-4 border-t-rose-500 text-rose-600 bg-rose-500/5 hover:bg-rose-500/10" },
//                         { title: "Youth Development", desc: "Digital systems literacy programs, vocational computer classes, and employment search guidance.", icon: Award, color: "border-t-4 border-t-indigo-500 text-indigo-600 bg-indigo-500/5 hover:bg-indigo-500/10" },
//                         { title: "Emergency Relief", desc: "Rapid monsoon/disaster ration supplies distribution and immediate emergency aid assemblies.", icon: Flame, color: "border-t-4 border-t-red-500 text-red-600 bg-red-500/5 hover:bg-red-500/10" },
//                         { title: "Skill Development", desc: "Professional workshop opportunities and practical industrial artisan training.", icon: Building2, color: "border-t-4 border-t-cyan-500 text-cyan-600 bg-cyan-500/5 hover:bg-cyan-500/10" },
//                         { title: "Senior Citizen Support", desc: "Geriatric screening camps, complimentary visual testing, reading glasses, and health checks.", icon: HeartHandshake, color: "border-t-4 border-t-violet-500 text-violet-600 bg-violet-500/5 hover:bg-violet-500/10" }
//                       ].map((item, i) => (
//                         <div key={i} className={`p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-slate-100 ${item.color}`}>
//                           <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
//                             <item.icon className="w-5.5 h-5.5" />
//                           </div>
//                           <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
//                           <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </section>

//                 {/* FEATURED PROJECTS WITH COMPACT DISPLAY */}
//                 <section className="py-16 bg-white">
//                   <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
//                       <div>
//                         <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">IMPACT PROJECTS</span>
//                         <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-1">Our Leading Strategic Operations</h2>
//                       </div>
//                       <button 
//                         onClick={() => navigateTo('activities')}
//                         className="text-amber-600 hover:text-[#EA580C] font-semibold text-sm flex items-center gap-1 mt-4 md:mt-0 transition"
//                       >
//                         <span>View All Projects</span>
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                       {[
//                         { title: "P.P. Maniya Merit Scholarship", tag: "Education", img: IMAGES.education, impact: "200+ Students receiving tuition backing", desc: "A robust scholarship model targeting lower-income high performers in school and technical vocational institutions." },
//                         { title: "Mega Diagnostic & Medical Camps", tag: "Healthcare", img: IMAGES.medicalCamp, impact: "5,000+ Screened for critical alignment checks", desc: "Mobilizing specialist doctors, modern testing reagents, and medicine modules to rural sectors around Surat." },
//                         { title: "Food Security & Hunger Relief", tag: "Welfare", img: IMAGES.charityWelfare, impact: "15,000+ Nutritious meals served this cycle", desc: "Providing staple grains, protein foods, and direct organic groceries support to daily labor zones and communities." }
//                       ].map((prj, idx) => (
//                         <div key={idx} className="group rounded-2xl bg-white overflow-hidden border border-slate-105 shadow-md flex flex-col h-full hover:shadow-xl transition-all">
//                           <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
//                             <Image 
//                               src={prj.img} 
//                               alt={prj.title}
//                               fill
//                               className="object-cover group-hover:scale-105 transition-transform duration-500"
//                               referrerPolicy="no-referrer"
//                             />
//                             <div className="absolute top-3 left-3 bg-[#111827]/85 backdrop-blur-sm text-amber-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
//                               {prj.tag}
//                             </div>
//                           </div>
//                           <div className="p-6 flex flex-col grow">
//                             <h3 className="text-base font-bold text-slate-900 line-clamp-1 mb-2 group-hover:text-[#EA580C] transition-colors">{prj.title}</h3>
//                             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">{prj.desc}</p>

//                             <div className="mt-auto bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 text-xs font-semibold text-slate-700 flex items-center gap-2">
//                               <Check className="w-4 h-4 text-emerald-500 shrink-0" />
//                               <span>{prj.impact}</span>
//                             </div>

//                             <button 
//                               onClick={() => {
//                                 setDonationForm({ ...donationForm, message: `Supporting the ${prj.title}` });
//                                 navigateTo('donate');
//                               }}
//                               className="w-full py-2.5 bg-slate-900 hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors duration-200"
//                             >
//                               Support This Project
//                             </button>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </section>

//                 {/* THE TRANSPARENCY & COMPLIANCE PANEL */}
//                 <section className="py-16 bg-slate-900 text-white relative">
//                   <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
//                   <div className="max-w-7xl mx-auto px-4 relative z-10">
//                     <div className="max-w-2xl mx-auto text-center mb-12">
//                       <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest">REGULATORY ASSURANCE</span>
//                       <h2 className="text-2xl sm:text-3xl font-extrabold font-display mt-1 text-white mb-3">Transparency & Verified Credentials</h2>
//                       <p className="text-slate-400 text-xs sm:text-sm">We maintain absolute financial compliance matching statutory expectations for authorized non-governmental hubs in India.</p>
//                     </div>

//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {[
//                         { title: "Trust Registration", code: "Reg No: E/22531/SURAT", details: "Established under the Bombay Public Trusts Act, 1950. Operating with full state administrative authorizations.", download: "Registration-Certificate.pdf" },
//                         { title: "Section 12A Certification", code: "Order No: ITBA/EXM/S/12A/2020", details: "Permanent income tax exemption permit index validating institutional philanthropic status.", download: "12A-Order-Exemption.pdf" },
//                         { title: "Section 80G Tax Exemption", code: "Order No: ITBA/EXM/S/80G/28A", details: "Authorizes our donors to claim standard deduction tax rebates under the Income Tax Act.", download: "80G-Tax-Exempt-Certificate.pdf" },
//                         { title: "PAN Registration Desk", code: "PAN: AALTP7522X", details: "Formal Corporate PAN allocation for seamless banking accountability and compliant audits.", download: "PAN-Card-Copy.pdf" },
//                         { title: "Annual Compliance Audit 2025", code: "Audited Ledger: FY 2024-25", details: "Full balance sheets and disbursement pathways signed by authorized external Chartered Accountants.", download: "Annual-Audit-Report-2025.pdf" },
//                         { title: "CSR Partnership Gateway", code: "Reg No: CSR00031942", details: "Permits public and private enterprises to deploy mandatory CSR reserves straight into our ventures.", download: "CSR-1-Affiliation-Form.pdf" }
//                       ].map((doc, idx) => (
//                         <div key={idx} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
//                           <div>
//                             <div className="flex items-center justify-between mb-3">
//                               <span className="text-sm font-bold text-white uppercase">{doc.title}</span>
//                               <ShieldCheck className="w-5 h-5 text-emerald-400" />
//                             </div>
//                             <span className="block text-xs font-mono text-amber-400 font-semibold mb-2">{doc.code}</span>
//                             <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{doc.details}</p>
//                           </div>

//                           <button
//                             onClick={() => {
//                               setToastMessage(`Downloading ${doc.download}...`);
//                               setTimeout(() => setToastMessage(''), 2500);
//                             }}
//                             className="inline-flex items-center gap-1.5 text-xs text-amber-500 hover:text-amber-400 font-bold uppercase tracking-wider self-start mt-2"
//                           >
//                             <Download className="w-4 h-4" />
//                             <span>Download Verified Document</span>
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </section>

//                 {/* EMOTIONAL CALL TO ACTION FOR DONATION */}
//                 <section className="py-20 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white">
//                   <div className="max-w-4xl mx-auto px-4 text-center">
//                     <Heart className="w-12 h-12 fill-white animate-pulse mx-auto mb-6 opacity-90" />
//                     <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
//                       Your Sincere Giving Powers Immediate Generational Upliftment
//                     </h2>
//                     <p className="text-amber-50 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
//                       Every single rupee translates to a student&apos;s clean workbook, life-saving geriatric care, or immediate disaster nutrition support. Let&apos;s build a kinder society together.
//                     </p>
//                     <div className="flex flex-wrap gap-4 justify-center">
//                       <button
//                         onClick={() => navigateTo('donate')}
//                         className="px-8 py-4 bg-slate-950 text-[#F59E0B] hover:bg-slate-900 font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition shadow-xl"
//                       >
//                         Make Your Contribution Online
//                       </button>
//                       <button
//                         onClick={() => navigateTo('contact')}
//                         className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base tracking-wider uppercase rounded-xl transition shadow-md"
//                       >
//                         Become a Voluntary Pillar
//                       </button>
//                     </div>
//                   </div>
//                 </section>

//               </div>
//             )}

//             {/* ==================== 2. ABOUT TRUST VIEW ==================== */}
//             {currentPage === 'about' && (
//               <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                   {/* Page header */}
//                   <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">ABOUT US</span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1 mb-4">
//                       {t.trustName}
//                     </h1>
//                     <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4"></div>
//                     <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
//                       Late Popatbhai Premjibhai Maniya Trust was formed by the proud children and wider Gujarat lineage of स्व. पोपटभाई मनिया to create a self-sustaining social welfare organization.
//                     </p>
//                   </div>

//                   {/* Core Attributes Card Deck */}
//                   <div className="grid md:grid-cols-4 gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner mb-16">
//                     <div>
//                       <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Registered Entity</span>
//                       <span className="block text-slate-950 font-bold text-sm sm:text-base leading-tight">Public Charitable & Educational Trust</span>
//                     </div>
//                     <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
//                       <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Registered Office</span>
//                       <span className="block text-slate-650 font-bold text-xs sm:text-sm leading-tight leading-relaxed select-all">
//                         {t.address}
//                       </span>
//                     </div>
//                     <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
//                       <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Established Year</span>
//                       <span className="block text-slate-950 font-bold text-sm sm:text-base">2019 (Surat Registry)</span>
//                     </div>
//                     <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
//                       <span className="block text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Area of Services</span>
//                       <span className="block text-slate-950 font-bold text-sm sm:text-base">Gujarat & Sovereign Indian Territories</span>
//                     </div>
//                   </div>

//                   {/* Mission & Vision */}
//                   <div className="grid lg:grid-cols-2 gap-8 mb-16">
//                     <div className="p-8 rounded-2xl bg-[#EA580C]/5 border border-[#EA580C]/25 shadow-md flex gap-4 items-start">
//                       <div className="w-12 h-12 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-lg">
//                         <Award className="w-6 h-6" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl font-bold text-slate-950 mb-2">Our Mission</h2>
//                         <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
//                           To establish direct-reach educational supports, verified health diagnostics camps, and disaster relief activities that alleviate structural hurdles for impoverished and marginalized sections across Surat, Saurashtra, and broader communities.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="p-8 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/20 shadow-md flex gap-4 items-start">
//                       <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-lg">
//                         <Users className="w-6 h-6" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl font-bold text-slate-950 mb-2">Our Vision</h2>
//                         <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
//                           To design a robustly educated, completely healthy, self-sufficient, and economically empowered local society where every citizen enjoys immediate access to clean wellness guidelines and merit student fellowships.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Core Values */}
//                   <div className="mb-16">
//                     <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-6 text-center">Our Core Operating Values</h2>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
//                       {[
//                         { title: "Integrity", desc: "Absolute honesty in fund allocation", icon: ShieldCheck, border: "border-t-[#EA580C]" },
//                         { title: "Transparency", desc: "100% public audited ledger accounts", icon: Download, border: "border-t-blue-600" },
//                         { title: "Compassion", desc: "Placing human welfare in the center", icon: HeartCircle, border: "border-t-rose-500" },
//                         { title: "Accountability", desc: "Tracing impact itemization cleanly", icon: CheckCircle2, border: "border-t-emerald-500" },
//                         { title: "Service", desc: "Voluntary selflessness as progress", icon: UserRound, border: "border-t-indigo-500" },
//                         { title: "Equality", desc: "Zero bias based on creed or zone", icon: Sparkles, border: "border-t-amber-500" }
//                       ].map((val, idx) => {
//                         const Icon = val.icon || ShieldCheck;
//                         return (
//                           <div key={idx} className={`p-4 rounded-xl bg-slate-50 border border-slate-100 border-t-4 text-center ${val.border}`}>
//                             <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-slate-700">
//                               <Icon className="w-4 h-4 text-slate-700" />
//                             </div>
//                             <h3 className="text-sm font-bold text-slate-900 mb-1">{val.title}</h3>
//                             <p className="text-slate-500 text-[11px] leading-snug">{val.desc}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Journey Timeline */}
//                   <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
//                     <h2 className="text-2xl font-bold font-display text-slate-950 mb-10 text-center">Our Journey & Expansion Timeline</h2>

//                     <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
//                       {/* Center line separator for desktop */}
//                       <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

//                       {/* Vertical line indicator mobile */}
//                       <div className="sm:hidden absolute left-0.5 h-full w-0.5 bg-slate-200"></div>

//                       {[
//                         { year: "2019", title: "Trust Formation", desc: "Established in memory of Popatbhai P. Maniya to institutionalize local family charity work into a registered Gujarat state public fund entity." },
//                         { year: "2020", title: "Merit Scholarship Initiative", desc: "Formulated the student tuition assistance draft, supporting the first batch of 50 low-income scholars during general economic lockdowns." },
//                         { year: "2021", title: "Healthcare Aid Launch", desc: "Affiliated with partner medical diagnostic labs in Surat to subsidize oncology and primary testing bills for underprivileged cases." },
//                         { year: "2022", title: "State Welfare Expansions", desc: "Rolled out persistent food rations support across 15 high-need communities and organized direct health assemblies." },
//                         { year: "2024", title: "Specialist Medical Camps Expansion", desc: "Incorporated cardiologist and ophthalmologist specialist pools, providing complimentary cataract operations with corporate backing." },
//                         { year: "2026", title: "Empowering Next-Gen Futures", desc: "Aiming to build dedicated diagnostic clinics and vocational computer programming arrays for rural students." }
//                       ].map((item, index) => (
//                         <div key={index} className={`relative sm:flex items-center justify-between mb-8 sm:mb-12 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>

//                           {/* Dot marker */}
//                           <div className="absolute left-[-22px] sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 rounded-full bg-[#EA580C] border-4 border-white shadow-md z-10"></div>

//                           {/* Empty pane for layout matching */}
//                           <div className="hidden sm:block w-[45%]"></div>

//                           {/* Content card */}
//                           <div className="w-full sm:w-[45%] bg-white p-5 rounded-2xl shadow-md border border-slate-100 hover:border-amber-300 transition-colors">
//                             <span className="inline-block bg-[#EA580C]/10 text-[#EA580C] font-bold text-xs px-2.5 py-1 rounded-md mb-2">
//                               {item.year}
//                             </span>
//                             <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
//                             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                 </div>
//               </section>
//             )}

//             {/* ==================== 3. ACTIVITIES & PROJECTS VIEW ==================== */}
//             {currentPage === 'activities' && (
//               <section className="py-16 bg-slate-50">
//                 <div className="max-w-7xl mx-auto px-4">

//                   {/* Page header */}
//                   <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">WHAT WE DO</span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1 mb-4">
//                       Focused Projects & Welfare Schemes
//                     </h1>
//                     <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4"></div>
//                     <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
//                       All activities are designed with direct-reach validation under the strict supervision of our medical directors and board trustees.
//                     </p>
//                   </div>

//                   {/* Section: Education Programs */}
//                   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
//                     <div className="grid lg:grid-cols-12 gap-8 items-center">
//                       <div className="lg:col-span-4 relative aspect-[4/3] w-full rounded-2xl bg-slate-100 overflow-hidden shadow-md">
//                         <Image src={IMAGES.education} fill alt="Education" className="object-cover" referrerPolicy="no-referrer" />
//                       </div>
//                       <div className="lg:col-span-8">
//                         <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
//                           <BookOpen className="w-4.5 h-4.5" />
//                           <span>Education Upliftment Division</span>
//                         </div>
//                         <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
//                           Empowering Young Scholastic Dreamers
//                         </h2>
//                         <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
//                           Education is the master key to breakthrough economic cycle constraints. Late Popatbhai Premjibhai Maniya Trust operates dedicated student assistance systems that clear hurdles for low-income candidates across government and municipal school circles.
//                         </p>

//                         <div className="grid sm:grid-cols-3 gap-4 mb-4">
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Merit Scholarships</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Focusing on technical and engineering streams.</span>
//                           </div>
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Scholastic Toolkits</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Free note-books, geometry boxes, and bags.</span>
//                           </div>
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Target Mentoring</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Guidance seminars for final board studies.</span>
//                           </div>
//                         </div>

//                         <button 
//                           onClick={() => {
//                             setDonationForm({ ...donationForm, amount: '1000', message: "Supporting Educational Scholarships" });
//                             navigateTo('donate');
//                           }}
//                           className="px-4 py-2 bg-[#EA580C] hover:bg-[#EA580C]/90 text-white font-bold text-xs uppercase rounded-xl transition"
//                         >
//                           Support Underprivileged Students • ₹1,000
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Section: Healthcare Programs */}
//                   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
//                     <div className="grid lg:grid-cols-12 gap-8 items-center">
//                       <div className="lg:col-span-8 order-2 lg:order-1">
//                         <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
//                           <Activity className="w-4.5 h-4.5" />
//                           <span>Healthcare Assistance Division</span>
//                         </div>
//                         <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
//                           Pristine Medical Diagnostic camps & Medicine Banks
//                         </h2>
//                         <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
//                           We believe that financial distress must never block basic healthcare access. We organize routine wellness camps where modern medical checks are offered completely complimentary to rural residents.
//                         </p>

//                         <div className="grid sm:grid-cols-3 gap-4 mb-4">
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Subsidized Diagnosis</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Assisting high-cost lab pathology bills.</span>
//                           </div>
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Medicine Subsidies</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Complimentary distribution of critical items.</span>
//                           </div>
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Cataract Screenings</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Free optical assemblies and standard glasses.</span>
//                           </div>
//                         </div>

//                         <button 
//                           onClick={() => {
//                             setDonationForm({ ...donationForm, amount: '5000', message: "Supporting Medical Camps" });
//                             navigateTo('donate');
//                           }}
//                           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase rounded-xl transition"
//                         >
//                           Sponsor Medical Camp Day • ₹5,000
//                         </button>
//                       </div>
//                       <div className="lg:col-span-4 order-1 lg:order-2 relative aspect-[4/3] w-full rounded-2xl bg-slate-100 overflow-hidden shadow-md">
//                         <Image src={IMAGES.medicalCamp} fill alt="Medical Camp" className="object-cover" referrerPolicy="no-referrer" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Section: Food & Community Programs */}
//                   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
//                     <div className="grid lg:grid-cols-12 gap-8 items-center">
//                       <div className="lg:col-span-4 relative aspect-[4/3] w-full rounded-2xl bg-slate-100 overflow-hidden shadow-md">
//                         <Image src={IMAGES.charityWelfare} fill alt="Community Welfare" className="object-cover" referrerPolicy="no-referrer" />
//                       </div>
//                       <div className="lg:col-span-8">
//                         <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">
//                           <Heart className="w-4.5 h-4.5 animate-pulse" />
//                           <span>Community Nutrition & Relief</span>
//                         </div>
//                         <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
//                           Ensuring Basic Resource & Food Security
//                         </h2>
//                         <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
//                           Late Popatbhai Premjibhai Maniya Trust drives direct humanitarian aid assemblies that distribute bulk staples, pulses, and dry organic assets directly into marginalized sections in Saurashtra and Gujarat.
//                         </p>

//                         <div className="grid sm:grid-cols-3 gap-4 mb-4">
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Nutritious Food Kits</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Grains, oil, lentils support packs.</span>
//                           </div>
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Monsoon Security Aid</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Sparing shelter components and immediate assets.</span>
//                           </div>
//                           <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
//                             <span className="block font-bold text-slate-900 text-sm">Clean Water Reach</span>
//                             <span className="block text-slate-500 text-xs mt-0.5">Setting temporary drinking water posts.</span>
//                           </div>
//                         </div>

//                         <button 
//                           onClick={() => {
//                             setDonationForm({ ...donationForm, amount: '2500', message: "Supporting Community Relief" });
//                             navigateTo('donate');
//                           }}
//                           className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase rounded-xl transition"
//                         >
//                           Sponsor Local Resource Kits • ₹2,500
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Section: Skill & Yoga Programs */}
//                   <div className="grid md:grid-cols-2 gap-8">
//                     <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
//                       <div className="relative aspect-video w-full rounded-xl bg-slate-100 overflow-hidden mb-4">
//                         <Image src={IMAGES.womenEmpower} fill alt="Vocational" className="object-cover" referrerPolicy="no-referrer" />
//                       </div>
//                       <span className="text-rose-600 font-bold text-xs uppercase tracking-widest block mb-1">Empowerment</span>
//                       <h3 className="text-lg font-bold text-slate-900 mb-2">Vocational Stitching Skill Center</h3>
//                       <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
//                         Driving sewing technology sessions for women and daughters in rural blocks to foster financial confidence and independent business structures.
//                       </p>
//                     </div>

//                     <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
//                       <div className="relative aspect-video w-full rounded-xl bg-slate-100 overflow-hidden mb-4">
//                         <Image src={IMAGES.yogaCamp} fill alt="Yoga & Wellness" className="object-cover" referrerPolicy="no-referrer" />
//                       </div>
//                       <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block mb-1">Wellness & Mind</span>
//                       <h3 className="text-lg font-bold text-slate-900 mb-2">Yoga & Pranayama Wellness retreats</h3>
//                       <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
//                         Providing comprehensive state wellness guidance sessions, focusing on correct mental alignment, stress release, and traditional wellness guidelines.
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </section>
//             )}

//             {/* ==================== 4. TRUSTEES & GOVERNANCE VIEW ==================== */}
//             {currentPage === 'trustees' && (
//               <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">

//                   {/* Page header */}
//                   <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">GOVERNANCE</span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1 mb-4">
//                       Board of Trustees & Compliance Core
//                     </h1>
//                     <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4"></div>
//                     <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
//                       Governed purely by the descendants and eminent medical partners who carry forward Sw. Popatbhai Maniya&apos;s life dream of social equity.
//                     </p>
//                   </div>

//                   {/* Trustees Board */}
//                   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//                     {[
//                       { name: "Shri Batukbhai P. Maniya", title: "Chairman & Founder Trustee", img: IMAGES.chairman, bio: "Eminent Surat diamond entrepreneur and philanthropist who established the organization to institutionalize corporate and family-level rural care." },
//                       { name: "Shri Mansukhbhai P. Maniya", title: "Vice Chairman", img: IMAGES.trustee2, bio: "Active civic champion leading our Saurashtra community expansion programs and managing direct agricultural development aid." },
//                       { name: "Dr. Rasikbhai B. Maniya", title: "Secretary & Medical Superintendent", img: IMAGES.trustee3, bio: "Dedicated clinical physician heading pathology team rosters, medicine purchases, and organizing critical testing camps." },
//                       { name: "Smt. Tinaben M. Maniya", title: "Joint Treasurer & Trustee", img: IMAGES.trustee4, bio: "Grassroots mobilizer heading rural outreach modules, basic skill seminars, and supervising direct women tailoring hubs." }
//                     ].map((member, idx) => (
//                       <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-150 p-6 flex flex-col items-center text-center group hover:bg-[#EA580C]/5 hover:border-amber-400 transition-all">
//                         <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
//                           <Image src={member.img} alt={member.name} fill className="object-cover" referrerPolicy="no-referrer" />
//                         </div>
//                         <h3 className="text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors">{member.name}</h3>
//                         <span className="block text-xs uppercase font-extrabold text-[#EA580C] mt-1 mb-3">{member.title}</span>
//                         <p className="text-slate-600 text-xs leading-relaxed">{member.bio}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Trust Hierarchy Flow - CSS Diagram */}
//                   <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 mb-16">
//                     <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-10 text-center uppercase tracking-wide">ORGANIZATIONAL MATRIX</h2>

//                     <div className="flex flex-col items-center">

//                       {/* Node: Chairman */}
//                       <div className="px-6 py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white rounded-xl shadow-md font-bold text-center w-full max-w-xs z-10">
//                         {t.chairmanName}
//                         <span className="block text-[10px] uppercase font-bold text-amber-100 whitespace-nowrap">{t.chairmanTitle}</span>
//                       </div>

//                       <div className="w-0.5 h-8 bg-slate-300"></div>

//                       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl text-center relative">
//                         {/* Connecting line overlays */}
//                         <div className="hidden lg:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-slate-300"></div>

//                         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
//                           <span className="block font-bold text-slate-800 text-sm">Shri Mansukhbhai P. Maniya</span>
//                           <span className="block text-[#EA580C] text-[10px] uppercase font-extrabold mt-0.5">Vice Chairman</span>
//                         </div>

//                         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 col-span-2 lg:col-span-1">
//                           <span className="block font-bold text-slate-800 text-sm">Dr. Rasikbhai B. Maniya</span>
//                           <span className="block text-[#EA580C] text-[10px] uppercase font-extrabold mt-0.5">Secretary & Medical Director</span>
//                         </div>

//                         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
//                           <span className="block font-bold text-slate-800 text-sm">Smt. Tinaben M. Maniya</span>
//                           <span className="block text-[#EA580C] text-[10px] uppercase font-extrabold mt-0.5">Joint Treasurer</span>
//                         </div>
//                       </div>

//                       <div className="w-0.5 h-8 bg-slate-300"></div>

//                       <div className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider">
//                         Volunteers, Medical Staff & Field Activists Network (100+)
//                       </div>

//                     </div>
//                   </div>

//                   {/* Governance Guidelines summary */}
//                   <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-lg font-bold text-slate-950 mb-3">Governance Code</h2>
//                     <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
//                       We comply fully with Gujarati Public Trust norms, keeping separate accounting registries for individual program receipts. Every local donor receives formal printed invoice receipts with standard 80G tax rebate certificate stamps. Audit ledgers are submitted annually to administrative and finance bureaus.
//                     </p>
//                     <button 
//                       onClick={() => navigateTo('home')}
//                       className="inline-flex items-center gap-1 text-sm font-semibold text-[#EA580C] hover:text-amber-600 transition"
//                     >
//                       <ShieldCheck className="w-4 h-4" />
//                       <span>View Trust Compliances Desk</span>
//                     </button>
//                   </div>

//                 </div>
//               </section>
//             )}

//             {/* ==================== 5. EVENTS & GALLERY VIEW ==================== */}
//             {currentPage === 'events' && (
//               <section className="py-16 bg-slate-50">
//                 <div className="max-w-7xl mx-auto px-4">

//                   {/* Page header */}
//                   <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">GALLERY & UPDATES</span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1 mb-4">
//                       Latest Events & Media Archive
//                     </h1>
//                     <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4"></div>
//                     <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
//                       Follow our direct operational milestones, volunteer camps, student gatherings, and browse of our public service gallery.
//                     </p>
//                   </div>

//                   {/* Two column layouts: Event lists + Booking panel */}
//                   <div className="grid lg:grid-cols-12 gap-8 mb-16">

//                     {/* Left: Events */}
//                     <div className="lg:col-span-7 space-y-6">
//                       <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//                         <Calendar className="text-[#EA580C] w-5 h-5" />
//                         <span>Featured Operations & Events Schedule</span>
//                       </h2>

//                       {/* Event Card 1 */}
//                       <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
//                         <div className="bg-amber-500/10 text-[#EA580C] font-extrabold rounded-xl px-4 py-3 flex flex-col justify-center items-center text-center shrink-0 w-16 h-18 self-start">
//                           <span className="block text-2xl leading-none">12</span>
//                           <span className="block text-[10px] uppercase font-bold tracking-widest mt-1">JUNE</span>
//                         </div>
//                         <div>
//                           <span className="inline-block bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase px-2 py-0.5 rounded mb-2">Upcoming Camp</span>
//                           <h3 className="text-base font-bold text-slate-900 mb-1">Specialized Geriatric Screening & Optical Camp</h3>
//                           <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2">
//                             Offering free ophthalmologist reviews, glaucoma assessments and distributing cataract reading assistance lenses in Surat municipal zones.
//                           </p>
//                           <span className="block text-[11px] text-[#64748B] font-semibold">Location: A/35, Rachna Society Compound, Varachha, Surat</span>
//                         </div>
//                       </div>

//                       {/* Event Card 2 */}
//                       <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
//                         <div className="bg-blue-500/10 text-blue-600 font-extrabold rounded-xl px-4 py-3 flex flex-col justify-center items-center text-center shrink-0 w-16 h-18 self-start">
//                           <span className="block text-2xl leading-none">24</span>
//                           <span className="block text-[10px] uppercase font-bold tracking-widest mt-1">AUG</span>
//                         </div>
//                         <div>
//                           <span className="inline-block bg-amber-100 text-amber-800 text-[9px] font-bold uppercase px-2 py-0.5 rounded mb-2">Scholarship Batch</span>
//                           <h3 className="text-base font-bold text-slate-900 mb-1">P.P. Maniya Merit Scholarship Distribution 2026</h3>
//                           <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2">
//                             Meeting selected high-school of Gujarat state and vocational institution candidates for tuition assistance check distributions.
//                           </p>
//                           <span className="block text-[11px] text-[#64748B] font-semibold">Location: Surat central civic auditorium hall</span>
//                         </div>
//                       </div>

//                       {/* Event Card 3 */}
//                       <div className="bg-white p-5 rounded-2xl border border-slate-120 shadow-sm flex gap-4 opacity-75">
//                         <div className="bg-slate-200 text-slate-600 font-extrabold rounded-xl px-4 py-3 flex flex-col justify-center items-center text-center shrink-0 w-16 h-18 self-start">
//                           <span className="block text-2xl leading-none">18</span>
//                           <span className="block text-[10px] uppercase font-bold tracking-widest mt-1">MAY</span>
//                         </div>
//                         <div>
//                           <span className="inline-block bg-slate-100 text-slate-700 text-[9px] font-bold uppercase px-2 py-0.5 rounded mb-2">COMPLETED Event</span>
//                           <h3 className="text-base font-bold text-slate-900 mb-1">Pre-Monsoon Food Resource & Staple Security Drive</h3>
//                           <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                             Successfully deployed 3,400 dry rations packs to backward area workers and families ahead of high coastal weather seasons in Saurashtra limits.
//                           </p>
//                         </div>
//                       </div>

//                     </div>

//                     {/* Right: Registration Form */}
//                     <div className="lg:col-span-5">
//                       <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md">
//                         <h2 className="text-lg font-bold text-slate-950 mb-2">Event Guest Registration</h2>
//                         <p className="text-[#64748B] text-xs leading-relaxed mb-6">
//                           Reserve a complimentary diagnosis seat, join as a voluntary guide or secure a delegate seat at scholarship award events.
//                         </p>

//                         {eventRegSuccess ? (
//                           <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-250 text-center text-slate-800">
//                             <Check className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
//                             <h3 className="text-md font-bold text-slate-900 mb-1">Registration Complete!</h3>
//                             <p className="text-xs text-slate-600 mb-4">Your diagnostic/event pass details have been verified and reserved. Kindly present this receipt code on arrival:</p>
//                             <span className="block font-mono bg-white border border-emerald-200 text-emerald-700 font-bold px-4 py-2 rounded-lg text-base tracking-wider mb-4 select-all">
//                               {eventRegId}
//                             </span>
//                             <button 
//                               onClick={() => {
//                                 setEventRegSuccess(false);
//                                 setEventReg({ name: '', mobile: '', email: '', city: '', event: 'Mega Diagnostic & Medical Camp' });
//                               }}
//                               className="text-xs text-slate-500 hover:text-slate-900 underline"
//                             >
//                               Register another attendee
//                             </button>
//                           </div>
//                         ) : (
//                           <form onSubmit={handleEventSubmit} className="space-y-4">
//                             <div>
//                               <label className="block text-xs font-semibold text-slate-750 mb-1">Full Name *</label>
//                               <input 
//                                 type="text" 
//                                 required
//                                 value={eventReg.name}
//                                 onChange={(e) => setEventReg({ ...eventReg, name: e.target.value })}
//                                 className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
//                                 placeholder="Your full name"
//                               />
//                             </div>

//                             <div className="grid grid-cols-2 gap-4">
//                               <div>
//                                 <label className="block text-xs font-semibold text-slate-750 mb-1">Mobile Number *</label>
//                                 <input 
//                                   type="tel" 
//                                   required
//                                   value={eventReg.mobile}
//                                   onChange={(e) => setEventReg({ ...eventReg, mobile: e.target.value })}
//                                   className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
//                                   placeholder="10 digit phone contact"
//                                 />
//                               </div>
//                               <div>
//                                 <label className="block text-xs font-semibold text-slate-755 mb-1">City / Village</label>
//                                 <input 
//                                   type="text" 
//                                   value={eventReg.city}
//                                   onChange={(e) => setEventReg({ ...eventReg, city: e.target.value })}
//                                   className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
//                                   placeholder="e.g. Surat, Amreli"
//                                 />
//                               </div>
//                             </div>

//                             <div>
//                               <label className="block text-xs font-semibold text-slate-750 mb-1">Select Event Operations *</label>
//                               <select 
//                                 value={eventReg.event}
//                                 onChange={(e) => setEventReg({ ...eventReg, event: e.target.value })}
//                                 className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                               >
//                                 <option value="Mega Diagnostic & Medical Camp">Specialist Geriatric Optical Diagnostics (June 12)</option>
//                                 <option value="P.P. Maniya Merit Scholarship Distribution">Scholarship Awards Distribution (Aug 24)</option>
//                                 <option value="Monsoon Disaster Aid Volunteer Meet">Pre-Monsoon Disaster Support Assembly (May 18)</option>
//                               </select>
//                             </div>

//                             <button 
//                               type="submit"
//                               className="w-full py-3 bg-[#EA580C] hover:bg-[#EA580C]/95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition"
//                             >
//                               Generate Compliant Entry Pass
//                             </button>
//                           </form>
//                         )}
//                       </div>
//                     </div>

//                   </div>

//                   {/* Media Gallery Grid */}
//                   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
//                     <h2 className="text-xl font-bold font-display text-slate-900 mb-6 text-center">Media Gallery Archive</h2>

//                     {/* Category selectors */}
//                     <div className="flex flex-wrap gap-2 justify-center mb-8">
//                       {['all', 'healthcare', 'education', 'community'].map((cat) => (
//                         <button
//                           key={cat}
//                           onClick={() => setActiveCategory(cat)}
//                           className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
//                             activeCategory === cat 
//                               ? 'bg-slate-900 text-white font-bold' 
//                               : 'bg-slate-105 text-slate-700 hover:bg-slate-200'
//                           }`}
//                         >
//                           {cat}
//                         </button>
//                       ))}
//                     </div>

//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {filteredGallery.map((item, idx) => (
//                         <div 
//                           key={item.id} 
//                           onClick={() => setLightboxIndex(idx)}
//                           className="group relative h-60 rounded-xl overflow-hidden shadow-inner cursor-pointer bg-slate-100"
//                         >
//                           <Image 
//                             src={item.url} 
//                             alt={item.title} 
//                             fill 
//                             className="object-cover group-hover:scale-103 transition-transform duration-500"
//                             referrerPolicy="no-referrer"
//                           />
//                           {/* Hover Overlay */}
//                           <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
//                             <span className="block text-xs uppercase text-amber-400 font-bold mb-1">{item.category}</span>
//                             <span className="block text-sm sm:text-base font-bold text-white mb-2">{item.title}</span>
//                             <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium font-sans">
//                               <Play className="w-3.5 h-3.5 shrink-0 fill-white" />
//                               <span>Expand visual view</span>
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                 </div>
//               </section>
//             )}

//             {/* ==================== 6. DONATE & CONTACT VIEW ==================== */}
//             {currentPage === 'donate' && (
//               <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">

//                   {/* Page header */}
//                   <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="text-rose-600 text-xs font-bold uppercase tracking-widest">GIVING BACK</span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1 mb-4 animate-fade-in">
//                       Support Our Charitable Endeavors
//                     </h1>
//                     <div className="w-20 h-1 bg-[#EA580C] mx-auto rounded-full mb-4"></div>
//                     <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
//                       Secure, verified giving routes with absolute statutory tax index coverage under Section 80G. Help transform rural generations.
//                     </p>
//                   </div>

//                   {/* Why Donate & Preset cards */}
//                   <div className="grid lg:grid-cols-12 gap-8 mb-16 items-start">

//                     {/* Left explanation and preset buttons */}
//                     <div className="lg:col-span-7 space-y-6">
//                       <h2 className="text-xl font-bold text-slate-900 mb-2">How Your Support Translates to Concrete Progress</h2>
//                       <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
//                         <p>
//                           Our administration operations are fully funded through dedicated family accounts. Hence, **100% of all public contributions** apply directly to buying medicine reserves, sponsoring merit school check components, or organic bulk grains.
//                         </p>
//                         <p className="bg-[#EA580C]/5 border-l-4 border-l-[#EA580C] p-4 text-[#EA580C] font-semibold rounded-r-xl">
//                           Tax Benefits: 50% of your donated amount is tax-deductible under Section 80G of the Indian Income Tax Act. Tax receipts will be dispatched instantly.
//                         </p>
//                       </div>

//                       {/* Preset pricing models */}
//                       <div className="mt-6">
//                         <span className="block text-xs font-bold text-[#64748B] text-slate-700 uppercase tracking-wide mb-3">Suggested Contribution Pathways</span>
//                         <div className="grid sm:grid-cols-2 gap-4">
//                           {[
//                             { amt: "500", label: "₹500", effect: "Educational kit support for 1 child", desc: "Provides high-grade paper text-notebooks, study bags and comprehensive geometry sets." },
//                             { amt: "1000", label: "₹1,000", effect: "Student Scholarship Support", desc: "Provides partial tuition subsidies allowing low-income students to continue regular secondary schooling." },
//                             { amt: "2500", label: "₹2,500", effect: "Patient Treatment Subsidies", desc: "Covers crucial diagnostics pathology testing and routine prescription drugs for 1 year." },
//                             { amt: "5000", label: "₹5,000", effect: "Medical Diagnostic Camp Day Sponsor", desc: "Supplies screening resources, medicines, and cataract tests for an entire village diagnostic project." },
//                             { amt: "10000", label: "₹10,000", effect: "Community Development Project Sponsor", desc: "Funds rural drinking assemblies setup, food security and women sewing classes workshop reserves." }
//                           ].map((item, idx) => (
//                             <button
//                               key={idx}
//                               onClick={() => {
//                                 setDonationForm({ ...donationForm, amount: item.amt });
//                                 setCustomDonationState(item.amt);
//                               }}
//                               className={`p-4 rounded-xl border text-left transition-all ${
//                                 customDonationState === item.amt
//                                   ? 'bg-[#EA580C]/5 border-[#EA580C]/80 ring-2 ring-orange-500/20' 
//                                   : 'bg-[#F8FAFC] border-slate-200 hover:border-[#EA580C]/50'
//                               }`}
//                             >
//                               <div className="flex justify-between items-center mb-1">
//                                 <span className="block text-lg font-black text-slate-900">{item.label}</span>
//                                 <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border font-bold text-[#EA580C]">{item.amt === "2500" ? "Popular Choice" : "Philanthropy"}</span>
//                               </div>
//                               <span className="block text-xs font-bold text-[#EA580C] mb-1">{item.effect}</span>
//                               <span className="block text-slate-500 text-[10px] leading-snug">{item.desc}</span>
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Interactive Donation card */}
//                     <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-150">
//                       <h2 className="text-lg font-extrabold text-slate-900 mb-1">Quick Contributions Center</h2>
//                       <p className="text-slate-500 text-xs mb-6">Select your transaction type, provide receipt contacts, and instantly process giving.</p>

//                       {showDonationSuccess ? (
//                         <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-250 text-center text-slate-800">
//                           <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-3 animate-ping" />
//                           <h3 className="text-md font-bold text-slate-900 mb-1">Thank You For Sincere Compassion!</h3>
//                           <p className="text-xs text-slate-600 mb-4">You have successfully initiated simulated donation checkout path. Your formal 80G tax clearance invoice and receipts have been dispatched to your mail coordinates. Transaction identifier reference:</p>
//                           <span className="block font-mono bg-white border border-emerald-200 text-emerald-700 font-bold px-4 py-2.5 rounded-lg text-sm tracking-widest mb-4">
//                             {localDonationFeed[0]?.txId || "TXN-VERIFIED-9382"}
//                           </span>
//                           <button 
//                             onClick={() => {
//                               setShowDonationSuccess(false);
//                               setDonationForm({ name: '', mobile: '', email: '', amount: '2500', message: '', method: 'upi' });
//                             }}
//                             className="text-xs text-slate-650 hover:text-slate-950 font-bold underline"
//                           >
//                             Send another supportive contribution
//                           </button>
//                         </div>
//                       ) : (
//                         <form onSubmit={handleDonationSubmit} className="space-y-4">

//                           {/* Interactive Custom Amount Slider / Field */}
//                           <div>
//                             <label className="block text-xs font-semibold text-slate-750 mb-1">Select Custom Amount (INR)</label>
//                             <div className="relative">
//                               <span className="absolute left-3.5 top-2 text-lg font-bold text-slate-500">₹</span>
//                               <input 
//                                 type="number" 
//                                 required
//                                 value={customDonationState}
//                                 onChange={(e) => {
//                                   setCustomDonationState(e.target.value);
//                                   setDonationForm({ ...donationForm, amount: e.target.value });
//                                 }}
//                                 className="w-full pl-8 pr-4 py-2 rounded-lg border border-slate-205 font-bold text-slate-900"
//                                 placeholder="Custom Amount"
//                               />
//                             </div>
//                           </div>

//                           <div>
//                             <label className="block text-xs font-semibold text-slate-755 mb-1">Donor Full Name</label>
//                             <input 
//                               type="text" 
//                               value={donationForm.name}
//                               onChange={(e) => setDonationForm({ ...donationForm, name: e.target.value })}
//                               placeholder="e.g. Shri Rajesh Patel (Optional)"
//                               className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                             />
//                           </div>

//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-xs font-semibold text-slate-755 mb-1">Email Coordinates *</label>
//                               <input 
//                                 type="email" 
//                                 required
//                                 value={donationForm.email}
//                                 onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
//                                 placeholder="For receipt sending"
//                                 className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-xs font-semibold text-slate-755 mb-1">Mobile Contact *</label>
//                               <input 
//                                 type="tel" 
//                                 required
//                                 value={donationForm.mobile}
//                                 onChange={(e) => setDonationForm({ ...donationForm, mobile: e.target.value })}
//                                 placeholder="Mobile number"
//                                 className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                               />
//                             </div>
//                           </div>

//                           {/* Selected Checkout Path Tabs */}
//                           <div>
//                             <label className="block text-xs font-semibold text-slate-760 mb-2">Select Your Funding Gateway Option</label>
//                             <div className="grid grid-cols-3 gap-2">
//                               {['upi', 'card', 'bank'].map((gw) => (
//                                 <button
//                                   type="button"
//                                   key={gw}
//                                   onClick={() => setDonationForm({ ...donationForm, method: gw })}
//                                   className={`py-1.5 rounded-lg border text-xs font-bold uppercase transition ${
//                                     donationForm.method === gw 
//                                       ? 'bg-slate-900 border-slate-900 text-white' 
//                                       : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
//                                   }`}
//                                 >
//                                   {gw} Gateway
//                                 </button>
//                               ))}
//                             </div>
//                           </div>

//                           {/* UPI Code Simulator */}
//                           {donationForm.method === 'upi' && (
//                             <div className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center text-center">
//                               <span className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase">Authentic UPI QR Scanner</span>
//                               <div className="relative w-28 h-28 bg-[#F8FAFC] border-2 border-dashed border-amber-300 rounded-lg flex items-center justify-center mb-2">
//                                 <QrCode className="w-20 h-20 text-slate-750" />
//                               </div>
//                               <span className="block text-xs font-bold text-slate-800">VPA: ppmaniya@sbi</span>
//                               <span className="block text-[10px] text-slate-400 mt-0.5">Late Popatbhai Premjibhai Maniya Trust</span>
//                             </div>
//                           )}

//                           {/* Card Details Simulator */}
//                           {donationForm.method === 'card' && (
//                             <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-2">
//                               <span className="block text-[11px] text-slate-400 font-bold uppercase">Compliant Merchant Sandbox Gate</span>
//                               <div className="grid grid-cols-3 gap-2">
//                                 <span className="bg-slate-50 p-2 text-center rounded border font-mono text-xs text-slate-700">Visa / RuPay</span>
//                                 <span className="bg-slate-50 p-2 text-center rounded border font-mono text-xs text-slate-700">Master</span>
//                                 <span className="bg-slate-50 p-2 text-center rounded border font-mono text-xs text-slate-700">NetBanking</span>
//                               </div>
//                             </div>
//                           )}

//                           {/* Bank details with copy to clipboard */}
//                           {donationForm.method === 'bank' && (
//                             <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-2 font-mono text-[11px] text-slate-700 text-left">
//                               <span className="block font-sans text-xs font-semibold text-slate-400 mb-1 uppercase">Direct Bank Transfer Credentials</span>
//                               <div className="flex justify-between items-center">
//                                 <span>BANK: State Bank of India (Surat Varachha Branch)</span>
//                               </div>
//                               <div className="flex justify-between items-center border-t border-slate-100 pt-1.5">
//                                 <span>A/C No: 492318492031</span>
//                                 <button type="button" onClick={() => copyToClipboard('492318492031')} className="text-[#EA580C] hover:underline font-bold flex items-center gap-0.5">
//                                   <Copy className="w-3 h-3" /> Copy
//                                 </button>
//                               </div>
//                               <div className="flex justify-between items-center border-t border-slate-100 pt-1.5">
//                                 <span>IFSC Code: SBIN0005431</span>
//                                 <button type="button" onClick={() => copyToClipboard('SBIN0005431')} className="text-[#EA580C] hover:underline font-bold flex items-center gap-0.5">
//                                   <Copy className="w-3 h-3" /> Copy
//                                 </button>
//                               </div>
//                             </div>
//                           )}

//                           <button 
//                             type="submit"
//                             className="w-full py-3 bg-[#EA580C] hover:bg-[#EA580C]/95 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 transition-all"
//                           >
//                             PROCESS SECURE GIVING • ₹{customDonationState}
//                           </button>
//                         </form>
//                       )}
//                     </div>
//                   </div>

//                   {/* CONTACT & OFFICE DETAILS GRID */}
//                   <div className="grid lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-slate-100">

//                     {/* Left address details */}
//                     <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
//                       <div>
//                         <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest block mb-1">VISIT OR PHONE</span>
//                         <h2 className="text-xl font-bold text-slate-900 mb-4">Official Secretarial Correspondence</h2>

//                         <div className="space-y-4 text-xs sm:text-sm">
//                           <div className="flex items-start gap-3">
//                             <MapPin className="w-5 h-5 text-[#EA580C] shrink-0" />
//                             <div>
//                               <span className="block font-bold text-slate-800">Registered Office Address</span>
//                               <span className="block text-slate-600 mt-1 select-all">{t.address}</span>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3 border-t pt-3 border-slate-100">
//                             <Phone className="w-5 h-5 text-[#EA580C] shrink-0" />
//                             <div>
//                               <span className="block font-bold text-slate-800">Phone Liaison Desk</span>
//                               <span className="block text-slate-650 mt-1 hover:text-amber-600 transition select-all">{t.phone}</span>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3 border-t pt-3 border-slate-100">
//                             <Mail className="w-5 h-5 text-[#EA580C] shrink-0" />
//                             <div>
//                               <span className="block font-bold text-slate-800">E-mail Correspondence Inbox</span>
//                               <span className="block text-slate-650 mt-1 hover:text-amber-600 transition select-all">{t.email}</span>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3 border-t pt-3 border-slate-100">
//                             <Clock className="w-5 h-5 text-[#EA580C] shrink-0" />
//                             <div>
//                               <span className="block font-bold text-slate-800">Office Working Hours</span>
//                               <span className="block text-slate-600 mt-1">{t.officeHours}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Embed-like Custom Design Google Map */}
//                       <div className="bg-slate-100 rounded-2xl h-56 relative overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center p-4 text-center">
//                         {/* Custom illustrative map layout to secure performance and avoid cross-origin canvas crashes */}
//                         <div className="absolute inset-0 bg-slate-100 flex flex-col justify-center items-center p-3">
//                           <MapPin className="w-10 h-10 text-[#EA580C] mb-2 animate-bounce" />
//                           <h4 className="text-xs font-bold text-slate-900 uppercase">Kapodara Char Rasta, Varachha, Surat</h4>
//                           <span className="block text-[10px] text-slate-450 mt-0.5">Surat City Public Transport Hub (Gujarat)</span>
//                           <span className="block text-[10px] text-emerald-600 font-bold mt-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">Mapped coordinates loaded successfully</span>

//                           {/* Anchor element to direct standard maps searches */}
//                           <a 
//                             href="https://maps.google.com/?q=Kapodara+Char+Rasta+Surat" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="mt-3 text-[10px] uppercase font-bold text-[#EA580C] hover:underline"
//                           >
//                             Open in Google Maps Navigation
//                           </a>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Secretarial Contact Form */}
//                     <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-150 flex flex-col justify-between">
//                       <div>
//                         <h2 className="text-lg font-bold text-slate-950 mb-1">Direct Secretarial Inquiry Desk</h2>
//                         <p className="text-slate-500 text-xs mb-6">Need support check lists? Requesting volunteer entry guidelines? Drop your thoughts below.</p>

//                         {contactSuccess ? (
//                           <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
//                             <Check className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
//                             <h3 className="text-md font-bold text-slate-900">Message Dispatched!</h3>
//                             <p className="text-xs text-slate-650 mt-1">Our administrative volunteers will get in touch with you within 24 operational hours.</p>
//                           </div>
//                         ) : (
//                           <form onSubmit={handleContactSubmit} className="space-y-4">
//                             <div>
//                               <label className="block text-xs font-semibold text-slate-755 mb-1">Your Full Name *</label>
//                               <input 
//                                 type="text" 
//                                 required
//                                 value={contactForm.name}
//                                 onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
//                                 className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                                 placeholder="FullName"
//                               />
//                             </div>

//                             <div className="grid grid-cols-2 gap-4">
//                               <div>
//                                 <label className="block text-xs font-semibold text-slate-755 mb-1">Mobile Contact *</label>
//                                 <input 
//                                   type="tel" 
//                                   required
//                                   value={contactForm.mobile}
//                                   onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value })}
//                                   className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                                   placeholder="Phone"
//                                 />
//                               </div>
//                               <div>
//                                 <label className="block text-xs font-semibold text-slate-755 mb-1">Email Coordinates</label>
//                                 <input 
//                                   type="email" 
//                                   value={contactForm.email}
//                                   onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
//                                   className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                                   placeholder="Direct mail box info"
//                                 />
//                               </div>
//                             </div>

//                             <div>
//                               <label className="block text-xs font-semibold text-slate-760 mb-1">Query Message *</label>
//                               <textarea 
//                                 rows={3}
//                                 required
//                                 value={contactForm.message}
//                                 onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
//                                 className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
//                                 placeholder="Describe your inquiry"
//                               />
//                             </div>

//                             <button 
//                               type="submit"
//                               className="w-full py-3 bg-[#EA580C] hover:bg-[#EA580C]/95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition"
//                             >
//                               Dispatch Secretarial Request
//                             </button>
//                           </form>
//                         )}
//                       </div>
//                     </div>

//                   </div>

//                 </div>
//               </section>
//             )}

//           </motion.div>
//         </AnimatePresence>
//       </main>

//       {/* LIGHTBOX FOR PHOTO VIEWING */}
//       {lightboxIndex !== null && (
//         <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
//           <button 
//             onClick={() => setLightboxIndex(null)}
//             className="absolute top-5 right-5 p-3 text-white hover:text-amber-400 text-lg font-bold bg-white/10 rounded-full transition"
//             aria-label="Close Lightbox"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="max-w-4xl w-full flex flex-col items-center">
//             <div className="relative aspect-video w-full max-h-[70vh] rounded-2xl overflow-hidden bg-slate-900">
//               <Image 
//                 src={galleryItems[lightboxIndex].url}
//                 alt={galleryItems[lightboxIndex].title}
//                 fill
//                 className="object-contain"
//                 referrerPolicy="no-referrer"
//               />
//             </div>
//             <div className="mt-4 text-center">
//               <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">{galleryItems[lightboxIndex].category}</span>
//               <h3 className="text-white font-bold text-lg mt-1">{galleryItems[lightboxIndex].title}</h3>

//               {/* Lightbox navigation */}
//               <div className="flex gap-4 mt-4 justify-center text-xs text-white">
//                 <button 
//                   onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)}
//                   className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-md font-bold"
//                 >
//                   ◀ Previous
//                 </button>
//                 <button 
//                   onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryItems.length)}
//                   className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-md font-bold"
//                 >
//                   Next ▶
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 4. LARGE MEGA-FOOTER */}
//       <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

//           {/* Col 1: About Trust */}
//           <div className="col-span-2 space-y-4">
//             <span className="text-[#EA580C] font-extrabold text-sm tracking-wider uppercase block">{t.fullName}</span>
//             <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
//               Formed in 2019 to honor the lifelong philanthropic vision of Late Popatbhai Premjibhai Maniya. Actively driving educational scholarship schemes, clinical medicine diagnostics, and social welfare programs.
//             </p>
//             <div className="pt-2">
//               <span className="block text-xs text-slate-500 font-bold uppercase mb-1">State Registry ID</span>
//               <span className="block font-mono text-xs text-amber-500 font-semibold select-all">Reg E/22531/SURAT</span>
//             </div>
//           </div>

//           {/* Col 2: Navigation Links */}
//           <div className="space-y-4">
//             <span className="text-white font-bold text-xs uppercase tracking-widest block">Quick Links</span>
//             <ul className="space-y-2.5 text-xs sm:text-sm">
//               {['home', 'about', 'activities', 'trustees', 'events', 'donate'].map((item) => (
//                 <li key={item}>
//                   <button 
//                     onClick={() => navigateTo(item)}
//                     className="text-slate-400 hover:text-amber-400 transition"
//                   >
//                     {item === 'home' && t.home}
//                     {item === 'about' && t.about}
//                     {item === 'activities' && t.activities}
//                     {item === 'trustees' && t.trustees}
//                     {item === 'events' && t.events}
//                     {item === 'donate' && t.contact}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Col 3: Focus Activities */}
//           <div className="space-y-4">
//             <span className="text-white font-bold text-xs uppercase tracking-widest block">Core Divisions</span>
//             <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
//               <li>
//                 <button onClick={() => navigateTo('activities')} className="hover:text-amber-400">Education Fellowship</button>
//               </li>
//               <li>
//                 <button onClick={() => navigateTo('activities')} className="hover:text-amber-400">Medical Subsidies Bank</button>
//               </li>
//               <li>
//                 <button onClick={() => navigateTo('activities')} className="hover:text-amber-400">Rural Welfare Projects</button>
//               </li>
//               <li>
//                 <button onClick={() => navigateTo('activities')} className="hover:text-amber-400">Tailoring Centers</button>
//               </li>
//               <li>
//                 <button onClick={() => navigateTo('activities')} className="hover:text-amber-400">Yoga Wellness Camps</button>
//               </li>
//             </ul>
//           </div>

//           {/* Col 4: Secretariat Details */}
//           <div className="col-span-2 lg:col-span-1 space-y-4">
//             <span className="text-white font-bold text-xs uppercase tracking-widest block">Secretariat HQ</span>
//             <ul className="space-y-2.5 text-xs text-slate-400">
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
//                 <span className="select-all">{t.address}</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 text-amber-500 shrink-0" />
//                 <span className="select-all">{t.phone}</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-amber-500 shrink-0" />
//                 <span className="select-all">{t.email}</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Legal Compliancy terms footer links */}
//         <div className="pt-8 border-t border-slate-800 max-w-7xl mx-auto px-4 text-slate-500 text-[10.5px] sm:text-xs">
//           <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-center md:text-left">
//             <div>
//               <span className="block">&copy; {new Date().getFullYear()} Late Popatbhai Premjibhai Maniya Trust. All Public Rights Reserved.</span>
//               <span className="block text-slate-600 mt-1">Compiled in accordance with Section 12A, 80G and corporate CSR regulations in the Republic of India.</span>
//             </div>

//             <div className="flex flex-wrap gap-4 justify-center md:justify-end text-slate-400">
//               <button onClick={() => setToastMessage("Privacy Policy: Standard public data usage guidelines are fully enforced. No cookie records persist.")} className="hover:text-white">Privacy Policy</button>
//               <span>•</span>
//               <button onClick={() => setToastMessage("Terms & Conditions: Sincere giving transactions operate compliant sandbox check paths.")} className="hover:text-white">Terms & Conditions</button>
//               <span>•</span>
//               <button onClick={() => setToastMessage("Refund Policy: Philanthropic grants can be requested for review within 15 working days by mailing official desk coordinates.")} className="hover:text-white font-medium text-amber-500">Refund Policy</button>
//               <span>•</span>
//               <button onClick={() => setToastMessage("Disclaimer: The trust operates purely as a certified non-profit state NGO. It contains no religious or political alignments.")} className="hover:text-white">Donor Disclaimer</button>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* BACK TO TOP FLOATING BUTTON */}
//       {showScrollTop && (
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white rounded-full shadow-2xl hover:scale-105 transition-transform z-30 border border-white/20"
//           aria-label="Back to top"
//         >
//           <ChevronRight className="w-5 h-5 -rotate-90" />
//         </button>
//       )}

//     </div>
//   );
// }

// // Compact helper components to avoid type errors
// function HeartCircle(props: any) {
//   return <Heart className={props.className} />;
// }

// function CheckCircle2(props: any) {
//   return <Check className={props.className} />;
// }

// function UserRound(props: any) {
//   return <Users className={props.className} />;
// }

// function Sparkles(props: any) {
//   return <Award className={props.className} />;
// }


// --------------------------------------------------------

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import {
//   Users, Activity, BookOpen, Building2, Heart, Clock,
//   ArrowRight, ChevronRight, Check, Download, ShieldCheck,
//   HeartHandshake, UserCheck,
// } from "lucide-react";
// import { IMAGES, DICTIONARY, Lang, DictType } from "@/lib/constants";

// import Footer from "@/components/footer";
// import Header from "@/components/header";

// interface HomePageProps {
//   lang: Lang;
//   navigateTo: (page: string) => void;
//   setDonationForm: (fn: (prev: any) => any) => void;
//   setToastMessage: (msg: string) => void;
// }

// export default function HomePage({ lang, navigateTo, setDonationForm, setToastMessage }: HomePageProps) {
//   const t: DictType = DICTIONARY[lang];

//   return (
//     <>
//       <Header />
//       <div>
//         {/* HERO */}
//         <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 lg:py-[130px]">
//           <div className="absolute inset-0 z-0 opacity-20">
//             <Image src={IMAGES.hero} alt="Education support" fill priority className="object-cover" referrerPolicy="no-referrer" />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
//           </div>
//           <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] z-0" />
//           <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] z-0" />

//           <div className="max-w-7xl mx-auto px-4 relative z-10">
//             <div className="max-w-3xl">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
//                 className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-6">
//                 <HeartHandshake className="w-3.5 h-3.5" />
//                 <span>Registered Charity Portal • Government Act Compliant</span>
//               </motion.div>

//               <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
//                 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
//                 {t?.tagline}
//               </motion.h1>

//               <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
//                 className="text-slate-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed font-light">
//                 {t?.subTagline}
//               </motion.p>

//               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
//                 className="flex flex-wrap gap-4">
//                 <button onClick={() => navigateTo("donate")}
//                   className="px-6 py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white font-bold rounded-xl shadow-lg shadow-orange-600/35 hover:scale-105 transition flex items-center gap-2 text-sm sm:text-base">
//                   <span>{t?.donateCta}</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//                 <button onClick={() => navigateTo("activities")}
//                   className="px-6 py-3.5 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700/80 hover:bg-slate-700 hover:text-amber-300 transition flex items-center gap-1.5 text-sm sm:text-base">
//                   <span>{t?.knowWork}</span>
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//                 <button onClick={() => navigateTo("donate")}
//                   className="px-6 py-3.5 bg-slate-900/60 text-slate-200 font-semibold rounded-xl border border-white/10 hover:bg-slate-900 hover:text-amber-400 transition text-sm sm:text-base">
//                   {t?.beVolunteer}
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* IMPACT STATS */}
//         <section className="bg-gradient-to-b from-slate-900 to-[#10172A] text-white py-12 border-y border-slate-800/80">
//           <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
//             {[
//               { val: "10,000+", label: t?.impactLives, icon: Users, color: "text-amber-400" },
//               { val: "500+", label: t?.impactMedical, icon: Activity, color: "text-orange-400" },
//               { val: "200+", label: t?.impactStudents, icon: BookOpen, color: "text-blue-400" },
//               { val: "50+", label: t?.impactCamps, icon: Building2, color: "text-indigo-400" },
//               { val: "100+", label: t?.impactVolunteers, icon: Heart, color: "text-rose-400" },
//               { val: "7+", label: t?.impactYears, icon: Clock, color: "text-emerald-400" },
//             ].map((stat, i) => (
//               <div key={i} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition group">
//                 <div className="mx-auto w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
//                   <stat.icon className={`w-4 h-4 ${stat.color}`} />
//                 </div>
//                 <div className="text-2xl sm:text-3xl font-extrabold leading-tight">{stat.val}</div>
//                 <div className="text-[11.5px] text-slate-400 mt-1 uppercase tracking-wider leading-relaxed">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CHAIRMAN MESSAGE */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="grid lg:grid-cols-12 gap-12 items-center">
//               <div className="lg:col-span-5 relative">
//                 <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-25" />
//                 <div className="relative aspect-square w-full max-w-[400px] mx-auto rounded-2xl bg-slate-100 overflow-hidden border-4 border-white shadow-2xl">
//                   <Image src={IMAGES.chairman} alt={t?.chairmanName} fill className="object-cover" referrerPolicy="no-referrer" />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-2xl p-4 shadow-xl z-10 text-center border-2 border-white max-w-[200px]">
//                   <span className="block text-xs uppercase font-bold tracking-widest text-amber-100 mb-0.5">ESTD</span>
//                   <span className="block text-2xl font-black text-white">2019</span>
//                   <span className="block text-[10px] uppercase font-bold text-slate-100 leading-tight">By P. P. Maniya Family</span>
//                 </div>
//               </div>

//               <div className="lg:col-span-7">
//                 <div className="flex items-center gap-1 text-[#EA580C] text-xs font-bold tracking-widest uppercase mb-2">
//                   <UserCheck className="w-4 h-4" />
//                   <span>CHAIRMAN&apos;S DESK</span>
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-6">A Legacy of Care and Action</h2>
//                 <div className="relative mb-6">
//                   <span className="absolute -top-8 -left-5 text-slate-100 text-8xl font-serif select-none z-0 leading-none">&ldquo;</span>
//                   <blockquote className="relative z-10 text-[17px] sm:text-[19px] italic font-medium text-slate-800 leading-relaxed pl-2">
//                     {t?.chairmanQuote}
//                   </blockquote>
//                 </div>
//                 <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
//                   <p>Late Popatbhai Premjibhai Maniya lived with a profound belief in the intrinsic value of every human life. He believed that no child should be denied access to schooling, and no citizen should struggle without proper medical support.</p>
//                   <p>Working directly within Surat and broad rural belts across Western India, we establish structured, audited scholarships for outstanding low-income students and drive diagnostic assemblies to identify health ailments early.</p>
//                 </div>
//                 <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
//                   <div>
//                     <span className="block text-md font-bold text-slate-900">{t?.chairmanName}</span>
//                     <span className="block text-xs uppercase font-extrabold tracking-widest text-[#EA580C] mt-0.5">{t?.chairmanTitle}</span>
//                   </div>
//                   <div className="text-right text-slate-300 font-serif text-xl italic select-none">B. P. Maniya</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FOCUS AREAS */}
//         <section className="py-16 bg-slate-50 border-t border-slate-100">
//           <div className="max-w-7xl mx-auto px-4 text-center">
//             <div className="max-w-2xl mx-auto mb-12">
//               <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">SOCIETY WELFARE MATTERS</span>
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3">Our Structural Pillars of Care</h2>
//               <p className="text-slate-600 text-sm sm:text-base">We prioritize sustainable, direct-reach social care activities based on critical civic development paradigms.</p>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//               {[
//                 { title: "Education Support", desc: "Merit-cum-Means scholarships, free schooling toolkits, uniforms, and text-packs for rural children.", icon: BookOpen, color: "border-t-4 border-t-amber-500 text-amber-600 bg-amber-500/5 hover:bg-amber-500/10" },
//                 { title: "Medical Assistance", desc: "Patient treatment subsidies, medicine supplies support, diagnostic assistance, and clinical hospital aid.", icon: Activity, color: "border-t-4 border-t-blue-500 text-blue-600 bg-blue-500/5 hover:bg-blue-500/10" },
//                 { title: "Community Welfare", desc: "Direct food distribution, clean local resources access, and social relief activities in high-need rural areas.", icon: Heart, color: "border-t-4 border-t-emerald-500 text-emerald-600 bg-emerald-500/5 hover:bg-emerald-500/10" },
//                 { title: "Women Empowerment", desc: "Vocational tailoring skills, basic financial literacy workshops, and self-reliance business mentorship.", icon: Users, color: "border-t-4 border-t-rose-500 text-rose-600 bg-rose-500/5 hover:bg-rose-500/10" },
//                 { title: "Youth Development", desc: "Digital systems literacy programs, vocational computer classes, and employment search guidance.", icon: BookOpen, color: "border-t-4 border-t-indigo-500 text-indigo-600 bg-indigo-500/5 hover:bg-indigo-500/10" },
//                 { title: "Emergency Relief", desc: "Rapid monsoon/disaster ration supplies distribution and immediate emergency aid assemblies.", icon: Heart, color: "border-t-4 border-t-red-500 text-red-600 bg-red-500/5 hover:bg-red-500/10" },
//                 { title: "Skill Development", desc: "Professional workshop opportunities and practical industrial artisan training.", icon: Building2, color: "border-t-4 border-t-cyan-500 text-cyan-600 bg-cyan-500/5 hover:bg-cyan-500/10" },
//                 { title: "Senior Citizen Support", desc: "Geriatric screening camps, complimentary visual testing, reading glasses, and health checks.", icon: HeartHandshake, color: "border-t-4 border-t-violet-500 text-violet-600 bg-violet-500/5 hover:bg-violet-500/10" },
//               ].map((item, i) => (
//                 <div key={i} className={`p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-slate-100 ${item.color}`}>
//                   <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
//                     <item.icon className="w-5 h-5" />
//                   </div>
//                   <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
//                   <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FEATURED PROJECTS */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
//               <div>
//                 <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">IMPACT PROJECTS</span>
//                 <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Our Leading Strategic Operations</h2>
//               </div>
//               <button onClick={() => navigateTo("activities")} className="text-amber-600 hover:text-[#EA580C] font-semibold text-sm flex items-center gap-1 mt-4 md:mt-0 transition">
//                 <span>View All Projects</span>
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { title: "P.P. Maniya Merit Scholarship", tag: "Education", img: IMAGES.education, impact: "200+ Students receiving tuition backing", desc: "A robust scholarship model targeting lower-income high performers in school and technical vocational institutions.", amount: "1000", message: "Supporting Educational Scholarships" },
//                 { title: "Mega Diagnostic & Medical Camps", tag: "Healthcare", img: IMAGES.medicalCamp, impact: "5,000+ Screened for critical alignment checks", desc: "Mobilizing specialist doctors, modern testing reagents, and medicine modules to rural sectors around Surat.", amount: "5000", message: "Supporting Medical Camps" },
//                 { title: "Food Security & Hunger Relief", tag: "Welfare", img: IMAGES.charityWelfare, impact: "15,000+ Nutritious meals served this cycle", desc: "Providing staple grains, protein foods, and direct organic groceries support to daily labor zones and communities.", amount: "2500", message: "Supporting Community Relief" },
//               ].map((prj, idx) => (
//                 <div key={idx} className="group rounded-2xl bg-white overflow-hidden border border-slate-100 shadow-md flex flex-col h-full hover:shadow-xl transition-all">
//                   <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
//                     <Image src={prj.img} alt={prj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
//                     <div className="absolute top-3 left-3 bg-[#111827]/85 backdrop-blur-sm text-amber-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">{prj.tag}</div>
//                   </div>
//                   <div className="p-6 flex flex-col grow">
//                     <h3 className="text-base font-bold text-slate-900 line-clamp-1 mb-2 group-hover:text-[#EA580C] transition-colors">{prj.title}</h3>
//                     <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">{prj.desc}</p>
//                     <div className="mt-auto bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 text-xs font-semibold text-slate-700 flex items-center gap-2">
//                       <Check className="w-4 h-4 text-emerald-500 shrink-0" />
//                       <span>{prj.impact}</span>
//                     </div>
//                     <button
//                       onClick={() => { setDonationForm((prev: any) => ({ ...prev, amount: prj.amount, message: prj.message })); navigateTo("donate"); }}
//                       className="w-full py-2.5 bg-slate-900 hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors duration-200">
//                       Support This Project
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TRANSPARENCY */}
//         <section className="py-16 bg-slate-900 text-white relative">
//           <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
//           <div className="max-w-7xl mx-auto px-4 relative z-10">
//             <div className="max-w-2xl mx-auto text-center mb-12">
//               <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest">REGULATORY ASSURANCE</span>
//               <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white mb-3">Transparency & Verified Credentials</h2>
//               <p className="text-slate-400 text-xs sm:text-sm">We maintain absolute financial compliance matching statutory expectations for authorized NGOs in India.</p>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { title: "Trust Registration", code: "Reg No: E/22531/SURAT", details: "Established under the Bombay Public Trusts Act, 1950. Operating with full state administrative authorizations.", download: "Registration-Certificate.pdf" },
//                 { title: "Section 12A Certification", code: "Order No: ITBA/EXM/S/12A/2020", details: "Permanent income tax exemption permit index validating institutional philanthropic status.", download: "12A-Order-Exemption.pdf" },
//                 { title: "Section 80G Tax Exemption", code: "Order No: ITBA/EXM/S/80G/28A", details: "Authorizes our donors to claim standard deduction tax rebates under the Income Tax Act.", download: "80G-Tax-Exempt-Certificate.pdf" },
//                 { title: "PAN Registration Desk", code: "PAN: AALTP7522X", details: "Formal Corporate PAN allocation for seamless banking accountability and compliant audits.", download: "PAN-Card-Copy.pdf" },
//                 { title: "Annual Compliance Audit 2025", code: "Audited Ledger: FY 2024-25", details: "Full balance sheets and disbursement pathways signed by authorized external Chartered Accountants.", download: "Annual-Audit-Report-2025.pdf" },
//                 { title: "CSR Partnership Gateway", code: "Reg No: CSR00031942", details: "Permits public and private enterprises to deploy mandatory CSR reserves straight into our ventures.", download: "CSR-1-Affiliation-Form.pdf" },
//               ].map((doc, idx) => (
//                 <div key={idx} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
//                   <div>
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-sm font-bold text-white uppercase">{doc.title}</span>
//                       <ShieldCheck className="w-5 h-5 text-emerald-400" />
//                     </div>
//                     <span className="block text-xs font-mono text-amber-400 font-semibold mb-2">{doc.code}</span>
//                     <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{doc.details}</p>
//                   </div>
//                   <button onClick={() => { setToastMessage(`Downloading ${doc.download}...`); }}
//                     className="inline-flex items-center gap-1.5 text-xs text-amber-500 hover:text-amber-400 font-bold uppercase tracking-wider self-start mt-2">
//                     <Download className="w-4 h-4" />
//                     <span>Download Verified Document</span>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-20 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white">
//           <div className="max-w-4xl mx-auto px-4 text-center">
//             <Heart className="w-12 h-12 fill-white animate-pulse mx-auto mb-6 opacity-90" />
//             <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">Your Sincere Giving Powers Immediate Generational Upliftment</h2>
//             <p className="text-amber-50 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
//               Every single rupee translates to a student&apos;s clean workbook, life-saving geriatric care, or immediate disaster nutrition support.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button onClick={() => navigateTo("donate")}
//                 className="px-8 py-4 bg-slate-950 text-[#F59E0B] hover:bg-slate-900 font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition shadow-xl">
//                 Make Your Contribution Online
//               </button>
//               <button onClick={() => navigateTo("donate")}
//                 className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base tracking-wider uppercase rounded-xl transition shadow-md">
//                 Become a Voluntary Pillar
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }