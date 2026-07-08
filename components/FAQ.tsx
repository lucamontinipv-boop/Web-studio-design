"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import Reveal from "./Reveal";

type FaqItemProps = {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
};

function Item({ q, a, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-graphite/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-graphite">{q}</span>
        <i
          className={`ti ti-chevron-down text-gold-deep text-lg shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-muted-dark leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-ivory text-graphite">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-gold-deep font-display font-medium mb-4">
            {faq.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">{faq.title}</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div>
            {faq.items.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
