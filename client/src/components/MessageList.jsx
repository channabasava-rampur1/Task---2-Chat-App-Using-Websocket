import React from "react";

function MessageList({ messages, currentUser }) {
  return (
    <div className="message-list">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`message ${
            msg.user === currentUser ? "my-message" : "other-message"
          }`}
        >
          <div className="meta">
            <strong>{msg.user}</strong> <span className="time">{msg.time}</span>
          </div>
          <div>{msg.text}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
