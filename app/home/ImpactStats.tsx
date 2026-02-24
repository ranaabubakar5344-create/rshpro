"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const metrics = [
  { icon: Users, value: "60K+", label: "Students Worldwide" },
  { icon: Globe, value: "18", label: "Global Campuses" },
  { icon: Award, value: "30+", label: "Years of Excellence" },
  { icon: TrendingUp, value: "94%", label: "Graduate Success" },
];

export default function ImpactShowcase() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-[#f8fafc] to-white py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B4F8A]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B4F8A]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
              <Image
                src="/bathspa.jpg"
                alt="Impact showcase"
                fill
                className="object-cover scale-105 hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Premium Accent Border */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#1B4F8A]/30 rounded-3xl" />
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-12">

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#1B4F8A] text-sm font-semibold tracking-[0.4em] uppercase">
                OUR IMPACT
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Shaping Global Education Through Excellence
              </h2>

              <p className="mt-6 text-gray-600 max-w-xl">
                With decades of academic leadership and international reach,
                we continue to empower students with transformative education
                across the world.
              </p>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -6 }}
                    className="relative bg-white/70 backdrop-blur-md border border-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col gap-4">

                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#1B4F8A]/10">
                          <Icon className="w-6 h-6 text-[#1B4F8A]" />
                        </div>
                        <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                          {metric.value}
                        </span>
                      </div>

                      <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        {metric.label}
                      </p>
                    </div>

                    {/* subtle blue glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-[#1B4F8A]/5 to-transparent transition duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
