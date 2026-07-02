"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    const subject = encodeURIComponent(formData.subject || "Website Enquiry");
    window.location.href = `mailto:${COMPANY.contactEmail}?subject=${subject}&body=${body}`;
  };

  const inputClasses = cn(
    "w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm",
    "placeholder:text-[hsl(var(--muted-foreground))]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500",
  );

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name <span className="text-royal-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email <span className="text-royal-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select a topic</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Press / Media">Press / Media</option>
          <option value="Product — SAVARUN">Product — SAVARUN</option>
          <option value="Product — LOCK & KEY SKIN CARE">
            Product — LOCK & KEY SKIN CARE
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message <span className="text-royal-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={cn(inputClasses, "resize-y min-h-[120px]")}
        />
      </div>

      <Button type="submit" icon={Send} iconPosition="right">
        Send via Email
      </Button>
    </form>
  );
}
