"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { TrendingDown, CalendarClock, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ElectricBorder from "@/components/electric-border";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Fiz%20a%20simula%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20detalhado.";

const SAVINGS_RATE = 0.88; // economia média
const AVG_TARIFF_PER_KWH = 0.95; // tarifa média de energia (R$/kWh)
const GENERATION_PER_KWP_PER_DAY = 4.5; // geração média (kWh/kWp/dia), considerando irradiação BR
const OVERSIZE_FACTOR = 1.15; // folga de dimensionamento (perdas, fator de simultaneidade)

// Custo por kWp decresce por faixa: sistemas maiores diluem custo fixo (projeto, mão de obra, inversor)
const COST_PER_KWP_TABLE: { maxKwp: number; costPerKwp: number }[] = [
  { maxKwp: 3, costPerKwp: 5200 },
  { maxKwp: 5, costPerKwp: 4600 },
  { maxKwp: 8, costPerKwp: 4200 },
  { maxKwp: 15, costPerKwp: 3800 },
  { maxKwp: 30, costPerKwp: 3500 },
  { maxKwp: Infinity, costPerKwp: 3200 },
];

function costPerKwpFor(kwp: number) {
  return COST_PER_KWP_TABLE.find((tier) => kwp <= tier.maxKwp)!.costPerKwp;
}

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function SavingsCalculator() {
  const { ref, isVisible } = useScrollAnimation();
  const [bill, setBill] = useState<number>(450);

  const { annualSavings, roiYears } = useMemo(() => {
    const monthlySavings = bill * SAVINGS_RATE;
    const annual = monthlySavings * 12;

    const monthlyConsumptionKwh = bill / AVG_TARIFF_PER_KWH;
    const requiredKwp = (monthlyConsumptionKwh / 30 / GENERATION_PER_KWP_PER_DAY) * OVERSIZE_FACTOR;
    const systemCost = requiredKwp * costPerKwpFor(requiredKwp);

    const roi = annual > 0 ? systemCost / annual : 0;
    return { annualSavings: annual, roiYears: roi };
  }, [bill]);

  return (
    <section className="section-py-lg bg-[#071626] overflow-hidden">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                  Simulador
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
                Descubra quanto você pode economizar.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Arraste o valor da sua conta de luz mensal e veja, em segundos, sua economia anual estimada e em quanto tempo o investimento se paga.
              </p>
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
                    <CalendarClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-medium uppercase tracking-wide">Retorno em</span>
                  </div>
                  <p className="font-display text-xl sm:text-3xl font-semibold tracking-tight text-foreground">
                    {roiYears.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} <span className="text-base sm:text-lg text-muted-foreground">anos</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-7">
                <Leaf className="w-4 h-4 text-brand-2 flex-shrink-0" />
                <span>Estimativa baseada em economia média de 88% da conta.</span>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-brand/40 text-brand-2 hover:bg-brand-muted hover:text-brand font-semibold rounded-full gap-2.5 h-12"
              >
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Quero meu orçamento detalhado
                </a>
              </Button>
            </div>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
