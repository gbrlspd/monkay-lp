"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Rocket, Handshake } from "lucide-react";
import { PROCESS } from "@/lib/constants";

const stepIcons = [Search, Pencil, Rocket, Handshake];

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="px-6 py-24 lg:px-8"
      style={{ background: "#0a0a0a" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p
            className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#6366f1]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {PROCESS.label}
          </p>
          <h2
            className="tracking-tight text-[#f5f5f5]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,42px)",
            }}
          >
            {PROCESS.title}
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {/* Horizontal connector (desktop) — positioned below icons at top-[52px] */}
          <div
            aria-hidden="true"
            className="absolute hidden h-px md:block"
            style={{
              top: "52px",
              left: "0",
              right: "0",
              background: "rgba(255,255,255,0.07)",
            }}
          />

          {PROCESS.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.number} className="relative flex flex-col">
                {/* Vertical connector (mobile) */}
                {i < PROCESS.steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-5 top-[68px] h-8 w-px bg-white/[0.07] md:hidden"
                  />
                )}

                {/* Icon + decorative number stacked */}
                <div className="relative mb-5 h-[52px]">
                  {/* Decorative large number — sits behind, at top, above connector */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 right-0 select-none leading-none text-white/[0.07]"
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: "52px",
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Icon box — positioned in front of number, centered vertically */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#161616]">
                    <Icon size={15} className="text-[#6366f1]" strokeWidth={1.5} />
                  </div>
                </div>

                <h3
                  className="mb-2 text-[15px] text-[#f5f5f5]"
                  style={{ fontFamily: "var(--font-geist)", fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.65] text-[#a3a3a3]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
