import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Ready for expert exotic pet care?",
  subtitle = "Get a free, no-obligation quote. Our care team responds within one business day — and in hours for urgent care needs.",
  image = "/images/cta-contact.jpg",
}: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="px-4 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 -z-10">
            <Image
              src={image}
              alt="Warm studio-lit exotic pet care"
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/40" />
          </div>
          <div className="relative flex flex-col items-start gap-6 px-6 py-12 sm:px-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Get started</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full")}>
                Request a Free Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                href="tel:+15550123456"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-primary"
                )}
              >
                Call (555) 012-3456
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
