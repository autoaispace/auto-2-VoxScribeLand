"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/**
 * Navigation component for the landing page
 * Includes logo, navigation links, and CTA button
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[rgba(255,255,255,0.9)] backdrop-blur-[8px] border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="VoxScribe Logo"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <span className="text-2xl font-semibold text-[var(--primary)]">
                VoxScribe
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors"
            >
              Core Features
            </a>
            <a
              href="#scenarios"
              className="text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors"
            >
              Pricing
            </a>
            <a href="#cta" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#features"
              className="block text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Core Features
            </a>
            <a
              href="#scenarios"
              className="block text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="block text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#cta"
              className="block btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

