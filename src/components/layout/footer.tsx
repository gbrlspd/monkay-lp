import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-5">
          <span
            className="flex items-center gap-1 text-[14px] font-semibold text-[#f5f5f5]"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            monkay
            <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
          </span>

          <div className="flex items-center gap-4">
            {SITE.email && (
              <a
                href={`mailto:${SITE.email}`}
                className="text-[13px] text-[#525252] hover:text-[#a3a3a3] transition-colors duration-150"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {SITE.email}
              </a>
            )}
            {SITE.linkedin && (
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#525252] hover:text-[#a3a3a3] transition-colors duration-150"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                linkedin
              </a>
            )}
          </div>
        </div>

        <p
          className="text-[12px] text-[#525252]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Monkay. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
