import {
  BRAND,
  emailShell,
  escapeHtml,
  formatTimestamp,
  getSiteBaseUrl,
} from "@/app/lib/email-shared";

export type ContactFormData = {
  fullName: string;
  phone: string;
  email: string;
  loanType: string;
  loanTypeLabel: string;
  message: string;
};

function detailRow(label: string, value: string, link?: string): string {
  const safe = escapeHtml(value);
  const valueHtml = link
    ? `<a href="${link}" style="color:${BRAND.green};text-decoration:none;">${safe}</a>`
    : safe;
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:${BRAND.textMuted};">${label}</p>
        <p style="margin:0;font-size:15px;line-height:1.5;color:${BRAND.text};word-break:break-word;">${valueHtml}</p>
      </td>
    </tr>`;
}

export function buildAdminContactEmail(data: ContactFormData): string {
  const siteUrl = getSiteBaseUrl();
  const submittedAt = escapeHtml(formatTimestamp());

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding-bottom:24px;">
          <span style="display:inline-block;padding:6px 14px;border-radius:20px;background-color:${BRAND.greenMuted};font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.green};">
            New enquiry
          </span>
        </td>
      </tr>
      <tr>
        <td style="background-color:${BRAND.greenMuted};border-radius:10px;border:1px solid ${BRAND.border};padding:8px 24px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow("Full name", data.fullName)}
            ${detailRow("Email", data.email, `mailto:${encodeURIComponent(data.email)}`)}
            ${detailRow("Phone", data.phone, `tel:${data.phone.replace(/\s/g, "")}`)}
            ${detailRow("Loan type", data.loanTypeLabel)}
            ${detailRow("Message", data.message || "—")}
            <tr>
              <td style="padding:12px 0 4px;">
                <p style="margin:0;font-size:12px;color:${BRAND.textMuted};">
                  <strong style="color:${BRAND.text};">Received:</strong> ${submittedAt} (AEST)
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-top:28px;">
          <a href="mailto:${encodeURIComponent(data.email)}" style="display:inline-block;padding:14px 32px;background-color:${BRAND.green};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
            Reply to ${escapeHtml(data.fullName.split(" ")[0] || "client")}
          </a>
        </td>
      </tr>
    </table>`;

  return emailShell({
    siteUrl,
    preheader: `Contact form: ${data.fullName} — ${data.loanTypeLabel}`,
    heroTitle: "New Contact Enquiry",
    heroSubtitle: "Someone submitted the contact form on your website.",
    bodyHtml,
    footerNote: "Internal notification — reply from your inbox.",
  });
}

export function buildClientContactEmail(data: ContactFormData): string {
  const siteUrl = getSiteBaseUrl();
  const safeName = escapeHtml(data.fullName);

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding-bottom:20px;">
          <div style="width:64px;height:64px;line-height:64px;border-radius:50%;background-color:${BRAND.green};text-align:center;font-size:32px;color:#ffffff;">
            &#10003;
          </div>
        </td>
      </tr>
      <tr>
        <td style="font-size:15px;line-height:1.7;color:${BRAND.text};text-align:center;">
          <p style="margin:0 0 12px;">Hi ${safeName},</p>
          <p style="margin:0 0 16px;">
            Thank you for contacting <strong>LendSmart Mortgages</strong>. We have received your message and a loan expert will be in touch shortly.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.greenMuted};border-radius:10px;border:1px solid ${BRAND.border};">
            <tr>
              <td style="padding:20px 24px;">
                <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:${BRAND.text};">Your enquiry summary</p>
                <p style="margin:0 0 6px;font-size:13px;color:${BRAND.textMuted};"><strong style="color:${BRAND.text};">Loan type:</strong> ${escapeHtml(data.loanTypeLabel)}</p>
                ${
                  data.message
                    ? `<p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:${BRAND.text};"><strong>Message:</strong><br />${escapeHtml(data.message)}</p>`
                    : ""
                }
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center">
          <a href="${siteUrl}/contact" style="display:inline-block;padding:14px 32px;background-color:${BRAND.green};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
            Visit our website
          </a>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-top:20px;">
          <p style="margin:0;font-size:14px;color:${BRAND.textMuted};">
            Warm regards,<br />
            <strong style="color:${BRAND.text};">The LendSmart Team</strong>
          </p>
        </td>
      </tr>
    </table>`;

  return emailShell({
    siteUrl,
    preheader: "We received your contact enquiry",
    heroTitle: "We Got Your Message!",
    heroSubtitle: "Our team will respond as soon as possible.",
    bodyHtml,
    footerNote:
      "You received this email because you submitted the contact form on lendsmartmortgages.com.au.",
  });
}

export const LOAN_TYPE_LABELS: Record<string, string> = {
  "home-loan": "Home Loan",
  refinance: "Refinance",
  "investment-loan": "Investment Loan",
  "construction-loan": "Construction Loan",
  "personal-loan": "Personal Loan",
  "commercial-loan": "Commercial Loan",
};
