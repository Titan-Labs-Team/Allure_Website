"use client";

import { Sun, Cpu, TrendingDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20garantir%20a%20minha%20economia%20com%20energia%20solar.";

const steps = [
  {
    num: 1,
    Icon: Sun,
    title: "Captação inteligente",
    description: "Painéis de alta eficiência convertem a luz do sol em energia limpa, dimensionados com precisão para o seu consumo real.",
    highlight: "98%",
    highlightLabel: "eficiência dos painéis",
  },
  {
    num: 2,
    Icon: Cpu,
    title: "Conversão e gestão",
    description: "Inversores premium transformam e otimizam a energia gerada, com monitoramento em tempo real direto no seu celular.",
    highlight: "24/7",
    highlightLabel: "monitoramento ativo",
  },
  {
    num: 3,
    Icon: TrendingDown,
    title: "Economia acumulada",
    description: "O excedente vira créditos na rede e abate sua conta. Retorno do investimento, em média, entre 3 e 5 anos.",
    highlight: "3–5 anos",
    highlightLabel: "retorno do investimento",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-24 sm:py-28 lg:py-36 bg-[#071626]">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/60 font-semibold">Como funciona</span>
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
            Da luz do sol à economia,<br className="hidden sm:block" /> em três etapas.
          </h2>
          <p className="mt-5 text-white/55 max-w-md mx-auto leading-relaxed">
            Engenharia transparente, do projeto à geração — sem complicações técnicas para você.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[21px] h-[2px] rounded-full bg-white/20"
            style={{ left: "calc(16.67% + 21px)", right: "calc(16.67% + 21px)" }}
            aria-hidden
          />

          <div className={`grid lg:grid-cols-3 gap-14 lg:gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
            {steps.map(({ num, Icon, title, description, highlight, highlightLabel }) => (
              <div key={num} className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="w-[42px] h-[42px] rounded-full bg-white/15 ring-2 ring-white/40 flex items-center justify-center mb-8 relative z-10">
                  <span className="font-display font-bold text-white text-base leading-none">{num}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold tracking-tight text-white mb-3">{title}</h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[14rem]">{description}</p>

                {/* Metric chip */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10">
                  <span className="font-display font-bold text-lg leading-none text-white">{highlight}</span>
                  <span className="text-[0.72rem] text-white/50">{highlightLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <Button
            size="lg"
            asChild
            className="group bg-white text-brand hover:bg-white/90 font-semibold text-base px-9 h-14 rounded-full gap-2.5 border-0 shadow-lg shadow-black/20"
          >
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-5 h-5" />
              Garanta sua economia
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
