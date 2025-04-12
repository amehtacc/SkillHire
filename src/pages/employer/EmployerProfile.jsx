import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Camera, Check, Globe, MapPin, Pencil, Plus, Save, Upload, Users, X } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/toaster"
import EmployerSidebar from './EmployerSidebar.jsx'
import { SkillBasedChallenges, AiMatchedJobs, ApplyAnonymously, RealFeedback, ForCompanies } from "/public/images/images.js";

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  tagline: z.string().min(5, { message: "Tagline must be at least 5 characters" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  website: z.string().url({ message: "Please enter a valid URL" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  teamSize: z.number().min(1, { message: "Team size must be at least 1" }),
  remotePolicy: z.string(),
  diversityScore: z.number().min(0).max(100),
})

const cultureOptions = [
  "Remote-first",
  "Flexible hours",
  "Work-life balance",
  "Continuous learning",
  "Diverse & inclusive",
  "Startup environment",
  "Established company",
  "Fast-paced",
  "Collaborative",
]

const benefitsOptions = [
  "Health insurance",
  "Dental & vision",
  "401(k) matching",
  "Unlimited PTO",
  "Paid parental leave",
  "Professional development",
  "Home office stipend",
  "Wellness program",
  "Stock options",
]

export default function CompanyProfile() {
  const [selectedCulture, setSelectedCulture] = useState([
    "Remote-first",
    "Flexible hours",
    "Continuous learning",
    "Diverse & inclusive",
  ])
  const [selectedBenefits, setSelectedBenefits] = useState([
    "Health insurance",
    "Unlimited PTO",
    "Professional development",
    "Home office stipend",
  ])
  const [teamSize, setTeamSize] = useState(45)
  const [diversityScore, setDiversityScore] = useState(78)
  const [editing, setEditing] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "Acme Inc.",
      tagline: "Building the future of work",
      description:
        "Acme Inc. is a technology company focused on creating innovative solutions for the modern workplace. We believe in empowering teams through technology and creating products that make work more efficient and enjoyable.",
      website: "https://acme-inc.com",
      location: "San Francisco, CA",
      teamSize: teamSize,
      remotePolicy: "hybrid",
      diversityScore: diversityScore,
    },
  })

  function onSubmit(values) {
    console.log(values)
    Toaster({
      title: "Profile Updated",
      description: "Your company profile has been updated successfully.",
    })
    setEditing(false)
  }

  const handleCultureSelect = (culture) => {
    if (selectedCulture.includes(culture)) {
      setSelectedCulture(selectedCulture.filter((c) => c !== culture))
    } else {
      setSelectedCulture([...selectedCulture, culture])
    }
  }

  const handleBenefitsSelect = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter((b) => b !== benefit))
    } else {
      setSelectedBenefits([...selectedBenefits, benefit])
    }
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
                  <div className="w-[17%]">
                    <EmployerSidebar />
                  </div>
    <div className="space-y-6 p-10 w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Company Profile</h1>
        <div className="flex items-center gap-2">
          {editing ? (
            <Button variant="outline" size="sm" onClick={() => setEditing(false)}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          ) : (
            <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="culture">Culture & Benefits</TabsTrigger>
          <TabsTrigger value="gallery">Team Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {editing ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Information</CardTitle>
                    <CardDescription>Update your company's basic information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="relative h-24 w-24 overflow-hidden rounded-lg border">
                        <img
                          src={''}
                          alt="Company logo"
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary text-primary-foreground"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Logo
                      </Button>
                    </div>

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tagline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tagline</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>A short phrase that describes your company's mission</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Description</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormItem>
                        <FormLabel>Team Size: {teamSize}</FormLabel>
                        <Slider
                          defaultValue={[teamSize]}
                          max={1000}
                          min={1}
                          step={1}
                          onValueChange={(value) => {
                            setTeamSize(value[0])
                            form.setValue("teamSize", value[0])
                          }}
                          className="py-4"
                        />
                      </FormItem>

                      <FormField
                        control={form.control}
                        name="remotePolicy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Remote Policy</FormLabel>
                            <div className="flex gap-4">
                              <div
                                className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 ${
                                  field.value === "remote" ? "border-primary bg-primary/5" : ""
                                }`}
                                onClick={() => form.setValue("remotePolicy", "remote")}
                              >
                                <Globe className="mb-1 h-5 w-5" />
                                <span className="text-sm font-medium">Remote</span>
                              </div>
                              <div
                                className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 ${
                                  field.value === "hybrid" ? "border-primary bg-primary/5" : ""
                                }`}
                                onClick={() => form.setValue("remotePolicy", "hybrid")}
                              >
                                <Building className="mb-1 h-5 w-5" />
                                <span className="text-sm font-medium">Hybrid</span>
                              </div>
                              <div
                                className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 ${
                                  field.value === "onsite" ? "border-primary bg-primary/5" : ""
                                }`}
                                onClick={() => form.setValue("remotePolicy", "onsite")}
                              >
                                <MapPin className="mb-1 h-5 w-5" />
                                <span className="text-sm font-medium">On-site</span>
                              </div>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormItem>
                      <FormLabel>Diversity Score: {diversityScore}%</FormLabel>
                      <Slider
                        defaultValue={[diversityScore]}
                        max={100}
                        min={0}
                        step={1}
                        onValueChange={(value) => {
                          setDiversityScore(value[0])
                          form.setValue("diversityScore", value[0])
                        }}
                        className="py-4"
                      />
                      <FormDescription>
                        This score represents your company's commitment to diversity and inclusion
                      </FormDescription>
                    </FormItem>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" type="button" onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div className="h-24 w-24 overflow-hidden rounded-lg border">
                      <img
                        src={ForCompanies}
                        alt="Company logo"
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-bold">Acme Inc.</h2>
                      <p className="text-muted-foreground">Building the future of work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Team Size
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{teamSize}</div>
                    <p className="text-sm text-muted-foreground">Employees worldwide</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Remote Policy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Hybrid</Badge>
                      <span className="text-sm text-muted-foreground">3 days in office / 2 days remote</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Diversity Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold">{diversityScore}%</span>
                        <Badge variant="outline" className="bg-primary/10">
                          Above Average
                        </Badge>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${diversityScore}%` }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>About Acme Inc.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Acme Inc. is a technology company focused on creating innovative solutions for the modern workplace.
                    We believe in empowering teams through technology and creating products that make work more
                    efficient and enjoyable.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      <a href="https://acme-inc.com" target="_blank" rel="noopener noreferrer">
                        acme-inc.com
                      </a>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      San Francisco, CA
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Salary Ranges</CardTitle>
                  <CardDescription>Transparent salary information for our open positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Frontend Developer</h3>
                      <div className="mt-2 text-2xl font-bold">$90k - $120k</div>
                      <p className="text-sm text-muted-foreground">Based on experience level</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Backend Engineer</h3>
                      <div className="mt-2 text-2xl font-bold">$100k - $140k</div>
                      <p className="text-sm text-muted-foreground">Based on experience level</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">UI/UX Designer</h3>
                      <div className="mt-2 text-2xl font-bold">$85k - $115k</div>
                      <p className="text-sm text-muted-foreground">Based on experience level</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="culture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Culture</CardTitle>
              <CardDescription>What makes your company unique</CardDescription>
            </CardHeader>
            <CardContent>
              {editing ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {cultureOptions.map((culture) => (
                      <Badge
                        key={culture}
                        variant={selectedCulture.includes(culture) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => handleCultureSelect(culture)}
                      >
                        {culture}
                        {selectedCulture.includes(culture) && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Custom Tag
                  </Button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedCulture.map((culture) => (
                    <Badge key={culture} variant="default">
                      {culture}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benefits & Perks</CardTitle>
              <CardDescription>What you offer to your employees</CardDescription>
            </CardHeader>
            <CardContent>
              {editing ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {benefitsOptions.map((benefit) => (
                      <Badge
                        key={benefit}
                        variant={selectedBenefits.includes(benefit) ? "secondary" : "outline"}
                        className="cursor-pointer"
                        onClick={() => handleBenefitsSelect(benefit)}
                      >
                        {benefit}
                        {selectedBenefits.includes(benefit) && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Custom Benefit
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {selectedBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            {editing && (
              <CardFooter className="flex justify-end">
                <Button onClick={() => setEditing(false)}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
              <CardDescription>The principles that guide your company</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-medium">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We embrace new ideas and technologies to solve complex problems.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-medium">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">We believe great things happen when we work together.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-medium">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    We're committed to doing what's right, even when it's difficult.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Team Gallery</CardTitle>
                  <CardDescription>Showcase your team and workplace</CardDescription>
                </div>
                {editing && (
                  <Button size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photos
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={SkillBasedChallenges}
                    alt="Team photo"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={AiMatchedJobs}
                    alt="Office space"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={ApplyAnonymously}
                    alt="Team event"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={RealFeedback}
                    alt="Company culture"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                {editing && (
                  <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed">
                    <Button variant="ghost" className="h-full w-full">
                      <div className="flex flex-col items-center gap-2">
                        <Plus className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Add Photo</span>
                      </div>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
            {editing && (
              <CardFooter className="flex justify-end">
                <Button onClick={() => setEditing(false)}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Tour</CardTitle>
              <CardDescription>Virtual tour of your workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      {editing ? "Upload a video tour of your office" : "No video tour available"}
                    </p>
                    {editing && (
                      <Button variant="outline" size="sm" className="mt-4">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Video
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}
