# 🟢 Task 2 - Real-Time Chat App Using WebSocket

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![WebSocket](https://img.shields.io/badge/WebSocket-007ACC?style=flat-square) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

### **Project Information**

- **Company:** CODTECH IT SOLUTION  
- **Intern Name:** Channabasava Rampur  
- **Intern ID:** CT06DY2265  
- **Domain:** Full Stack Web Development  
- **Duration:** 6 Weeks  
- **Mentor:** Neela Santhosh  

---

## 💬 Project Description

This is a **Real-Time Chat Application** built using **WebSocket**, designed with a **WhatsApp-style interface**. Users can:

- Enter a **username**  
- Join the chat room  
- Send and receive messages in **real-time**  

The app features a modern UI, responsive design, and seamless communication between multiple users.

---

## ⚙️ How It Works

### **Frontend (Website UI)**

1. Users are greeted with a **join screen**.  
2. They enter their username to join the chat.  
3. All users in the chat room can **send and receive messages in real-time**.  

### **Backend (WebSocket Server)**

#### 1️⃣ Connect to WebSocket Server
- The frontend (`ChatWindow.jsx`) connects to the Node.js backend via `ws://localhost:8080`.  
- Enables **two-way real-time communication**.  

#### 2️⃣ Send Message
- Users type messages and press **Send**.  
- Frontend sends a JSON object:

json
{
  "user": "Username",
  "text": "Message text",
  "time": "HH:MM"
}

3️⃣ Broadcast Message

Server receives the message and broadcasts it to all connected clients, including the sender.

4️⃣ Receive & Display Message

Clients listen for incoming messages and update the chat interface.

Messages by the current user appear as green bubbles (right), and others appear as white bubbles (left).

Each message displays the username and timestamp, mimicking WhatsApp.

🛠️ Tech Stack
Frontend	Backend
React + Vite	Node.js + WebSocket
JavaScript	JavaScript
CSS	

🚀 How to Run

```
Frontend
git clone (https://github.com/channabasava-rampur1/Task---2-Chat-App-Using-Websocket.git)
cd client
npm install -y
npm run dev

Backend
npm install -y
npm install ws
node server.js
```

🌟 Features

-Username-based login

-Real-time chat using WebSocket

-WhatsApp-style UI:

--Green header and sent messages

--White bubbles for received messages

--Timestamps and sender names

-Responsive design for desktop and mobile

-Single component handles both join page and chat page

---

### **output**

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/d4ed00c2-4fba-450c-8dcc-d758a3e345ff" />

---

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/e7f13cff-0b41-41f7-93cc-7de597c1b839" />

---

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/aa030765-68e8-4777-b411-2646153029e5" />
