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
    <section className="py-16 sm:py-20 lg:py-24 bg-muted bg-dots">
      <div
        ref={ref}
        className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Centered header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-3" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-semibold">
                Dúvidas frequentes
              </span>
              <span className="h-px w-10 bg-brand-3" />
            </div>
            <h2 className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl text-foreground mb-4">
              FAQ
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Ainda com dúvidas? Nossa equipe técnica responde em minutos pelo WhatsApp.
            </p>
          </div>

          {/* Accordion */}
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

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="group bg-brand text-brand-foreground hover:bg-brand-2 font-semibold text-lg px-12 h-16 rounded-full gap-3 border-0 shadow-lg shadow-brand/25"
            >
              <a
                href="https://wa.me/5517991604404?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20energia%20solar."
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-7" />
                Tirar minha dúvida
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
