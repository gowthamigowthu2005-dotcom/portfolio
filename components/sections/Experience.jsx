"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { EXPERIENCE } from "@/lib/constants";
import { FiMapPin, FiCalendar, FiBriefcase, FiCheckCircle } from "react-icons/fi";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-pink-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1">
            Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-pink-400">Experience</span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-violet-500" />
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl hover:border-pink-500/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex-shrink-0">
                    <FiBriefcase size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug">{exp.role}</h3>
                    <p className="text-pink-400 text-base font-semibold mt-0.5">{exp.company}</p>
                  </div>
                </div>

                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-violet-500/15 border border-violet-500/30 text-violet-300 self-start sm:self-auto">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-white/60 mb-5 pb-3 border-b border-white/[0.05]">
                <span className="flex items-center gap-2">
                  <FiCalendar className="text-cyan-400" size={15} />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-pink-400" size={15} />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/80 text-base leading-relaxed">
                    <FiCheckCircle className="text-violet-400 flex-shrink-0 mt-1" size={16} />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
