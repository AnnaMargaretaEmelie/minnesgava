"use client";

import { AccordionRoot } from "@/app/_components/accordion/accordion";
import { AccordionItem } from "@/app/_components/accordion/accordionItem";
import Step1Content from "../_components/steps/memorial-page-step/Step1Content";

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
          <AccordionItem value="faq-1" title="1. Minnesblad">
            <h3>Vem vill du hedra?</h3>
            <p>
              Sök efter personen genom att fylla i namnet, så skickar vi
              minnesbladet direkt till begravningsbyrån.
            </p>
            <Step1Content />
            <div className="accordion__button-row">
              <button className="button">
                <span className="button__label">Välj belopp</span>
                <span className="button__icon"> →</span>
              </button>
            </div>
          </AccordionItem>

          <AccordionItem value="faq-2" title="2. Gåvobelopp">
            <p>Nej, i denna version bara en åt gången.</p>
          </AccordionItem>

          <AccordionItem value="faq-3" title="3. Kontaktuppgifter">
            <p>Klicka på den som är öppen, så stängs den.</p>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </section>
  );
}
