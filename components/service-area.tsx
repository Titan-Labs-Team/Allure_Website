"use client";

import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Gostaria%20de%20confirmar%20se%20voc%C3%AAs%20atendem%20a%20minha%20cidade.";

const cities = [
  "São José do Rio Preto",
  "Mirassol",
  "Bady Bassitt",
  "Cedral",
  "Ipiguá",
  "Guapiaçu",
  "Onda Verde",
  "Tanabi",
  "Neves Paulista",
  "Olímpia",
  "Catanduva",
  "Votuporanga",
  "Fernandópolis",
  "José Bonifácio",
  "Urupês",
];

export default function ServiceArea() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#071626]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-white/60 font-semibold">
                Área de atendimento
              </span>
              <span className="h-px w-8 bg-white/30" />
            </div>
            <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl text-white mb-4">
              Atendemos sua região com equipe própria.
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 max-w-md">
              Nossa equipe técnica cobre toda a região de São José do Rio Preto e cidades vizinhas — do projeto à instalação, sem terceiros.
            </p>
            <Button
              size="lg"
              asChild
              className="group bg-white text-brand hover:bg-white/90 font-semibold text-lg px-12 h-16 rounded-full gap-3 border-0 shadow-lg shadow-black/20"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-7" />
                Confirmar minha cidade
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          {/* Right — city chips */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40 font-medium mb-4">
              Cidades atendidas
            </p>
            <div className={`flex flex-wrap gap-2 stagger-children ${isVisible ? "visible" : ""}`}>
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-medium px-3.5 py-1.5 rounded-full"
                >
                  <MapPin className="w-3 h-3 text-white/50 flex-shrink-0" strokeWidth={2.5} />
                  {city}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/50 text-sm font-medium px-3.5 py-1.5 rounded-full">
                + outras regiões
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
