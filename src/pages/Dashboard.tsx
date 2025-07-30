import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Recycle, 
  Trophy, 
  Coins, 
  TrendingUp, 
  Calendar, 
  Star,
  Gift,
  Users,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Priya! 👋</h1>
            <p className="text-muted-foreground">Track your recycling impact and earn rewards</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Recycled</p>
                    <p className="text-2xl font-bold text-primary">156 kg</p>
                  </div>
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Reward Points</p>
                    <p className="text-2xl font-bold text-accent">2,450</p>
                  </div>
                  <Coins className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">City Rank</p>
                    <p className="text-2xl font-bold text-primary">#23</p>
                  </div>
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pickups</p>
                    <p className="text-2xl font-bold text-primary">34</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Pickups */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Recent Pickups</CardTitle>
                  <CardDescription>Your latest recycling activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: "Dec 28, 2024", category: "Paper & Cardboard", weight: "12 kg", points: 240, status: "Completed" },
                      { date: "Dec 25, 2024", category: "Plastic Bottles", weight: "8 kg", points: 160, status: "Completed" },
                      { date: "Dec 22, 2024", category: "Mixed Recyclables", weight: "15 kg", points: 300, status: "In Progress" }
                    ].map((pickup, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge variant={pickup.status === "Completed" ? "default" : "secondary"}>
                              {pickup.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{pickup.date}</span>
                          </div>
                          <p className="font-medium">{pickup.category}</p>
                          <p className="text-sm text-muted-foreground">{pickup.weight}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-accent">+{pickup.points} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Progress */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Monthly Goal Progress</CardTitle>
                  <CardDescription>Target: 200 kg this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm text-muted-foreground">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">156 kg</p>
                        <p className="text-sm text-muted-foreground">Recycled</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-muted-foreground">44 kg</p>
                        <p className="text-sm text-muted-foreground">Remaining</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Achievements */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Star className="h-5 w-5 mr-2" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">First Timer</p>
                        <p className="text-sm text-muted-foreground">Complete your first pickup</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Recycle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Eco Warrior</p>
                        <p className="text-sm text-muted-foreground">Recycle 100kg</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 opacity-50">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Community Leader</p>
                        <p className="text-sm text-muted-foreground">Refer 10 friends</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    City Leaderboard
                  </CardTitle>
                  <CardDescription>Top recyclers in Mumbai</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { rank: 1, name: "Rahul Sharma", points: 5420 },
                      { rank: 2, name: "Anjali Patel", points: 4890 },
                      { rank: 3, name: "Vikram Singh", points: 4230 },
                      { rank: 23, name: "You", points: 2450, isUser: true }
                    ].map((user, index) => (
                      <div key={index} className={`flex items-center justify-between p-2 rounded ${user.isUser ? 'bg-primary/10' : ''}`}>
                        <div className="flex items-center space-x-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                            user.rank === 1 ? 'bg-accent text-accent-foreground' :
                            user.rank === 2 ? 'bg-muted text-muted-foreground' :
                            user.rank === 3 ? 'bg-secondary text-secondary-foreground' :
                            user.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            {user.rank}
                          </span>
                          <span className={user.isUser ? 'font-bold' : ''}>{user.name}</span>
                        </div>
                        <span className="text-sm font-medium">{user.points} pts</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rewards */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Gift className="h-5 w-5 mr-2" />
                    Available Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">₹50 Amazon Voucher</p>
                        <p className="text-sm text-muted-foreground">2,000 points</p>
                      </div>
                      <Button size="sm" variant="outline">Redeem</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">₹100 Grocery Voucher</p>
                        <p className="text-sm text-muted-foreground">4,000 points</p>
                      </div>
                      <Button size="sm" disabled>Not enough points</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;