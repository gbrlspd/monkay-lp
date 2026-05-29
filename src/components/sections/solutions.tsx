"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Brain, Code2, MessageSquare, Zap, Database } from "lucide-react";
import { SOLUTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = {
  systems: LayoutDashboard,
  ai: Brain,
  consulting: Code2,
};

const accentConfig = {
  indigo: {
    pill: "border-indigo-500/25 bg-indigo-950/50 text-indigo-300",
    iconHover: "hover:text-indigo-400",
    glow: "hover:shadow-[0_0_60px_rgba(99,102,241,0.08)]",
    border: "hover:border-indigo-500/20",
  },
  violet: {
    pill: "border-violet-500/25 bg-violet-950/50 text-violet-300",
    iconHover: "hover:text-violet-400",
    glow: "hover:shadow-[0_0_60px_rgba(139,92,246,0.08)]",
    border: "hover:border-violet-500/20",
  },
  cyan: {
    pill: "border-cyan-500/25 bg-cyan-950/50 text-cyan-300",
    iconHover: "hover:text-cyan-400",
    glow: "hover:shadow-[0_0_60px_rgba(34,211,238,0.08)]",
    border: "hover:border-cyan-500/20",
  },
};

// Card A visual: rich dashboard
function DashboardVisual() {
  return (
    <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-3 space-y-2.5">
      {/* KPI row */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Receita", value: "↑ 24%", color: "text-emerald-400" },
          { label: "Pedidos", value: "1.2k", color: "text-[#f5f5f5]" },
          { label: "SLA", value: "98%", color: "text-[#818cf8]" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-white/[0.05] bg-white/[0.03] px-2.5 py-2">
            <p className="text-[8px] text-[#525252] mb-1">{kpi.label}</p>
            <p className={`text-[12px] font-mono font-semibold ${kpi.color}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Chart bars */}
      <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2.5">
        <p className="text-[8px] text-[#525252] mb-1.5 uppercase tracking-wider">Faturamento</p>
        <div className="flex items-end gap-0.5 h-10">
          {[28, 45, 38, 62, 48, 70, 55, 80, 65, 88, 72, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 11 ? "#6366f1" : `rgba(99,102,241,${0.12 + (h / 100) * 0.25})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Activity rows */}
      <div className="space-y-1">
        {[
          { label: "Pedido #4821 Faturado", dot: "#34d399" },
          { label: "Relatório Mensal Gerado", dot: "#818cf8" },
          { label: "Estoque Sincronizado", dot: "#22d3ee" },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2 rounded-md bg-white/[0.03] px-2 py-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: row.dot }} />
            <span className="text-[9px] text-[#a3a3a3] truncate">{row.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Card B visual: automation pipeline
function AutomationVisual() {
  const nodes = [
    { icon: MessageSquare, label: "WhatsApp", color: "#34d399" },
    { icon: Zap, label: "Agente IA", color: "#818cf8", pulse: true },
    { icon: Database, label: "ERP", color: "#22d3ee" },
  ];

  return (
    <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-3">
      <p className="text-[8px] text-[#525252] mb-3 uppercase tracking-wider">Pipeline</p>
      <div className="flex items-center">
        {nodes.map((node, i) => (
          <div
            key={node.label}
            className={cn("flex items-center", i < nodes.length - 1 ? "flex-1" : "shrink-0")}
          >
            {/* Node */}
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <div
                className={cn(
                  "relative flex h-9 w-9 items-center justify-center rounded-xl border",
                  node.pulse
                    ? "border-violet-500/30 bg-violet-950/30"
                    : "border-white/[0.08] bg-white/[0.04]"
                )}
              >
                {node.pulse && (
                  <span className="absolute inset-0 rounded-xl border border-violet-400/30 animate-ping opacity-40" />
                )}
                <node.icon size={14} style={{ color: node.color }} />
              </div>
              <span className="text-[8px] text-[#525252] whitespace-nowrap">{node.label}</span>
            </div>

            {/* Connector — only between nodes */}
            {i < nodes.length - 1 && (
              <div className="flex flex-1 items-center px-1 pb-4">
                <div className="h-px flex-1 bg-white/[0.18]" />
                <span className="mx-0.5 text-[9px] text-white/25">›</span>
                <div className="h-px flex-1 bg-white/[0.08]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Card C visual: code snippet
function CodeVisual() {
  return (
    <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden">
      {/* Terminal titlebar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.05] bg-[#0d0d0d]">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/60" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/60" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/60" />
        <span className="ml-2 font-mono text-[8px] text-[#525252]">audit.ts</span>
      </div>
      <div className="px-3 py-2.5 font-mono text-[9px] leading-relaxed space-y-0.5">
        <p>
          <span className="text-[#525252]">{"// stack analysis"}</span>
        </p>
        <p>
          <span className="text-[#818cf8]">const </span>
          <span className="text-[#f5f5f5]">audit </span>
          <span className="text-[#22d3ee]">= await </span>
          <span className="text-[#a5b4fc]">analyzeStack</span>
          <span className="text-[#f5f5f5]">(repo);</span>
        </p>
        <p>
          <span className="text-[#818cf8]">const </span>
          <span className="text-[#f5f5f5]">risks </span>
          <span className="text-[#22d3ee]">=</span>
          <span className="text-[#f5f5f5]"> audit.</span>
          <span className="text-[#a5b4fc]">findings</span>
          <span className="text-[#f5f5f5]">;</span>
        </p>
        <p>
          <span className="text-[#22d3ee]">return </span>
          <span className="text-[#f5f5f5]">risks.</span>
          <span className="text-[#a5b4fc]">recommendations</span>
          <span className="text-[#f5f5f5]">;</span>
        </p>
      </div>
    </div>
  );
}

export function SolutionsSection() {
  return (
    <section id="solucoes" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p
            className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#6366f1]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {SOLUTIONS.label}
          </p>
          <h2
            className="tracking-tight text-[#f5f5f5]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,42px)",
            }}
          >
            Nossas Soluções
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {SOLUTIONS.cards.map((card, i) => {
            const Icon = icons[card.id as keyof typeof icons];
            const accent = accentConfig[card.accent];
            const isLarge = i === 0;

            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl",
                  "border border-white/[0.06] bg-[#101010] p-6",
                  "transition-all duration-300",
                  accent.glow,
                  accent.border,
                  isLarge ? "lg:row-span-2" : ""
                )}
              >
                {/* Top: icon + pill */}
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "rounded-xl border border-white/[0.06] bg-white/[0.04] p-2.5",
                      "text-[#a3a3a3] transition-colors duration-300",
                      accent.iconHover
                    )}
                  >
                    <Icon size={isLarge ? 20 : 16} strokeWidth={1.5} />
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-[10px] font-medium",
                      accent.pill
                    )}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {card.audience}
                  </span>
                </div>

                {/* Content */}
                <div className={cn("mt-5", isLarge ? "flex-1" : "")}>
                  <h3
                    className="text-[#f5f5f5]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isLarge ? "22px" : "17px",
                      marginBottom: "10px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="leading-relaxed text-[#a3a3a3]"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: isLarge ? "14.5px" : "13px",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Visual */}
                {i === 0 && <DashboardVisual />}
                {i === 1 && <AutomationVisual />}
                {i === 2 && <CodeVisual />}

                {/* Subtle top gradient on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(rgba(255,255,255,0.02),rgba(255,255,255,0)_60%)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
