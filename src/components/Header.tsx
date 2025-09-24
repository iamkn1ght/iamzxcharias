// src/components/Header.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-secondary">
      <div className="flex justify-between items-center h-[64px] px-6 md:px-10">
        <Link href="/" className="text-2xl font-bold text-[#D8B577]">
          IAMZXCHARIAS
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-30"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6 text-accent-primary border-2 border-accent-primary rounded-full p-1 transition duration-300 hover:border-font hover:text-accent-secondary"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-[80px]">
          <ul className="flex items-center space-x-10 lg:space-x-[80px]">
            <li className="relative group py-6">
              <Link href="/" className="text-[#D8B577]">
                HOME
              </Link>
              <span className="absolute bottom-1 left-0 h-0.5 w-full bg-accent-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="relative group py-6">
              <Link href="/about" className="text-[#D8B577]">
                ABOUT
              </Link>
              <span className="absolute bottom-1 left-0 h-0.5 w-full bg-accent-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="relative group py-6">
              <Link href="/music" className="text-[#D8B577]">
                MUSIC
              </Link>
              <span className="absolute bottom-1 left-0 h-0.5 w-full bg-accent-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="relative group py-6">
              <Link href="/computer" className="text-[#D8B577]">
                COMPUTER
              </Link>
              <span className="absolute bottom-1 left-0 h-0.5 w-full bg-accent-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <Link
              href="/contact"
              className="text-accent-primary border-2 border-accent-primary hover:border-font hover:text-accent-secondary rounded-full px-4 py-2 transition duration-300"
            >
              GET IN TOUCH
            </Link>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto z-10"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`absolute top-0 left-0 right-0 bg-secondary transform transition-transform duration-300 ease-in-out md:hidden z-20 ${
          isMenuOpen ? "translate-y-0 visible" : "-translate-y-full invisible"
        }`}
      >
        <ul className="flex flex-col space-y-4 py-6 px-6">
          <li>
            <Link href="/" onClick={closeMenu} className="text-[#D8B577] block">
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-[#D8B577] block"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/music"
              onClick={closeMenu}
              className="text-[#D8B577] block"
            >
              MUSIC
            </Link>
          </li>
          <li>
            <Link
              href="/computer"
              onClick={closeMenu}
              className="text-[#D8B577] block"
            >
              COMPUTER
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-accent-primary border-2 border-accent-primary rounded-full px-4 py-2 block text-center mt-4"
            >
              GET IN TOUCH
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
