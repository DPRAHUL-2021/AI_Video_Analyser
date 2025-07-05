"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Download,
  CalendarIcon,
  FileText,
  BarChart3,
  Activity,
  Zap,
  Cpu,
  HardDrive,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { format } from "date-fns"

// Generate comprehensive performance data
const generatePerformanceData = () => {
  const data = []
  const now = new Date()
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    data.push({
      date: format(date, "MMM dd"),
      timestamp: date.toISOString(),
      avgFPS: Math.floor(Math.random() * 5) + 25,
      cpuUsage: Math.floor(Math.random() * 30) + 60,
      gpuUsage: Math.floor(Math.random() * 40) + 50,
      memoryUsage: Math.floor(Math.random() * 25) + 65,
      detections: Math.floor(Math.random() * 500) + 1000,
      uptime: Math.floor(Math.random() * 10) + 95,
      errors: Math.floor(Math.random() * 5),
      bandwidth: Math.floor(Math.random() * 20) + 80,
    })
  }
  return data
}

const generateHourlyData = () => {
  const data = []
  for (let i = 23; i >= 0; i--) {
    const hour = new Date()
    hour.setHours(hour.getHours() - i)
    data.push({
      hour: format(hour, "HH:mm"),
      detections: Math.floor(Math.random() * 100) + 50,
      persons: Math.floor(Math.random() * 60) + 30,
      vehicles: Math.floor(Math.random() * 40) + 20,
      alerts: Math.floor(Math.random() * 10),
    })
  }
  return data
}

const generateCameraPerformance = () => [
  { camera: "CAM-01", avgFPS: 28.5, uptime: 99.8, detections: 1250, errors: 2 },
  { camera: "CAM-02", avgFPS: 27.2, uptime: 98.5, detections: 980, errors: 5 },
  { camera: "CAM-03", avgFPS: 29.1, uptime: 99.9, detections: 1450, errors: 1 },
  { camera: "CAM-04", avgFPS: 0, uptime: 45.2, detections: 0, errors: 15 },
  { camera: "CAM-05", avgFPS: 26.8, uptime: 97.8, detections: 1100, errors: 3 },
]

const generateSystemHealth = () => ({
  overall: 94,
  components: [
    { name: "CPU", health: 92, status: "good" },
    { name: "GPU", health: 96, status: "excellent" },
    { name: "Memory", health: 88, status: "good" },
    { name: "Storage", health: 94, status: "good" },
    { name: "Network", health: 99, status: "excellent" },
  ],
})

