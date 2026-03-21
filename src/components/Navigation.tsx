"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo-nav.png"
            alt="ddstudio"
            width={160}
            height={32}
            style={{ height: "32px", width: "auto" }}
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs text-muted border border-border rounded-full px-3 py-1 hover:text-foreground hover:border-muted/50 transition-colors duration-200"
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs text-muted border border-border rounded-full px-3 py-1 hover:text-foreground hover:border-muted/50 transition-colors duration-200"
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" />
              ) : (
                <>
                  <path d="M2 5H18" />
                  <path d="M2 10H18" />
                  <path d="M2 15H18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
