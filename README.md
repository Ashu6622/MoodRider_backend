# Moonrider Backend API

A Node.js/Express backend API for the Moonrider application with MongoDB database integration.

## 📁 Folder Structure

```
backend/
├── controllers/           # Business logic handlers
│   ├── adminController.js    # Admin authentication & management
│   └── userController.js     # User registration & data management
├── middleware/           # Custom middleware functions
│   └── errorHandler.js      # Global error handling middleware
├── model/               # MongoDB schemas
│   ├── adminSchema.js      # Admin user data model
│   └── userSchema.js       # Regular user data model
├── routes/              # API route definitions
│   ├── adminRoute.js       # Admin-related endpoints
│   ├── commonRoute.js      # Main route aggregator
│   └── userRoute.js        # User-related endpoints
├── static/              # Static file storage
│   └── avatar_1.avif       # Default user avatar
├── utils/               # Utility functions
│   └── db.js              # Database connection handler
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
├── server.js           # Main application entry point
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with:
   ```env
   MONGO_URI="mongodb://localhost:27017/moonrider"
   PORT=4000
   BASE_URL="http://localhost:4000"
   ```

4. **Start the server**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### User Routes (`/api/user`)
- `POST /api/user/register` - Register new user
- `GET /api/user/alluser` - Get all users

### Admin Routes (`/api/admin`)
- `POST /api/admin/register` - Register new admin
- `POST /api/admin/login` - Admin login

### System Routes
- `GET /health` - Health check endpoint
- `GET /static/*` - Serve static files

## 🗄️ Database Models

### User Schema
```javascript
{
  name: String (required),
  email: String (lowercase),
  contact: String (required, 10 digits),
  instaUrl: String (optional),
  youtubeUrl: String (optional),
  avatar: String (default: static avatar URL),
  timestamps: true
}
```

### Admin Schema
```javascript
{
  name: String,
  email: String (required),
  password: String,
  uid: String (for Google auth),
  timestamps: true
}
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/moonrider` |
| `PORT` | Server port number | `4000` |
| `BASE_URL` | Base URL for static files | `http://localhost:4000` |

## 🌐 Deployment

### Render Deployment
1. **Environment Variables** (set in Render dashboard):
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `BASE_URL`: Your Render app URL
   - `PORT`: Automatically set by Render

2. **Build Settings**:
   - Build Command: `npm install`
   - Start Command: `npm start`

## 🛠️ Features

- ✅ RESTful API design
- ✅ MongoDB integration with Mongoose
- ✅ CORS enabled for cross-origin requests
- ✅ Static file serving
- ✅ Environment-based configuration
- ✅ Error handling middleware
- ✅ Health check endpoint
- ✅ User and Admin authentication
- ✅ File upload support for avatars

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB object modeling
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 🔍 API Response Format

### Success Response
```json
{
  "message": "Success message",
  "data": {} // Optional data object
}
```

### Error Response
```json
{
  "message": "Error description"
}
```

## 🚦 Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 👨‍💻 Author

**Ashutosh Roy**

## 📄 License

ISC License