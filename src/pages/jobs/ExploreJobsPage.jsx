import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Filter, Search } from "lucide-react"

export default function ExploreJobsPage() {
  return (
    <div className="container py-10 px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Explore Jobs</h1>
          <p className="text-muted-foreground">Find jobs that match your skills and interests</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search jobs..." className="w-full md:w-[300px] pl-8" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-64 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Salary Range</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Salary</SelectItem>
                <SelectItem value="50k">$50K+</SelectItem>
                <SelectItem value="75k">$75K+</SelectItem>
                <SelectItem value="100k">$100K+</SelectItem>
                <SelectItem value="150k">$150K+</SelectItem>
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
          <div>
            <h3 className="text-sm font-medium mb-2">Experience</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Experience</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead / Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Location</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="onsite">On-site</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Company Culture</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select culture" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Culture</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
                <SelectItem value="innovative">Innovative</SelectItem>
                <SelectItem value="collaborative">Collaborative</SelectItem>
                <SelectItem value="structured">Structured</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="matches">Best Matches</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="salary">Highest Salary</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Job Card 1 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">AC</span>
                        </div>
                        <div>
                          <CardTitle>Frontend Developer</CardTitle>
                          <CardDescription>Acme Corp • Remote</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$120-150K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're looking for a skilled Frontend Developer to join our team and help build responsive,
                      user-friendly web applications. You'll work closely with our design and backend teams to create
                      seamless user experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Build a Responsive Dashboard
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Flexible</Badge>
                          <Badge variant="outline">Innovative</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Job Card 2 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">TC</span>
                        </div>
                        <div>
                          <CardTitle>Full Stack Developer</CardTitle>
                          <CardDescription>TechCo • Hybrid</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$90-110K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our growing team as a Full Stack Developer to build and maintain web applications from front
                      to back. You'll be involved in all aspects of development, from database design to UI
                      implementation.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          API Authentication System
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Collaborative</Badge>
                          <Badge variant="outline">Fast-paced</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Job Card 3 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">IS</span>
                        </div>
                        <div>
                          <CardTitle>Senior React Developer</CardTitle>
                          <CardDescription>InnoSoft • On-site</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$130-160K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Redux</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're seeking an experienced Senior React Developer to lead our frontend development efforts.
                      You'll architect solutions, mentor junior developers, and implement best practices across our
                      projects.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Build a Responsive Dashboard
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Structured</Badge>
                          <Badge variant="outline">Mentorship</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Job Card 4 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">NS</span>
                        </div>
                        <div>
                          <CardTitle>React Native Developer</CardTitle>
                          <CardDescription>NextStep • Remote</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$110-130K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our mobile development team to build cross-platform mobile applications using React Native.
                      You'll work on creating smooth, responsive user interfaces and integrating with backend services.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          E-commerce Product Page
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Remote-first</Badge>
                          <Badge variant="outline">Autonomous</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="matches">
              <div className="grid grid-cols-1 gap-6">
                {/* Best matches would go here */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">AC</span>
                        </div>
                        <div>
                          <CardTitle>Frontend Developer</CardTitle>
                          <CardDescription>Acme Corp • Remote</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$120-150K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're looking for a skilled Frontend Developer to join our team and help build responsive,
                      user-friendly web applications. You'll work closely with our design and backend teams to create
                      seamless user experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Build a Responsive Dashboard
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Flexible</Badge>
                          <Badge variant="outline">Innovative</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="recent">
              <div className="grid grid-cols-1 gap-6">
                {/* Recent jobs would go here */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">NS</span>
                        </div>
                        <div>
                          <CardTitle>React Native Developer</CardTitle>
                          <CardDescription>NextStep • Remote</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$110-130K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our mobile development team to build cross-platform mobile applications using React Native.
                      You'll work on creating smooth, responsive user interfaces and integrating with backend services.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          E-commerce Product Page
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Remote-first</Badge>
                          <Badge variant="outline">Autonomous</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="salary">
              <div className="grid grid-cols-1 gap-6">
                {/* Highest salary jobs would go here */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-bold">IS</span>
                        </div>
                        <div>
                          <CardTitle>Senior React Developer</CardTitle>
                          <CardDescription>InnoSoft • On-site</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">$130-160K</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Redux</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're seeking an experienced Senior React Developer to lead our frontend development efforts.
                      You'll architect solutions, mentor junior developers, and implement best practices across our
                      projects.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Challenge:</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Build a Responsive Dashboard
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Company Culture:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Structured</Badge>
                          <Badge variant="outline">Mentorship</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button size="sm">
                      <Link className="flex justify-center items-center gap-1" to="/jobs/1">View Job <ArrowRight className="h-4 w-4" /></Link>
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
