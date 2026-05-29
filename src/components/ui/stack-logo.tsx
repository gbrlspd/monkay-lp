"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface StackLogoProps {
  name: string;
  slug: string | null;
  className?: string;
}

export function StackLogo({ name, slug, className }: StackLogoProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = slug !== null && !imgError;

  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-2 rounded-lg border p-3",
        "border-white/[0.06] bg-[#101010]",
        "hover:border-[rgba(99,102,241,0.35)] hover:bg-[#161616]",
        "transition-all duration-200 cursor-default",
        className
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center">
        {showImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={`https://cdn.simpleicons.org/${slug}/ffffff`}
            alt={name}
            width={28}
            height={28}
            className="h-7 w-7 opacity-25 transition-opacity duration-200 group-hover:opacity-90"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-mono text-[11px] font-bold text-[#525252] group-hover:text-[#a3a3a3] transition-colors duration-200">
            {name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-center font-mono text-[10px] leading-tight text-[#525252] transition-colors duration-200 group-hover:text-[#a3a3a3]">
        {name}
      </span>
    </div>
  );
}
