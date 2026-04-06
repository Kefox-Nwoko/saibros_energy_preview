require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: { rejectUnauthorized: false },
    debug: true,
    logger: true
});

// Pass an external email address as a command-line argument
// Example: node test-send.js yourname@gmail.com
const TEST_EXTERNAL_EMAIL = process.argv[2];

if (!TEST_EXTERNAL_EMAIL) {
    console.error('Usage: node test-send.js <external-email-to-test>');
    console.error('Example: node test-send.js yourname@gmail.com');
    process.exit(1);
}

async function runTest() {
    console.log('=== Saibros SMTP Diagnostic ===');
    console.log('Sending from :', process.env.SMTP_USER);
    console.log('Via          :', process.env.SMTP_HOST + ':' + process.env.SMTP_PORT);
    console.log('Test target  :', TEST_EXTERNAL_EMAIL);
    console.log('');

    // Test 1: Internal notification to Saibros inbox
    console.log('--- Test 1: Internal notification to Saibros inbox ---');
    try {
        const info = await transporter.sendMail({
            from: `"Saibros Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: TEST_EXTERNAL_EMAIL,
            subject: 'TEST — Internal notification check',
            text: 'Internal notification is working. This should arrive at inquiry@saibrosgroup.com.'
        });
        console.log('SUCCESS — MessageId:', info.messageId, '| Response:', info.response);
    } catch (err) {
        console.error('FAILED —', err.code, ':', err.message);
        if (err.response) console.error('SMTP Response:', err.response);
    }

    // Test 2: Auto-reply to external visitor email
    console.log('\n--- Test 2: Auto-reply to external email (' + TEST_EXTERNAL_EMAIL + ') ---');
    try {
        const info = await transporter.sendMail({
            from: `"Saibros Energy Solutions" <${process.env.SMTP_USER}>`,
            to: TEST_EXTERNAL_EMAIL,
            subject: 'TEST — Auto-reply to visitor check',
            text: 'If you receive this, auto-reply delivery to external email addresses is working.\n\nSaibros Energy Solutions'
        });
        console.log('SUCCESS — MessageId:', info.messageId, '| Response:', info.response);
    } catch (err) {
        console.error('FAILED —', err.code, ':', err.message);
        if (err.response) console.error('SMTP Response:', err.response);
    }
}

runTest();
