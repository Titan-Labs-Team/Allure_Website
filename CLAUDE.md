# Allure — Landing Page de Energia Solar

## O que é

Landing page de geração de leads para a Allure, empresa de engenharia solar (residencial, comercial, industrial). Objetivo de negócio único: converter visitante em lead via WhatsApp. Site em português (pt-BR), foco total em conversão — não é institucional, é página de vendas.

## Stack

- **Framework**: Next.js 15 (App Router) + React 19, TypeScript
- **Estilo**: Tailwind v4 (`@tailwindcss/postcss`, não plugin v3) + CSS vars em `app/globals.css`
- **Componentes UI base**: shadcn/ui (Radix primitives) em `components/ui/`
- **Ícones**: `lucide-react`
- **Fontes**: `next/font/google` — Inter (corpo) + Plus Jakarta Sans (display/headlines, trocado de Inter Tight nesta sessão)
- **Animação**: CSS keyframes custom (`globals.css`) + `useScrollAnimation` hook (scroll-reveal), sem lib de animação pesada
- **Analytics**: `@vercel/analytics`

Rodar: `npm run dev` (porta 3000, cai pra 3001 se ocupada). Typecheck: `npx tsc --noEmit`.

## Estrutura da página

`app/page.tsx` renderiza, nesta ordem:

```
Header → Hero → Solutions → HowItWorks → Testimonials → Benefits
→ SavingsCalculator → WhyAllure → FinalCTA → FAQ → Footer → WhatsAppButton
```

Cada section é um componente próprio em `components/*.tsx`, client component (`"use client"`), a maioria usando `useScrollAnimation` pra entrada fade-in-up no scroll.

**Componentes órfãos** (existem no repo, não são importados em `page.tsx`): `equipment-kit.tsx`, `pricing.tsx`, `service-area.tsx`, `solar-kit.tsx`, `timeline.tsx`, `inverter-highlight.tsx`, `cta-banner.tsx`, `stats-bar.tsx`. Provavelmente sobras de iteração anterior — não mexer neles achando que afetam a página ao vivo.

## Design system (`app/globals.css`)

Paleta de marca já definida via CSS vars — não inventar cores novas, usar as que já existem:

