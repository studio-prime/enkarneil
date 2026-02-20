"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error sending message.");
      }
      setSubmitted(true);
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "Error sending message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="font-sans text-base font-light leading-[1.8] text-[#3a3a3a]">
          Thank you for your message. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-1/2 border-b border-[#e0e0e0] py-3 font-sans text-sm font-light outline-none transition-colors duration-300 placeholder:font-light placeholder:text-[#b0b0b0] focus:border-[#1a1a1a]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-1/2 border-b border-[#e0e0e0] py-3 font-sans text-sm font-light outline-none transition-colors duration-300 placeholder:font-light placeholder:text-[#b0b0b0] focus:border-[#1a1a1a]"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="border-b border-[#e0e0e0] py-3 font-sans text-sm font-light outline-none transition-colors duration-300 placeholder:font-light placeholder:text-[#b0b0b0] focus:border-[#1a1a1a]"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="resize-none border-b border-[#e0e0e0] py-3 font-sans text-sm font-light outline-none transition-colors duration-300 placeholder:font-light placeholder:text-[#b0b0b0] focus:border-[#1a1a1a]"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 self-start border border-[#1a1a1a] px-10 py-3 font-sans text-[12px] font-light uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
