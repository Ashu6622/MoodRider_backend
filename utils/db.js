const mongoose = require('mongoose');


const connectDB = async ()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected')
        return { success: true, message: 'Database connected successfully' };
    }
    catch(error){
        console.error('Database connection failed:', error);
        return { success: false, message: 'Database connection failed', error: error.message };
    }
}

module.exports = connectDB;