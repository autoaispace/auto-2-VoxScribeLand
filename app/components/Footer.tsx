import Link from "next/link";
import Image from "next/image";

/**
 * Footer component
 * Includes legal links, contact info, and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Security", href: "#" },
    ],
    company: [
      { label: "Contact Us", href: "#" },
      { label: "Product Updates", href: "#" },
      { label: "Community", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/icon.png"
                alt="VoxScribe Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h3 className="text-xl font-semibold text-[var(--primary)]">
                VoxScribe
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Transform your voice into structured, readable, and reusable
              high-quality text content with AI-powered technology.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} VoxScribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

