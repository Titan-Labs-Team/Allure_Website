# Plano — Diferenciais como roadmap animado (GSAP ScrollTrigger)

> Próxima section a implementar. Ainda NÃO codado — só planejado e aprovado.

## Context

A section "Diferenciais" (`components/why-allure.tsx`) hoje é um grid de 6 cards. Objetivo: transformá-la num **roadmap/timeline vertical animado por scroll** usando GSAP. Conforme o usuário scrola, cada item se revela (fade de opacidade) e uma **linha conectora cresce** acompanhando o scroll até o próximo item. Estrutura de cada item (pedida): **ícone + valor (stat) + título em negrito + texto principal (description)**.

Decisões confirmadas com o usuário:
- **Instalar GSAP** (`npm i gsap`) — ScrollTrigger dá a linha progressiva com scrub de verdade. Projeto hoje só usa CSS keyframes + IntersectionObserver.
- **Timeline vertical central** (zigue-zague esquerda/direita no desktop; 1-coluna com linha à esquerda no mobile).
- **Item featured destacado** (7 dias / Zap) — mesma estrutura de roadmap, mas com cor/badge de marca mais forte.

Dados já existem em `why-allure.tsx` (array `differentials`: 6 itens, cada um `{ Icon, stat, unit, title, description, featured }`). Copy e paleta preservados (regra CLAUDE.md — redesign incremental).

Resultado esperado: mesma section, mesmos 6 dados, apresentada como caminho vertical que "se desenha" conforme o scroll — cada nó aparecendo suave e a linha subindo/preenchendo até o próximo. Sem scroll horizontal novo (respeitar clamp global já existente).

---

## Setup GSAP

- `npm i gsap` (traz `gsap` + `ScrollTrigger` no mesmo pacote, import `gsap/ScrollTrigger`).
- Registro do plugin **client-side** dentro de `useEffect`/`useLayoutEffect` (section já é `"use client"`). Nunca registrar no topo do módulo (SSR do Next quebra).
- Usar `gsap.context()` com cleanup no return do effect (padrão React + GSAP: escopa seletores ao ref e faz `ctx.revert()` no unmount, evitando ScrollTriggers duplicados em re-render/HMR).
- Respeitar `prefers-reduced-motion`: se ativo, pular animação e deixar tudo visível (opacity 1, linha cheia). `gsap.matchMedia()` cobre isso.

## Estrutura do componente reescrito (`components/why-allure.tsx`)

Manter: `<section id="por-que-allure" className="section-py bg-muted bg-dots">`, o header (eyebrow "Diferenciais" + h2 + parágrafo), o array `differentials`, e o `.link-quiet` "Falar com um especialista" no fim. Remover o hook `useScrollAnimation` atual dessa section (o GSAP assume a revelação) — mas manter o wrapper de container `max-w-7xl mx-auto px-5 sm:px-6 lg:px-8`.

Trocar **só o bloco do grid de cards** (`grid sm:grid-cols-2 lg:grid-cols-3 ...`) pela timeline:

```
<div ref={timelineRef} className="relative mx-auto max-w-3xl mt-4">
  {/* Trilho da linha — track cinza de fundo + fill de marca por cima */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" aria-hidden />
  <div ref={lineFillRef} className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-brand origin-top" style={{height:0}} aria-hidden />

  {differentials.map((item, i) => (
    <div key={item.title} className="roadmap-item relative ..."> ... </div>
  ))}
</div>
```

- **Linha central**: dois elementos absolutos no centro (`left-1/2 -translate-x-1/2`), `w-[2px]`, do topo ao fim do container:
  - track: `bg-border` (fixo, sempre visível, cinza claro).
  - fill: `bg-brand`, altura animada de `0` → `100%` via GSAP scrub conforme a section passa pela viewport. É a "linha que acompanha até o próximo item".
- **Mobile**: a linha vai pra `left-5` (à esquerda), itens todos alinhados à direita dela em 1 coluna. Desktop: linha no centro, itens alternando lados.

