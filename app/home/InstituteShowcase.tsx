// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// const institutes = [
//   {
//     id: "01",
//     title: "Bath Spa University Academic Centre – RAK",
//     location: "Academic Zone - RAKEZ",
//     rating: "4.9",
//     reviews: "3k+ satisfied students",
//     image: "/bathspa.jpg",
//   },
//   {
//     id: "02",
//     title: "Future Education University College",
//     location: "Umm Al Quwain",
//     rating: "4.8",
//     reviews: "900+ students",
//     image: "/feuc.webp",
//   },
//   {
//     id: "03",
//     title: "Future Training Center",
//     location: "Abu Dhabi ",
//     rating: "4.8",
//     reviews: "2.5k+ students",
//     image: "/ftauh.jpg",
//   },
//   {
//     id: "04",
//     title: "University of Creative Arts",
//     location: "umm al quwain",
//     rating: "4.9",
//     reviews: "1.8k+ alumni",
//     image: "/1.jpeg",
//   },
  // {
  //   id: "05",
  //   title:"Metaverse Age Training Institute",
  //   location: "Dubai",
  //   rating: "4.7",
  //   reviews: "1.2k+ students",
  //   image: "/1.webp",
  // },
  
  // {
  //   id: "06",
  //   title: "Walsh Campus",
  //   location: "umm al quwain",
  //     rating: "4.9",
  //   reviews: "2.1k+ alumni",
  //   image: "/unnamed.webp",
  // },
  //   {
  //   id: "07",
  //   title: "Future Training Services & Center",
  //   location: "AJMAN ",
  //     rating: "4.9",
  //   reviews: "2.1k+ alumni",
  //   image: "/ft.webp",
  // },
  // {
  //   id: "08",
  //   title: "Al Mustaqbal Al Bahir Training Center",
  //   location: "Sharjah",
  //   rating: "4.6",
  //   reviews: "750+ students",
  //   image: "/shaj.jpeg",
  // },
// ];

// const headingSlide = {
//   title: "Our Global Institutes",
//   subtitle: "Excellence Across Borders",
//  description: "A global network of distinguished institutions united by a shared commitment to academic excellence, ethical leadership, and global access.", 
//   image: "/bathspaaa.jpg",
// };

// export default function ParallaxInstitutes() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const totalSlides = institutes.length + 1;

//   return (
//     <section ref={containerRef} className="relative bg-black">
//       {/* Heading Slide */}
//       <div className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
//         {/* Background image with gradient overlay */}
//         <motion.div
//           style={{
//             scale: useTransform(
//               scrollYProgress,
//               [0, 1 / totalSlides],
//               [1.2, 1]
//             ),
//           }}
//           className="absolute inset-0 z-0"
//         >
//           <Image
//             src={headingSlide.image}
//             alt="Global Institutes"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Gradient overlay for depth – not dull */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
//         </motion.div>

  

//         <motion.div
//           style={{
//             y: useTransform(
//               scrollYProgress,
//               [0, 1 / totalSlides],
//               [50, -50]
//             ),
//           }}
//           className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
//         >
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-[#E5CA77] text-sm tracking-[0.3em] uppercase block mb-4"
//           >
//             {headingSlide.subtitle}
//           </motion.span>
//           <h1 className="text-5xl lg:text-7xl font-black mb-6">
//             {headingSlide.title}
//           </h1>
//           <p className="text-lg text-white max-w-2xl mx-auto">
//             {headingSlide.description}
//           </p>
//           <div className="w-24 h-1 bg-[#E5CA77] mx-auto mt-8" />
//         </motion.div>
//       </div>

//       {/* Institute Slides */}
//       {institutes.map((institute, i) => {
//         const slideIndex = i + 1;
//         const imageScale = useTransform(
//           scrollYProgress,
//           [slideIndex / totalSlides, (slideIndex + 1) / totalSlides],
//           [1.2, 1]
//         );
//         const textY = useTransform(
//           scrollYProgress,
//           [slideIndex / totalSlides, (slideIndex + 1) / totalSlides],
//           [50, -50]
//         );

//         return (
//           <div
//             key={institute.id}
//             className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/10"
//           >
//             <motion.div
//               style={{ scale: imageScale }}
//               className="absolute inset-0 z-0"
//             >
//               <Image
//                 src={institute.image}
//                 alt={institute.title}
//                 fill
//                 className="object-cover"
//               />
//               {/* Vibrant gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
//             </motion.div>

//             <motion.div
//               style={{ y: textY }}
//               className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full"
//             >
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="text-white space-y-6">
//                   <div className="relative">
//                     <span className="text-8xl lg:text-9xl font-black text-white/50">
//                       {institute.id}
//                     </span>
//                   </div>
//                   <span className="text-[#E5CA77] text-sm tracking-[0.3em] uppercase block">
//                     {institute.location}
//                   </span>
//                   <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
//                     {institute.title}
//                   </h2>
//                 </div>
//                 <div className="hidden lg:block" />
//               </div>
//             </motion.div>

//             {/* Optional: Keep the bottom gold line commented if not needed */}
//             {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E5CA77]" /> */}
//           </div>
//         );
//       })}
//     </section>
//   );
// }

//2nd


"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  useMotionValue,
} from "framer-motion";

