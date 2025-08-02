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

const wss = new WebSocket.Server({ port: 3000 });

let counter = 0;

wss.on('connection', ws => {
    console.log('Client connected');

    // Send the initial counter value to the client upon connection
    ws.send(JSON.stringify({ type: 'counter', value: counter }));

    // Set up an interval to increment and send the counter value every second
    const interval = setInterval(() => {
        counter++;
        ws.send(JSON.stringify({ type: 'counter', value: counter }));
    }, 1000);

    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(interval); // Clear the interval when the client disconnects to prevent memory leaks
    });

    ws.on('message', message => {
        // Handle messages from the client (optional for this example, but good practice to include)
        console.log(`Received message from client: ${message}`);
        try {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.type === 'clientMessage') {
                console.log(`Client says: ${parsedMessage.content}`);
            }
        } catch (e) {
            console.error('Error parsing message from client:', e);
        }
    });

    ws.on('error', error => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server started on port 8080');

// Register routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/vehicles', vehicleRouter);


// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});