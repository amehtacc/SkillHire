import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bookmark, Building, Clock, Globe, MapPin, Users } from "lucide-react"

export default function JobDetailPage() {
  return (
    <div className="container py-10 px-20">
      <div className="mb-6">
        <Link to="/jobs" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Jobs
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-xl">AC</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Frontend Developer</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted-foreground">Acme Corp</span>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" /> Remote
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Bookmark className="h-4 w-4" />
              Save
            </Button>
            <Button size="sm"><Link to="/jobs/1/apply">Apply Now</Link></Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We're looking for a skilled Frontend Developer to join our team and help build responsive, user-friendly
                web applications. You'll work closely with our design and backend teams to create seamless user
                experiences.
              </p>
              <h3 className="font-semibold text-lg">Responsibilities:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Develop and maintain responsive web applications using React and TypeScript</li>
                <li>Collaborate with designers to implement UI/UX designs with precision</li>
                <li>Write clean, maintainable, and well-documented code</li>
                <li>Optimize applications for maximum speed and scalability</li>
                <li>Implement and maintain unit and integration tests</li>
                <li>Stay up-to-date with emerging trends and technologies in frontend development</li>
              </ul>
              <h3 className="font-semibold text-lg">Requirements:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>3+ years of experience with React and modern JavaScript</li>
                <li>Strong knowledge of TypeScript and state management solutions</li>
                <li>Experience with responsive design and CSS frameworks like Tailwind</li>
                <li>Familiarity with testing frameworks such as Jest and React Testing Library</li>
                <li>Understanding of web performance optimization techniques</li>
                <li>Excellent problem-solving skills and attention to detail</li>
              </ul>
              <h3 className="font-semibold text-lg">Nice to Have:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Experience with Next.js or similar frameworks</li>
                <li>Knowledge of GraphQL and Apollo Client</li>
                <li>Understanding of CI/CD pipelines</li>
                <li>Contributions to open-source projects</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Required Challenge</CardTitle>
              <CardDescription>Complete this challenge to apply for this position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Build a Responsive Dashboard</h3>
                  <Badge>Medium</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a responsive admin dashboard with data visualization components and user management features.
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
              <p className="text-sm text-muted-foreground">
                Note: You must complete this challenge to apply for this position. Your identity will remain anonymous
                until later stages of the hiring process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Complete the Challenge</h3>
                      <p className="text-sm text-muted-foreground">
                        Solve the required challenge to demonstrate your skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Submit Your Application</h3>
                      <p className="text-sm text-muted-foreground">
                        Apply with your completed challenge and optional cover letter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Skill-Based Review</h3>
                      <p className="text-sm text-muted-foreground">
                        Your challenge is evaluated based on your skills, not your background
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Interview & Offer</h3>
                      <p className="text-sm text-muted-foreground">
                        If selected, you'll be invited for interviews and potentially receive an offer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Job Type</h3>
                  <p className="text-muted-foreground">Full-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Company Size</h3>
                  <p className="text-muted-foreground">50-200 employees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Remote (US time zones)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Team</h3>
                  <p className="text-muted-foreground">Product Development</p>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-medium mb-2">Salary Range</h3>
                <Badge variant="outline" className="text-lg font-medium">
                  $120,000 - $150,000
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Culture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Flexible</Badge>
                <Badge variant="outline">Innovative</Badge>
                <Badge variant="outline">Remote-first</Badge>
                <Badge variant="outline">Work-life Balance</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                At Acme Corp, we believe in a flexible work environment that encourages innovation and creativity. We
                value work-life balance and provide our employees with the tools and support they need to succeed.
              </p>
              <div className="pt-2">
                <h3 className="font-medium mb-2">Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Flexible working hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Comprehensive health insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>401(k) matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Professional development budget</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Home office stipend</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About Acme Corp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Acme Corp is a leading technology company specializing in creating innovative software solutions for
                businesses of all sizes. Founded in 2010, we've grown to serve clients worldwide with our cutting-edge
                products.
              </p>
              <div className="pt-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://example.com" target="_blank">
                    Visit Company Website
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">Senior React Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">InnoSoft • On-site</p>
                  <Badge variant="outline">$130-160K</Badge>
                  <Button variant="ghost" size="sm" className="w-full mt-3" asChild>
                    <Link href="/jobs/3">View Job</Link>
                  </Button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">UI/UX Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">DesignHub • Remote</p>
                  <Badge variant="outline">$100-125K</Badge>
                  <Button variant="ghost" size="sm" className="w-full mt-3" asChild>
                    <Link href="/jobs/5">View Job</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" asChild>
          <Link to="/jobs/1/apply">Apply Now</Link>
        </Button>
      </div>
    </div>
  )
}
