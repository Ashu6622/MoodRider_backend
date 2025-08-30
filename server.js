const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./utils/db');
const app = express();
const router = require('./routes/commonRoute');
const errorHandler = require('./middleware/errorHandler');



connectDB().then(result => {
    dbStatus = { connected: result.success, message: result.message };
    if (!result.success) {
        console.error('Server starting without database connection');
    }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/static', express.static('static'));



app.use(router);

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, (error)=>{
    if(error) {
        console.log('Error starting server:', error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
})