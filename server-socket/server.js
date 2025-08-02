const express = require('express');
const { createServer, get } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { randomUUID } = require("crypto");
const {
  McpServer,
  ResourceTemplate,
} = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js')
const { z } = require("zod");

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});
// Enable CORS for all requests
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// MCP Server setup
const mcpServer = new McpServer({
  transport: new StdioServerTransport(),
  resources: [
    new ResourceTemplate({
      type: "chat",
      schema: z.object({
        message: z.string()
      }),
      async handler({ message }) {
        // Example: echo the message or add your logic here
        return { reply: `MCP: You said "${message}"` };
      }
    })
  ]
});

// REST endpoint for chatbot integration
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    // Call MCP resource
    const result = await mcpServer.call("chat", { message });
    res.json({ reply: result.reply });
  } catch (err) {
    res.status(500).json({ reply: "MCP server error." });
  }
});

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

async function GetRiskLevel(){
  const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=07674ef563014b1f82083004250208&q=Pretoria`);
  return res.json();
}

io.on("connection", (socket) => {
  console.log('New client connected');

  socket.emit('message', "Low Risk Area! Keep up the good driving")

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

httpServer.listen(3000, () => {
  console.log("Running Server...")
});