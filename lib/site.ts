export const siteConfig = {
  name: "Allure Energia Solar",
  shortName: "Allure",
  url: "https://www.allureenergiasolar.com.br",
  title: "Allure Energia Solar | Economize até 90% na Conta de Luz",
  description:
    "Especialistas em energia solar em São Carlos e região. A Allure projeta e instala sistemas fotovoltaicos completos para você economizar até 90% na conta de luz.",
  ogImage: "/images/og-image.jpg",
  locale: "pt_BR",
  phone: "+5516997650595",
  phoneDisplay: "(16) 99765-0595",
  email: "contato@allureenergiasolar.com.br",
  address: {
    street: "Av. Comendador Alfredo Maffei, 1387 — Sala 33",
    locality: "São Carlos",
    region: "SP",
    postalCode: "13561-270",
    country: "BR",
  },
  areaServed: "Brasil",
} as const;

export interface FaqItem {
  question: string;
  answer: string;
}

// Fonte única das perguntas — consumida pela section FAQ (UI) e pelo JSON-LD (FAQPage).
export const faqItems: FaqItem[] = [
  {
    question: "O que precisa para instalar energia solar?",
    answer:
      "Você precisa de um telhado em boas condições, espaço suficiente e boa incidência solar. Nossa equipe realiza uma visita técnica gratuita para avaliar tudo antes de qualquer compromisso.",
  },
  {
    question: "Energia solar funciona em dias nublados?",
    answer:
      "Sim! Os painéis geram energia mesmo em dias nublados, com menor intensidade. O sistema é conectado à rede elétrica, então você usa créditos acumulados nos dias de sol para compensar os dias de menor geração.",
  },
  {
    question: "Posso usar energia solar com ar-condicionado?",
    answer:
      "Sim! O sistema é dimensionado conforme o seu consumo total, incluindo ar-condicionado, chuveiro e qualquer outro aparelho. A ideia é justamente eliminar a sua conta de luz por completo.",
  },
  {
    question: "Qual a vida útil do sistema?",
    answer:
      "Os painéis têm vida útil de mais de 25 anos, mantendo pelo menos 80% da eficiência original. Com manutenção preventiva simples, o sistema pode funcionar por décadas — e o retorno do investimento costuma acontecer entre 3 e 5 anos.",
  },
  {
    question: "Preciso sair da concessionária de energia?",
    answer:
      "Não. O sistema solar é conectado à rede da concessionária. A energia excedente que você gera é injetada na rede e vira créditos que abate sua conta. Você continua com a mesma distribuidora, só que pagando muito menos.",
  },
  {
    question: "É possível financiar energia solar?",
    answer:
      "Sim! Trabalhamos com linhas de financiamento em até 72 parcelas e 120 dias de carência para começar a pagar. Na maioria dos casos, a parcela mensal é menor do que a economia gerada na conta de luz — ou seja, você já começa economizando desde o primeiro mês.",
  },
];
