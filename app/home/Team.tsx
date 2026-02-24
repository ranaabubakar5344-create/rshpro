// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// const team = [
//   {
//     id: 1,
//     name: "Dr Raja Sajjad",
//     role: "Founder & Chairman",
//     image: "/founder.png",
//   },
//   {
//     id: 2,
//     name: "Hassan Sajjad",
//     role: "CEO",
//     image: "/ceo.png",
//   },
//   {
//     id: 3,
//     name: "Dr. Niño Miranda Decenorio",
//     role: "Sr. Vice President",
//     image: "/vicepr.png",
//   },
//   {
//     id: 4,
//     name: "Mr. Saqib Shahzad Bhatti",
//     role: "Academic Director",
//     image: "/acad.png",
//   },
//     {
//     id: 5,
//     name: "Dr. M N Brohi - RAK",
//     role: "Academic Centre Manager",
//     image: "/brh.png",
//   },
//   {
//     id: 6,
//     name: "Ms. Eleanor Carino",
//     role: "Finance Manager",
//     image: "/fin.jpg",
//   },
//     {
//     id: 7,
//     name: "Dr. Khuram Amin",
//     role: "Strategic Projects Head",
//     image: "/skm.png",
//   },
//    {
//     id: 8,
//     name: "Mr. Abdul Basit",
//     role: "IT Manager",
//     image: "/it.png",
//   },
//    {
//     id: 9,
//     name: "Admission Manager",
//     role: "Dr. Salvacion Martir",
//     image: "/ia.png",
//   },
// ];

// export default function LeadershipSplitSection() {
//   const [active, setActive] = useState(0);

//   const headingRef = useRef(null);
//   const isInView = useInView(headingRef, {
//     once: true,
//     margin: "-100px",
//   });

//   const next = () =>
//     setActive((prev) => (prev + 1) % team.length);

//   const prev = () =>
//     setActive((prev) =>
//       prev === 0 ? team.length - 1 : prev - 1
//     );

//   return (
//     <section className="w-full bg-[#F8FAFC] py-32">

//       {/* ================= HEADING ================= */}
//       <div
//         ref={headingRef}
//         className="max-w-7xl mx-auto px-6 mb-24 text-center"
//       >
//   <div className="relative inline-flex items-center overflow-hidden rounded-full bg-white border border-[#1b4f87] h-9 w-[240px]">
//               <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
//               <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
//               <motion.div
//                 className="flex items-center whitespace-nowrap"
//                 animate={{ x: ["0%", "-50%"] }}
//                 transition={{ duration: 8, ease: "linear", repeat: Infinity }}
//               >
//                 {[0, 1].map((copy) => (
//                   <span key={copy} className="flex items-center">
//                     {Array(6).fill(null).map((_, i) => (
//                       <span key={i} className="flex items-center">
//                         <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-800 px-2">
//                           MEET THE TEAM
//                         </span>
//                         <span className="text-blue-600 text-[8px] font-bold px-1">·</span>
//                       </span>
//                     ))}
//                   </span>
//                 ))}
//               </motion.div>
//             </div>
    
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-[54px] md:text-[76px] leading-[1.05] font-extrabold text-black"
//         >
//           Global Executive
//           <br />
//           Leadership
//         </motion.h1>
//       </div>

//       {/* ================= SPLIT SECTION ================= */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

//         {/* ===== LEFT IMAGE ===== */}
//         <div className="relative w-full h-[650px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={team[active].id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={team[active].image}
//                 alt={team[active].name}
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="100vw"
//                 quality={100}
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* Elegant Bottom Info Card */}
//           <div className="absolute bottom-12 left-12 bg-white px-10 py-6 rounded-2xl shadow-xl">
//             <p className="text-xs tracking-widest text-[#1E3A8A] uppercase mb-1">
//               {team[active].role}
//             </p>
//             <h3 className="text-2xl font-semibold text-black">
//               {team[active].name}
//             </h3>
//           </div>
//         </div>