const slides = [
  { id: "01", title: "Bath Spa University  – RAK", desc: "Architectural excellence with contemporary minimalism.", image: "/bathspaaa.jpg", bg: "#365F8C" },
  { id: "02", title: "Future Education University College", desc: "Modern educational infrastructure with clarity and strong design language.", image: "/feuc.webp", bg: "#B0722F" },
  { id: "03", title: "Future Training Center", desc: "Professional skill development spaces engineered for growth.", image: "/ftauh.jpg", bg: "#1F4E79" },
  { id: "04", title: "University of Creative Arts", desc: "Creative spatial design and expressive architecture.", image: "/1.jpeg", bg: "#9C4A32" },
  { id: "05", title: "Metaverse Age Training Institute", desc: "Digital innovation meets academic excellence in future-ready learning environments.", image: "/1.webp", bg: "#2E3F6B" },
  { id: "06", title: "Walsh College", desc: "Global campus design rooted in structured, scalable refinement.", image: "/unnamed.webp", bg: "#ff8a04" },
  { id: "07", title: "Future Training Services & Center", desc: "Professional skill development spaces engineered for structured growth.", image: "/ft.webp", bg: "#A8642F" },
  { id: "08", title: "Al Mustaqbal Al Bahir Training Center", desc: "Educational infrastructure designed with precision and clarity.", image: "/shaj.jpeg", bg: "#2F7070" },
];

const total = slides.length;

export default function ScrollColorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const background = useTransform(
    scrollYProgress,
    slides.map((_, i) => i / total),
    slides.map((s) => s.bg)
  );

  const rawTextY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rawImageY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const textY = useSpring(rawTextY, { stiffness: 80, damping: 20, mass: 0.5 });
  const imageY = useSpring(rawImageY, { stiffness: 80, damping: 20, mass: 0.5 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpr = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const mouseYSpr = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const textX = useTransform(mouseXSpr, [-120, 120], [-30, 30]);
  const imgX = useTransform(mouseXSpr, [-120, 120], [-40, 40]);
  const imgRotateY = useTransform(mouseYSpr, [-120, 120], [10, -10]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(total - 1, Math.floor(latest * total));
    setActiveIndex(index);
  });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const slide = slides[activeIndex];

  return (
    
    <motion.section

      ref={ref}
      style={{ background }}
      className="relative h-[800vh]"
    >
      
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center"
        style={{ perspective: 1000, paddingTop: "80px", paddingBottom: "24px" }}
        onMouseMove={handleMouse}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        {/* responsive padding: px-4 on mobile, px-10 on md, px-24 on lg */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 md:px-12 lg:px-24 w-full">

          {/* SECTION HEADING */}
          <motion.div
            key={`heading-${activeIndex}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 md:mb-10 flex items-center gap-3 md:gap-6"
          >
            <div className="h-px w-8 md:w-12 bg-white/40" />
            <p className="text-white/50 text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase font-light whitespace-nowrap">
              Our Projects
            </p>
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-white/30 text-[10px] md:text-xs tracking-[0.3em] whitespace-nowrap">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </motion.div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // mobile: single column stacked | md+: two columns side by side
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 lg:gap-32"
          >
            {/* LEFT — text */}
            <motion.div
              style={{ y: textY, x: textX }}
              // on mobile order-2 so image shows first at top
              className="text-white order-2 md:order-1"
            >
              <p className="text-xs md:text-sm tracking-[0.35em] opacity-60 mb-4 md:mb-8">
                • {slide.id} Project
              </p>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[1.05] font-semibold mb-4 md:mb-6 lg:mb-10">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg opacity-80 mb-6 md:mb-10 max-w-[500px]">
                {slide.desc}
              </p>
            </motion.div>

            {/* RIGHT — image */}
            {/* on mobile: order-1 so it appears above text, centered, smaller */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <motion.div
                style={{
                  y: imageY,
                  x: imgX,
                  rotateY: imgRotateY,
                  transformStyle: "preserve-3d",
                }}
                // width/height responsive via className
                className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-none"
              >
                {/* wrapper that sets actual dimensions responsively */}
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "calc(100% * 480/460)" }}
                >
                  {/* inner absolute fill */}
                  <div className="absolute inset-0">

                    {/* Decorative border frame behind */}
                    <div
                      className="absolute rounded-[14px] md:rounded-[18px] border border-white/20"
                      style={{ inset: 0, transform: "translate(10px, 10px)" }}
                    />

                    {/* Decorative dot grid top-left — hide on very small screens */}
                    <div
                      className="absolute top-[-14px] left-[-14px] z-10 hidden sm:block"
                      style={{
                        width: 60,
                        height: 60,
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
                        backgroundSize: "10px 10px",
                      }}
                    />

                    {/* Main rectangle image */}
                    <div className="absolute inset-0 rounded-[14px] md:rounded-[18px] overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Decorative accent line — right edge, hide on mobile */}
                    <div
                      className="absolute right-[-16px] top-[20%] bottom-[20%] w-[3px] rounded-full hidden md:block"
                      style={{ background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)` }}
                    />

                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}