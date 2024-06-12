const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://crazyvamsi61:crazyvamsi61@cluster0.fmc67ef.mongodb.net/weatherapp?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }   catch(error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;