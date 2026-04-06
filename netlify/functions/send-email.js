// Netlify serverless function to send emails via Brevo API
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Parse the request body
  const { fullName, companyName, email, phone, service, message } = JSON.parse(event.body);

  // Validate required fields
  if (!fullName || !email || !phone || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' })
    };
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

  const headers = {
    'Content-Type': 'application/json',
    'api-key': BREVO_API_KEY
  };

  const company = companyName || 'Not provided';
  const serviceLabel = service || 'Not specified';

  // Internal notification email (to Saibros)
  const internalEmail = {
    sender: { name: 'Saibros Energy Solutions', email: 'inquiry@saibrosgroup.com' },
    to: [{ email: 'inquiry@saibrosgroup.com', name: 'Saibros Enquiries' }],
    replyTo: { email: email, name: fullName },
    subject: `New Enquiry from ${fullName} – ${serviceLabel}`,
    htmlContent: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
  <div style="background:#003d5c;padding:24px 32px;text-align:center">
    <h2 style="color:#fff;margin:0;font-family:'Arial Black',Impact,sans-serif;font-size:20px;letter-spacing:3px">SAIBROS — NEW ENQUIRY</h2>
    <p style="color:#a0c4d8;margin:6px 0 0;font-size:13px">Submitted via the website contact form</p>
  </div>
  <div style="padding:32px;background:#f9f9f9">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;width:35%;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222"><strong>${fullName}</strong></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Company</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222">${company}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Email</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222"><a href="mailto:${email}" style="color:#006b8f">${email}</a></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222"><a href="tel:${phone}" style="color:#006b8f">${phone}</a></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Service</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222">${serviceLabel}</td></tr>
    </table>
    <div style="margin-top:24px">
      <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Message</p>
      <div style="background:#fff;border-left:4px solid #006b8f;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#333">${message}</div>
    </div>
    <div style="margin-top:28px;text-align:center">
      <a href="mailto:${email}" style="display:inline-block;padding:12px 28px;background:#006b8f;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:bold">Reply to ${fullName}</a>
    </div>
  </div>
  <div style="background:#003d5c;padding:16px 32px;text-align:center">
    <p style="color:#a0c4d8;font-size:12px;margin:0">&copy; ${new Date().getFullYear()} Saibros Energy Solutions Limited. All rights reserved.</p>
  </div>
</div>`
  };

  // Auto-reply email (to visitor)
  const autoReplyEmail = {
    sender: { name: 'Saibros Energy Solutions', email: 'inquiry@saibrosgroup.com' },
    to: [{ email: email, name: fullName }],
    replyTo: { email: 'inquiry@saibrosgroup.com', name: 'Saibros Energy Solutions' },
    subject: 'We received your message – Saibros Energy Solutions',
    htmlContent: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
  <div style="background:#003d5c;padding:24px 32px;text-align:center">
    <h2 style="color:#fff;margin:0;font-family:'Arial Black',Impact,sans-serif;font-size:20px;letter-spacing:3px">SAIBROS ENERGY SOLUTIONS</h2>
    <p style="color:#a0c4d8;margin:6px 0 0;font-size:13px">Marine Logistics &amp; Offshore Support</p>
  </div>
  <div style="padding:32px;background:#f9f9f9;line-height:1.7">
    <p>Dear <strong>${fullName}</strong>,</p>
    <p>Thank you for reaching out to <strong>Saibros Energy Solutions</strong>.</p>
    <p>We have received your enquiry regarding <strong>${serviceLabel}</strong> and a member of our team will get back to you within <strong>24 hours</strong>.</p>
    <p style="margin-top:20px;font-size:14px;color:#888">Your message:</p>
    <div style="background:#fff;border-left:4px solid #006b8f;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#555;margin:12px 0 24px">${message}</div>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0">
    <p style="font-size:14px">If you need immediate assistance, please contact us:</p>
    <p style="font-size:14px;margin:8px 0">📞 <a href="tel:+2348109941885" style="color:#006b8f;text-decoration:none">+234 810 994 1885</a></p>
    <p style="font-size:14px;margin:8px 0">✉️ <a href="mailto:info@saibrosgroup.com" style="color:#006b8f;text-decoration:none">info@saibrosgroup.com</a></p>
    <p style="font-size:14px;margin-top:24px">Best regards,<br><strong>Saibros Energy Solutions Ltd</strong><br>
    <span style="color:#888;font-size:13px">36a Circular Road, Elekahia Housing Estate,<br>Port Harcourt, Rivers State, Nigeria</span></p>
  </div>
  <div style="background:#003d5c;padding:16px 32px;text-align:center">
    <p style="color:#a0c4d8;font-size:12px;margin:0">&copy; ${new Date().getFullYear()} Saibros Energy Solutions Limited. All rights reserved.</p>
  </div>
</div>`
  };

  try {
    // Send internal notification
    const response1 = await fetch(BREVO_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(internalEmail)
    });

    if (!response1.ok) {
      const error = await response1.json();
      console.error('Brevo API error:', error);
      return {
        statusCode: response1.status,
        body: JSON.stringify({ error: 'Failed to send email', details: error })
      };
    }

    // Send auto-reply
    const response2 = await fetch(BREVO_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(autoReplyEmail)
    });

    if (!response2.ok) {
      console.error('Auto-reply failed but internal email sent');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
};
