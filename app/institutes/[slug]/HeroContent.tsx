"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection({ institute }: any) {
  return (
    <section className="relative h-[90vh] min-h-[650px] overflow-hidden flex items-center">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src={institute.heroImage}
          alt={institute.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      {/* ================= BREADCRUMB ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 md:top-10 md:left-10 z-20"
      >
        <nav className="text-sm text-white/70">
          <Link href="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white font-medium">
            {institute.title}
          </span>
        </nav>
      </motion.div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl text-white">

          {/* Accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-[3px] h-16 bg-amber-400 rounded-full" />
            <p className="uppercase tracking-[0.4em] text-sm text-amber-400">
              Excellence Since {institute.established}
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8"
          >
            {institute.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            {institute.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <button className="bg-[#17508f] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-[0_15px_40px_rgba(23,80,143,0.35)] hover:bg-[#0f3d6a] hover:scale-105 transition duration-300">
              Explore Programs →
            </button>

            <button className="border border-white/40 px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-white hover:text-[#0f1f52] transition">
              Apply Now
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}