"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Users, CircleDollarSign, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import LightRays from "@/components/light-rays";

const WA_URL = "https://wa.me/5516997650595?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar.";

const heroImages = [
  { src: "/images/nova-hero.jpeg", alt: "Casa moderna com painéis solares no telhado sob céu azul" },
  { src: "/images/hero-solar-2.jpeg", alt: "Instalação de painéis solares residenciais" },
  { src: "/images/hero-solar.jpeg", alt: "Sistema fotovoltaico em funcionamento sob luz solar" },
];

const metrics = [
  { Icon: Users,       value: "+1.200",    label: "Projetos entregues"    },
  { Icon: CircleDollarSign, value: "90%",  label: "Economia média"        },
  { Icon: ShieldCheck, value: "25 anos",   label: "Vida útil dos sistemas" },
  { Icon: Star,        value: "5 estrelas", label: "Avaliação dos clientes" },
];

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
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hidden sm:flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Próxima imagem"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hidden sm:flex items-center justify-center hover:bg-white/20 transition-colors"
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
        <div className="flex-1 sm:min-h-[calc(78dvh+10px)] flex flex-col justify-between sm:justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 text-center sm:text-left">
          <div>

            {/* Headline */}
            <h1 className="font-display font-semibold tracking-tight text-pretty text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl max-w-3xl animate-fade-in-up">
              <span className="block">Economize até 90%</span>
              <span className="block">na sua conta de luz</span>
              <span className="block">com <span className="text-brand-3">energia solar</span></span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-9 text-lg sm:text-xl text-brand-foreground/75 leading-relaxed max-w-xl animate-fade-in-up">
            Soluções completas para residências, comércios e indústrias em São Carlos e região.
          </p>

          {/* CTAs + métricas (marquee no mobile) */}
          <div className="mt-5 sm:mt-9">
            <div className="flex flex-row flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 animate-fade-in-up">
            <a
              href="#economia"
              className="inline-flex items-center gap-2 justify-center rounded-lg bg-brand px-6 py-4 sm:px-8 sm:py-5 font-semibold text-brand-foreground hover:bg-brand-2 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.55)] hover:shadow-[0_24px_60px_-10px_rgba(59,130,246,0.65)]"
            >
              Simular economia gratuitamente
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-4 sm:px-7 sm:py-5 text-brand-foreground hover:bg-white/20 transition-all duration-300"
            >
              <WhatsAppIcon className="size-7 -my-1" />
              Falar com um especialista
            </a>
            </div>

            {/* Métricas passando — carrossel (mobile) */}
            <div className="sm:hidden mt-7 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
              <div className="flex w-max items-center animate-marquee [animation-duration:22s]">
                {[...metrics, ...metrics].map(({ Icon, value, label }, i) => (
                  <div
                    key={i}
                    aria-hidden={i >= metrics.length}
                    className="mr-3 flex shrink-0 items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-2.5"
                  >
                    <Icon className="w-5 h-5 text-white shrink-0" strokeWidth={1.8} />
                    <div className="text-left">
                      <p className="font-display font-bold text-sm text-white leading-none">{value}</p>
                      <p className="mt-0.5 text-[0.65rem] leading-snug text-white/60 whitespace-nowrap">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics — card glass claro ancorado na base da hero (desktop/tablet) */}
      <div className="hidden sm:block relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-9 sm:pb-11">
        <div className="rounded-2xl border border-black/5 bg-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-1 sm:gap-y-0 sm:divide-x sm:divide-black/10 sm:pl-10">
            {metrics.map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5 min-w-0">
                <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-brand shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="font-display font-bold text-lg sm:text-xl text-foreground leading-none">{value}</p>
                  <p className="text-[0.7rem] sm:text-xs text-muted-foreground mt-1 leading-snug text-pretty">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
