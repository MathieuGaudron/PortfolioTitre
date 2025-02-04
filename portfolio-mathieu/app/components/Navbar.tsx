"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-white tracking-wider transition-transform duration-500 hover:scale-110"
        >
          Mathieu<span className="text-purple-500">&apos;Dev</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {["Accueil", "Projets", "À propos", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              className="text-gray-300 hover:text-purple-500 transition-transform duration-500 hover:scale-105 text-lg font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Menu Mobile - Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-70 backdrop-blur-lg text-center py-4 space-y-4 transition-all duration-300">
          {["Accueil", "Projets", "À propos", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-purple-500 py-2 text-lg font-medium"
              onClick={() => setIsOpen(false)} // Ferme le menu après clic
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
