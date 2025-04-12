import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, FileUp } from "lucide-react"

export default function JobApplicationPage() {
  return (
    <div className="container py-10 px-20">
      <div className="mb-6">
        <Link to="/jobs/1" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Job Details
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Apply for Frontend Developer</h1>
        <p className="text-muted-foreground mt-1">Acme Corp • Remote • $120-150K</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Challenge</CardTitle>
              <CardDescription>Your completed challenge will be attached to your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Build a Responsive Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Completed on April 5, 2025</p>
                  </div>
                  <Badge variant="secondary">92%</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Challenge completed successfully
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  View Challenge Details
                </Button>
                <Button variant="outline" size="sm">
                  View Your Submission
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cover Letter (Optional)</CardTitle>
              <CardDescription>Add a personal note to your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                className="min-h-[200px]"
              />
              <p className="text-sm text-muted-foreground">
                Note: Your identity remains anonymous during the initial review process. The hiring team will evaluate
                your skills first before seeing your personal information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Materials (Optional)</CardTitle>
              <CardDescription>You can attach additional files to support your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <FileUp className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-medium">Drag and drop your files here</h3>
                  <p className="text-sm text-muted-foreground">or click to browse files (PDF, DOC, or images)</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Browse Files
                  </Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Maximum file size: 10MB per file, up to 5 files</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Review & Submit</CardTitle>
              <CardDescription>Please review your application before submitting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Application Checklist:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green" />
                    <span>Completed challenge attached</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green" />
                    <span>Cover letter (optional)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green" />
                    <span>Additional materials (optional)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                By submitting this application, you agree to our Terms of Service and Privacy Policy. Your identity will
                remain anonymous during the initial review process.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Application</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Complete the Challenge</h3>
                    <p className="text-sm text-muted-foreground">✓ Completed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Submit Your Application</h3>
                    <p className="text-sm text-muted-foreground">You are here</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Skill-Based Review</h3>
                    <p className="text-sm text-muted-foreground">Your challenge is evaluated based on your skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Interview & Offer</h3>
                    <p className="text-sm text-muted-foreground">If selected, you'll be invited for interviews</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground">Acme Corp • Remote</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
              <div>
                <h3 className="font-medium">Salary Range</h3>
                <Badge variant="outline">$120,000 - $150,000</Badge>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="outline">Flexible</Badge>
                  <Badge variant="outline">Innovative</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/jobs/1">View Full Job Details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have any questions about the application process or need assistance, our support team is here to
                help.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
