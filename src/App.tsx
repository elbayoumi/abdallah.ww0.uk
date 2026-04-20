import { Mail, Phone, MapPin, Download, Send, Facebook, Linkedin, Github, Globe, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { translations } from './translations';

// --- Types ---
type Lang = 'ar' | 'en';

const Preloader = ({ onComplete }: { onComplete: () => void, key?: string }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <div className="relative w-32 h-32 mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          {/* Ground */}
          <motion.path 
            d="M20 85 H80" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Stem */}
          <motion.path 
            d="M50 85 V40" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Left Leaf */}
          <motion.path
            d="M50 65 C30 65 25 50 50 65"
            fill="currentColor"
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            className="origin-bottom-right"
          />
          <motion.path
            d="M50 65 Q30 50 20 65 Q30 80 50 65Z"
            fill="currentColor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          {/* Right Leaf */}
          <motion.path
            d="M50 50 Q75 35 85 50 Q75 65 50 50Z"
            fill="currentColor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          />
          
          {/* Top Bud */}
          <motion.circle
            cx="50" cy="40" r="4"
            fill="var(--color-accent)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="text-primary font-serif text-2xl font-bold tracking-widest mb-2">GROWING</div>
        <div className="flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FieldGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="fieldPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.rect
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: [0, 80, 80, 0], opacity: [0, 1, 1, 0] }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 5 
              }}
              x="10" y="10" width="2" fill="currentColor" className="text-primary/30"
            />
            <motion.rect
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: [0, 60, 60, 0], opacity: [0, 0.5, 0.5, 0] }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 5 
              }}
              x="30" y="20" width="2" fill="currentColor" className="text-primary/20"
            />
            <motion.rect
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: [0, 90, 90, 0], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 5 
              }}
              x="50" y="5" width="2" fill="currentColor" className="text-primary/40"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fieldPattern)" />
      </svg>
      
      {/* Animated Scanline simulating agricultural drone scanning or precision survey */}
      <motion.div 
        animate={{ translateY: ['-100%', '200%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent shadow-[0_0_15px_rgba(27,67,50,0.2)]"
      />
    </div>
  );
};

// --- Components ---

const FloatingLeaves = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: '110%', 
            x: `${Math.random() * 100}%`,
            rotate: 0 
          }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            y: '-10%',
            x: `${(Math.random() * 100) + (Math.sin(i) * 10)}%`,
            rotate: 360
          }}
          transition={{ 
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute text-primary/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 10,6.25C9.06,6.5 8.16,6.84 7.37,7.18L8.14,5.33L6.29,4.56C5.12,7.38 4,11 4,11C4,11 5,11 5,11C10,11 12,9 12,9C12,9 14,10 17,8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const SectionHeader = ({ title, subtitle, t }: { title: string, subtitle?: string, t: any }) => (
  <div className="mb-16 relative">
    <motion.div 
      initial={{ height: 0 }}
      whileInView={{ height: '60px' }}
      transition={{ duration: 1, ease: "circOut" }}
      className="absolute -top-16 left-0 w-[1px] bg-primary/30"
    />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4 flex items-center gap-3">
        {title}
        <motion.span 
          initial={{ width: 0 }}
          whileInView={{ width: '40px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-[2px] bg-primary inline-block" 
        />
      </h2>
      {subtitle && <p className="text-neutral-500 max-w-2xl text-lg">{subtitle}</p>}
    </motion.div>
  </div>
);

const Navbar = ({ lang, setLang, t }: { lang: Lang, setLang: (l: Lang) => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
      isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 sm:gap-4">
        <div className="text-primary font-serif text-lg sm:text-2xl font-bold tracking-tight truncate max-w-[150px] sm:max-w-none">
          {t.name}
        </div>
        
        <div className="hidden lg:flex gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-all text-[10px] sm:text-xs font-bold whitespace-nowrap"
          >
            <Globe size={14} />
            <span className="hidden xs:inline">{lang === 'ar' ? 'English' : 'العربية'}</span>
            <span className="xs:hidden">{lang === 'ar' ? 'EN' : 'AR'}</span>
          </button>
          
          <a 
            href="#contact" 
            className="hidden sm:inline-block bg-primary text-white px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-primary-light transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            {t.nav.contact}
          </a>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-t border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold mt-2"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ t, onShowCV }: { t: any, onShowCV: () => void }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCVClick = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onShowCV();
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden blueprint-grid">
      <FloatingLeaves />
      <FieldGrid />
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-start"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-neutral-900 leading-tight mb-6">
            {t.hero.firstName} <br />
            <span className="text-primary">{t.hero.lastName}</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-10 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
            >
              {t.hero.cta}
              <Send size={18} className="rtl:rotate-180" />
            </a>
            <button 
              onClick={handleCVClick}
              disabled={isGenerating}
              className="bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 shadow-xl shadow-neutral-200/50 group active:scale-95 disabled:opacity-50"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                <>
                  {t.hero.cv}
                  <Download size={18} className="group-hover:animate-bounce" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 relative z-10 border-8 border-white shadow-2xl">
            <img 
              src="https://picsum.photos/seed/agriculture/800/800" 
              alt="Abdallah Ashraf - Agricultural Engineering" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const About = ({ t }: { t: any }) => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader title={t.about.heading} t={t} />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-neutral-700 leading-loose mb-8 text-justify">
              {t.about.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                <div className="text-primary font-bold text-2xl md:text-3xl mb-2">{t.about.country}</div>
                <div className="text-neutral-500 text-sm">{t.about.countryLabel}</div>
              </div>
              <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                <div className="text-primary font-bold text-2xl md:text-3xl mb-2">{t.about.year}</div>
                <div className="text-neutral-500 text-sm">{t.about.yearLabel}</div>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src="https://picsum.photos/seed/farm1/400/500" alt="Agricultural Practice" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg translate-y-8"
              >
                <img src="https://picsum.photos/seed/farm2/400/500" alt="Field Work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = ({ t }: { t: any }) => {
  return (
    <section id="education" className="section-padding bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,50 Q25,30 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t.education.heading} subtitle={t.education.subheading} t={t} />
        
        <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="premium-card flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-start"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
            <div className="text-primary font-bold text-2xl font-serif">BA</div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{t.education.degree}</h3>
            <p className="text-primary font-medium mb-4">{t.education.department}</p>
            <div className="inline-block px-4 py-1 bg-accent/10 text-neutral-900 font-bold rounded-full text-sm">
              {t.education.grade}
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const Experience = ({ t }: { t: any }) => {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 ltr:left-0 rtl:right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t.experience.heading} subtitle={t.experience.subheading} t={t} />

        <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative px-8 ltr:border-l-2 rtl:border-r-2 border-primary/20"
        >
          <div className="absolute top-0 ltr:-left-[11px] rtl:-right-[11px] w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm" />
          
          <div className="premium-card mb-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">{t.experience.role}</h3>
                <p className="text-primary font-medium">{t.experience.org}</p>
              </div>
              <div className="text-neutral-400 font-bold" dir="ltr">{t.experience.period}</div>
            </div>
            
            <ul className="space-y-4">
              {t.experience.tasks.map((item: string, index: number) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const Skills = ({ t, lang }: { t: any, lang: Lang }) => {
  return (
    <section id="skills" className="section-padding bg-neutral-900 text-white relative overflow-hidden">
      <FloatingLeaves />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-16 relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '60px' }}
            transition={{ duration: 1, ease: "circOut" }}
            className="absolute -top-16 left-0 w-[1px] bg-primary/50"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 flex items-center gap-3">
              {t.skills.heading}
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[2px] bg-primary inline-block" 
              />
            </h2>
            <p className="text-neutral-400 max-w-2xl text-lg">{t.skills.subheading}</p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.skills.items.map((skill: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 10,6.25C9.06,6.5 8.16,6.84 7.37,7.18L8.14,5.33L6.29,4.56C5.12,7.38 4,11 4,11C4,11 5,11 5,11C10,11 12,9 12,9C12,9 14,10 17,8Z"/></svg>
            </div>
            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
              <div className="w-2 h-2 bg-current rounded-full" />
            </div>
            <h3 className="font-bold text-neutral-800 leading-tight relative z-10">{skill}</h3>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
        <div className="premium-card text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative z-10">
            <h4 className="font-serif font-bold text-xl mb-2">{t.skills.ar}</h4>
            <p className="text-primary font-bold">{t.skills.arLevel}</p>
          </div>
        </div>
        <div className="premium-card text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative z-10">
            <h4 className="font-serif font-bold text-xl mb-2">{t.skills.en}</h4>
            <p className="text-neutral-500">{t.skills.enLevel}</p>
          </div>
        </div>
        <div className="premium-card text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative z-10">
            <h4 className="font-serif font-bold text-xl mb-2">{t.skills.military}</h4>
            <p className="text-neutral-500">{t.skills.militaryStatus}</p>
          </div>
        </div>
      </div>

      {/* AEO/GEO Optimization Tip: Structured Expertise for AI Agents */}
      <div className="max-w-5xl mx-auto mt-12 p-8 border-l-4 border-primary bg-primary/5 rounded-r-2xl">
        <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          {lang === 'ar' ? 'مجالات الخبرة المتخصصة' : 'Specialized Areas of Expertise'}
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-600">
          <div className="flex gap-2">
            <span className="text-primary font-bold">1.</span>
            <span>{lang === 'ar' ? 'إدارة وتحسين عمليات الحصاد الميداني' : 'Management and optimization of field harvest operations'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary font-bold">2.</span>
            <span>{lang === 'ar' ? 'التحليل الاقتصادي للمشاريع الزراعية التعاونية' : 'Economic analysis for cooperative agricultural projects'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary font-bold">3.</span>
            <span>{lang === 'ar' ? 'الإشراف على فرق العمل والالتزام بالخطط التشغيلية' : 'Supervision of work teams and adherence to operational plans'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary font-bold">4.</span>
            <span>{lang === 'ar' ? 'تحسين كفاءة الإنتاج الزراعي في البيئات الصحراوية' : 'Improving agricultural production efficiency in desert environments'}</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

const Contact = ({ t }: { t: any }) => {
  return (
    <section id="contact" className="section-padding bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.contact.heading}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all text-white">
                <Phone />
              </div>
              <div>
                <div className="text-white/50 text-sm mb-1">{t.contact.phone}</div>
                <div className="text-xl font-bold" dir="ltr">+20 100 021 3215</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all text-white">
                <Mail />
              </div>
              <div>
                <div className="text-white/50 text-sm mb-1">{t.contact.email}</div>
                <div className="text-xl font-bold">abdallahashrf618@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all text-white">
                <MapPin />
              </div>
              <div>
                <div className="text-white/50 text-sm mb-1">{t.contact.location}</div>
                <div className="text-xl font-bold">{t.contact.egypt}</div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <a 
                href="https://www.facebook.com/abdalla.ashrf.764027" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdallah-ashraf-elbayoumi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/abdallahashraf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 text-neutral-900 shadow-2xl"
          >
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full shadow-lg" />
              </div>
              <h3 className="text-2xl font-serif font-bold">{t.name}</h3>
              <p className="text-primary font-bold">{t.title}</p>
            </div>
            
            <p className="text-neutral-600 text-center mb-8 italic leading-relaxed">
              "{t.contact.quote}"
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:abdallahashrf618@gmail.com" 
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-light transition-all flex items-center gap-2"
              >
                {t.contact.send}
                <Mail size={18} />
              </a>
              <a 
                href="tel:+201000213215" 
                className="bg-neutral-100 text-neutral-900 px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition-all flex items-center gap-2"
              >
                {t.contact.call}
                <Phone size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CVPage = ({ t, onClose, lang }: { t: any, onClose: () => void, lang: Lang }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-[100] bg-neutral-50 overflow-y-auto px-4 py-8 lg:p-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* CV Toolbar */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-all text-sm font-bold"
          >
            <X size={18} />
            {t.cvPage.close}
          </button>
          <div className="flex gap-4">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary-light transition-all shadow-xl shadow-primary/30 text-base font-bold group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              {t.cvPage.print}
            </button>
          </div>
        </div>

        {/* CV Content - Paper Style */}
        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 border-t-8 border-primary relative overflow-hidden print:shadow-none print:p-0 print:border-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 relative z-10">
            <div>
              <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-2">{t.name}</h1>
              <h2 className="text-xl text-primary font-bold uppercase tracking-wide">{t.title}</h2>
            </div>
            <div className="space-y-2 text-sm text-neutral-600">
              <div className="flex items-center gap-2 justify-end ltr:text-right rtl:text-left">
                <span>abdallahashrf618@gmail.com</span>
                <Mail size={14} className="text-primary" />
              </div>
              <div className="flex items-center gap-2 justify-end ltr:text-right rtl:text-left" dir="ltr">
                <span>+20 100 021 3215</span>
                <Phone size={14} className="text-primary" />
              </div>
              <div className="flex items-center gap-2 justify-end ltr:text-right rtl:text-left">
                <span>{t.contact.egypt}</span>
                <MapPin size={14} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar info */}
            <div className="md:col-span-1 space-y-10">
              <section>
                <h3 className="text-lg font-bold border-b-2 border-primary/10 pb-2 mb-4 uppercase tracking-tighter">{t.cvPage.personalInfo}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-neutral-400 mb-1">{t.about.countryLabel}</p>
                    <p className="font-bold">{t.about.country}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">{t.skills.military}</p>
                    <p className="font-bold">{t.skills.militaryStatus}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">{t.skills.ar}</p>
                    <p className="font-bold">{t.skills.arLevel}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">{t.skills.en}</p>
                    <p className="font-bold">{t.skills.enLevel}</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold border-b-2 border-primary/10 pb-2 mb-4 uppercase tracking-tighter">{t.skills.heading}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.skills.items.map((skill: string) => (
                    <span key={skill} className="px-2 py-1 bg-neutral-50 text-neutral-700 rounded border border-neutral-100 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <h3 className="text-lg font-bold border-b-2 border-primary/10 pb-2 mb-4 uppercase tracking-tighter">{t.cvPage.summary}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed text-justify">
                  {t.about.description}
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold border-b-2 border-primary/10 pb-2 mb-4 uppercase tracking-tighter">{t.experience.heading}</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-neutral-900">{t.experience.role}</h4>
                      <span className="text-xs font-bold text-primary" dir="ltr">{t.experience.period}</span>
                    </div>
                    <p className="text-primary text-xs font-bold mb-3">{t.experience.org}</p>
                    <ul className="space-y-2">
                      {t.experience.tasks.map((task: string, i: number) => (
                        <li key={i} className="flex gap-2 text-xs text-neutral-600">
                          <span className="text-primary">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold border-b-2 border-primary/10 pb-2 mb-4 uppercase tracking-tighter">{t.education.heading}</h3>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{t.education.degree}</h4>
                  <p className="text-neutral-600 text-xs mt-1">{t.education.department}</p>
                  <p className="text-primary text-xs font-bold mt-2">{t.education.grade}</p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer of CV */}
          <div className="mt-16 pt-8 border-t border-neutral-100 text-center">
            <p className="text-[10px] text-neutral-400 italic">
              {t.footer.allRights} © {new Date().getFullYear()} {t.name}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="py-12 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-start">
          <div className="text-2xl font-serif font-bold mb-2">{t.name}</div>
          <p className="text-neutral-500">
            {t.title} | {t.footer.allRights} {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/abdalla.ashrf.764027" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300"
            title="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/abdallah-ashraf-elbayoumi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/abdallahashraf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300"
            title="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-sm">
          <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-1">
          <span>Crafted with passion for Agriculture</span>
        </div>
        <a 
          href="https://www.rumuze.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Created by</span>
          <span className="font-bold tracking-tighter text-sm group-hover:text-primary transition-colors">RUMUZE</span>
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </a>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [isLoading, setIsLoading] = useState(true);
  const [showCV, setShowCV] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = (lang === 'ar' && !showCV) || (lang === 'ar' && showCV) ? 'rtl' : 'ltr';
    // However, when showing CV, maybe we want to force specific layout if user prefers.
    // Let's stick to the selected lang.
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    if (showCV) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [lang, showCV]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div 
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen"
        >
          <Navbar lang={lang} setLang={setLang} t={t} />
          <main>
            <Hero t={t} onShowCV={() => setShowCV(true)} />
            <About t={t} />
            <Education t={t} />
            <Experience t={t} />
            <Skills t={t} lang={lang} />
            <Contact t={t} />
          </main>
          <Footer t={t} />

          <AnimatePresence>
            {showCV && (
              <CVPage 
                t={t} 
                lang={lang} 
                onClose={() => setShowCV(false)} 
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
