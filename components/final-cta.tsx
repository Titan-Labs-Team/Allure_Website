"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, BadgeCheck, Home, Building2, Factory, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/glow-border";
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
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "" });
  const [sent, setSent] = useState<boolean>(false);
  const [activeGuarantee, setActiveGuarantee] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveGuarantee((prev) => (prev + 1) % guarantees.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = "Olá! Vim pelo site e gostaria de um orçamento de energia solar.";
    setSent(true);

    const leadPayload = JSON.stringify({ name: form.name, phone: form.phone, email: form.email || undefined });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/lead", new Blob([leadPayload], { type: "application/json" }));
    } else {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: leadPayload,
        keepalive: true,
      }).catch(() => {});
    }

    window.open(`https://wa.me/5517991604404?text=${encodeURIComponent(text)}`, "_blank");
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contato" className="bg-white bg-glow-top text-foreground">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 section-py-lg scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Copy — min-w-0: grid items default to min-width:auto and refuse to shrink */}
          <div className="min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-muted-foreground font-medium">
                  Fale com a Allure
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.04]">
                Pronto para gerar a sua própria energia?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-6">
                Deixe seus dados e um especialista entra em contato com um projeto personalizado para o seu consumo.
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-4 py-5 mb-5 border-y border-border/50">
                <div className="flex -space-x-2.5 shrink-0">
                  {[
                    { initials: "MS", bg: "#3B82F6" },
                    { initials: "AR", bg: "#1D4ED8" },
                    { initials: "FO", bg: "#2563EB" },
                    { initials: "LC", bg: "#60A5FA" },
                  ].map(({ initials, bg }) => (
                    <div
                      key={initials}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm font-semibold text-foreground ml-1.5">4.9</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">+1.200 famílias já economizam com a Allure</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 h-7">
                <BadgeCheck className="w-4 h-4 text-brand-2 flex-shrink-0" strokeWidth={2.2} />
                <span
                  className="text-sm text-foreground/80 transition-opacity duration-300"
                  style={{ opacity: fade ? 1 : 0 }}
                >
                  {guarantees[activeGuarantee]}
                </span>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="min-w-0 relative bg-muted text-foreground rounded-2xl p-6 sm:p-10 shadow-lg">
            <div className="pointer-events-none absolute inset-0 size-full rounded-[inherit] border-[3.5px] border-brand/50" />
            <ShineBorder shineColor={["#1D4ED8", "#3B82F6", "#93C5FD", "#3B82F6", "#1D4ED8"]} duration={4} borderWidth={3.5} />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo <span className="text-brand">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Como podemos te chamar?"
                  className="w-full h-13 px-4 rounded-xl bg-white border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-2 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone / WhatsApp <span className="text-brand">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="(00) 00000-0000"
                  className="w-full h-13 px-4 rounded-xl bg-white border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-2 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail <span className="text-muted-foreground font-normal">(opcional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="voce@email.com"
                  className="w-full h-13 px-4 rounded-xl bg-white border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-2 focus:border-transparent transition"
                />
              </div>

              {/* Tipo de imóvel */}
              <div>
                <p className="block text-sm font-medium text-foreground mb-2.5">Tipo de imóvel</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {[
                    { value: "Casa", Icon: Home },
                    { value: "Empresa", Icon: Building2 },
                    { value: "Indústria", Icon: Factory },
                  ].map(({ value, Icon }) => (
                    <label key={value} className="relative flex cursor-pointer overflow-hidden min-w-0">
                      <input
                        type="radio"
                        name="property-type"
                        value={value}
                        checked={form.type === value}
                        onChange={() => setForm((f) => ({ ...f, type: value }))}
                        className="peer absolute left-[-9999px]"
                      />
                      {/* Mobile: no radio circle (checked state = bg-brand), tighter text; sm+: full pill with circle */}
                      <span className="flex items-center justify-center gap-1 sm:gap-1.5 w-full rounded-[20px] py-2 sm:py-1.5 px-1.5 sm:pl-1.5 sm:pr-3 text-xs sm:text-sm text-muted-foreground duration-200 ease-linear
                        before:hidden sm:before:flex before:h-5 before:w-5 before:shrink-0 before:rounded-full before:border-2 before:border-solid before:border-muted-foreground/50 before:bg-white before:shadow-[inset_0_0_0_0_0.125em_transparent] before:duration-200 before:ease-linear before:content-['']
                        hover:bg-border/60
                        peer-checked:bg-brand peer-checked:text-white peer-checked:before:border-white/60 peer-checked:before:shadow-[inset_0_0_0_4px_rgba(255,255,255,0.6)]">
                        <Icon className="w-4 h-4 shrink-0" strokeWidth={1.6} />
                        <span className="truncate">{value}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="group w-full bg-brand text-brand-foreground hover:bg-brand-2 font-semibold text-base sm:text-lg rounded-full gap-2.5 whitespace-normal h-auto min-h-14 sm:min-h-16 py-3 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.55)] hover:shadow-[0_24px_60px_-10px_rgba(59,130,246,0.65)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsAppIcon className="size-6" />
                {sent ? "Abrindo o WhatsApp..." : "Solicitar orçamento gratuito"}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground text-xs pt-1">
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
