import nodemailer, { type Transporter } from "nodemailer";
import path from "path";
import fs from "fs";

export interface ConsultationBookingData {
  reference: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  service: string;
  note?: string;
  clientIp?: string;
  timestamp?: string;
}

// ─── Reusable Transporter Singleton ──────────────────────────────────────────
let transporterInstance: Transporter | null = null;

export function getEmailTransporter(): Transporter {
  if (transporterInstance) {
    return transporterInstance;
  }

  const user = (process.env.SMTP_USER || "").trim();
  const rawPass = (process.env.SMTP_PASS || "").trim();

  if (!user || !rawPass) {
    throw new Error(
      "Missing SMTP credentials. SMTP_USER and SMTP_PASS must be configured in environment variables."
    );
  }

  // Strip any internal spaces from Google App Password
  const pass = rawPass.replace(/\s+/g, "");
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";

  transporterInstance = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Serverless-friendly timeout settings (Vercel Node.js runtime)
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  return transporterInstance;
}

// ─── Clinical Intake Email to Osteon Clinic ──────────────────────────────────
export async function sendClinicIntakeEmail(
  booking: ConsultationBookingData
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getEmailTransporter();
    const fromName = process.env.SMTP_FROM_NAME || "Osteon Website Notifications";
    const fromEmail = process.env.SMTP_FROM_EMAIL || "osteonprostheticsandorthotics@gmail.com";
    const clinicRecipient = process.env.CLINIC_INTAKE_EMAIL || "osteonprostheticsandorthotics@gmail.com";

    const subject = `New Consultation Request [#${booking.reference}] - ${booking.name}`;

    const textContent = `
NEW CONSULTATION REQUEST
==================================================
Reference: #${booking.reference}

A new consultation request has been received through the Osteon website.

PATIENT DETAILS
--------------------------------------------------
Patient Name:       ${booking.name}
Phone Number:       ${booking.phone}
Email Address:      ${booking.email}
Preferred Date:     ${formatHumanDate(booking.preferredDate)}

ADDITIONAL INFORMATION
--------------------------------------------------
${booking.note && booking.note.trim() ? booking.note.trim() : "No additional information provided."}

ACTIONS
--------------------------------------------------
Call Patient:    tel:${booking.phone}
Reply via Email: mailto:${booking.email}?subject=Re:%20Consultation%20Request%20-%20Osteon%20[#${booking.reference}]

==================================================
Osteon Precision Prosthetics & Orthotics
St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin – 682025
Telephone: +91 984 611 6481 / +91 984 611 6411
This is an automated notification from the Osteon website consultation system.
`.trim();

    const additionalNotesHtml = booking.note && booking.note.trim()
      ? `<div style="font-size: 14px; line-height: 1.6; color: #171C1B; white-space: pre-line;">${booking.note.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`
      : `<span style="font-size: 14px; color: #777F7C; font-style: italic;">No additional information provided.</span>`;

    const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Consultation Request</title>
  <!--[if mso]>
  <style type="text/css">
    table, td, div, p, a, span { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F4F5F3; -webkit-font-smoothing: antialiased; font-family: Arial, Helvetica, sans-serif; color: #171C1B;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F5F3; padding: 36px 16px;">
    <tr>
      <td align="center" valign="top">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border: 1px solid #E8ECEA; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
          
          <!-- Header: Brand Logo & Tagline -->
          <tr>
            <td style="padding: 28px 32px 22px; border-bottom: 1px solid #E8ECEA;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td valign="middle">
                    <img src="cid:osteonlogo" width="140" height="47" alt="Osteon Precision Prosthetics &amp; Orthotics" style="display: block; width: 140px; max-width: 140px; height: auto; border: 0;" />
                    <div style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; font-weight: 500;">
                      Precision Prosthetics &amp; Orthotics
                    </div>
                  </td>
                  <td align="right" valign="top" style="padding-top: 4px;">
                    <span style="font-size: 12px; color: #777F7C; white-space: nowrap;">
                      Ref: <strong style="color: #171C1B; font-weight: 600;">#${booking.reference}</strong>
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email Title & Supporting Text -->
          <tr>
            <td style="padding: 28px 32px 20px;">
              <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: bold; color: #171C1B; line-height: 1.3;">
                New Consultation Request
              </h1>
              <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #777F7C;">
                A new consultation request has been received through the Osteon website.
              </p>
            </td>
          </tr>

          <!-- Patient Information Layout -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #E8ECEA; border-bottom: 1px solid #E8ECEA;">
                
                <!-- Patient Name -->
                <tr>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" width="38%" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Patient Name</span>
                  </td>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" width="62%" valign="top">
                    <span style="font-size: 15px; color: #171C1B; font-weight: 600;">${booking.name}</span>
                  </td>
                </tr>

                <!-- Contact Phone -->
                <tr>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Phone</span>
                  </td>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" valign="top">
                    <a href="tel:${booking.phone}" style="font-size: 15px; color: #00BFAE; font-weight: 600; text-decoration: none;">
                      ${booking.phone}
                    </a>
                  </td>
                </tr>

                <!-- Email Address -->
                <tr>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Email</span>
                  </td>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" valign="top">
                    <a href="mailto:${booking.email}" style="font-size: 14px; color: #171C1B; text-decoration: underline; word-break: break-all;">
                      ${booking.email}
                    </a>
                  </td>
                </tr>

                <!-- Preferred Date -->
                <tr>
                  <td style="padding: 13px 0;" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Preferred Date</span>
                  </td>
                  <td style="padding: 13px 0;" valign="top">
                    <span style="font-size: 15px; color: #171C1B; font-weight: 600;">${formatHumanDate(booking.preferredDate)}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Clinical Notes / Additional Information -->
          <tr>
            <td style="padding: 0 32px 28px;">
              <div style="font-size: 12px; font-weight: bold; color: #171C1B; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">
                Additional Information
              </div>
              <div style="background-color: #F8F9F8; border: 1px solid #E8ECEA; border-radius: 6px; padding: 16px 18px;">
                ${additionalNotesHtml}
              </div>
            </td>
          </tr>

          <!-- Action Buttons -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <!-- Primary Action: Call Patient -->
                  <td style="padding-right: 12px;">
                    <a href="tel:${booking.phone}" style="display: inline-block; background-color: #00BFAE; color: #FFFFFF; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.06em; padding: 12px 22px; border-radius: 4px; text-decoration: none;">
                      CALL PATIENT
                    </a>
                  </td>
                  <!-- Secondary Action: Reply via Email -->
                  <td>
                    <a href="mailto:${booking.email}?subject=Re:%20Consultation%20Request%20-%20Osteon%20[#${booking.reference}]" style="display: inline-block; background-color: #FFFFFF; border: 1px solid #E8ECEA; color: #171C1B; font-size: 13px; font-weight: 600; padding: 11px 20px; border-radius: 4px; text-decoration: none;">
                      Reply via Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Restrained Professional Footer -->
          <tr>
            <td style="padding: 22px 32px; background-color: #FBFBFB; border-top: 1px solid #E8ECEA;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 13px; font-weight: bold; color: #171C1B; padding-bottom: 4px;">
                    Osteon Precision Prosthetics &amp; Orthotics
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 12px; color: #777F7C; line-height: 1.6; padding-bottom: 10px;">
                    St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin – 682025<br />
                    Telephone: <a href="tel:+919846116481" style="color: #171C1B; text-decoration: none;">+91 984 611 6481</a> &bull; <a href="tel:+919846116411" style="color: #171C1B; text-decoration: none;">+91 984 611 6411</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 11px; color: #777F7C; line-height: 1.5; border-top: 1px solid #E8ECEA; padding-top: 10px;">
                    This is an automated notification from the Osteon website consultation system.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // Attach official logo asset via CID embedding if file exists
    const attachments: Array<{ filename: string; path: string; cid: string }> = [];
    const logoPath = path.join(process.cwd(), "public", "osteon-logo.png");
    if (fs.existsSync(logoPath)) {
      attachments.push({
        filename: "osteon-logo.png",
        path: logoPath,
        cid: "osteonlogo",
      });
    }

    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: clinicRecipient,
      replyTo: booking.email,
      subject,
      text: textContent,
      html: htmlContent,
      attachments,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[OSTEON SMTP] Error sending clinic intake email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to dispatch email to clinic.",
    };
  }
}

