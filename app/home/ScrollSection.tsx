"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const institutes = [
  {
    id: 1,
    title: "Bath Spa University",
    region: "Ras Al Khaimah",
    slug: "bath-spa-university",
    logo: "/bsu-logo-website-rebrand.png",
  },
  {
    id: 2,
    title: "Future Education University College",
    region: "Umm Al Quwain",
    slug: "future-education-university-college",
    logo: "/felo.png",
  },
  {
    id: 3,
    title: "Walsh Campus",
    region: "Umm Al Quwain",
    slug: "walsh-campus",
    logo: "/walsh.png",
  },
  {
    id: 4,
    title: "University of Creative Arts",
    region: "Umm Al Quwain",
    slug: "university-of-creative-arts",
    logo: "/UCA Black Logo.png",
  },
    {
    id: 5,
    title: "University of Creative Arts",
    region: "Umm Al Quwain",
    slug: "university-of-creative-arts",
    logo: "/UCA Black Logo.png",
  },
  {
    id: 6,
    title: "University of Creative Arts",
    region: "Umm Al Quwain",
    slug: "university-of-creative-arts",
    logo: "/UCA Black Logo.png",
  },

    {
    id: 7,
    title: "University of Creative Arts",
    region: "Umm Al Quwain",
    slug: "university-of-creative-arts",
    logo: "/UCA Black Logo.png",
  },
    {
    id: 8,
    title: "University of Creative Arts",
    region: "Umm Al Quwain",
    slug: "university-of-creative-arts",
    logo: "/UCA Black Logo.png",
  },
];

export default function PremiumGroupSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const xMove = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#0f1c4f]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/campus-bg.jpg" // replace with your bg
          alt="Campus Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c4f]/90 to-[#1f3482]/95" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-8">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-6">
            Our Education Network
          </h2>

          <div className="w-16 h-[2px] bg-amber-400 mx-auto" />
        </div>

        {/* SCROLL WRAPPER */}
        <motion.div
          style={{ rotate, x: xMove }}
          className="flex gap-16 justify-center items-center"
        >
          {institutes.map((item) => (
            <Link
              key={item.id}
              href={`/institutes/${item.slug}`}
              className="group"
            >
              <motion.div
                whileHover={{ y: -12 }}
                className="w-[280px] h-[280px] rounded-full
                bg-blue-700/80 backdrop-blur-lg
                border border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                flex flex-col items-center justify-center
                transition-all duration-500"
              >
                <div className="bg-white rounded-lg p-5 mb-6 shadow-md">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={100}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-white text-center text-sm font-medium px-8">
                  {item.title}
                </h3>

                <p className="text-blue-200 text-xs mt-2">
                  {item.region}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
