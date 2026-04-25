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
    question: "O que precisa para instalar energia solar residencial?",
    answer: "Para instalar energia solar, você precisa ter um telhado em boas condições (com espaço suficiente e boa incidência solar), ser o titular da conta de energia ou ter autorização do titular, e ter uma instalação elétrica adequada. Nossa equipe faz uma análise completa antes de iniciar o projeto.",
  },
  {
    question: "Precisa de sol o dia todo para funcionar?",
    answer: "Não! Os painéis solares funcionam com luz solar, não com calor. Mesmo em dias parcialmente nublados, o sistema continua gerando energia. O dimensionamento considera a média anual de radiação solar da sua região.",
  },
  {
    question: "Energia solar funciona em dias nublados?",
    answer: "Sim, os painéis solares continuam gerando energia mesmo em dias nublados, embora com menor eficiência. O sistema é conectado à rede elétrica, então você utiliza os créditos acumulados em dias de menor geração.",
  },
  {
    question: "Posso instalar em qualquer tipo de telhado?",
    answer: "A maioria dos telhados pode receber painéis solares, incluindo telhas de cerâmica, fibrocimento, metálicas e lajes. Cada tipo requer um sistema de fixação específico. Nossa equipe avalia as condições do seu telhado e projeta a melhor solução.",
  },
  {
    question: "Qual a vida útil de um sistema de energia solar?",
    answer: "Os painéis solares têm vida útil de mais de 25 anos, mantendo pelo menos 80% da eficiência original após esse período. Os inversores duram em média 12 a 15 anos. Com manutenção adequada, o sistema pode funcionar por décadas.",
  },
  {
    question: "Posso usar energia solar com ar-condicionado?",
    answer: "Sim! A energia solar pode alimentar todos os equipamentos da sua casa ou empresa, incluindo ar-condicionado. O sistema é dimensionado de acordo com seu consumo total, garantindo que você produza energia suficiente para todos os aparelhos.",
  },
  {
    question: "Preciso sair da concessionária de energia?",
    answer: "Não. O sistema solar é conectado à rede da concessionária através de um processo chamado homologação. A energia excedente gerada é injetada na rede e se transforma em créditos que são abatidos da sua conta de luz.",
  },
  {
    question: "E se eu me mudar de casa, posso levar o sistema?",
    answer: "Sim, é possível transferir o sistema para outro imóvel, embora isso envolva custos de desinstalação, transporte e reinstalação. Muitos clientes optam por valorizar o imóvel atual e negociar o valor do sistema na venda.",
  },
  {
    question: "É possível financiar energia solar residencial?",
    answer: "Sim! A Allure trabalha com diversas linhas de financiamento, incluindo CDC, empréstimo com garantia de imóvel, e linhas específicas para energia solar com taxas diferenciadas. Oferecemos parcelamento em até 84x, e as parcelas costumam ser menores que a economia na conta de luz.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Principais <span className="gradient-text">dúvidas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre energia solar residencial
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted rounded-2xl border-none px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-secondary py-5 text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
