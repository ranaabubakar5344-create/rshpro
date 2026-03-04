"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import InstituteSidebar from "./InstituteSidebar";
import HeroSection from "./HeroContent";
import AboutSection from "./AboutSection";
import ProgramsTabs from "./ProgramsTabs";
import LeadershipSplitSection from "@/app/home/Team";
import BoardDir from "./BoardDir";

type InstituteLayoutProps = {
  institute: any;
};

export default function InstituteLayout({ institute }: InstituteLayoutProps) {
  const [active, setActive] = useState("hero");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Mobile Burger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2 text-white"
      >
        <Menu size={30} />
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
        {active === "team" && institute?.team && (
          <LeadershipSplitSection team={institute.team} />
        )}
      </main>
    </div>
  );
}