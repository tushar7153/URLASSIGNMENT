# Vercel Deployment Guide

## Important: Vercel Configuration

Vercel needs to be configured correctly for your full-stack Node.js application.

### Step 1: Vercel Dashboard Configuration

1. **Go to your project's Settings → General → Build & Output Settings**
2. **Change these settings:**
   - **Framework Preset**: `Other` (not React, Next.js, etc.)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm run install-all`

3. **In Settings → Project Settings → Root Directory**
   - Set to: `/` (root of your repository)

### Step 2: Environment Variables

Set these in Vercel dashboard → Settings → Environment Variables:

- `MONGODB_URI`: Your MongoDB connection string
- `BASE_URL`: Your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
- `NODE_ENV`: `production`

### Step 3: Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## How It Works

1. **Build Process**: Vercel runs `npm run vercel-build` which:
   - Builds the React frontend
   - Copies build files to backend directory
   - Installs dependencies

2. **Runtime**: Vercel serves `backend/server.js` as a serverless function
3. **Static Files**: The React build files are served from the backend directory
4. **Routing**: All requests go through the backend

## Troubleshooting

- **Build Errors**: Check that all dependencies are in package.json
- **Function Errors**: Verify environment variables are set
- **404 Errors**: Ensure routes are configured correctly in vercel.json
