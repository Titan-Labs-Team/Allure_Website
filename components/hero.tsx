"use client";

import Image from "next/image";
import { CheckCircle2, Star, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar.";

const benefits = [
  "Economize até 90% na conta de luz",
  "Retorno do investimento em 3-5 anos",
  "Equipamentos com garantia de 25 anos",
];

const stats = [
  { value: "500+", label: "Projetos instalados" },
  { value: "10+", label: "Anos de experiência" },
  { value: "4.9", label: "Avaliação média", icon: <Star className="w-3 h-3 fill-[#EAB308] text-[#EAB308] inline mb-0.5" /> },
  { value: "25 anos", label: "Garantia" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Background Image */}
      <div className="relative h-[95vh] min-h-[620px] max-h-[940px]">
        <Image
          src="/images/hero-solar.jpg"
          alt="Casa moderna com painéis solares"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Floating badge — bottom-right, fora do fluxo do conteúdo */}
        <div className="absolute bottom-20 sm:bottom-16 right-6 md:right-12 lg:right-20 xl:right-28 z-10 hidden xs:flex sm:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-2">
          <Zap className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span className="text-white/90 text-xs font-medium whitespace-nowrap">
            +500 famílias já economizando
          </span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center pt-14 sm:pt-16 pb-16 sm:pb-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
            <div className="max-w-lg lg:max-w-xl border-l-2 border-white/20 pl-5 sm:pl-6">

              {/* Heading */}
              <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                Chega de pagar caro{" "}
                <span className="italic font-normal block sm:inline">
                  na conta de luz.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-white/75 mb-4 sm:mb-6 leading-relaxed max-w-md">
                Instale energia solar com quem tem mais de 10 anos de experiência. Orçamento 100% gratuito e sem compromisso.
              </p>

              {/* Benefits */}
              <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 shrink-0" />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-b from-[#1A4BAF] to-[#5BB8F5] text-white font-bold text-base sm:text-lg px-8 sm:px-10 rounded-full gap-2.5 h-13 sm:h-14 border-0 shadow-2xl shadow-blue-900/40 transition-all duration-300 hover:brightness-110 hover:scale-[1.02] hover:shadow-blue-500/40"
              >
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5" />
                  Solicitar orçamento grátis
                </a>
              </Button>

              {/* Secondary text link */}
              <button
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-1.5 text-white/50 hover:text-white/80 text-xs sm:text-sm mt-4 transition-colors group"
              >
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Ver como funciona
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Stats Bar */}
      <div className="relative z-20 -mt-6 sm:-mt-8">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center py-3.5 sm:py-5 px-3 sm:px-6"
                >
                  <span className="text-base sm:text-xl font-bold text-foreground">
                    {stat.value}{stat.icon ? " " : ""}{stat.icon}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
