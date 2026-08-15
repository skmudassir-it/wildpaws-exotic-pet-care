import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/services";
import { Reveal } from "@/components/motion";

export function FaqAccordion() {
  return (
    <Reveal>
      <Accordion type="single" collapsible className="glass-card rounded-3xl px-2 sm:px-4" defaultValue="">
        {faqs.map((f, i) => (
          <AccordionItem key={f.question} value={`faq-${i}`} className="px-3">
            <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:text-primary">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
