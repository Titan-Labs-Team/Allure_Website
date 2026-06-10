"use client";

import Image from "next/image";
import { Clock, Users, BadgeCheck, TrendingDown, ArrowRight, Shield, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

const benefits = [
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    text: "Orçamento 100% gratuito",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Resposta em menos de 5 min",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "Garantia de 25 anos",
  },
];

const stats = [
  { value: "500+", label: "Clientes satisfeitos" },
  { value: "90%", label: "Economia média" },
  { value: "4.9", label: "Avaliação Google" },
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contato"
      className="relative overflow-hidden"
    >
      <div
        ref={ref}
        className={`scroll-animate ${isVisible ? "visible" : ""}`}
      >
        {/* Main Content */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cta-solar-home.png"
              alt="Casa com energia solar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-2 sm:px-3 lg:px-4 py-16 sm:py-20 lg:py-28">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Left: Copy */}
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-white/90 text-sm font-medium">Transforme sua conta de luz</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Pronto para{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60C8F5] to-[#3B82F6]">
                      economizar
                    </span>{" "}
                    na conta de luz?
                  </h2>

                  <p className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed">
                    Junte-se a mais de 500 famílias que já reduziram até 90% da conta de energia com a Allure.
                  </p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.text}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                      >
                        <div className="text-accent">{benefit.icon}</div>
                        <span className="text-white/80 text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons - Mobile */}
                  <div className="lg:hidden space-y-3">
                    <Button
                      size="lg"
                      asChild
                      className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-base rounded-2xl gap-3 h-14 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="w-6 h-6" />
                        Solicitar orçamento grátis
                      </a>
                    </Button>
                    <p className="text-center text-white/40 text-xs">
                      Sem compromisso. Respondemos em minutos.
                    </p>
                  </div>
                </div>

                {/* Right: CTA Card - Desktop */}
                <div className="hidden lg:block">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20 max-w-md ml-auto">
                    {/* Card Header */}
                    <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-100">
                      <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                        <WhatsAppIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">Fale pelo WhatsApp</p>
                        <p className="text-muted-foreground text-sm">Atendimento imediato</p>
                      </div>
                    </div>

                    {/* Savings Display */}
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-5 mb-6 border border-emerald-100">
                      <p className="text-sm text-muted-foreground mb-2">Economia média dos nossos clientes</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">R$ 680</span>
                        <span className="text-muted-foreground">/mês</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <TrendingDown className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 font-medium text-sm">Redução de até 90% na conta</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      asChild
                      className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-lg rounded-2xl gap-3 h-16 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-[1.02] mb-4"
                    >
                      <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="w-6 h-6" />
                        Quero economizar agora
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>

                    {/* Trust Elements */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex -space-x-2">
                        {["bg-blue-500", "bg-violet-500", "bg-emerald-500", "bg-amber-500"].map((color, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white`} />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-sm">
                        <span className="font-semibold text-foreground">+500</span> clientes satisfeitos
                      </span>
                    </div>

                    {/* Privacy */}
                    <p className="text-center text-muted-foreground/60 text-xs mt-4 pt-4 border-t border-gray-100">
                      Seus dados estão seguros. Não enviamos spam.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
