# Lone Melodies — lonemelodies.vercel.app

Book landing page for **Unspoken Love** by Charan Sai Ponnada.

## Project Structure

```
lonemelodies/
├── api/
│   └── subscribe.js       ← Serverless function (calls Resend API)
├── public/
│   └── index.html         ← Landing page
├── vercel.json            ← Vercel routing config
└── .env.example           ← Environment variable reference
```

## Deploy to Vercel (Free — Step by Step)

### Step 1 — Push to GitHub
1. Go to github.com → New Repository → name it `lonemelodies`
2. Upload all files (keep the folder structure)
3. Commit and push

### Step 2 — Connect to Vercel
1. Go to vercel.com → Sign up free with your GitHub account
2. Click **Add New Project** → Import your `lonemelodies` repo
3. Leave all settings as default → click **Deploy**

### Step 3 — Add your Resend API Key
1. In Vercel dashboard → your project → **Settings → Environment Variables**
2. Add:
   - Name: `RESEND_API_KEY`
   - Value: your actual Resend API key (starts with `re_`)
3. Click **Save** → then **Redeploy** from the Deployments tab

### Step 4 — Custom domain (optional)
- Vercel gives you `lonemelodies.vercel.app` automatically
- Go to Settings → Domains → type `lonemelodies` to claim it

## Resend Setup (if needed)
1. Go to resend.com → free account
2. Dashboard → API Keys → Create Key
3. For "from" email to work with your own domain later,
   add your domain under Domains in Resend
4. For now, `onboarding@resend.dev` works for testing

## What happens when someone subscribes
1. They enter their email on the landing page
2. POST request goes to `/api/subscribe`
3. Resend sends a beautiful welcome email to the subscriber
4. Resend sends a notification email to charansaiponnada@gmail.com
5. Success message shows on the page