export function PerformanceReports() {
  const [performanceData, setPerformanceData] = useState(generatePerformanceData())
  const [hourlyData, setHourlyData] = useState(generateHourlyData())
  const [cameraPerformance, setCameraPerformance] = useState(generateCameraPerformance())
  const [systemHealth, setSystemHealth] = useState(generateSystemHealth())
  const [selectedPeriod, setSelectedPeriod] = useState("30d")
  const [selectedMetric, setSelectedMetric] = useState("fps")
  const [date, setDate] = useState<Date>()

  const getHealthColor = (health: number) => {
    if (health >= 95) return "text-green-600"
    if (health >= 85) return "text-yellow-600"
    return "text-red-600"
  }

  const getHealthBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-100 text-blue-800">Good</Badge>
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
      case "critical":
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const exportReport = (type: string) => {
    // Simulate report export
    console.log(`Exporting ${type} report...`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Performance Reports</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive analytics and system insights</p>
          </div>
          <div className="flex items-center space-x-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => exportReport("comprehensive")}>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Avg FPS</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">27.8</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+2.3%</span>
                </div>
              </div>
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">System Uptime</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">99.2%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+0.5%</span>
                </div>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Total Detections</p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">45.2K</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+12.8%</span>
                </div>
              </div>
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Avg Response Time</p>
                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">45ms</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">-8.2%</span>
                </div>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance Trends</TabsTrigger>
          <TabsTrigger value="detections">Detection Analytics</TabsTrigger>
          <TabsTrigger value="cameras">Camera Reports</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          {/* Performance Trends */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  System Performance Over Time
                </CardTitle>
                <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fps">Average FPS</SelectItem>
                    <SelectItem value="cpuUsage">CPU Usage</SelectItem>
                    <SelectItem value="gpuUsage">GPU Usage</SelectItem>
                    <SelectItem value="memoryUsage">Memory Usage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey={selectedMetric}
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Resource Utilization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="w-5 h-5 mr-2" />
                  Resource Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpuUsage" stroke="#ef4444" strokeWidth={2} name="CPU" />
                    <Line type="monotone" dataKey="cpuUsage" stroke="#ef4444" strokeWidth={2} name="CPU" />
                    <Line type="monotone" dataKey="gpuUsage" stroke="#10b981" strokeWidth={2} name="GPU" />
                    <Line type="monotone" dataKey="memoryUsage" stroke="#8b5cf6" strokeWidth={2} name="Memory" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Bandwidth Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData.slice(-7)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bandwidth" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="detections" className="space-y-6">
          {/* Detection Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Hourly Detection Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="detections" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Detection Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={hourlyData.slice(-12)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="persons" fill="#10b981" name="Persons" />
                    <Bar dataKey="vehicles" fill="#3b82f6" name="Vehicles" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Detection Summary */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Detection Summary (Last 30 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">32,450</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Detections</div>
                  <div className="text-xs text-green-600 mt-1">↑ 15.2% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">98.7%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
                  <div className="text-xs text-green-600 mt-1">↑ 2.1% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1.2s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Processing Time</div>
                  <div className="text-xs text-green-600 mt-1">↓ 0.3s from last month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cameras" className="space-y-6">
          {/* Camera Performance Table */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Individual Camera Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold">Camera</th>
                      <th className="text-left py-3 px-4 font-semibold">Avg FPS</th>
                      <th className="text-left py-3 px-4 font-semibold">Uptime</th>
                      <th className="text-left py-3 px-4 font-semibold">Detections</th>
                      <th className="text-left py-3 px-4 font-semibold">Errors</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cameraPerformance.map((camera) => (
                      <tr key={camera.camera} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 font-medium">{camera.camera}</td>
                        <td className="py-3 px-4">{camera.avgFPS}</td>
                        <td className="py-3 px-4">
                          <span className={getHealthColor(camera.uptime)}>{camera.uptime}%</span>
                        </td>
                        <td className="py-3 px-4">{camera.detections.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className={camera.errors > 5 ? "text-red-600" : "text-green-600"}>{camera.errors}</span>
                        </td>
                        <td className="py-3 px-4">
                          {camera.uptime > 95 ? (
                            <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                          ) : camera.uptime > 80 ? (
                            <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-800">Poor</Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Export Camera Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" onClick={() => exportReport("camera-performance")}>
                  <Download className="w-4 h-4 mr-2" />
                  Performance Report
                </Button>
                <Button variant="outline" onClick={() => exportReport("camera-uptime")}>
                  <Download className="w-4 h-4 mr-2" />
                  Uptime Report
                </Button>
                <Button variant="outline" onClick={() => exportReport("camera-errors")}>
                  <Download className="w-4 h-4 mr-2" />
                  Error Log
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          {/* System Health Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Overall System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {systemHealth.overall}%
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-400">System Health Score</div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="90%"
                    data={[{ value: systemHealth.overall }]}
                  >
                    <RadialBar dataKey="value" cornerRadius={10} fill="#10b981" />
                  </RadialBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Component Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.components.map((component) => (
                    <div key={component.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {component.name === "CPU" && <Cpu className="w-4 h-4" />}
                          {component.name === "GPU" && <Zap className="w-4 h-4" />}
                          {component.name === "Memory" && <HardDrive className="w-4 h-4" />}
                          {component.name === "Storage" && <HardDrive className="w-4 h-4" />}
                          {component.name === "Network" && <Activity className="w-4 h-4" />}
                        </div>
                        <span className="font-medium">{component.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`font-semibold ${getHealthColor(component.health)}`}>{component.health}%</span>
                        {getHealthBadge(component.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Alerts */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                System Alerts & Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Memory Usage Optimization</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Consider increasing memory allocation for optimal performance during peak hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">GPU Performance Excellent</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      GPU utilization is optimal with consistent performance across all streams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Network Stability</h4>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Network performance is excellent with minimal latency and packet loss.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
