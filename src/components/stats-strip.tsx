import { Reveal } from "@/components/motion";

const stats = [
  { value: "9 yrs", label: "Exotic-only practice" },
  { value: "4,800+", label: "Pets cared for" },
  { value: "120+", label: "Species handled" },
  { value: "4.9/5", label: "Average rating" },
];

export function StatsStrip() {
  return (
    <section className="px-4 py-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl px-6 py-8">
          <dl className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
