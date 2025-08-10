# URL Shortener

A full-stack URL shortener built with MERN stack (MongoDB, Express, React, Node.js).

## Features

- Shorten long URLs
- Track click statistics
- Admin dashboard
- Responsive design

## Quick Start

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Set up environment variables in `backend/.env`:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   BASE_URL=http://localhost:3000
   ```

3. **Start development servers:**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── backend/          # Express server + MongoDB
├── frontend/         # React application
└── package.json      # Root scripts
```

## API Endpoints

- `POST /api/shorten` - Create short URL
- `GET /:shortcode` - Redirect to original URL
- `GET /api/admin/urls` - Get all URLs (admin)
- `GET /api/admin/stats` - Get statistics (admin)

## Tech Stack

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
# UrLShortner
# UrlshortnerAssignment
# URLASSIGNMENT
