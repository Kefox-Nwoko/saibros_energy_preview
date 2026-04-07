# reCAPTCHA Setup Instructions

The contact form now includes Google reCAPTCHA v2 for spam protection.

## Setup Steps:

### 1. Get reCAPTCHA Keys
1. Go to https://www.google.com/recaptcha/admin/create
2. Sign in with Google account
3. Fill in the form:
   - **Label:** Saibros Contact Form
   - **reCAPTCHA type:** Choose "reCAPTCHA v2" > "I'm not a robot" Checkbox
   - **Domains:** Add all your domains:
     - `saibrosgroup.com`
     - `www.saibrosgroup.com`
     - `kefox-nwoko.github.io` (if using GitHub Pages)
     - `saibros-energy-preview.vercel.app` (if using Vercel)
4. Accept terms and click **Submit**
5. Copy your **Site Key** and **Secret Key**

### 2. Update contact.html
Open `contact.html` and find this line (around line 242):
```html
<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
```

Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual Site Key:
```html
<div class="g-recaptcha" data-sitekey="6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"></div>
```

### 3. Test
1. Open your contact page
2. Fill out the form
3. Check the "I'm not a robot" box
4. Submit the form

The form will not submit unless reCAPTCHA is completed.

## Note:
The Secret Key is not needed for client-side validation. It's only needed if you implement server-side verification (recommended for production but not required with EmailJS).

## Troubleshooting:
- If reCAPTCHA doesn't appear, check browser console for errors
- Make sure your domain is added to the allowed domains list
- Clear browser cache if you recently updated the site key
