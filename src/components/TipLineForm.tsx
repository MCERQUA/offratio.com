"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { StampButton } from "./StampButton";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function TipLineForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "tipline", ...form }),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="cut-btn border border-acid/25 bg-void/60 p-10 text-center"
      >
        <p className="font-display text-2xl tracking-wide text-acid">TIP RECEIVED.</p>
        <p className="mt-3 text-bone/70">Nobody has to know it was you.</p>
      </div>
    );
  }

  return (
    <form
      name="tipline"
      onSubmit={handleSubmit}
      className="cut-btn space-y-5 border border-acid/20 bg-void/60 p-8 sm:p-10"
    >
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-bone/70">
          Name <span className="text-bone/40">(optional)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b-2 border-acid/25 bg-transparent px-4 py-3 text-bone focus:border-acid focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-bone/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border-b-2 border-acid/25 bg-transparent px-4 py-3 text-bone focus:border-acid focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-bone/70">
          Your story / tip
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-acid/25 bg-transparent px-4 py-3 text-bone focus:border-acid focus:outline-none"
        />
      </div>

      <StampButton type="submit" variant="solid" disabled={status === "sending"} className="w-full justify-center">
        <Send size={18} />
        {status === "sending" ? "SENDING..." : "SEND IT"}
      </StampButton>

      {status === "error" && (
        <p role="alert" className="text-sm text-alarm-light">
          Something jammed. Try again in a minute.
        </p>
      )}
    </form>
  );
}
