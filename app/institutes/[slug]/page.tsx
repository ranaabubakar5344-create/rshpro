
import { notFound } from "next/navigation";
import Image from "next/image";
import { institutes, getInstituteBySlug } from "@/app/data/institutes";
import LeadershipSplitSection from "@/app/home/Team";
import { motion } from "framer-motion";
import ProgramsTabs from "./ProgramsTabs";
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

      {/* ================= HERO (MODERN) ================= */}
{/* ================= HERO (PREMIUM REDESIGN) ================= */}
<section className="relative h-[90vh] min-h-[650px] overflow-hidden flex items-center">

  {/* Background Image */}
  <Image
    src={institute.heroImage}
    alt={institute.title}
    fill
    priority
    className="object-cover scale-110"
  />

  {/* Dark cinematic overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-3xl text-white">

      {/* Accent vertical line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-[3px] h-16 bg-amber-400 rounded-full" />
        <p className="uppercase tracking-[0.4em] text-sm text-amber-400">
          Excellence Since {institute.established}
        </p>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
        {institute.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-white leading-relaxed max-w-xl mb-10">
        {institute.description}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-6">

        <button className="bg-[#17508f] text-white px-10 py-4 rounded-full font-semibold shadow-[0_15px_40px_rgba(23,80,143,0.35)] hover:bg-[#0f3d6a] hover:scale-105 transition duration-300">
          Explore Programs →
        </button>

        <button className="border border-white/40 px-10 py-4 rounded-full hover:bg-white hover:text-[#0f1f52] transition">
          Apply Now
        </button>

      </div>

    </div>
  </div>

  {/* Floating Info Cards */}


</section>

  {/* ================= ABOUT (PREMIUM SPLIT) ================= */}
<section className="py-32 bg-gradient-to-br from-[#17508f] via-[#1f5ea3] to-[#0f3d6a]">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

    {/* IMAGE */}
    <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
      {institute.aboutImage && (
        <Image
          src={institute.aboutImage}
          alt="Campus"
          fill
          className="object-cover"
        />
      )}
    </div>

    {/* CONTENT */}
    <div className="text-white max-w-xl">

      <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
        About The Campus
      </h2>

      <div className="w-20 h-[3px] bg-[#E5B93E] mb-10 rounded-full" />

      <p className="text-white mb-6 leading-relaxed text-lg">
        Established in {institute.established}, this campus delivers academic
        excellence aligned with global standards.
      </p>

      <p className="text-white mb-6 leading-relaxed">
        Our vision is to become the higher education institution of choice for
        multinational students, providing quality and affordable British
        education while promoting creativity, culture, and enterprise.
      </p>

      <p className="text-white leading-relaxed">
        We ensure affordable quality education across various disciplines while
        fostering creativity, culture, and enterprise in partnership with Bath
        Spa University UK.
      </p>

      <div className="mt-12">
        <button className="bg-white text-[#17508f] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#E5B93E] hover:text-[#0f3d6a] transition duration-300">
          Explore More →
        </button>
      </div>

    </div>

  </div>
</section>
<ProgramsTabs institute={institute} />
   {/* ================= PROGRAMS (PREMIUM GRID) ================= */}

      {/* ================= TEAM ================= */}
      {institute.team && institute.team.length > 0 && (
        <LeadershipSplitSection team={institute.team} />
      )}

{/* ================= CONTACT (PREMIUM CTA REDESIGN) ================= */}
<section className="relative bg-gradient-to-br from-[#0f1f52] via-[#132a6b] to-[#0a183d] text-white py-20 md:py-28 overflow-hidden">

  {/* Soft Glow Background */}
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#17508f]/20 rounded-full blur-[180px]" />
  <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[180px]" />

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
      Ready to Begin <span className="text-amber-400">Your Journey?</span>
    </h2>

    <p className="text-blue-200 max-w-2xl mx-auto mb-10 md:mb-14 text-base md:text-lg leading-relaxed">
      Contact our admissions team for personalised guidance and complete
      enrollment support to help you start your academic future with confidence.
    </p>

    {/* Contact Info Cards */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-lg hover:bg-white/20 transition duration-300">
        <p className="text-sm text-blue-200 mb-1">Call Us</p>
        <p className="text-lg font-semibold">
          {institute.contact.phone}
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-lg hover:bg-white/20 transition duration-300">
        <p className="text-sm text-blue-200 mb-1">Email Us</p>
        <p className="text-lg font-semibold text-amber-400">
          {institute.contact.email}
        </p>
      </div>

    </div>

    {/* CTA Button */}
    <a
      href={institute.contact.website}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-amber-400 text-[#0f1f52] px-8 md:px-12 py-4 rounded-full font-semibold text-base md:text-lg shadow-[0_15px_40px_rgba(229,185,62,0.35)] hover:bg-white hover:text-[#17508f] hover:scale-105 transition duration-300"
    >
      Visit Official Website →
    </a>

  </div>
</section>

    </main>
  );
}