# 🚀 Deployment Guide

This guide covers multiple deployment options for your URL Shortener application.

## 📋 Pre-Deployment Checklist

1. ✅ MongoDB Atlas database is set up and accessible
2. ✅ Application works locally
3. ✅ Environment variables are configured
4. ✅ Build script is ready

## 🌟 Option 1: Vercel (Recommended - Easiest)

Vercel is perfect for MERN stack apps and offers generous free tier.

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the application**
   ```bash
   ./build.sh
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   In your Vercel dashboard:
   - `MONGODB_URI`: `mongodb+srv://worktusharsinha01:2PdUz99X4HeyYE46@cluster1.rd6tq3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
   - `BASE_URL`: Your Vercel domain (e.g., `https://your-app.vercel.app`)
   - `NODE_ENV`: `production`

5. **Redeploy after setting environment variables**
   ```bash
   vercel --prod
   ```

### Vercel Configuration
Your app includes a `vercel.json` file with the proper configuration.

---

## 🌟 Option 2: Netlify + Railway

Split deployment: Frontend on Netlify, Backend on Railway.

### Frontend (Netlify):

1. **Build React app**
   ```bash
   cd frontend && npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `frontend/build` folder
   - Or connect your GitHub repository

### Backend (Railway):

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Deploy backend**
   - Connect your GitHub repository
   - Set build command: `cd backend && npm install`
   - Set start command: `cd backend && npm start`

3. **Set Environment Variables in Railway**
   - `MONGODB_URI`: Your MongoDB Atlas URI
   - `BASE_URL`: Your Netlify frontend URL
   - `NODE_ENV`: `production`
   - `PORT`: `8080` (Railway default)

4. **Update Frontend API calls**
   Replace the proxy in `frontend/package.json` with your Railway backend URL.

---

## 🌟 Option 3: Render (Full-Stack)

1. **Create Render account** at [render.com](https://render.com)

2. **Deploy as Web Service**
   - Connect your GitHub repository
   - Build command: `./build.sh`
   - Start command: `cd backend && npm start`

3. **Set Environment Variables**
   - `MONGODB_URI`: Your MongoDB Atlas URI
   - `BASE_URL`: Your Render app URL
   - `NODE_ENV`: `production`

---

## 🌟 Option 4: DigitalOcean App Platform

1. **Create DigitalOcean account**

2. **Create new App**
   - Connect GitHub repository
   - Configure build and run commands

3. **Set Environment Variables**
   - Same as other platforms

---

## 🌟 Option 5: Heroku

**Note**: Heroku no longer offers free tier.

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and create app**
   ```bash
   heroku login
   heroku create your-url-shortener
   ```

3. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-uri"
   heroku config:set BASE_URL="https://your-app.herokuapp.com"
   heroku config:set NODE_ENV="production"
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

---

## 🔧 Environment Variables Reference

For any deployment platform, you'll need these environment variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://worktusharsinha01:...` | Your MongoDB Atlas connection string |
| `BASE_URL` | `https://your-domain.com` | Your deployed app's URL |
| `NODE_ENV` | `production` | Enables production optimizations |
| `PORT` | Platform specific | Server port (auto-set on most platforms) |

---

## ✅ Post-Deployment Testing

After deployment, test these features:

1. **Homepage loads** ✅
2. **URL shortening works** ✅
3. **Short URL redirects work** ✅
4. **Admin panel accessible** ✅
5. **Click tracking works** ✅

### Test URLs:
- Homepage: `https://your-domain.com`
- Admin Panel: `https://your-domain.com/admin`
- Health Check: `https://your-domain.com/api/health`

---

## 🛠️ Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Ensure `BASE_URL` environment variable is set correctly
   - Check that your backend CORS configuration allows your frontend domain

2. **Database Connection Errors**
   - Verify MongoDB Atlas connection string
   - Ensure IP whitelist includes `0.0.0.0/0` for cloud deployments

3. **Short URLs Not Working**
   - Confirm `BASE_URL` environment variable matches your actual domain
   - Check that redirect route `GET /:shortcode` is working

4. **Build Failures**
   - Ensure all dependencies are in `package.json`
   - Check Node.js version compatibility

### Getting Help:
- Check deployment platform logs
- Test API endpoints individually
- Verify environment variables are set correctly

---

## 🎯 Recommended: Vercel Deployment

**Why Vercel?**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Easy environment variable management
- ✅ Automatic deployments from Git
- ✅ Excellent for MERN stack apps

**Quick Deploy Command:**
```bash
# Install Vercel CLI
npm install -g vercel

# Build the app
./build.sh

# Deploy
vercel

# Set environment variables in dashboard
# Then redeploy
vercel --prod
```

Your URL shortener will be live at `https://your-project.vercel.app`! 🎉

