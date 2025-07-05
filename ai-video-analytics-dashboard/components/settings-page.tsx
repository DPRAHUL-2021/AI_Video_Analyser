"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  Bell,
  Shield,
  Palette,
  Database,
  Cpu,
  HardDrive,
  AlertTriangle,
  Save,
  RotateCcw,
  Download,
  Upload,
} from "lucide-react"

export function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    alerts: true,
    reports: true,
  })

  const [systemSettings, setSystemSettings] = useState({
    maxStreams: 12,
    defaultFPS: 30,
    detectionThreshold: 0.7,
    autoRestart: true,
    logLevel: "info",
    backupEnabled: true,
  })

  const [displaySettings, setDisplaySettings] = useState({
    theme: "system",
    refreshRate: 5,
    showThumbnails: true,
    animationsEnabled: true,
    compactMode: false,
  })

  const handleSaveSettings = () => {
    // Simulate saving settings
    console.log("Settings saved:", { notifications, systemSettings, displaySettings })
  }

  const handleResetSettings = () => {
    // Reset to defaults
    setNotifications({
      email: true,
      push: true,
      sms: false,
      alerts: true,
      reports: true,
    })
  }

  const handleExportConfig = () => {
    // Simulate config export
    console.log("Exporting configuration...")
  }

  const handleImportConfig = () => {
    // Simulate config import
    console.log("Importing configuration...")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Configure system preferences and options</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={handleExportConfig}>
              <Download className="w-4 h-4 mr-2" />
              Export Config
            </Button>
            <Button variant="outline" onClick={handleImportConfig}>
              <Upload className="w-4 h-4 mr-2" />
              Import Config
            </Button>
            <Button onClick={handleSaveSettings}>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="display">Display</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* General Settings */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system-name">System Name</Label>
                  <Input id="system-name" defaultValue="AI Video Analytics Pipeline" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Main Data Center" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="cet">Central European Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Organization Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" defaultValue="Intel Corporation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" defaultValue="admin@intel.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">System Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Enterprise-grade AI video analytics pipeline powered by Intel DL Streamer technology for real-time object detection and classification."
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          {/* Notification Settings */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Receive alerts via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Browser push notifications</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Critical alerts via SMS</p>
                  </div>
                  <Switch
                    id="sms-notifications"
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="system-alerts">System Alerts</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hardware and performance alerts</p>
                  </div>
                  <Switch
                    id="system-alerts"
                    checked={notifications.alerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, alerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="report-notifications">Report Notifications</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Daily and weekly reports</p>
                  </div>
                  <Switch
                    id="report-notifications"
                    checked={notifications.reports}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, reports: checked })}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Alert Thresholds</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>CPU Usage Alert (%)</Label>
                    <Slider defaultValue={[85]} max={100} step={5} className="w-full" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Alert when CPU usage exceeds 85%</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Memory Usage Alert (%)</Label>
                    <Slider defaultValue={[90]} max={100} step={5} className="w-full" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Alert when memory usage exceeds 90%</div>
                  </div>
                  <div className="space-y-2">
                    <Label>FPS Drop Alert</Label>
                    <Slider defaultValue={[20]} max={30} step={1} className="w-full" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Alert when FPS drops below 20</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Detection Confidence (%)</Label>
                    <Slider defaultValue={[70]} max={100} step={5} className="w-full" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Minimum confidence for alerts: 70%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          {/* System Settings */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="max-streams">Maximum Concurrent Streams</Label>
                  <Input
                    id="max-streams"
                    type="number"
                    value={systemSettings.maxStreams}
                    onChange={(e) =>
                      setSystemSettings({ ...systemSettings, maxStreams: Number.parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-fps">Default Target FPS</Label>
                  <Input
                    id="default-fps"
                    type="number"
                    value={systemSettings.defaultFPS}
                    onChange={(e) =>
                      setSystemSettings({ ...systemSettings, defaultFPS: Number.parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Detection Confidence Threshold</Label>
                  <Slider
                    value={[systemSettings.detectionThreshold * 100]}
                    onValueChange={(value) =>
                      setSystemSettings({ ...systemSettings, detectionThreshold: value[0] / 100 })
                    }
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Current: {(systemSettings.detectionThreshold * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="log-level">Log Level</Label>
                  <Select
                    value={systemSettings.logLevel}
                    onValueChange={(value) => setSystemSettings({ ...systemSettings, logLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debug">Debug</SelectItem>
                      <SelectItem value="info">Info</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="error">Error</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">System Behavior</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-restart">Auto-restart Failed Streams</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Automatically restart cameras that disconnect
                      </p>
                    </div>
                    <Switch
                      id="auto-restart"
                      checked={systemSettings.autoRestart}
                      onCheckedChange={(checked) => setSystemSettings({ ...systemSettings, autoRestart: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="backup-enabled">Enable Automatic Backups</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Daily backup of configuration and logs</p>
                    </div>
                    <Switch
                      id="backup-enabled"
                      checked={systemSettings.backupEnabled}
                      onCheckedChange={(checked) => setSystemSettings({ ...systemSettings, backupEnabled: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hardware Configuration */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HardDrive className="w-5 h-5 mr-2" />
                Hardware Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>CPU Allocation (%)</Label>
                  <Slider defaultValue={[80]} max={100} step={5} className="w-full" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Reserved for video processing: 80%</div>
                </div>
                <div className="space-y-2">
                  <Label>GPU Memory (GB)</Label>
                  <Slider defaultValue={[8]} max={16} step={1} className="w-full" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Allocated GPU memory: 8GB</div>
                </div>
                <div className="space-y-2">
                  <Label>Buffer Size (MB)</Label>
                  <Slider defaultValue={[512]} max={2048} step={128} className="w-full" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stream buffer size: 512MB</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="display" className="space-y-6">
          {/* Display Settings */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Display & Interface
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select
                    value={displaySettings.theme}
                    onValueChange={(value) => setDisplaySettings({ ...displaySettings, theme: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Dashboard Refresh Rate (seconds)</Label>
                  <Slider
                    value={[displaySettings.refreshRate]}
                    onValueChange={(value) => setDisplaySettings({ ...displaySettings, refreshRate: value[0] })}
                    min={1}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Current: {displaySettings.refreshRate} seconds
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Interface Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-thumbnails">Show Camera Thumbnails</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Display live video previews in camera cards
                      </p>
                    </div>
                    <Switch
                      id="show-thumbnails"
                      checked={displaySettings.showThumbnails}
                      onCheckedChange={(checked) => setDisplaySettings({ ...displaySettings, showThumbnails: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="animations-enabled">Enable Animations</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Smooth transitions and hover effects</p>
                    </div>
                    <Switch
                      id="animations-enabled"
                      checked={displaySettings.animationsEnabled}
                      onCheckedChange={(checked) =>
                        setDisplaySettings({ ...displaySettings, animationsEnabled: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="compact-mode">Compact Mode</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Reduce spacing and padding for more content
                      </p>
                    </div>
                    <Switch
                      id="compact-mode"
                      checked={displaySettings.compactMode}
                      onCheckedChange={(checked) => setDisplaySettings({ ...displaySettings, compactMode: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          {/* Security Settings */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security & Access Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Require 2FA for admin access</p>
                  </div>
                  <Switch id="two-factor" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="session-timeout">Auto Session Timeout</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Automatically log out inactive users</p>
                  </div>
                  <Switch id="session-timeout" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="audit-logging">Audit Logging</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Log all user actions and system changes</p>
                  </div>
                  <Switch id="audit-logging" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Access Control</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="session-duration">Session Duration (hours)</Label>
                    <Input id="session-duration" type="number" defaultValue="8" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                    <Input id="max-login-attempts" type="number" defaultValue="3" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Encryption</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="encrypt-streams">Encrypt Video Streams</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">End-to-end encryption for video data</p>
                    </div>
                    <Switch id="encrypt-streams" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="encrypt-storage">Encrypt Stored Data</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Encrypt logs and configuration files</p>
                    </div>
                    <Switch id="encrypt-storage" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          {/* Advanced Settings */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Advanced Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Database Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="db-host">Database Host</Label>
                    <Input id="db-host" defaultValue="localhost:5432" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-name">Database Name</Label>
                    <Input id="db-name" defaultValue="video_analytics" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connection-pool">Connection Pool Size</Label>
                    <Input id="connection-pool" type="number" defaultValue="20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="query-timeout">Query Timeout (seconds)</Label>
                    <Input id="query-timeout" type="number" defaultValue="30" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">API Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="api-port">API Port</Label>
                    <Input id="api-port" type="number" defaultValue="8080" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rate-limit">Rate Limit (requests/minute)</Label>
                    <Input id="rate-limit" type="number" defaultValue="1000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cors-origins">CORS Allowed Origins</Label>
                  <Textarea
                    id="cors-origins"
                    defaultValue="https://dashboard.intel.com&#10;https://analytics.intel.com"
                    rows={3}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Performance Tuning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Worker Threads</Label>
                    <Slider defaultValue={[8]} min={1} max={32} step={1} className="w-full" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Current: 8 threads</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Cache Size (MB)</Label>
                    <Slider defaultValue={[256]} min={64} max={1024} step={64} className="w-full" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Current: 256MB</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Maintenance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Database className="w-6 h-6 mb-2" />
                    Backup Database
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <RotateCcw className="w-6 h-6 mb-2" />
                    Reset to Defaults
                  </Button>
                  <Button variant="outline" className="h-20 flex-col text-red-600 hover:text-red-700 bg-transparent">
                    <AlertTriangle className="w-6 h-6 mb-2" />
                    Factory Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
