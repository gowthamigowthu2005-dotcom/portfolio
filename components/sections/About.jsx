"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { PERSONAL, getAssetPath } from "@/lib/constants";

export default function About() {
  const paragraphs = PERSONAL.about.split("\n\n");

  return (
    <SectionWrapper id="about">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-violet-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-violet-400">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-cyan-500" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Only */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-violet-600 opacity-20 blur-lg" />

              {/* Card Container */}
              <div
                className="relative w-64 sm:w-72 lg:w-80 rounded-3xl overflow-hidden flex items-center justify-center bg-[#090D26] border border-white/15 backdrop-blur-xl shadow-2xl"
              >
                {PERSONAL.avatarUrl ? (
                  <img
                    src={getAssetPath(PERSONAL.avatarUrl)}
                    alt={PERSONAL.name}
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#090D26]">
                    <span className="text-8xl font-black text-cyan-400 select-none mb-2">
                      GN
                    </span>
                    <span className="text-white/40 text-xs font-mono">Full Stack Developer</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Bio Paragraphs */}
            <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/*
            // Personal Info Grid commented out as requested
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.035] border border-white/[0.08]"
            >
              {[
                { label: "Name", value: PERSONAL.name },
                { label: "Email", value: PERSONAL.email },
                { label: "Phone", value: `+91 ${PERSONAL.phone}` },
                { label: "Location", value: PERSONAL.location },
                { label: "Education", value: "B.E. CSE (2023 - Present)" },
                { label: "CGPA", value: PERSONAL.cgpa },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="w-24 text-violet-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">{label}</span>
                  <span className="text-white/90 font-medium text-sm sm:text-base truncate">{value}</span>
                </div>
              ))}
            </motion.div>
            */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
