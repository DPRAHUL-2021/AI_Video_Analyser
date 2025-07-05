"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Settings, BarChart3, Eye, TrendingUp } from "lucide-react"

// Import the new components at the top
import { DashboardContent } from "@/components/dashboard-content"
import { CameraManagement } from "@/components/camera-management"
import { PerformanceReports } from "@/components/performance-reports"
import { SettingsPage } from "@/components/settings-page"

// Simulated data generators
const generateCameraData = () => {
  const cameras = [
    { id: "CAM-01", location: "Main Gate", active: true },
    { id: "CAM-02", location: "Parking Lot A", active: true },
    { id: "CAM-03", location: "Building Entrance", active: true },
    { id: "CAM-04", location: "Cafeteria", active: false },
    { id: "CAM-05", location: "Loading Dock", active: true },
    { id: "CAM-06", location: "Emergency Exit", active: true },
    { id: "CAM-07", location: "Server Room", active: true },
    { id: "CAM-08", location: "Reception Area", active: true },
    { id: "CAM-09", location: "Warehouse Floor", active: true },
  ]

  return cameras.map((cam) => ({
    ...cam,
    fps: cam.active ? Math.floor(Math.random() * 5) + 25 : 0,
    motionIntensity: cam.active ? Math.floor(Math.random() * 100) : 0,
    detections: cam.active ? Math.floor(Math.random() * 20) : 0,
  }))
}

const generateSystemMetrics = () => ({
  cpu: Math.floor(Math.random() * 30) + 60,
  gpu: Math.floor(Math.random() * 40) + 50,
  memory: Math.floor(Math.random() * 25) + 65,
  activeStreams: 8,
  maxStreams: 12,
  bottleneck: ["CPU", "GPU", "Memory"][Math.floor(Math.random() * 3)],
})

const generateDetectionStats = () => ({
  person: Math.floor(Math.random() * 20) + 50,
  vehicle: Math.floor(Math.random() * 15) + 25,
  bicycle: Math.floor(Math.random() * 10) + 5,
  other: Math.floor(Math.random() * 10) + 5,
  totalDetections: Math.floor(Math.random() * 1000) + 15000,
})

const generatePerformanceData = () => {
  const data = []
  const now = new Date()
  for (let i = 29; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
      "CAM-01": Math.floor(Math.random() * 5) + 25,
      "CAM-02": Math.floor(Math.random() * 5) + 24,
      "CAM-03": Math.floor(Math.random() * 5) + 26,
      "CAM-05": Math.floor(Math.random() * 5) + 25,
      "CAM-06": Math.floor(Math.random() * 5) + 27,
    })
  }
  return data
}

const generateAlerts = () => [
  { id: 1, type: "warning", message: "High GPU usage detected (89%)", time: "2 min ago", severity: "warning" },
  { id: 2, type: "info", message: "New object detected: Bicycle at CAM-04", time: "5 min ago", severity: "info" },
  { id: 3, type: "error", message: "Stream disconnected: CAM-04", time: "8 min ago", severity: "error" },
  { id: 4, type: "success", message: "All systems optimal", time: "12 min ago", severity: "success" },
  { id: 5, type: "warning", message: "Memory usage above 85%", time: "15 min ago", severity: "warning" },
]

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [secondsAgo, setSecondsAgo] = useState(0)

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl z-10 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-900 dark:text-white">AI Analytics</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Intel DL Streamer</p>
            </div>
          </div>

          <nav className="space-y-2">
            <Button
              variant={currentPage === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setCurrentPage("dashboard")}
            >
              <BarChart3 className="w-4 h-4 mr-3" />
              Dashboard
            </Button>
            <Button
              variant={currentPage === "cameras" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setCurrentPage("cameras")}
            >
              <Camera className="w-4 h-4 mr-3" />
              Camera Management
            </Button>
            <Button
              variant={currentPage === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setCurrentPage("reports")}
            >
              <TrendingUp className="w-4 h-4 mr-3" />
              Performance Reports
            </Button>
            <Button
              variant={currentPage === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setCurrentPage("settings")}
            >
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {currentPage === "dashboard" && (
          <DashboardContent
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lastUpdate={lastUpdate}
            secondsAgo={secondsAgo}
          />
        )}
        {currentPage === "cameras" && <CameraManagement />}
        {currentPage === "reports" && <PerformanceReports />}
        {currentPage === "settings" && <SettingsPage />}
      </div>
    </div>
  )
}
