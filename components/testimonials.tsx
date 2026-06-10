"use client";

import { Star, BadgeCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20fazer%20parte%20de%20quem%20economiza%20com%20a%20Allure.";

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

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="group relative flex flex-col rounded-2xl bg-card border border-border p-8 lg:p-9 card-hover">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="font-display text-lg sm:text-xl leading-snug tracking-tight text-foreground flex-1">
        {t.quote}
      </blockquote>

      {/* Highlight chip */}
      <span className="mt-7 inline-flex w-fit items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-muted text-brand-2">
        <BadgeCheck className="w-3.5 h-3.5" strokeWidth={2.2} />
        {t.highlight}
      </span>

      <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
          {t.initials}
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm text-foreground flex items-center gap-1.5">
            {t.name}
            <BadgeCheck className="w-4 h-4 text-brand-2" strokeWidth={2.2} aria-label="Cliente verificado" />
          </p>
          <p className="text-xs text-muted-foreground">{t.city}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-muted">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-semibold">
                  Depoimentos
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-2xl">
                Histórias de quem já trocou a conta de luz por patrimônio.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-muted-foreground leading-relaxed mb-3">
                Mais de 1.200 famílias e empresas confiam na engenharia da Allure para gerar a própria energia.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </span>
                4,9/5 em mais de 800 avaliações
              </div>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 lg:gap-7 stagger-children ${isVisible ? "visible" : ""}`}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-accent text-accent-foreground hover:brightness-105 font-semibold text-base px-9 h-14 rounded-full gap-2.5 border-0 shadow-lg shadow-accent/25"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Quero economizar também
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
