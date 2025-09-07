"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold">PlacementHub</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Services</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}