import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "WildPaws Exotic Pet Care — Reptiles, Birds & Small Mammals",
  description:
    "Veterinary-supervised exotic pet care for reptiles, birds and small mammals. Husbandry, boarding, grooming, habitat design and in-home sitting across the Portland metro.",
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Vet-supervised",
    text: "Every care plan is reviewed with our partner exotic veterinarians, and we coordinate directly with your regular vet.",
  },
  {
    icon: Clock,
    title: "Patient by design",
    text: "We never rush an exotic pet. Sessions are short, positive and built around trust — your pet sets the pace.",
  },
  {
    icon: HeartHandshake,
    title: "Species-obsessed",
    text: "Reptiles, birds and small mammals are not small dogs. Our training is species-specific, from UVB gradients to hay racks.",
  },
  {
    icon: CheckCircle2,
    title: "Licensed & insured",
    text: "Fully licensed, bonded and insured — with background-checked sitters and a 100% safe-handling record.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WildPaws Exotic Pet Care",
  description:
    "Veterinary-supervised exotic pet care: husbandry programs, avian health, small mammal boarding, grooming, dietary planning, habitat design and in-home sitting for reptiles, birds and small mammals.",
  url: "https://wildpaws-exotic-pet-care.amsitservices.com",
  telephone: "+1-555-012-3456",
  email: "hello@wildpawspetcare.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3180 Southeast Hawthorne Boulevard",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97214",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.5122, longitude: -122.6322 },
  openingHours: "Mo-Sa 08:00-19:00",
  priceRange: "$$",
  foundingDate: "2016",
  areaServed: "Portland metro and surrounding counties",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "287",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Vet-supervised since 2016 &bull; Portland metro
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Expert care for the pets <span className="text-primary">everyone else is afraid of</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              WildPaws Exotic Pet Care looks after reptiles, birds and small mammals —
              veterinary-supervised husbandry, boarding, grooming, habitat design and
              in-home sitting, done their way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Services
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["4,800+", "pets cared for"],
                ["9 yrs", "exotic-only practice"],
                ["4.9/5", "287 reviews"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-exotic.jpg"
                alt="A green iguana perched beside a sun conure parrot in warm studio light"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-paw text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  “They rebuilt our iguana’s whole setup — he went from lethargic to
                  climbing everything.”
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Nadia K., Portland
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="Seven services, one calm pair of hands"
            subtitle="From daily husbandry to full habitat builds — every service is species-specific, vet-reviewed and delivered without stress."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="The WildPaws exotic pet care team holding a parrot and a bearded dragon"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why WildPaws"
                title="The practice your neighbors whisper about — for good reasons"
                subtitle="We are exotic-only, so we never guess. Every handler, sitter and groomer is trained in species-specific care, low-stress handling and exotic first aid."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Recent work"
            title="Case studies from the care floor"
            subtitle="Aviary builds, clinic reptile wards and boarding suites — see how we turn good intentions into correct habitats."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What our pet families say"
            subtitle={`Rated 4.9 out of 5 across ${testimonials.length ? "287" : ""} reviews — because we answer the phone and do what we promise.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about care, boarding, habitats and what we will — and will not — take on."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
