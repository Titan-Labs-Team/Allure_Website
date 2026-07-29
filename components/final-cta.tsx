"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, DollarSign, ShieldCheck, Home, Building2, Factory, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/glow-border";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5516997650595?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20gratuito.";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "" });
  const [sent, setSent] = useState<boolean>(false);


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

    window.open(`https://wa.me/5516997650595?text=${encodeURIComponent(text)}`, "_blank");
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contato" className="relative overflow-hidden bg-white text-foreground">
      {/* Textura de pontos bem discreta no topo (sem manchas azuis) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-dots opacity-20 [mask-image:linear-gradient(to_bottom,#000,transparent)]" aria-hidden />

      <div ref={ref} className={`relative z-10 px-5 sm:px-6 lg:px-8 section-py-lg scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-6 items-stretch">
          {/* A: pill + título + parágrafo */}
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3.5 py-1.5 mb-5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-brand-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand text-white shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                Orçamento 100% gratuito
              </span>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.04]">
                Pronto para gerar a{" "}
                <span className="bg-gradient-to-r from-brand to-brand-3 bg-clip-text text-transparent">
                  sua própria energia?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Deixe seus dados e um especialista entra em contato com um projeto personalizado para o seu consumo.
              </p>
          </div>

          {/* B: ícones + social proof (no mobile vem DEPOIS do formulário) */}
          <div className="min-w-0 order-last lg:order-none lg:col-start-1 lg:row-start-2">
              {/* Feature highlights — divisórias em gradiente com pontinho central */}
              <div className="grid grid-cols-3 mb-6">
                {[
                  { Icon: DollarSign, title: "Até 90% de economia", desc: "na sua conta de luz" },
                  { Icon: Clock, title: "Resposta em até\n24 horas", desc: "rápido e sem burocracia" },
                  { Icon: ShieldCheck, title: "Projetos seguros e personalizados", desc: "para sua casa, empresa ou indústria" },
                ].map(({ Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className={`relative flex flex-col items-center text-center px-2 sm:px-3 ${
                      i > 0
                        ? "before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-gradient-to-b before:from-transparent before:via-brand/40 before:to-transparent before:content-[''] after:absolute after:left-0 after:top-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-brand/60 after:shadow-[0_0_6px_rgba(59,130,246,0.5)] after:content-['']"
                        : ""
                    }`}
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-muted mb-3">
                      <Icon className="w-5 h-5 text-brand" strokeWidth={1.9} />
                    </span>
                    <p className="font-display font-semibold text-sm text-foreground leading-snug text-pretty whitespace-pre-line">{title}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-1 text-pretty">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 px-5 py-5 mb-6 rounded-2xl border border-border bg-white shadow-sm animate-float motion-reduce:animate-none">
                <div className="flex -space-x-2.5 shrink-0">
                  {([
                    { name: "Mi Devecchi", photo: "/images/d1.png" },
                    { name: "Emerson Andreazi", photo: "/images/d2.png" },
                    { name: "Bruno Meftefundes", photo: "/images/d3.jpg" },
                    { initials: "+1.200", bg: "#2563EB" },
                  ] as ({ name: string; photo: string } | { initials: string; bg: string })[]).map((person) =>
                    "photo" in person ? (
                      <div
                        key={person.name}
                        className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shrink-0"
                      >
                        <Image
                          src={person.photo}
                          alt={person.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div
                        key={person.initials}
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shrink-0 tracking-tight"
                        style={{ backgroundColor: person.bg }}
                      >
                        {person.initials}
                      </div>
                    )
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-lg font-semibold text-foreground ml-1.5">5.0</span>
                  </div>
                  <p className="text-base text-muted-foreground leading-snug">+1.200 famílias já economizam com a Allure</p>
                </div>
              </div>
          </div>

          {/* Form (cadastro) — mobile: acima dos ícones; desktop: coluna direita */}
          <div className="min-w-0 relative bg-muted text-foreground rounded-2xl p-6 sm:p-10 shadow-lg lg:col-start-2 lg:row-start-1 lg:row-span-2">
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
                    <label key={value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="property-type"
                        value={value}
                        checked={form.type === value}
                        onChange={() => setForm((f) => ({ ...f, type: value }))}
                        className="peer sr-only"
                      />
                      <div className="relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-border bg-white px-2 py-4 text-center transition-colors
                        hover:border-brand/50
                        peer-checked:border-brand peer-checked:bg-brand-muted/40
                        before:absolute before:top-2.5 before:left-2.5 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-muted-foreground/40 before:bg-white before:transition-all before:content-['']
                        peer-checked:before:border-brand peer-checked:before:bg-brand peer-checked:before:shadow-[inset_0_0_0_2px_#fff]">
                        <Icon className="w-6 h-6 text-brand shrink-0" strokeWidth={1.6} />
                        <span className="text-xs sm:text-sm font-medium text-foreground">{value}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="group w-full bg-brand text-brand-foreground hover:bg-brand-2 font-semibold text-base sm:text-lg rounded-full gap-2.5 whitespace-normal h-auto min-h-14 sm:min-h-16 py-3 shadow-[0_8px_24px_-14px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_30px_-12px_rgba(59,130,246,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {sent ? "Abrindo o WhatsApp..." : "Solicitar Orçamento Agora!"}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-muted-foreground text-xs">
                <span>Prefere falar agora?</span>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-2 font-medium hover:underline">
                  <WhatsAppIcon className="w-4 h-4" />
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
