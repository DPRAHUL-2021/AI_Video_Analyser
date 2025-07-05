# AI Video Analyser

**AI Video Analyser** is a full-stack application for real-time video analytics, combining a modern Next.js dashboard with a Python-based deep learning video processing pipeline. This project enables users to upload, analyze, and visualize video data using state-of-the-art AI models, all through a beautiful, responsive web interface.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🎥 **Video Upload & Streaming**: Upload videos for analysis or stream live feeds.
- 🧠 **AI-Powered Analytics**: Detect, classify, and extract insights from video frames using deep learning.
- 📊 **Interactive Dashboard**: Visualize analytics results in real-time with charts and tables.
- ⚡ **Fast & Responsive UI**: Built with Next.js, Tailwind CSS, and modern React components.
- 🔌 **Modular Python Pipeline**: Easily extend detection/classification logic in Python.
- 🛡️ **Production-Ready**: Scalable, maintainable, and easy to deploy.

---

## Architecture

```
+---------------------------+         +-----------------------------+
|   Next.js Dashboard (UI)  | <-----> |   Python DL Streamer API    |
|  (ai-video-analytics-     |  REST   |  (dl_streamer_pipeline)     |
|   -dashboard)             |         |                             |
+---------------------------+         +-----------------------------+
```

- **Frontend**: Next.js app for user interaction, video upload, and analytics visualization.
- **Backend**: Python pipeline for decoding, detecting, and classifying video frames.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Backend**: Python 3, OpenCV, Deep Learning frameworks (customizable)
- **Build Tools**: pnpm, PostCSS
- **Other**: Webpack, SWC, Redux Thunk (for state management)

---

## Folder Structure

```
AI_Video_Analyser/
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

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-video-analyser.git
cd ai-video-analyser
```

### 2. Setup the Frontend

```bash
cd ai-video-analytics-dashboard
pnpm install
pnpm dev
```
- The dashboard will be available at `http://localhost:3000`

### 3. Setup the Backend

```bash
cd ../dl_streamer_pipeline
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python main.py
```
- The backend API will start (see `main.py` for port/config).

---

## Usage

1. **Open the Dashboard**: Go to `http://localhost:3000`
2. **Upload a Video**: Use the upload interface to select a video file.
3. **View Analytics**: Watch as the dashboard displays real-time analytics, charts, and detected objects.
4. **Explore Results**: Download reports or view frame-by-frame analysis.

---

## Customization

- **Add New Models**: Extend `detector.py` or `classifier.py` in `dl_streamer_pipeline` to add new AI models.
- **UI Customization**: Modify components or styles in `ai-video-analytics-dashboard/components` and `styles`.
- **API Integration**: Update API endpoints in the frontend to match your backend configuration.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [OpenCV](https://opencv.org/)
- All contributors and open-source libraries used.

---

**Made with ❤️ for AI-powered video analytics.**

---

> _For any questions or support, please open an