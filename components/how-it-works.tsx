"use client";

import Image from "next/image";
import { Sun, Cpu, TrendingDown, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
    <section id="como-funciona" className="relative section-py bg-[#071626] overflow-hidden">

      {/* Corner images — dimmed and blurred so they read as ambient backdrop, not foreground detail */}
      <div className="pointer-events-none absolute bottom-6 -left-10 w-[70rem] lg:w-[90rem] h-[56rem] lg:h-[70rem] select-none opacity-25 blur-[2px] [animation:float_7s_ease-in-out_infinite]">
        <Image
          src="/images/paineis1.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
      </div>
      <div className="pointer-events-none absolute bottom-6 -right-10 w-[70rem] lg:w-[90rem] h-[56rem] lg:h-[70rem] select-none opacity-25 blur-[2px] [animation:float_7s_ease-in-out_infinite] [animation-delay:2.5s]">
        <Image
          src="/images/paineis1.png"
          alt=""
          fill
          className="object-contain object-bottom scale-x-[-1]"
        />
      </div>

      {/* Scrim — keeps panels recognizable at the edges, fully clears the copy zone for AA contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 42%, #071626 0%, rgba(7,22,38,0.85) 45%, rgba(7,22,38,0.55) 72%, rgba(7,22,38,0.3) 100%)",
        }}
        aria-hidden
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/60 font-semibold">Como funciona</span>
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
            Da luz do sol à economia,<br className="hidden sm:block" /> em três etapas.
          </h2>
          <p className="mt-4 text-white/55 max-w-md mx-auto leading-relaxed">
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

          <div className={`grid lg:grid-cols-3 gap-10 lg:gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
            {steps.map(({ num, Icon, title, description, highlight, highlightLabel }) => (
              <div key={num} className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="w-[42px] h-[42px] rounded-full bg-white/15 backdrop-blur-sm ring-2 ring-white/40 flex items-center justify-center mb-6 relative z-10">
                  <span className="font-display font-bold text-white text-base leading-none">{num}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold tracking-tight text-white mb-2">{title}</h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-[14rem]">{description}</p>

                {/* Metric chip */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <span className="font-display font-bold text-base leading-none text-white">{highlight}</span>
                  <span className="text-[0.7rem] text-white/50">{highlightLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quiet link — primary conversion stays with hero + final CTA */}
        <div className="mt-10 lg:mt-12 flex justify-center">
          <a
            href="#contato"
            className="link-quiet text-white/60 hover:text-white"
          >
            Ver simulação de economia
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
