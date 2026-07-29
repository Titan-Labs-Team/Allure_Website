"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { TrendingDown, BadgePercent, Leaf, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ElectricBorder from "@/components/electric-border";

const WA_URL = "https://wa.me/5516997650595?text=Ol%C3%A1!%20Fiz%20a%20simula%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20detalhado.";

const SAVINGS_RATE = 0.88; // economia média

const highlights = [
  { Icon: Clock, title: "Resultado na hora", desc: "Sua estimativa aparece na tela em segundos." },
  { Icon: ShieldCheck, title: "Sem compromisso", desc: "Simule quantas vezes quiser, sem cadastro." },
  { Icon: TrendingDown, title: "Baseado em dados reais", desc: "Cálculo a partir de projetos já instalados pela Allure." },
];

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function SavingsCalculator() {
  const { ref, isVisible } = useScrollAnimation();
  const [bill, setBill] = useState<number>(450);

  const annualSavings = useMemo(() => {
    const monthlySavings = bill * SAVINGS_RATE;
    return monthlySavings * 12;
  }, [bill]);

  return (
    <section id="economia" className="relative section-py-lg bg-[#06101f] overflow-hidden">
      {/* Aurora — gradientes radiais em azul da marca */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(59,130,246,0.38),transparent_60%),radial-gradient(55%_55%_at_100%_100%,rgba(91,184,245,0.30),transparent_60%),radial-gradient(45%_45%_at_88%_8%,rgba(37,99,235,0.28),transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-brand/25 blur-[140px] animate-float motion-reduce:animate-none" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[30rem] h-[30rem] rounded-full bg-brand-3/25 blur-[140px] animate-float motion-reduce:animate-none [animation-delay:2.5s]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(70%_60%_at_50%_35%,#000,transparent)]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />

      <div ref={ref} className={`relative z-10 px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
                Descubra quanto você <span className="text-brand-3">pode economizar.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Arraste o valor da sua conta de luz mensal e veja, em segundos, sua economia anual estimada e em quanto tempo o investimento se paga.
              </p>

              {/* Destaques */}
              <ul className="mt-8 space-y-4 max-w-md">
                {highlights.map(({ Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-3" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-white font-medium leading-snug">{title}</p>
                      <p className="text-white/50 text-sm leading-snug text-pretty">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calculator card */}
            <ElectricBorder color="#FFFFFF" speed={0.4} chaos={0.02} borderRadius={30}>
            <div className="bg-card rounded-2xl p-7 sm:p-10">
              {/* Input */}
              <div className="mb-9">
                <div className="flex items-baseline justify-between mb-5">
                  <label className="text-sm text-muted-foreground">Sua conta de luz mensal</label>
                  <span className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                    {formatBRL(bill)}
                  </span>
                </div>
                <Slider
                  value={[bill]}
                  min={150}
                  max={3000}
                  step={10}
                  onValueChange={(v) => setBill(v[0])}
                  className="[&_[data-slot=slider-range]]:bg-brand-2 [&_[data-slot=slider-thumb]]:border-brand-2 [&_[data-slot=slider-thumb]]:ring-brand-2/30"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-3">
                  <span>R$ 150</span>
                  <span>R$ 3.000</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                <div className="rounded-xl bg-brand-muted p-4 sm:p-5 min-w-0">
                  <div className="flex items-center gap-2 text-brand-2 mb-2">
                    <TrendingDown className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-medium uppercase tracking-wide">Economia anual</span>
                  </div>
                  <p className="font-display text-xl sm:text-3xl font-semibold tracking-tight text-brand">
                    {formatBRL(annualSavings)}
                  </p>
                </div>
                <div className="rounded-xl bg-background border border-border p-4 sm:p-5 min-w-0">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <BadgePercent className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-medium uppercase tracking-wide">Economia em até</span>
                  </div>
                  <p className="font-display text-xl sm:text-3xl font-semibold tracking-tight text-foreground">
                    90<span className="text-base sm:text-lg text-muted-foreground">%</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-7">
                <Leaf className="w-4 h-4 text-brand-2 flex-shrink-0" />
                <span>Estimativa baseada em economia média de 88% da conta.</span>
              </div>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-brand text-brand-foreground hover:bg-brand-2 font-semibold text-base sm:text-lg whitespace-normal h-auto min-h-14 sm:min-h-16 py-3 px-6 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.55)] hover:shadow-[0_24px_60px_-10px_rgba(59,130,246,0.65)]"
              >
                <WhatsAppIcon className="size-6" />
                Quero meu orçamento detalhado
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
