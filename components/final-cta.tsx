"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20gratuito.";

const guarantees = [
  "Orçamento 100% gratuito",
  "Resposta em minutos",
  "Sem compromisso",
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Sou ${form.name}. Telefone: ${form.phone}. E-mail: ${form.email}. Gostaria de um orçamento de energia solar.`;
    setSent(true);
    window.open(`https://wa.me/5517991604404?text=${encodeURIComponent(text)}`, "_blank");
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contato" className="bg-brand text-brand-foreground">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-3" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-foreground/70 font-medium">
                Fale com a Allure
              </span>
            </div>
            <h2 className="font-display font-semibold tracking-tight text-pretty text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.04]">
              Pronto para gerar a sua própria energia?
            </h2>
            <p className="text-brand-foreground/70 text-lg leading-relaxed max-w-md mb-9">
              Deixe seus dados e um especialista entra em contato com um projeto personalizado para o seu consumo.
            </p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-2.5 text-brand-foreground/85">
                  <span className="w-5 h-5 rounded-full bg-brand-3/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm">{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-brand-foreground text-foreground rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/30">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Como podemos te chamar?"
                  className="w-full h-13 px-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-2 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefone / WhatsApp</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="(00) 00000-0000"
                  className="w-full h-13 px-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-2 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="voce@email.com"
                  className="w-full h-13 px-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-2 focus:border-transparent transition"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="group w-full bg-brand text-brand-foreground hover:bg-brand-2 font-semibold rounded-full gap-2.5 h-14"
              >
                {sent ? "Abrindo o WhatsApp..." : "Solicitar orçamento gratuito"}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs pt-1">
                <WhatsAppIcon className="w-4 h-4 text-brand-2" />
                <span>Prefere falar agora?</span>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-brand-2 font-medium hover:underline">
                  Chamar no WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
