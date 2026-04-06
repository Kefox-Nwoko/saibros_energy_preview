# Netlify Deployment Setup

This guide will help you deploy the contact form serverless function to Netlify.

## Steps to Deploy:

### 1. Create Netlify Account
- Go to https://www.netlify.com/
- Sign up with your GitHub account

### 2. Import Your Repository
- Click "Add new site" > "Import an existing project"
- Choose "GitHub"
- Select your repository: `saibros_energy_preview`

### 3. Configure Build Settings
- Build command: (leave empty)
- Publish directory: `.`
- Click "Deploy site"

### 4. Add Environment Variable
After deployment:
- Go to Site settings > Environment variables
- Click "Add a variable"
- Key: `BREVO_API_KEY`
- Value: `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`
- Click "Create variable"

### 5. Redeploy
- Go to Deploys tab
- Click "Trigger deploy" > "Deploy site"

### 6. Test the Contact Form
- Visit your Netlify URL (e.g., `https://your-site.netlify.app/contact.html`)
- Fill out and submit the contact form
- Check if emails are received

## How It Works:

1. User submits contact form on your website
2. Form sends data to `/.netlify/functions/send-email`
3. Netlify function calls Brevo API with your API key (stored securely)
4. Brevo sends emails
5. User gets success message

## Benefits:

- ✅ FREE hosting
- ✅ API key hidden from public
- ✅ No CORS issues
- ✅ Automatic HTTPS
- ✅ Works with GitHub Pages too (just point form to Netlify function URL)

## Troubleshooting:

If the form doesn't work:
1. Check Netlify function logs: Site > Functions > send-email > Logs
2. Verify environment variable is set correctly
3. Check browser console for errors
