// "use client";

// import { useMemo, useState, useEffect } from "react";
// import { motion } from "framer-motion";

// type Program = {
//   title: string;
//   duration?: string;
//   credits?: number;
// };

// type ProgramsTabsProps = {
//   institute: any;
// };

// export default function ProgramsTabs({ institute }: ProgramsTabsProps) {
//   const rawPrograms = institute?.programs || {};

//   const categoryMap: Record<string, string> = {
//     undergraduate: "Undergraduate",
//     Postgraduate: "Postgraduate",
//     foundation: "Foundation",
//     DoctoralPrograms: "Doctoral Programs",
//     PHDPrograms: "PhD Programs",
    
//   };

//   const categories = useMemo(() => {
//     return Object.entries(rawPrograms)
//       .filter(([_, value]) => Array.isArray(value) && value.length > 0)
//       .map(([key, value]) => ({
//         key,
//         label: categoryMap[key] || key,
//         programs: value as Program[],
//       }));
//   }, [rawPrograms]);

//   const [active, setActive] = useState("");

//   useEffect(() => {
//     if (categories.length > 0) {
//       setActive(categories[0].key);
//     }
//   }, [categories]);

//   const activeCategory = categories.find((cat) => cat.key === active);

//   return (
//     <main className="w-full bg-white">
//       {/* ================= HERO ================= */}
//       <section className="relative w-full h-[340px] md:h-[420px] bg-[#1E3A8A] text-white flex items-center px-6 md:px-16">
//         <div className="max-w-4xl">
//           <p className="uppercase tracking-[0.4em] text-xs text-amber-400 mb-4">
//             Academic Excellence
//           </p>

//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
//             Academic Programmes {institute?.title}  Offer
//           </h1>

//           <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl">
//             Explore our globally aligned programmes designed to prepare
//             students for leadership, innovation and professional success.
//           </p>
//         </div>
//       </section>

//       {/* ================= PROGRAM SECTION ================= */}
//       <section className="py-24 md:py-32 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-16 items-start">
//           {/* ================= LEFT CATEGORY ================= */}
//           <div className="space-y-4">
//             {categories.length === 0 ? (
//               <div className="bg-white rounded-2xl p-6 shadow-sm text-gray-500">
//                 No programme categories available.
//               </div>
//             ) : (
//               categories.map((category) => {
//                 const isActive = active === category.key;

//                 return (
//                   <motion.div
//                     key={category.key}
//                     onClick={() => setActive(category.key)}
//                     whileHover={{ scale: 1.02 }}
//                     className={`cursor-pointer rounded-2xl transition-all duration-300
//                       ${
//                         isActive
//                           ? "bg-gradient-to-r from-[#1E3A8A] to-[#1D4ED8] text-white shadow-lg"
//                           : "bg-white text-[#1E3A8A] hover:bg-[#EEF2FF] shadow-sm"
//                       }`}
//                   >
//                     <div className="p-6">
//                       <p className="uppercase text-[10px] tracking-widest opacity-70">
//                         Programme Type
//                       </p>

//                       <h3 className="text-lg font-semibold mt-2">
//                         {category.label}
//                       </h3>
//                     </div>
//                   </motion.div>
//                 );
//               })
//             )}
//           </div>

//           {/* ================= RIGHT CONTENT ================= */}
//           <div>
//             <div className="rounded-3xl p-10 bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF] text-white mb-12 shadow-[0_20px_60px_rgba(30,58,138,0.25)]">
//               <p className="uppercase text-xs tracking-[0.3em] opacity-70 mb-3">
//                 Selected Category
//               </p>

//               <h2 className="text-3xl md:text-4xl font-bold">
//                 {activeCategory?.label || "Programmes"}
//               </h2>
//             </div>

//             <div className="bg-white rounded-3xl overflow-hidden shadow-lg divide-y divide-gray-200">
//               {!activeCategory || activeCategory.programs.length === 0 ? (
//                 <div className="px-10 py-12 text-center text-gray-500">
//                   No programmes available.
//                 </div>
//               ) : (
//                 activeCategory.programs.map((program, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 8 }}
//                     className="group px-10 py-7 flex items-center justify-between transition-all duration-300 hover:bg-[#F8FAFC]"
//                   >
//                     <div>
//                       <h3 className="text-lg font-semibold text-[#1E3A8A]">
//                         {program.title}
//                       </h3>

//                       {program.duration && (
//                         <p className="text-sm text-gray-500 mt-1">
//                           Duration: {program.duration}
//                         </p>
//                       )}
//                     </div>

//                     <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition">
//                       →
//                     </span>
                
//                   </motion.div>
//                 ))
                
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Program = {
  title: string;
  duration?: string;
  credits?: number;
  level?: string;
  badge?: string;
  institute?: string;                                          
};    

type CategoryItem = {
  key: string;
  label: string;
  isShortCourse: boolean;
  courses: string[];
  programs: Program[];
};

type ProgramsTabsProps = {
  institute: any;
};

