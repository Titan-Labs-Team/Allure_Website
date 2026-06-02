"use client";

import { Clock, Users, BadgeCheck, TrendingDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

const trustPoints = [
  {
    icon: <BadgeCheck className="w-4 h-4" />,
    text: "Orçamento 100% gratuito e sem compromisso",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    text: "Respondemos em menos de 5 minutos",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "Mais de 500 clientes atendidos com sucesso",
  },
  {
    icon: <TrendingDown className="w-4 h-4" />,
    text: "Economia média de R$ 680 por mês na conta de luz",
  },
];

const cardStats = [
  { value: "< 5 min", label: "Resposta" },
  { value: "500+", label: "Clientes" },
  { value: "4.9 ★", label: "Google" },
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#060f1e] via-[#0F172A] to-[#071529]"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/4 pointer-events-none" />
      {/* Glow behind card */}
      <div className="absolute top-1/2 right-[10%] w-80 h-80 bg-[#25D366]/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 relative z-10 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-5">
              <span className="w-4 h-px bg-accent inline-block" />
              Fale com um especialista
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Pronto para parar de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60C8F5] to-[#3B82F6]">
                pagar caro
              </span>{" "}
              na conta de luz?
            </h2>

            {/* Savings highlight */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-7 w-fit">
              <div>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mb-0.5">Economia média dos clientes</p>
                <p className="text-2xl sm:text-3xl font-bold text-white leading-none">
                  R$ 680<span className="text-base sm:text-lg font-normal text-white/50">/mês</span>
                </p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mb-0.5">Redução na conta</p>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 leading-none">90%</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {trustPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    {point.icon}
                  </div>
                  <span className="text-white/65 text-sm sm:text-base leading-snug">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: white action card ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 ring-1 ring-black/5">

            {/* Card header */}
            <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-gray-100">
              <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30 flex-shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm sm:text-base leading-tight">Fale pelo WhatsApp</p>
                <p className="text-muted-foreground text-xs mt-0.5">Atendimento rápido · Sem compromisso</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {cardStats.map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl py-3 px-2 text-center border border-gray-100">
                  <p className="font-bold text-foreground text-sm sm:text-base leading-tight">{s.value}</p>
                  <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              asChild
              className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-base sm:text-lg rounded-2xl gap-3 h-14 sm:h-16 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#25D366]/50 mb-5"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                Chamar no WhatsApp agora
              </a>
            </Button>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <div className="flex -space-x-2">
                {["bg-blue-400", "bg-violet-400", "bg-emerald-400", "bg-amber-400"].map((c, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-white shadow-sm`} />
                ))}
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm">+500 clientes economizando</span>
            </div>

            {/* Privacy note */}
            <p className="text-center text-muted-foreground/50 text-[10px] sm:text-xs leading-relaxed border-t border-gray-100 pt-4">
              Seus dados estão seguros. Não enviamos spam.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
