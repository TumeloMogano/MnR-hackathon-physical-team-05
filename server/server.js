const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');

// Initialize express app
const app = express();
app.use(express.json());
app.use(cors());

// Import route handlers
const userRouter = require('./src/api/routes/userRoutes.js');
const authRouter = require('./src/api/routes/authRoutes.js');
const vehicleRouter = require('./src/api/routes/vehicleRoutes.js');

// Register routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/vehicles', vehicleRouter);


// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});