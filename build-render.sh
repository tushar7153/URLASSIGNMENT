#!/bin/bash

echo "🚀 Building for Render deployment..."

# Install root dependencies
npm install

# Build frontend
echo "📦 Building React frontend..."
cd frontend
npm install
npm run build
cd ..

# Copy frontend build to backend
echo "📁 Copying frontend build to backend..."
cp -r frontend/build backend/

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend
npm install
cd ..

echo "✅ Build complete! Ready for Render deployment."
echo ""
echo "📝 Next steps:"
echo "1. Push this code to GitHub"
echo "2. Connect your repo to Render"
echo "3. Set environment variables in Render dashboard"
