"use client";

import { motion } from "framer-motion";
import { PROBLEM } from "@/lib/constants";

export function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-8"
      style={{ background: "#0c0c0c" }}
    >
      {/* Subtle radial vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(99,102,241,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[#525252]"
          >
            — o contexto
          </p>

          <div className="mb-8">
            {PROBLEM.headline.map((line, i) => (
              <h2
                key={i}
                className="block leading-[1.08] tracking-[-0.01em] text-[#f5f5f5]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px,5vw,56px)",
                }}
              >
                {line}
              </h2>
            ))}
          </div>

          <p
            className="text-[17px] leading-[1.7] text-[#a3a3a3]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {PROBLEM.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
