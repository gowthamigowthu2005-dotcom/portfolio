"use client";
import { motion } from "framer-motion";
import { PERSONAL, TYPING_TEXTS } from "@/lib/constants";
import { useTypewriter } from "@/hooks/useTypewriter";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiEye, FiArrowRight } from "react-icons/fi";

const initials = PERSONAL.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const floatingCode = [
  { code: "<div/>", delay: 0, x: "8%", y: "20%" },
  { code: "const", delay: 0.5, x: "82%", y: "15%" },
  { code: "{...}", delay: 1, x: "5%", y: "65%" },
  { code: "useState()", delay: 0.3, x: "85%", y: "60%" },
  { code: "=>", delay: 0.7, x: "70%", y: "80%" },
  { code: "async", delay: 1.2, x: "18%", y: "85%" },
];

const socials = [
  { icon: <FiLinkedin size={18} />, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: <FiGithub size={18} />, href: PERSONAL.github, label: "GitHub" },
  { icon: <FiMail size={18} />, href: `mailto:${PERSONAL.email}`, label: "Email" },
  { icon: <FiPhone size={18} />, href: `tel:${PERSONAL.phone}`, label: "Phone" },
];

export default function Hero() {
  const typedText = useTypewriter(TYPING_TEXTS);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      {/* Floating code element tags */}
      {floatingCode.map(({ code, delay, x, y }) => (
        <motion.div
          key={code + x}
          className="absolute hidden lg:flex items-center justify-center pointer-events-none"
          style={{ left: x, top: y }}
          animate={{ y: ["0%", "-15%", "0%"], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <span className="font-mono text-xs font-semibold px-3 py-1.5 rounded-xl border border-violet-500/20 bg-violet-500/5 text-violet-300/80 backdrop-blur-sm">
            {code}
          </span>
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg mb-2 font-medium"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 text-white"
            >
              {PERSONAL.name}
            </motion.h1>

            {/* Typewriter Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-8 text-cyan-400 font-mono text-lg sm:text-xl font-semibold"
            >
              <span className="text-white/40">{"<"}</span>
              <span>{typedText}</span>
              <span className="w-0.5 h-5 bg-cyan-400 animate-pulse" />
              <span className="text-white/40">{" />"}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {PERSONAL.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/20 hover:bg-violet-500 hover:shadow-violet-500/40 transition-all hover:scale-105"
              >
                <FiEye size={18} /> View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all"
              >
                <FiArrowRight size={18} /> Contact Me
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Graphic illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-6 bg-[#090D26] border border-violet-500/30 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center"
            >
              {/* Monitor SVG */}
              <div className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
                  <rect x="60" y="80" width="160" height="110" rx="10" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.5)" strokeWidth="2"/>
                  <rect x="70" y="90" width="140" height="90" rx="6" fill="rgba(5,8,22,0.9)"/>
                  <rect x="82" y="105" width="65" height="4" rx="2" fill="#7C3AED"/>
                  <rect x="82" y="115" width="95" height="3" rx="2" fill="#06B6D4"/>
                  <rect x="90" y="125" width="75" height="3" rx="2" fill="#F43F5E"/>
                  <rect x="90" y="133" width="55" height="3" rx="2" fill="#7C3AED"/>
                  <rect x="82" y="143" width="85" height="3" rx="2" fill="#06B6D4"/>
                  <rect x="82" y="153" width="45" height="3" rx="2" fill="white" opacity="0.4"/>
                  <rect x="120" y="190" width="40" height="10" rx="3" fill="rgba(124,58,237,0.4)"/>
                  <rect x="100" y="198" width="80" height="6" rx="3" fill="rgba(124,58,237,0.3)"/>
                  <rect x="80" y="210" width="120" height="28" rx="5" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Floating Stat Badges */}
              <div className="absolute -top-4 -left-4 px-3.5 py-2 rounded-xl bg-[#090D26] border border-violet-500/30 text-center shadow-lg">
                <span className="block text-lg font-black text-violet-400">{PERSONAL.cgpa}</span>
                <span className="text-[10px] text-white/50 font-medium">CGPA</span>
              </div>

              <div className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl bg-[#090D26] border border-cyan-500/30 text-center shadow-lg">
                <span className="block text-lg font-black text-cyan-400">4+</span>
                <span className="text-[10px] text-white/50 font-medium">Certificates</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
