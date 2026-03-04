"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProgramsTabs({ institute }: any) {

  const categories: { [key: string]: any } = {
    Undergraduate: institute.programs?.undergraduate || [],
    Postgraduate: institute.programs?.Postgraduate || [], // fixed
    Foundation: institute.programs?.foundation || [],
  };

  const [active, setActive] = useState("Undergraduate");

  return (
    <section className="py-28 md:py-36 bg-white">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-20 px-6">

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-[3px] h-12 bg-amber-400 rounded-full" />
          <p className="uppercase tracking-[0.35em] text-xs text-[#1E3A8A] font-medium">
            Academic Programmes
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E3A8A] leading-tight">
          Explore Our{" "}
          <span className="text-amber-500">Programmes</span>
        </h2>
      </div>

      {/* ================= MAIN GRID ================= */}
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
                      : "bg-[#F8FAFC] text-[#1E3A8A] hover:bg-[#EEF2FF]"
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
          <div className="bg-[#F8FAFC] rounded-3xl overflow-hidden shadow-lg divide-y divide-gray-200">

            {categories[active]?.length === 0 ? (
              <div className="px-10 py-12 text-center text-gray-500">
                No programmes available.
              </div>
            ) : (
              categories[active]?.map((program: any, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="group px-10 py-7 flex items-center justify-between transition-all duration-300 hover:bg-white"
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
  );
}