"use client";

import { AccordionRoot } from "@/app/_components/accordion/accordion";
import { AccordionItem } from "@/app/_components/accordion/accordionItem";

export default function AccordionDemo() {
  return (
    <section className="page-container">
      <div className="content-container">
        <h1>Ge en minnesgåva vid begravning</h1>
        <p className="hero__ingress">
          En minnesgåva är ett fint sätt att hedra minnet av någon som stått dig
          nära. Din gåva tar den livsviktiga hjärnforskningen mot nya genombrott
          och ett samhälle där alla hjärnor når sin fulla potential, fria från
          sjukdomar.
        </p>
        <AccordionRoot defaultOpenId="faq-1">
          <AccordionItem
            value="faq-1"
            title="1. Minnesblad"
            triggerClassName="accordion accordion__trigger"
            contentClassName="accordion__content"
          >
            <p>Du klickar, de öppnas, du klickar igen, de stängs. </p>
          </AccordionItem>

          <AccordionItem
            value="faq-2"
            title="2. Gåvobelopp"
            triggerClassName="accordion accordion__trigger"
            contentClassName="accordion__content"
          >
            <p>Nej, i denna version bara en åt gången.</p>
          </AccordionItem>

          <AccordionItem
            value="faq-3"
            title="3. Kontaktuppgifter"
            triggerClassName="accordion accordion__trigger"
            contentClassName="accordion__content"
          >
            <p>Klicka på den som är öppen, så stängs den.</p>
          </AccordionItem>
        </AccordionRoot>
        <button className="button">
          <span className="button__label">Klicka</span>
          <span className="button__icon"> →</span>
        </button>
      </div>
    </section>
  );
}
