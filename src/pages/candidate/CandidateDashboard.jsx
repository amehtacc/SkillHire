import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, Code, FileCheck, Star } from "lucide-react"
import CandidateSidebar from "./CandidateSidebar.jsx"

export default function CandidateDashboard() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="w-[17%]">
      <CandidateSidebar />
      </div>
      <div className="flex-1 p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your activity and opportunities.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Challenges Completed</CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86%</div>
                <p className="text-xs text-muted-foreground">+4% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
                <Code className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+5 new matches this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Applications</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">2 in review, 1 interview scheduled</p>
              </CardContent>
            </Card>
          </div>

          {/* Progress Tracker */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
              <CardDescription>Track your skill development and profile completion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Profile Completion</div>
                  <div className="text-sm font-medium">85%</div>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground">Add your portfolio links to complete your profile</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Frontend Skills</div>
                  <div className="text-sm font-medium">92%</div>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Backend Skills</div>
                  <div className="text-sm font-medium">78%</div>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">DevOps Skills</div>
                  <div className="text-sm font-medium">45%</div>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Available Challenges & Past Submissions */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Challenges</CardTitle>
                <CardDescription>Recommended challenges based on your skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Build a Responsive Dashboard</h3>
                      <Badge>Medium</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create a responsive admin dashboard with data visualization components.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        <Clock className="inline-block h-4 w-4 mr-1" /> 3 hours
                      </div>
                      <Button size="sm" asChild>
                        <Link to="/challenges/1">Start Challenge</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">API Authentication System</h3>
                      <Badge>Hard</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">JWT</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Implement a secure authentication system with JWT and role-based access.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        <Clock className="inline-block h-4 w-4 mr-1" /> 4 hours
                      </div>
                      <Button size="sm" asChild>
                        <Link to="/challenges/1">Start Challenge</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/challenges">View All Challenges</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Past Submissions</CardTitle>
                <CardDescription>Your recent challenge submissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">E-commerce Product Page</h3>
                      <Badge variant="secondary">92%</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">CSS</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Submitted on April 2, 2025</p>
                    <Button variant="ghost" size="sm" className="gap-1">
                      View Feedback <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">REST API Development</h3>
                      <Badge variant="secondary">85%</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Express</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Submitted on March 28, 2025</p>
                    <Button variant="ghost" size="sm" className="gap-1">
                      View Feedback <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/submissions">View All Submissions</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* AI Job Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>AI Job Suggestions</CardTitle>
              <CardDescription>Personalized job matches based on your skills and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="best-match" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="best-match">Best Match</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="salary">Highest Salary</TabsTrigger>
                </TabsList>
                <TabsContent value="best-match" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bold">AC</span>
                          </div>
                          <Badge variant="outline">$120-150K</Badge>
                        </div>
                        <CardTitle className="mt-4 text-lg">Frontend Developer</CardTitle>
                        <CardDescription>Acme Corp • Remote</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">Tailwind</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                            95% Match
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full" asChild>
                          <Link to="/jobs/1">View Job</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bold">TC</span>
                          </div>
                          <Badge variant="outline">$90-110K</Badge>
                        </div>
                        <CardTitle className="mt-4 text-lg">Full Stack Developer</CardTitle>
                        <CardDescription>TechCo • Hybrid</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">Node.js</Badge>
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">MongoDB</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                            88% Match
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full" asChild>
                          <Link to="/jobs/1">View Job</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bold">IS</span>
                          </div>
                          <Badge variant="outline">$130-160K</Badge>
                        </div>
                        <CardTitle className="mt-4 text-lg">Senior React Developer</CardTitle>
                        <CardDescription>InnoSoft • On-site</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">Redux</Badge>
                          <Badge variant="secondary">GraphQL</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                            82% Match
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full" asChild>
                          <Link to="/jobs/1">View Job</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="recent" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bold">NS</span>
                          </div>
                          <Badge variant="outline">$110-130K</Badge>
                        </div>
                        <CardTitle className="mt-4 text-lg">React Native Developer</CardTitle>
                        <CardDescription>NextStep • Remote</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">React Native</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">Firebase</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                            79% Match
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full" asChild>
                          <Link to="/jobs/1">View Job</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="salary" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bold">IS</span>
                          </div>
                          <Badge variant="outline">$130-160K</Badge>
                        </div>
                        <CardTitle className="mt-4 text-lg">Senior React Developer</CardTitle>
                        <CardDescription>InnoSoft • On-site</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">Redux</Badge>
                          <Badge variant="secondary">GraphQL</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                            82% Match
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full" asChild>
                          <Link to="/jobs/1">View Job</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/matches">View All Matches</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
