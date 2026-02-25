"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterPremium() {
  return (
    <footer className="bg-[#175090] py-28 relative overflow-hidden">
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* CENTERED WRAPPER - ~97% width */}
      <div className="max-w-[97%] mx-auto px-6 relative z-10">
        {/* ROUNDED WHITE CARD */}
        <div className="bg-white/95 backdrop-blur-sm rounded-[64px] px-16 py-16 shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* LEFT SECTION: Logo & paragraph */}
            <div className="space-y-6">
              <Image
                src="/rsh_logo.png"
                alt="RSH Group"
                width={180}
                height={70}
                className="object-contain "
              />
              <p className="text-gray-700 leading-relaxed text-lg max-w-md font-light">
                From classroom vision to corner‑office reality,
                we architect the roadmap that transforms dreams
                into thriving careers.
              </p>
            </div>

            {/* MIDDLE LINK COLUMNS */}
            <div className="grid grid-cols-2 gap-12 border-l border-r border-gray-200 px-12">
              {/* Column 1: About Us group */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-xl tracking-tight">About Us</h4>
                <div className="space-y-4">
                  <FooterLink>Why Choose Us</FooterLink>
                  <FooterLink>Our Team</FooterLink>
                  <FooterLink>Solutions</FooterLink>
                  <FooterLink>Partners</FooterLink>
                  <FooterLink>Core Values</FooterLink>
                </div>
                <div className="mt-8">
                  {/* <FooterLink
                    href="#"
                    className="group font-semibold text-lime-600 hover:text-lime-700 inline-flex items-center gap-2"
                  >
                    Download Prospectus
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </FooterLink> */}
                </div>
              </div>

              {/* Column 2: Our Institutions */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-xl tracking-tight">Our Institutions</h4>
                <div className="space-y-4">
                  <FooterLink>Business School</FooterLink>
                  <FooterLink>Law Academy</FooterLink>
                  <FooterLink>Medical Institute</FooterLink>
                  <FooterLink>Engineering College</FooterLink>
                  <FooterLink>Executive Education</FooterLink>
                </div>
              </div>
            </div>

            {/* RIGHT CONTACT SECTION */}
            <div className="flex flex-col justify-between h-full space-y-10">
              <div className="space-y-6">
                <h3 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  +971503622440
                </h3>
                <div className="relative inline-block group">
                  <h4 className="text-4xl font-medium text-gray-900 pb-1 transition-all duration-300 group-hover:text-lime-600">
                    info@rshgroupedu.com
                  </h4>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
              </div>

              {/* Social links with icon placeholders */}
              <div className="flex items-center gap-6">
                <SocialIcon href="#" label="Facebook" />
                <SocialIcon href="#" label="Instagram" />
                <SocialIcon href="#" label="Youtube" />
                <SocialIcon href="#" label="Twitter" />
              </div>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT LINE */}
          <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} rshgroupedu. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Enhanced footer link with hover animation
function FooterLink({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`relative text-gray-700 hover:text-gray-900 transition-colors duration-200 text-[17px] group inline-block ${className}`}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Social icon placeholder – replace with actual icons from lucide-react or similar
function SocialIcon({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-lime-500 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {/* Simple SVG placeholder – replace with your icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {label === "Facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
        {label === "Instagram" && (
          <>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </>
        )}
        {label === "Youtube" && (
          <>
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </>
        )}
        {label === "Twitter" && (
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        )}
      </svg>
    </Link>
  );
}