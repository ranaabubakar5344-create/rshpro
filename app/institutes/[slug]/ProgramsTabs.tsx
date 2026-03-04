"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ProgramsTabsProps = {
  institute: any;
};

export default function ProgramsTabs({ institute }: ProgramsTabsProps) {

  const categories: { [key: string]: any } = {
    Undergraduate: institute.programs?.undergraduate || [],
    Postgraduate: institute.programs?.Postgraduate || [],
    Foundation: institute.programs?.foundation || [],
  };

  const [active, setActive] = useState("Undergraduate");

  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[340px] md:h-[420px] bg-[#1E3A8A] text-white flex items-center px-6 md:px-16">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-xs text-amber-400 mb-4">
            Academic Excellence
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Academic Programmes BSU OFFER 
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl">
            Explore our globally aligned programmes designed to prepare
            students for leadership, innovation and professional success.
          </p>

        </div>
      </section>

      {/* ================= PROGRAM SECTION ================= */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-16 items-start">

          {/* ================= LEFT CATEGORY ================= */}
          <div className="space-y-4">

            {Object.keys(categories).map((category) => {
              const isActive = active === category;

              return (
                <motion.div
                  key={category}
                  onClick={() => setActive(category)}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer rounded-2xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#1E3A8A] to-[#1D4ED8] text-white shadow-lg"
                        : "bg-white text-[#1E3A8A] hover:bg-[#EEF2FF] shadow-sm"
                    }`}
                >
                  <div className="p-6">
                    <p className="uppercase text-[10px] tracking-widest opacity-70">
                      Programme Type
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {category}
                    </h3>
                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>

            {/* Selected Header */}
            <div className="rounded-3xl p-10 bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF] text-white mb-12 shadow-[0_20px_60px_rgba(30,58,138,0.25)]">

              <p className="uppercase text-xs tracking-[0.3em] opacity-70 mb-3">
                Selected Category
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                {active}
              </h2>
            </div>

            {/* Program List */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg divide-y divide-gray-200">

              {categories[active]?.length === 0 ? (
                <div className="px-10 py-12 text-center text-gray-500">
                  No programmes available.
                </div>
              ) : (
                categories[active]?.map((program: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="group px-10 py-7 flex items-center justify-between transition-all duration-300 hover:bg-[#F8FAFC]"
                  >
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      {program.title}
                    </h3>

                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </motion.div>
                ))
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}