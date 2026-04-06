require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : ['*'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, Postman, server-to-server)
    if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// ── Rate limiting: max 5 submissions per 15 min per IP ────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});
app.use('/send', limiter);

// ── Nodemailer transporter (custom SMTP / cPanel) ─────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10) || 465,
  secure: process.env.SMTP_SECURE === 'true',   // true = TLS on connect (port 465)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    // Allow self-signed certs common on shared cPanel hosts
    rejectUnauthorized: false
  }
});

// ── Input sanitiser (strips HTML tags) ───────────────────────────────────────
function sanitise(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 2000);
}

// ── Email templates ───────────────────────────────────────────────────────────

/** Internal notification sent to Saibros */
function buildInternalEmail({ fullName, companyName, email, phone, service, message }) {
  const serviceLabel = service || 'Not specified';
  const company = companyName || 'Not provided';

  return {
    from: `"Saibros Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Enquiry from ${fullName} – ${serviceLabel}`,
    text: `
New contact form submission
===========================
Name:     ${fullName}
Company:  ${company}
Email:    ${email}
Phone:    ${phone}
Service:  ${serviceLabel}

Message:
${message}
        `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; }
    .header { background: #003d5c; padding: 24px 32px; }
    .header h1 { color: #fff; margin: 0; font-size: 20px; letter-spacing: 1px; }
    .header p { color: #a0c4d8; margin: 4px 0 0; font-size: 13px; }
    .body { padding: 32px; background: #f9f9f9; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; color: #888; letter-spacing: 0.5px; }
    .value { font-size: 15px; color: #222; margin-top: 2px; }
    .message-box { background: #fff; border-left: 4px solid #006b8f; padding: 16px; border-radius: 4px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; }
    .footer { background: #003d5c; padding: 16px 32px; text-align: center; }
    .footer p { color: #a0c4d8; font-size: 12px; margin: 0; }
    .reply-btn { display: inline-block; margin-top: 24px; padding: 12px 28px; background: #006b8f; color: #fff; text-decoration: none; border-radius: 6px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>SAIBROS — New Enquiry</h1>
      <p>Submitted via the website contact form</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${fullName}</div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${company}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${phone}</div>
      </div>
      <div class="field">
        <div class="label">Service Required</div>
        <div class="value">${serviceLabel}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message}</div>
      </div>
      <a href="mailto:${email}" class="reply-btn">Reply to ${fullName}</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Saibros Energy Solutions Ltd. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
        `.trim()
  };
}

/** Auto-reply sent to the person who submitted the form */
function buildAutoReplyEmail({ fullName, email, service, message }) {
  const serviceLabel = service || 'your enquiry';

  return {
    from: `"Saibros Energy Solutions" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `We received your message – Saibros Energy Solutions`,
    text: `
Dear ${fullName},

Thank you for reaching out to Saibros Energy Solutions.

We have received your enquiry regarding "${serviceLabel}" and a member of our team will get back to you within 24 hours.

Your message:
${message}

If you need immediate assistance, please call us at +234 810 994 1885.

Best regards,
Saibros Energy Solutions Ltd
36a Circular Road, Elekahia Housing Estate,
Port Harcourt, Rivers State, Nigeria
        `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; }
    .header { background: #003d5c; padding: 24px 32px; }
    .header h1 { color: #fff; margin: 0; font-size: 20px; letter-spacing: 1px; }
    .header p { color: #a0c4d8; margin: 4px 0 0; font-size: 13px; }
    .body { padding: 32px; background: #f9f9f9; line-height: 1.7; }
    .message-box { background: #fff; border-left: 4px solid #006b8f; padding: 16px; border-radius: 4px; margin: 16px 0; white-space: pre-wrap; font-size: 14px; color: #555; }
    .contact-row { display: flex; align-items: center; margin-bottom: 8px; font-size: 14px; }
    .footer { background: #003d5c; padding: 16px 32px; text-align: center; }
    .footer p { color: #a0c4d8; font-size: 12px; margin: 0; }
    .divider { border: none; border-top: 1px solid #e0e0e0; margin: 24px 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>SAIBROS ENERGY SOLUTIONS</h1>
      <p>Marine Logistics &amp; Offshore Support</p>
    </div>
    <div class="body">
      <p>Dear <strong>${fullName}</strong>,</p>
      <p>Thank you for reaching out to <strong>Saibros Energy Solutions</strong>.</p>
      <p>We have received your enquiry regarding <strong>${serviceLabel}</strong> and a member of our team will get back to you within <strong>24 hours</strong>.</p>
      <p>Your message:</p>
      <div class="message-box">${message}</div>
      <hr class="divider">
      <p style="font-size:14px;">If you need immediate assistance, please contact us:</p>
      <p style="font-size:14px;">📞 <a href="tel:+2348109941885">+234 810 994 1885</a></p>
      <p style="font-size:14px;">✉️ <a href="mailto:info@saibrosgroup.com">info@saibrosgroup.com</a></p>
      <p style="font-size:14px; margin-top:24px;">Best regards,<br><strong>Saibros Energy Solutions Ltd</strong><br>
      <span style="color:#888; font-size:13px;">36a Circular Road, Elekahia Housing Estate,<br>Port Harcourt, Rivers State, Nigeria</span></p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Saibros Energy Solutions Ltd. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
        `.trim()
  };
}

// ── POST /send ────────────────────────────────────────────────────────────────
app.post('/send', async (req, res) => {
  const { fullName, companyName, email, phone, service, message } = req.body;

  // Basic required-field validation
  if (!fullName || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  // Simple email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  // Sanitise all inputs
  const data = {
    fullName: sanitise(fullName),
    companyName: sanitise(companyName),
    email: sanitise(email),
    phone: sanitise(phone),
    service: sanitise(service),
    message: sanitise(message)
  };

  const ts = () => new Date().toISOString();

  // ── 1. Internal notification to Saibros ──────────────────────────────────
  let internalSent = false;
  try {
    const info = await transporter.sendMail(buildInternalEmail(data));
    internalSent = true;
    console.log(`[${ts()}] Internal notification sent — id: ${info.messageId}`);
  } catch (err) {
    console.error(`[${ts()}] INTERNAL EMAIL FAILED — ${err.code}: ${err.message}`);
    if (err.response) console.error(`  SMTP response: ${err.response}`);
  }

  // ── 2. Auto-reply to the visitor ─────────────────────────────────────────
  let autoReplySent = false;
  try {
    const info = await transporter.sendMail(buildAutoReplyEmail(data));
    autoReplySent = true;
    console.log(`[${ts()}] Auto-reply sent to: ${data.email} — id: ${info.messageId}`);
  } catch (err) {
    console.error(`[${ts()}] AUTO-REPLY FAILED to ${data.email} — ${err.code}: ${err.message}`);
    if (err.response) console.error(`  SMTP response: ${err.response}`);
  }

  // ── Respond to the browser ────────────────────────────────────────────────
  // Always return success if at least the internal notification went through.
  // The visitor's UX shouldn't be blocked by auto-reply delivery issues.
  if (internalSent) {
    return res.json({ success: true, message: 'Message sent successfully.' });
  } else {
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Saibros email service running on port ${PORT}`);
  console.log(`Sending from: ${process.env.SMTP_USER}`);
  console.log(`Delivering to: ${process.env.RECIPIENT_EMAIL}`);
});