//         {/* ===== RIGHT CONTENT ===== */}
//         <div className="flex flex-col justify-center">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={team[active].name}
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-4">
//                 {team[active].name}
//               </h2>
//               <p className="text-lg text-gray-600 mb-14">
//                 {team[active].role}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Thumbnails */}
//           <div className="flex gap-6 mb-14">
//             {team.map((member, index) => (
//               <div
//                 key={member.id}
//                 onClick={() => setActive(index)}
//                 className={`relative w-32 h-44 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
//                   index === active
//                     ? "scale-100 opacity-100 shadow-xl"
//                     : "scale-90 opacity-40"
//                 }`}
//               >
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover"
//                   sizes="200px"
//                   quality={100}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Controls */}
//           <div className="flex gap-5">
//             <button
//               onClick={prev}
//               className="w-14 h-14 rounded-full border border-[#1E3A8A]/20 bg-white hover:bg-[#1E3A8A] hover:text-white transition text-[#1E3A8A] text-xl"
//             >
//               ←
//             </button>
//             <button
//               onClick={next}
//               className="w-14 h-14 rounded-full border border-[#1E3A8A]/20 bg-white hover:bg-[#1E3A8A] hover:text-white transition text-[#1E3A8A] text-xl"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// 3RD BLUE COLOR

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const team = [
  { id: 1, name: "Dr Raja Sajjad", role: "Founder & Chairman", image: "/founder.png" },
  { id: 2, name: "Hassan Sajjad", role: "CEO", image: "/ceo.png" },
  { id: 3, name: "Dr. Niño Miranda Decenorio", role: "Sr. Vice President", image: "/vicepr.png" },
  { id: 4, name: "Mr. Saqib Shahzad Bhatti", role: "Academic Director", image: "/acad.png" },
  { id: 5, name: "Dr. M N Brohi - RAK", role: "Academic Centre Manager", image: "/brh.png" },
  { id: 6, name: "Ms. Eleanor Carino", role: "Finance Manager", image: "/fin.jpg" },
  { id: 7, name: "Dr. Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
  { id: 8, name: "Mr. Abdul Basit", role: "IT Manager", image: "/it.png" },
  { id: 9, name: "Dr. Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
];

export default function LeadershipSplitSection() {
  const [active, setActive] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const sectionInView = useInView(sectionRef, { amount: 0.4 });
  const headingInView = useInView(headingRef, { once: true });

  /* Responsive thumbnails */
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  /* Auto start when section visible */
  useEffect(() => {
    if (!sectionInView) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % team.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sectionInView]);

  const next = () => setActive((prev) => (prev + 1) % team.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? team.length - 1 : prev - 1));

  const visibleThumbnails = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleThumbnails.push(team[(active + i) % team.length]);
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#03406f] py-24 md:py-36 overflow-hidden mt-6"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

      {/* ================= HEADING ================= */}
      <div
        ref={headingRef}
        className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10"
      >
        {/* Animated Tag */}
        <div className="relative inline-flex items-center overflow-hidden rounded-full bg-white/10 border border-white/20 h-10 w-[260px] shadow-sm mb-8 backdrop-blur-sm">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          >
            {[0, 1].map((copy) => (
              <span key={copy} className="flex items-center">
                {Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="flex items-center">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white px-3">
                        Meet The Team
                      </span>
                      <span className="text-white/40 text-xs px-1">•</span>
                    </span>
                  ))}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[40px] md:text-[72px] font-extrabold text-white leading-tight"
        >
          Executive Leadership
          <br />
          Team
        </motion.h1>
      </div>

      {/* ================= SPLIT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[450px] md:h-[650px] rounded-3xl overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.4)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={team[active].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={team[active].image}
                alt={team[active].name}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-10 left-10 bg-white/95 px-6 py-4 rounded-xl shadow-xl">
            <p className="text-xs uppercase tracking-widest text-[#03406f]">
              {team[active].role}
            </p>
            <h3 className="text-xl font-semibold text-black">
              {team[active].name}
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            {team[active].name}
          </h2>

          <p className="text-white/80 mb-10 text-lg">
            {team[active].role}
          </p>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mb-10">
            {visibleThumbnails.map((member, index) => {
              const realIndex = (active + index) % team.length;
              const isActive = realIndex === active;

              return (
                <div
                  key={member.id}
                  onClick={() => setActive(realIndex)}
                  className={`relative w-24 h-32 md:w-28 md:h-40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "scale-105 ring-2 ring-white ring-offset-2 ring-offset-[#03406f]"
                      : "opacity-70 scale-95"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />

                  {!isActive && (
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* CONTROLS */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-[#03406f] transition text-white"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-[#03406f] transition text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// const team = [
//   { id: 1, name: "Dr Raja Sajjad", role: "Founder & Chairman", image: "/founder.png" },
//   { id: 2, name: "Hassan Sajjad", role: "CEO", image: "/ceo.png" },
//   { id: 3, name: "Dr. Niño Miranda Decenorio", role: "Sr. Vice President", image: "/vicepr.png" },
//   { id: 4, name: "Mr. Saqib Shahzad Bhatti", role: "Academic Director", image: "/acad.png" },
//   { id: 5, name: "Dr. M N Brohi - RAK", role: "Academic Centre Manager", image: "/brh.png" },
//   { id: 6, name: "Ms. Eleanor Carino", role: "Finance Manager", image: "/fin.jpg" },
//   { id: 7, name: "Dr. Khuram Amin", role: "Strategic Projects Head", image: "/skm.png" },
//   { id: 8, name: "Mr. Abdul Basit", role: "IT Manager", image: "/it.png" },
//   { id: 9, name: "Dr. Salvacion Martir", role: "Admission Manager", image: "/ia.png" },
// ];

// export default function LeadershipSplitSection() {
//   const [active, setActive] = useState(0);
//   const [startIndex, setStartIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(4);

//   const headingRef = useRef(null);
//   const isInView = useInView(headingRef, { once: true });

//   /* ✅ Responsive thumbnails */
//   useEffect(() => {
//     const updateLayout = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(3);
//       } else {
//         setItemsPerView(4);
//       }
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   /* ✅ Next / Prev move by visible count */
//   const next = () => {
//     setStartIndex((prev) => (prev + itemsPerView) % team.length);
//   };

//   const prev = () => {
//     setStartIndex((prev) =>
//       (prev - itemsPerView + team.length) % team.length
//     );
//   };

//   /* ✅ Proper Circular Logic */
//   const visibleThumbnails = [];
//   for (let i = 0; i < itemsPerView; i++) {
//     visibleThumbnails.push(team[(startIndex + i) % team.length]);
//   }

//   return (
//     <section className="w-full bg-[#F8FAFC] py-20 md:py-32">

//       {/* HEADING */}
//      {/* ================= HEADING ================= */}
// <div
//   ref={headingRef}
//   className="max-w-7xl mx-auto px-6 mb-24 text-center"
// >

//   {/* Animated Tag */}
//   <div className="relative inline-flex items-center overflow-hidden rounded-full bg-white border border-[#1E3A8A]/20 h-10 w-[260px] shadow-sm mb-8">

//     {/* fade edges */}
//     <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
//     <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

//     <motion.div
//       className="flex items-center whitespace-nowrap"
//       animate={{ x: ["0%", "-50%"] }}
//       transition={{
//         duration: 12,
//         ease: "linear",
//         repeat: Infinity,
//       }}
//     >
//       {[0, 1].map((copy) => (
//         <span key={copy} className="flex items-center">
//           {Array(6).fill(null).map((_, i) => (
//             <span key={i} className="flex items-center">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1E3A8A] px-3">
//                 Meet The Team
//               </span>
//               <span className="text-[#1E3A8A]/40 text-xs px-1">•</span>
//             </span>
//           ))}
//         </span>
//       ))}
//     </motion.div>
//   </div>

//   {/* Main Heading */}
//   <motion.h1
//     initial={{ opacity: 0, y: 40 }}
//     animate={isInView ? { opacity: 1, y: 0 } : {}}
//     transition={{ duration: 0.8 }}
//     className="text-[54px] md:text-[76px] leading-[1.05] font-extrabold text-black"
//   >
//     Executive Leadership
//     <br />
//     Team
//   </motion.h1>

// </div>


//       {/* SPLIT SECTION */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

//         {/* LEFT IMAGE */}
//         <div className="relative w-full h-[450px] md:h-[650px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={team[active].id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0"
//             >
//              <Image
//   src={team[active].image}
//   alt={team[active].name}
//   fill
//   className="object-cover"
// />

//             </motion.div>
//           </AnimatePresence>

//           <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-white/95 px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-lg backdrop-blur-sm">
//             <p className="text-xs tracking-widest text-[#1E3A8A] uppercase">
//               {team[active].role}
//             </p>
//             <h3 className="text-lg md:text-2xl font-semibold text-black">
//               {team[active].name}
//             </h3>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div>

//           <h2 className="text-2xl md:text-4xl font-semibold text-[#1E3A8A] mb-3">
//             {team[active].name}
//           </h2>

//           <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
//             {team[active].role}
//           </p>

//           {/* THUMBNAILS */}
//           <div className="flex gap-4 md:gap-6 mb-8 md:mb-12">

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={startIndex}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -30 }}
//                 transition={{ duration: 0.4 }}
//                 className="flex gap-4 md:gap-6"
//               >
//                 {visibleThumbnails.map((member) => {
//                   const realIndex = team.findIndex(t => t.id === member.id);
//                   const isActive = realIndex === active;

//                   return (
//                     <div
//                       key={member.id}
//                       onClick={() => setActive(realIndex)}
//                       className={`relative w-24 h-32 md:w-28 md:h-40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 
//                       ${isActive 
//                         ? "scale-105 shadow-lg z-10" 
//                         : "scale-95 opacity-80"
//                       }`}
//                     >
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         fill
//                         className="object-cover"
//                         quality={100}
//                       />

//                       {!isActive && (
//                         <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
//                       )}

//                       {isActive && (
//                         <div className="absolute inset-0 ring-2 ring-[#1E3A8A] ring-offset-2 ring-offset-white rounded-xl" />
//                       )}
//                     </div>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>

//           </div>

//           {/* CONTROLS */}
//           <div className="flex gap-4">
//             <button
//               onClick={prev}
//               className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1E3A8A]/20 bg-white hover:bg-[#1E3A8A] hover:text-white transition text-[#1E3A8A]"
//             >
//               ←
//             </button>
//             <button
//               onClick={next}
//               className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1E3A8A]/20 bg-white hover:bg-[#1E3A8A] hover:text-white transition text-[#1E3A8A]"
//             >
//               →
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
