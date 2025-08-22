import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-violet-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="UniHelp Logo"
            className="h-11 sm:h-14 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-violet-600 transition text-xl font-semibold work-sans"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-violet-600 transition text-xl font-semibold work-sans"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-violet-600 transition text-xl font-semibold work-sans"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-violet-600 transition text-xl font-semibold work-sans"
          >
            Contact
          </a>
          <a
            href="#join-waitlist"
            className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white px-5 py-2 rounded-xl shadow hover:scale-105 transition-transform work-sans"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-violet-700 focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden flex flex-col items-center border-y-2 border-violet-100 px-6 pt-2 pb-4 space-y-4 animate-fadeUpIn">
          <a
            href="#home"
            className="block text-gray-700 hover:text-violet-600 text-center w-full text-lg font-semibold work-sans"
            onClick={() => setOpen(!open)}
          >
            Home
          </a>
          <a
            href="#features"
            className="block text-gray-700 hover:text-violet-600 text-center w-full text-lg font-semibold work-sans"
            onClick={() => setOpen(!open)}
          >
            Features
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-violet-600 text-center w-full text-lg font-semibold work-sans"
            onClick={() => setOpen(!open)}
          >
            About
          </a>
          <a
            href="#join-waitlist"
            className="gradient-purple-blue text-white px-5 py-2 rounded-xl shadow hover:scale-105 transition-transform work-sans"
            onClick={() => setOpen(!open)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
