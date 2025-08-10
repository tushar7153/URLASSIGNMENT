#!/bin/bash

echo "🚀 Deploying to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the application
echo "🔨 Building application..."
chmod +x build.sh
./build.sh

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your app should be live at the URL provided above."
echo ""
echo "📝 Don't forget to set these environment variables in Vercel:"
echo "   - MONGODB_URI: Your MongoDB connection string"
echo "   - BASE_URL: Your Vercel deployment URL"
echo "   - NODE_ENV: production"
