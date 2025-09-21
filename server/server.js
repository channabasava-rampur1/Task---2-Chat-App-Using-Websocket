// server/server.js
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("✅ New client connected");

  ws.on("message", (data) => {
    const msg = JSON.parse(data.toString()); // { user, text, time }
    console.log(`📩 ${msg.user}: ${msg.text}`);

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  });

  ws.on("close", () => console.log("❌ Client disconnected"));
});

console.log("🚀 WebSocket server running on ws://localhost:8080");
