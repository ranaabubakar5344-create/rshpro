"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export default function LeadershipSplitSection({
  team,
}: {
  team: TeamMember[];
}) {
  const [active, setActive] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const sectionInView = useInView(sectionRef, { amount: 0.4 });
  const headingInView = useInView(headingRef, { once: true });

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) setItemsPerView(3);
      else setItemsPerView(4);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (!sectionInView) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % team.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sectionInView, team.length]);

  if (!team || team.length === 0) return null;

  const next = () => setActive((prev) => (prev + 1) % team.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? team.length - 1 : prev - 1));

  const visibleThumbnails = [];
  for (let i = 0; i < itemsPerView; i++) {
    const originalIndex = (active + i) % team.length;
    visibleThumbnails.push({ member: team[originalIndex], originalIndex });
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#0f3d6a] py-28 md:py-36 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />

      {/* ================= HEADING ================= */}
      <div
        ref={headingRef}
        className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Executive Leadership Team
        </motion.h1>

        <p className="text-white/70 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Visionary leaders driving innovation, academic excellence and
          institutional growth across the RSH Group.
        </p>
      </div>

      {/* ================= SPLIT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[420px] md:h-[620px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={team[active].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={team[active].image}
                alt={team[active].name}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
            <p className="text-xs uppercase tracking-widest text-[#1E3A8A]">
              {team[active].role}
            </p>
            <h3 className="text-xl font-semibold text-black">
              {team[active].name}
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {team[active].name}
          </h2>

          <p className="text-amber-400 font-medium mb-10">
            {team[active].role}
          </p>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mb-12">
            {visibleThumbnails.map((item, index) => {
              const { member, originalIndex } = item;
              const isActive = originalIndex === active;

              return (
                <div
                  key={`${member.id}-${index}`}
                  onClick={() => setActive(originalIndex)}
                  className={`relative w-24 h-32 md:w-28 md:h-40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "scale-105 ring-2 ring-amber-400 shadow-lg"
                      : "opacity-70 hover:opacity-100 scale-95"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* CONTROLS */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/30 bg-white/10 hover:bg-white transition text-white"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/30 bg-white/10 hover:bg-white transition text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}