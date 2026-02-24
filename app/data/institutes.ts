export interface Institute {
  id: number;
  title: string;
  region: string;
  slug: string;
  description: string;
  heroImage: string;
  programs: string[];
  address: string;
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  established: string;
}

export const institutes: Institute[] = [
  {
    id: 1,
    title: "BATH SPA UNIVERSITY",
    region: "Ras Al Khaimah",
    slug: "bath-spa-university",
    description: "Bath Spa University RAK offers a wide range of undergraduate and postgraduate programs in partnership with local and international institutions.",
    heroImage: "/bathspa.jpg",
    programs: ["Business Management", "Computer Science", "Education", "Arts"],
    address: "RAK Academic City, Ras Al Khaimah, UAE",
    contact: {
      email: "info@bathspa.rak.ae",
      phone: "+971 7 123 4567",
      website: "https://www.bathspa.rak.ae",
    },
    established: "2010",
  },
  {
    id: 2,
    title: "FUTURE TRAINING SERVICES CENTER",
    region: "AJMAN",
    slug: "future-training-services-center",
    description: "Future Training Services Center provides professional development and vocational training programs.",
    heroImage: "/future.jpg",
    programs: ["Project Management", "HR Management", "IT Certifications", "Language Courses"],
    address: "Al Jurf, Ajman, UAE",
    contact: {
      email: "info@ftsc.ajman.ae",
      phone: "+971 6 123 4567",
      website: "https://www.ftsc.ajman.ae",
    },
    established: "2015",
  },
  // ... add remaining 6 institutes with similar structure
];

export function getInstituteBySlug(slug: string): Institute | undefined {
  return institutes.find((inst) => inst.slug === slug);
}