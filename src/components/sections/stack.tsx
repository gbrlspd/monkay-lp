"use client";

import { motion } from "framer-motion";
import { STACK_CATEGORIES } from "@/lib/constants";
import { StackLogo } from "@/components/ui/stack-logo";

export function StackSection() {
  return (
    <section id="stack" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            className="tracking-tight text-[#f5f5f5]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,42px)",
            }}
          >
            A Gente Fala a Sua Língua
          </h2>
          <p
            className="mt-2 text-[15px] text-[#a3a3a3]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Stack moderna, processo sólido, infra de produção.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-7">
          {STACK_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: catIndex * 0.04 }}
            >
              <p
                className="mb-3 pl-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#525252]"
                style={{
                  fontFamily: "var(--font-inter)",
                  borderLeft: "2px solid rgba(99,102,241,0.35)",
                }}
              >
                {category.label}
              </p>
              <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {category.items.map((item) => (
                  <StackLogo key={item.name} name={item.name} slug={item.slug} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