export default function ProgramsTabs({ institute }: ProgramsTabsProps) {
  const rawPrograms = institute?.programs || {};

  // IMPORTANT:
  // Agar shortCourses programs ke andar hai, ye bhi handle karega.
  // Agar shortCourses programs ke bahar hai, wo bhi handle karega.
  const rawShortCourses =
    institute?.shortCourses || institute?.programs?.shortCourses || [];

  // const categoryMap: Record<string, string> = {
  //   undergraduate: "Undergraduate",
  //   Postgraduate: "Postgraduate",
  //   foundation: "Foundation",
  //   certificates: "Certificates",
  //   diplomas: "Diplomas",
  //   Diplomas: "Diplomas",
  //   DoctoralPrograms: "Doctoral Programs",
  //   PHDPrograms: "PhD Programs",
  // };

const categoryMap: Record<string, string> = {
  undergraduate: "Undergraduate",
  Postgraduate: "Postgraduate",

  foundation: "Foundation",
  certificates: "Certificates",
  diplomas: "Diplomas",

  bachelors: "Bachelor's",
  mastersMBA: "Masters / MBA",
  dba: "DBA",
  phd: "PhD",

  DoctoralPrograms: "Doctoral Programs",
  PHDPrograms: "PhD Programs",
};



  const categories = useMemo<CategoryItem[]>(() => {
    const programmeCategories = Object.entries(rawPrograms)
      .filter(([key, value]) => {
        return (
          key !== "shortCourses" &&
          Array.isArray(value) &&
          value.length > 0
        );
      })
      .map(([key, value]) => ({
        key,
        label: categoryMap[key] || key,
        isShortCourse: false,
        courses: [],
        programs: value as Program[],
      }));

    const shortCourseCategories = Array.isArray(rawShortCourses)
      ? rawShortCourses.map((category: any) => ({
          key: `short-${category.title}`,
          label: category.title,
          isShortCourse: true,
          courses: category.courses || [],
          programs: [],
        }))
      : [];

    return [...programmeCategories, ...shortCourseCategories];
  }, [rawPrograms, rawShortCourses]);

  const [active, setActive] = useState("");

useEffect(() => {
  if (categories.length > 0 && !active) {
    setActive(categories[0].key);
  }
}, [categories, active]);

  const activeCategory = categories.find((cat) => cat.key === active);

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[340px] md:h-[420px] bg-[#1E3A8A] text-white flex items-center px-6 md:px-16">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-xs text-amber-400 mb-4">
            Academic Excellence
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Academic Programmes {institute?.title} Offer
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl">
            Explore our globally aligned programmes and short courses designed
            to prepare students for leadership, innovation and professional
            success.
          </p>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          {/* LEFT CATEGORY */}
          <div className="space-y-4">
            {categories.length === 0 ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm text-gray-500">
                No programme categories available.
              </div>
            ) : (
              categories.map((category) => {
                const isActive = active === category.key;

                return (
                  <motion.div
                    key={category.key}
                    onClick={() => setActive(category.key)}
                    whileHover={{ scale: 1.02 }}
                    className={`cursor-pointer rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#1E3A8A] to-[#1D4ED8] text-white shadow-lg"
                        : "bg-white text-[#1E3A8A] hover:bg-[#EEF2FF] shadow-sm"
                    }`}
                  >
                    <div className="p-6">
                      <p className="uppercase text-[10px] tracking-widest opacity-70">
                        {category.isShortCourse
                          ? "Short Course"
                          : "Programme Type"}
                      </p>

                      <h3 className="text-lg font-semibold mt-2">
                        {category.label}
                      </h3>

                    </div>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="rounded-3xl p-10 bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF] text-white mb-12 shadow-[0_20px_60px_rgba(30,58,138,0.25)]">
              <p className="uppercase text-xs tracking-[0.3em] opacity-70 mb-3">
                Selected Category
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                {activeCategory?.label || "Programmes"}
              </h2>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              {!activeCategory ? (
                <div className="px-10 py-12 text-center text-gray-500">
                  No programmes available.
                </div>
              ) : activeCategory.isShortCourse ? (
                activeCategory.courses.length === 0 ? (
                  <div className="px-10 py-12 text-center text-gray-500">
                    No short courses available.
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {activeCategory.courses.map((course, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -4 }}
                          className="rounded-2xl border border-gray-100 bg-[#F8FAFC] px-5 py-4 text-sm font-semibold text-[#1E3A8A] transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                          {course}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              ) : activeCategory.programs.length === 0 ? (
                <div className="px-10 py-12 text-center text-gray-500">
                  No programmes available.
                </div>
              ) : (
           <div className="divide-y divide-gray-200">
  {activeCategory.programs.map((program, index) => (
    <motion.div
      key={index}
      whileHover={{ x: 8 }}
      className="group px-10 py-7 flex items-center justify-between transition-all duration-300 hover:bg-[#F8FAFC]"
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            {program.title}
          </h3>

          {program.badge && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
              {program.badge}
            </span>
          )}
        </div>

        {program.institute && (
          <p className="text-sm font-semibold text-amber-600 mt-1">
            {program.institute}
          </p>
        )}

        {program.level && (
          <p className="text-sm text-gray-500 mt-1">
            {program.level}
          </p>
        )}

        {program.duration && (
          <p className="text-sm text-gray-500 mt-1">
            Duration: {program.duration}
          </p>
        )}
      </div>

      <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition">
        →
      </span>
    </motion.div>
  ))}
</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}