// app/api/signup/route.js
import { NextResponse } from "next/server";
import { inngest } from "../../../src/inngest/client.js";

const isEmail = (v) =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function buildRedirect(req, params) {
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const url = new URL("/", `${proto}://${host}`);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  return url.toString();
}

export async function POST(req) {
  try {
    const ct = (req.headers.get("content-type") || "").toLowerCase();
    let email = "";

    if (ct.includes("application/json")) {
      const json = await req.json().catch(() => ({}));
      email = String(json.email || "");
    } else if (
      ct.includes("application/x-www-form-urlencoded") ||
      ct.includes("multipart/form-data")
    ) {
      const form = await req.formData().catch(() => null);
      email = String((form && form.get("email")) || "");
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    let sent = false;
    let sendErr = null;
    try {
      await inngest.send({ name: "app/user.created", data: { email } });
      sent = true;
    } catch (e) {
      sendErr = e;
      console.error("[/api/signup] inngest.send failed:", e);
    }

    // For form POSTs: redirect
    if (!ct.includes("application/json")) {
      return NextResponse.redirect(
        buildRedirect(req, { ok: sent ? "1" : "0", ...(sendErr && { err: "send" }) }),
        303
      );
    }

    // For JSON POSTs: return JSON
    return NextResponse.json({
      ok: sent,
      error: sendErr ? "send_failed" : null,
    });
  } catch (e) {
    console.error("[/api/signup] handler error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
