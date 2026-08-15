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

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Please write at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, service: "General inquiry", phone: "" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Message sent!", { description: "Thanks for reaching out. We will reply shortly." });
        reset();
      } else {
        toast.error("Something went wrong", { description: data.error ?? "Please try again." });
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
          <Label htmlFor="cf-name">Name</Label>
          <Input id="cf-name" placeholder="Jane Smith" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-email">Email</Label>
          <Input id="cf-email" type="email" placeholder="jane@example.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="cf-message">Message</Label>
        <Textarea
          id="cf-message"
          rows={6}
          placeholder="How can we help?"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" size="lg" className="btn-gradient w-full rounded-full" disabled={submitting}>
        {submitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {submitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