// ─── Utility Helpers ─────────────────────────────────────────────────────────
function escapeHtml(text?: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatHumanDate(dateStr?: string): string {
  if (!dateStr) return "To be scheduled";
  try {
    const trimmed = dateStr.trim();
    const parts = trimmed.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      if (!isNaN(year) && monthIdx >= 0 && monthIdx < 12 && !isNaN(day)) {
        const paddedDay = String(day).padStart(2, "0");
        return `${paddedDay} ${months[monthIdx]} ${year}`;
      }
    }
    const d = new Date(trimmed);
    if (!isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, "0");
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return `${day} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }
  } catch {
    // fallback to original string
  }
  return dateStr;
}

// ─── Patient Confirmation Email ──────────────────────────────────────────────
export async function sendPatientConfirmationEmail(
  booking: ConsultationBookingData
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getEmailTransporter();
    const fromName = process.env.SMTP_FROM_NAME || "Osteon Precision Prosthetics & Orthotics";
    const fromEmail = process.env.SMTP_FROM_EMAIL || "osteonprostheticsandorthotics@gmail.com";

    // Clean & prepare dynamic values
    const rawRef = booking.reference.trim();
    const cleanRef = rawRef.startsWith("#") ? rawRef.slice(1) : rawRef;
    const safeName = escapeHtml(booking.name);
    const safePhone = escapeHtml(booking.phone);
    const humanDate = escapeHtml(formatHumanDate(booking.preferredDate));

    const subject = `Consultation Request Received [#${cleanRef}] - Osteon Precision Prosthetics & Orthotics`;

    const textContent = `
CONSULTATION REQUEST RECEIVED
==================================================
Osteon Precision Prosthetics & Orthotics

Thank you for choosing Osteon. Your consultation request has been successfully received by our team. We appreciate your trust and look forward to assisting you.

YOUR BOOKING REFERENCE:
#${cleanRef}
Please keep this reference number for future communication with our team.

CONSULTATION DETAILS:
--------------------------------------------------
Patient Name:            ${booking.name}
Preferred Date:          ${formatHumanDate(booking.preferredDate)}
Registered Phone Number: ${booking.phone}

WHAT HAPPENS NEXT?
--------------------------------------------------
STEP 01 — REQUEST RECEIVED
Your consultation details have been successfully received by our team.

STEP 02 — CLINICAL REVIEW
Our team will review your requirements and relevant information.

STEP 03 — PERSONAL CONTACT
Our clinic coordinator will contact you to discuss the next steps and appointment arrangements.

ADDITIONAL INFORMATION:
If you have previous prescriptions, X-rays, medical reports or relevant clinical documents, please keep them available for your consultation.

NEED ASSISTANCE?
--------------------------------------------------
Our clinic team is here to help.
Telephone: +91 984 611 6481 / +91 984 611 6411
Email:     osteonprostheticsandorthotics@gmail.com
Website:   https://www.osteonprosthetics.com

==================================================
Osteon Precision Prosthetics & Orthotics
St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin – 682025
This is an automated confirmation of your consultation request. Our team will contact you regarding the next steps.
`.trim();

    const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Consultation Request Received</title>
  <!--[if mso]>
  <style type="text/css">
    table, td, div, p, a, span { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F4F5F3; -webkit-font-smoothing: antialiased; font-family: Arial, Helvetica, sans-serif; color: #171C1B;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F5F3; padding: 36px 16px;">
    <tr>
      <td align="center" valign="top">
        <!-- Main Card Container (Matches Sender Email) -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border: 1px solid #E8ECEA; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
          
          <!-- Header: Brand Logo, Tagline & Reference Number -->
          <tr>
            <td style="padding: 28px 32px 22px; border-bottom: 1px solid #E8ECEA;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td valign="middle">
                    <img src="cid:osteonlogo" width="140" height="47" alt="Osteon Precision Prosthetics &amp; Orthotics" style="display: block; width: 140px; max-width: 140px; height: auto; border: 0;" />
                    <div style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; font-weight: 500;">
                      Precision Prosthetics &amp; Orthotics
                    </div>
                  </td>
                  <td align="right" valign="top" style="padding-top: 4px;">
                    <span style="font-size: 12px; color: #777F7C; white-space: nowrap;">
                      Ref: <strong style="color: #171C1B; font-weight: 600;">#${cleanRef}</strong>
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email Title & Supporting Text -->
          <tr>
            <td style="padding: 28px 32px 20px;">
              <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: bold; color: #171C1B; line-height: 1.3;">
                Consultation Request Received
              </h1>
              <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #777F7C;">
                Thank you for choosing Osteon. Your consultation request has been successfully received by our team. We appreciate your trust and look forward to assisting you.
              </p>
            </td>
          </tr>

          <!-- Booking Reference Card (Patient Highlight) -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <div style="background-color: #F8F9F8; border: 1px solid #E8ECEA; border-left: 3px solid #00BFAE; border-radius: 6px; padding: 16px 20px;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <div style="font-size: 11px; font-weight: 600; color: #777F7C; text-transform: uppercase; letter-spacing: 0.06em;">
                        Your Booking Reference
                      </div>
                      <div style="font-size: 24px; font-weight: bold; color: #00BFAE; letter-spacing: 0.03em; margin-top: 4px; line-height: 1.2;">
                        #${cleanRef}
                      </div>
                      <div style="font-size: 12px; color: #777F7C; margin-top: 6px; line-height: 1.4;">
                        Please keep this reference number for future communication with our team.
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Consultation Information Layout (Matches Sender Email Table) -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <div style="font-size: 12px; font-weight: bold; color: #171C1B; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">
                Consultation Details
              </div>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #E8ECEA; border-bottom: 1px solid #E8ECEA;">
                
                <!-- Patient Name -->
                <tr>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" width="38%" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Patient Name</span>
                  </td>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" width="62%" valign="top">
                    <span style="font-size: 15px; color: #171C1B; font-weight: 600;">${safeName}</span>
                  </td>
                </tr>

                <!-- Contact Phone -->
                <tr>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Phone</span>
                  </td>
                  <td style="padding: 13px 0; border-bottom: 1px solid #E8ECEA;" valign="top">
                    <a href="tel:${safePhone}" style="font-size: 15px; color: #00BFAE; font-weight: 600; text-decoration: none;">
                      ${safePhone}
                    </a>
                  </td>
                </tr>

                <!-- Preferred Date -->
                <tr>
                  <td style="padding: 13px 0;" valign="top">
                    <span style="font-size: 11px; color: #777F7C; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Preferred Date</span>
                  </td>
                  <td style="padding: 13px 0;" valign="top">
                    <span style="font-size: 15px; color: #171C1B; font-weight: 600;">${humanDate}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- What Happens Next? Timeline (Matches Sender Email Clean Layout) -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <div style="font-size: 12px; font-weight: bold; color: #171C1B; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">
                What Happens Next?
              </div>
              <div style="background-color: #F8F9F8; border: 1px solid #E8ECEA; border-radius: 6px; padding: 18px 20px;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <!-- Step 1 -->
                  <tr>
                    <td width="28" valign="top" style="padding-bottom: 12px;">
                      <div style="width: 20px; height: 20px; line-height: 20px; text-align: center; border-radius: 50%; background-color: #E9F8F5; color: #00BFAE; font-size: 11px; font-weight: bold;">
                        1
                      </div>
                    </td>
                    <td valign="top" style="padding-bottom: 12px; padding-left: 6px;">
                      <div style="font-size: 13px; font-weight: 600; color: #171C1B;">Request Received</div>
                      <div style="font-size: 13px; color: #777F7C; line-height: 1.4; margin-top: 2px;">Your consultation details have been successfully received by our team.</div>
                    </td>
                  </tr>
                  <!-- Step 2 -->
                  <tr>
                    <td width="28" valign="top" style="padding-bottom: 12px;">
                      <div style="width: 20px; height: 20px; line-height: 20px; text-align: center; border-radius: 50%; background-color: #E9F8F5; color: #00BFAE; font-size: 11px; font-weight: bold;">
                        2
                      </div>
                    </td>
                    <td valign="top" style="padding-bottom: 12px; padding-left: 6px;">
                      <div style="font-size: 13px; font-weight: 600; color: #171C1B;">Clinical Review</div>
                      <div style="font-size: 13px; color: #777F7C; line-height: 1.4; margin-top: 2px;">Our team will review your requirements and relevant clinical information.</div>
                    </td>
                  </tr>
                  <!-- Step 3 -->
                  <tr>
                    <td width="28" valign="top">
                      <div style="width: 20px; height: 20px; line-height: 20px; text-align: center; border-radius: 50%; background-color: #E9F8F5; color: #00BFAE; font-size: 11px; font-weight: bold;">
                        3
                      </div>
                    </td>
                    <td valign="top" style="padding-left: 6px;">
                      <div style="font-size: 13px; font-weight: 600; color: #171C1B;">Personal Contact</div>
                      <div style="font-size: 13px; color: #777F7C; line-height: 1.4; margin-top: 2px;">Our clinic coordinator will contact you to discuss next steps and appointment arrangements.</div>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Clinical Document Preparation Notice -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <div style="font-size: 12px; color: #777F7C; line-height: 1.5; padding: 12px 16px; background-color: #FAFAFA; border: 1px dashed #E8ECEA; border-radius: 6px;">
                <strong style="color: #171C1B;">Please Note:</strong> If you have previous prescriptions, X-rays, medical reports or relevant clinical documents, please keep them available for your consultation.
              </div>
            </td>
          </tr>

          <!-- Action Buttons (Matches Sender Email Style) -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <!-- Primary Action: Call Clinic -->
                  <td style="padding-right: 12px;">
                    <a href="tel:+919846116481" style="display: inline-block; background-color: #00BFAE; color: #FFFFFF; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.06em; padding: 12px 22px; border-radius: 4px; text-decoration: none;">
                      CALL OSTEON
                    </a>
                  </td>
                  <!-- Secondary Action: Email Clinic -->
                  <td style="padding-right: 12px;">
                    <a href="mailto:osteonprostheticsandorthotics@gmail.com" style="display: inline-block; background-color: #FFFFFF; border: 1px solid #E8ECEA; color: #171C1B; font-size: 13px; font-weight: 600; padding: 11px 20px; border-radius: 4px; text-decoration: none;">
                      Email Clinic
                    </a>
                  </td>
                  <!-- Tertiary Action: Website -->
                  <td>
                    <a href="https://www.osteonprosthetics.com" target="_blank" style="display: inline-block; color: #00BFAE; font-size: 13px; font-weight: 600; text-decoration: none; padding: 11px 10px;">
                      Visit Website &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Restrained Professional Footer (Matches Sender Email Footer Exactly) -->
          <tr>
            <td style="padding: 22px 32px; background-color: #FBFBFB; border-top: 1px solid #E8ECEA;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 13px; font-weight: bold; color: #171C1B; padding-bottom: 4px;">
                    Osteon Precision Prosthetics &amp; Orthotics
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 12px; color: #777F7C; line-height: 1.6; padding-bottom: 10px;">
                    St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin – 682025<br />
                    Telephone: <a href="tel:+919846116481" style="color: #171C1B; text-decoration: none;">+91 984 611 6481</a> &bull; <a href="tel:+919846116411" style="color: #171C1B; text-decoration: none;">+91 984 611 6411</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 11px; color: #777F7C; line-height: 1.5; border-top: 1px solid #E8ECEA; padding-top: 10px;">
                    This is an automated confirmation of your consultation request. Our clinical team will contact you regarding the next steps.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // Attach official logo asset via CID embedding if file exists
    const attachments: Array<{ filename: string; path: string; cid: string }> = [];
    const logoPath = path.join(process.cwd(), "public", "osteon-logo.png");
    if (fs.existsSync(logoPath)) {
      attachments.push({
        filename: "osteon-logo.png",
        path: logoPath,
        cid: "osteonlogo",
      });
    }

    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: booking.email,
      replyTo: fromEmail,
      subject,
      text: textContent,
      html: htmlContent,
      attachments,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[OSTEON SMTP] Error sending patient confirmation email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to dispatch email to patient.",
    };
  }
}
