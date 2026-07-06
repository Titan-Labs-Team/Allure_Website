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

      {/* Corner images — dimmed and blurred so they read as ambient backdrop, not foreground detail.
          Sized down below md: so the fixed-aspect artwork doesn't dominate narrow viewports. */}
      <div className="pointer-events-none absolute bottom-6 -left-10 w-[26rem] h-[20rem] md:w-[70rem] md:h-[56rem] lg:w-[90rem] lg:h-[70rem] select-none opacity-25 blur-[2px] [animation:float_7s_ease-in-out_infinite]">
        <Image
          src="/images/solar.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
      </div>
      <div className="pointer-events-none absolute bottom-6 -right-10 w-[26rem] h-[20rem] md:w-[70rem] md:h-[56rem] lg:w-[90rem] lg:h-[70rem] select-none opacity-25 blur-[2px] [animation:float_7s_ease-in-out_infinite] [animation-delay:2.5s]">
        <Image
          src="/images/solar.png"
          alt=""
          fill
          className="object-contain object-bottom scale-x-[-1]"
        />
      </div>

      {/* Scrim — keeps panels recognizable at the edges, fully clears the copy zone for AA contrast.
          Mobile gets a vertical fade (holds up on narrow/tall viewports); md+ switches to the
          wide radial shape tuned for the desktop aspect ratio. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,22,38,0.55) 0%, #071626 30%, #071626 70%, rgba(7,22,38,0.55) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
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

        {/* Steps — editorial rail: big structural numeral anchors each step instead of a
            uniform icon-card grid. Left-aligned rows on mobile (rail runs down the left edge),
            top-aligned columns on desktop (rail runs across the top edge). Text always visible;
            nothing is hidden behind the breakpoint. */}
        <div className={`stagger-children ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {steps.map(({ num, Icon, title, description, highlight, highlightLabel }, i) => (
              <div key={num} className="relative flex md:flex-col gap-5 md:gap-0 min-w-0">
                {/* Rail segment — vertical on mobile (runs behind the numeral column),
                    horizontal on desktop (runs across the top, above each step). */}
                <div className="flex md:hidden flex-col items-center w-9 shrink-0">
                  <span className="font-display font-bold text-3xl leading-none text-white/25 tabular-nums">
                    {String(num).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-3 flex-1 w-px bg-gradient-to-b from-white/25 to-transparent" aria-hidden />
                  )}
                </div>
                <div className="hidden md:flex items-center gap-4 mb-6">
                  <span className="font-display font-bold text-4xl lg:text-5xl leading-none text-white/25 tabular-nums">
                    {String(num).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-white/25 to-transparent" aria-hidden />
                  )}
                </div>

                {/* Step body */}
                <div className="flex-1 min-w-0 pb-1 md:pb-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-3" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-white mb-2 text-pretty leading-snug">
                    {title}
                  </h3>

                  <p className="text-white/55 text-sm leading-relaxed mb-4 max-w-[26rem] md:max-w-none text-pretty">
                    {description}
                  </p>

                  <p className="text-sm">
                    <span className="font-display font-bold text-white">{highlight}</span>
                    <span className="text-white/45"> — {highlightLabel}</span>
                  </p>
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
