"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Testimonial {
  name: string;
  city: string;
  initials: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendes",
    city: "São Paulo, SP",
    initials: "CM",
    quote: "Pagava R$ 780 por mês de energia. Depois da Allure, minha conta caiu para menos de R$ 60. O atendimento foi impecável do projeto à instalação.",
    highlight: "92% de economia",
  },
  {
    name: "Ana Lima",
    city: "Ribeirão Preto, SP",
    initials: "AL",
    quote: "Em menos de 24h tinha a proposta completa. Instalação rápida, limpa e uma equipe técnica que explicou cada detalhe com clareza.",
    highlight: "Proposta em 24h",
  },
  {
    name: "Ricardo Ferreira",
    city: "Sorocaba, SP",
    initials: "RF",
    quote: "Tinha receio do investimento, mas em menos de 4 anos já se pagou. Hoje é economia pura todo mês e um imóvel mais valorizado.",
    highlight: "ROI em 4 anos",
  },
];

function TestimonialCard({ t, featured }: { t: Testimonial; featured?: boolean }) {
  return (
    <figure
      className={`relative flex flex-col rounded-2xl p-8 lg:p-10 card-hover ${
        featured
          ? "bg-brand text-brand-foreground border border-brand"
          : "bg-card text-foreground border border-border"
      }`}
    >
      <span
        className={`quote-mark text-7xl mb-4 ${featured ? "text-brand-3" : "text-brand-muted"}`}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote
        className={`font-display text-lg sm:text-xl leading-snug tracking-tight flex-1 ${
          featured ? "text-brand-foreground" : "text-foreground"
        }`}
      >
        {t.quote}
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${
            featured ? "bg-brand-foreground/15 text-brand-foreground" : "bg-brand-muted text-brand-2"
          }`}
        >
          {t.initials}
        </div>
        <div className="flex-1">
          <p className={`font-medium text-sm ${featured ? "text-brand-foreground" : "text-foreground"}`}>{t.name}</p>
          <p className={`text-xs ${featured ? "text-brand-foreground/60" : "text-muted-foreground"}`}>{t.city}</p>
        </div>
        <span
          className={`text-xs font-medium px-3 py-1.5 rounded-full ${
            featured ? "bg-brand-foreground/15 text-brand-foreground" : "bg-brand-muted text-brand-2"
          }`}
        >
          {t.highlight}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-background">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                  Depoimentos
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-2xl">
                Histórias de quem já trocou a conta de luz por patrimônio.
              </h2>
            </div>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Mais de 1.200 famílias e empresas confiam na engenharia da Allure para gerar a própria energia.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 lg:gap-7 stagger-children ${isVisible ? "visible" : ""}`}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} featured={i === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
