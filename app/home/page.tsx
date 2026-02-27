// "use client";

// import Image from "next/image";
// import { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import HomeHeader from "./homeheader";
// import WhoWeAre from "./whowe";
// import ImpactStats from "./ImpactStats";
// import WhatWeOffer from "./WhatWeOffer";
// import InstituteShowcase from "./InstituteShowcase";
// import Team from './Team';
// import FooterPremium from "./Footer";
// const slides = [
//   {
//     id: 1,
//     image: "/bath.webp",
//     title: "Shaping the Future",
//     subtitle: "Through Excellence",
//     desc: "Delivering world-class academic programs across international campuses.",
//   },
//   {
//     id: 2,
//     image: "/sl.jpg",
//     title: "Innovation Beyond",
//     subtitle: "Boundaries",
//     desc: "Empowering learners with cutting-edge knowledge and global pathways.",
//   },
//   {
//     id: 3,
//     image: "/tenaa.jpg",
//     title: "Global Education",
//     subtitle: "Redefined",
//     desc: "Building international academic networks for tomorrow's leaders.",
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const SLIDE_TIME = 6000;

//   useEffect(() => {
//     let start = Date.now();

//     const animate = () => {
//       const elapsed = Date.now() - start;
//       const percent = (elapsed / SLIDE_TIME) * 100;

//       if (percent >= 100) {
//         nextSlide();
//         start = Date.now();
//       } else {
//         setProgress(percent);
//       }

//       timerRef.current = setTimeout(animate, 16);
//     };

//     animate();

//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [current]);

//   const nextSlide = () => {
//     setProgress(0);
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setProgress(0);
//     setCurrent(index);
//   };

//   return (

//     <>
//       {/* ===== SCROLL INDICATOR (LEFT — FIXED) ===== */}
//       {/* Exactly like GEMS: vertical "Scroll to explore" text + animated line + mouse icon */}
//       <div className="fixed left-6 bottom-16 z-50 hidden lg:flex flex-col items-center gap-0">
//         {/* Mouse icon */}
//         <div className="mb-3 w-[22px] h-[36px] rounded-full border-2 border-white/60 flex items-start justify-center pt-[5px]">
//           <div className="w-[2px] h-[8px] bg-white/80 rounded-full animate-bounce" />
//         </div>

//         {/* Animated vertical line — yellow always running */}
//         <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mb-3">
//           <div
//             className="absolute left-0 w-full bg-yellow-400"
//             style={{
//               height: "40%",
//               animation: "scrollLine 1.6s linear infinite",
//             }}
//           />
//         </div>

//         {/* Rotated text */}
//         <span
//           className="text-white font-medium"
//           style={{
//             writingMode: "vertical-rl",
//             transform: "rotate(180deg)",
//             letterSpacing: "0.3em",
//             fontSize: "11px",
//             textTransform: "uppercase",
//           }}
//         >
//           Scroll to explore
//         </span>
//       </div>

//       {/* ===== SOCIAL BAR (RIGHT — FIXED, CENTERED) ===== */}
//       <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-5">

//         {/* "Follow Us" rotated text */}
//         <span
//           className="text-white font-semibold tracking-[0.3em]"
//           style={{
//             writingMode: "vertical-rl",
//             transform: "rotate(180deg)",
//             fontSize: "10px",
//             textTransform: "uppercase",
//           }}
//         >
//           Follow Us
//         </span>

//         {/* Top thin line */}
//         <div className="w-[1px] h-8 bg-white/30" />

//         {/* Social icons */}
//         <div className="flex flex-col items-center gap-4">
//           <a href="#" className="group">
//             <Facebook
//               size={16}
//               className="text-white group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300"
//               strokeWidth={1.8}
//             />
//           </a>
//           <a href="#" className="group">
//             <Instagram
//               size={16}
//               className="text-white group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300"
//               strokeWidth={1.8}
//             />
//           </a>
//           <a href="#" className="group">
//             <Twitter
//               size={16}
//               className="text-white group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300"
//               strokeWidth={1.8}
//             />
//           </a>
//           <a href="#" className="group">
//             <Youtube
//               size={16}
//               className="text-white group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300"
//               strokeWidth={1.8}
//             />
//           </a>
//         </div>

//         {/* Yellow bottom line */}
//         <div className="w-[2px] h-12 bg-yellow-400 rounded-full" />
//       </div>

//       {/* ===== HERO SECTION ===== */}
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* ===== SLIDES ===== */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[current].id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             {/* Background zoom effect */}
//             <motion.div
//               initial={{ scale: 1.15 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 6 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={slides[current].image}
//                 alt="Hero Slide"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//             </motion.div>

//             {/* Deep cinematic overlay */}
//             <div className="absolute inset-0 bg-black/15" />

//             {/* Content */}
//             <div className="absolute inset-0 flex items-center px-8 lg:px-28 z-20">
//               <div className="max-w-4xl text-white">
//                 <motion.h1
//                   initial={{ y: 60, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }} 
//                   transition={{ duration: 0.8 }}
//                   className="text-5xl lg:text-[78px] font-light leading-[1.05]"
//                 >
//                   <span className="block font-bold">{slides[current].title}</span>
//                   <span className="block text-white font-light">
//                     {slides[current].subtitle}
//                   </span>
//                 </motion.h1>

//                 <motion.p
//                   initial={{ y: 40, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="mt-8 text-lg text-white/75 max-w-xl"
//                 >
//                   {slides[current].desc}
//                 </motion.p>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* ===== BOTTOM PROGRESS + THUMBNAILS ===== */}
//         <div className="absolute bottom-0 left-0 w-full z-30 px-8 lg:px-28 pb-10">
//           {/* Loading Line */}
//           <div className="w-full h-[2px] bg-white/20 mb-6 overflow-hidden">
//             <div
//               className="h-full bg-yellow-400 transition-all duration-75"
//               style={{ width: `${progress}%` }}
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-6">
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 onClick={() => goToSlide(index)}
//                 className={`relative w-32 h-20 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
//                   current === index
//                     ? "ring-2 ring-yellow-400 scale-105"
//                     : "opacity-60 hover:opacity-100"
//                 }`}
//               >
//                 <Image src={slide.image} alt="Thumb" fill className="object-cover" />
//                 {current === index && (
//                   <div className="absolute inset-0 bg-black/30" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== GLOBAL STYLES for scroll line animation ===== */}
//       <style jsx global>{`
//         @keyframes scrollLine {
//           0% {
//             top: -40%;
//           }
//           100% {
//             top: 140%;
//           }
//         }
//       `}</style>
// <WhoWeAre/>
// <ImpactStats/>
// <WhatWeOffer/>
// <InstituteShowcase/>
// <Team/>

//     </>

// );

// }
