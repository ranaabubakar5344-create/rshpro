"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Brain, Star,Film,Shield,GraduationCap,Cpu} from "lucide-react";

const programs = [
  {
    id: 1,
    icon: Briefcase,
    title: "Business and Management",
    description: "Develop leadership skills and strategic thinking with globally accredited programs.",
    color: "#1B4F8A",
  },
  {
    id: 2,
    icon: Code,
    title: "Information Technology",
    description: "Master cutting-edge technologies and prepare for the digital future.",
    color: "#1B4F8A",
  },
  {
    id: 3,
    icon: Brain,
    title: "Psychology",
    description: "Understand human behavior and mental processes through evidence-based curricula.",
    color: "#1B4F8A",
  },
  {
    id: 4,
    icon: Film, // from 'lucide-react'
    title: "Creative Media",
    description: "Explore digital storytelling, media production, and creative technologies.",
    color: "#1B4F8A",
  },
  {
    id: 5,
    icon: Shield,
    title: "Cyber Security",
    description: "Protect digital assets and learn to combat modern cyber threats.",
    color: "#1B4F8A",
  },
  {
    id: 6,
    icon: GraduationCap,
    title: "MBA",
    description: "Accelerate your career with advanced business and management skills.",
    color: "#1B4F8A",
  },
  {
    id: 7,
    icon: Cpu,
    title: "Creative Computing",
    description: "Combine computing with creativity – from game design to interactive systems.",
    color: "#1B4F8A",
  },
];

export default function WhatWeOfferMarquee() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      {/* Background watermark – centered, static */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[clamp(80px,15vw,180px)] font-black leading-none tracking-tighter text-[#0f3d6a]/[0.028] whitespace-nowrap">
          WHAT WE OFFER
        </span>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B4F8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#E5CA77]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-[#1B4F8A] text-sm font-black tracking-[0.4em] uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Take a brief look at some of the
            <span className="text-[#1B4F8A]"> qualifications we offer</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#E5CA77] mx-auto" />
        </motion.div>

        {/* Marquee container */}
        <div className="relative mt-16">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          {/* Scrolling track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
              style={{ width: "fit-content" }}
            >
              {/* Double the array for seamless loop */}
              {[...programs, ...programs].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white rounded-2xl shadow-md px-6 py-4 border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer group"
                  >
                    <div className="p-3 rounded-xl bg-[#1B4F8A]/10 group-hover:bg-[#1B4F8A] transition-colors">
                      <Icon className="w-6 h-6 text-[#1B4F8A] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 whitespace-nowrap">
                      {item.title}
                    </span>
                    <Star className="w-4 h-4 text-[#E5CA77] ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-3 bg-[#1B4F8A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#14406F] transition-colors shadow-lg hover:shadow-xl">
            Explore All Programs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}