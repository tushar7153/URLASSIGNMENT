#!/bin/bash

echo "🚀 Deploying URL Shortener to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the application
echo "🔨 Building application..."
./build.sh

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Go to your Vercel dashboard"
echo "2. Set these environment variables:"
echo "   - MONGODB_URI: mongodb+srv://worktusharsinha01:2PdUz99X4HeyYE46@cluster1.rd6tq3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
echo "   - BASE_URL: https://your-project.vercel.app (use your actual Vercel URL)"
echo "   - NODE_ENV: production"
echo "3. Redeploy with: vercel --prod"
echo ""
echo "📍 Your app will be live at: https://your-project.vercel.app"

