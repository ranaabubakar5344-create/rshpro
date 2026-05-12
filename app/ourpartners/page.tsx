"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";``
const slides = [
  {
    id: 1,
    image: "/bathspaaa.jpg",
    tag: "OUR PARTNERS",
    title: "Strategic Academic Alliances",
  },
  {
    id: 2,
    image: "/about-rak-img1.jpg",
    tag: "GLOBAL NETWORK",
    title: "Collaborating for Excellence",
  },
];

export default function PartnersPage() {
  const [active, setActive] = useState(0);

  const nextSlide = () =>
    setActive((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="w-full bg-white">



   {/* ================= HERO ================= */}
<section className="relative w-full h-[420px] md:h-[500px] flex overflow-hidden">


  {/* LEFT IMAGE */}
  <div className="relative w-full md:w-1/2">

    <AnimatePresence mode="wait">
      <motion.div
        key={slides[active].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <Image
          src={slides[active].image}
          alt="Slide"
          fill
          className="object-cover scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[#1E3A8A]/70" />
      </motion.div>
    </AnimatePresence>

    {/* ✅ MOBILE TEXT (NEW) */}
    <div className="absolute inset-0 flex flex-col justify-center px-6 text-white md:hidden z-10">

      <div className="flex items-center gap-2 mb-4">
        <div className="w-[3px] h-8 bg-amber-400 rounded-full" />
        <p className="uppercase tracking-[0.3em] text-xs text-amber-400">
          {slides[active].tag}
        </p>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
        {slides[active].title}
      </h1>

    </div>

    {/* LEFT BUTTON */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#1E3A8A] w-10 h-10 rounded-full flex items-center justify-center shadow z-20"
    >
      <ChevronLeft size={20} />
    </button>

  </div>

<div className="absolute top-6 left-6 text-white text-sm">
  <Link href="/" className="hover:text-amber-400 transition">
    Home
  </Link>
  <span className="mx-2">/</span>
  <span className="text-white/70">Our Partners</span>
</div>
  {/* RIGHT PANEL (DESKTOP ONLY) */}
  <div className="hidden md:flex w-1/2 bg-[#1E3A8A] text-white items-center px-16 relative">

    <motion.div
      key={slides[active].title}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[3px] h-10 bg-amber-400 rounded-full" />
        <p className="uppercase tracking-[0.4em] text-xs text-amber-400">
          {slides[active].tag}
        </p>
      </div>

      <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
        {slides[active].title}
      </h1>
    </motion.div>

    {/* RIGHT BUTTON */}
    <button
      onClick={nextSlide}
      className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-[#1E3A8A] w-10 h-10 rounded-full flex items-center justify-center shadow"
    >
      <ChevronRight size={20} />
    </button>

  </div>
</section>
{/* ================= INTRO ================= */}
<section className="py-28 px-6 md:px-16 text-center relative overflow-hidden">

  {/* Glow Background */}
  <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3A5FCE]/10 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-4xl mx-auto">

    {/* TAG */}
    <p className="uppercase tracking-[0.35em] text-xs text-amber-500 mb-4">
      Global Partnerships
    </p>

    {/* HEADING */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E3A8A] mb-6 leading-tight">
      Strong Alliances for Academic Excellence
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
      RSH Group collaborates with internationally recognised universities
      and awarding bodies to deliver high-quality education that meets
      global academic standards and evolving industry demands.
    </p>

    {/* HIGHLIGHTS */}
<div className="grid sm:grid-cols-3 gap-8 text-left">

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 min-h-[180px] flex flex-col justify-center">
    <h4 className="text-lg font-semibold text-[#1E3A8A] mb-3">
      Global Recognition
    </h4>
    <p className="text-sm text-gray-600 leading-relaxed">
      Qualifications accepted worldwide across academic and professional sectors.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 min-h-[180px] flex flex-col justify-center">
    <h4 className="text-lg font-semibold text-[#1E3A8A] mb-3">
      Industry Alignment
    </h4>
    <p className="text-sm text-gray-600 leading-relaxed">
      Programmes designed to meet real-world career and market demands.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 min-h-[180px] flex flex-col justify-center">
    <h4 className="text-lg font-semibold text-[#1E3A8A] mb-3">
      Academic Excellence
    </h4>
    <p className="text-sm text-gray-600 leading-relaxed">
      Delivered through trusted institutions with proven academic quality.
    </p>
  </div>

</div>

  </div>

</section>

      {/* ================= UNIVERSITY PARTNERS ================= */}
     <section className="py-24 px-6 md:px-16 bg-white">

  <div className="max-w-6xl mx-auto space-y-28">

    {[
      {
        name: "Bath Spa University",
        country: "United Kingdom",
        desc: "Bath Spa University is a globally respected institution known for excellence in business, arts and humanities. Through this partnership, RSH delivers internationally recognised degrees aligned with UK academic standards.",
        highlights: [
          "Globally recognised UK qualifications",
          "Industry-relevant academic structure",
          "Strong focus on creativity & innovation"
        ],
        image: "/bathspaaa.jpg"
      },
      {
        name: "University for the Creative Arts",
        country: "United Kingdom",
        desc: "UCA is one of the UK’s leading specialist universities for creative education. The collaboration enables students to pursue high-quality creative and technology programmes with global recognition.",
        highlights: [
          "Top-ranked creative university",
          "Modern, future-focused programmes",
          "International academic exposure"
        ],
        image: "/about-rak-img1.jpg"
      },
      {
        name: "Walsh College",
        country: "United States",
        desc: "Walsh College is an AACSB-accredited American institution specialising in business and technology education. It provides career-driven programmes designed to meet global industry standards.",
        highlights: [
          "AACSB accredited institution",
          "Business & technology focus",
          "Career-oriented global degrees"
        ],
        image: "/bathspaaa.jpg"
      }
    ].map((item, i) => (

      <div
        key={i}
        className="grid md:grid-cols-2 gap-12 items-center"
      >

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative h-[280px] md:h-[380px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* TEXT */}
        <div>

          {/* TAG */}
          <p className="uppercase tracking-[0.3em] text-xs text-amber-500 mb-3">
            {item.country}
          </p>

          {/* TITLE */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-4">
            {item.name}
          </h3>

          {/* DESC */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {item.desc}
          </p>

          {/* HIGHLIGHTS */}
          <div className="space-y-3">
            {item.highlights.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">

                <span className="mt-[6px] w-2 h-2 bg-amber-400 rounded-full" />

                <p className="text-sm text-gray-600">
                  {point}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>

    ))}

  </div>

</section>

 {/* ================= AWARDING BODIES ================= */}
<section className="bg-[#f8fafc] py-24 px-6 md:px-16">

  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">
      Awarding Bodies
    </h2>

    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
      Quality-assured qualifications recognized worldwide through trusted awarding bodies.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {[
      {
        name: "EduQual",
        logo: "/eduqual.jpg",
        tag: "Ofqual Regulated",
        desc: "Recognized worldwide for delivering high-quality academic qualifications."
      },
      {
        name: "Qualifi",
        logo: "/qualifi.jpg",
        tag: "UK Awarding Body",
        desc: "Offers internationally recognised qualifications across multiple sectors."
      },
      {
        name: "OTHM",
        logo: "/othm.jpg",
        tag: "Ofqual Regulated",
        desc: "Provides high-quality, globally recognised qualifications and pathways."
      },
      {
        name: "LRN",
        logo: "/lrn.jpg",
        tag: "Recognised Worldwide",
        desc: "Global awarding body focused on success through flexible learning."
      },
    ].map((item, i) => (

      <div
        key={i}
        className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
      >

        {/* LOGO */}
        <div className="relative w-32 h-20 mx-auto mb-5">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            className="object-contain  transition duration-300"
          />
        </div>

        {/* TAG */}
        <p className="text-[10px] uppercase tracking-widest text-amber-500 mb-2">
          {item.tag}
        </p>

        {/* NAME */}
        <h3 className="text-lg font-semibold text-[#1E3A8A]">
          {item.name}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>

      {/* ================= FINAL ================= */}
      <section className="bg-[#1E3A8A] py-20 px-6 md:px-16 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partnership Excellence
        </h2>

        <p className="max-w-2xl mx-auto text-white/80">
          These partnerships ensure our programmes meet rigorous academic
          and industry standards, providing students with globally recognised
          qualifications and career opportunities.
        </p>

      </section>

    </main>
  );
}