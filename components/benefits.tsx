"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sun, Home, Zap, TrendingDown, TrendingUp, Leaf, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Benefit {
  image: string;
  title: string;
  description: string;
  Icon: typeof Sun;
}

const benefits: Benefit[] = [
  {
    image: "/images/benefit-economy.jpg",
    title: "Reduza até 90% da conta de luz",
    description: "A economia começa já no primeiro mês e se acumula ao longo de mais de duas décadas de geração.",
    Icon: Sun,
  },
  {
    image: "/images/benefit-value.jpg",
    title: "Valorize o seu imóvel",
    description: "Imóveis com sistema solar instalado são mais procurados e valorizados no mercado.",
    Icon: Home,
  },
  {
    image: "/images/foto site.jpeg",
    title: "Conquiste autonomia energética",
    description: "Menos dependência das distribuidoras e proteção contra os reajustes constantes da tarifa.",
    Icon: Zap,
  },
];

const miniFeatures = [
  {
    Icon: TrendingDown,
    title: "Reduza seus custos",
    description: "Reduza em até 90% sua conta de luz.",
  },
  {
    Icon: TrendingUp,
    title: "Valorização do imóvel",
    description: "Imóveis com energia solar valem mais no mercado.",
  },
  {
    Icon: Leaf,
    title: "Conquista sustentável",
    description: "Energia limpa hoje, um amanhã melhor sempre.",
  },
];

const NARROW_WIDTH = 90;
const EXPANDED_WIDTH = 440;
const restWidth = (EXPANDED_WIDTH + NARROW_WIDTH * (benefits.length - 1) - EXPANDED_WIDTH) / (benefits.length - 1);

function Panel({
  benefit,
  isActive,
  onActivate,
  panelRef,
}: {
  benefit: Benefit;
  isActive: boolean;
  onActivate: () => void;
  panelRef: (el: HTMLButtonElement | null) => void;
}) {
  const { image, title, description } = benefit;
  const [isMobileInView, setIsMobileInView] = useState(false);
  const elRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(max-width: 1023px)", () => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsMobileInView(entry.isIntersecting),
        { threshold: 0.55 }
      );
      observer.observe(el);
      return () => {
        observer.disconnect();
        setIsMobileInView(false);
      };
    });

    return () => mm.revert();
  }, []);

  const showContent = isActive || isMobileInView;

  return (
    <button
      ref={(el) => {
        elRef.current = el;
        panelRef(el);
      }}
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-expanded={showContent}
      aria-label={title}
      className="
        group relative overflow-hidden text-left rounded-2xl border border-border shrink-0
        h-56 lg:h-full w-full lg:w-auto
        transition-[height] duration-500
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${showContent ? "scale-100" : "scale-110"}`}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${showContent ? "bg-[#0E2C6B]/10" : "bg-[#0E2C6B]/55"}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#0E2C6B]/85 via-[#0E2C6B]/10 to-transparent transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
      />

      {/* Collapsed-rail vertical label — desktop only, mobile never has a narrow collapsed state */}
      <span
        className={`
          hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-white font-display font-semibold text-sm tracking-tight whitespace-nowrap
          transition-opacity duration-300
          ${isActive ? "opacity-0 duration-100" : "opacity-100 rotate-180 delay-500"}
        `}
        style={{ writingMode: "vertical-rl" }}
      >
        {title}
      </span>

      <div className="absolute left-5 right-5 bottom-5 lg:left-6 lg:right-6 lg:bottom-16 z-10">
        {/* Mobile: title always visible, independent of scroll-driven reveal. Desktop: title lives in the animated block below instead. */}
        <h3 className="lg:hidden font-display font-semibold tracking-tight text-white text-base text-pretty">
          {title}
        </h3>

        <div
          className={`
            transition-all duration-500
            ${showContent ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-2 pointer-events-none delay-0"}
          `}
        >
          <h3 className="hidden lg:block font-display font-semibold tracking-tight text-white text-2xl mb-2 text-pretty">
            {title}
          </h3>
          <p className="text-white/80 leading-relaxed text-pretty max-w-md text-xs lg:text-base line-clamp-2 lg:line-clamp-none mt-1 lg:mt-0">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const panelsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const isDesktopRef = useRef(false);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      isDesktopRef.current = true;
      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;
        gsap.set(panel, { width: i === activeIndex ? EXPANDED_WIDTH : restWidth });
      });

      return () => {
        isDesktopRef.current = false;
        panelsRef.current.forEach((panel) => {
          if (!panel) return;
          gsap.set(panel, { clearProps: "width" });
        });
      };
    });

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isDesktopRef.current) return;
    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      gsap.to(panel, {
        width: i === activeIndex ? EXPANDED_WIDTH : restWidth,
        duration: 0.65,
        ease: "power3.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <section className="section-py bg-background overflow-hidden">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[42%_58%] gap-8 lg:gap-12 items-stretch">
          {/* Left column */}
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-3" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                Vantagens
              </span>
            </div>
            <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Mais que economia.{" "}
              <span className="block">Um ativo para a <span className="text-brand">sua vida.</span></span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 mb-8">
              Produzir a própria energia é uma decisão financeira inteligente — e profundamente sustentável.
            </p>

            {/* Mini feature cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
              {miniFeatures.map(({ Icon, title, description }) => (
                <div key={title} className="flex flex-col gap-1.5 py-2">
                  <div className="w-11 h-11 rounded-full bg-brand-muted flex items-center justify-center mb-2 shrink-0">
                    <Icon className="w-5 h-5 text-brand-2" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground leading-snug">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground hover:bg-brand-2 font-semibold rounded-xl px-8 py-4 text-sm transition-all duration-300 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.45)] hover:shadow-[0_24px_60px_-10px_rgba(59,130,246,0.55)] hover:-translate-y-0.5"
            >
              Quero esses benefícios
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-2 shrink-0" strokeWidth={2} />
              Projeto personalizado e sem compromisso
            </p>
          </div>

          {/* Right column — cards grouped tightly, block anchored to the right edge on desktop.
              Mobile falls back to a stacked/tappable list since fixed px widths don't work under 1024px. */}
          <div className="flex lg:justify-end min-w-0 h-full">
            <div className="flex flex-col lg:flex-row items-stretch w-full lg:w-auto gap-3 lg:gap-[14px] h-full">
              {benefits.map((benefit, i) => (
                <Panel
                  key={benefit.title}
                  benefit={benefit}
                  isActive={i === activeIndex}
                  onActivate={() => setActiveIndex(i)}
                  panelRef={(el) => {
                    panelsRef.current[i] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
