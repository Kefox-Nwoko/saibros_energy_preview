# Vercel Deployment Setup

This guide will help you deploy the contact form serverless function to Vercel.

## Steps to Deploy:

### 1. Create Vercel Account
- Go to https://vercel.com/
- Sign up with your GitHub account

### 2. Import Your Repository
- Click "Add New" > "Project"
- Choose "Import Git Repository"
- Select your repository: `saibros_energy_preview`
- Click "Import"

### 3. Configure Project Settings
- Framework Preset: Other
- Root Directory: `./`
- Build Command: (leave empty)
- Output Directory: (leave empty)
- Click "Deploy"

### 4. Add Environment Variable
After deployment:
- Go to Project Settings > Environment Variables
- Add variable:
  - Name: `BREVO_API_KEY`
  - Value: `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`
  - Environment: Production, Preview, Development (select all)
- Click "Save"

### 5. Redeploy
- Go to Deployments tab
- Click the three dots on the latest deployment
- Click "Redeploy"

### 6. Test the Contact Form
- Visit your Vercel URL (e.g., `https://your-site.vercel.app/contact.html`)
- Fill out and submit the contact form
- Check if emails are received

## How It Works:

1. User submits contact form on your website
2. Form sends data to `/api/send-email`
3. Vercel function calls Brevo API with your API key (stored securely)
4. Brevo sends emails
5. User gets success message

## Benefits:

- ✅ FREE hosting
- ✅ API key hidden from public
- ✅ No CORS issues
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Works with GitHub Pages too (just point form to Vercel function URL)

## Using with GitHub Pages:

If you want to keep using GitHub Pages for hosting but use Vercel only for the contact form:

1. Deploy to Vercel as described above
2. Get your Vercel URL (e.g., `https://saibros-energy.vercel.app`)
3. Update `contact-handler.js`:
   ```javascript
   const FUNCTION_URL = 'https://saibros-energy.vercel.app/api/send-email';
   ```
4. Push to GitHub

## Troubleshooting:

If the form doesn't work:
1. Check Vercel function logs: Project > Deployments > Click deployment > Functions tab
2. Verify environment variable is set correctly
3. Check browser console for errors
4. Make sure CORS is enabled (already configured in the function)
