import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, User, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Tracker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Track Your Pickup</h1>
            <p className="text-muted-foreground">Real-time tracking of your recyclable pickup</p>
          </div>

          {/* Status Progress */}
          <Card className="shadow-card gradient-card mb-6">
            <CardHeader>
              <CardTitle className="text-primary">Pickup Status</CardTitle>
              <Badge variant="secondary" className="w-fit">In Progress</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">Confirmed</span>
                </div>
                <div className="flex-1 h-1 bg-primary mx-4"></div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">On the Way</span>
                </div>
                <div className="flex-1 h-1 bg-muted mx-4"></div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                  <span className="text-sm text-muted-foreground">Completed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map Placeholder */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-2" />
                  Live Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">Map integration will show live tracking</p>
                    <p className="text-sm text-muted-foreground mt-1">Agent is 2.5 km away</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agent Details */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <User className="h-5 w-5 mr-2" />
                    Your Pickup Agent
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Rajesh Kumar</h3>
                      <p className="text-sm text-muted-foreground">Verified Collector</p>
                      <p className="text-sm text-accent">⭐ 4.8 rating (124 pickups)</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Agent
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Clock className="h-5 w-5 mr-2" />
                    Pickup Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Booking ID</p>
                    <p className="font-semibold">#RC2024001</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Arrival</p>
                    <p className="font-semibold">2:30 PM - 3:00 PM</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <Badge variant="secondary">Mixed Recyclables</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Weight</p>
                    <p className="font-semibold">5 kg</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="mr-4">
              Cancel Pickup
            </Button>
            <Button className="gradient-primary text-primary-foreground">
              Complete Pickup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;