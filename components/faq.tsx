"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que precisa para instalar energia solar?",
    answer: "Você precisa de um telhado em boas condições, espaço suficiente e boa incidência solar. Nossa equipe realiza uma visita técnica gratuita para avaliar tudo antes de qualquer compromisso.",
  },
  {
    question: "Energia solar funciona em dias nublados?",
    answer: "Sim! Os painéis geram energia mesmo em dias nublados, com menor intensidade. O sistema é conectado à rede elétrica, então você usa créditos acumulados nos dias de sol para compensar os dias de menor geração.",
  },
  {
    question: "Posso usar energia solar com ar-condicionado?",
    answer: "Sim! O sistema é dimensionado conforme o seu consumo total, incluindo ar-condicionado, chuveiro e qualquer outro aparelho. A ideia é justamente eliminar a sua conta de luz por completo.",
  },
  {
    question: "Qual a vida útil do sistema?",
    answer: "Os painéis têm vida útil de mais de 25 anos, mantendo pelo menos 80% da eficiência original. Com manutenção preventiva simples, o sistema pode funcionar por décadas — e o retorno do investimento costuma acontecer entre 3 e 5 anos.",
  },
  {
    question: "Preciso sair da concessionária de energia?",
    answer: "Não. O sistema solar é conectado à rede da concessionária. A energia excedente que você gera é injetada na rede e vira créditos que abate sua conta. Você continua com a mesma distribuidora, só que pagando muito menos.",
  },
  {
    question: "É possível financiar energia solar?",
    answer: "Sim! Trabalhamos com linhas de financiamento em até 84 parcelas. Na maioria dos casos, a parcela mensal é menor do que a economia gerada na conta de luz — ou seja, você já começa economizando desde o primeiro mês.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-muted">
      <div
        ref={ref}
        className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky header card */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 rounded-3xl bg-brand text-brand-foreground p-8 lg:p-10 overflow-hidden relative">
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-3 font-semibold">
                    Dúvidas frequentes
                  </span>
                </div>
                <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] text-brand-foreground">
                  Tudo que você precisa saber.
                </h2>
                <p className="text-brand-foreground/70 leading-relaxed mt-5 mb-8">
                  Ainda com dúvidas? Nossa equipe técnica responde em minutos pelo WhatsApp.
                </p>
                <Button
                  asChild
                  className="group w-full bg-accent text-accent-foreground hover:brightness-105 font-semibold gap-2.5 rounded-full h-13 border-0 shadow-lg shadow-accent/25"
                >
                  <a
                    href="https://wa.me/5517991604404?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20energia%20solar."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Tirar minha dúvida
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border px-5 sm:px-7 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display text-foreground hover:text-brand-2 py-5 sm:py-6 text-base sm:text-lg font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 sm:pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
