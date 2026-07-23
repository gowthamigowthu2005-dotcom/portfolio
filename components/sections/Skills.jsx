"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-violet-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1">
            What I Work With
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-pink-500" />
        </motion.div>

        {/* 2 Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((cat, catI) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catI * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl hover:border-violet-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-white font-bold text-xl sm:text-2xl">{cat.category}</h3>
                </div>

                {/* Skill Pills (Clean, Simple, No Percentages) */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white/90 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
