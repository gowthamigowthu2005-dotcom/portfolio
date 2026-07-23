"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { PROJECTS } from "@/lib/constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1">
            What I&apos;ve Built
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-pink-400">Projects</span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-violet-500" />
        </motion.div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl overflow-hidden hover:border-violet-500/30 transition-all group"
            >
              <div>
                {/* Banner */}
                <div className={`h-48 bg-violet-900/40 relative p-6 flex items-end justify-between overflow-hidden`}>
                  <span className="text-white/25 text-6xl font-black select-none">
                    0{project.id}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3 leading-snug group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-xl text-xs font-semibold bg-violet-500/15 border border-violet-500/25 text-violet-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-3 border-t border-white/[0.05] flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-sm font-semibold transition-all"
                >
                  <FiGithub size={16} /> GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold shadow-md hover:shadow-cyan-500/20 transition-all"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
