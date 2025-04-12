import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X, Upload, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/toaster"
import EmployerSidebar from './EmployerSidebar.jsx'

const formSchema = z.object({
  jobTitle: z.string().min(5, { message: "Job title must be at least 5 characters" }),
  roleDescription: z.string().min(20, { message: "Role description must be at least 20 characters" }),
  taskInstructions: z.string().min(50, { message: "Task instructions must be at least 50 characters" }),
  skillTags: z.array(z.string()).min(1, { message: "Select at least one skill" }),
  difficulty: z.string({ required_error: "Please select a difficulty level" }),
  salaryMin: z.number().min(0),
  salaryMax: z.number().min(0),
  cultureTags: z.array(z.string()),
  challengeType: z.enum(["upload", "link"]),
  challengeLink: z.string().url().optional(),
  challengeDeadline: z.string(),
  remoteOption: z.enum(["remote", "hybrid", "onsite"]),
})

const skillOptions = [
  "JavaScript", "React", "Node.js", "TypeScript", "Python", "Java", "C#", "Ruby",
  "PHP", "Go", "Rust", "Swift", "UI/UX Design", "Product Management", "DevOps", "Data Science"
]

const cultureOptions = [
  "Remote-first", "Flexible hours", "Work-life balance", "Continuous learning",
  "Diverse & inclusive", "Startup environment", "Established company", "Fast-paced", "Collaborative"
]

export default function PostChallenge() {
  const [selectedSkills, setSelectedSkills] = useState([])
  const [selectedCulture, setSelectedCulture] = useState([])
  const [salaryRange, setSalaryRange] = useState([50000, 100000])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      roleDescription: "",
      taskInstructions: "",
      skillTags: [],
      difficulty: "",
      salaryMin: salaryRange[0],
      salaryMax: salaryRange[1],
      cultureTags: [],
      challengeType: "upload",
      challengeDeadline: "",
      remoteOption: "remote",
    },
  })

  function handleSubmit(values) {
    console.log(values)
    Toaster({
      title: "Challenge Posted Successfully",
      description: "Your job challenge has been published and is now live.",
    })
  }

  const handleSkillSelect = (skill) => {
    const updated = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill]

    setSelectedSkills(updated)
    form.setValue("skillTags", updated)
  }

  const handleCultureSelect = (culture) => {
    const updated = selectedCulture.includes(culture)
      ? selectedCulture.filter((c) => c !== culture)
      : [...selectedCulture, culture]

    setSelectedCulture(updated)
    form.setValue("cultureTags", updated)
  }

  const handleSalaryChange = (value) => {
    setSalaryRange(value)
    form.setValue("salaryMin", value[0])
    form.setValue("salaryMax", value[1])
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
              <div className="w-[17%]">
                <EmployerSidebar />
              </div>
    <div className="space-y-6 p-10 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Post a Job Challenge</h1>
        <p className="text-muted-foreground">Create a new skill-based challenge for candidates</p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Tip: Focus on real-world tasks</AlertTitle>
        <AlertDescription>
          Candidates perform better on challenges that reflect actual work they would do in the role.
        </AlertDescription>
      </Alert>

      <Form {...form}>
        <form onSubmit={handleSubmit()} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Basic information about the position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Senior Frontend Developer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roleDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the role, responsibilities, and ideal candidate..."
                        className="min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="remoteOption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Location</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select work location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Difficulty Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Entry Level</SelectItem>
                          <SelectItem value="intermediate">Mid-Level</SelectItem>
                          <SelectItem value="advanced">Senior Level</SelectItem>
                          <SelectItem value="expert">Expert/Lead</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormItem>
                <FormLabel>Salary Range</FormLabel>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[salaryRange[0], salaryRange[1]]}
                    max={200000}
                    min={0}
                    step={5000}
                    onValueChange={handleSalaryChange}
                    className="py-4"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">${salaryRange[0].toLocaleString()}</span>
                    <span className="text-sm font-medium">${salaryRange[1].toLocaleString()}</span>
                  </div>
                </div>
                <FormDescription>Set the minimum and maximum salary range for this position</FormDescription>
              </FormItem>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Required Skills</CardTitle>
              <CardDescription>Select the skills required for this position</CardDescription>
            </CardHeader>
            <CardContent>
              <FormItem>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleSkillSelect(skill)}
                    >
                      {skill}
                      {selectedSkills.includes(skill) && <X className="ml-1 h-3 w-3" />}
                    </Badge>
                  ))}
                </div>
                {form.formState.errors.skillTags && (
                  <p className="mt-2 text-sm font-medium text-destructive">{form.formState.errors.skillTags.message}</p>
                )}
              </FormItem>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Culture</CardTitle>
              <CardDescription>Select tags that represent your company culture</CardDescription>
            </CardHeader>
            <CardContent>
              <FormItem>
                <div className="flex flex-wrap gap-2">
                  {cultureOptions.map((culture) => (
                    <Badge
                      key={culture}
                      variant={selectedCulture.includes(culture) ? "secondary" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleCultureSelect(culture)}
                    >
                      {culture}
                      {selectedCulture.includes(culture) && <X className="ml-1 h-3 w-3" />}
                    </Badge>
                  ))}
                </div>
              </FormItem>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
              <CardDescription>Define the task candidates will complete</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="taskInstructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Instructions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide detailed instructions for the challenge..."
                        className="min-h-40"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Be specific about deliverables, constraints, and evaluation criteria
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="challengeDeadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Submission Deadline</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload Files</TabsTrigger>
                  <TabsTrigger value="link">Challenge Link</TabsTrigger>
                </TabsList>
                <TabsContent value="upload" className="space-y-4">
                  <div className="mt-4 flex justify-center">
                    <div className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="mb-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX, ZIP (MAX. 10MB)</p>
                      </div>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="link">
                  <FormField
                    control={form.control}
                    name="challengeLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Challenge URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/your-org/challenge" {...field} />
                        </FormControl>
                        <FormDescription>Link to a GitHub repository, CodeSandbox, or other platform</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button">
              Save as Draft
            </Button>
            <Button type="submit">Publish Challenge</Button>
          </div>
        </form>
      </Form>
    </div>
    </div>
  )
}
