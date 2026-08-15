import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Exotic pet care services from WildPaws: reptile care and husbandry, avian health, small mammal boarding, exotic grooming, dietary planning, habitat design and in-home sitting.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our services"
            title="Seven services for every scale, feather and whisker"
            subtitle="From daily husbandry to full habitat builds — species-specific, vet-reviewed and delivered without stress."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                      From {s.priceFrom}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                        <ServiceIcon name={s.icon} className="size-5" />
                      </span>
                      <h2 className="font-display text-lg font-bold text-foreground">{s.name}</h2>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Service details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-14 text-center">
            <p className="text-muted-foreground">Not sure which service you need?</p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-4 rounded-full")}
            >
              Talk to a care specialist <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
