"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection({ institute }: any) {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">

      {/* Background */}
      <Image
        src={institute.heroImage}
        alt={institute.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 md:to-transparent" />

      {/* Content */}
      <div className="
        relative z-10
        w-full
        px-6 sm:px-10 md:px-16 lg:px-24
        flex items-center
        h-full
        text-white
      ">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">

          {/* Tag */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[3px] h-10 md:h-16 bg-amber-400 rounded-full" />
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-amber-400">
              Excellence Since {institute.established}
            </p>
          </div>

          {/* Title */}
          <h1 className="
            text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            leading-tight
            mb-5
          ">
            {institute.title}
          </h1>

          {/* Description */}
          <p className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-200
            max-w-md
          ">
            {institute.description}
          </p>

        </div>
      </div>
    </section>
  );
}