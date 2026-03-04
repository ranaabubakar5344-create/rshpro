"use client";

import Image from "next/image";
import {
  Home,
  Info,
  GraduationCap,
  Users,
  Phone,
Crown,
  Menu,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import Link from "next/link";

export default function InstituteSidebar({
  active,
  setActive,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: {
  active: string;
  setActive: (val: string) => void;
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
}) {
  return (
    <>
      {/* Overlay (Mobile Only) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen z-50
          bg-gradient-to-b from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF]
          text-white transition-all duration-300
    flex flex-col  
          ${collapsed ? "lg:w-[95px]" : "lg:w-[270px]"}
          w-[260px]

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Top Section */}
        <div className={`${collapsed ? "pt-6" : "px-5 pt-6"}`}>

          {/* Header */}
          {collapsed ? (
            <div className="flex flex-col items-center gap-6">
              <div className="bg-white rounded-2xl shadow-xl w-[ 70px] h-[70px] flex items-center justify-center">
                <div className="relative w-[75px] h-[70px]">
                  <Link href="/">
                    <Image
                      src="/rsh_logo.png"
                      alt="RSH Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>

              <button
                onClick={() => setCollapsed(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
              >
                <Menu size={22} />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-2xl shadow-xl w-[170px] h-[75px] flex items-center justify-center">
                <div className="relative w-[140px] h-[150px] mt-2 ml-2">
                  <Link href="/">
                    <Image
                      src="/rsh_logo.png"
                      alt="RSH Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>

              <button
                onClick={() => setCollapsed(true)}
                className="hidden lg:flex w-10 h-10 items-center justify-center rounded-lg hover:bg-white/10 transition"
              >
                <Menu size={32} />
              </button>
            </div>
          )}

          {/* Navigation */}
          <nav
            className={`${
              collapsed
                ? "mt-8 flex flex-col items-center gap-4"
                : "mt-10 space-y-4"
            }`}
          >
            <NavItem
  icon={<Home size={collapsed ? 26 : 20} />}
  label="Home"
  id="hero"
  active={active}
  setActive={setActive}
  collapsed={collapsed}
  setMobileOpen={setMobileOpen}
/>
            <NavItem icon={<Info size={collapsed ? 26 : 18} />} label="About" id="about" active={active} setActive={setActive} collapsed={collapsed} setMobileOpen={setMobileOpen} />
<NavItem
  icon={<Crown size={collapsed ? 26 : 18} />}
  label="Board of Directors"
  id="board"
  active={active}
  setActive={setActive}
  collapsed={collapsed}
  setMobileOpen={setMobileOpen}
/>
            <NavItem icon={<GraduationCap size={collapsed ? 26 : 18} />} label="Programmes" id="programs" active={active} setActive={setActive} collapsed={collapsed} setMobileOpen={setMobileOpen} />



            <NavItem icon={<Users size={collapsed ? 26 : 18} />} label="Team" id="team" active={active} setActive={setActive} collapsed={collapsed} setMobileOpen={setMobileOpen} />

            <NavItem icon={<Phone size={collapsed ? 26 : 18} />} label="Contact" id="contact" active={active} setActive={setActive} collapsed={collapsed} setMobileOpen={setMobileOpen} />
          </nav>
        </div>

        {/* Social */}
    <div className={`mt-auto ${collapsed ? "pb-4" : "pb-8 px-5"}`}>
  {collapsed ? (
    <div className="flex flex-col items-center gap-4">
      <SocialIcon icon={<Facebook size={20} />} />
      <SocialIcon icon={<Instagram size={20} />} />
      <SocialIcon icon={<Linkedin size={20} />} />
    </div>
  ) : (
    <>
      <hr className="my-4 border-white/20" />
      <div className="text-center text-[11px] tracking-[0.25em] mb-6">
        FOLLOW US
      </div>
      <div className="flex justify-center gap-5">
        <SocialIcon icon={<Facebook size={26} />} />
        <SocialIcon icon={<Instagram size={26} />} />
        <SocialIcon icon={<Linkedin size={26} />} />
      </div>
    </>
  )}
</div>
      </aside>
    </>
  );
}

function NavItem({ 
  icon, 
  label, 
  id, 
  active, 
  setActive, 
  collapsed,
  setMobileOpen
}: any)
 {
  const isActive = active === id;

  return (
    <button
onClick={() => {
  setActive(id);
  if (setMobileOpen) {
    setMobileOpen(false);
  }
}}      className={`
        flex items-center
        ${collapsed ? "justify-center w-full py-3" : "gap-4 px-5 py-3"}
        rounded-xl transition-all duration-300
        ${isActive ? "bg-white/10 text-[#F5C04A]" : "hover:bg-white/10"}
      `}
    >
      {icon}
      {!collapsed && <span className="font-semibold text-[14px]">{label}</span>}
    </button>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
      {icon}
    </button>
  );
}