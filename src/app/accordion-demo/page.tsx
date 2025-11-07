"use client";

import { AccordionRoot } from "@/app/_components/accordion/accordion";
import { AccordionItem } from "@/app/_components/accordion/accordionItem";

export default function AccordionDemo() {
  return (
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Vanliga frågor om accordions</h2>

      <AccordionRoot defaultOpenId="faq-1">
        <AccordionItem value="faq-1" title="Hur fungerar accordions?">
          <p>Du klickar, de öppnas, du klickar igen, de stängs. </p>
        </AccordionItem>

        <AccordionItem value="faq-2" title="Kan flera vara öppna samtidigt?">
          <p>Nej, i denna version bara en åt gången.</p>
        </AccordionItem>

        <AccordionItem value="faq-3" title="Hur stänger jag alla?">
          <p>Klicka på den som är öppen, så stängs den.</p>
        </AccordionItem>
      </AccordionRoot>
    </section>
  );
}
