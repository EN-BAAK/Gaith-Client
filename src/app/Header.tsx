"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20)
        setIsScrolled(true);
      else
        setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { label: "الرئيسية", path: "/" },
    { label: "المتجر", path: "/shop" },
  ];

  return (
    <React.Fragment>
      <header
        className={`w-full transition-all bg-reversed duration-300 z-40 py-4 text-right m-0 shadow-md
          fixed top-0 left-0 right-0 backdrop-blur-md border-b border-background2/80 animate-fade-in
          `}
        dir="rtl"
      >

        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="md:block hidden" />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={`nav-link-${link.path}`}
                href={link.path}
                className={`text-sm font-heading font-medium transition-all relative py-1 cursor-pointer ${isActive(link.path)
                  ? "text-accent font-bold hover:text-accent/60"
                  : "text-muted hover:text-text"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-background2 rounded-xl transition-colors text-muted hover:text-text cursor-pointer"
              aria-label="تصفح القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>


          <div className="flex items-center gap-2">
            <Link href="/" className="brand flex items-center gap-2 cursor-pointer group">
              <span className="font-bold">الغيث للمنسوجات</span>
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-accent">غ</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex justify-start animate-fade-in" dir="rtl">
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/20 backdrop-blur-xs"
          />

          <div className="relative w-64 h-full bg-card border-l border-background2 p-6 space-y-6 shadow-2xl animate-slide-left z-10 flex flex-col justify-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-accent">غ</span>
              </div>
              <span className="font-bold">الغيث للمنسوجات</span>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-nav-${link.path}`}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-heading font-medium transition-all cursor-pointer ${isActive(link.path)
                    ? "bg-primary text-reversed shadow-xs"
                    : "text-muted hover:bg-background2 hover:text-text"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {isScrolled && <div className="h-[73px] w-full hidden md:block" />}
    </React.Fragment>
  );
};

export default Header;