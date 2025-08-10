#!/bin/bash

echo "Building frontend for Vercel deployment..."
cd frontend
npm install
npm run build
cd ..

echo "Copying frontend build to backend directory..."
cp -r frontend/build backend/

echo "Installing backend dependencies..."
cd backend
npm install
cd ..

echo "Build complete! Ready for Vercel deployment."
