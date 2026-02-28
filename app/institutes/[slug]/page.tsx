
import { notFound } from "next/navigation";
import Image from "next/image";
import { institutes, getInstituteBySlug } from "@/app/data/institutes";
import LeadershipSplitSection from "@/app/home/Team";
import { motion } from "framer-motion";
import ProgramsTabs from "./ProgramsTabs";
import Link from "next/link";
import HeroSection from "./HeroContent";
import AboutSection from "./AboutSection";
/* ================= STATIC PARAMS ================= */

export async function generateStaticParams() {
  return institutes.map((inst) => ({
    slug: inst.slug,
  }));
}

/* ================= PAGE ================= */

export default async function InstitutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const institute = getInstituteBySlug(slug);

  if (!institute) notFound();

  return (
    <main className="bg-white text-[#0f1f52]">
<HeroSection institute={institute} />
  {/* ================= ABOUT (PREMIUM SPLIT) ================= */}
<AboutSection institute={institute} />
<ProgramsTabs institute={institute} />
   {/* ================= PROGRAMS (PREMIUM GRID) ================= */}

      {/* ================= TEAM ================= */}
      {institute.team && institute.team.length > 0 && (
        <LeadershipSplitSection team={institute.team} />
      )}

{/* ================= CONTACT SCTION ================= */}
<section className="relative bg-gradient-to-br from-[#0b1638] via-[#0f1f52] to-[#0a1533] text-white py-24 md:py-32 overflow-hidden">
  {/* Background Glows & Pattern */}
  <div className="absolute -top-32 left-[-150px] w-[500px] h-[500px] bg-[#17508f]/30 rounded-full blur-[180px]" />
  <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[180px]" />
  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

  <div className="relative max-w-6xl mx-auto px-6 text-center">
    {/* Tag */}
    <p className="uppercase tracking-[0.35em] text-xs text-amber-400 mb-6">
      Get In Touch
    </p>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
      Connect With{" "}
      <span className="text-amber-400">
        {institute.title}
      </span>
    </h2>

    {/* Description */}
    <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
      Our admissions team is here to guide you. Reach out directly or visit
      our official website for complete programme and application details.
    </p>

    {/* Contact Cards Grid - Solid Colors with Contrast */}
    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
      
      {/* Phone Card - Rich Blue */}
      <a
        href={`tel:${institute.contact.phone}`}
        className="group bg-blue-600 rounded-2xl p-8 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <p className="text-xs uppercase tracking-widest text-blue-100 mb-2">
          Call Us
        </p>
        <p className="text-2xl font-semibold text-white">
          {institute.contact.phone}
        </p>
      </a>

      {/* Email Card - Warm Amber/Orange */}
      <a
        href={`mailto:${institute.contact.email}`}
        className="group bg-amber-500 rounded-2xl p-8 hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 shadow-lg"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs uppercase tracking-widest text-amber-100 mb-2">
          Email Us
        </p>
        <p className="text-2xl font-semibold text-white break-all">
          {institute.contact.email}
        </p>
      </a>

      {/* Website Card - Rich Teal/Green */}
      <a
        href={institute.contact.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-emerald-600 rounded-2xl p-8 hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <p className="text-xs uppercase tracking-widest text-emerald-100 mb-2">
          Website
        </p>
        <p className="text-2xl font-semibold text-white">
          Visit Site →
        </p>
      </a>
    </div>
  </div>
</section>
    </main>
  );
}