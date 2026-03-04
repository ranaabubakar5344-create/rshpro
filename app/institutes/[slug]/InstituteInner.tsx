"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import InstituteSidebar from "./InstituteSidebar";
import HeroSection from "./HeroContent";
import AboutSection from "./AboutSection";
import ProgramsTabs from "./ProgramsTabs";
import LeadershipSplitSection from "@/app/home/Team";
import BoardDir from "./BoardDir";
import ContactPage from "./Contact";

type InstituteLayoutProps = {
  institute: any;
};

export default function InstituteLayout({ institute }: InstituteLayoutProps) {

  const [active, setActive] = useState("hero");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="min-h-screen bg-white relative">

      {/* ✅ MOBILE HAMBURGER BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="
          lg:hidden
          fixed
          top-5
          left-5
          z-[60]
          w-12
          h-12
          flex
          items-center
          justify-center
          rounded-full
          text-white
          shadow-lg
        "
      >
        <Menu size={22} />
      </button>

      <InstituteSidebar
        active={active}
        setActive={setActive}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className={`
          transition-all duration-300
          ${collapsed ? "lg:ml-[95px]" : "lg:ml-[270px]"}
        `}
      >
        {active === "hero" && <HeroSection institute={institute} />}
        {active === "about" && <AboutSection institute={institute} />}
        {active === "programs" && <ProgramsTabs institute={institute} />}
        {active === "board" && <BoardDir />}
        {active === "contact" && <ContactPage />}
        {active === "team" && institute?.team && (
          <LeadershipSplitSection team={institute.team} />
        )}
      </main>

    </div>
  );
}