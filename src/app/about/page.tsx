import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Leaf, Wrench } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WildPaws Exotic Pet Care is an exotic-only practice in Portland, Oregon — veterinary-supervised care for reptiles, birds and small mammals since 2016.",
};

const values = [
  {
    icon: Wrench,
    title: "Correct first",
    text: "Husbandry is 90% of exotic health. We fix the setup, the diet and the routine before we ever reach for a treatment plan.",
  },
  {
    icon: Users,
    title: "Low-stress, always",
    text: "Every handler, sitter and groomer is trained in low-stress exotic handling. We move at your pet’s pace, not ours.",
  },
  {
    icon: Leaf,
    title: "Species stewardship",
    text: "We care for rescues, rehomes and special-needs pets — and we educate every family so exotic pets stop being impulse buys.",
  },
  {
    icon: Award,
    title: "Vet-partnered",
    text: "Association of Exotic Mammal Veterinarians–aligned, with partner exotics vets reviewing every care plan we write.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              We opened for the pets the vet clinics kept referring away.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                WildPaws started in 2016 with a boarding pen, a second-hand incubator and a
                waiting list of reptiles, birds and small mammals whose owners could not find
                anyone who truly knew their species. Nine years later, that list has grown to
                more than 4,800 pets across 120+ species.
              </p>
              <p>
                We are still exotic-only, still vet-supervised on every care plan, and still
                answer our own phones. When you call WildPaws, you talk to the people who will
                actually be holding your pet.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-team.jpg"
                alt="The WildPaws team holding a parrot and a bearded dragon in their care clinic"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values under every enclosure lid"
            subtitle="Four principles that have carried us through rescues, rehomes and more than a few stubborn parrots."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/care-closeup.jpg"
                alt="A WildPaws veterinarian gently examining a small ferret"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the hands your pet will trust"
              subtitle="Our care team averages six years of exotic-only experience — they know the difference between a sick beardie and a grumpy beardie at a glance."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Dr. Lena Whitfield", "Founder & Exotic Care Director — avian and reptile specialist"],
                ["Marcus Okafor", "Head of Husbandry — 1,200+ habitat builds and audits"],
                ["Priya Raman", "Boarding & Behavior Lead — certified low-stress handler"],
                ["Diego Fuentes", "In-Home Sitting & Grooming Lead — 24/7 on-call"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Trust your exotic family member to the specialists"
        subtitle="Join 4,800+ happy pet families. Request your free consultation today — we will treat your pet like our own."
      />
    </>
  );
}
