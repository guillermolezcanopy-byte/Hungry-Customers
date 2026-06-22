"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#FF3333] text-2xl">🍽</span>
          <span className="font-black text-lg tracking-tight">
            HUNGRY<span className="text-[#FF3333]">CUSTOMERS</span>
          </span>
        </div>
        <a
          href="/agendar"
          className="hidden md:block bg-[#FF3333] hover:bg-[#CC0000] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          AGENDAR LLAMADA GRATIS
        </a>
      </div>
    </nav>
  );
}
