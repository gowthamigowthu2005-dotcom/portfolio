"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { CERTIFICATIONS, getAssetPath } from "@/lib/constants";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-amber-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1">
            Verified Knowledge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifi<span className="text-cyan-400">cations</span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-pink-500" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl hover:border-amber-500/30 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Certificate Image Tag */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center relative">
                  {cert.image ? (
                    <img
                      src={getAssetPath(cert.image)}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-amber-500/10 to-orange-500/5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-amber-500/20 text-amber-400 mb-1">
                        {cert.icon}
                      </div>
                      <span className="text-white/40 text-[11px] font-mono">Certificate Image Slot</span>
                    </div>
                  )}
                </div>

                <h3 className="text-white font-bold text-lg mb-1 leading-snug">{cert.title}</h3>
                <p className="text-white/60 text-sm">
                  Issued by <span className="text-amber-400 font-semibold">{cert.issuer}</span>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.05] w-full flex items-center justify-center gap-1.5 text-xs text-amber-400 font-semibold">
                <FiAward size={14} /> Verified Credential
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
