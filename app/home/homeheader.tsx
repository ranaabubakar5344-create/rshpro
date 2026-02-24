"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
//   { name: "Home", href: "/" },
  { name: "Campuses", href: "/#campuses" },

  { name: "Pages", href: "/pages" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optional: change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-6 left-0 right-0 z-50 mx-4 sm:mx-6 lg:mx-8 transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${
          scrolled ? "shadow-2xl" : ""
        }`}
        style={{
          boxShadow: "0 10px 40px -10px rgba(229, 202, 119, 0.2)",
        }}
      >
        {/* Subtle gold gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5CA77] to-transparent rounded-b-2xl" />

        <div className="relative flex items-center justify-between h-16 px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/rsh_logo.png"
              alt="spaciaz logo"
              width={100}
              height={36}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-gray-700 hover:text-[#E5CA77] transition-colors uppercase tracking-wider font-medium group"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#E5CA77] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-sm text-gray-600 group">
              <span className="text-gray-400">Call Us: </span>
              <a
                href="tel:+08412345688"
                className="hover:text-[#E5CA77] transition-colors relative"
              >
                +(084) 123 - 456 88
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#E5CA77] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-[#E5CA77] hover:to-[#d4b85f] hover:text-black transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#E5CA77]/30 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-[#E5CA77] focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-[#E5CA77] transition-colors py-2 uppercase tracking-wider font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-gray-600 text-sm mb-3 group">
                    <span className="text-gray-400">Call Us: </span>
                    <a
                      href="tel:+08412345688"
                      className="hover:text-[#E5CA77] transition-colors"
                    >
                      +(084) 123 - 456 88
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-[#E5CA77] hover:to-[#d4b85f] hover:text-black transition-all duration-300 text-sm font-medium shadow-md"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}