"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/services";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";

export function ProjectSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    const frame = requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Reveal>
      <div className="relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((p) => (
              <div key={p.slug} className="embla__slide">
                <Link
                  href={`/projects#${p.slug}`}
                  className="glass-card group block overflow-hidden rounded-3xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute left-4 top-4 bg-white/80 text-primary backdrop-blur">
                      {p.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      View case study <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            aria-label="Previous projects"
            className="flex size-11 items-center justify-center rounded-full glass border-primary/15 text-primary transition-colors hover:bg-primary/10"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="embla__dots">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`embla__dot ${i === selected ? "is-selected" : ""}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            aria-label="Next projects"
            className="flex size-11 items-center justify-center rounded-full glass border-primary/15 text-primary transition-colors hover:bg-primary/10"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </Reveal>
  );
}
