"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection({ institute }: any) {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-br from-[#17508f] via-[#1f5ea3] to-[#0f3d6a] overflow-hidden">

      {/* FULL WIDTH GRID */}
      <div className="w-full px-12 lg:px-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative h-[380px] sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
        >
          {institute.aboutImage && (
            <Image
              src={institute.aboutImage}
              alt="Campus"
              fill
              className="object-cover"
            />
          )}
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-white max-w-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
          >
            About The Campus
          </motion.h2>

          <div className="w-20 h-[3px] bg-[#E5B93E] mb-8 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 leading-relaxed text-lg"
          >
            Established in {institute.established}, this campus delivers
            academic excellence aligned with global standards.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 leading-relaxed"
          >
            Our vision is to become the higher education institution of choice
            for multinational students, providing quality and affordable
            British education while promoting creativity, culture, and enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <button className="bg-white text-[#17508f] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#E5B93E] hover:text-[#0f3d6a] hover:scale-105 transition duration-300">
              Explore More →
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}