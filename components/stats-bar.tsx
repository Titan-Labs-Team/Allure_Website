"use client";

import { useCountUp } from "@/hooks/use-count-up";

interface Stat {
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { end: 1240, suffix: "+",     label: "Projetos instalados", description: "em todo o Brasil"     },
  { end: 38,   suffix: " GWh",  label: "Energia gerada",      description: "por ano na rede"      },
  { end: 12,   suffix: " anos", label: "De experiência",      description: "em engenharia solar"  },
  { end: 98,   suffix: "%",     label: "Clientes satisfeitos",description: "recomendam a Allure"  },
];

function StatItem({ stat }: { stat: Stat }) {
  const { ref, formatted } = useCountUp({ end: stat.end, decimals: stat.decimals ?? 0 });

  return (
    <div className="flex flex-col items-center text-center px-4">
      <span className="font-display font-bold tracking-tight text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-none text-foreground">
        <span ref={ref}>{formatted}</span>
        <span className="text-brand">{stat.suffix}</span>
      </span>
      <span className="mt-2.5 text-sm font-semibold text-foreground/75">{stat.label}</span>
      <span className="mt-0.5 text-xs text-muted-foreground">{stat.description}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-t border-border bg-muted bg-dots">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 lg:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-0 sm:contents">
              <StatItem stat={stat} />
              {i < stats.length - 1 && (
                <span className="hidden sm:block w-px h-10 bg-border flex-shrink-0" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
