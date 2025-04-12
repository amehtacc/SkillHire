import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Download, Eye, Filter, Search, Star, ThumbsDown, ThumbsUp, UserRound, X } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Toast } from "../../components/ui/toast"
import EmployerSidebar from './EmployerSidebar.jsx'

const applicationsData = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    submittedDate: "2023-04-15",
    skillMatch: 92,
    quality: "High",
    challengeScore: 87,
    status: "New",
  },
  {
    id: 2,
    jobTitle: "Senior Frontend Developer",
    submittedDate: "2023-04-14",
    skillMatch: 85,
    quality: "Medium",
    challengeScore: 76,
    status: "New",
  },
  {
    id: 3,
    jobTitle: "Backend Engineer (Node.js)",
    submittedDate: "2023-04-13",
    skillMatch: 78,
    quality: "Medium",
    challengeScore: 82,
    status: "Shortlisted",
  },
  {
    id: 4,
    jobTitle: "Backend Engineer (Node.js)",
    submittedDate: "2023-04-12",
    skillMatch: 65,
    quality: "Low",
    challengeScore: 58,
    status: "Rejected",
  },
  {
    id: 5,
    jobTitle: "UI/UX Designer",
    submittedDate: "2023-04-11",
    skillMatch: 94,
    quality: "High",
    challengeScore: 91,
    status: "Shortlisted",
  },
  {
    id: 6,
    jobTitle: "UI/UX Designer",
    submittedDate: "2023-04-10",
    skillMatch: 88,
    quality: "High",
    challengeScore: 85,
    status: "New",
  },
  {
    id: 7,
    jobTitle: "Full Stack Developer",
    submittedDate: "2023-04-09",
    skillMatch: 82,
    quality: "Medium",
    challengeScore: 79,
    status: "New",
  },
]

