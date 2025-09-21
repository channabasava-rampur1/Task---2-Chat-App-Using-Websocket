export function initWebSocket(onMessage) {
  const socket = new WebSocket("ws://localhost:8080");

  socket.onopen = () => console.log("✅ Connected to WebSocket server");
  socket.onmessage = (event) => onMessage(event.data);
  socket.onclose = () => console.log("❌ Disconnected from server");

  return socket;
}
