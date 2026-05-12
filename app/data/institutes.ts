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
  description:
    "Explore your passions, follow your dreams and gain skills that help you level up your career. Our University provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
  established: "2015",
  heroImage: "/graduation-ceremony-2022.jpg",
  aboutImage: "/bathspaaa.jpg",
  contact: {
    phone: "07 236 9495",
    email: "info@bathspa.ae",
    website: "https://bathspa.ac.ae/",
      address: "Ras Al Khaimah, UAE",
  officeHours: "Mon – Fri | 9AM – 5PM",
  mapEmbed: "https://maps.google.com/maps?q=ras%20al%20khaimah&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  programs: {
    undergraduate: [
      {
        title: "BA (Hons) Business & Management - Human Resource Management",
        duration: "3 Years",
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
        duration: "1 Year",
      },
      {
        title: "MBA Leadership",
        duration: "1 Year",
      },
      {
        title: "MBA",
        duration: "1 Year",
      },
      {
        title: "MSc Creative Computing",
        duration: "1 Year",
      },
      {
        title: "MSc Cyber Security",
        duration: "1 Year",
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

  about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/bathspaaa.jpg",
        tag: "ABOUT US",
        title: "About Bath Spa University",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About Bath Spa University",
    paragraphs: [
      "Bath Spa University is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the university helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The Bath Spa Academic Standard",
    academicParagraphs: [
      "At Bath Spa University, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The Bath Spa Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "Bath Spa University established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },

  team: [
    { id: 1, name: "Dr Raja Sajjad", role: "Founder & Chairman", image: "/founder.png" },
    { id: 2, name: "Hassan Sajjad", role: "CEO", image: "/ceo.png" },
    { id: 3, name: "Dr. Niño Miranda Decenorio", role: "Sr. Vice President", image: "/vicepr.png" },
    { id: 4, name: "Mr. Saqib Shahzad Bhatti", role: "Academic Director", image: "/acad.png" },
    { id: 5, name: "Dr. M N Brohi - RAK", role: "Academic Centre Manager", image: "/brh.png" },
    { id: 6, name: "Ms. Eleanor Carino", role: "Finance Manager", image: "/fin.jpg" },
    { id: 7, name: "Dr. Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
    { id: 8, name: "Mr. Abdul Basit", role: "IT Manager", image: "/it.png" },
    { id: 9, name: "Dr. Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
  ],
  
},

// Future Education University College
  {
    slug: "future-education-university-college",
    title: "Future Education University College",
    description: "Follow your dreams and gain skills that help you level up your career. Our College provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2015",
    heroImage: "/feuc.jpeg",

     contact: {
    phone: "07 236 9495",
    email: "info@feuc.ae",
    website: "https://feuc.ae/",
      address: "Umm Al Quwain, UAE",
  officeHours: "Mon – Fri | 9AM – 5PM",
mapEmbed: "https://www.google.com/maps?q=Future%20Education%20University%20College%20Free%20Trade%20Zone%20Al%20Barqaa%20Umm%20Al%20Quwain&output=embed",  },

    // aboutfeuc:{
    //  aboutname:"About FEUC",
    //  desc:"Established in 2010, RSH Group has been a trusted education provider delivering academic excellence across the region. We focus on empowering students with knowledge, innovation and leadership skills.We believe in nurturing creativity and providing globally recognized programs that align with modern industry needs. Our mission is to create an inspiring academic environment where students can thrive and grow.With diverse programs including undergraduate, postgraduate and professional certifications, we continuously evolve to meet international educational standards and future workforce demands."
    //     },

    about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/feuc.webp",
        tag: "ABOUT US",
        title: "About  FEUC",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About Future Education Univeristy College",
    paragraphs: [
      "FEUC is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the university helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The FEUC Standard",
    academicParagraphs: [
      "At FEUC, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The FEUC Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "Bath Spa University established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 

    team: [
      { id: 1, name: "Dr Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
      { id: 2, name: "Mr Abdul Basit", role: "IT Manager", image: "/it.png" },
      { id: 3, name: "Dr Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
    ],
  },


  //walsh college

  {
    slug: "walsh-campus",
    title: "Walsh Campus",
    description: "Follow your dreams and gain skills that help you level up your career. Our College provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2015",
    heroImage: "/feuc.jpeg",

    contact: {
      phone: "+971 50 111 2222",
      email: "info@walshcollege.ae",
      website: "https://walshcollege.ae",
      mapEmbed: "https://www.google.com/maps?q=Walsh%20College%20UAE%20UAQ%20FTZ%20Al%20Barqaa%20Umm%20Al%20Quwain&output=embed",
    },


programs: {
    undergraduate: [
      {
        title: "BBA in General Business",
        duration: "3 Years",
      },
      {
        title: "BBA in Marketing",
        duration: "3 Years",
      },
      {
        title: "BBA in Finance",
        duration: "3 Years",
      },
      {
        title: "BBA in Entrepreneurship",
        duration: "3 Years",
      },
      {
        title: "BBA in Accounting",
        duration: "3 Years",
      },
      {
        title: "BBA in Human Resource Management",
        duration: "3 Years",
      },
      {
        title: "BBA in International Business",
        duration: "3 Years",
      },
       {
        title: "BSIT in AI and Machine Learning",
        duration: "3 Years",
      },
        {
          title: "BSIT - Information Technology",
          duration: "3 Years",
        },

      {
        title: "BSIT in Cyber Security",
        duration: "3 Years",
      },
      {
        title: "BSIT in Data Analytics",
        duration: "3 Years",
      }
    ],
    Postgraduate: [
      {
        title: "MBA",
        duration: "1 Year",
      },
      
      {
        title: "MSc in Management",
        duration: "1 Year",
      },
      {
        title: "MSc in Marketing",
        duration: "1 Year",
      },
      {
        title: "MSc in Finance",
        duration: "1 Year",
      },
      {
        title: "STEM MBA",
        duration: "1 Year",
      },
      {
        title: "MSc in AI and Machine Learning",
        duration: "1 Year",
      },
      {
        title: "MSc in Data Analytics",
        duration: "1 Year",
      },
      {
        title: "MSc in Information Technology",
        duration: "1 Year",
      }
    ],
      DoctoralPrograms: [
        {
          title: "Doctorate of Business Administration",
          duration: ".. Year",
          credits: 120,
        },
        {
          title: "Doctorate in Accounting",
          duration: ".. Year",
          credits: 120,
        },
        {
          title:"Doctorate in AI and ML",
          duration: ".. Year",
        }
      ],


       PHDPrograms: [
        {
          title: "PhD in Organizational Leadership",
          duration: ".. Year",
          credits: 120,
        },
        {
          title: "PhD in AI & Machine Learning",
          duration: ".. Year",
          credits: 120,
        },
        {
          title:"PhD in Data Analytics",
          duration: ".. Year",
        },

        {
          title: "PhD in Cyber Security",
          duration: ".. Year",
          credits: 120,
        }


      ],
    },
  
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/feuc.webp",
        tag: "ABOUT US",
        title: "About  WALSH COLLEGE  ",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About Walsh College",
    paragraphs: [
      "Walsh College is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the university helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The Walsh College Standard",
    academicParagraphs: [
      "At Walsh College, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The Walsh College Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "Walsh College established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 


  
    team: [
      { id: 1, name: "Dr Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
      { id: 2, name: "Mr Abdul Basit", role: "IT Manager", image: "/it.png" },
      { id: 3, name: "Dr Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
    ],
  },

  //uca


  {
    slug: "university-of-creative-arts",
    title: "University of Creative Arts",
    description: "Follow your dreams and gain skills that help you level up your career. Our College provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2022",
    heroImage: "/feuc.jpeg",

    contact: {
      phone: "+971 54 723 0622",
      email: "admissions@uca.feuc.ae",
      website: "https://uca.feuc.ae",
      mapEmbed: "https://www.google.com/maps?q=Future%20Education%20University%20College%20UAQ&output=embed",
    },


programs: {
    undergraduate: [
      {
        title: "Bsc(Hons) Computer Science",
        duration: "3 Years",
      },
      {
        title: "Bsc (Hons) Games Development",
        duration: "3 Years",
      },
      {
        title: "BA (Hons) Graphic Design",
        duration: "3 Years",
      },
      {
        title: "BA (Hons) Buisness & Management",
        duration: "3 Years",
      },
      {
        title: "BA (Hons) Visual Communication",
        duration: "3 Years",
      },
      {
        title: "BA (Hons) Digital Marketing & Social Media",
        duration: "3 Years",
      },
    
    ],
    Foundation: [
      {
        title: "Integrated Foundation Year",
        duration: "1 Year",
      },
      
   
      {
        title: "Integrated Pre Masters",
        duration: "1 Year",
      },

    ],
      


      
    },
  
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/feuc.webp",
        tag: "ABOUT US",
        title: "About  University of Creative Arts",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About University of Creative Arts",
    paragraphs: [
      "University of Creative Arts is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the university helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The  University of Creative Arts Standard",
    academicParagraphs: [
      "At University of Creative Arts, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The University of Creative Arts Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "University of Creative Arts established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 


  
    team: [
      { id: 1, name: "Dr Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
      { id: 2, name: "Mr Abdul Basit", role: "IT Manager", image: "/it.png" },
      { id: 3, name: "Dr Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
    ],
  },
 

  //ftsc ajman



   {
    slug: "future-training-services-center-ajman",
    title: "Future Training Services Center - Ajman",
    description: "Follow your dreams and gain skills that help you level up your career. Our Training Centre provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2022",
    heroImage: "/ft.webp",

    contact: {
      phone: "+971 54 723 0622",
      email: "info@ftc.ae",
      website: "https://ftc.ae/",
      mapEmbed: "https://www.google.com/maps?q=Future%20Training%20Services%20Center%20Ajman&output=embed",
    },


// programs: {
//     undergraduate: [
//       {
//         title: "Bsc(Hons) Computer Science",
//         duration: "3 Years",
//       },
//       {
//         title: "Bsc (Hons) Games Development",
//         duration: "3 Years",
//       },
//       {
//         title: "BA (Hons) Graphic Design",
//         duration: "3 Years",
//       },
//       {
//         title: "BA (Hons) Buisness & Management",
//         duration: "3 Years",
//       },
//       {
//         title: "BA (Hons) Visual Communication",
//         duration: "3 Years",
//       },
//       {
//         title: "BA (Hons) Digital Marketing & Social Media",
//         duration: "3 Years",
//       },
    
//     ],
//     Foundation: [
//       {
//         title: "Integrated Foundation Year",
//         duration: "1 Year",
//       },
      
   
//       {
//         title: "Integrated Pre Masters",
//         duration: "1 Year",
//       },

//     ],
      


      
//     },
  
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/ft.webp",
        tag: "ABOUT US",
        title: "About  Future Training Services Center - Ajman",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About Future Training Services Center - Ajman",
    paragraphs: [
      "Future Training Services Center - Ajman is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the center helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The  University of Creative Arts Standard",
    academicParagraphs: [
      "At Future Training Services Center - Ajman, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The University of Creative Arts Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "Future Training Services Center - Ajman established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 


  
    team: [
      { id: 1, name: "Dr Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
      { id: 2, name: "Mr Abdul Basit", role: "IT Manager", image: "/it.png" },
      { id: 3, name: "Dr Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
    ],
  },

  //metaverse age 


     {
    slug: "metaverseage-training-institute-dubai",
    title: "MetaverseAge Training Institute - Dubai",
    description: "Follow your dreams and gain skills that help you level up your career. Our Training Centre provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2022",
    heroImage: "/abo.webp",

    contact: {
      phone: "+971 54 723 0622",
      email: "info@metaverseage.ae",
      website: "https://mati.ac.ae/",
      mapEmbed: "https://www.google.com/maps?q=Metaverse%20Age%20Training%20Institute&output=embed",
    },

programs: {
  Foundation: [
    {
      title: "Diploma in International Foundation Studies",
      duration: "10 Months",
      level: "EduQual Level 3",
    },
  ],

  Certificates: [
    {
      title: "Certificate in Business Management",
      duration: "10 Months",
      level: "EduQual Level 4",
    },
    {
      title: "Certificate in Creative Computing",
      duration: "10 Months",
      level: "EduQual Level 4",
    },
    {
      title: "Certificate in Psychology",
      duration: "10 Months",
      level: "EduQual Level 4",
    },
    {
      title: "Certificate in Cyber Security",
      duration: "10 Months",
      level: "EduQual Level 4",
    },
    {
      title: "Certificate in Creative Media",
      duration: "10 Months",
      level: "EduQual Level 4",
    },
    {
      title: "Certificate in Business Management Accounting",
      duration: "10 Months",
      level: "EduQual Level 4",
      badge: "New",
    },
  ],

  Diplomas: [
    {
      title: "Diploma in Cyber Security",
      duration: "10 Months",
      level: "EduQual Level 5",
    },
    {
      title: "Diploma in Business Management",
      duration: "10 Months",
      level: "EduQual Level 5",
    },
    {
      title: "Diploma in Creative Computing",
      duration: "10 Months",
      level: "EduQual Level 5",
    },
    {
      title: "Diploma in Psychology",
      duration: "10 Months",
      level: "EduQual Level 5",
      badge: "KHDA Approved",
    },
    {
      title: "Diploma in Business Management Accounting",
      duration: "10 Months",
      level: "EduQual Level 5",
      badge: "New",
    },
    {
      title: "Diploma in Creative Media",
      duration: "10 Months",
      level: "EduQual Level 5",
      badge: "KHDA Approved",
    },
  ],
  shortCourses: [
  {
    title: "Computer & Technology",
    courses: [
      "Computer Skills Training",
      "Artificial Intelligence & Machine Learning",
      "Big Data Analytics",
      "Cyber Security",
      "Mobile App Development and Design",
      "Game Design and Development",
      "Programming Fundamentals",
      "Digital Marketing",
      "Cloud Computing",
      "Microsoft Office 2021 Essentials Training",
      "Advance Programming Skills",
      "Emerging Technologies",
      "The Responsive Web",
      "Flutter & Dart",
      "PHP with Laravel",
      "React Native",
      "Ethical Hacking Fundamentals",
      "Introduction to Computer",
      "Vue.js 3 Fundamentals",
    ],
  },
  {
    title: "Management Training",
    courses: [
      "Design Thinking for Managers",
      "Personal and Professional Development for Managers",
      "Innovation Management for Managers",
      "Business Communication and Report Writing Skills",
      "Understanding Business Environment",
      "Statistics for Business Decision Making",
      "Understanding Organisational Behaviour",
      "Economics & Globalization",
      "Design Thinking for Enterprise",
      "Creativity for Business Managers",
      "Operations & Project Management",
      "Introduction to Business",
    ],
  },
  {
    title: "Psychology & Behaviour",
    courses: [
      "Modern Applications of Business Psychology",
      "Fundamentals of Business Psychology",
      "Introduction to Psychology",
      "Understanding Psychology",
      "Psychology Research Methods and Data Analysis",
      "Personality and Individual Differences",
      "Issues and Debates in Psychology",
      "Cognitive Development Through the Ages",
      "BioSocial Psychology",
      "Abnormal Psychology",
    ],
  },
  {
    title: "Design, Media & Creative",
    courses: [
      "User-Experience and User-Interface Design",
      "Media Production",
      "3D & Virtual Reality",
      "Adobe Premiere Pro CC Masterclass",
      "Advance Skills in Graphic Designing",
      "Digital Storytelling",
      "VFX Training And Character Animation",
      "Creative Industry Challenge",
    ],
  },
  {
    title: "Language Training",
    courses: [
      "English Language - Advanced Level",
      "Basic Academic Skills",
      "English Language Skills",
      "Academic English",
      "Public Speaking",
    ],
  },
  {
    title: "Human Resources",
    courses: [
      "Awareness Sessions on UAE Labour and Employment Law",
      "Human Resource Management for Managers",
      "Human Resources Information Systems (HRIS) Including ESS",
      "Public Speaking",
    ],
  },
  {
    title: "Accounting & Finance",
    courses: [
      "Value Added Tax: Principles and Applications",
      "Financial Accounting for Business Managers",
      "UAE Corporate Tax",
    ],
  },
  {
    title: "Construction & Built Environment",
    courses: [
      "Construction, Mechanical and Built Environment Skills Training",
    ],
  },
  {
    title: "Training in AI",
    courses: [
      "Training in Applied AI Incubation",
      "Training in Freelancing Advanced Skills",
      "Training in Advanced AI-Led E-Commerce",
      "Training in Advanced Skills for Canva AI Tools",
      "Training in AI-Led Sales & Marketing",
      "Training in AI-Led YouTube Monetization & Automation",
      "Training in Emotional Intelligence Leadership",
      "AI in Business",
      "AI in Psychology",
      "AI in Creative Computing",
      "AI in Cyber Security",
      "Utilizing ChatGPT-4 for maximum Efficiency",
      "Prompt Engineering",
    ],
  },
  {
    title: "Coder Series",
    courses: [
      "Coder Series - Basic",
      "Coder Series - Intermediate",
      "Coder Series - Expert",
      "Coder Series - Advance",
    ],
  },
  {
    title: "Industrial Robotic Series",
    courses: [
      "Industrial Robotic Series - Basic",
      "Industrial Robotic Series - Intermediate",
      "Industrial Robotic Series - Expert",
      "Industrial Robotic Series - Advance",
    ],
  },
  {
    title: "Astronomy Series",
    courses: [
      "Astronomy Series - Basic",
      "Astronomy Series - Intermediate",
      "Astronomy Series - Expert",
      "Astronomy Series - Advance",
    ],
  },
],
},
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/abo.webp",
        tag: "ABOUT US",
        title: "About  MetaverseAge Training Institute - Dubai",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About MetaverseAge Training Institute - Dubai",
    paragraphs: [
      "MetaverseAge Training Institute - Dubai is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the institute helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The  University of Creative Arts Standard",
    academicParagraphs: [
      "At MetaverseAge Training Institute - Dubai, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The University of Creative Arts Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "MetaverseAge Training Institute - Dubai established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 


  
    team: [
      { id: 1, name: "Dr Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
      { id: 2, name: "Mr Abdul Basit", role: "IT Manager", image: "/it.png" },
      { id: 3, name: "Dr Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
    ],
  },

  //abu dhabi campus


      {
    slug: "abu-dhabi-campus",
    title: "Future Training Services and Center - Abu Dhabi",
    description: "Follow your dreams and gain skills that help you level up your career. Our Training Centre provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2022",
    heroImage: "/ftc.jpg",

    contact: {
      phone: "+971 54 723 0622",
      email: "info@futuretrainings.ae",
      website: "https://futuretrainings.ae/",
    },

shortCourses: [
  {
    title: "Computer & Technology",
    courses: [
      "Computer Skills Training",
      "Artificial Intelligence & Machine Learning",
      "Big Data Analytics",
      "Cyber Security",
    ],
  },

  {
    title: "Artificial Intelligence",
    courses: [
      "Digital Media and Story Telling",
      "Creative Coding",
      "Emerging Technology",
      "Creative Challenges",
    ],
  },

  {
    title: "Accounting and Finance",
    courses: [
      "Financial Accounting for Managers",
      "Statistics for Managers",
      "Cost & Management Accounting",
      "Economics for Decision Making",
      "Business Law",
      "UK Taxation",
    ],
  },

  {
    title: "Management and Business Services",
    courses: [
      "Principles of Management",
      "Introduction to Entrepreneurship",
      "Organization Theory and Behavior",
      "Practicing Marketing",
      "Managing Innovation",
      "Design Thinking for Enterprise",
      "Understanding the Business Environment",
      "Business Creativity",
      "Contemporary Marketing Management",
      "Managing Operations and Projects",
    ],
  },

  {
    title: "Information and Communication Technology",
    courses: [
      "UX Design & Creative Strategies",
      "Fundamentals of Computing",
      "Web Programming",
      "Data Base Management",
      "Digital Forensics",
      "Mobile Apps Developments",
      "Introduction to Programming",
      "Visual Design Fundamentals",
      "Responsive Web Design Development",
      "Advanced Programming",
      "Games Engine and Scripting",
      "Introduction to Computing",
      "Cyber Security Fundamentals",
    ],
  },

  {
    title: "Mental Calculation Education",
    courses: [
      "Introduction to Psychology",
      "World of Ideas",
      "Psychological Science for Student Success",
      "Issues and Debates in Psychology",
      "Clinical Psychology",
      "Psychology and Social Justice",
      "Criminal and Forensic Psychology",
      "Personal and Professional Development",
      "Understanding Psychology",
      "Individual Differences",
      "Cognitive and Developmental Psychology",
      "Biological and Social Psychology",
    ],
  },

  {
    title: "Standardized Test",
    courses: [
      "Mathematics",
      "Research Methods Data Analysis - 1",
      "Research Methods Data Analysis - 2",
      "Professional and Academic Skills",
    ],
  },

  {
    title: "English Language Proficiency",
    courses: ["Academic English"],
  },
],
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/ftauh.jpg",
        tag: "ABOUT US",
        title: "About  Future Training Services and Center - Abu Dhabi",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About Future Training Services and Center - Abu Dhabi",
    paragraphs: [
      "Future Training Services and Center - Abu Dhabi is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the institute helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The Future Training Services Standard",
    academicParagraphs: [
      "At Future Training Services and Center - Abu Dhabi, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The Future Training Services Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "Future Training Services and Center - Abu Dhabi established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 


  
    team: [
      { id: 1, name: "Edgar Bacason", role: "Center Head", image: "/edg.jpg" },
      { id: 2, name: "Zahoor Ahmad", role: "Academic Coordinator/Trainer", image: "/2f.jpg" },
      { id: 3, name: "Piyumi Rathnayake", role: "Marketing and Admissions Executive", image: "/3f.jpg" },
      { id: 4, name: "Jimboy Napoles", role: "Admissions and Marketing Officer", image: "/4f.jpg" },

    ],

  },

//sharjah institute furute education center



      {
    slug: "futureeducation-center-sharjah",
    title: "Al Mustaqbal Al Bahir Training Center - Sharjah",
    description: "Follow your dreams and gain skills that help you level up your career. Our Training Centre provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2021",
    heroImage: "/shjban.jpg",

    contact: {
      phone: "+971 54 723 0622",
      email: "info@futureeducation.ae",
      website: "https://futureeducation.ae/",
    },


shortCourses: [
  {
    title: "General",
    courses: [
      "Academic English",
      "Professional Academic Skills",
      "Mathematics",
      "Principles of Management",
      "Psychology",
      "Fundamentals of Computing",
    ],
  },
  {
    title: "Computing",
    courses: [
      "Digital Media and Storytelling",
      "Introduction to Programming",
      "Visual Design Fundamentals",
      "UX Design and Ideation",
      "Web Programming",
      "Creativity in Coding",
    ],
  },
  {
    title: "Cyber Security",
    courses: [
      "Cyber Security Fundamentals",
      "Introduction to Computing",
      "Introduction to Programming",
      "Computer Industry",
      "Digital Forensics",
      "Web Programming",
    ],
  },
  {
    title: "Psychology",
    courses: [
      "Research Methods and Data Analysis I",
      "Individual Differences",
      "Understanding Psychology",
      "World of Ideas",
      "Issues and Debates in Psychology",
      "Psychological Science for Student Success",
    ],
  },
  {
    title: "Business Management",
    courses: [
      "Understanding the Business Environment",
      "Personal and Professional Development",
      "Statistics for Managers",
      "Economics for Decision Making",
      "Enterprise Design Thinking",
      "Organisation Behaviour",
    ],
  },
  {
    title: "Business Management Accounting",
    courses: [
      "Understanding the Business Environment",
      "Financial Accounting for Business Enterprise",
      "Statistics for Managers",
      "Economics for Decision Making",
      "Cost and Management Accounting",
      "Organisation Behaviour",
    ],
  },
],
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/ftauh.jpg",
        tag: "ABOUT US",
        title: "Al Mustaqbal Al Bahir Training Center - Sharjah",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About Al Mustaqbal Al Bahir Training Center - Sharjah",
    paragraphs: [
      "Al Mustaqbal Al Bahir Training Center - Sharjah is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the institute helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "The Al Mustaqbal Al Bahir Training Center - Sharjah Standard",
    academicParagraphs: [
      "At Al Mustaqbal Al Bahir Training Center - Sharjah, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The Al Mustaqbal Al Bahir Training Center Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "Al Mustaqbal Al Bahir Training Center - Sharjah established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
    ],
  },
 


  
    team: [
      { id: 1, name: "Edgar Bacason", role: "Center Head", image: "/edg.jpg" },
      { id: 2, name: "Zahoor Ahmad", role: "Academic Coordinator/Trainer", image: "/2f.jpg" },
      { id: 3, name: "Piyumi Rathnayake", role: "Marketing and Admissions Executive", image: "/3f.jpg" },
      { id: 4, name: "Jimboy Napoles", role: "Admissions and Marketing Officer", image: "/4f.jpg" },

    ],

  },

  //uecampus online
  

  
      {
    slug: "uae-campus",
    title: "UE Campus",
    description: "Follow your dreams and gain skills that help you level up your career. Our UAE Campus provides you complete support and creates an environment where you will explore your creativity enhanced by enterprise fit for a modern world.",
    established: "2020",
    heroImage: "/ue-cover.png",

    contact: {
      phone: "+971 54 723 0622",
      email: "info@uecampus.com",
      website: "https://www.uecampus.com/",
    },


programs: {
  bachelors: [
    { title: "Bachelor of Business Administration in General Business", institute: "WALSH" },
    { title: "Bachelor of Business Administration in Marketing", institute: "WALSH" },
    { title: "Bachelor of Business Administration in Finance", institute: "WALSH" },
    { title: "Bachelor of Business Administration in Entrepreneurship", institute: "WALSH" },
    { title: "Bachelor of Business Administration in Accounting", institute: "WALSH" },
    { title: "Bachelor of Business Administration in Human Resource Management", institute: "WALSH" },
    { title: "Bachelor of Business Administration in International Business", institute: "WALSH" },
    { title: "Bachelor of Science in IT", institute: "WALSH" },
    { title: "Bachelor of Science in Cyber Security", institute: "WALSH" },
    { title: "Bachelor of Science in AI and Machine Learning", institute: "WALSH" },
    { title: "Bachelor of Science in Data Analytics", institute: "WALSH" },

    { title: "Bachelor of Business Administration in Marketing", institute: "PPA" },
    { title: "Bachelor of Business Administration in International Business", institute: "PPA" },
    { title: "Bachelor of Business Administration in Human Resource Management", institute: "PPA" },

    { title: "Bachelor of Arts in Accountancy and Finance", institute: "EIE" },
    { title: "Bachelor of Arts in Business Management", institute: "EIE" },
    { title: "Bachelor of Arts in Tourism and Hospitality Management", institute: "EIE" },
  ],

  mastersMBA: [
    { title: "STEM MBA", institute: "WALSH" },
    { title: "General MBA", institute: "WALSH" },
    { title: "Master of Science in Management", institute: "WALSH" },
    { title: "Master of Science in Marketing", institute: "WALSH" },
    { title: "Master of Science in Finance", institute: "WALSH" },
    { title: "Master of Science in AI & Machine Learning", institute: "WALSH" },
    { title: "Master of Science in Data Analytics", institute: "WALSH" },
    { title: "Master of Science in IT", institute: "WALSH" },

    { title: "Masters of Business Administration in Human Resource Management", institute: "PPA" },
    { title: "Masters of Business Administration in Accounting & Finance", institute: "PPA" },
    { title: "Masters of Business Administration in International Business", institute: "PPA" },
    { title: "Masters of Business Administration in Supply Chain Management", institute: "PPA" },

    { title: "Master of Business Administration (MBA)", institute: "EIE" },
    { title: "MBA in Accounting & Finance", institute: "EIE" },
    { title: "MBA in Hospitality & Tourism", institute: "EIE" },
  ],

  dba: [
    { title: "DBA", institute: "WALSH" },
    { title: "DBA in Accounting", institute: "WALSH" },
  ],

  phd: [
    { title: "Organizational Leadership", institute: "WALSH" },
    { title: "AI & Machine Learning (Tech)", institute: "WALSH" },
    { title: "Data Analytics (Tech)", institute: "WALSH" },
    { title: "Cyber Security (Tech)", institute: "WALSH" },
  ],

  diplomas: [
    { title: "Level 2 Diploma in Business Beginners in Cyber Security", institute: "QUALIFI" },
    { title: "Level 3 Integrated Diploma in Business and Management", institute: "QUALIFI" },
    { title: "Level 4 Diploma in Information Technology", institute: "QUALIFI" },
    { title: "Level 4 Diploma in Cyber Security", institute: "QUALIFI" },
    { title: "Level 4 Diploma in Hospitality and Tourism Management", institute: "QUALIFI" },
    { title: "Level 4 Diploma in Accounting and Finance", institute: "QUALIFI" },
    { title: "Level 5 Diploma in Information Technology", institute: "QUALIFI" },
    { title: "Level 5 Diploma in Accounting and Finance", institute: "QUALIFI" },
    { title: "Level 5 Diploma in Hospitality and Tourism Management", institute: "QUALIFI" },
    { title: "Level 5 Diploma in Cyber Security", institute: "QUALIFI" },
    { title: "Level 5 Diploma in Psychology", institute: "QUALIFI" },
    { title: "Level 5 Extended Diploma in Business Management", institute: "QUALIFI" },
    { title: "Level 5 Extended Diploma in Accounting & Finance", institute: "QUALIFI" },
    { title: "Level 5 Extended Diploma in Cyber Security", institute: "QUALIFI" },
    { title: "Level 5 Extended Diploma in Information Technology", institute: "QUALIFI" },
    { title: "Level 5 Extended Diploma in Psychology", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Information Technology", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Logistics and Supply Chain Crisis Management", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Psychology", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Education Management and Leadership", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Accounting and Finance", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Human Resource Management", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Hospitality and Tourism Management", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Strategic Management and Leadership", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Strategic Marketing", institute: "QUALIFI" },
    { title: "Level 7 Diploma in Project Management", institute: "QUALIFI" },
  ],
},
  
      about: {
    breadcrumb: "Home › About Us",
    heroSlides: [
      {
        id: 1,
        image: "/ue-cover.png",
        tag: "ABOUT US",
        title: "UE Campus",
      },
      {
        id: 2,
        image: "/graduation-ceremony-2022.jpg",
        tag: "OUR FOUNDATION",
        title: "Mission, Vision & Values",
      },
    ],

    sectionTitle: "About UE Campus - Online Standard",
    paragraphs: [
      "UE Campus is committed to inspiring students through creativity, innovation and academic excellence. We provide a supportive and inclusive learning environment where students are encouraged to explore their passions and develop the confidence to shape their future.",
      "With internationally recognised programmes and a strong focus on personal and professional growth, the institute helps students build the knowledge, practical skills and global perspective needed in today’s competitive world.",
      "Our academic environment is designed to promote creativity, critical thinking and enterprise, ensuring that every learner benefits from a modern education experience that is both industry-relevant and future-focused.",
    ],

    academicTag: "Academic Excellence",
    academicTitle: "UE Campus - Online Standard",
    academicParagraphs: [
      "At UE Campus - Online Standard, we deliver globally aligned academic programmes that combine innovation, creativity and academic rigour. Our focus is to develop graduates who are ready to succeed in dynamic international industries.",
      "Through high-quality teaching, student support and a modern learning environment, we ensure that students gain both theoretical understanding and practical knowledge throughout their academic journey.",
    ],

    features: [
      {
        title: "Globally Recognised Curriculum",
        desc: "Programmes designed to reflect international academic quality and modern educational standards.",
      },
      {
        title: "Creative & Industry-Relevant Learning",
        desc: "A strong emphasis on creativity, innovation and practical learning aligned with career pathways.",
      },
      {
        title: "Experienced Academic Leadership",
        desc: "Academic guidance delivered through qualified leadership and a student-focused culture.",
      },
      {
        title: "Student-Centric Environment",
        desc: "Dedicated support systems that help students grow academically, professionally and personally.",
      },
    ],

    journeyTitle: "The UE Campus Journey",
    timeline: [
      {
        year: "2015",
        title: "Foundation in the UAE",
        desc: "UE Campus - Online Standard established its presence with a vision to deliver quality higher education.",
      },
      {
        year: "2017",
        title: "Academic Growth",
        desc: "Expanded its academic offerings to provide broader opportunities for students.",
      },
      {
        year: "2020",
        title: "Creative & Digital Focus",
        desc: "Strengthened programmes in creative media, computing and future-ready disciplines.",
      },
      {
        year: "2023",
        title: "Student Experience Enhancement",
        desc: "Enhanced student support, learning resources and academic experience across programmes.",
      },
      {
        year: "2025",
        title: "Modern Global Outlook",
        desc: "Continued building an education model focused on creativity, innovation and enterprise.",
      },
      
    ],
  },
 


  
    team: [
      { id: 1, name: "Edgar Bacason", role: "Center Head", image: "/edg.jpg" },
      { id: 2, name: "Zahoor Ahmad", role: "Academic Coordinator/Trainer", image: "/2f.jpg" },
      { id: 3, name: "Piyumi Rathnayake", role: "Marketing and Admissions Executive", image: "/3f.jpg" },
      { id: 4, name: "Jimboy Napoles", role: "Admissions and Marketing Officer", image: "/4f.jpg" },

    ],

  },



];


export function getInstituteBySlug(slug: string) {
  return institutes.find((inst) => inst.slug === slug);
}