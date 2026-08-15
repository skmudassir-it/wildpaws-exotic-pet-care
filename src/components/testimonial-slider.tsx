"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/services";
import { Reveal } from "@/components/motion";

export function TestimonialSlider() {
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
            {testimonials.map((t) => (
              <div key={t.name} className="embla__slide">
                <figure className="glass-card flex h-full flex-col rounded-3xl p-7">
                  <div className="flex gap-1 text-accent" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-primary/10 pt-4">
                    <p className="font-display text-sm font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonials"
            className="flex size-11 items-center justify-center rounded-full glass border-primary/15 text-primary transition-colors hover:bg-primary/10"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="embla__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`embla__dot ${i === selected ? "is-selected" : ""}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            aria-label="Next testimonials"
            className="flex size-11 items-center justify-center rounded-full glass border-primary/15 text-primary transition-colors hover:bg-primary/10"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </Reveal>
  );
}
