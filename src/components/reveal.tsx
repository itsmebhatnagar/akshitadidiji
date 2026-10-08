import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
};

export function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const Tag = as;

  return <Tag className={className}>{children}</Tag>;
}
