import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getInstituteBySlug, institutes } from "@/app/data/institutes"

// Generate static paths for all institutes (for static export or ISR)
export async function generateStaticParams() {
  return institutes.map((inst) => ({
    slug: inst.slug,
  }));
}

// Page component – now async and awaiting params
export default async function InstitutePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise to get the actual slug
  const { slug } = await params;
  const institute = getInstituteBySlug(slug);

  if (!institute) {
    notFound(); // triggers 404
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={institute.heroImage}
          alt={institute.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-block mb-4 text-[#E5CA77] hover:underline"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              {institute.title}
            </h1>
            <p className="text-xl text-[#E5CA77] mt-2">{institute.region}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left column - Details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-[#E5CA77] mb-4">About</h2>
              <p className="text-white/80 leading-relaxed">{institute.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#E5CA77] mb-4">Programs</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                {institute.programs.map((program, idx) => (
                  <li key={idx}>{program}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Contact & Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-fit">
            <h3 className="text-xl font-medium text-[#E5CA77] mb-4">Information</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <span className="block text-sm text-white/40">Established</span>
                <span>{institute.established}</span>
              </div>
              <div>
                <span className="block text-sm text-white/40">Address</span>
                <span>{institute.address}</span>
              </div>
              <div>
                <span className="block text-sm text-white/40">Email</span>
                <a
                  href={`mailto:${institute.contact.email}`}
                  className="text-[#E5CA77] hover:underline"
                >
                  {institute.contact.email}
                </a>
              </div>
              <div>
                <span className="block text-sm text-white/40">Phone</span>
                <a
                  href={`tel:${institute.contact.phone}`}
                  className="text-[#E5CA77] hover:underline"
                >
                  {institute.contact.phone}
                </a>
              </div>
              <div>
                <span className="block text-sm text-white/40">Website</span>
                <a
                  href={institute.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5CA77] hover:underline"
                >
                  {institute.contact.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}