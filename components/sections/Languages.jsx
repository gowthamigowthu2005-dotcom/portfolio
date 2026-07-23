"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { LANGUAGES } from "@/lib/constants";

export default function Languages() {
  return (
    <SectionWrapper id="languages">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-emerald-400 font-mono text-xs tracking-widest uppercase mb-1">
            Communication Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Lang<span className="text-pink-400">uages</span>
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-violet-500" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="w-full sm:w-64 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-emerald-500/30 transition-all text-center"
            >
              <div className="text-3xl mb-3">{lang.flag}</div>

              <h3 className="text-white font-bold text-base mb-1">{lang.name}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                {lang.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