- `--brand` (#3B82F6), `--brand-2` (#2563EB, mais escuro/hover), `--brand-3` (#5BB8F5, accent claro), `--brand-muted` (#E7EEFB, fundo tintado)
- `--accent` (#FBB915, amarelo, uso pontual)
- `--background` (#FBFBF8, off-white), `--foreground` (#0C0F0D, quase preto)
- Radius scale: `--radius` base 1rem, com `sm/md/lg/xl/2xl` derivados
- Utilitário `.link-quiet`: CTA secundário discreto (texto + ícone, sem fundo) — criado nesta sessão pra substituir botões repetidos
- Utilitário `.section-py` / `.section-py-lg`: escala de padding vertical padronizada entre sections
- Utilitário `.card-hover` / `.card-shadow-sm` / `.card-shadow-md`: sombra tintada de azul (não preto puro) no hover de cards

CTA do WhatsApp usa link direto `https://wa.me/5517991604404?text=...` (mensagem pré-preenchida por section, cada uma com texto de contexto diferente) — não é modal, não é formulário embutido no link.

## Histórico desta sessão (o que já foi feito)

Branch de trabalho: `feature/redesign-visual-cta-hierarchy` (PR #2 aberto para `main`, ainda não mergeado).

1. **Auditoria de design** (skill `redesign-existing-projects`): identificou fonte genérica (Inter em tudo), 6 CTAs quase idênticos repetidos por section, sombras pretas cruas, hierarquia da hero (stats competindo com headline), FAQ com título "FAQ" gigante fora de escala.
2. **Redesign visual + consolidação de CTA**: fonte trocada pra Plus Jakarta Sans no display; CTAs reduzidos a 2 pontos fortes (hero + formulário do final-cta), todos os outros viraram `.link-quiet`; stats da hero reduzidos visualmente pra não competir com o CTA; sombras tintadas de azul; padding de section normalizado.
3. **Fix de contraste da section "Como Funciona"**: imagem de fundo sem overlay nenhum foi identificada como causa de baixo contraste — adicionado scrim gradiente (radial no desktop, linear no mobile) atrás do conteúdo, blur+opacidade na arte de fundo, `backdrop-blur` nos chips.
4. **Auditoria + fix de responsividade mobile**: `h-screen`→`dvh`, breakpoints inconsistentes entre sections (`md:` vs `lg:` pro mesmo padrão de 3 cards) alinhados, imagem de fundo da "Como Funciona" ganhou tamanho por breakpoint (estava fixo só pra desktop).
5. **Fix de overflow de texto em mobile** (bug real, visto em screenshot): CSS Grid tem `min-width: auto` por padrão — números grandes (`text-5xl`+) em cards de `why-allure.tsx` forçavam a coluna do grid a estourar a viewport em telas estreitas, cortando texto na borda. Corrigido com `min-w-0` + `text-pretty` em todos os componentes de card que seguem o padrão ícone+número+título+descrição (`why-allure`, `benefits`, `how-it-works`, `solutions`, `testimonials`, e os órfãos `equipment-kit`/`pricing` por consistência).
6. **Plano seção-por-seção de colunas mobile** (aprovado via plan mode): decidiu manter a maioria das sections em 1 coluna no mobile (texto longo demais pra 2 colunas a 360px), com 2 exceções que viraram 2/3 colunas: outputs do simulador de economia, e os 3 botões de "tipo de imóvel" no formulário final.
7. **Troca de imagem de fundo**: `paineis1.png` → `solar.png` na section "Como Funciona".
8. **Remodelagem mobile section-a-section + fix de scroll horizontal** (esta sessão, plano em `C:\Users\Gusatvo\.claude\plans\analise-o-claude-md-para-humming-beacon.md`):
   - **Bug de scroll horizontal (raiz)**: `ElectricBorder` (usado no `savings-calculator.tsx`) é `overflow-visible` + glow `scale-110`, sangrava pra fora da tela e, como nem a section nem `html`/`body` clipavam, virava scrollbar da página inteira. Corrigido com (a) clamp global `html, body { overflow-x: hidden; max-width: 100% }` em `globals.css` e (b) `overflow-hidden` na `<section>` do savings-calculator.
   - **Reversão da decisão de 1-coluna**: o usuário achou o empilhamento vertical feio/comprido e pediu colunas/carrossel. Aplicado: **Soluções** e **Depoimentos** viraram carrossel horizontal (scroll-snap, `.no-scrollbar`, hint "Arraste →"); **Como Funciona** virou 3 colunas compactas no mobile (descrição escondida via `hidden sm:block`, linha conectora reativada); **Benefícios** virou bento 1 grande + 2 lado a lado; **Diferenciais** (`why-allure`) virou 2 colunas desde 320px.
   - Utilitário novo `.no-scrollbar` em `globals.css` (esconde scrollbar dos carrosséis). Padrão de carrossel: container `flex md:grid md:grid-cols-3 ... overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0`, card `shrink-0 w-[82%] snap-start md:w-auto`.
9. **Diferenciais → roadmap animado GSAP** (PLANEJADO, ainda não codado — plano em `plan.md` na raiz): timeline vertical central zigue-zague, linha que cresce com scrub, reveal de item por opacidade, featured destacado. Requer `npm i gsap`.

## Convenções aprendidas (seguir daqui pra frente)

- **CTA do WhatsApp**: só 2 pontos de destaque máximo por página (hero + final-cta) — qualquer novo CTA de seção deve ser `.link-quiet`, não botão cheio. Header fica de fora dessa regra (é navegação persistente).
- **Cards com número grande + texto**: sempre `min-w-0` no grid item + `text-pretty` no texto, senão risco de overflow real em mobile (não é hipotético, já aconteceu).
- **Scroll horizontal é bug, nunca aceitar** — `html, body` têm `overflow-x: hidden` global como rede de segurança, mas isso NÃO é desculpa pra deixar elemento vazar. Qualquer coisa `overflow-visible`/`scale-*`/canvas que sangra (ex: `ElectricBorder`) tem que ser contida na section (`overflow-hidden`) na origem. Testar sempre 320/360/390/430px.
- **Mobile agora usa colunas/carrossel, NÃO empilha tudo** (revisão da regra antiga): a decisão anterior de "manter 1-coluna" foi revertida nesta sessão — o usuário quer aproveitar a tela. Texto longo por card → **carrossel** horizontal (padrão de Soluções/Depoimentos). Texto curto (números/stats) → **grid de 2 colunas**. Passos/etapas → 3 colunas compactas escondendo descrição via `hidden sm:block`. Só cair pra 1-coluna quando realmente não couber e não fizer sentido carrossel (ex: formulário do final-cta, accordion do FAQ).
- **Esconder ≠ deletar**: onde o mobile omite texto (ex: descrição em 3-col), usar `hidden sm:block` — o desktop mantém tudo. Nunca remover copy do array de dados.
- **Preservar copy e paleta existentes** — este projeto é redesign incremental, não reescrita. Mudanças de conteúdo (texto visível) só quando pedido explicitamente, e mesmo assim confirmar antes (ex: "FAQ" → "Perguntas frequentes" foi confirmado com o usuário antes de aplicar).
