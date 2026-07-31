"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface RotatingItem {
  Icon: LucideIcon;
  title: string;
}

// Mostra um ícone + frase por vez, alternando entre os itens.
// A troca é um flip 3D tipo "face de cubo girando": a face atual gira pra baixo
// saindo de cena e a próxima desce do topo, com perspectiva. Estilizável via
// className (wrapper) + badge/icon/text para servir em fundos diferentes
// (escuro da calculadora, claro do final-cta).
export default function RotatingBadge({
  items,
  interval = 2800,
  className = "",
  badgeClassName = "",
  iconClassName = "",
  textClassName = "",
}: {
  items: RotatingItem[];
  interval?: number;
  className?: string;
  badgeClassName?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  const { Icon, title } = items[index];

  return (
    <div className={`min-h-[2.75rem] ${className}`} style={{ perspective: 800 }} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center center", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          className="inline-flex items-center gap-3"
        >
          <span className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${badgeClassName}`}>
            <Icon className={`w-5 h-5 ${iconClassName}`} strokeWidth={1.8} />
          </span>
          <span className={`font-medium leading-snug text-pretty ${textClassName}`}>{title}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
