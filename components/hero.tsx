"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Star, Users, CircleDollarSign, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import CountUp from "@/components/count-up";
import ShinyText from "@/components/shiny-text";

const metrics = [
  { Icon: Users,            prefix: "+", to: 1200, separator: ".", suffix: "",           label: "Projetos entregues"     },
  { Icon: CircleDollarSign, prefix: "",  to: 90,   separator: "",  suffix: "%",          label: "Economia média"         },
  { Icon: ShieldCheck,      prefix: "",  to: 25,   separator: "",  suffix: " anos",      label: "Vida útil dos sistemas" },
  { Icon: Star,             prefix: "",  to: 5,    separator: "",  suffix: " estrelas",  label: "Avaliação dos clientes" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    gsap.registerPlugin(SplitText);

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {});

    const start = () => {
      ctx.add(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Só as linhas 1 e 2 viram chars; a linha 3 fica inteira pro efeito shine
        // (bg-clip-text não sobrevive à quebra em spans de char do SplitText).
        const splitTargets = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".split-me"));
        split = new SplitText(splitTargets, { type: "words, chars", charsClass: "split-char" });
        const line3 = el.querySelector(".line-3");

        gsap.set(el, { autoAlpha: 1 });

        if (reduce) {
          gsap.set(split.chars, { opacity: 1, yPercent: 0 });
          if (line3) gsap.set(line3, { opacity: 1, y: 0 });
          return;
        }

        const tl = gsap.timeline({ delay: 0.1 });
        tl.fromTo(
          split.chars,
          { opacity: 0, yPercent: 55 },
          { opacity: 1, yPercent: 0, duration: 0.7, ease: "power3.out", stagger: 0.028 }
        );
        if (line3) {
          tl.fromTo(
            line3,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.2"
          );
        }
      });
    };

    if (document.fonts?.status === "loaded") start();
    else document.fonts.ready.then(start);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, []);

  return (
    <section id="inicio" className="relative bg-brand text-brand-foreground overflow-hidden flex flex-col min-h-[92dvh] sm:min-h-0">
      {/* Background — imagem fixa */}
      <div className="absolute inset-0">
        {/* Mobile: fundo hero-solar-2 */}
        <Image
          src="/images/hero-solar-2.jpeg"
          alt="Painéis solares instalados pela Allure"
          fill
          priority
          quality={90}
          className="object-cover object-center sm:hidden"
        />
        {/* Desktop/tablet: fundo hero-bg */}
        <Image
          src="/images/hero-bg.jpeg"
          alt="Casa com painéis solares instalados pela Allure"
          fill
          priority
          quality={95}
          className="hidden sm:block object-cover object-[50%_58%] scale-[1.25] translate-x-[10%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Mobile: justify-between spreads the 3 blocks to fill the hero; sm+ keeps the centered stack */}
        <div className="flex-1 sm:min-h-[calc(78dvh+10px)] flex flex-col justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 text-center sm:text-left">
          {/* Título + descrição agrupados (ficam próximos no mobile) */}
          <div className="mb-10 sm:mb-0">
            {/* Headline */}
            <h1 ref={headlineRef} className="font-display font-semibold tracking-tight text-pretty text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl max-w-3xl opacity-0 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
              <span className="split-me inline-block bg-brand text-white px-4 sm:px-6 py-1 [text-shadow:none] [clip-path:polygon(3%_0%,100%_0%,97%_100%,0%_100%)]">Economize até 90%</span>
              <span className="split-me block">na sua conta de luz</span>
              <span className="line-3 block">com <ShinyText text="energia solar" className="[text-shadow:none] leading-[1.3] pb-[0.12em]" color="#FFD23F" shineColor="#FFF3C8" speed={2.4} delay={0.6} spread={120} /></span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 sm:mt-9 text-lg sm:text-xl text-brand-foreground/75 leading-relaxed max-w-xl mx-auto sm:mx-0 animate-fade-in-up">
              Soluções completas para residências, comércios e indústrias em <span className="font-semibold text-brand-foreground [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">São Carlos e região.</span>
            </p>
          </div>

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
              href="#contato"
              className="inline-flex items-center gap-2 justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-4 sm:px-7 sm:py-5 text-brand-foreground hover:bg-white/20 transition-all duration-300"
            >
              <WhatsAppIcon className="size-7 -my-1" />
              Falar com um especialista
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* Métricas passando — carrossel (mobile), ancorado na base da hero */}
      <div className="sm:hidden relative z-10 w-full overflow-hidden pb-10 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="flex w-max items-center animate-marquee [animation-duration:22s]">
          {[...metrics, ...metrics].map(({ Icon, prefix, to, separator, suffix, label }, i) => (
            <div
              key={i}
              aria-hidden={i >= metrics.length}
              className="mr-3 flex shrink-0 items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-2.5"
            >
              <Icon className="w-5 h-5 text-white shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <p className="font-display font-bold text-sm text-white leading-none whitespace-nowrap">
                  {prefix}
                  <CountUp to={to} separator={separator} duration={1.6} />
                  {suffix}
                </p>
                <p className="mt-0.5 text-[0.65rem] leading-snug text-white/60 whitespace-nowrap">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics — card glass claro ancorado na base da hero (desktop/tablet) */}
      <div className="hidden sm:block relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-9 sm:pb-11">
        <div className="rounded-2xl border border-black/5 bg-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-1 sm:gap-y-0 sm:divide-x sm:divide-black/10 sm:pl-10">
            {metrics.map(({ Icon, prefix, to, separator, suffix, label }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5 min-w-0">
                <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-brand shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="font-display font-bold text-lg sm:text-xl text-foreground leading-none whitespace-nowrap">
                    {prefix}
                    <CountUp to={to} separator={separator} duration={1.6} />
                    {suffix}
                  </p>
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
