"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    number: "01",
    title: "Academic Excellence",
    tag: "Our Standard",
    desc: "Every institution we build is held to the highest international benchmarks — where rigorous curricula meet inspired, human-centered teaching that ignites lifelong curiosity.",
    accentHex: "#1B4F8A",
  },
  {
    number: "02",
    title: "Ethical Leadership",
    tag: "Our Identity",
    desc: "Integrity is not a policy — it is our identity. Every decision, every partnership, every campus reflects our unwavering commitment to trust and transparency.",
    accentHex: "#14406F",
  },
  {
    number: "03",
    title: "Global Access",
    tag: "Our Promise",
    desc: "We dismantle every barrier to world-class education, crafting inclusive pathways so every learner — regardless of background — can reach their highest potential.",
    accentHex: "#0F3358",
  },
];

const stats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "18", label: "Global Campuses" },
  { value: "60K+", label: "Students Worldwide" },
  { value: "94%", label: "Graduate Success" },
];

const features = [
  "World-class faculty across 18 international campuses",
  "Accredited programs spanning 40+ disciplines",
  "Alumni network of 60,000+ global leaders",
];



export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* HERO BLOCK - reduced padding */}
      <div className="relative bg-[#F7F9FC] overflow-hidden">
        <motion.div style={{ y: bgY }} aria-hidden className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="text-[clamp(80px,15vw,180px)] font-black leading-none tracking-tighter text-[#0f3d6a]/[0.028] whitespace-nowrap">
            WHO WE ARE
          </span>
        </motion.div>

        <div className="absolute top-0 right-0 w-[20rem] h-[20rem] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #1B4F8A14 1.3px, transparent 1.3px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse at top right, black 30%, transparent 75%)",
          }}
        />

        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-100/50 blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-16 pb-16">

          {/* Marquee Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="relative inline-flex items-center overflow-hidden rounded-full bg-white border border-[#1b4f87] h-9 w-[240px]">
              <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
              <motion.div
                className="flex items-center whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              >
                {[0, 1].map((copy) => (
                  <span key={copy} className="flex items-center">
                    {Array(6).fill(null).map((_, i) => (
                      <span key={i} className="flex items-center">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-800 px-2">
                          WHO WE ARE
                        </span>
                        <span className="text-[#b8c900] text-[8px] font-bold px-1">·</span>
                      </span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Two-column grid */}
          <div className="grid lg:grid-cols-[55%_1px_1fr] gap-0 items-end">
            {/* Left headline */}
            <div className="lg:pr-16 pb-10 lg:pb-0">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,4.5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#0B1F3A]"
              >
                A Global Network
                <br />
                Built on{" "}
                <span className="relative inline-block text-[#1B4F8A]">
                  Vision
                  <svg aria-hidden className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none h-[6px]" viewBox="0 0 200 8">
                    <motion.path
                      d="M2 5 C40 1 80 6 120 4 C160 2 180 5 198 4"
                      stroke="#1B4F8A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
                {" "}& Integrity
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold flex items-center gap-2"
              >
                <span className="w-5 h-px bg-gray-300 inline-block" />
                Est. 1994 · International Education
              </motion.p>
            </div>

            {/* Vertical divider */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block self-stretch bg-gradient-to-b from-transparent via-gray-200 to-transparent origin-top"
            />

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:pl-16 pb-8 lg:pb-0 flex flex-col justify-end gap-6"
            >
              <div className="relative pl-5 border-l-[2px] border-[#1B4F8A]/20">
                <span className="absolute -top-4 -left-1 text-[3rem] leading-none font-black text-[#1B4F8A]/08 select-none">"</span>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  RSH Group is an international education collective redefining
                  what institutional excellence looks like — combining academic
                  rigor with human-centered leadership to build institutions
                  that outlast generations and create lasting global impact.
                </p>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-2">
                {features.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1B4F8A12]">
                      <svg width="7" height="5" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="#1B4F8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 items-center pt-2">
                <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#1B4F8A] text-white text-[10px] font-black uppercase tracking-[0.35em] px-7 py-3 shadow-md hover:shadow-lg transition-shadow">
                  <span className="relative z-10">Discover Our Story</span>
                  <span className="relative z-10 w-3 h-[1.5px] bg-white/50 group-hover:w-6 transition-all duration-300 inline-block" />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </button>
                <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#1B4F8A] border border-[#1B4F8A]/22 rounded-full px-7 py-3 hover:bg-[#EDF3FB] transition">
                  Our Campuses
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* STATS BAND - compact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative bg-[#0B1F3A] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 28px, rgba(255,255,255,1) 28px, rgba(255,255,255,1) 29px)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="group px-6 py-8 hover:bg-white/[0.03] transition"
              >
                <p className="text-[2.2rem] font-black text-white leading-none tracking-tight mb-1">
                  {s.value}
                </p>
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/30 font-bold mb-2">
                  {s.label}
                </p>
                <div className="h-[1.5px] w-5 bg-[#4A9FD4]/40 group-hover:w-10 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

     
    </section>
  );
}