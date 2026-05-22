export const BRAND = {
  green: "#3f7416",
  greenLight: "#7cc242",
  greenBg: "#F4FBE9",
  greenMuted: "#EEF4E4",
  blue: "#1380d4",
  text: "#1f1f1f",
  textMuted: "#555555",
  border: "#d7dfca",
  white: "#ffffff",
} as const;

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getSiteBaseUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    "https://lendsmartmortgages.com.au";
  return url.replace(/\/$/, "");
}

export function formatTimestamp(): string {
  return new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function emailShell(params: {
  siteUrl: string;
  preheader: string;
  heroTitle: string;
  heroSubtitle?: string;
  bodyHtml: string;
  footerNote?: string;
}): string {
  const logoUrl = `${params.siteUrl}/LendSmart-Logo.png`;
  const safePreheader = escapeHtml(params.preheader);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>LendSmart Mortgages</title>
  <style>
    body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; }
    table { border-collapse: collapse; }
    a { color: ${BRAND.blue}; }
    @media only screen and (max-width: 620px) {
      .wrapper { width: 100% !important; }
      .px { padding-left: 20px !important; padding-right: 20px !important; }
      .hero-title { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.greenBg};font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${safePreheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.greenBg};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" class="wrapper" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND.green} 0%,${BRAND.greenLight} 100%);background-color:${BRAND.green};border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
              <a href="${params.siteUrl}" style="text-decoration:none;">
                <img src="${logoUrl}" alt="LendSmart Mortgages" width="200" style="display:block;margin:0 auto;max-width:200px;height:auto;border:0;" />
              </a>
            </td>
          </tr>
          <tr>
            <td class="px" style="background-color:${BRAND.white};padding:36px 40px 24px;text-align:center;border-left:1px solid ${BRAND.border};border-right:1px solid ${BRAND.border};">
              <h1 class="hero-title" style="margin:0 0 10px;font-size:26px;font-weight:700;line-height:1.25;color:${BRAND.text};">
                ${params.heroTitle}
              </h1>
              ${
                params.heroSubtitle
                  ? `<p style="margin:0;font-size:15px;line-height:1.6;color:${BRAND.textMuted};">${params.heroSubtitle}</p>`
                  : ""
              }
            </td>
          </tr>
          <tr>
            <td class="px" style="background-color:${BRAND.white};padding:8px 40px 36px;border-left:1px solid ${BRAND.border};border-right:1px solid ${BRAND.border};">
              ${params.bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background-color:#1c1c1c;border-radius:0 0 12px 12px;padding:28px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#ffffff;">LendSmart Mortgages</p>
              <p style="margin:0 0 16px;font-size:12px;line-height:1.6;color:#b8b8b8;">Smart loan solutions across Australia</p>
              <p style="margin:0 0 12px;font-size:12px;line-height:1.8;">
                <a href="mailto:bharat@lendsmartmortgages.com.au" style="color:${BRAND.greenLight};text-decoration:none;">bharat@lendsmartmortgages.com.au</a>
                <span style="color:#666;"> &nbsp;|&nbsp; </span>
                <a href="${params.siteUrl}/contact" style="color:${BRAND.greenLight};text-decoration:none;">Contact us</a>
              </p>
              ${
                params.footerNote
                  ? `<p style="margin:16px 0 0;font-size:11px;line-height:1.5;color:#888888;">${params.footerNote}</p>`
                  : ""
              }
              <p style="margin:16px 0 0;font-size:11px;color:#666666;">
                &copy; ${new Date().getFullYear()} LendSmart Mortgages. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
