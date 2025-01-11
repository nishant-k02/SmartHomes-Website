const mysql = require('mysql2');
const mongoose = require('mongoose');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'SmartHomes'
}); 

mysqlConnection.connect((err) => {
    if (err) throw err; 
    console.log('Connected to MySQL!');
});

// const mongoConnection = 'mongodb://localhost:27017/SmartHomes';
const mongoURI = 'mongodb://127.0.0.1:27017/SmartHomes';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = { mysqlConnection, mongoose };

