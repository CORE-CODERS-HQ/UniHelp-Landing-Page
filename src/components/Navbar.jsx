import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import uniHelpLogo from "../assets/logo.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-violet-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.webp" alt="UniHelp Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-violet-600 transition"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-violet-600 transition"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-violet-600 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-violet-600 transition"
          >
            Contact
          </a>
          <a
            href="#join-waitlist"
            className="gradient-purple-blue text-white px-5 py-2 rounded-xl shadow hover:scale-105 transition-transform"
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-violet-100 px-6 py-4 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-violet-600">
            Home
          </a>
          <a
            href="#features"
            className="block text-gray-700 hover:text-violet-600"
          >
            Features
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-violet-600"
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-violet-600"
          >
            Contact
          </a>
          <a
            href="#join-waitlist"
            className="w-full gradient-purple-blue text-white px-5 py-2 rounded-xl shadow"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
