"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import {
  Cpu,
  HardDrive,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Moon,
  Sun,
  Filter,
  BarChart3,
  Zap,
  Eye,
  TrendingUp,
  Bell,
  Wifi,
  WifiOff,
} from "lucide-react"

// Move all the data generation functions here
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

interface DashboardContentProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  lastUpdate: Date
  secondsAgo: number
}

export function DashboardContent({ darkMode, setDarkMode, lastUpdate, secondsAgo }: DashboardContentProps) {
  const [cameraData, setCameraData] = useState(generateCameraData())
  const [systemMetrics, setSystemMetrics] = useState(generateSystemMetrics())
  const [detectionStats, setDetectionStats] = useState(generateDetectionStats())
  const [performanceData, setPerformanceData] = useState(generatePerformanceData())
  const [alerts, setAlerts] = useState(generateAlerts())
  const [selectedCamera, setSelectedCamera] = useState("all")
  const [animatedCount, setAnimatedCount] = useState(0)

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCameraData(generateCameraData())
      setSystemMetrics(generateSystemMetrics())
      setDetectionStats(generateDetectionStats())
      setPerformanceData(generatePerformanceData())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animated counter effect
  useEffect(() => {
    const target = detectionStats.totalDetections
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setAnimatedCount(target)
        clearInterval(timer)
      } else {
        setAnimatedCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [detectionStats.totalDetections])

  const detectionChartData = [
    { name: "Person", value: detectionStats.person, color: "#10b981" },
    { name: "Vehicle", value: detectionStats.vehicle, color: "#3b82f6" },
    { name: "Bicycle", value: detectionStats.bicycle, color: "#f59e0b" },
    { name: "Other", value: detectionStats.other, color: "#ef4444" },
  ]

  const confidenceData = [
    { range: "90-100%", count: 45 },
    { range: "80-89%", count: 32 },
    { range: "70-79%", count: 28 },
    { range: "60-69%", count: 15 },
    { range: "50-59%", count: 8 },
  ]

  return (
    <>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              AI Video Analytics Pipeline Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Intel DL Streamer Performance Monitoring</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Last updated: {lastUpdate.toLocaleString()}</span>
              <Badge variant="outline" className="animate-pulse">
                Updated {secondsAgo}s ago
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4" />
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              <Moon className="w-4 h-4" />
            </div>

            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=32&width=80" alt="Intel Logo" className="h-8" />
              <img src="/placeholder.svg?height=32&width=80" alt="University Logo" className="h-8" />
              <Badge variant="secondary" className="text-xs">
                Powered by DL Streamer
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <Select value={selectedCamera} onValueChange={setSelectedCamera}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter cameras" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cameras</SelectItem>
            {cameraData.map((cam) => (
              <SelectItem key={cam.id} value={cam.id}>
                {cam.id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cameraData.map((camera) => (
          <Card
            key={camera.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold">{camera.id}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{camera.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {camera.active ? (
                    <Wifi className="w-4 h-4 text-green-500" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-red-500" />
                  )}
                  <Badge variant={camera.active ? "default" : "destructive"}>
                    {camera.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=200"
                  alt={`${camera.id} feed`}
                  className="w-full h-full object-cover opacity-80"
                />
                {camera.active && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-2 left-2 text-white text-xs font-mono">LIVE • {camera.fps} FPS</div>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
                {/* Motion heatmap overlay */}
                {camera.active && (
                  <div
                    className="absolute inset-0 bg-gradient-radial from-red-500/30 to-transparent"
                    style={{ opacity: camera.motionIntensity / 200 }}
                  ></div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">FPS:</span>
                  <span className="font-semibold">{camera.fps}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Detections:</span>
                  <span className="font-semibold">{camera.detections}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Motion:</span>
                  <Progress value={camera.motionIntensity} className="w-16 h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Cpu className="w-4 h-4 mr-2 text-blue-600" />
              CPU Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">{systemMetrics.cpu}%</div>
            <Progress value={systemMetrics.cpu} className="h-2" />
            {systemMetrics.bottleneck === "CPU" && (
              <Badge variant="destructive" className="mt-2 text-xs">
                Bottleneck
              </Badge>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Zap className="w-4 h-4 mr-2 text-green-600" />
              GPU Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">{systemMetrics.gpu}%</div>
            <Progress value={systemMetrics.gpu} className="h-2" />
            {systemMetrics.bottleneck === "GPU" && (
              <Badge variant="destructive" className="mt-2 text-xs">
                Bottleneck
              </Badge>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <HardDrive className="w-4 h-4 mr-2 text-purple-600" />
              Memory Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">{systemMetrics.memory}%</div>
            <Progress value={systemMetrics.memory} className="h-2" />
            {systemMetrics.bottleneck === "Memory" && (
              <Badge variant="destructive" className="mt-2 text-xs">
                Bottleneck
              </Badge>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Activity className="w-4 h-4 mr-2 text-orange-600" />
              Active Streams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
              {systemMetrics.activeStreams}/{systemMetrics.maxStreams}
            </div>
            <Progress value={(systemMetrics.activeStreams / systemMetrics.maxStreams) * 100} className="h-2" />
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {systemMetrics.maxStreams - systemMetrics.activeStreams} available
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detection Stats and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Detection Statistics */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Detection Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={detectionChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {detectionChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {animatedCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Detections</div>
                </div>

                <div className="space-y-2">
                  {detectionChartData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confidence Histogram */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Detection Confidence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={confidenceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Over Time */}
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Performance Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[20, 30]} />
              <Tooltip />
              <Line type="monotone" dataKey="CAM-01" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="CAM-02" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="CAM-03" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="CAM-05" stroke="#f59e0b" strokeWidth={2} />
              <Line type="monotone" dataKey="CAM-06" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Alerts & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    {alert.severity === "error" && <XCircle className="w-4 h-4 text-red-500" />}
                    {alert.severity === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                    {alert.severity === "success" && <CheckCircle className="w-4 h-4 text-green-500" />}
                    {alert.severity === "info" && <Activity className="w-4 h-4 text-blue-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  )
}
