import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, 
  MapPin, 
  Smartphone, 
  Trophy, 
  Users, 
  Leaf,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">RecyLink</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/awareness" className="text-muted-foreground hover:text-primary transition-smooth">
              Awareness
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
              Dashboard
            </Link>
            <Button variant="outline">Login</Button>
            <Button className="gradient-primary text-primary-foreground">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-6">🌱 Smart Recycling for India</Badge>
        <h1 className="text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
          Turn Your Waste into <span className="text-primary">Rewards</span> with RecyLink
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with local kabadiwalas, track your environmental impact, and earn rewards for every recyclable pickup. Making India cleaner, one pickup at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground">
            <Link to="/booking">
              Schedule Pickup <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose RecyLink?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Experience the future of recycling with our comprehensive platform</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Smartphone className="h-8 w-8 text-primary" />,
              title: "Easy Pickup Booking",
              description: "Schedule pickups in seconds with our user-friendly interface"
            },
            {
              icon: <MapPin className="h-8 w-8 text-primary" />,
              title: "Real-time Tracking",
              description: "Track your pickup agent live, just like food delivery apps"
            },
            {
              icon: <Trophy className="h-8 w-8 text-primary" />,
              title: "Earn Rewards",
              description: "Get points for every kg recycled and redeem exciting rewards"
            }
          ].map((feature, index) => (
            <Card key={index} className="shadow-card gradient-card text-center">
              <CardContent className="p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Book Pickup", icon: <Recycle />, link: "/booking" },
            { name: "Track Order", icon: <MapPin />, link: "/tracker" },
            { name: "Dashboard", icon: <Trophy />, link: "/dashboard" },
            { name: "Learn More", icon: <Leaf />, link: "/awareness" }
          ].map((item, index) => (
            <Link key={index} to={item.link}>
              <Card className="shadow-card hover:shadow-green transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="font-medium">{item.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
