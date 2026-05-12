"use client";

import Image from "next/image";
import Link from "next/link";
export default function PartnerPage() {
  return (
    <main className="bg-white text-[#0f1f52]">

      {/* ================= HERO ================= */}
  


<div className="absolute top-6 left-6 text-white text-sm">
  <Link href="/" className="hover:text-amber-400 transition">
    Home
  </Link>
  <span className="mx-2">/</span>
  <span className="text-white/70">Become a Partner</span>
</div>
      {/* ================= SPLIT CONTACT + FORM ================= */}
      <section className=" bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#0f3d6a] py-28 px-6 md:px-16 text-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[0.3em] text-amber-400 text-xs mb-4">
              Get in Touch
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Start Your Partnership Journey
            </h2>

            <p className="text-white/80 mb-8 leading-relaxed">
              Join RSH Group and collaborate with a global network of
              academic institutions. We are committed to building
              long-term, impactful partnerships across international
              education markets.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6">

              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="font-semibold text-lg">
                  +971 0000000\
                </p>
              </div>

              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-semibold text-lg">
                  partnerships@rshgroup.com
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-black">

            <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6 text-center">
              Become a Partner
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1E3A8A]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1E3A8A]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1E3A8A]"
              />

              <input
                type="text"
                placeholder="Institution Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1E3A8A]"
              />

              <textarea
                placeholder="Tell us about your institution"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1E3A8A]"
              />

              <button className="w-full bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#0f3d6a] text-white py-3 rounded-md font-semibold hover:bg-[#2f4fb3] transition">
                Submit Application
              </button>

            </form>

          </div>

        </div>

      </section>


    </main>
  );
}