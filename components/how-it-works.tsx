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

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — sits behind the step circles (z-0 vs their z-10 opaque fill) so
              the circles visually clip it at each end automatically. The 1/6-of-width inset
              matches half a grid column in the 3-col layout below (100% / 3 cols / 2), the same
              relationship the grid itself uses, so it stays correct if the section's max-width
              changes; only the 21px nudge (half the 42px circle) is a fixed design value. md:+
              only, matching the breakpoint the step grid collapses at. */}
          {/* line sits at the vertical center of the step circle: 18px mobile (36px circle),
              21px md+ (42px circle). Inset by 1/6 of width (half a column) + half the circle. */}
          <div className="block absolute top-[18px] md:top-[21px] left-[calc(100%/6+18px)] md:left-[calc(100%/6+21px)] right-[calc(100%/6+18px)] md:right-[calc(100%/6+21px)] h-[2px] rounded-full bg-white/20 z-0" aria-hidden />

          <div className={`grid grid-cols-3 gap-3 md:gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
            {steps.map(({ num, Icon, title, description, highlight, highlightLabel }) => (
              <div
                key={num}
                className="relative flex flex-col items-center text-center min-w-0"
              >
                {/* Step circle */}
                <div className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full bg-white/15 backdrop-blur-sm ring-2 ring-white/40 flex items-center justify-center mb-4 sm:mb-6 relative z-10">
                  <span className="font-display font-bold text-white text-sm sm:text-base leading-none">{num}</span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-sm sm:text-lg font-semibold tracking-tight text-white mb-2 text-pretty leading-snug">{title}</h3>

                {/* Description — hidden on the tight 3-col mobile layout; title + metric carry the meaning there */}
                <p className="hidden sm:block text-white/55 text-sm leading-relaxed mb-5 max-w-[14rem] text-pretty">{description}</p>

                {/* Metric chip */}
                <div className="mt-2 sm:mt-0 inline-flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-2xl sm:rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <span className="font-display font-bold text-sm sm:text-base leading-none text-white">{highlight}</span>
                  <span className="text-[0.62rem] sm:text-[0.7rem] text-white/50 leading-tight text-center text-pretty">{highlightLabel}</span>
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
