import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Clock, FileUp, Info } from "lucide-react"

export default function ChallengePage() {
  return (
    <div className="container py-10 px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Build a Responsive Dashboard</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge>Medium</Badge>
            <span className="text-sm text-muted-foreground flex items-center">
              <Clock className="h-4 w-4 mr-1" /> 3 hours
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Info className="h-4 w-4" />
            Help
          </Button>
          <Button variant="secondary" size="sm" className="bg-green text-white hover:bg-green/90">
            Save Progress
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Challenge Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In this challenge, you will build a responsive admin dashboard with data visualization components and
                user management features. The dashboard should be built using React, TypeScript, and Tailwind CSS.
              </p>
              <h3 className="font-semibold text-lg">Requirements:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create a responsive layout that works on mobile, tablet, and desktop</li>
                <li>Implement a sidebar navigation with collapsible menu items</li>
                <li>
                  Create a dashboard overview page with at least 3 different data visualization components (charts,
                  graphs, etc.)
                </li>
                <li>Implement a user management table with sorting and filtering capabilities</li>
                <li>Add a form for creating/editing user information</li>
                <li>Implement a dark/light theme toggle</li>
              </ul>
              <h3 className="font-semibold text-lg">Evaluation Criteria:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Code quality and organization</li>
                <li>Responsive design implementation</li>
                <li>Component reusability</li>
                <li>TypeScript type safety</li>
                <li>UI/UX design and usability</li>
                <li>Accessibility considerations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission</CardTitle>
              <CardDescription>Upload your solution or provide a link to your code repository</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload Files</TabsTrigger>
                  <TabsTrigger value="link">Repository Link</TabsTrigger>
                </TabsList>
                <TabsContent value="upload" className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FileUp className="h-8 w-8 text-muted-foreground" />
                      <h3 className="font-medium">Drag and drop your files here</h3>
                      <p className="text-sm text-muted-foreground">
                        or click to browse files (ZIP, RAR, or individual files)
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Browse Files
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Maximum file size: 50MB</div>
                </TabsContent>
                <TabsContent value="link" className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="repo-link" className="text-sm font-medium">
                      Repository URL
                    </label>
                    <input
                      id="repo-link"
                      type="url"
                      placeholder="https://github.com/yourusername/your-repo"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Make sure your repository is public or you've provided access
                  </div>
                </TabsContent>
              </Tabs>
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">
                  Additional Notes (optional)
                </label>
                <Textarea
                  id="notes"
                  placeholder="Add any notes or comments about your submission"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Challenge</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Category</h3>
                <p>Frontend Development</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Difficulty</h3>
                <p>Medium</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Time Limit</h3>
                <p>3 hours</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Created By</h3>
                <p>SkillHire Team</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Starter Code</h3>
                <Button variant="outline" size="sm" className="w-full">
                  Download Starter Files
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Helpful Links</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      React Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      TypeScript Handbook
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Tailwind CSS Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Chart.js Documentation
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold">02:45:32</div>
                <p className="text-sm text-muted-foreground mt-2">Time remaining</p>
              </div>
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="sm">
                  Pause
                </Button>
                <Button variant="destructive" size="sm">
                  End Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
