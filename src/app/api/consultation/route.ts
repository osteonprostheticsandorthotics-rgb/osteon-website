import { NextRequest, NextResponse } from "next/server";

// ─── Rate Limiter (Sliding Window per IP) ────────────────────────────────────
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 consultation bookings per 15 mins per IP
const ipRateLimitMap = new Map<string, RateLimitRecord>();

// Periodic cleanup of stale rate limit entries to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRateLimitMap.entries()) {
      if (now > record.resetTime) {
        ipRateLimitMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
}

// ─── Sanitization Helpers ───────────────────────────────────────────────────
function sanitizeString(input: unknown, maxLength: number): string {
  if (typeof input !== "string") return "";
  // Strip control characters, excessive whitespace, and basic script injection
  return input
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function sanitizeEmailHeader(input: string): string {
  // Prevent SMTP header injection (\r, \n)
  return input.replace(/[\r\n]/g, "").trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  if (!email || email.length > 120) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  if (!phone || phone.length < 8 || phone.length > 22) return false;
  // Allows digits, spaces, hyphens, parentheses, and leading plus sign
  const phoneRegex = /^\+?[\d\s\-().]{8,22}$/;
  return phoneRegex.test(phone);
}

function isValidDate(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return false;

  // Check that the date is not in the distant past (allow within last 24h for timezones)
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  yesterday.setHours(0, 0, 0, 0);
  return date >= yesterday;
}

// ─── POST Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. IP Detection for Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwarded ? forwarded.split(",")[0].trim() : realIp) || "127.0.0.1";

    const now = Date.now();
    const rateLimit = ipRateLimitMap.get(clientIp);

    if (rateLimit && now < rateLimit.resetTime) {
      if (rateLimit.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            error: "Too many consultation requests. Please contact our clinic directly at +91 984 611 6481.",
          },
          { status: 429 }
        );
      }
      rateLimit.count += 1;
    } else {
      ipRateLimitMap.set(clientIp, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW_MS,
      });
    }

    // 2. Parse and Validate Request Body
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type. Expected application/json." },
        { status: 415 }
      );
    }

    const body = await req.json();

    // 3. Honeypot Bot Trap: If the hidden honeypot field is filled, silently drop
    if (body.hp_clinical_token || body.fax_field || body.company_url) {
      // Return a simulated success response so malicious bots don't adapt
      const fakeRef = `OST-${Math.floor(100000 + Math.random() * 900000)}`;
      return NextResponse.json({
        success: true,
        reference: fakeRef,
        message: "Consultation request scheduled successfully.",
      });
    }

    // 4. Sanitize and Validate Fields
    const name = sanitizeString(body.name, 100);
    const phone = sanitizeString(body.phone, 25);
    const email = sanitizeEmailHeader(sanitizeString(body.email, 120));
    const preferredDate = sanitizeString(body.preferredDate, 15);
    const note = sanitizeString(body.note, 1000);
    const service = sanitizeString(body.service || "General Consultation", 80);

    // Validation checks
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid contact telephone or mobile number." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!isValidDate(preferredDate)) {
      return NextResponse.json(
        { error: "Please select an upcoming consultation date." },
        { status: 400 }
      );
    }

    // 5. Generate Official Booking Reference
    const bookingRef = `OST-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    // 6. Clinical Intake Log
    // In production, dispatch email to support@osteonprosthetics.com via SMTP or Resend
    console.log(`[OSTEON INTAKE] New booking #${bookingRef}:`, {
      name,
      phone,
      email,
      preferredDate,
      service,
      noteLength: note.length,
      clientIp,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      reference: bookingRef,
      data: {
        name,
        service,
        preferredDate,
      },
      message: "Consultation request successfully received by the Osteon clinical team.",
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please call our clinic." },
      { status: 500 }
    );
  }
}
