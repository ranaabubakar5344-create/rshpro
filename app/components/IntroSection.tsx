// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, Variants } from "framer-motion";
// import NetworkBackground from "./NetworkBackground";
// const centers = [
//   { id: 1, title: "United Arab Emirate", region: "Ras Al Khaimah", slug: "bath-spa-university", logo: "/bsu-logo.png" },
//   { id: 3, title: "United Arab Emirate", region: "Umm Al Quwain", slug: "future-education-university-college", logo: "/felo.png" },
//   { id: 5, title: "United Arab Emirate", region: "Umm Al Quwain", slug: "walsh-campus", logo: "/walsh.png" },

//   { id: 4, title: "United Arab Emirate", region: "Umm Al Quwain", slug: "university-of-creative-arts", logo: "/UCA Black Logo.png" },
//   { id: 2, title: "United Arab Emirate", region: "Ajman", slug: "future-training-services-center", logo: "/ftsc.png" },
//   { id: 6, title: "United Arab Emirate", region: "Dubai", slug: "metaverse-age-training-institute", logo: "/images.png" },
//   { id: 7, title: "United Arab Emirate", region: "Abu Dhabi", slug: "future-training-center", logo: "/ftsc.png" },
//   { id: 8, title: "United Arab Emirate", region: "Sharjah", slug: "future-education-center", logo: "/shj.png" },
//   { id: 9, title: "United Arab Emirate", region: "United Arab Emirates", slug: "ue-campus", logo: "/uecampus-logo.webp" },

// ];

// export default function CampusCarousel() {
//   const [index, setIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(4);

//   useEffect(() => {
//     const updateLayout = () => {
//       const width = window.innerWidth;
//       if (width < 640) setCardsToShow(1);
//       else if (width < 1024) setCardsToShow(2);
//       else setCardsToShow(4);
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   const totalSlides = centers.length - cardsToShow;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev >= totalSlides ? 0 : prev + 1));
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const translate = 100 / cardsToShow;

//   // ✅ Properly typed variants
//   const container: Variants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const item: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//       scale: 0.95,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   return (
//   <section className="relative min-h-screen bg-gradient-to-b from-[#1f3482] to-[#2b449c] py-16 overflow-hidden">
//   {/* <NetworkBackground /> */}
//   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <p className="text-blue-200 uppercase tracking-[4px] text-xs mb-4">
//             15+ YEARS OF EXCELLENCE
//           </p>

//           <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
//             Our Global Campuses
//           </h2>

//           <div className="w-16 h-[3px] bg-amber-400 mx-auto mb-6 rounded-full" />

//           <p className="text-blue-200 text-sm sm:text-base">
//             World-class education across prestigious institutions in the UAE.
//           </p>
//         </div>

//         {/* CAROUSEL */}
//         <div className="overflow-hidden">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${index * translate}%)`,
//             }}
//           >
//             {centers.map((center) => (
//              <motion.div
//   key={center.id}    
//   variants={item}
//   className="flex-shrink-0 px-3"
//   style={{ width: `${100 / cardsToShow}%` }}
// >
//   <Link
//     // href={`/institutes/${center.slug}`}
//     href={'/home'}
//     className="block"
//   >
// <div
//   className="group relative rounded-2xl p-8
//   bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6]
//   text-center
//   border border-white/15
//   hover:-translate-x-2
//   transition-all duration-500
//   h-[340px] flex flex-col justify-between
//   overflow-hidden cursor-pointer"
// >

//       {/* OUTER FRAME */}
//       <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

//       {/* TOP GOLD LINE */}
//       {/* <div className="absolute top-0 left-0 w-full h-[3px]
//         bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" /> */}

//       {/* SIDE LIGHT LINES */}
//       <div className="absolute inset-y-0 left-0 w-[2px]
//         bg-gradient-to-b from-white/30 to-transparent opacity-40" />

//       <div className="absolute inset-y-0 right-0 w-[2px]
//         bg-gradient-to-b from-white/30 to-transparent opacity-40" />

//       {/* LOGO */}
//   {/* 3D LOGO BLOCK */}
// {/* 3D LOGO BLOCK */}
// <div className="relative mb-8 flex items-center justify-center">

//   {/* BACK DEPTH LAYER */}
//   <div className="absolute w-[130px] h-[110px] 
//       bg-white/20 rounded-xl blur-md 
//       translate-y-3 opacity-40" />


// {/* bg-gradient-to-b from-[#101b42] to-[#16255c]
//       bg-blue-700/90




// bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] */}

//   {/* MAIN LOGO CARD */}
//   <div
//     className="relative bg-gradient-to-b from-white to-gray-100
//     rounded-xl p-6 h-[110px] w-[130px]
//     flex items-center justify-center
// shadow-[0_15px_30px_rgba(255,255,255,0.15)]

