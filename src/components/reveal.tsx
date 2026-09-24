import { type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
};

/**
 * Wraps children with a fade-up reveal on scroll into view.
 */
export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${visible ? "reveal-visible" : "reveal"} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
