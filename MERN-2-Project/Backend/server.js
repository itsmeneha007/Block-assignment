
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const myBookRoutes = require('./routes/mybooks');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/mybooks', myBookRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});




















