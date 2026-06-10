"use client";

import { Star, MessageCircle, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Testimonial {
  name: string;
  city: string;
  initials: string;
  color: string;
  text: string;
  before: string;
  after: string;
  economy: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendes",
    city: "São Paulo, SP",
    initials: "CM",
    color: "bg-blue-500",
    text: "Estava pagando R$ 780 por mês de energia. Depois da instalação da Allure, minha conta caiu pra menos de R$ 60. Atendimento impecável do início ao fim.",
    before: "R$ 780",
    after: "R$ 58",
    economy: "92%",
  },
  {
    name: "Ana Lima",
    city: "Ribeirão Preto, SP",
    initials: "AL",
    color: "bg-violet-500",
    text: "Fiz a simulação pelo WhatsApp e em menos de 24h já tinha a proposta completa. Instalação rápida e limpa. Recomendo para todo mundo!",
    before: "R$ 920",
    after: "R$ 67",
    economy: "93%",
  },
  {
    name: "Ricardo Ferreira",
    city: "Sorocaba, SP",
    initials: "RF",
    color: "bg-emerald-600",
    text: "Fiquei com medo do investimento no início, mas em menos de 4 anos já me paguei e agora é economia pura todo mês. A Allure me orientou em cada etapa.",
    before: "R$ 1.350",
    after: "R$ 89",
    economy: "93%",
  },
];

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-md border border-gray-100 mb-6">
      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-foreground text-sm">4.9</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#EAB308] text-[#EAB308]" />
          ))}
        </div>
        <span className="text-muted-foreground text-xs hidden sm:inline">· 127 avaliações no Google</span>
        <span className="text-muted-foreground text-xs sm:hidden">· 127 avaliações</span>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 group h-full">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground/70 text-sm sm:text-base leading-relaxed flex-1 mb-5">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-100">
        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}>
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{t.name}</p>
          <p className="text-muted-foreground text-xs">{t.city}</p>
        </div>
      </div>

      {/* Before / After */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center justify-between">
        <div className="text-center">
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Antes</p>
          <p className="font-bold text-red-500 text-sm">{t.before}<span className="text-[10px] font-normal">/mês</span></p>
        </div>
        <span className="text-muted-foreground text-base">→</span>
        <div className="text-center">
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Hoje</p>
          <p className="font-bold text-emerald-600 text-sm">{t.after}<span className="text-[10px] font-normal">/mês</span></p>
        </div>
        <div className="bg-emerald-500 text-white rounded-lg px-2.5 py-1.5 text-center">
          <p className="text-[10px] font-medium leading-none">Economia</p>
          <p className="font-bold text-sm leading-tight">{t.economy}</p>
        </div>
      </div>
    </div>
  );
}

function WhatsAppChat() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Context */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] rounded-full px-4 py-2 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Mensagem real de cliente
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Resultados que falam por si
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            Veja a reação de quem recebeu a primeira conta de luz após a instalação do sistema solar.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-600">93%</p>
              <p className="text-muted-foreground text-xs sm:text-sm">Redução média</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">R$ 1.026</p>
              <p className="text-muted-foreground text-xs sm:text-sm">Economia do Marcos</p>
            </div>
          </div>
        </div>

        {/* Right: WhatsApp Chat */}
        <div className="relative">
          {/* Quote decoration */}
          <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#25D366]/20 hidden lg:block" />
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            {/* WA Header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                M
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm leading-tight">Marcos A.</p>
                <p className="text-white/70 text-xs">Cliente Allure · São José do Rio Preto</p>
              </div>
              <div className="flex gap-4 text-white/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"/>
                </svg>
              </div>
            </div>
            {/* Chat */}
            <div className="bg-[#E5DDD5] p-4 space-y-3">
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                  <p className="text-[#111] text-sm leading-relaxed">
                    Gente!! Recebi minha primeira conta depois da instalação. Caiu de R$1.100 pra R$74!! 
                  </p>
                  <p className="text-[#999] text-[11px] text-right mt-1.5">14:32 ✓✓</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] shadow-sm">
                  <p className="text-[#111] text-sm leading-relaxed">
                    Fico muito feliz em saber, Marcos! Obrigado pela confiança. Seja bem-vindo à família Allure!
                  </p>
                  <p className="text-[#999] text-[11px] text-right mt-1.5">14:35 ✓✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`px-2 sm:px-3 lg:px-4 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <GoogleBadge />
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider block">
              Depoimentos
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mt-3 mb-4">
              O que nossos clientes <span className="gradient-text">dizem</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              Resultados reais de quem já instalou energia solar com a Allure
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-14 stagger-children ${isVisible ? "visible" : ""}`}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
