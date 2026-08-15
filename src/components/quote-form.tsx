"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Choose a service"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Quote request received!", {
          description: "Our team will reach out within one business day.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: data.error ?? "Please try again or call us directly.",
        });
      }
    } catch {
      toast.error("Network error", { description: "Please try again or call (555) 012-3456." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="qf-name">Full name</Label>
          <Input id="qf-name" placeholder="Jane Smith" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-email">Email</Label>
          <Input id="qf-email" type="email" placeholder="jane@example.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="qf-phone">Phone</Label>
          <Input id="qf-phone" type="tel" placeholder="(555) 123-4567" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone ? <p className="text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-service">Service needed</Label>
          <Select
            value={undefined}
            onValueChange={(value) => setValue("service", value ?? "", { shouldValidate: true })}
          >
            <SelectTrigger id="qf-service" aria-invalid={!!errors.service}>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service ? <p className="text-xs text-destructive">{errors.service.message}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="qf-message">Project details</Label>
        <Textarea
          id="qf-message"
          rows={5}
          placeholder="Tell us about your pet, their setup, or the care you need…"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" size="lg" className="btn-gradient w-full rounded-full" disabled={submitting}>
        {submitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {submitting ? "Sending…" : "Request My Free Quote"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No obligation. We reply within one business day — usually much faster.
      </p>
    </form>
  );
}
