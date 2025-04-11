import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Filter, Search } from "lucide-react"

export default function ExploreChallengesPage() {
  return (
    <div className="container py-10 px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Explore Challenges</h1>
          <p className="text-muted-foreground">Find challenges that match your skills and interests</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search challenges..." className="w-full md:w-[300px] pl-8" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-64 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Skill</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="node">Node.js</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Difficulty</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Time</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Duration</SelectItem>
                <SelectItem value="1h">Under 1 hour</SelectItem>
                <SelectItem value="3h">1-3 hours</SelectItem>
                <SelectItem value="5h">3-5 hours</SelectItem>
                <SelectItem value="5h+">5+ hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Category</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="fullstack">Full Stack</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Challenge Card 1 */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Build a Responsive Dashboard</CardTitle>
                        <CardDescription>Frontend Challenge</CardDescription>
                      </div>
                      <Badge>Medium</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create a responsive admin dashboard with data visualization components and user management
                      features.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />3 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/challenges/1">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Challenge Card 2 */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>API Authentication System</CardTitle>
                        <CardDescription>Backend Challenge</CardDescription>
                      </div>
                      <Badge>Hard</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">JWT</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Implement a secure authentication system with JWT and role-based access control for a RESTful API.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />4 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/challenges/2">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Challenge Card 3 */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>E-commerce Product Page</CardTitle>
                        <CardDescription>Frontend Challenge</CardDescription>
                      </div>
                      <Badge>Easy</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">CSS</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build a responsive product page with image gallery, product details, and add-to-cart
                      functionality.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />2 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/challenges/3">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Challenge Card 4 */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Database Schema Design</CardTitle>
                        <CardDescription>Backend Challenge</CardDescription>
                      </div>
                      <Badge>Medium</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">SQL</Badge>
                      <Badge variant="outline">Database</Badge>
                      <Badge variant="outline">Modeling</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Design a normalized database schema for a social media platform with users, posts, comments, and
                      likes.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      2.5 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/challenges/4">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Challenge Card 5 */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Mobile App UI Design</CardTitle>
                        <CardDescription>Design Challenge</CardDescription>
                      </div>
                      <Badge>Medium</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Figma</Badge>
                      <Badge variant="outline">UI/UX</Badge>
                      <Badge variant="outline">Mobile</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Design a mobile app UI for a fitness tracking application with a focus on user experience and
                      accessibility.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />3 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/challenges/5">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Challenge Card 6 */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>CI/CD Pipeline Setup</CardTitle>
                        <CardDescription>DevOps Challenge</CardDescription>
                      </div>
                      <Badge>Hard</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">GitHub Actions</Badge>
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">AWS</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Set up a CI/CD pipeline for a Node.js application using GitHub Actions, Docker, and AWS
                      deployment.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />5 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/challenges/6">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Popular challenges would go here */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>E-commerce Product Page</CardTitle>
                        <CardDescription>Frontend Challenge</CardDescription>
                      </div>
                      <Badge>Easy</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">CSS</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build a responsive product page with image gallery, product details, and add-to-cart
                      functionality.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />2 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/3">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="new">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* New challenges would go here */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>CI/CD Pipeline Setup</CardTitle>
                        <CardDescription>DevOps Challenge</CardDescription>
                      </div>
                      <Badge>Hard</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">GitHub Actions</Badge>
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">AWS</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Set up a CI/CD pipeline for a Node.js application using GitHub Actions, Docker, and AWS
                      deployment.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />5 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/6">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Recommended challenges would go here */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Build a Responsive Dashboard</CardTitle>
                        <CardDescription>Frontend Challenge</CardDescription>
                      </div>
                      <Badge>Medium</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create a responsive admin dashboard with data visualization components and user management
                      features.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />3 hours
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/1">Start Challenge</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
