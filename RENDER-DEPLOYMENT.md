# Render Deployment Guide

## 🚀 Deploy Your URL Shortener to Render

Render is perfect for full-stack Node.js applications and offers a generous free tier.

## 📋 Prerequisites

1. **GitHub Account** with your code pushed
2. **MongoDB Database** (MongoDB Atlas recommended)
3. **Render Account** at [render.com](https://render.com)

## 🔧 Step 1: Prepare Your Code

### Make scripts executable:
```bash
chmod +x build-render.sh
chmod +x build.sh
```

### Test the build locally:
```bash
./build-render.sh
```

### Push to GitHub:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

## 🌐 Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended)
4. Verify your email

## 🚀 Step 3: Deploy on Render

### 3.1 Create New Web Service
1. Click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository
4. Choose the repository with your URL shortener

### 3.2 Configure the Service
Fill in these details:

- **Name**: `url-shortener` (or any name you prefer)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)
- **Build Command**: `./build-render.sh`
- **Start Command**: `cd backend && npm start`
- **Instance Type**: `Free` (for testing)

### 3.3 Set Environment Variables
Click **"Environment"** tab and add:

| Key | Value | Description |
|-----|-------|-------------|
| `NODE_ENV` | `production` | Production environment |
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB connection string |
| `BASE_URL` | `https://your-app.onrender.com` | Your Render app URL (set after first deploy) |
| `PORT` | `8080` | Port for the application |

### 3.4 Deploy
1. Click **"Create Web Service"**
2. Wait for build to complete (5-10 minutes)
3. Copy your app URL (e.g., `https://your-app.onrender.com`)

## 🔄 Step 4: Update BASE_URL

After first deployment:

1. Go to your service in Render dashboard
2. Click **"Environment"** tab
3. Update `BASE_URL` to your actual Render URL
4. Click **"Save Changes"**
5. Render will automatically redeploy

## ✅ Step 5: Test Your App

1. **Visit your app URL**
2. **Test URL shortening**: Enter a long URL
3. **Test redirection**: Click the short URL
4. **Check admin panel**: Visit `/admin`
5. **Test API**: Visit `/api/health`

## 🛠️ Troubleshooting

### Build Failures
- Check that all dependencies are in package.json
- Ensure build script is executable
- Check Render logs for specific errors

### Runtime Errors
- Verify environment variables are set correctly
- Check MongoDB connection string
- Ensure BASE_URL matches your Render URL

### Common Issues
- **Port binding**: Render automatically sets PORT environment variable
- **Build timeout**: Free tier has 15-minute build limit
- **Cold starts**: Free tier services sleep after inactivity

## 📊 Render Features

- **Automatic HTTPS**
- **Global CDN**
- **Auto-deploy from Git**
- **Environment variable management**
- **Logs and monitoring**
- **Custom domains** (paid plans)

## 💰 Pricing

- **Free Tier**: 750 hours/month, 15-minute build timeout
- **Paid Plans**: Starting at $7/month for always-on services

## 🔗 Useful Links

- [Render Dashboard](https://dashboard.render.com)
- [Render Documentation](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)

## 🎉 Success!

Your URL shortener is now live on Render! 

**Next steps:**
- Set up a custom domain (optional)
- Monitor your app's performance
- Scale up if needed (paid plans)
