# Task---2-Chat-App-Using-Websocket

*COMPANY* : CODTECH IT SOLUTION
*NAME* : CHANNABASAVA RAMPUR
*INTERN ID* : CT06DY2265
*DOMAIN* : FULL STACK WEB DEVELOPMENT
*DURATION* : 6 WEEKS
*MENTOR* : NEELA SANTHOSH


##Description 

Real Time Chat Application using websocket

How it Works

Frontend (Website UI)

The user interacts with a webpage that has a joinerscreen.

User enters the chat app by typing his/her name.

All the users joined the chat can start sharing their messages.

Backend (websocket and server)

Connect to WebSocket Server

The frontend (ChatWindow.jsx) establishes a WebSocket connection to the Node.js backend (ws://localhost:8080).

This connection allows real-time two-way communication between the client and the server.

Send Message

When the user types a message and presses Send, the frontend sends a JSON object:

{ "user": "Username", "text": "Message text", "time": "HH:MM" }

The message is sent via the WebSocket connection to the backend.

Broadcast Message

The WebSocket server receives the message from the client.

It broadcasts the same message to all connected clients, including the sender.

Receive Message

Each client listens for incoming messages via the WebSocket connection.

When a message is received, it is parsed and added to the local state (messages).

Display Message

The frontend updates the chat interface with the new message.

Messages sent by the current user appear as green bubbles on the right, and messages from others appear as white bubbles on the left.

Each message shows the username and timestamp like WhatsApp.

Tech Stack

Frontend: React + vite , CSS , Javascript.

Backend: Javascript and websocket


How to Run

Frontend:

Clone this project:


git clone <your-repo-link>

cd client

install the dependencies

npm install -y

To start the frontend

npm run dev 

Backend:

Install dependencies:
 
npm install -y

npm install ws

To run backend:

node server.js


## 🌟 Features

- Enter a **username** before joining the chat.
- Real-time chat using **WebSocket**.
- WhatsApp-style UI:
  - Green header and sent messages.
  - White bubbles for received messages.
  - Timestamps and sender names.
- Responsive design for desktop and mobile.
- Single component handles both **join page and chat page**.

##output

<img width="1912" height="861" alt="Image" src="https://github.com/user-attachments/assets/2353f411-4511-4a7d-8b6e-a938a565a2a8" />

<img width="1918" height="864" alt="Image" src="https://github.com/user-attachments/assets/23eb7aba-37e7-455f-9c74-b680b0ee93f8" />

<img width="1898" height="875" alt="Image" src="https://github.com/user-attachments/assets/dd588626-7b7f-4a5f-9e19-4f0d72c2c559" />
