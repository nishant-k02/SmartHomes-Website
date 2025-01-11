const express = require('express');
const { mysqlConnection } = require('./config/db');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
