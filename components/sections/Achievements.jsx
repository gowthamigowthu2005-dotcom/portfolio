"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { STATS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCountUp";

function AchievementStat({ label, value, suffix, decimals, delay }) {
  const { count, ref } = useCountUp(value, 2000, decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-violet-500/30 transition-all text-center"
    >
      <span className="block text-4xl sm:text-5xl font-black text-cyan-400 mb-2">
        {count}{suffix}
      </span>
      <span className="text-white/60 font-medium text-sm">{label}</span>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-pink-400 font-mono text-xs tracking-widest uppercase mb-1">
            Numbers Speak
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-violet-400">Achievements</span>
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-cyan-500" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <AchievementStat key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