//     border border-white
//     group-hover:-translate-y-2
//     transition-all duration-500"
//   >
//     <Image
//       src={center.logo}
//       alt={center.title}
//       width={110}
//       height={70}
//       className="object-contain"
//     />
//   </div>

// </div>

//       {/* TITLE */}
//       <div>
//                 <h3 className="text-white text-lg font-semibold mb-2">

//           {center.region}
//         </h3>
//           <p className="text-blue-200 text-sm">
//           {center.title}
//         </p>
      
//       </div>

//       {/* EXPLORE TEXT */}
//       <div className="text-amber-400 text-sm font-medium group-hover:translate-x-1 transition">
//         Explore →
//       </div>

//     </div>
//   </Link>
// </motion.div>

//             ))}
//           </motion.div>
//         </div>

//         {/* DOTS */}
//         <div className="flex justify-center mt-10 gap-3">
//           {Array.from({ length: totalSlides + 1 }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 i === index
//                   ? "w-6 bg-amber-400"
//                   : "w-2 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }





//2nd


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const centers = [
//   { id: 1, title: "United Arab Emirate", region: "Ras Al Khaimah",slug: "bath-spa-university", logo: "/bsu-logo.png" },
//   { id: 3, title: "United Arab Emirate", region: "Umm Al Quwain", logo: "/felo.png" },
//   { id: 5, title: "United Arab Emirate", region: "Umm Al Quwain", logo: "/walsh.png" },
//   { id: 4, title: "United Arab Emirate", region: "Umm Al Quwain", logo: "/UCA Black Logo.png" },
//   { id: 2, title: "United Arab Emirate", region: "Ajman", logo: "/ftsc.png" },
//   { id: 6, title: "United Arab Emirate", region: "Dubai", logo: "/images.png" },
//   { id: 7, title: "United Arab Emirate", region: "Abu Dhabi", logo: "/ftsc.png" },
//   { id: 8, title: "United Arab Emirate", region: "Sharjah", logo: "/shj.png" },
//   { id: 9, title: "United Arab Emirate", region: "United Arab Emirates", logo: "/uecampus-logo.webp" },
// ];

// export default function CampusCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % centers.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1f3482] to-[#2b449c] flex flex-col justify-center">

//       <div className="max-w-7xl mx-auto px-6 w-full">

//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <p className="text-blue-200 uppercase tracking-[4px] text-xs mb-3">
//             15+ YEARS OF EXCELLENCE
//           </p>

//           <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
//             Our Global Campuses
//           </h2>

//           <div className="w-16 h-[3px] bg-amber-400 mx-auto mb-4 rounded-full" />

//           <p className="text-blue-200 text-sm sm:text-base">
//             World-class education across prestigious institutions in the UAE.
//           </p>
//         </div>

//         {/* 3D CURVED CAROUSEL */}
//         <div className="relative w-full h-[420px] flex justify-center items-center perspective-[1600px]">

//           {centers.map((center, i) => {

//             // ✅ Proper circular offset
//             let offset = (i - index + centers.length) % centers.length;
//             if (offset > centers.length / 2) {
//               offset -= centers.length;
//             }

//             // show only 5 cards
//             if (Math.abs(offset) > 2) return null;

//             const spacing = 320;
//             const rotate = offset * 10;
//             const depth = -Math.abs(offset) * 120;
//             const lift = Math.abs(offset) * 16;
//             const scale = offset === 0 ? 1.05 : 0.94;

//             return (
//               <motion.div
//                 key={center.id}
//                 className="absolute w-[300px] h-[350px]"
//                 animate={{
//                   x: offset * spacing,
//                   y: lift,
//                   rotateY: rotate,
//                   scale: scale,
//                   z: depth,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeInOut",
//                 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   zIndex: 100 - Math.abs(offset),
//                 }}
//               >
//                 <Link href={`/institutes/${center.slug}`}>

//                   <div
//                     className={`relative rounded-3xl p-6
//                     bg-gradient-to-b from-[#1e3a9a] to-[#3b82f9]
//                     text-center
//                     border border-white/10
//                     h-full flex flex-col justify-between
//                     ${offset === 0 ? "ring-1 ring-amber-400 " : ""}
//                     `}

                    
//                   >

//                  <div className="flex justify-center mb-6">
//   <div className="bg-white rounded-xl p-5 w-[130px] h-[100px]
//     flex items-center justify-center shadow-sm">
//     <Image
//       src={center.logo}
//       alt={center.title}
//       width={130}
//       height={90}
//       className="object-contain"
//       quality={100}
//       priority
//     />
//   </div>
// </div>
//                     <div>
//                       <h3 className="text-white text-base font-semibold mb-1">
//                         {center.region}
//                       </h3>
//                       <p className="text-blue-200 text-sm">
//                         {center.title}
//                       </p>
//                     </div>

//                     <div className="text-amber-400 text-sm">
//                       Explore →
//                     </div>

//                   </div>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* DOTS */}
//         <div className="flex justify-center mt-6 gap-3">
//           {centers.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 i === index ? "w-6 bg-amber-400" : "w-2 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
      
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const centers = [
  {
    id: 1,
    title: "United Arab Emirate",
    region: "Ras Al Khaimah",
    slug: "bath-spa-university",
    logo: "/bsu-logo.png",
  },
  {
    id: 3,
    title: "United Arab Emirate",
    region: "Umm Al Quwain",
    slug: "future-education-university-college",
    logo: "/felo.png",
  },
  {
    id: 5,
    title: "United Arab Emirate",
    region: "Umm Al Quwain",
    slug: "walsh-campus",
    logo: "/walsh.png",
  },
  {
    id: 4,
    title: "United Arab Emirate",
    region: "Umm Al Quwain",
    slug: "university-of-creative-arts",
    logo: "/UCA Black Logo.png",
  },
  {
    id: 2,
    title: "United Arab Emirate",
    region: "Ajman",
    slug: "future-training-services-center",
    logo: "/ftsc.png",
  },
  {
    id: 6,
    title: "United Arab Emirate",
    region: "Dubai",
    slug: "dubai-campus",
    logo: "/images.png",
  },
  {
    id: 7,
    title: "United Arab Emirate",
    region: "Abu Dhabi",
    slug: "abu-dhabi-campus",
    logo: "/ftsc.png",
  },
  {
    id: 8,
    title: "United Arab Emirate",
    region: "Sharjah",
    slug: "sharjah-campus",
    logo: "/shj.png",
  },
  {
    id: 9,
    title: "United Arab Emirate",
    region: "United Arab Emirates",
    slug: "uae-campus",
    logo: "/uecampus-logo.webp",
  },
];

export default function CampusCarousel() {
  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setShowIntro(true);
    setShowCards(false);
  }, []);

  useEffect(() => {
    if (!showCards) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % centers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [showCards]);

  const handleSkipIntro = () => {
    setShowIntro(false);

    setTimeout(() => {
      setShowCards(true);
    }, 180);
  };

  return (
    <>

<AnimatePresence>
{showIntro && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}
className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#1c2f78]/40 to-[#2a3f8a]/40 px-4 backdrop-blur-[6px]"
>

<div className="flex w-full max-w-4xl flex-col items-center">

{/* Modal */}
<motion.div
initial={{ opacity: 0, y: 28, scale: 0.96 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 20, scale: 0.96 }}
transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
className="relative w-full max-w-5xl h-auto min-h-[420px] md:h-[500px] overflow-hidden rounded-[32px] bg-white border-2 border-[#E6B422] shadow-[0_40px_90px_-8px_rgba(0,0,0,0.25)]"
>

<button
onClick={handleSkipIntro}
aria-label="Close dialog"
className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#1f3a7a] shadow-md backdrop-blur-sm transition-all duration-200 hover:rotate-90 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E6B422] focus:ring-offset-2"
>
✕
</button>

<div className="relative z-10 flex min-h-[420px] items-center justify-center px-4 py-6 sm:px-10 sm:py-10 md:px-14 md:py-12">

<motion.div
initial={{ opacity: 0, y: 12, scale: 0.98 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{
duration: 0.5,
delay: 0.15,
type: "spring",
stiffness: 260,
damping: 20,
}}
className="relative flex h-[220px] w-full max-w-[860px] items-center justify-center rounded-[28px] bg-white"
>

<div className="absolute inset-0 rounded-[28px] bg-white" />

<div className="flex h-full w-full items-center justify-center">

<div className="relative h-[400px] w-[360px] sm:h-[150px] sm:w-[420px] md:h-[890px] md:w-[860px]  md:mt-20">
<Image
src="/rsh_logo.png"
alt="RSH Group"
fill
priority
quality={100}
className="object-contain"
/>

</div>

</div>

</motion.div>

</div>

<motion.div className="flex flex-col items-center pb-6">

<motion.p
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.45, delay: 0.3 }}
className="mx-auto max-w-xl text-center text-base leading-relaxed text-[#2C3E8C] sm:text-lg"
>
A Global Network of Education Excellence.
</motion.p>

<motion.svg
width="180"
height="22"
viewBox="0 0 180 22"
fill="none"
className="mt-2"
>

<motion.path
d="M5 12 Q90 24 175 12"
stroke="#E6B422"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{
duration: 1.2,
delay: 0.6,
ease: "easeInOut"
}}
/>

