"use client";

import { ShieldCheck, BadgeCheck, Zap, Headphones, Award, Wrench, ArrowUpRight, Check, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20conhecer%20os%20diferenciais%20da%20Allure.";

const features = [
  { Icon: ShieldCheck, label: "Garantia de 25 anos" },
  { Icon: BadgeCheck, label: "Certificações técnicas" },
  { Icon: Zap,        label: "Instalação em 7 dias" },
  { Icon: Headphones, label: "Suporte pós-venda 24/7" },
  { Icon: Award,      label: "Equipamentos premium" },
  { Icon: Wrench,     label: "Engenharia dedicada" },
];

const columns = [
  {
    position: 2,
    name: "Instaladores\nLocais",
    topPad: "pt-12",
    headerBg: "bg-slate-100",
    bodyBg: "bg-slate-50",
    border: "border-slate-200",
    namColor: "text-slate-500",
    posColor: "text-slate-400",
    available: [false, true, false, false, false, false],
    isAllure: false,
  },
  {
    position: 1,
    name: "Allure",
    topPad: "pt-0",
    headerBg: "bg-brand",
    bodyBg: "bg-brand/5",
    border: "border-brand/30",
    namColor: "text-white",
    posColor: "text-white/60",
    available: [true, true, true, true, true, true],
    isAllure: true,
  },
  {
    position: 3,
    name: "Mercado\nGeral",
    topPad: "pt-20",
    headerBg: "bg-slate-100",
    bodyBg: "bg-slate-50",
    border: "border-slate-200",
    namColor: "text-slate-500",
    posColor: "text-slate-400",
    available: [false, false, true, false, false, false],
    isAllure: false,
  },
];

export default function WhyAllure() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-allure" className="py-24 sm:py-28 lg:py-36 bg-background bg-glow-top">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14 lg:mb-18">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-xs uppercase tracking-[0.22em] text-brand-2 font-semibold">Diferenciais</span>
              <span className="h-px w-8 bg-brand/40" />
            </div>
            <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Por que a Allure está no topo.
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              Veja na prática o que nos coloca acima do mercado — em garantia, tecnologia e atendimento.
            </p>
          </div>

          {/* Podium */}
          <div className={`flex items-end gap-3 sm:gap-4 lg:gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
            {columns.map(({ position, name, topPad, headerBg, bodyBg, border, namColor, posColor, available, isAllure }) => (
              <div key={position} className={`flex-1 flex flex-col ${topPad}`}>

                {/* Position badge + name */}
                <div className={`${headerBg} rounded-t-2xl px-4 py-5 text-center border border-b-0 ${border}`}>
                  {isAllure ? (
                    <Crown className="w-5 h-5 text-white mx-auto mb-2" strokeWidth={1.8} />
                  ) : (
                    <span className={`text-lg font-bold ${posColor} block mb-1`}>#{position}</span>
                  )}
                  <p className={`font-display font-semibold text-sm sm:text-base leading-tight whitespace-pre-line ${namColor}`}>
                    {name}
                  </p>
                </div>

                {/* Features list */}
                <div className={`${bodyBg} border border-t-0 ${border} rounded-b-2xl px-3 sm:px-5 py-4 flex flex-col gap-3`}>
                  {features.map(({ Icon, label }, i) => (
                    <div key={label} className="flex items-center gap-2.5">
                      {available[i] ? (
                        <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${isAllure ? "bg-brand text-white" : "bg-emerald-100"}`}>
                          <Check className={`w-2.5 h-2.5 ${isAllure ? "text-white" : "text-emerald-600"}`} strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                          <X className="w-2.5 h-2.5 text-slate-400" strokeWidth={3} />
                        </span>
                      )}
                      <span className={`text-xs sm:text-sm leading-tight ${isAllure ? "text-foreground font-medium" : "text-muted-foreground"} ${!available[i] ? "opacity-50" : ""}`}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Podium base */}
          <div className="flex mt-0 rounded-b-xl overflow-hidden border border-t-0 border-slate-200">
            <div className="flex-1 py-2.5 text-center text-xs text-slate-400 bg-slate-100">#2</div>
            <div className="flex-1 py-2.5 text-center text-xs font-bold text-white bg-brand">#1</div>
            <div className="flex-1 py-2.5 text-center text-xs text-slate-400 bg-slate-100">#3</div>
          </div>

          {/* CTA */}
          <div className="mt-12 lg:mt-14 flex justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-brand text-brand-foreground hover:bg-brand-2 font-semibold text-base px-9 h-14 rounded-full gap-2.5 border-0 shadow-lg shadow-brand/25"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Falar com um especialista
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
