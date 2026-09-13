"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { track } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  interest: z.string().min(1, "Please choose an area."),
  message: z.string().max(1500).optional(),
  consent: z.boolean().refine(Boolean, "Consent is required."),
  source: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function LeadForm({ source = "contact" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { source, consent: false },
  });

  async function onSubmit(data: FormData) {
    setStatus("idle");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Unable to submit");
      track("contact_submit", { source });
      setStatus("success");
      reset({ source, consent: false });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" autoComplete="name" {...register("name")} />
          {errors.name && <span className="field-error">{errors.name.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email && <span className="field-error">{errors.email.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          {errors.phone && <span className="field-error">{errors.phone.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="interest">I would like help with</label>
          <select id="interest" {...register("interest")} defaultValue="">
            <option value="" disabled>Select an area</option>
            <option>Building and investing</option>
            <option>Superannuation strategy</option>
            <option>Protecting my family</option>
            <option>Retirement planning</option>
            <option>A coordinated financial plan</option>
          </select>
          {errors.interest && <span className="field-error">{errors.interest.message}</span>}
        </div>
        <div className="field full">
          <label htmlFor="message">What would you like to achieve? (optional)</label>
          <textarea id="message" {...register("message")} />
        </div>
        <input type="hidden" {...register("source")} />
        <label className="consent">
          <input type="checkbox" {...register("consent")} />
          <span>
            I agree that Nova Wealth may contact me about this enquiry. I have
            read the privacy information and understand this form does not
            constitute personal financial advice.
            {errors.consent && <span className="field-error"> {errors.consent.message}</span>}
          </span>
        </label>
        <div className="field full">
          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <LoaderCircle className="spin" /> : <>Send an Enquiry <ArrowRight /></>}
          </button>
        </div>
      </div>
      {status === "success" && (
        <p className="form-status" role="status">
          Thank you. Your enquiry has been received and our team will be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="form-status" role="alert">
          We could not send your enquiry. Please try again or contact us by email.
        </p>
      )}
    </form>
  );
}
