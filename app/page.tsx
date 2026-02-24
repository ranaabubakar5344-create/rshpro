// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">

//       {/* Background Image */}
//       <Image
//         src="/hero-building.jpg" // <-- apni image yahan daal dena
//         alt="Modern Building"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* ================= NAVBAR ================= */}
//       <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
//         <div className="bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg">

//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 bg-lime-400 rounded-sm" />
//             <span className="text-2xl font-bold text-gray-900">
//               spaciaz
//             </span>
//           </div>

//           {/* Menu */}
//           <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//             <Link href="#" className="hover:text-black">Demos</Link>
//             <Link href="#" className="hover:text-black">Pages</Link>
//             <Link href="#" className="hover:text-black">Services</Link>
//             <Link href="#" className="hover:text-black">Projects</Link>
//             <Link href="#" className="hover:text-black">News</Link>
//             <Link href="#" className="hover:text-black">Contact</Link>
//           </div>

//           {/* Right Section */}
//           <div className="hidden md:flex items-center gap-6">
//             <span className="text-gray-600 text-sm">
//               Call Us: <span className="font-semibold">+(084) 123 - 456 88</span>
//             </span>

//             <button className="bg-lime-400 hover:bg-lime-500 transition px-6 py-3 rounded-full font-semibold text-black">
//               Get In Touch
//             </button>
//           </div>

//           {/* Mobile Button */}
//           <button className="md:hidden bg-lime-400 px-5 py-2 rounded-full font-semibold">
//             Menu
//           </button>
//         </div>
//       </div>

//       {/* ================= HERO CONTENT ================= */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">

//         <div className="max-w-4xl text-white">

//           <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
//             Shaping future <br />
//             through excellence
//           </h1>

//           <p className="mt-6 text-lg sm:text-xl text-white/80">
//             We are a top 25 builder and developer fully invested in our customers’
//             success and improving the communities we serve.
//           </p>

//         </div>
//       </div>

//     </section>
//   );
// }


import IntroSection from "./components/IntroSection";


export default function Home() {
  return (
    <>
      <IntroSection />
   
    </>
  );
}
