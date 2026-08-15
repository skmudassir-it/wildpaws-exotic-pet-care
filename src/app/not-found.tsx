import Link from "next/link";
import { ArrowLeft, PawPrint } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-24">
      <div className="glass-strong w-full max-w-xl rounded-3xl px-8 py-14 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <PawPrint className="size-8" />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-accent">Error 404</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
          This page escaped its enclosure
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist or has been moved. Let us get you back
          to familiar territory.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full")}>
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "glass rounded-full border-primary/20 text-primary"
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
