#!/bin/bash

echo "🔨 Building URL Shortener for Production..."

# Install dependencies
echo "📦 Installing dependencies..."
cd frontend
npm install

# Build frontend
echo "🎨 Building React frontend..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
    echo "📁 Build files are in frontend/build/"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

cd ..

echo "✅ Production build complete!"
echo ""
echo "🚀 Ready for deployment!"
echo "   Frontend build: frontend/build/"
echo "   Backend entry: backend/server.js"