### Cada item (`.roadmap-item`)
Layout zigue-zague no desktop (`lg:`): itens pares à esquerda, ímpares à direita. Grid de 2 colunas com o conteúdo indo pra coluna 1 ou 2 conforme `i % 2`, e o **nó (dot) no centro** sobre a linha.

Conteúdo do item, na ordem pedida:
1. **Nó/ícone** — círculo sobre a linha central com o `Icon` dentro (`w-12 h-12 rounded-full`, `bg-brand` no featured / `bg-white ring` nos demais). Ponto de ancoragem visual na linha.
2. **Valor (stat + unit)** — `font-display font-bold text-4xl sm:text-5xl text-brand` (featured: `text-brand-2`/badge). Ex: "7 dias", "25 anos", "98%".
3. **Título (negrito)** — `font-display font-semibold text-lg text-foreground`.
4. **Texto principal (description)** — `text-sm text-muted-foreground text-pretty max-w-xs`.

Card do conteúdo: `rounded-2xl bg-white border p-6 card-shadow-sm` (featured: `bg-brand text-white border-brand shadow-brand/20` + badge "Destaque" com `Flame`, reusando o padrão que já existe em `benefits.tsx`). Card de um lado da linha; nó no centro.

## Animação GSAP (dentro do effect)

Dois efeitos, ambos com ScrollTrigger:

1. **Fill da linha (scrub)** — tween que anima `lineFillRef.height` de `0%`→`100%` amarrada ao scroll da timeline:
   ```
   gsap.to(lineFillRef, {
     height: "100%",
     ease: "none",
     scrollTrigger: {
       trigger: timelineRef,
       start: "top 70%",
       end: "bottom 70%",
       scrub: true,
     },
   });
   ```
   A linha "acompanha" o scroll (scrub = ligada ao progresso, não a tempo fixo).

2. **Reveal de cada item (fade + rise)** — `gsap.utils.toArray(".roadmap-item")` e pra cada um um ScrollTrigger que faz `opacity 0→1` + `y 30→0` quando ele entra:
   ```
   items.forEach((el) => {
     gsap.fromTo(el, {opacity:0, y:30}, {
       opacity:1, y:0, duration:0.6, ease:"power2.out",
       scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
     });
   });
   ```
   Essa é a "animação de opacidade mostrando o próximo item".

3. `gsap.matchMedia()` — em `(prefers-reduced-motion: reduce)`: set tudo visível, fill em 100%, sem scrub.

Tudo dentro de `gsap.context(() => {...}, timelineRef)` + `return () => ctx.revert()`.

## Arquivos tocados
- `package.json` / lockfile — `npm i gsap`.
- `components/why-allure.tsx` — reescrever o bloco de cards como timeline + effect GSAP. Header, dados, `.link-quiet` e container preservados.
- (Nenhum outro componente muda. Não mexer em `page.tsx` — a section continua no mesmo lugar.)

## Convenções (CLAUDE.md)
- Copy visível preservada (stats, títulos, descrições idênticos).
- Paleta só com CSS vars existentes (`--brand`, `--brand-2`, `--border`, `--muted`).
- Sem CTA cheio novo — `.link-quiet` do fim mantido.
- Sem scroll horizontal (clamp global já cobre; timeline é vertical).

## Verificação (end-to-end)
1. `npx tsc --noEmit` — sem erros.
2. `npm run dev`, abrir a section Diferenciais:
   - Scrolar devagar: a linha central preenche de cima pra baixo acompanhando o scroll (scrub).
   - Cada item aparece com fade+rise quando entra na viewport; some/reaparece ao scrolar pra trás (toggleActions reverse).
   - Item featured (7 dias) visivelmente destacado.
   - Desktop: zigue-zague em torno da linha central. Mobile: 1-coluna, linha à esquerda, sem overflow horizontal (checar 360/390px).
3. Ativar "Reduce motion" no OS/DevTools → tudo visível estático, linha cheia, sem travar scroll.
4. Desktop das outras sections não regride (mudança isolada em why-allure).
