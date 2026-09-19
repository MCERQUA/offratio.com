"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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
        className="rounded-2xl border border-brass/25 bg-void/60 p-10 text-center"
      >
        <p className="font-display text-2xl tracking-wide text-amber">TIP RECEIVED.</p>
        <p className="mt-3 text-bone/70">Nobody has to know it was you.</p>
      </div>
    );
  }

  return (
    <form
      name="tipline"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-brass/20 bg-void/60 p-8 sm:p-10"
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
          className="w-full rounded-lg border border-brass/25 bg-char px-4 py-3 text-bone focus:border-amber focus:outline-none"
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
          className="w-full rounded-lg border border-brass/25 bg-char px-4 py-3 text-bone focus:border-amber focus:outline-none"
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
          className="w-full rounded-lg border border-brass/25 bg-char px-4 py-3 text-bone focus:border-amber focus:outline-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-oxblood to-oxblood-dark px-6 py-4 font-display text-lg tracking-wider text-bone shadow-lg shadow-oxblood/30 disabled:opacity-60 cursor-pointer"
      >
        <Send size={18} />
        {status === "sending" ? "SENDING..." : "SEND IT"}
      </motion.button>

      {status === "error" && (
        <p role="alert" className="text-sm text-oxblood-light">
          Something jammed. Try again in a minute.
        </p>
      )}
    </form>
  );
}
