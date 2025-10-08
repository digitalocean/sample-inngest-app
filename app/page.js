"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ok = params.get("ok");
    const err = params.get("err");
    if (ok === "1") setMsg({ type: "ok", text: "User created event sent to Inngest." });
    else if (ok === "0" && err === "send")
      setMsg({ type: "warn", text: "Created locally, but sending to Inngest failed. Check INNGEST_EVENT_KEY." });
  }, []);

  return (
    <main style={{ padding: 32, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1>Next.js + Inngest on DigitalOcean App Platform</h1>
      <p>Use the form to simulate a signup and fire an Inngest event.</p>

      {msg && (
        <div style={{
          marginTop: 12, padding: 10,
          background: msg.type === "ok" ? "#e6ffed" : "#fff8e1",
          border: "1px solid #ddd"
        }}>
          {msg.text}
        </div>
      )}

      <form
        action="/api/signup"
        method="post"
        style={{ marginTop: 16 }}
        onSubmit={() => setSubmitting(true)}
      >
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          style={{ padding: 8, minWidth: 260 }}
        />
        <button type="submit" disabled={submitting} style={{ padding: 8, marginLeft: 8 }}>
          {submitting ? "Creating…" : "Create User"}
        </button>
      </form>

      <p style={{ marginTop: 24 }}>
        Background jobs run via Inngest. Check your Inngest dashboard for function runs.
      </p>
    </main>
  );
}
