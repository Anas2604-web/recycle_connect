import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Package, 
  ArrowLeft,
  Eye,
  CheckCircle,
  XCircle,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage collectors, monitor pickups, and track platform metrics</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                    <p className="text-2xl font-bold text-primary">2,847</p>
                    <p className="text-sm text-green-600">+12% this month</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Active Collectors</p>
                    <p className="text-2xl font-bold text-primary">156</p>
                    <p className="text-sm text-green-600">+8% this month</p>
                  </div>
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Monthly Pickups</p>
                    <p className="text-2xl font-bold text-primary">1,234</p>
                    <p className="text-sm text-green-600">+23% this month</p>
                  </div>
                  <Package className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Recycled</p>
                    <p className="text-2xl font-bold text-primary">45.6 tons</p>
                    <p className="text-sm text-green-600">+18% this month</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for different admin sections */}
          <Tabs defaultValue="collectors" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="collectors">Collectors</TabsTrigger>
              <TabsTrigger value="pickups">Pickups</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Collectors Management */}
            <TabsContent value="collectors">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Collector Management</CardTitle>
                  <CardDescription>Approve and manage pickup agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Rajesh Kumar", phone: "+91 98765 43210", area: "Andheri West", status: "pending", pickups: 0, rating: 0 },
                      { name: "Priya Sharma", phone: "+91 98765 43211", area: "Bandra East", status: "active", pickups: 156, rating: 4.8 },
                      { name: "Mohammed Ali", phone: "+91 98765 43212", area: "Powai", status: "active", pickups: 234, rating: 4.9 },
                      { name: "Anjali Patel", phone: "+91 98765 43213", area: "Malad West", status: "pending", pickups: 0, rating: 0 }
                    ].map((collector, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">{collector.name}</h3>
                            <Badge variant={collector.status === "active" ? "default" : "secondary"}>
                              {collector.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{collector.phone}</p>
                          <p className="text-sm text-muted-foreground">Area: {collector.area}</p>
                          {collector.status === "active" && (
                            <p className="text-sm text-accent">⭐ {collector.rating} rating ({collector.pickups} pickups)</p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {collector.status === "pending" ? (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          ) : (
                            <Button size="sm" variant="outline">
                              Manage
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pickups Management */}
            <TabsContent value="pickups">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Recent Pickups</CardTitle>
                  <CardDescription>Monitor ongoing and completed pickups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "#RC2024001", user: "Priya Singh", collector: "Rajesh Kumar", area: "Andheri West", status: "completed", weight: "12 kg", category: "Paper" },
                      { id: "#RC2024002", user: "Amit Patel", collector: "Mohammed Ali", area: "Powai", status: "in-progress", weight: "8 kg", category: "Plastic" },
                      { id: "#RC2024003", user: "Sunita Sharma", collector: "Priya Sharma", area: "Bandra East", status: "scheduled", weight: "15 kg", category: "Mixed" },
                      { id: "#RC2024004", user: "Vikram Singh", collector: "Rajesh Kumar", area: "Andheri West", status: "completed", weight: "10 kg", category: "Metal" }
                    ].map((pickup, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold">{pickup.id}</span>
                            <Badge variant={
                              pickup.status === "completed" ? "default" :
                              pickup.status === "in-progress" ? "secondary" : "outline"
                            }>
                              {pickup.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">User: {pickup.user}</p>
                          <p className="text-sm text-muted-foreground">Collector: {pickup.collector}</p>
                          <p className="text-sm text-muted-foreground">Area: {pickup.area}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{pickup.weight}</p>
                          <p className="text-sm text-muted-foreground">{pickup.category}</p>
                          <Button size="sm" variant="outline" className="mt-2">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Management */}
            <TabsContent value="users">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">User Management</CardTitle>
                  <CardDescription>Monitor user activity and engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Top Users This Month</h3>
                      {[
                        { name: "Priya Singh", pickups: 12, recycled: "156 kg", points: 2450 },
                        { name: "Amit Patel", pickups: 10, recycled: "134 kg", points: 2100 },
                        { name: "Sunita Sharma", pickups: 8, recycled: "98 kg", points: 1890 }
                      ].map((user, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.pickups} pickups • {user.recycled}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-accent">{user.points} pts</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Recent Registrations</h3>
                      {[
                        { name: "Rahul Kumar", date: "Dec 28, 2024", area: "Malad West" },
                        { name: "Anjali Gupta", date: "Dec 27, 2024", area: "Thane West" },
                        { name: "Vikram Singh", date: "Dec 26, 2024", area: "Borivali East" }
                      ].map((user, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.area}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">{user.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Monthly Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <p className="text-muted-foreground">Charts will display growth metrics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-primary">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average Pickup Weight</span>
                      <span className="font-bold">11.2 kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>User Retention Rate</span>
                      <span className="font-bold text-green-600">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Collector Efficiency</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Rating</span>
                      <span className="font-bold">4.7 ⭐</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Carbon Saved</span>
                      <span className="font-bold text-primary">24.8 tons CO₂</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;