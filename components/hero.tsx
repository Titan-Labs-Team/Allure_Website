"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import LightRays from "@/components/light-rays";
import { useCountUp } from "@/hooks/use-count-up";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar.";

const heroImages = [
  { src: "/images/nova-hero.jpeg", alt: "Casa moderna com painéis solares no telhado sob céu azul" },
  { src: "/images/hero-solar-2.jpeg", alt: "Instalação de painéis solares residenciais" },
  { src: "/images/hero-solar.jpeg", alt: "Sistema fotovoltaico em funcionamento sob luz solar" },
];

interface Stat {
  end: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { end: 1240, suffix: "+",     label: "Projetos instalados", description: "em todo o Brasil"    },
  { end: 38,   suffix: " GWh",  label: "Energia gerada",      description: "por ano na rede"     },
  { end: 12,   suffix: " anos", label: "De experiência",      description: "em engenharia solar" },
  { end: 100,  suffix: "%",     label: "Clientes satisfeitos",description: "recomendam a Allure" },
];

// Mobile keeps only the two strongest signals — GWh and years-of-experience get dropped there.
const mobileStats: Stat[] = [stats[0], stats[3]];

function HeroStat({ stat }: { stat: Stat }) {
  const { ref, formatted } = useCountUp({ end: stat.end });
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-display font-semibold tracking-tight text-lg sm:text-xl leading-none text-white/85">
        <span ref={ref}>{formatted}</span>
        <span className="text-white/50">{stat.suffix}</span>
      </p>
      <p className="mt-1.5 text-[0.72rem] font-medium text-white/45">{stat.label}</p>
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the background carousel every 5s; manual arrows just jump the index.
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length);
  const goNext = () => setCurrent((c) => (c + 1) % heroImages.length);

  return (
    <section id="inicio" className="relative bg-brand text-brand-foreground overflow-hidden flex flex-col min-h-[92dvh] sm:min-h-0">
      {/* Background — auto-advancing carousel (3s), crossfades between slides */}
      <div className="absolute inset-0">
        {heroImages.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={i === 0}
            className={`object-cover object-center scale-110 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Carousel arrows */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Imagem anterior"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Próxima imagem"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2153]/40 via-transparent to-transparent" />
      <div className="absolute inset-0 z-[5] opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={1.0}
          lightSpread={1.2}
          rayLength={2.0}
          fadeDistance={1.6}
          saturation={1.5}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.04}
          distortion={0.03}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Mobile: justify-between spreads the 3 blocks to fill the hero; sm+ keeps the centered stack */}
        <div className="flex-1 sm:min-h-[calc(78dvh+10px)] flex flex-col justify-between sm:justify-center pt-28 sm:pt-32 pb-12 sm:pb-16">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="h-px w-10 bg-brand-3" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-foreground/70 font-medium">
                Engenharia solar premium
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold tracking-tight text-pretty text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-5xl animate-fade-in-up">
              <span className="block">Sua energia,</span>
              <span className="block text-brand-3">gerada pelo sol.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-9 text-lg sm:text-xl text-brand-foreground/75 leading-relaxed max-w-xl animate-fade-in-up">
            Projetamos e instalamos sistemas fotovoltaicos de alto desempenho que reduzem até{" "}
            <span className="text-accent font-semibold">90% da sua conta de luz</span>. Engenharia que transforma luz em patrimônio.
          </p>

          {/* CTAs */}
          <div className="mt-5 sm:mt-9 flex flex-row flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 animate-fade-in-up">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-full bg-brand px-8 py-4 sm:px-9 sm:py-5 font-semibold text-brand-foreground hover:bg-brand-2 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.55)] hover:shadow-[0_24px_60px_-10px_rgba(59,130,246,0.65)]"
            >
              <WhatsAppIcon className="size-5" />
              Solicitar orçamento
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 justify-center rounded-full border border-white/[0.06] bg-white/[0.02] px-8 py-4 sm:px-9 sm:py-5 text-brand-foreground/90 hover:bg-white/[0.06] transition-all duration-300"
            >
              Como funciona
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip — anchored to bottom of hero, kept quiet so it never competes with the CTA above */}
      <div className="relative z-10 border-t border-white/10 bg-black/35 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center gap-6">

            {/* Left anchor */}
            <div className="hidden lg:flex flex-col flex-shrink-0 w-44 gap-0.5">
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-white/25 font-medium">Fundada em 2012</span>
              <span className="text-xs font-medium text-white/45 leading-snug">Engenharia solar certificada</span>
            </div>

            {/* Stats — mobile keeps only the two strongest signals so the strip stays
                light next to the CTA; sm+ shows the full set of four. */}
            <div className="flex-1 flex flex-row items-center justify-center sm:hidden">
              {mobileStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="px-5">
                    <HeroStat stat={stat} />
                  </div>
                  {i < mobileStats.length - 1 && (
                    <span className="w-px h-7 bg-white/10 flex-shrink-0" aria-hidden />
                  )}
                </div>
              ))}
            </div>
            <div className="hidden sm:flex flex-1 flex-row flex-wrap items-center justify-center gap-y-4 gap-x-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="px-5 sm:px-8">
                    <HeroStat stat={stat} />
                  </div>
                  {i < stats.length - 1 && (
                    <span className="w-px h-7 bg-white/10 flex-shrink-0" aria-hidden />
                  )}
                </div>
              ))}
            </div>

            {/* Right anchor — Google rating */}
            <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-44 gap-1">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-medium text-white/45 text-center">5.0 no Google</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
