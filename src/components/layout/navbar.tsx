"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          backgroundColor: scrolled ? "rgba(8,8,8,0.80)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 group">
            <span
              className="text-[17px] font-semibold tracking-tight text-[#f5f5f5]"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              monkay
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#6366f1] group-hover:bg-[#818cf8] transition-colors duration-200"
              aria-hidden="true"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-[#a3a3a3] transition-colors duration-150 hover:text-[#f5f5f5]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contato"
              className="rounded-lg border border-[#6366f1]/40 px-4 py-2 text-[13px] font-medium text-[#f5f5f5] transition-all duration-200 hover:border-[#6366f1] hover:bg-[#6366f1]/10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Falar Conosco
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center rounded-md p-1.5 text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-150 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[#0d0d0d] border-l border-white/[0.06] px-6 py-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-10">
                <span
                  className="text-[16px] font-semibold text-[#f5f5f5]"
                  style={{ fontFamily: "var(--font-geist)" }}
                >
                  monkay
                  <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-[15px] text-[#a3a3a3] hover:bg-white/[0.04] hover:text-[#f5f5f5] transition-colors duration-150"
                    style={{ fontFamily: "var(--font-inter)" }}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="#contato"
                  className="block w-full rounded-lg border border-[#6366f1]/40 py-3 text-center text-[14px] font-medium text-[#f5f5f5] hover:bg-[#6366f1]/10 hover:border-[#6366f1] transition-all duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Falar Conosco
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

