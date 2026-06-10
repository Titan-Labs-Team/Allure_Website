"use client";

import { useCountUp } from "@/hooks/use-count-up";

interface Stat {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { end: 1240, suffix: "+", prefix: "", label: "Projetos instalados" },
  { end: 38, suffix: " GWh", decimals: 0, label: "Energia gerada por ano" },
  { end: 12, suffix: " anos", label: "De engenharia solar" },
  { end: 98, suffix: "%", label: "Clientes que recomendam" },
];

function StatItem({ stat }: { stat: Stat }) {
  const { ref, formatted } = useCountUp({ end: stat.end, decimals: stat.decimals ?? 0 });
  return (
    <div className="group relative rounded-2xl bg-brand-foreground/5 border border-brand-foreground/10 p-6 lg:p-8 transition-colors hover:bg-brand-foreground/10">
      <span className="absolute top-6 right-6 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
      <span className="font-display font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[3.25rem] leading-none text-brand-foreground block">
        <span ref={ref}>{formatted}</span>
        <span className="text-accent">{stat.suffix}</span>
      </span>
      <span className="mt-4 block text-sm sm:text-base text-brand-foreground/70">{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
