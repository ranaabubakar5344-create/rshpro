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


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const centers = [
  { id: 1, title: "United Arab Emirate", region: "Ras Al Khaimah",slug: "bath-spa-university", logo: "/bsu-logo.png" },
  { id: 3, title: "United Arab Emirate", region: "Umm Al Quwain", logo: "/felo.png" },
  { id: 5, title: "United Arab Emirate", region: "Umm Al Quwain", logo: "/walsh.png" },
  { id: 4, title: "United Arab Emirate", region: "Umm Al Quwain", logo: "/UCA Black Logo.png" },
  { id: 2, title: "United Arab Emirate", region: "Ajman", logo: "/ftsc.png" },
  { id: 6, title: "United Arab Emirate", region: "Dubai", logo: "/images.png" },
  { id: 7, title: "United Arab Emirate", region: "Abu Dhabi", logo: "/ftsc.png" },
  { id: 8, title: "United Arab Emirate", region: "Sharjah", logo: "/shj.png" },
  { id: 9, title: "United Arab Emirate", region: "United Arab Emirates", logo: "/uecampus-logo.webp" },
];

export default function CampusCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % centers.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1f3482] to-[#2b449c] flex flex-col justify-center">

      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-blue-200 uppercase tracking-[4px] text-xs mb-3">
            15+ YEARS OF EXCELLENCE
          </p>

          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
            Our Global Campuses
          </h2>

          <div className="w-16 h-[3px] bg-amber-400 mx-auto mb-4 rounded-full" />

          <p className="text-blue-200 text-sm sm:text-base">
            World-class education across prestigious institutions in the UAE.
          </p>
        </div>

        {/* 3D CURVED CAROUSEL */}
        <div className="relative w-full h-[420px] flex justify-center items-center perspective-[1600px]">

          {centers.map((center, i) => {

            // ✅ Proper circular offset
            let offset = (i - index + centers.length) % centers.length;
            if (offset > centers.length / 2) {
              offset -= centers.length;
            }

            // show only 5 cards
            if (Math.abs(offset) > 2) return null;

            const spacing = 320;
            const rotate = offset * 10;
            const depth = -Math.abs(offset) * 120;
            const lift = Math.abs(offset) * 16;
            const scale = offset === 0 ? 1.05 : 0.94;

            return (
              <motion.div
                key={center.id}
                className="absolute w-[300px] h-[350px]"
                animate={{
                  x: offset * spacing,
                  y: lift,
                  rotateY: rotate,
                  scale: scale,
                  z: depth,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: 100 - Math.abs(offset),
                }}
              >
                <Link href={`/institutes/${center.slug}`}>

                  <div
                    className={`relative rounded-3xl p-6
                    bg-gradient-to-b from-[#1e3a9a] to-[#3b82f9]
                    text-center
                    border border-white/10
                    h-full flex flex-col justify-between
                    ${offset === 0 ? "ring-1 ring-amber-400" : ""}
                    `}
                  >

                 <div className="flex justify-center mb-6">
  <div className="bg-white rounded-xl p-5 w-[130px] h-[100px]
    flex items-center justify-center shadow-sm">
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
                      <h3 className="text-white text-base font-semibold mb-1">
                        {center.region}
                      </h3>
                      <p className="text-blue-200 text-sm">
                        {center.title}
                      </p>
                    </div>

                    <div className="text-amber-400 text-sm">
                      Explore →
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-3">
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

      </div>
      
    </section>
  );
}


//3rd dark blue




// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const centers = [
//   { id: 1, title: "United Arab Emirate", region: "Ras Al Khaimah", logo: "/bsu-logo.png" },
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
//     <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0f1f52] via-[#1b2f7a] to-[#233b9a]  flex flex-col justify-center">

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
//                 <Link href="/home">
//                   <div
//                     className={`relative rounded-3xl p-6
//                     bg-gradient-to-b from-[#0f1f52] to-[#233b9a]
//                     text-center
//                     border border-white/10
//                     h-full flex flex-col justify-between
//                     ${offset === 0 ? "ring-1 ring-amber-400/40" : ""}
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
