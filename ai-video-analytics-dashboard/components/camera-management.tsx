"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Camera,
  Plus,
  Edit,
  Trash2,
  Settings,
  Play,
  Pause,
  RotateCcw,
  MapPin,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  Upload,
  Search,
} from "lucide-react"

const generateCameraList = () => [
  {
    id: "CAM-01",
    name: "Main Gate Camera",
    location: "Main Gate",
    ip: "192.168.1.101",
    status: "active",
    fps: 28,
    resolution: "1920x1080",
    codec: "H.264",
    bitrate: "2.5 Mbps",
    uptime: "15d 8h 32m",
    detectionZones: 3,
    lastMaintenance: "2024-01-15",
    model: "Intel RealSense D435i",
    firmware: "v2.1.4",
    health: 95,
  },
  {
    id: "CAM-02",
    name: "Parking Lot A",
    location: "Parking Lot A",
    ip: "192.168.1.102",
    status: "active",
    fps: 25,
    resolution: "1920x1080",
    codec: "H.265",
    bitrate: "1.8 Mbps",
    uptime: "12d 4h 15m",
    detectionZones: 2,
    lastMaintenance: "2024-01-10",
    model: "Intel RealSense D455",
    firmware: "v2.1.3",
    health: 88,
  },
  {
    id: "CAM-03",
    name: "Building Entrance",
    location: "Building Entrance",
    ip: "192.168.1.103",
    status: "active",
    fps: 30,
    resolution: "2560x1440",
    codec: "H.264",
    bitrate: "3.2 Mbps",
    uptime: "8d 12h 45m",
    detectionZones: 4,
    lastMaintenance: "2024-01-20",
    model: "Intel RealSense D435i",
    firmware: "v2.1.4",
    health: 92,
  },
  {
    id: "CAM-04",
    name: "Cafeteria Monitor",
    location: "Cafeteria",
    ip: "192.168.1.104",
    status: "maintenance",
    fps: 0,
    resolution: "1920x1080",
    codec: "H.264",
    bitrate: "0 Mbps",
    uptime: "0d 0h 0m",
    detectionZones: 2,
    lastMaintenance: "2024-01-25",
    model: "Intel RealSense D455",
    firmware: "v2.1.2",
    health: 45,
  },
  {
    id: "CAM-05",
    name: "Loading Dock",
    location: "Loading Dock",
    ip: "192.168.1.105",
    status: "active",
    fps: 27,
    resolution: "1920x1080",
    codec: "H.265",
    bitrate: "2.1 Mbps",
    uptime: "20d 16h 8m",
    detectionZones: 3,
    lastMaintenance: "2024-01-05",
    model: "Intel RealSense D435i",
    firmware: "v2.1.4",
    health: 97,
  },
]

export function CameraManagement() {
  const [cameras, setCameras] = useState(generateCameraList())
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredCameras = cameras.filter((camera) => {
    const matchesSearch =
      camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camera.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camera.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || camera.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "inactive":
        return "bg-red-500"
      case "maintenance":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getHealthColor = (health: number) => {
    if (health >= 90) return "text-green-600"
    if (health >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Camera Management</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Configure and monitor all camera streams</p>
          </div>
          <div className="flex items-center space-x-3">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Camera
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Camera</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="camera-name">Camera Name</Label>
                    <Input id="camera-name" placeholder="Enter camera name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="camera-location">Location</Label>
                    <Input id="camera-location" placeholder="Enter location" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="camera-ip">IP Address</Label>
                    <Input id="camera-ip" placeholder="192.168.1.xxx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="camera-model">Camera Model</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="d435i">Intel RealSense D435i</SelectItem>
                        <SelectItem value="d455">Intel RealSense D455</SelectItem>
                        <SelectItem value="d415">Intel RealSense D415</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resolution">Resolution</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select resolution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1080p">1920x1080 (1080p)</SelectItem>
                        <SelectItem value="1440p">2560x1440 (1440p)</SelectItem>
                        <SelectItem value="4k">3840x2160 (4K)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fps">Target FPS</Label>
                    <Input id="fps" type="number" placeholder="30" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAddDialogOpen(false)}>Add Camera</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Config
            </Button>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import Config
            </Button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search cameras..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cameras</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCameras.map((camera) => (
          <Card key={camera.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Camera className="w-5 h-5 mr-2" />
                    {camera.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {camera.location}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(camera.status)}`}></div>
                  <Badge
                    variant={
                      camera.status === "active"
                        ? "default"
                        : camera.status === "maintenance"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {camera.status}
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
                {camera.status === "active" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-2 left-2 text-white text-xs font-mono">LIVE • {camera.fps} FPS</div>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">IP:</span>
                    <span className="ml-1 font-mono">{camera.ip}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">FPS:</span>
                    <span className="ml-1 font-semibold">{camera.fps}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Resolution:</span>
                    <span className="ml-1">{camera.resolution}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Codec:</span>
                    <span className="ml-1">{camera.codec}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Health:</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={camera.health} className="w-16 h-2" />
                    <span className={`font-semibold ${getHealthColor(camera.health)}`}>{camera.health}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Uptime:</span>
                  <span className="font-mono text-xs">{camera.uptime}</span>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Edit className="w-3 h-3 mr-1" />
                    Configure
                  </Button>
                  <Button size="sm" variant="outline">
                    {camera.status === "active" ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </Button>
                  <Button size="sm" variant="outline">
                    <RotateCcw className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bulk Operations */}
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Bulk Operations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Play className="w-6 h-6 mb-2" />
              Start All Cameras
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Pause className="w-6 h-6 mb-2" />
              Stop All Cameras
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <RotateCcw className="w-6 h-6 mb-2" />
              Restart All Cameras
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Active Cameras</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {cameras.filter((c) => c.status === "active").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Maintenance</p>
                <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                  {cameras.filter((c) => c.status === "maintenance").length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Offline</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {cameras.filter((c) => c.status === "inactive").length}
                </p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Cameras</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{cameras.length}</p>
              </div>
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
