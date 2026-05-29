"use client";

import { motion } from "framer-motion";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { HERO } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Floating glass shape — inspired by 21st.dev "Modern Hero section"
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.06]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.0 },
      }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px] border border-white/[0.10]",
            "shadow-[0_4px_24px_0_rgba(255,255,255,0.04)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// Mini browser window with dashboard preview
function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-[480px]"
    >
      {/* Glow behind window */}
      <div
        className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.25), transparent 70%)" }}
      />

      {/* Browser chrome */}
      <div className="relative rounded-2xl border border-white/[0.10] bg-[#0e0e0e] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
        {/* Titlebar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#121212]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
          <div className="ml-3 flex-1 rounded-md bg-white/[0.04] border border-white/[0.06] px-3 py-1">
            <span className="font-mono text-[10px] text-[#525252]">app.monkay.io/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Receita", value: "↑ 24%", color: "text-emerald-400" },
              { label: "Pedidos", value: "1.2k", color: "text-[#f5f5f5]" },
              { label: "SLA", value: "98%", color: "text-[#818cf8]" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
              >
                <p className="text-[9px] text-[#525252] mb-1">{kpi.label}</p>
                <p className={`text-[13px] font-mono font-semibold ${kpi.color}`}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text-[9px] text-[#525252] mb-2 uppercase tracking-wider">Faturamento mensal</p>
            <div className="flex items-end gap-1 h-12">
              {[30, 52, 41, 68, 55, 78, 62, 85, 71, 90, 76, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    background: i === 11
                      ? "#6366f1"
                      : `rgba(99,102,241,${0.15 + (h / 100) * 0.25})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Activity list */}
          <div className="space-y-1.5">
            {[
              { label: "Pedido #4821", status: "Faturado", dot: "#34d399" },
              { label: "Relatório Mensal", status: "Gerado", dot: "#818cf8" },
              { label: "Estoque Atualizado", status: "Sync", dot: "#22d3ee" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-md bg-white/[0.03] px-3 py-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: row.dot }} />
                  <span className="text-[10px] text-[#a3a3a3]">{row.label}</span>
                </div>
                <span className="text-[9px] text-[#525252]">{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export function HeroSection() {
  return (
    <AnimatedGridBackground className="min-h-screen w-full">
      {/* Floating glass shapes */}
      <ElegantShape
        delay={0.2}
        width={480}
        height={100}
        rotate={14}
        gradient="from-indigo-500/[0.10]"
        className="left-[-6%] top-[18%]"
      />
      <ElegantShape
        delay={0.4}
        width={360}
        height={80}
        rotate={-12}
        gradient="from-violet-500/[0.08]"
        className="right-[-2%] top-[65%]"
      />
      <ElegantShape
        delay={0.3}
        width={220}
        height={55}
        rotate={-20}
        gradient="from-cyan-500/[0.08]"
        className="left-[18%] top-[8%]"
      />
      <ElegantShape
        delay={0.5}
        width={160}
        height={42}
        rotate={18}
        gradient="from-indigo-400/[0.10]"
        className="right-[12%] top-[10%]"
      />

      <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 pb-16 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">

            {/* Left column — text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                  <span
                    className="text-[11px] text-[#a3a3a3]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {HERO.badge}
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants} className="mb-2">
                <h1
                  className="text-[clamp(52px,7vw,88px)] leading-[1.0] tracking-[-0.01em] text-[#f5f5f5]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {HERO.headline1.map((word, i) => (
                    <span key={i}>
                      {word === HERO.headlineHighlight ? (
                        <TextShimmer>{word}</TextShimmer>
                      ) : (
                        word
                      )}
                      {i < HERO.headline1.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <h2
                  className="text-[clamp(28px,3.8vw,52px)] leading-[1.1] tracking-[-0.01em] text-[#a3a3a3]"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  {HERO.headline2.join(" ")}
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="mb-10 text-[16px] leading-relaxed text-[#a3a3a3]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {HERO.subheadline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-3 mb-12"
              >
                <a
                  href="#solucoes"
                  className="rounded-lg bg-[#6366f1] px-6 py-3 text-[13.5px] font-medium text-white transition-all duration-200 hover:bg-[#818cf8] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {HERO.ctaPrimary}
                </a>
                <a
                  href="#contato"
                  className="rounded-lg border border-white/[0.15] px-6 py-3 text-[13.5px] font-medium text-[#a3a3a3] transition-all duration-200 hover:border-white/[0.30] hover:bg-white/[0.04] hover:text-[#f5f5f5]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {HERO.ctaSecondary}
                </a>
              </motion.div>

              {/* Trust bar — inline, no separator */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-5"
              >
                <span
                  className="text-[11px] text-[#525252]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {HERO.trustLabel}
                </span>
                {HERO.trustStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-1.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5 opacity-20 transition-opacity duration-200 group-hover:opacity-70"
                    />
                    <span
                      className="text-[11px] text-[#525252] transition-colors duration-200 group-hover:text-[#a3a3a3]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column — browser mockup */}
            <div className="hidden lg:flex items-center justify-end">
              <BrowserMockup />
            </div>

          </div>
        </div>
      </div>
    </AnimatedGridBackground>
  );
}
