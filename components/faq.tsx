"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <section className="py-14 sm:py-20 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-3 sm:mb-6">
            Principais <span className="gradient-text">dúvidas</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre energia solar residencial
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted rounded-2xl border-none px-4 sm:px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-secondary py-4 sm:py-5 text-sm sm:text-base lg:text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 sm:pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
