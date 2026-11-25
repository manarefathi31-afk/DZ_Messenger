# 💬 DZ_Messenger

A modern, lightweight chat web application inspired by Messenger and WhatsApp, built with plain **HTML**, **CSS**, and **JavaScript** (ES Modules).

## ✨ Features

- 🌍 **Bilingual (Arabic RTL & French LTR):** Automatically detects the device language on first launch, with a manual language switcher on the auth screens and in Settings.
- 🔒 **Private Chats & On-Demand Groups:** Starts clean with account registration; direct messages and private groups are visible strictly to their members.
- 🎨 **5 Chat Wallpapers:** Built-in wallpaper selector (5 custom backgrounds + default) with automatic gradient fallbacks.
- 📞 **WhatsApp-Style Call & Video UI:** Interactive voice and video call screen with mute, speaker, camera toggle, local camera preview, and call timer *(frontend UI ready for WebRTC + signaling server integration)*.
- 🌓 **Light & Dark Mode:** Smooth theme switching saved automatically.
- 💬 **Rich Messaging:** Reply to messages, edit, delete, send images/files, and use the built-in emoji picker.
- 📱 **Responsive Design:** Works seamlessly on both desktop and mobile browsers.

## 📁 Project Structure

Place your custom assets in the root folder alongside the code files:

```text
DZ_Messenger/
├── index.html
├── style.css
├── app.js
├── README.md
├── icon.png       # Your custom app icon & favicon
├── bg1.jpg        # Chat wallpaper 1
├── bg2.jpg        # Chat wallpaper 2
├── bg3.jpg        # Chat wallpaper 3
├── bg4.jpg        # Chat wallpaper 4
└── bg5.jpg        # Chat wallpaper 5
```

## 🚀 How to Run

Because `app.js` is loaded with `type="module"`, run the project using a local server or host it on **GitHub Pages**:

1. **VS Code:** Open the folder and click **Go Live** (Live Server extension).
2. **Or via Terminal:**
   ```bash
   npx serve .
   ```
3. **Or GitHub Pages:** Enable Pages in repository **Settings → Pages** to get a live `HTTPS` URL (recommended for camera/video call preview).

## 🔮 Future Roadmap

- Connect to a real-time backend (Firebase / Supabase / Node.js + Socket.io).
- Enable real cross-device voice & video calls using WebRTC.
