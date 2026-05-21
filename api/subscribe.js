// ── Welcome email sent to the subscriber ──────────────────────────────────────
function welcomeEmail(email) {
  return {
    from: "onboarding@resend.dev",
    to: email,
    subject: "You're on the list — Unspoken Love 🌿",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Unspoken Love</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#0e0e0e;border:1px solid rgba(255,255,255,0.06);max-width:560px;width:100%;">

          <!-- TOP GOLD LINE -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td align="center" style="padding:48px 48px 32px;background:linear-gradient(180deg,#1a2e1a 0%,#0e0e0e 100%);">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:5px;text-transform:uppercase;color:#4a7c4a;">lone melodies</p>
              <h1 style="margin:0;font-family:'Georgia',serif;font-size:52px;font-weight:300;font-style:italic;color:#f5f0e8;line-height:1;">Unspoken Love</h1>
              <p style="margin:16px 0 0;font-size:13px;font-style:italic;color:#c9a84c;letter-spacing:2px;">by Charan Sai Ponnada</p>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td align="center" style="padding:0 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:40px 48px;">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.9;color:rgba(245,240,232,0.55);font-style:italic;">
                Dear reader,
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.9;color:rgba(245,240,232,0.75);">
                Thank you for believing in this story before it even finds its way to print.
                You're now on the early list for <strong style="color:#f5f0e8;">Unspoken Love</strong> —
                a novel about the love we carry quietly, the words we never say, and the people
                who see us even when we think we're invisible.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.9;color:rgba(245,240,232,0.75);">
                You'll be the first to know when the book launches — and there may be
                a few exclusive excerpts along the way, just for you.
              </p>

              <!-- POEM BLOCK -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-left:3px solid #2d4a2d;margin-bottom:32px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0;font-family:'Georgia',serif;font-style:italic;font-size:16px;line-height:2.1;color:rgba(245,240,232,0.8);">
                      "She isn't beautiful…<br>
                      she's poetry that forgot<br>
                      it was written on skin."
                    </p>
                    <p style="margin:16px 0 0;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#4a7c4a;">— Unspoken Love, Chapter 2</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:15px;line-height:1.9;color:rgba(245,240,232,0.6);">
                Until then, find me on Instagram where I write the quiet things —
              </p>

              <!-- CTA BUTTON -->
              <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td style="background:#2d4a2d;">
                    <a href="https://www.instagram.com/lone_melodies/" target="_blank"
                       style="display:inline-block;padding:14px 36px;font-family:'Georgia',serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#f5f0e8;text-decoration:none;">
                      @lone_melodies
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;font-size:14px;font-style:italic;color:rgba(245,240,232,0.4);line-height:1.8;">
                With all my unspoken feelings,<br>
                <span style="color:rgba(245,240,232,0.65);">Charan Sai Ponnada</span>
              </p>
            </td>
          </tr>

          <!-- BOTTOM GOLD LINE -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);"></td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="padding:24px 48px;background:#060606;">
              <p style="margin:0;font-size:11px;color:rgba(245,240,232,0.2);letter-spacing:2px;">
                © 2025 Charan Sai Ponnada &nbsp;·&nbsp; lone melodies &nbsp;·&nbsp;
                <a href="https://www.instagram.com/lone_melodies/" style="color:rgba(245,240,232,0.3);text-decoration:none;">Instagram</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

// ── Notification email sent to Charan ─────────────────────────────────────────
function notifyEmail(subscriberEmail) {
  return {
    from: "onboarding@resend.dev",
    to: "charansaiponnada@gmail.com",
    subject: `✦ New subscriber — ${subscriberEmail}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#0e0e0e;border:1px solid rgba(255,255,255,0.06);max-width:480px;width:100%;">
          <tr><td style="height:3px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);"></td></tr>
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 6px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#4a7c4a;">lone melodies</p>
              <h2 style="margin:0 0 28px;font-size:24px;font-weight:300;font-style:italic;color:#f5f0e8;">New Subscriber ✦</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-left:3px solid #2d4a2d;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#4a7c4a;">Email</p>
                    <p style="margin:0;font-size:16px;color:#f5f0e8;">${subscriberEmail}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:13px;line-height:1.9;color:rgba(245,240,232,0.45);">
                Someone just joined the waitlist for Unspoken Love.<br>
                Your reader list is growing. Keep writing. 🌿
              </p>
            </td>
          </tr>
          <tr><td style="height:3px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);"></td></tr>
          <tr>
            <td align="center" style="padding:16px;background:#060606;">
              <p style="margin:0;font-size:10px;color:rgba(245,240,232,0.2);letter-spacing:2px;">© 2025 Charan Sai Ponnada</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

// ── Handler ───────────────────────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body || {};
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing from environment variables");
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    console.log(`Attempting to subscribe: ${email}`);

    const resendRequest = async (payload) => {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      return { status: response.status, body };
    };

    const [welcomeRes, notifyRes] = await Promise.allSettled([
      resendRequest(welcomeEmail(email)),
      resendRequest(notifyEmail(email)),
    ]);

    const welcome = welcomeRes.status === 'fulfilled' ? welcomeRes.value : { status: 500, body: { message: welcomeRes.reason?.message } };
    const notify = notifyRes.status === 'fulfilled' ? notifyRes.value : { status: 500, body: { message: notifyRes.reason?.message } };

    if (welcome.status >= 400) {
      console.error("Welcome email failed:", welcome.status, welcome.body);
      return res.status(welcome.status).json({ 
        error: "Resend API Error",
        details: welcome.body.message || welcome.body.error || "Unknown error",
        status: welcome.status
      });
    }

    if (notify.status >= 400) {
      console.warn("Notification email failed:", notify.status, notify.body);
    }

    console.log("Successfully subscribed:", email);
    return res.status(200).json({ success: true, message: "Subscribed successfully" });

  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
