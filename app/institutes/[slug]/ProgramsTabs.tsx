"use client";

import { useState } from "react";

export default function ProgramsTabs({ institute }: any) {
  const categories: { [key: string]: any } = {
    Undergraduate: institute.programs?.undergraduate || [],
    Postgraduate: institute.programs?.Postgraduate || [],
    Foundation: institute.programs?.foundation || [],
  };

  const [active, setActive] = useState("Undergraduate");

  return (
    <section className="py-20 md:py-32 bg-[#f4f8fc]">
      
      {/* SECTION HEADING */}
      <div className="text-center mb-14 md:mb-20 px-4">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#17508f] font-medium mb-4">
          Academic Programmes
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#0c2340] leading-tight mb-6">
          Explore Our <span className="text-[#17508f]">Programmes</span>
        </h2>

        <div className="w-16 md:w-24 h-[3px] bg-gradient-to-r from-[#17508f] to-[#1f5ea3] mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[320px_1fr] gap-10 md:gap-16">

        {/* LEFT SIDE */}
    {/* LEFT SIDE */}
<div className="flex flex-col lg:flex-col gap-4">

  {Object.keys(categories).map((category) => (
    <div
      key={category}
      onClick={() => setActive(category)}
      className={`cursor-pointer w-full p-6 md:p-8 rounded-2xl transition duration-300
        ${
          active === category
            ? "bg-gradient-to-r from-[#17508f] to-[#1f5ea3] text-white shadow-xl"
            : "bg-white text-[#0c2340] hover:bg-[#e6eef7]"
        }`}
    >
      <p className="uppercase text-[10px] md:text-xs tracking-widest opacity-70">
        Programme Type
      </p>

      <h3 className="text-lg md:text-2xl font-semibold mt-2">
        {category}
      </h3>
    </div>
  ))}

</div>

        {/* RIGHT SIDE */}
        <div>

          {/* Selected Header */}
          <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-gradient-to-r from-[#17508f] via-[#1f5ea3] to-[#0f3d6a] text-white mb-8 md:mb-10 shadow-lg">
            <p className="uppercase text-[10px] md:text-xs tracking-widest opacity-70">
              Selected Programme
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold mt-2">
              {active}
            </h2>
          </div>

          {/* Program List */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden divide-y">

            {categories[active]?.length === 0 ? (
              <div className="px-6 md:px-8 py-8 md:py-10 text-center text-gray-500">
                No programmes available.
              </div>
            ) : (
              categories[active]?.map((program: any, index: number) => (
                <div
                  key={index}
                  className="group px-6 md:px-8 py-5 md:py-6 hover:bg-[#f9fbff] transition flex items-start md:items-center justify-between gap-4"
                >
                  <h3 className="text-base md:text-lg font-semibold text-[#0c2340] leading-snug">
                    {program.title}
                  </h3>

                  <span className="text-sm text-[#17508f] opacity-0 group-hover:opacity-100 transition hidden sm:block">
                    →
                  </span>
                </div>
              ))
            )}

          </div>

        </div>
      </div>
    </section>
  );
}