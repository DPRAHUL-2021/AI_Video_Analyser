<h1 align="center">
  <img src="https://img.icons8.com/color/96/000000/artificial-intelligence.png" width="48" alt="AI Icon" />
  <br>
  <b>Aiveo</b>
</h1>
<p align="center">
  <b>AI-powered Video Analytics Platform</b><br>
  <i>Upload, analyze, and visualize video data with deep learning, all in real time.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-Frontend-blue?logo=next.js" />
  <img src="https://img.shields.io/badge/Python-Backend-yellow?logo=python" />
  <img src="https://img.shields.io/badge/OpenCV-Video%20Processing-green?logo=opencv" />
  <img src="https://img.shields.io/badge/TailwindCSS-UI-blueviolet?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/License-MIT-success?logo=license" />
</p>

---

## ✨ Features

- 🎥 **Video Upload & Streaming** — Upload videos for analysis or stream live feeds.
- 🧠 **AI-Powered Analytics** — Detect, classify, and extract insights from video frames using deep learning.
- 📊 **Interactive Dashboard** — Visualize analytics results in real-time with beautiful charts and tables.
- ⚡ **Fast & Responsive UI** — Built with Next.js, Tailwind CSS, and modern React components.
- 🔌 **Modular Python Pipeline** — Easily extend detection/classification logic in Python.
- 🛡️ **Production-Ready** — Scalable, maintainable, and easy to deploy.

---

## 🏗️ Architecture

```
+---------------------------+         +-----------------------------+
|   Next.js Dashboard (UI)  | <-----> |   Python DL Streamer API    |
|  (ai-video-analytics-     |  REST   |  (dl_streamer_pipeline)     |
|   -dashboard)             |         |                             |
+---------------------------+         +-----------------------------+
```

- **Frontend:** Next.js app for user interaction, video upload, and analytics visualization.
- **Backend:** Python pipeline for decoding, detecting, and classifying video frames.

---

## 🛠️ Tech Stack

| Layer      | Technology                                                                 |
|------------|----------------------------------------------------------------------------|
| Frontend   | [Next.js](https://nextjs.org/) · [React](https://react.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [Lucide Icons](https://lucide.dev/) |
| Backend    | Python 3 · [OpenCV](https://opencv.org/) · Deep Learning frameworks         |
| Tooling    | pnpm · PostCSS · Webpack · SWC · Redux Thunk                               |

---

## 📁 Folder Structure

```
Aiveo/
│
├── ai-video-analytics-dashboard/   # Next.js frontend
│   ├── app/                       # App directory (Next.js routing)
│   ├── components/                # Reusable React components
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility libraries
│   ├── public/                    # Static assets
│   ├── styles/                    # Tailwind/global CSS
│   ├── package.json               # Frontend dependencies
│   └── ...                        # Configs, build, etc.
│
├── dl_streamer_pipeline/          # Python backend
│   ├── main.py                    # Entry point for pipeline
│   ├── decoder.py                 # Video decoding logic
│   ├── detector.py                # Object detection logic
│   ├── classifier.py              # Classification logic
│   ├── utils.py                   # Helper functions
│   └── requirements.txt           # Python dependencies
│
└── README.md                      # (You are here!)
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/aiveo.git
cd aiveo
```

### 2️⃣ Setup the Frontend

```bash
cd ai-video-analytics-dashboard
pnpm install
pnpm dev
```
- The dashboard will be available at [http://localhost:3000](http://localhost:3000)

### 3️⃣ Setup the Backend

```bash
cd ../dl_streamer_pipeline
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python main.py
```
- The backend API will start (see `main.py` for port/config).

---

## 🧑‍💻 Usage

1. **Open the Dashboard:** Go to [http://localhost:3000](http://localhost:3000)
2. **Upload a Video:** Use the upload interface to select a video file.
3. **View Analytics:** Watch as the dashboard displays real-time analytics, charts, and detected objects.
4. **Explore Results:** Download reports or view frame-by-frame analysis.

---

## 🎥 Video Demo

> Watch the full walkthrough of the project here:  
> 📺 [Aiveo - Intel Unnati Project Demo](https://vimeo.com/1098976881?share=copy)

---

## 🎨 Customization

- 🏷️ **Add New Models:** Extend `detector.py` or `classifier.py` in `dl_streamer_pipeline` to add new AI models.
- 🎨 **UI Customization:** Modify components or styles in `ai-video-analytics-dashboard/components` and `styles`.
- 🔗 **API Integration:** Update API endpoints in the frontend to match your backend configuration.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [OpenCV](https://opencv.org/)
- All contributors and open-source libraries used.

---

<p align="center">
  <b>Made with <span style="color: #e25555;">❤️</span> for AI-powered video analytics.</b>
</p>

---

> _For any questions or support, please open an issue on GitHub._
