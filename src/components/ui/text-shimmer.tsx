import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: string;
  className?: string;
}

export function TextShimmer({ children, className }: TextShimmerProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        background:
          "linear-gradient(90deg, #6366f1 0%, #a5b4fc 30%, #c4b5fd 50%, #818cf8 70%, #6366f1 100%)",
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        animation: "shimmer 3s linear infinite",
      }}
    >
      {children}
    </span>
  );
}
