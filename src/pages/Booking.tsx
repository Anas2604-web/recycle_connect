import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Package, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Schedule Your Pickup</h1>
            <p className="text-muted-foreground">Let's make recycling effortless for you</p>
          </div>

          <Card className="shadow-card gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Package className="h-5 w-5 mr-2" />
                Pickup Details
              </CardTitle>
              <CardDescription>
                Fill in the details below to schedule your recyclable pickup
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Pickup Address
                </Label>
                <Textarea 
                  id="address" 
                  placeholder="Enter your complete address with pincode" 
                  className="min-h-[80px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Preferred Time Slot
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Recyclable Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paper">Paper & Cardboard</SelectItem>
                      <SelectItem value="plastic">Plastic Bottles & Containers</SelectItem>
                      <SelectItem value="metal">Metal Cans & Electronics</SelectItem>
                      <SelectItem value="glass">Glass Bottles & Jars</SelectItem>
                      <SelectItem value="mixed">Mixed Recyclables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Estimated Weight (kg)</Label>
                <Input id="weight" type="number" placeholder="Approximate weight" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any specific instructions for the pickup agent"
                  className="min-h-[60px]"
                />
              </div>

              <div className="pt-4">
                <Button 
                  className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
                  size="lg"
                >
                  Schedule Pickup
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;