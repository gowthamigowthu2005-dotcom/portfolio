"use client";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from "react-icons/fi";

const initials = PERSONAL.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href) =>
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    { icon: <FiGithub size={20} />, href: PERSONAL.github, label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: PERSONAL.linkedin, label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: `mailto:${PERSONAL.email}`, label: "Email" },
    { icon: <FiPhone size={20} />, href: `tel:${PERSONAL.phone}`, label: "Phone" },
  ];

  return (
    <footer className="relative border-t border-white/[0.1] bg-[#050816] w-full py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl sm:text-3xl font-black mb-4 text-cyan-400">
              {initials}
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-sm font-medium">
              Full Stack Developer crafting clean, responsive, and scalable web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/70 hover:text-white text-sm sm:text-base font-semibold transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 tracking-wider uppercase">Contact Info</h4>
            <div className="space-y-3 text-sm sm:text-base font-semibold">
              <a href={`mailto:${PERSONAL.email}`} className="block text-white/70 hover:text-cyan-400 transition-colors">
                {PERSONAL.email}
              </a>
              <a href={`tel:${PERSONAL.phone}`} className="block text-white/70 hover:text-cyan-400 transition-colors">
                +91 {PERSONAL.phone}
              </a>
              <p className="text-white/70">{PERSONAL.location}</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all hover:scale-110"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-white/60 font-semibold">
          <p className="flex items-center gap-1.5">
            Made by <span className="text-white font-bold">{PERSONAL.name}</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center bg-violet-600 hover:bg-violet-500 text-white shadow-lg hover:scale-110 transition-all"
        aria-label="Back to top"
      >
        <FiArrowUp size={18} />
      </button>
    </footer>
  );
}
