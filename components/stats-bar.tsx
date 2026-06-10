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
    <div className="flex flex-col gap-2 py-8 lg:py-12 px-6 lg:px-10">
      <span className="font-display font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-foreground">
        <span ref={ref}>{formatted}</span>
        <span className="text-brand-2">{stat.suffix}</span>
      </span>
      <span className="text-sm sm:text-base text-muted-foreground">{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
