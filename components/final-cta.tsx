"use client";

import { Clock, Users, Star, Shield } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

const trustPoints = [
  {
    icon: <Shield className="w-4 h-4" />,
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
    icon: <Star className="w-4 h-4" />,
    text: "Avaliação 4.9 ⭐ no Google — 127 avaliações",
  },
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0F172A] to-[#0d2044]"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 relative z-10 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">
              Fale com um especialista
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Pronto para parar de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BB8F5] to-[#3B82F6]">
                pagar caro
              </span>{" "}
              na conta de luz?
            </h2>

            <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              Fale agora com nossa equipe pelo WhatsApp e receba uma simulação gratuita e personalizada. Sem burocracia, sem compromisso.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {trustPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    {point.icon}
                  </div>
                  <span className="text-white/75 text-sm sm:text-base leading-snug">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: action card ── */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10">

            {/* Top stat strip */}
            <div className="grid grid-cols-3 gap-3 mb-7 sm:mb-8">
              {[
                { value: "< 5 min", label: "Resposta" },
                { value: "500+", label: "Clientes" },
                { value: "4.9 ★", label: "Avaliação" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-2xl py-3 px-2 text-center border border-white/10">
                  <p className="font-bold text-white text-sm sm:text-base leading-tight">{s.value}</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <Button
              size="lg"
              asChild
              className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-base sm:text-lg rounded-2xl gap-3 h-14 sm:h-16 shadow-2xl shadow-[#25D366]/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#25D366]/40 mb-4"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                Chamar no WhatsApp agora
              </a>
            </Button>

            {/* Social proof below button */}
            <div className="flex items-center justify-center gap-2 text-white/35 text-xs sm:text-sm">
              <div className="flex -space-x-1.5">
                {["bg-blue-400", "bg-violet-400", "bg-emerald-400", "bg-amber-400"].map((c, i) => (
                  <div key={i} className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${c} border-2 border-white/10`} />
                ))}
              </div>
              <span>+500 clientes já economizando todo mês</span>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mt-6 pt-5">
              <p className="text-center text-white/30 text-[11px] sm:text-xs leading-relaxed">
                Ao entrar em contato você concorda com nossa{" "}
                <span className="underline underline-offset-2 cursor-pointer">
                  política de privacidade
                </span>
                . Não enviamos spam.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
