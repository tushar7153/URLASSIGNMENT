#!/bin/bash

echo "🚀 Starting URL Shortener Development Servers..."

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port $1 is already in use"
        return 1
    fi
    return 0
}

# Check if required ports are available
if ! check_port 3000; then
    echo "❌ Frontend port 3000 is busy"
    exit 1
fi

if ! check_port 5000; then
    echo "❌ Backend port 5000 is busy"
    exit 1
fi

echo "✅ Ports are available"

# Start backend in background
echo "🔧 Starting backend server..."
cd backend
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "🎨 Starting frontend server..."
cd ../frontend
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are starting up..."
echo "📍 Frontend: http://localhost:3000"
echo "📍 Backend: http://localhost:5000"
echo "📍 Admin Panel: http://localhost:3000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user interruption
wait

# Cleanup
echo "🛑 Shutting down servers..."
kill $BACKEND_PID 2>/dev/null
kill $FRONTEND_PID 2>/dev/null

