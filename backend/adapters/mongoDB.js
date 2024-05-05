const mongoose = require('mongoose');
const { DB_URL } = require('../config');

mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to database', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB database');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed due to application termination');
        process.exit(0);
    });
});

module.exports= mongoose.connection;