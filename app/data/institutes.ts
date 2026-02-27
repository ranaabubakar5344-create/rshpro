export interface Institute {
  id: number;
  title: string;
  region: string;
  slug: string;
  description: string;
  heroImage: string;
  aboutImage: string;
  programs: string[];
  address: string;
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  established: string;
}

// export const institutes: Institute[] = [
//   {
//     id: 1,
//     title: "BATH SPA UNIVERSITY",
//     region: "Ras Al Khaimah",
//     slug: "bath-spa-university",
//     description: "Bath Spa University RAK offers a wide range of undergraduate and postgraduate programs in partnership with local and international institutions.",
//     heroImage: "/bathspa.jpg",
//     programs: ["Business Management", "Computer Science", "Education", "Arts"],
//     address: "RAK Academic City, Ras Al Khaimah, UAE",
//     contact: {
//       email: "info@bathspa.rak.ae",
//       phone: "+971 7 123 4567",
//       website: "https://www.bathspa.rak.ae",
//     },
//     established: "2010",
//   },
//   {
//     id: 2,
//     title: "FUTURE TRAINING SERVICES CENTER",
//     region: "AJMAN",
//     slug: "future-training-services-center",
//     description: "Future Training Services Center provides professional development and vocational training programs.",
//     heroImage: "/future.jpg",
//     programs: ["Project Management", "HR Management", "IT Certifications", "Language Courses"],
//     address: "Al Jurf, Ajman, UAE",
//     contact: {
//       email: "info@ftsc.ajman.ae",
//       phone: "+971 6 123 4567",
//       website: "https://www.ftsc.ajman.ae",
//     },
//     established: "2015",
//   },
//   // ... add remaining 6 institutes with similar structure
// ];


export const institutes = [
  {
    slug: "bath-spa-university",
    title: "Bath Spa University",
    description: "Explore your passions, follow your dreams and gain skills that help you level up your career. Our University provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2015",
    heroImage: "/graduation-ceremony-2022.jpg",
 aboutImage: "/bathspaaa.jpg",
    contact: {
      phone: "+971 50 362 2440",
      email: "info@bathspa.ae",
      website: "https://bathspa.ae",
    },

   programs: {
  undergraduate: [
    {
      title: "BA (Hons) Business & Management - Human Resource Management",

    },
    {
      title: "BA (Hons) Business & Management - Marketing",
      duration: "3 Years",
    },
      {
      title: "BA (Hons) Business & Management (Accounting)",
      duration: "3 Years",
    },
     {
      title: "BA (Hons) Creative Media",
      duration: "3 Years",
    },
     {
      title: "BSc (Hons) Creative Computing",
      duration: "3 Years",
    },
    {
      title: "BSc (Hons) Cyber Security",
      duration: "3 Years",
    },
       {
      title: "BSc (Hons) Psychology",
      duration: "3 Years",
    },
  ],
  Postgraduate: [
    {
      title: "MA Business & Management",
   
    },
     {
      title: "MBA Leadership",
   
    },
    {
      title: "MBA",
   
    },
     {
      title: "MSc Creative Computing",
   
    },
     {
      title: "MSc Cyber Security",
   
    },
  ],
  foundation: [
    {
      title: "International Foundation Studies",
      duration: "1 Year",
      credits: 120,
    },
  ],
},

    // ✅ ADD THIS
    team: [
      { id: 1, name: "Dr Raja Sajjad", role: "Founder & Chairman", image: "/founder.png" },
      { id: 2, name: "Hassan Sajjad", role: "CEO", image: "/ceo.png" },
      { id: 3, name: "Dr. Niño Miranda Decenorio", role: "Sr. Vice President", image: "/vicepr.png" },
      { id: 4, name: "Mr. Saqib Shahzad Bhatti", role: "Academic Director", image: "/acad.png" }
   ,
    {
    id: 5,
    name: "Dr. M N Brohi - RAK",
    role: "Academic Centre Manager",
    image: "/brh.png",
  },
  {
    id: 6,
    name: "Ms. Eleanor Carino",
    role: "Finance Manager",
    image: "/fin.jpg",
  },
    {
    id: 7,
    name: "Dr. Khuram Amin",
    role: "Strategic Projects Head",
    image: "/skm.png",
  },
   {
    id: 8,
    name: "Mr. Abdul Basit",
    role: "IT Manager",
    image: "/it.png",
  },
   {
    id: 9,
    name: "Admission Manager",
    role: "Dr. Salvacion Martir",
    image: "/ia.png",
  },
    ],
  },

  {
    slug: "future-education-university-college",
    title: "Future Education University College",
    description: "...",
    established: "2010",
    heroImage: "/sl.jpg",

    contact: {
      phone: "+971 50 111 2222",
      email: "info@feuc.ae",
      website: "https://feuc.ae",
    },

    programs: [
      "MBA",
      "Law",
      "Engineering",
    ],

    // ✅ Different team
    team: [
      { id: 1, name: "Dr Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
      { id: 2, name: "Mr Abdul Basit", role: "IT Manager", image: "/it.png" },
      { id: 3, name: "Dr Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
    ],
  },
];

export function getInstituteBySlug(slug: string) {
  return institutes.find((inst) => inst.slug === slug);
}