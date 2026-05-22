# Convention Visitors — Plano de Design Premium

> Plano de evolução visual e arquitetural do site Convention Visitors.
> Inspiração: 40% Art Déco · 30% Bauhaus · 20% Romantismo Contemporâneo · 10% Brutalismo Suave.

---

## 1. Princípios visuais

| Pilar | Aplicação |
|---|---|
| **Art Déco** | Linhas finas douradas, ornamentos geométricos (losangos, cantos com diamante), divisórias com brilho central |
| **Bauhaus** | Grid rigoroso, hierarquia tipográfica clara, alinhamentos matemáticos |
| **Romantismo contemporâneo** | Fotografias cinematográficas com ken-burns, gradientes atmosféricos, sensação de descoberta |
| **Brutalismo suave** | Tipografia display marcante (Playfair Display), contrastes ousados mas controlados |

---

## 2. Sistema de design (tokens)

### Cores
```
--cv-ink: #060f35    /* Azul primário profundo */
--cv-blue: #0a1f6e   /* Azul médio */
--cv-blue-soft: #1a3a8f  /* Azul claro */
--cv-gold: #f5c400   /* Amarelo Art Déco */
--cv-paper: #ffffff
--cv-cream: #f8f9fc  /* Fundo seções claras */
--cv-ink-soft: #333333
```

### Tipografia
- **Display**: Playfair Display 700 — títulos hero e seção
- **Body**: Inter 400/500/600 — corpo, navegação, tags
- **Escala**: `clamp()` responsivo, hierarquia em 8 níveis

### Espaçamento
Base 8px · escala 8/16/24/32/48/80/120

### Border radius
- Navbar / faixas full width: **0px** (reto institucional)
- Cards: **12px**
- Botões CTA: **10px**
- Tags / pills: **999px**

### Sombras
```
--cv-shadow: 0 4px 20px rgba(6, 15, 53, 0.10)
--cv-shadow-hover: 0 8px 40px rgba(6, 15, 53, 0.16)
--cv-shadow-gold: 0 18px 48px rgba(245, 196, 0, 0.32)
```

---

## 3. Ornamentos Art Déco reutilizáveis

| Elemento | Onde usar |
|---|---|
| **Régua dourada com losangos** | Sob títulos de seção, entre divisórias |
| **Cantos diamantados** | Hero, banners institucionais, cards premium |
| **Rail vertical com texto rotacionado** | Hero, banners full width |
| **Underline animado em hover** | Links da navbar, ghost buttons |
| **Linha 1px dourada central** | Top do footer, fim de seção |

---

## 4. Arquitetura CSS modular

### Antes
```
src/app/globals.css → 10.290 linhas (monolítico)
```

### Depois
```
src/styles/
├── variables.css          (tokens de design)
├── reset.css              (CSS reset)
├── typography.css         (hierarquia tipográfica)
├── animations.css         (keyframes globais)
├── breakpoints.css        (vars de media query)
├── refinements.css        (polish Art Déco cross-site)
├── layout/
│   ├── navbar.css         (navegação fixa premium)
│   └── footer.css         (footer institucional)
└── sections/
    └── hero.css           (luxe-hero cinematográfico)

src/app/globals.css        (importa tudo + estilos legados ainda em uso)
```

> **Estratégia**: extrair primeiro os 3 módulos pesados (hero, navbar, footer) que acabamos
> de refinar. Os blocos legados (cards, eventos, blog etc.) ficam em `globals.css` até serem
> migrados em refatorações futuras, mantendo o risco baixo.

---

## 5. Roadmap de refinamento por seção

### ✅ Fase 1 — Concluída
- [x] Hero cinematográfico minimalista (Art Déco + Romantismo)
- [x] Navbar fixa institucional azul escura com underline dourado animado
- [x] Footer 4 colunas com régua dourada e losango central
- [x] Modularização inicial do CSS

### 🎯 Fase 2 — Refinamentos cross-site (esta entrega)
- [x] **Section header** com pequena régua dourada + número de seção elegante
- [x] **Cards de eventos** com canto dourado discreto no hover
- [x] **Tags / chips** uniformes (12px Inter, letter-spacing 0.32em)
- [x] **Botões CTA** consistentes em todo o site (amarelo `#f5c400` / fantasma)
- [x] **Transições de seção** com linha hairline dourada central
- [x] **Cards de associados** com hover gold subtle
- [x] **Blog** com elevation hover refinado

### 📋 Fase 3 — Próximas otimizações sugeridas
- [ ] Migrar seções remanescentes para arquivos modulares (`sections/events.css`, `sections/blog.css` …)
- [ ] Page templates (`/eventos`, `/hospedagens`, `/estabelecimentos/[id]`) seguindo o mesmo sistema
- [ ] Skeleton loading com pulse Art Déco (ornamentos animados)
- [ ] Cursor customizado sutil
- [ ] Marquee de logos institucionais com fade nas pontas
- [ ] Contadores animados na seção institucional (intersection observer)

### 🌟 Fase 4 — Encantamento (longo prazo)
- [ ] Page transitions com Framer Motion (fade + slide elegante)
- [ ] Lightbox de galeria com layout cinematográfico
- [ ] Tema dark/light com toggle ornamentado
- [ ] Pré-load de imagens com blur progressivo

---

## 6. Como impressionar o cliente

Pontos onde o "wow" acontece:

1. **Primeiros 3 segundos** — hero com ken-burns lento na imagem + título Playfair entrando palavra por palavra + cantos dourados Art Déco emergindo
2. **Scroll inicial** — régua dourada com losango sinalizando entrada da próxima seção
3. **Hover nos cards** — micro-interação com sombra azul + escala + linha dourada
4. **Footer** — losango dourado central + linha hairline cruzando = encerramento premium
5. **Mobile** — drawer azul escuro com ornamento dourado (não é genérico)

---

## 7. Acessibilidade + Performance

- Suporte a `prefers-reduced-motion`: animações Ken-burns e scroll-dot desativam
- Contraste WCAG AA em todos os textos sobre fundo escuro
- `aria-label` em ornamentos puramente visuais
- Imagens com lazy loading
- Variáveis CSS centralizadas → 1 token muda 50 lugares
- Fontes via `next/font` (eliminação automática de FOUT)

---

## 8. Como manter daqui pra frente

- Toda nova seção: criar arquivo em `src/styles/sections/<nome>.css`
- Importar no `globals.css` na ordem (variables → reset → typography → animations → componentes → seções → refinements)
- Tokens centralizados em `variables.css` — nunca hardcoded
- Ornamentos via classes utilitárias (`.cv-rule`, `.cv-corner`, etc.) — reuso

---
