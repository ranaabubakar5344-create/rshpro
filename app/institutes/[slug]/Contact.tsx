"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBSU() {
  return (
    <main className="w-full bg-white overflow-hidden">

      {/* ================= PREMIUM HERO ================= */}
      <section className="relative w-full h-[480px] bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#0f3d6a] text-white flex items-center px-6 md:px-16">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.4em] text-xs text-[#F5C04A] mb-6">
            Bath Spa University – RAK Campus
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
Begin the Conversation
          </h1>

          <p className="mt-8 text-lg text-white/80 max-w-2xl">
          Whether you’re exploring programmes or ready to apply, our admissions team is here to support your journey.

          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="relative -mt-24 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          <ContactCard icon={<MapPin />} title="Campus Address" text="Ras Al Khaimah, UAE" />
          <ContactCard icon={<Phone />} title="Call Us" text="+971 7 000 0000" />
          <ContactCard icon={<Mail />} title="Email Us" text="admissions@bathspa.ac.ae" />
          <ContactCard icon={<Clock />} title="Office Hours" text="Mon – Fri | 9AM – 5PM" />

        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-3xl shadow-[0_30px_80px_rgba(30,58,138,0.15)]"
          >
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-10 text-center">
              Send an Enquiry
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              <Input label="Full Name" />
              <Input label="Email Address" type="email" />
              <Input label="Phone Number" />
              <Input label="Programme of Interest" />

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                />
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white px-10 py-3 rounded-full font-semibold transition shadow-md"
                >
                  Submit Enquiry
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="h-[450px]">
        <iframe
          src="https://maps.google.com/maps?q=ras%20al%20khaimah&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function ContactCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(30,58,138,0.2)] transition text-center">
      <div className="w-14 h-14 mx-auto mb-6 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
      />
    </div>
  );
}




