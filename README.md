# URL Shortener - MERN Stack

A beautiful and functional URL shortener web application built with MongoDB, Express.js, React, and Node.js.

## ✨ Features

### User Features
- Submit long URLs and receive shortened versions
- Modern, responsive UI with gradient design
- Copy shortened URLs to clipboard
- Automatic redirection from short URLs to original URLs
- URL validation and error handling

### Admin Features
- View all shortened URLs with statistics
- Track click counts for each URL
- See creation and last access timestamps
- Copy and visit URLs directly from admin panel
- Real-time statistics dashboard

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remote connection)
- npm or yarn

### One-Command Setup
```bash
# Clone/download the project and navigate to the directory
./setup.sh
```

### Manual Setup

#### 1. Backend Setup
```bash
cd backend
npm install

# Create .env file
cat > .env << EOL
PORT=5000
MONGODB_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:3000
EOL

# Start backend server
npm run dev
```

#### 2. Frontend Setup
```bash
cd frontend
npm install

# Start frontend server
npm start
```

### Development Mode
```bash
# Start both servers simultaneously
./start-dev.sh
```

## 📁 Project Structure

```
URLSHORT/
├── backend/
│   ├── models/
│   │   └── Url.js              # MongoDB schema
│   ├── package.json            # Backend dependencies
│   └── server.js               # Express server with routes
├── frontend/
│   ├── public/
│   │   ├── index.html          # Main HTML template
│   │   └── manifest.json       # PWA manifest
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js       # Navigation component
│   │   │   └── UrlShortener.js # Main URL shortening form
│   │   ├── pages/
│   │   │   ├── Home.js         # Home page
│   │   │   └── Admin.js        # Admin dashboard
│   │   ├── App.js              # Main React app
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   └── package.json            # Frontend dependencies
├── setup.sh                    # Setup script
├── start-dev.sh                # Development server script
└── README.md                   # Documentation
```

## 🔌 API Endpoints

### Public Endpoints
- `POST /api/shorten` - Create shortened URL
  ```json
  // Request
  { "originalUrl": "https://www.example.com/very/long/path" }
  
  // Response
  {
    "originalUrl": "https://www.example.com/very/long/path",
    "shortUrl": "http://localhost:3000/abc123",
    "shortCode": "abc123"
  }
  ```

- `GET /:shortcode` - Redirect to original URL
  - Returns 302 redirect or 404 if not found
  - Increments click counter and updates last accessed time

### Admin Endpoints
- `GET /api/admin/urls` - Get all URLs with statistics
- `GET /api/admin/stats` - Get overall statistics
- `GET /api/health` - Health check endpoint

## 🎨 UI Features

- **Modern Design**: Gradient backgrounds and clean card layouts
- **Responsive**: Works on desktop, tablet, and mobile devices
- **User-Friendly**: Clear forms, helpful messages, and intuitive navigation
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Performance**: Optimized with React best practices

## 📊 Admin Dashboard

Access the admin panel at `http://localhost:3000/admin` to view:
- Total URLs created
- Total clicks across all URLs
- Detailed table with all shortened URLs
- Click statistics and timestamps
- Quick actions (copy, visit original URL)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Bootstrap 5** - UI framework and components
- **Custom CSS** - Gradient themes and responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **shortid** - URL-safe short ID generation

### Database
- **MongoDB** - NoSQL database for URL storage
- **Indexes** - Optimized queries on short codes

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:

```env
PORT=5000                                           # Backend server port
MONGODB_URI=mongodb://localhost:27017/urlshortener  # MongoDB connection
BASE_URL=http://localhost:3000                      # Frontend URL for short links
```

### MongoDB Schema
```javascript
{
  originalUrl: String,     // The long URL to redirect to
  shortCode: String,       // Unique short identifier
  clicks: Number,          // Number of times accessed
  createdAt: Date,         // When the URL was created
  lastAccessed: Date       // Last time someone visited the short URL
}
```

## 🚀 Deployment

### Quick Deploy to Vercel (Recommended)
```bash
# One-command deployment
./deploy-vercel.sh
```

### Manual Build for Any Platform
```bash
# Build for production
./build.sh
```

### Environment-Specific Configurations
- Update `BASE_URL` in environment variables for your domain
- MongoDB Atlas URI is already configured
- Configure CORS origins for production

### Detailed Deployment Guide
See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment instructions covering:
- ✅ Vercel (recommended)
- ✅ Netlify + Railway
- ✅ Render
- ✅ DigitalOcean
- ✅ Heroku

### Production Environment Variables
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://worktusharsinha01:...
BASE_URL=https://your-domain.com
PORT=8080
```

## 📈 Features Roadmap

- [ ] User authentication and URL ownership
- [ ] Custom short codes
- [ ] URL expiration dates
- [ ] QR code generation
- [ ] Analytics dashboard with charts
- [ ] Bulk URL shortening
- [ ] API rate limiting
- [ ] URL preview before redirect

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
# UrLShortner
