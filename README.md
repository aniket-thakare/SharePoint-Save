# 📹 SharePoint Save

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Platform](https://img.shields.io/badge/platform-Chrome-brightgreen)
![OS](https://img.shields.io/badge/OS-Windows%20%7C%20macOS%20%7C%20Linux-orange)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**SharePoint Save** is a Chrome extension that captures SharePoint video stream URLs and generates ready-to-use FFmpeg commands to download videos you have access to.

> ⚠️ This extension does NOT download videos directly and does NOT bypass DRM or permissions.

---

## 🖼️ Screenshots

<p>
Below are screenshots demonstrating installation and usage.
</p>

<h3>1. Chrome Extension Popup</h3>
<img src="screenshots/popup.png" alt="Extension Popup" width="800">

<h3>2. Captured SharePoint Video URL and Generated FFmpeg Command</h3>
<img src="screenshots/captured-url.png" alt="Captured URL" width="800">

<h3>3. FFmpeg Download in Terminal</h3>
<img src="screenshots/ffmpeg-command.png" alt="FFmpeg Command/Download" width="800">

---

## 1️⃣ Install FFmpeg

### Windows
- Video demonstrating how to Download: https://www.youtube.com/watch?v=JR36oH35Fgg
- Add `bin` folder to PATH
- Check Installation and Verify:
```bash
ffmpeg -version
```

### macOS
- Download PKG File : https://ffmpeg.martin-riedl.de/
- Video demonstrating how to Download:https://www.youtube.com/watch?v=KAMuQTmGJUI&t=35s
- Check Installation and Verify:
```bash
ffmpeg -version
```


### Linux
```bash
sudo apt install ffmpeg
```
- Video demonstrating how to Download: 


---

## 2️⃣ Install Chrome Extension

1. Download this repo
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select `SharePoint Save` folder

---

## 3️⃣ Capture SharePoint Video URL

1. Refresh SharePoint video page
2. Click **Play**
3. Wait 2–3 seconds
4. Open extension

---

## 4️⃣ Generate FFmpeg Command

Paste command in terminal/CMD and press Enter.

Example:
```bash
ffmpeg -i "VIDEOMANIFEST_URL" -codec copy MyVideo.mp4
```

---

## 5️⃣ Download Video

### Windows
```cmd
cd Downloads
```

### macOS / Linux
```bash
cd ~/Downloads
```

