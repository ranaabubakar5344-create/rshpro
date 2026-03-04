"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const board = [
  { id: 1, name: "Dr Raja Sajjad", role: "Founder & Chairman", image: "/founder.png" },
  { id: 2, name: "Hassan Sajjad", role: "Chief Executive Officer", image: "/ceo.png" },
];

export default function BoardOfDirectorsPage() {
  const [active, setActive] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % board.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-white">

      {/* HERO */}
      <section className="relative w-full h-[350px] md:h-[420px] bg-[#1E3A8A] text-white flex items-center px-6 md:px-16">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-xs text-amber-400 mb-4">
            Governance & Leadership
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Board of Directors
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl">
            Strategic leadership driving vision, governance and long-term
            growth across the RSH Group.
          </p>
        </div>
      </section>

      {/* BOARD CONTENT */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.08)]">

            <AnimatePresence mode="wait">
              <motion.div
                key={board[active].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={board[active].image}
                  alt={board[active].name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-xs uppercase tracking-widest text-amber-500 mb-1">
                {board[active].role}
              </p>
              <h3 className="text-xl font-semibold text-[#1E3A8A]">
                {board[active].name}
              </h3>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              {board[active].name}
            </h2>

            <p className="text-amber-500 text-sm font-medium mb-8">
              {board[active].role}
            </p>

            <p className="text-gray-600 leading-relaxed mb-12 text-sm md:text-base">
              With extensive experience in academic leadership, strategic
              development and institutional governance, the Board ensures
              operational integrity, innovation and sustainable growth
              across all RSH Group institutions.
            </p>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {board.map((member, index) => (
                <div
                  key={member.id}
                  onClick={() => setActive(index)}
                  className={`relative h-28 rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                  ${
                    index === active
                      ? "ring-2 ring-amber-400 scale-105 shadow-md"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}