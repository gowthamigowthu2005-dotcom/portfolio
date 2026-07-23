"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { FiMenu, FiX } from "react-icons/fi";

const initials = PERSONAL.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleActive = () => {
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleActive, { passive: true });
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9990] w-full transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#050816]/95 backdrop-blur-xl border-b border-white/[0.1] shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-1.5 focus:outline-none"
          >
            <span className="text-cyan-400">
              {initials}
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium tracking-widest hidden sm:inline ml-1 uppercase">
              Portfolio
            </span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className={`px-3.5 py-2 text-sm sm:text-base font-semibold rounded-xl transition-all ${
                      isActive
                        ? "text-white bg-violet-500/25 border border-violet-500/40 shadow-lg shadow-violet-500/10"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white/80"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-[9989] w-72 bg-[#050816] border-l border-white/[0.1] lg:hidden p-6 pt-24"
          >
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all text-base font-semibold"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
