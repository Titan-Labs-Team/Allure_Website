"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar.";

export default function Hero() {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="inicio" className="relative bg-brand text-brand-foreground overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${offset * 0.18}px)` }}>
        <Image
          src="/images/hero-solar.jpeg"
          alt="Casa moderna com painéis solares no telhado"
          fill
          className="object-cover object-center scale-110"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B221B]/85 via-[#0B221B]/55 to-[#0B221B]/92" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B221B]/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="min-h-[92vh] flex flex-col justify-center pt-32 pb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <span className="h-px w-10 bg-brand-3" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-foreground/70 font-medium">
              Engenharia solar premium
            </span>
          </div>

          {/* Headline — asymmetric, two lines */}
          <h1 className="font-display font-semibold tracking-tight text-pretty text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-5xl animate-fade-in-up">
            <span className="block">Sua energia,</span>
            <span className="block text-brand-3">gerada pelo sol.</span>
          </h1>

          {/* Subtitle + CTA on an asymmetric grid */}
          <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <p className="lg:col-span-6 text-lg sm:text-xl text-brand-foreground/75 leading-relaxed max-w-xl">
              Projetamos e instalamos sistemas fotovoltaicos de alto desempenho que reduzem até{" "}
              <span className="text-brand-foreground font-medium">90% da sua conta de luz</span>. Engenharia que transforma luz em patrimônio.
            </p>

            <div className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end items-start sm:items-center gap-5">
              <Button
                size="lg"
                asChild
                className="group w-full sm:w-auto bg-brand-foreground text-brand hover:bg-brand-3 hover:text-brand-foreground font-semibold text-base px-8 h-14 rounded-full gap-2.5 border-0 transition-all duration-300"
              >
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5" />
                  Solicitar orçamento
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>

              <button
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-brand-foreground/60 hover:text-brand-foreground text-sm transition-colors group"
              >
                <span className="w-9 h-9 rounded-full border border-brand-foreground/25 flex items-center justify-center group-hover:border-brand-foreground/60 transition-colors">
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
                Como funciona
              </button>
            </div>
          </div>

          {/* Discreet badge */}
          <div className="mt-12 inline-flex w-fit items-center gap-3 rounded-full glass px-4 py-2.5 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-3 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-3" />
            </span>
            <span className="text-sm text-brand-foreground/85">
              <span className="font-semibold text-brand-foreground">82%</span> dos clientes economizam mais de R$500/mês
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
