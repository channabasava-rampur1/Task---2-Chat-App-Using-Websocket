import { useState, useEffect, useRef } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function ChatWindow() {
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  // Connect to WebSocket after joining
  useEffect(() => {
    if (!isJoined) return;

    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => console.log("✅ Connected to server");
    ws.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages((prev) => [...prev, msg]);
    };

    ws.current.onclose = () => console.log("❌ Disconnected");

    return () => ws.current.close();
  }, [isJoined]);

  const handleJoin = () => {
    if (username.trim()) setIsJoined(true);
  };

  const sendMessage = (text) => {
    if (ws.current && text.trim()) {
      const msg = {
        user: username,
        text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      ws.current.send(JSON.stringify(msg));
    }
  };

  // Render Join Page
  if (!isJoined) {
    return (
      <div className="join-container">
        <div className="join-box">
          <h2>Welcome to ChatAPP</h2>
          <p>Enter your name to join the chat</p>
          <input
            type="text"
            placeholder="Your name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleJoin()}
          />
          <button onClick={handleJoin}>Join Chat</button>
        </div>
      </div>
    );
  }

  // Render Chat Page
  return (
    <div className="chat-window">
      <div className="chat-header">Chatting as {username}</div>
      <MessageList messages={messages} currentUser={username} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
