"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection({ institute }: any) {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">

      {/* Background with subtle zoom animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-24 md:py-0 text-white">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">

          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-[3px] h-12 md:h-16 bg-amber-400 rounded-full" />
            <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm text-amber-400">
              Excellence Since {institute.established}
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
              mb-6
            "
          >
            {institute.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-gray-200
              mb-8
              max-w-lg
            "
          >
            {institute.description}
          </motion.p>

        </div>
      </div>
    </section>
  );
}