export default function EmployerApplications() {
  const [minSkillMatch, setMinSkillMatch] = useState(60)
  const [selectedJob, setSelectedJob] = useState("all")
  const [selectedQuality, setSelectedQuality] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const [shortlistDialogOpen, setShortlistDialogOpen] = useState(false)
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)

  const filteredApplications = applicationsData.filter((app) => {
    // Filter by skill match
    if (app.skillMatch < minSkillMatch) return false

    // Filter by job title
    if (selectedJob !== "all" && app.jobTitle !== selectedJob) return false

    // Filter by quality
    if (selectedQuality !== "all" && app.quality !== selectedQuality) return false

    // Filter by status
    if (selectedStatus !== "all" && app.status !== selectedStatus) return false

    // Filter by search query
    if (searchQuery && !app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())) return false

    return true
  })

  const uniqueJobs = Array.from(new Set(applicationsData.map((app) => app.jobTitle)))

  const handleShortlist = () => {
    Toast({
      title: "Candidate Shortlisted",
      description: "The candidate has been shortlisted for an interview.",
    })
    setShortlistDialogOpen(false)
  }

  const handleReject = () => {
    Toast({
      title: "Candidate Rejected",
      description: "The candidate has been notified of the decision.",
    })
    setRejectDialogOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
          <div className="w-[17%]">
            <EmployerSidebar />
          </div>
    <div className="space-y-6 p-10 w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Applications</CardTitle>
          <CardDescription>Narrow down applications based on criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="text-sm font-medium">Search</label>
                <div className="mt-1 flex items-center gap-2">
                  <Input
                    placeholder="Search by job title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <Button variant="ghost" size="icon" onClick={() => setSearchQuery("")} className="h-9 w-9">
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Job Title</label>
                <Select value={selectedJob} onValueChange={setSelectedJob}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select job" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jobs</SelectItem>
                    {uniqueJobs.map((job) => (
                      <SelectItem key={job} value={job}>
                        {job}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Quality</label>
                <Select value={selectedQuality} onValueChange={setSelectedQuality}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Quality</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Status</label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Minimum Skill Match: {minSkillMatch}%</label>
                <span className="text-xs text-muted-foreground">Drag to adjust</span>
              </div>
              <Slider
                defaultValue={[minSkillMatch]}
                max={100}
                min={0}
                step={5}
                onValueChange={(value) => setMinSkillMatch(value[0])}
                className="py-4"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Applications ({filteredApplications.length})</CardTitle>
              <CardDescription>Blind review of candidate submissions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <span>Skill Match</span>
                    <Button variant="ghost" size="icon" className="h-5 w-5">
                      <Filter className="h-3 w-3" />
                    </Button>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <span>Quality</span>
                    <Button variant="ghost" size="icon" className="h-5 w-5">
                      <Filter className="h-3 w-3" />
                    </Button>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <span>Score</span>
                    <Button variant="ghost" size="icon" className="h-5 w-5">
                      <Filter className="h-3 w-3" />
                    </Button>
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Search className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">No applications match your filters</p>
                      <Button
                        variant="link"
                        onClick={() => {
                          setMinSkillMatch(0)
                          setSelectedJob("all")
                          setSelectedQuality("all")
                          setSelectedStatus("all")
                          setSearchQuery("")
                        }}
                      >
                        Reset all filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.jobTitle}</TableCell>
                    <TableCell>{new Date(application.submittedDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${
                              application.skillMatch >= 80
                                ? "bg-primary"
                                : application.skillMatch >= 60
                                  ? "bg-amber-500"
                                  : "bg-destructive"
                            }`}
                            style={{ width: `${application.skillMatch}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">{application.skillMatch}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          application.quality === "High"
                            ? "default"
                            : application.quality === "Medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {application.quality}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.floor(application.challengeScore / 20) }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        {Array.from({ length: 5 - Math.floor(application.challengeScore / 20) }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-muted-foreground" />
                        ))}
                        <span className="ml-1 text-xs font-medium">{application.challengeScore}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          application.status === "Shortlisted"
                            ? "secondary"
                            : application.status === "Rejected"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {application.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only md:not-sr-only md:ml-2">View</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Application Details</DialogTitle>
                              <DialogDescription>
                                Review the candidate's submission for {application.jobTitle}
                              </DialogDescription>
                            </DialogHeader>
                            <Tabs defaultValue="submission" className="w-full">
                              <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="submission">Submission</TabsTrigger>
                                <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
                                <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
                              </TabsList>
                              <TabsContent value="submission" className="space-y-4">
                                <div className="rounded-lg border p-4 ">
                                  <h3 className="text-base font-medium">Challenge Solution</h3>
                                  <p className="text-xs text-muted-foreground">
                                    Submitted on {new Date(application.submittedDate).toLocaleDateString()}
                                  </p>
                                  <div className="mt-4 space-y-4">
                                    <p>
                                      This is the candidate's solution to the challenge. The identity is hidden to
                                      prevent bias.
                                    </p>
                                    <div className="rounded-md bg-muted p-4">
                                      <pre className="text-xs">
                                        {`// Sample code submission
function calculateOptimalPath(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array(rows).fill().map(() => Array(cols).fill(0));
  
  dp[0][0] = grid[0][0];
  
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0];
  }
  
  for (let j = 1; j < cols; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j];
  }
  
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }
  
  return dp[rows-1][cols-1];
}`}
                                      </pre>
                                    </div>
                                    <div className="flex justify-end">
                                      <Button variant="outline" size="sm">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Full Submission
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                              <TabsContent value="evaluation" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                  <div className="space-y-2">
                                    <h3 className="font-medium">Code Quality</h3>
                                    <div className="flex items-center gap-2">
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div
                                          className="h-full rounded-full bg-primary"
                                          style={{ width: `${application.challengeScore}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium">{application.challengeScore}%</span>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <h3 className="font-medium">Problem Solving</h3>
                                    <div className="flex items-center gap-2">
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div
                                          className="h-full rounded-full bg-primary"
                                          style={{ width: `${application.challengeScore - 5}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium">{application.challengeScore - 5}%</span>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <h3 className="font-medium">Efficiency</h3>
                                    <div className="flex items-center gap-2">
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div
                                          className="h-full rounded-full bg-primary"
                                          style={{ width: `${application.challengeScore - 10}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium">{application.challengeScore - 10}%</span>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <h3 className="font-medium">Readability</h3>
                                    <div className="flex items-center gap-2">
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div
                                          className="h-full rounded-full bg-primary"
                                          style={{ width: `${application.challengeScore + 5}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium">{application.challengeScore + 5}%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="rounded-lg border p-4">
                                  <h3 className="font-medium">Reviewer Notes</h3>
                                  <p className="mt-2 text-sm">
                                    The candidate demonstrated strong problem-solving skills and provided an efficient
                                    solution. The code is well-structured and includes appropriate comments. The time
                                    complexity analysis is accurate, and the candidate considered edge cases.
                                  </p>
                                </div>
                              </TabsContent>
                              <TabsContent value="skills" className="space-y-4">
                                <div className="rounded-lg border p-4">
                                  <h3 className="font-medium">Skills Match</h3>
                                  <div className="mt-4 space-y-3">
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">JavaScript</span>
                                        <span className="text-sm font-medium">92%</span>
                                      </div>
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div className="h-full rounded-full bg-primary" style={{ width: "92%" }} />
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">React</span>
                                        <span className="text-sm font-medium">88%</span>
                                      </div>
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div className="h-full rounded-full bg-primary" style={{ width: "88%" }} />
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">TypeScript</span>
                                        <span className="text-sm font-medium">75%</span>
                                      </div>
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div className="h-full rounded-full bg-amber-500" style={{ width: "75%" }} />
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">CSS/Tailwind</span>
                                        <span className="text-sm font-medium">95%</span>
                                      </div>
                                      <div className="h-2 w-full rounded-full bg-muted">
                                        <div className="h-full rounded-full bg-primary" style={{ width: "95%" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                            <DialogFooter>
                              <div className="flex w-full justify-between">
                                <Button
                                  variant="destructive"
                                  onClick={() => {
                                    setSelectedApplication(application.id)
                                    setRejectDialogOpen(true)
                                  }}
                                  disabled={application.status === "Rejected"}
                                >
                                  <ThumbsDown className="mr-2 h-4 w-4" />
                                  Reject
                                </Button>
                                <div className="flex gap-2">
                                  <Button variant="outline">Request More Info</Button>
                                  <Button
                                    onClick={() => {
                                      setSelectedApplication(application.id)
                                      setShortlistDialogOpen(true)
                                    }}
                                    disabled={application.status === "Shortlisted"}
                                  >
                                    <ThumbsUp className="mr-2 h-4 w-4" />
                                    Shortlist
                                  </Button>
                                </div>
                              </div>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedApplication(application.id)
                                setShortlistDialogOpen(true)
                              }}
                              disabled={application.status === "Shortlisted"}
                            >
                              Shortlist
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedApplication(application.id)
                                setRejectDialogOpen(true)
                              }}
                              disabled={application.status === "Rejected"}
                              className="text-destructive"
                            >
                              Reject
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Shortlist Dialog */}
      <Dialog open={shortlistDialogOpen} onOpenChange={setShortlistDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Shortlist Candidate</DialogTitle>
            <DialogDescription>This will move the candidate to the interview stage.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <UserRound className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Candidate Identity Reveal</h3>
                  <p className="text-sm text-muted-foreground">Shortlisting will reveal the candidate's identity</p>
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Feedback (optional)</label>
              <Textarea placeholder="Add any notes or feedback for the candidate..." className="mt-1" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShortlistDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleShortlist}>Confirm Shortlist</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Candidate</DialogTitle>
            <DialogDescription>Provide feedback for the candidate.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Rejection Reason</label>
              <Select defaultValue="skillGap">
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="skillGap">Skill Gap</SelectItem>
                  <SelectItem value="experienceLevel">Experience Level</SelectItem>
                  <SelectItem value="challengePerformance">Challenge Performance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Feedback (optional)</label>
              <Textarea placeholder="Provide constructive feedback for the candidate..." className="mt-1" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              Confirm Rejection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    </div>
  )
}
