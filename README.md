# web-studiodesign — Next.js

Versione convertita da React/Vite a **Next.js App Router**, con struttura ordinata simile al progetto `kaiemi-next`.

## Struttura

```txt
app/
  layout.tsx        metadata, font, icone, layout globale
  page.tsx          assembla le sezioni della landing
  globals.css       Tailwind + CSS custom

components/
  Header.tsx
  Hero.tsx
  Problem.tsx
  Portfolio.tsx
  Process.tsx
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
  AutoScroller.tsx
  ImageWithFallback.tsx
  Reveal.tsx

data/
  content.ts        testi, link WhatsApp, card, progetti, FAQ

public/images/      immagini ottimizzate WebP
```

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build produzione

```bash
npm run build
```

Il progetto è configurato con `output: "export"`, quindi il build genera la cartella `out/`, pronta per deploy statico.

## Deploy su Netlify

### Opzione drag & drop
1. Esegui `npm run build`
2. Trascina la cartella `out/` su Netlify

### Opzione Git
- Build command: `npm run build`
- Publish directory: `out`

## Dove modificare

- Testi e sezioni: `data/content.ts`
- Colori e font Tailwind: `tailwind.config.ts`
- CSS custom e marquee: `app/globals.css`
- Componenti/sezioni: `components/`
