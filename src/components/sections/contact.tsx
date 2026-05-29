"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { CONTACT, SITE } from "@/lib/constants";

const initialState: ContactState = {};

const inputClass =
  "w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[14px] text-[#f5f5f5] placeholder:text-[#525252] outline-none transition-all duration-200 focus:border-[#6366f1]/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#6366f1]/25";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    sendContact,
    initialState
  );

  return (
    <section
      id="contato"
      className="relative px-6 py-28 lg:px-8"
      style={{ background: "#0d0d0d" }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#6366f1]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {CONTACT.label}
          </motion.p>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-1">
            <h2
              className="leading-[1.05] tracking-[-0.01em] text-[#f5f5f5]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px,5.5vw,60px)",
              }}
            >
              {CONTACT.title}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h2
              className="leading-[1.1] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(28px,4vw,48px)",
              }}
            >
              <TextShimmer>{CONTACT.subtitle}</TextShimmer>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-[15px] leading-relaxed text-[#a3a3a3]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {CONTACT.body}
          </motion.p>

          {/* Form */}
          <motion.div variants={itemVariants}>
            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-10 text-center"
              >
                <CheckCircle className="text-[#6366f1]" size={32} />
                <p
                  className="text-[15px] text-[#f5f5f5]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {CONTACT.successMessage}
                </p>
              </motion.div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-[12px] text-[#a3a3a3]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {CONTACT.fields.name.label}
                    <span className="ml-1 text-[#6366f1]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={CONTACT.fields.name.placeholder}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="text-[12px] text-[#a3a3a3]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {CONTACT.fields.company.label}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={CONTACT.fields.company.placeholder}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                    autoComplete="organization"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[12px] text-[#a3a3a3]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {CONTACT.fields.message.label}
                    <span className="ml-1 text-[#6366f1]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={CONTACT.fields.message.placeholder}
                    className={inputClass + " resize-none"}
                    style={{ fontFamily: "var(--font-inter)" }}
                    required
                  />
                </div>

                {/* Error */}
                {state.error && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                    <AlertCircle size={15} className="shrink-0 text-red-400" />
                    <p
                      className="text-[13px] text-red-400"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {state.error}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#6366f1] py-3.5 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[#818cf8] hover:shadow-[0_0_24px_rgba(99,102,241,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {isPending ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    CONTACT.submitLabel
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* WhatsApp */}
          {SITE.whatsapp && (
            <motion.div variants={itemVariants} className="mt-6 text-center">
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#a3a3a3] transition-colors duration-150 hover:text-[#6366f1]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {CONTACT.whatsappLabel}
              </a>
            </motion.div>
          )}

          {/* Email fallback */}
          <motion.div variants={itemVariants} className="mt-4 text-center">
            <a
              href={`mailto:${SITE.email}`}
              className="text-[12px] text-[#525252] transition-colors duration-150 hover:text-[#a3a3a3]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              ou escreve pra {SITE.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
