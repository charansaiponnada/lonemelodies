# Lone Melodies — lonemelodies.vercel.app

Book landing page for **Unspoken Love** by Charan Sai Ponnada.
Design system rooted in **"The Unspoken Room"** — warm amber lamplight, leather textures, deep literary typography.

## Project Structure

```
lonemelodies/
├── api/
│   └── subscribe.js       ← Serverless function (sends email via Gmail SMTP + Nodemailer)
├── public/
│   └── index.html         ← Landing page
├── DESIGN.md              ← Design system tokens and rules
├── PRODUCT.md             ← Strategic context and brand principles
├── .impeccable/
│   └── design.json        ← Design system sidecar (live panel, token metadata)
├── vercel.json            ← Vercel routing config
└── .env.example           ← Environment variable reference
```

## Deploy to Vercel (Free)

### Step 1 — Push to GitHub
1. Go to github.com → New Repository → name it `lonemelodies`
2. Upload all files (keep the folder structure)
3. Commit and push

### Step 2 — Connect to Vercel
1. Go to vercel.com → Sign up free with your GitHub account
2. Click **Add New Project** → Import your `lonemelodies` repo
3. Leave all settings as default → click **Deploy**

### Step 3 — Add environment variables
1. In Vercel dashboard → your project → **Settings → Environment Variables**
2. Add:
   - `EMAIL_USER` — your Gmail address (e.g. `charansaiponnada06@gmail.com`)
   - `EMAIL_APP_PASSWORD` — your Gmail app password (generate one at myaccount.google.com/apppasswords)
3. Click **Save** → then **Redeploy** from the Deployments tab

### Step 4 — Custom domain (optional)
- Vercel gives you `lonemelodies.vercel.app` automatically
- Go to Settings → Domains → type `lonemelodies` to claim it

## What happens when someone subscribes
1. They enter their email on the landing page
2. POST request goes to `/api/subscribe`
3. Nodemailer sends a warm-branded welcome email to the subscriber
4. A notification email goes to charansaiponnada06@gmail.com
5. Success message shows on the page
