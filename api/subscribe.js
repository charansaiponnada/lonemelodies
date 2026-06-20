const nodemailer = require("nodemailer");

// ── Welcome email sent to the subscriber ──────────────────────────────────────
function welcomeEmail(from, to) {
  return {
    from: `"Charan Sai Ponnada" <${from}>`,
    to: to,
    subject: "You're on the list  ·  Unspoken Love",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Unspoken Love</title>
</head>
<body style="margin:0;padding:0;background:#0d0a08;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0a08;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#15110e;border:1px solid rgba(255,255,255,0.05);max-width:560px;width:100%;">

          <!-- TOP AMBER LINE -->
          <tr>
            <td style="height:2px;background:linear-gradient(90deg,transparent,#cb8e3e,transparent);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td align="center" style="padding:48px 48px 32px;background:linear-gradient(180deg,#3b281c 0%,#15110e 100%);">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:5px;text-transform:uppercase;color:#5c3f2a;">lone melodies</p>
              <h1 style="margin:0;font-family:'Georgia',serif;font-size:52px;font-weight:300;font-style:italic;color:#efe4d0;line-height:1;">Unspoken Love</h1>
              <p style="margin:16px 0 0;font-size:13px;font-style:italic;color:#cb8e3e;letter-spacing:2px;">by Charan Sai Ponnada</p>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td align="center" style="padding:0 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,rgba(203,142,62,0.35),transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:40px 48px;">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.9;color:rgba(239,228,208,0.5);font-style:italic;">
                Dear reader,
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.9;color:rgba(239,228,208,0.7);">
                Thank you for believing in this story before it even finds its way to print.
                You are now on the early list for <strong style="color:#efe4d0;">Unspoken Love</strong>,
                a novel about the love we carry quietly, the words we never say, and the people
                who see us even when we think we are invisible.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.9;color:rgba(239,228,208,0.7);">
                You will be the first to know when the book launches, and there may be
                a few exclusive excerpts along the way, just for you.
              </p>

              <!-- POEM BLOCK -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#1c1510;margin-bottom:32px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0;font-family:'Georgia',serif;font-style:italic;font-size:16px;line-height:2.1;color:rgba(239,228,208,0.75);">
                      "She isn't beautiful ...<br>
                      she's poetry that forgot<br>
                      it was written on skin."
                    </p>
                    <p style="margin:16px 0 0;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#5c3f2a;">Unspoken Love, Chapter 2</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:15px;line-height:1.9;color:rgba(239,228,208,0.55);">
                Until then, find me on Instagram where I write the quiet things.
              </p>

              <!-- CTA BUTTON -->
              <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td style="background:#3b281c;">
                    <a href="https://www.instagram.com/lone_melodies/" target="_blank"
                       style="display:inline-block;padding:14px 36px;font-family:'Georgia',serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#efe4d0;text-decoration:none;">
                      @lone_melodies
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;font-size:14px;font-style:italic;color:rgba(239,228,208,0.35);line-height:1.8;">
                With all my unspoken feelings,<br>
                <span style="color:rgba(239,228,208,0.6);">Charan Sai Ponnada</span>
              </p>
            </td>
          </tr>

          <!-- BOTTOM AMBER LINE -->
          <tr>
            <td style="height:2px;background:linear-gradient(90deg,transparent,#cb8e3e,transparent);"></td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="padding:24px 48px;background:#0a0807;">
              <p style="margin:0;font-size:11px;color:rgba(239,228,208,0.2);letter-spacing:2px;">
                &copy; 2025 Charan Sai Ponnada &nbsp;·&nbsp; lone melodies &nbsp;·&nbsp;
                <a href="https://www.instagram.com/lone_melodies/" style="color:rgba(239,228,208,0.25);text-decoration:none;">Instagram</a>
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
function notifyEmail(from, subscriberEmail) {
  return {
    from: `"Lone Melodies Alerts" <${from}>`,
    to: "charansaiponnada06@gmail.com",
    subject: `New subscriber  ·  ${subscriberEmail}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0d0a08;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0a08;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#15110e;border:1px solid rgba(255,255,255,0.05);max-width:480px;width:100%;">
          <tr><td style="height:2px;background:linear-gradient(90deg,transparent,#cb8e3e,transparent);"></td></tr>
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 6px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#5c3f2a;">lone melodies</p>
              <h2 style="margin:0 0 28px;font-size:24px;font-weight:300;font-style:italic;color:#efe4d0;">New Subscriber</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#1c1510;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#5c3f2a;">Email</p>
                    <p style="margin:0;font-size:16px;color:#efe4d0;">${subscriberEmail}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:13px;line-height:1.9;color:rgba(239,228,208,0.4);">
                Someone just joined the waitlist for Unspoken Love.<br>
                Your reader list is growing. Keep writing.
              </p>
            </td>
          </tr>
          <tr><td style="height:2px;background:linear-gradient(90deg,transparent,#cb8e3e,transparent);"></td></tr>
          <tr>
            <td align="center" style="padding:16px;background:#0a0807;">
              <p style="margin:0;font-size:10px;color:rgba(239,228,208,0.2);letter-spacing:2px;">&copy; 2025 Charan Sai Ponnada</p>
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

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPass) {
    console.error("EMAIL_USER or EMAIL_APP_PASSWORD is missing from environment variables");
    return res.status(500).json({ error: "Email configuration missing" });
  }

  try {
    console.log(`Attempting to subscribe: ${email}`);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Send emails
    const [welcomeResult, notifyResult] = await Promise.allSettled([
      transporter.sendMail(welcomeEmail(emailUser, email)),
      transporter.sendMail(notifyEmail(emailUser, email)),
    ]);

    // Check results
    if (welcomeResult.status === "rejected") {
      console.error("Welcome email failed:", welcomeResult.reason);
      return res.status(500).json({ 
        error: "Email Error",
        details: "Could not send welcome email. Please check configuration."
      });
    }

    if (notifyResult.status === "rejected") {
      console.warn("Notification email failed:", notifyResult.reason);
    }

    console.log("Successfully subscribed:", email);
    return res.status(200).json({ success: true, message: "Subscribed successfully" });

  } catch (err) {
    console.error("Subscription error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
