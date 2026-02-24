import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Glassmorphism state
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Auto-hide behavior
    if (latest > 250 && latest > previous + 5) {
      setIsHidden(true);
    } else if (latest < previous - 5 || latest < 50) {
      setIsHidden(false);
    }
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: t("nav", "home"), href: "#" },
    { name: t("nav", "about"), href: "#nosotros" },
    { name: t("nav", "methodology"), href: "#metodologia" },
    { name: t("nav", "facilities"), href: "#instalaciones" },
    { name: t("nav", "admissions"), href: "#admisiones" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 relative z-50 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white/50 backdrop-blur-sm rounded-2xl p-1 shadow-sm flex items-center justify-center border border-white/60 group-hover:shadow-md transition-all duration-300">
                <img
                  src="/logo1.png"
                  alt="Preciosos Momentos"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-heading font-bold text-lg text-heading hidden sm:block">
                Preciosos Momentos
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 translate-y-[2px]">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  key={link.name}
                  href={link.href}
                  className="font-body text-[15px] font-medium text-text transition-all hover:text-primary relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* CTA & Language Toggle */}
            <div className="hidden md:flex items-center gap-5">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={toggleLanguage}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all flex-shrink-0 bg-gray-50 hover:bg-gray-100 text-text border border-gray-200/50 hover:border-primary/30"
                aria-label="Toggle language"
              >
                <span className="text-lg translate-y-[1px]">
                  {language === "es" ? "🇺🇸" : "🇪🇸"}
                </span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm shadow-[0_8px_20px_rgba(50,170,158,0.2)] hover:shadow-[0_8px_25px_rgba(50,170,158,0.35)] relative overflow-hidden group"
              >
                <span className="relative z-10">{t("nav", "requestInfo")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden p-2.5 relative z-[110] rounded-full backdrop-blur-md bg-gray-50/80 text-heading border border-gray-200/50 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <AnimatePresence mode="popLayout">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white/95 md:hidden"
          >
            <div className="flex flex-col h-full pt-28 pb-10 px-6 sm:px-10">
              <div className="flex flex-col gap-8 flex-grow">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{
                      delay: i * 0.1 + 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-4xl font-heading font-bold text-heading hover:text-primary transition-colors inline-block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-auto space-y-6"
              >
                <div className="flex items-center justify-between py-6 border-t border-gray-200/50">
                  <span className="font-body text-text font-medium text-lg">
                    {language === "es" ? "Idioma" : "Language"}
                  </span>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full font-medium shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <span className="text-2xl">
                      {language === "es" ? "🇪🇸" : "🇺🇸"}
                    </span>
                    <span className="text-base">
                      {language === "es" ? "Español" : "English"}
                    </span>
                  </button>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full py-5 text-lg shadow-[0_8px_20px_rgba(50,170,158,0.25)] flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {t("nav", "requestInfo")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:animate-[shimmer_1s_infinite] skew-x-12 z-0"></div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