</motion.svg>

</motion.div>

</motion.div>


{/* Buttons */}

<motion.div
initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 10 }}
transition={{ duration: 0.45, delay: 0.35 }}
className="mt-6 w-full max-w-4xl"
>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">

<Link
  href="/about"
  className="group rounded-lg border border-[#3A5FCE]/20 bg-[#3A5FCE] px-3 py-3 text-center text-sm sm:text-base font-semibold text-white shadow-md shadow-[#3A5FCE]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4B6FE0] hover:shadow-lg hover:shadow-[#3A5FCE]/40 focus:outline-none focus:ring-2 focus:ring-[#E6B422] focus:ring-offset-2"
>
  About RSH
</Link>

<button className="group rounded-lg border border-[#3A5FCE]/20 bg-[#3A5FCE] px-3 py-3 text-center text-sm sm:text-base font-semibold text-white shadow-md shadow-[#3A5FCE]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4B6FE0] hover:shadow-lg hover:shadow-[#3A5FCE]/40 focus:outline-none focus:ring-2 focus:ring-[#E6B422] focus:ring-offset-2">
Become a Partner
</button>

<button className="group rounded-lg border border-[#3A5FCE]/20 bg-[#3A5FCE] px-3 py-3 text-center text-sm sm:text-base font-semibold text-white shadow-md shadow-[#3A5FCE]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4B6FE0] hover:shadow-lg hover:shadow-[#3A5FCE]/40 focus:outline-none focus:ring-2 focus:ring-[#E6B422] focus:ring-offset-2">
Our Partners
</button>

