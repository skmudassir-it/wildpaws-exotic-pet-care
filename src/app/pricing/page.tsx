import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for exotic pet care from WildPaws — husbandry programs, boarding, grooming, nutrition planning and habitat design. Firm quotes, no surprises.",
};

const plans = [
  {
    name: "Care Essentials",
    price: "$75",
    unit: "per visit, from",
    features: [
      "Species-specific husbandry audit",
      "Lighting, heating and humidity check",
      "Wellness review with exotic vet",
      "Feeding and routine adjustments",
      "Care sheet and written report",
      "Priority booking for follow-ups",
    ],
    cta: "Book a visit",
    featured: false,
  },
  {
    name: "Boarding & Sitting",
    price: "$28",
    unit: "per night, from",
    features: [
      "Climate-controlled species suite",
      "Daily greens and species meals",
      "Supervised playtime and handling",
      "Daily photo and video updates",
      "Medication and supplement admin",
      "In-home visits from $45",
    ],
    cta: "Check availability",
    featured: true,
  },
  {
    name: "Build & Transform",
    price: "$450",
    unit: "per habitat, from",
    features: [
      "Custom design consultation",
      "Bioactive substrate and planting",
      "Correct heating and UVB install",
      "Automated misting and lighting",
      "Enrichment and hide placement",
      "30-day settling-in support",
    ],
    cta: "Plan my build",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Honest numbers, firm quotes"
            subtitle="No hourly surprises, no vague ranges. Every visit and build starts with a written quote you approve before we touch a thing."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.09}>
            {plans.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-3xl p-8",
                    p.featured && "border-accent/60 shadow-xl shadow-primary/10"
                  )}
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
                      <Sparkles className="size-3.5" /> Most popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold text-primary">{p.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{p.unit}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-8 w-full rounded-full",
                      p.featured ? "btn-gradient" : "glass border-primary/20 text-primary"
                    )}
                  >
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12">
            <div className="glass-card rounded-3xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Multi-pet and recurring care discounts
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Households with two or more exotic pets save 10% on recurring visits and
                boarding. Monthly habitat-maintenance plans are available for bioactive
                enclosures and aviaries — ask us for a custom quote.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Pricing questions"
            title="What affects your final price"
          />
          <Reveal className="mt-10">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want a firm number for your pet?"
        subtitle="Tell us the species, the setup and what you need — we will respond with a written quote, typically within one business day."
      />
    </>
  );
}
