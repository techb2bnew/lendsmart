import {
  BRAND,
  emailShell,
  escapeHtml,
  formatTimestamp,
  getSiteBaseUrl,
} from "@/app/lib/email-shared";

export function buildAdminSubscriberEmail(email: string): string {
  const siteUrl = getSiteBaseUrl();
  const safeEmail = escapeHtml(email);
  const subscribedAt = escapeHtml(formatTimestamp());
  const mailto = `mailto:${encodeURIComponent(email)}`;

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding-bottom:24px;">
          <span style="display:inline-block;padding:6px 14px;border-radius:20px;background-color:${BRAND.greenMuted};font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.green};">
            New subscriber
          </span>
        </td>
      </tr>
      <tr>
        <td style="background-color:${BRAND.greenMuted};border-radius:10px;border:1px solid ${BRAND.border};padding:24px 28px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:${BRAND.textMuted};">
            Subscriber email
          </p>
          <p style="margin:0;font-size:20px;font-weight:700;line-height:1.4;color:${BRAND.text};word-break:break-all;">
            <a href="${mailto}" style="color:${BRAND.green};text-decoration:none;">${safeEmail}</a>
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="border-top:1px solid ${BRAND.border};padding-top:16px;">
                <p style="margin:0;font-size:13px;color:${BRAND.textMuted};">
                  <strong style="color:${BRAND.text};">Subscribed:</strong> ${subscribedAt} (AEST)
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-top:28px;">
          <a href="${siteUrl}/contact" style="display:inline-block;padding:14px 32px;background-color:${BRAND.green};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
            View on website
          </a>
        </td>
      </tr>
    </table>`;

  return emailShell({
    siteUrl,
    preheader: `New newsletter signup: ${email}`,
    heroTitle: "New Newsletter Subscriber",
    heroSubtitle: "Someone just joined the LendSmart newsletter from your website.",
    bodyHtml,
    footerNote: "Internal notification — no reply required.",
  });
}

export function buildClientWelcomeEmail(email: string): string {
  const siteUrl = getSiteBaseUrl();
  const safeEmail = escapeHtml(email);

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding-bottom:20px;">
          <div style="width:64px;height:64px;line-height:64px;border-radius:50%;background:linear-gradient(135deg,${BRAND.greenLight},${BRAND.green});background-color:${BRAND.green};text-align:center;font-size:32px;color:#ffffff;">
            &#10003;
          </div>
        </td>
      </tr>
      <tr>
        <td style="font-size:15px;line-height:1.7;color:${BRAND.text};text-align:center;">
          <p style="margin:0 0 16px;">
            You&apos;re now subscribed to the <strong>LendSmart Newsletter</strong>.
          </p>
          <p style="margin:0 0 8px;color:${BRAND.textMuted};">
            Confirmation sent to<br />
            <strong style="color:${BRAND.green};">${safeEmail}</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 0 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.greenMuted};border-radius:10px;border:1px solid ${BRAND.border};">
            <tr>
              <td style="padding:22px 24px;">
                <p style="margin:0 0 14px;font-size:14px;font-weight:700;color:${BRAND.text};">
                  What you&apos;ll receive
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="top" style="padding:0 10px 10px 0;font-size:18px;color:${BRAND.greenLight};">&#9679;</td>
                    <td style="padding:0 0 10px;font-size:14px;line-height:1.5;color:${BRAND.text};">Latest mortgage news &amp; rate insights</td>
                  </tr>
                  <tr>
                    <td valign="top" style="padding:0 10px 10px 0;font-size:18px;color:${BRAND.greenLight};">&#9679;</td>
                    <td style="padding:0 0 10px;font-size:14px;line-height:1.5;color:${BRAND.text};">Exclusive offers &amp; finance tips</td>
                  </tr>
                  <tr>
                    <td valign="top" style="padding:0 10px 0 0;font-size:18px;color:${BRAND.greenLight};">&#9679;</td>
                    <td style="padding:0;font-size:14px;line-height:1.5;color:${BRAND.text};">Updates from the LendSmart team</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-top:24px;">
          <a href="${siteUrl}/residential-loans" style="display:inline-block;padding:14px 32px;background-color:${BRAND.green};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
            Explore loan services
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
    preheader: "You're subscribed to the LendSmart newsletter",
    heroTitle: "Thank You for Subscribing!",
    heroSubtitle: "We're glad to have you with us.",
    bodyHtml,
    footerNote:
      "You received this email because you subscribed on lendsmartmortgages.com.au.",
  });
}