<button className="group rounded-lg border border-[#3A5FCE]/20 bg-[#3A5FCE] px-3 py-3 text-center text-sm sm:text-base font-semibold text-white shadow-md shadow-[#3A5FCE]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4B6FE0] hover:shadow-lg hover:shadow-[#3A5FCE]/40 focus:outline-none focus:ring-2 focus:ring-[#E6B422] focus:ring-offset-2">
Team
</button>

</div>

</motion.div>

</div>

</motion.div>
)}
</AnimatePresence>
      <section className="relative flex h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-[#1f3482] to-[#2b449c]">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: showCards ? 1 : 0,
              y: showCards ? 0 : 30,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs uppercase tracking-[4px] text-blue-200">
                15+ YEARS OF EXCELLENCE
              </p>

              <h2 className="mb-4 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
                Our Global Campuses
              </h2>

              <div className="mx-auto mb-4 h-[3px] w-16 rounded-full bg-amber-400" />

              <p className="text-sm text-blue-200 sm:text-base">
                World-class education across prestigious institutions in the UAE.
              </p>
            </div>

            {showCards && (
              <>
                <div className="relative flex h-[420px] w-full items-center justify-center perspective-[1600px]">
                  {centers.map((center, i) => {
                    let offset = (i - index + centers.length) % centers.length;
                    if (offset > centers.length / 2) offset -= centers.length;

                    if (Math.abs(offset) > 2) return null;

                    const spacing = 320;
                    const rotate = offset * 10;
                    const depth = -Math.abs(offset) * 120;
                    const lift = Math.abs(offset) * 16;
                    const scale = offset === 0 ? 1.05 : 0.94;

                    const cardContent = (
                      <div
                        className={`relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#1e3a9a] to-[#3b82f9] p-6 text-center ${
                          offset === 0 ? "ring-1 ring-amber-400" : ""
                        }`}
                      >
                        <div className="mb-6 flex justify-center">
                          <div className="flex h-[100px] w-[130px] items-center justify-center rounded-xl bg-white p-5 shadow-sm">
                            <Image
                              src={center.logo}
                              alt={center.title}
                              width={130}
                              height={90}
                              className="object-contain"
                              quality={100}
                              priority
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-1 text-base font-semibold text-white">
                            {center.region}
                          </h3>
                          <p className="text-sm text-blue-200">
                            {center.title}
                          </p>
                        </div>

                        <div className="text-sm text-amber-400">Explore →</div>
                      </div>
                    );

                    return (
                      <motion.div
                        key={center.id}
                        className="absolute h-[350px] w-[300px]"
                        initial={{ opacity: 0, scale: 0.85, y: 40 }}
                        animate={{
                          opacity: 1,
                          x: offset * spacing,
                          y: lift,
                          rotateY: rotate,
                          scale,
                          z: depth,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                          zIndex: 100 - Math.abs(offset),
                        }}
                      >
                        <Link href={`/institutes/${center.slug}`}>
                          {cardContent}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  {centers.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index ? "w-6 bg-amber-400" : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}