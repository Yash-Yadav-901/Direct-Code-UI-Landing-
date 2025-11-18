
---

# 🚀 **DirectCode UI**

### *Capture • Convert • Collaborate • Build UI faster than ever*

<p align="center">
  <img src="https://res.cloudinary.com/dgr3v6iwi/image/upload/v1763058073/Screenshot_2025-11-13_234941_ebzk3l.png" alt="DirectCode UI Banner"/>
</p>

<p align="center">
  <a href="https://www.directcodeui.in/"><img src="https://img.shields.io/badge/🌍%20Live%20App-directcodeui.in-blue?style=for-the-badge"/></a>
  <img src="https://img.shields.io/github/license/<your-user>/directcodeui-frontend?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/<your-user>/directcodeui-frontend?style=for-the-badge"/>
  <img src="https://img.shields.io/github/issues/<your-user>/directcodeui-frontend?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/💡%20AI%20Powered-Gemini-yellow?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/⚡%20Real--Time-Collaboration-brightgreen?style=for-the-badge"/>
</p>

---

## 🌟 Overview

**DirectCode UI** is a full-stack developer ecosystem that allows you to:

✅ Capture UI from any website via Chrome Extension
✅ Convert it into **clean HTML/CSS/JS using AI (Gemini)**
✅ Edit, download, save, or publish components
✅ Collaborate **in real time** (code + chat + video + screen share)
✅ Build component libraries and share with the world

---

## 🎯 Key Features

| Feature                            | Description                                    |
| ---------------------------------- | ---------------------------------------------- |
| 🔍 **Smart UI Capture**            | Select any UI from any website via extension   |
| 🤖 **AI Code Generation**          | Converts UI → Clean HTML/CSS/JS using Gemini   |
| ⚡ **Live Code Preview & Edit**     | Instant realtime rendering & modification      |
| 👥 **Collaboration Rooms**         | Live multi-user code, chat, video, screenshare |
| 🧠 **Component Libraries**         | Save Private / Publish Public / Contribute     |
| 🔐 **Local API Key Storage**       | Your Gemini key stays in browser (safe)        |
| 🔔 **Request Tracking System**     | Process → Done → Error notifications           |
| 🚀 **Microservice Infrastructure** | Scalable backend with 6+ services              |

---

## 🧠 How It Works

1. Install Chrome extension & add Gemini API key
2. Visit any website → Select UI → Click **Capture**
3. AI generates reusable code
4. Component appears in your accounts library on directcodeui web app 
5. Edit it, download it, or collaborate with team

---

## 🏗 System Architecture

```
                          
```

---

## 🧩 Microservices

| Service                        | Purpose                             |
| ------------------------------ | ----------------------------------- |
| `directcodeui-frontend`        | React dashboard                     |
| `directcodeui-backend`         | Main API (users, components, posts) |
| `directcodeui-extension`       | UI selector Chrome extension        |
| `directcodeui-genai-server`    | Gemini → Code generation            |
| `directcodeui-realtime-server` | Live collab (Socket.io)             |
| `directcodeui-video-server`    | WebRTC + Screen share               |
| `directcodeui-notify-server`   | Request status system               |

---

## 🛠 Tech Stack

| Layer      | Tech                      |
| ---------- | ------------------------- |
| Frontend   | React, Vite, Tailwind CSS |
| Backend    | Node.js, Express          |
| Database   | MongoDB                   |
| AI         | Gemini API                |
| Real-Time  | WebRTC(meadia mediasoup), Socket.io |
| Deployment | Vercel, Render/hostinger(vps)    |
| Extension  | Chrome Manifest v3        |

---

## 📸 UI Preview (Screenshots)

| Dashboard                                | Component Library                       | Collaboration Room                         |
| ---------------------------------------- | --------------------------------------- | ------------------------------------------ |
| ![dash](https://via.placeholder.com/300) | ![lib](https://via.placeholder.com/300) | ![collab](https://via.placeholder.com/300) |

---

## 🚀 Installation

### Clone all services

```bash
git clone https://github.com/<your-user>/directcodeui-frontend
git clone https://github.com/<your-user>/directcodeui-backend
git clone https://github.com/<your-user>/directcodeui-extension
git clone https://github.com/<your-user>/directcodeui-genai-server
git clone https://github.com/<your-user>/directcodeui-realtime-server
git clone https://github.com/<your-user>/directcodeui-video-server
git clone https://github.com/<your-user>/directcodeui-notify-server
```

### Install dependencies

```bash
npm install
```

### Start dev servers

```bash
npm run dev
```

---

## 🧩 Install Chrome Extension

1. Open `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select `directcodeui-extension` folder ✅

---

## ⚡ Collaboration Capabilities

| Feature                      | Status |
| ---------------------------- | ------ |
| Live Code Editing            | ✅      |
| Cursor Presence              | ✅      |
| live Chatting                       | ✅      |
| live Video Call upto 5 members                  | ✅      |
| Screen Share                 | ✅      |
| Mic/Camera Control           | ✅      |
| Host Moderation (Kick/Block) | ✅      |

---

## 📌 API Documentation (Core)

### Status Tracking

```
GET  /status/:requestId
→ { requestId, status: "processing" | "done" | "error" }
```

### Components

```
GET  /components
POST /components
GET  /components/:id
```

### AI Generation

```
POST /generate-ui
Body: { image, prompt }
```

---

## 📁 Folder Structure (Simplified)

```
directcodeui/
├─ frontend/        # Dashboard (React)
├─ backend/         # Main API
├─ extension/       # Chrome extension
├─ genai-server/    # UI→Code AI service
├─ realtime/        # Socket.io collab
├─ video-server/    # WebRTC / PeerJS
└─ notify-server/   # Status tracking
```

---

## ☁️ Deployment

### Frontend (Vercel)

```bash
cd frontend
vercel
```

### Backend (Render / hostinger)

```bash
railway init
railway up
```

---

## 🤝 Community & Contribution

1. Fork the project
2. Create a feature branch
3. Commit & Push
4. Open a Pull Request ✅

---

## 📜 License

MIT © 2025 DirectCode UI

---

## 👨‍💻 Creator

**Yash Yadav**
3rd Year B.Tech CSE
Building developer tools that matter ⚡

---

## ⭐ If you like this project, give it a star!

---
