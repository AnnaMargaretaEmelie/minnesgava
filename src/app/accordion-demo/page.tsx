"use client";

import { AccordionRoot } from "@/app/_components/accordion/accordion";
import { AccordionItem } from "@/app/_components/accordion/accordionItem";

export default function AccordionDemo() {
  return (
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Vanliga frågor om accordions</h1>
      <h2>Testar h2</h2>
      <h3>Testar h3</h3>
      <h4>Testar h4</h4>
      <AccordionRoot defaultOpenId="faq-1">
        <AccordionItem
          value="faq-1"
          title="Hur fungerar accordions?"
          className="accordion"
        >
          <p>Du klickar, de öppnas, du klickar igen, de stängs. </p>
        </AccordionItem>

        <AccordionItem
          value="faq-2"
          title="Kan flera vara öppna samtidigt?"
          className="accordion accordion__trigger"
        >
          <p>Nej, i denna version bara en åt gången.</p>
        </AccordionItem>

        <AccordionItem
          value="faq-3"
          title="Hur stänger jag alla?"
          className="accordion"
        >
          <p>Klicka på den som är öppen, så stängs den.</p>
        </AccordionItem>
      </AccordionRoot>
      <button className="button">
        <span className="button__label">Klicka</span>
        <span className="button__icon"> →</span>
      </button>
    </section>
  );
}
