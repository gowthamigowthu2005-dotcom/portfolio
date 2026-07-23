"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "@/components/SectionWrapper";
import { PERSONAL } from "@/lib/constants";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

// Replace with your EmailJS credentials if using EmailJS backend
const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";

const contactInfo = [
  { icon: <FiPhone />, label: "Phone", value: `+91 ${PERSONAL.phone}`, href: `tel:${PERSONAL.phone}`, color: "text-violet-400" },
  { icon: <FiMail />, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, color: "text-cyan-400" },
  { icon: <FiMapPin />, label: "Location", value: PERSONAL.location, href: "#", color: "text-pink-400" },
  { icon: <FiLinkedin />, label: "LinkedIn", value: "gowthamin08", href: PERSONAL.linkedin, color: "text-blue-400" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success"

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoUrl = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact Message"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    // If EmailJS credentials are set, attempt EmailJS send
    if (SERVICE_ID !== "YOUR_EMAILJS_SERVICE_ID" && PUBLIC_KEY && PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_name: PERSONAL.firstName,
          },
          PUBLIC_KEY
        );
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
        return;
      } catch (err) {
        console.warn("EmailJS error, falling back to mailto:", err);
      }
    }

    // Fallback: Directly open mail client pre-filled with the message
    window.location.href = mailtoUrl;
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-white/30 text-sm sm:text-base focus:outline-none focus:border-violet-500 transition-all";

  return (
    <SectionWrapper id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="block text-violet-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1">
            Let&apos;s Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-pink-500" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5">
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Let&apos;s Connect</h3>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
              I&apos;m currently available for internships, full-time roles, and freelance opportunities. Feel free to reach out anytime!
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.035] border border-white/[0.08] hover:border-violet-500/30 transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 ${color} flex-shrink-0 text-xl`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">{label}</p>
                    <p className={`font-bold text-sm sm:text-base ${color}`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-xs sm:text-sm font-semibold mb-1.5">Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className="block text-white/70 text-xs sm:text-sm font-semibold mb-1.5">Your Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-xs sm:text-sm font-semibold mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Project Inquiry" className={inputClass} />
              </div>

              <div>
                <label className="block text-white/70 text-xs sm:text-sm font-semibold mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Hi Gowthami, I'd like to talk about..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <span className="flex items-center gap-2">
                      <FiSend size={18} /> Send Message
                    </span>
                  )}
                  {status === "sending" && (
                    <span className="flex items-center gap-2">Sending...</span>
                  )}
                  {status === "success" && (
                    <span className="flex items-center gap-2"><FiCheck size={18} /> Message Sent! 🎉</span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
