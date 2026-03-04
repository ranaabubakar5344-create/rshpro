"use client";
type AboutSectionProps = {
  institute: any;
};

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Target, Eye, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/bathspaaa.jpg",
    tag: "ABOUT US",
    title: "About RSH Group",
  },
  {
    id: 2,
    image: "/about-rak-img1.jpg",
    tag: "OUR FOUNDATION",
    title: "Mission, Vision & Values",
  },
];

export default function AboutPage({ institute }: AboutSectionProps) {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="w-full bg-white">

      {/* ================= SPLIT HERO ================= */}
      <section className="relative w-full h-[420px] md:h-[480px] flex overflow-hidden">

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
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#1E3A8A]/70" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-6 left-6 text-white text-sm hidden md:block">
            Home &nbsp;›&nbsp; About Us
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#1E3A8A] w-10 h-10 rounded-full flex items-center justify-center shadow"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden md:flex w-1/2 bg-[#1E3A8A] text-white items-center px-16 relative">
          <AnimatePresence mode="wait">
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

              <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
                {slides[active].title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-[#1E3A8A] w-10 h-10 rounded-full flex items-center justify-center shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
    {/* ================= CONTENT SECTION ================= */}
      <section className="py-16 md:py-24 px-6 md:px-16">

        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-center text-[#1E3A8A] mb-10"
          >
            About RSH Group
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed"
          >
            <p>
              Established in 2010, RSH Group has been a trusted education
              provider delivering academic excellence across the region.
              We focus on empowering students with knowledge, innovation
              and leadership skills.
            </p>

            <p>
              We believe in nurturing creativity and providing globally
              recognized programs that align with modern industry needs.
              Our mission is to create an inspiring academic environment
              where students can thrive and grow.
            </p>

            <p>
              With diverse programs including undergraduate, postgraduate
              and professional certifications, we continuously evolve
              to meet international educational standards and future
              workforce demands.
            </p>
          </motion.div>

        </div>

      </section>

<section className="relative bg-white py-20 md:py-28 px-6 md:px-16">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* Tag */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-[3px] h-10 bg-amber-400 rounded-full" />
        <p className="uppercase tracking-[0.4em] text-xs text-[#1E3A8A]">
          Academic Excellence
        </p>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-6 leading-tight">
        The RSH Academic Standard
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        At RSH, we are committed to delivering globally aligned academic
        programmes that combine innovation, industry relevance and
        international best practices. Our focus is to create future-ready
        graduates equipped with both knowledge and practical expertise.
      </p>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Through strategic partnerships and a student-centric learning
        environment, we ensure every programme reflects academic integrity,
        creativity and professional excellence.
      </p>

    </div>

    {/* RIGHT SIDE FEATURES (NOT BOXES – CLEAN LIST STYLE) */}
    <div className="space-y-8">

      <div>
        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
          Globally Recognised Curriculum
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Programmes aligned with international academic frameworks
          and global standards.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
          Industry-Focused Learning
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Practical exposure, real-world case studies and employer
          engagement embedded into every programme.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
          Experienced Academic Leadership
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Faculty with international expertise dedicated to mentoring
          and student success.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
          Student-Centric Approach
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Personalised support systems designed to help students
          achieve academic and professional excellence.
        </p>
      </div>

    </div>

  </div>

</section>
{/* ================= OUR JOURNEY ================= */}
<section className="relative bg-[#f8fafc] py-24 px-6 md:px-16 overflow-hidden">

  {/* Section Header */}
  <div className="max-w-4xl mx-auto text-center mb-20">

    <div className="flex justify-center items-center gap-3 mb-6">
      <div className="w-[3px] h-10 bg-amber-400 rounded-full" />
      <p className="uppercase tracking-[0.4em] text-xs text-[#1E3A8A]">
        Our Journey
      </p>
    </div>

    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
      The RSH Growth Timeline
    </h2>

  </div>

  {/* Timeline */}
  <div className="relative max-w-6xl mx-auto">

    {/* Horizontal Line */}
    <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gray-200" />

    <div className="grid md:grid-cols-5 gap-12 md:gap-8">

      {[
        {
          year: "2010",
          title: "Foundation of RSH",
          desc: "RSH Group was established with a vision to redefine higher education."
        },
        {
          year: "2015",
          title: "International Partnerships",
          desc: "Strategic collaborations strengthened our global academic portfolio."
        },
        {
          year: "2018",
          title: "UAE Expansion",
          desc: "Expanded operations across the UAE to increase accessibility."
        },
        {
          year: "2022",
          title: "Digital Innovation",
          desc: "Adopted modern technology-driven learning methodologies."
        },
        {
          year: "2025",
          title: "Global Academic Network",
          desc: "Positioned RSH as a trusted international education group."
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          {/* Dot */}
          <div className="relative flex justify-center mb-6">
            <div className="w-6 h-6 bg-[#1E3A8A] rounded-full border-4 border-white shadow-lg z-10" />
          </div>

          <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">
            {item.year}
          </h3>

          <h4 className="text-sm font-semibold text-gray-800 mb-2">
            {item.title}
          </h4>

          <p className="text-xs text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>

</section>
    </main>
  );
}