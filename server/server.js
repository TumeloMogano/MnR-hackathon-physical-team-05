const express = require('express');
const cors = require('cors');

// Initialize express app
const app = express();
app.use(express.json());
app.use(cors());
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});


io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
// Import route handlers
const userRouter = require('./src/api/routes/userRoutes.js');
const authRouter = require('./src/api/routes/authRoutes.js');

// Register routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});