import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/services";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from WildPaws Exotic Pet Care: custom aviary builds, clinic reptile wards and small mammal boarding suites across the Portland metro.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Case studies"
            title="Good intentions, turned into correct habitats"
            subtitle="A few recent builds and programs that show how we think — species-first engineering, honest pricing and finished on schedule."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article
                id={p.slug}
                className={`glass-card grid items-center gap-8 overflow-hidden rounded-3xl p-6 sm:p-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden rounded-2xl sm:h-72">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <Badge className="absolute left-4 top-4 bg-white/85 text-primary backdrop-blur">
                    {p.category}
                  </Badge>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    <MapPin className="size-3.5" /> {p.location}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-6 grid grid-cols-3 gap-4">
                    {p.stats.map((s) => (
                      <div key={s.label} className="rounded-2xl bg-primary/5 px-3 py-3 text-center">
                        <dd className="font-display text-lg font-bold text-primary">{s.value}</dd>
                        <dt className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          {s.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Your project"
            title="Next case study could be yours"
            subtitle="Whether you are rehoming one rescue or outfitting an entire clinic, we would love to talk."
          />
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {[
              { k: "1", v: "Tell us about your pet and setup — we reply within one business day." },
              { k: "2", v: "We assess the habitat or program and give you a firm written quote." },
              { k: "3", v: "We build, train and hand over — with a 30-day settling-in support window." },
            ].map((s) => (
              <StaggerItem key={s.k}>
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent/20 font-display text-lg font-bold text-accent-foreground">
                    {s.k}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-display text-lg font-bold text-accent hover:underline"
            >
              Start your project <ArrowRight className="size-5" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
