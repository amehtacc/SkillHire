import { Link } from "react-router-dom";
// import Image from "next/image"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  BrainCircuit,
  ShieldCheck,
  MessageSquare,
  Layers,
  UserCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { ForCompanies } from "/public/images/images.js";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center gap-5">
            <div className="space-y-2 flex flex-col gap-5">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Prove Skills, <span className="text-primary">Not Resumes</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Skip resumes. Get matched based on real skills.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="text-light" asChild>
                <Link to="/challenges">Take Your First Challenge</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/jobs">Explore Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30 px-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
              A simple four-step process to get hired based on your actual
              skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Take Skill-Based Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete real-world coding challenges that showcase your
                  abilities, not your background.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Get AI-Matched to Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI analyzes your skills and matches you with jobs where
                  you'll truly excel.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Apply Anonymously</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your identity is hidden until later stages, ensuring bias-free
                  evaluation of your skills.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Receive Real Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get constructive feedback on your submissions, helping you
                  improve with each challenge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why SkillHire Section */}
      <section id="why-skillhire" className="py-16 px-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why SkillHire
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
              A better way to find your next role
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" />
                  <CardTitle>No Resume Needed</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your skills speak louder than a document. Show what you can
                  do, not just what you've done.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                  <CardTitle>Bias-Free Matching</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get evaluated on your abilities alone, not your background,
                  education, or demographics.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <CardTitle>Real Challenges, Not Keywords</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solve actual problems similar to what you'd face on the job,
                  not abstract puzzles or keyword matching.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <CardTitle>Transparent Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See salary ranges and company culture details upfront before
                  investing your time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Work. Real Talent Section */}
      <section className="py-16 bg-muted/30 px-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Real Work. Real Talent.
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
              Jobs based on actual tasks, not vague descriptions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 */}
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-bold">AC</span>
                  </div>
                  <Badge variant="outline">$120-150K</Badge>
                </div>
                <CardTitle className="mt-4">
                  Build a Responsive Dashboard
                </CardTitle>
                <CardDescription>Acme Corp • Remote</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green text-light">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-green text-light">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-green text-light">
                    Tailwind
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a responsive admin dashboard with data visualization
                  components and user management features.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Culture:
                    </span>
                    <Badge variant="outline" className="text-xs">
                      Flexible
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Innovative
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Card 2 */}
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-bold">TC</span>
                  </div>
                  <Badge variant="outline">$90-110K</Badge>
                </div>
                <CardTitle className="mt-4">Optimize API Performance</CardTitle>
                <CardDescription>TechCo • Hybrid</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green text-light">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-green text-light">
                    Express
                  </Badge>
                  <Badge variant="secondary" className="bg-green text-light">
                    MongoDB
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Improve the performance of our REST API by implementing
                  caching, optimizing queries, and reducing response times.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Culture:
                    </span>
                    <Badge variant="outline" className="text-xs">
                      Collaborative
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Fast-paced
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Card 3 */}
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-bold">IS</span>
                  </div>
                  <Badge variant="outline">$130-160K</Badge>
                </div>
                <CardTitle className="mt-4">
                  Implement Authentication System
                </CardTitle>
                <CardDescription>InnoSoft • On-site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green text-light">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-green text-light">
                    Auth.js
                  </Badge>
                  <Badge variant="secondary" className="bg-green text-light">
                    PostgreSQL
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Design and implement a secure authentication system with
                  social login, MFA, and role-based access control.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Culture:
                    </span>
                    <Badge variant="outline" className="text-xs">
                      Structured
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Mentorship
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-10">
            <Button className="text-light" asChild>
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="for-companies" className="py-16 px-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                For Companies
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Skill-based hiring improves retention and reduces bias. Find
                candidates who can actually do the job, not just talk about it.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Reduce Hiring Mistakes</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluate candidates based on their ability to perform real
                      tasks, not just interview skills.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Increase Diversity</h3>
                    <p className="text-sm text-muted-foreground">
                      Remove unconscious bias by focusing on skills first,
                      background second.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Save Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Only interview candidates who have already proven they
                      have the skills you need.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Improve Retention</h3>
                    <p className="text-sm text-muted-foreground">
                      Hire people who are genuinely capable and interested in
                      the work, leading to higher job satisfaction.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="mt-8 text-light" asChild>
                <Link href="/for-employers">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={ForCompanies}
                alt="Companies using SkillHire"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonials
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
              Hear from people who have found success with SkillHire
            </p>
          </div>
          <Tabs defaultValue="candidates" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="employers">Employers</TabsTrigger>
            </TabsList>
            <TabsContent value="candidates" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <p className="italic mb-4">
                        "I was struggling to get interviews despite having the
                        skills. SkillHire let me prove what I could do, and I
                        got hired within two weeks at a salary 30% higher than
                        my previous job."
                      </p>
                      <div>
                        <h4 className="font-medium">Sarah J.</h4>
                        <p className="text-sm text-muted-foreground">
                          Frontend Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <p className="italic mb-4">
                        "As a self-taught developer without a CS degree,
                        traditional hiring processes were a barrier. SkillHire's
                        challenges let me demonstrate my abilities, and I landed
                        a role at a company that values what I can do, not my
                        background."
                      </p>
                      <div>
                        <h4 className="font-medium">Michael T.</h4>
                        <p className="text-sm text-muted-foreground">
                          Backend Engineer
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="employers" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <p className="italic mb-4">
                        "We've reduced our time-to-hire by 40% and improved our
                        retention rate significantly. The candidates we get
                        through SkillHire are pre-vetted for the exact skills we
                        need."
                      </p>
                      <div>
                        <h4 className="font-medium">Jennifer R.</h4>
                        <p className="text-sm text-muted-foreground">
                          CTO, TechSolutions Inc.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <p className="italic mb-4">
                        "Our engineering team is now more diverse and higher
                        performing since we switched to skill-based hiring with
                        SkillHire. We're finding talented people we would have
                        missed with traditional resume screening."
                      </p>
                      <div>
                        <h4 className="font-medium">David L.</h4>
                        <p className="text-sm text-muted-foreground">
                          VP of Engineering, GrowthCo
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-secondary ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skip the resume. Prove your skills.
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Join thousands of candidates who found their dream job based on
              what they can do, not just what they've done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                variant="secondary"
                className="text-dark"
                asChild
              >
                <Link href="/challenges">Start a Challenge</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-light/20 text-light hover:bg-light/40"
                asChild
              >
                <Link href="/post-job">Post a Real Job</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
