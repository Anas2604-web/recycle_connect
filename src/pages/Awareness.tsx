import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  BookOpen, 
  Video, 
  Globe, 
  ArrowLeft,
  Clock,
  Eye,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Awareness = () => {
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Recycling Awareness Hub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about sustainable recycling practices, environmental impact, and make a difference in India's green future
            </p>
          </div>

          {/* Featured Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-card gradient-card text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-primary mb-2">24.8 tons</h3>
                <p className="text-muted-foreground">CO₂ Saved This Month</p>
              </CardContent>
            </Card>
            <Card className="shadow-card gradient-card text-center">
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-primary mb-2">45,600</h3>
                <p className="text-muted-foreground">Trees Worth Impact</p>
              </CardContent>
            </Card>
            <Card className="shadow-card gradient-card text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-primary mb-2">2,847</h3>
                <p className="text-muted-foreground">Eco Warriors</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Featured Articles */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "The Complete Guide to Plastic Recycling in India",
                      excerpt: "Learn about different types of plastics, proper sorting methods, and their recycling processes in the Indian context.",
                      author: "Dr. Priya Sharma",
                      readTime: "8 min read",
                      views: 1250,
                      category: "Plastic Recycling",
                      image: "🔄"
                    },
                    {
                      title: "How E-Waste Recycling is Transforming Indian Cities",
                      excerpt: "Discover the growing importance of electronic waste management and its impact on urban sustainability.",
                      author: "Rajesh Kumar",
                      readTime: "6 min read",
                      views: 980,
                      category: "E-Waste",
                      image: "📱"
                    },
                    {
                      title: "Paper Recycling: From Waste to Resource",
                      excerpt: "Understanding the paper recycling process and how it contributes to forest conservation in India.",
                      author: "Anjali Patel",
                      readTime: "5 min read",
                      views: 750,
                      category: "Paper Recycling",
                      image: "📄"
                    }
                  ].map((article, index) => (
                    <Card key={index} className="shadow-card transition-smooth hover:shadow-green cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{article.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary">{article.category}</Badge>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{article.title}</h3>
                            <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center space-x-4">
                                <span>By {article.author}</span>
                                <span className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="flex items-center">
                                  <Eye className="h-4 w-4 mr-1" />
                                  {article.views}
                                </span>
                              </div>
                              <Button variant="outline" size="sm">Read More</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Educational Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Plastic Sorting Made Simple",
                      duration: "5:32",
                      views: "2.1K views",
                      description: "Learn how to properly sort different types of plastic waste for maximum recycling efficiency."
                    },
                    {
                      title: "DIY Composting at Home",
                      duration: "8:15",
                      views: "1.8K views",
                      description: "Step-by-step guide to creating compost from organic waste in your kitchen."
                    },
                    {
                      title: "E-Waste Safety Guidelines",
                      duration: "6:45",
                      views: "1.5K views",
                      description: "Important safety measures when handling electronic waste before recycling."
                    },
                    {
                      title: "Paper Recycling Process",
                      duration: "7:20",
                      views: "1.2K views",
                      description: "Journey of paper from waste bin to recycled products in Indian facilities."
                    }
                  ].map((video, index) => (
                    <Card key={index} className="shadow-card">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <Video className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{video.duration}</span>
                          <span>{video.views}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Tips */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Quick Recycling Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      tip: "Always clean containers before recycling",
                      category: "Plastic"
                    },
                    {
                      tip: "Remove staples and paper clips from documents",
                      category: "Paper"
                    },
                    {
                      tip: "Separate different metals for better pricing",
                      category: "Metal"
                    },
                    {
                      tip: "Keep electronics dry and handle with care",
                      category: "E-Waste"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <Badge variant="outline" className="mb-2">{item.category}</Badge>
                      <p className="text-sm">{item.tip}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Environmental Facts */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Did You Know?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium">Recycling one aluminum can saves enough energy to power a TV for 3 hours! 🔋</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium">One recycled plastic bottle can make enough fiber for one T-shirt! 👕</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium">Recycling paper uses 60% less energy than making new paper! 📄</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Call */}
              <Card className="shadow-card gradient-primary text-white">
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Start Your Green Journey</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Join thousands of Indians making a difference through smart recycling
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Schedule Your First Pickup
                  </Button>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Browse Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: "Plastic Recycling", count: 15 },
                      { name: "Paper & Cardboard", count: 12 },
                      { name: "E-Waste Management", count: 8 },
                      { name: "Metal Recycling", count: 6 },
                      { name: "Glass Recycling", count: 4 },
                      { name: "Composting", count: 7 }
                    ].map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded cursor-pointer">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                    ))}
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

export default Awareness;