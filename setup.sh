#!/bin/bash

echo "🚀 Setting up URL Shortener Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are available"

# Setup Backend
echo "📦 Setting up backend dependencies..."
cd backend
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOL
PORT=5000
MONGODB_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:3000
EOL
    echo "✅ Created .env file with default settings"
fi

cd ..

# Setup Frontend
echo "📦 Setting up frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Make sure MongoDB is running on your system"
echo "2. Start the backend server: cd backend && npm run dev"
echo "3. Start the frontend server: cd frontend && npm start"
echo ""
echo "📍 Application URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:5000"
echo "   Admin Panel: http://localhost:3000/admin"

