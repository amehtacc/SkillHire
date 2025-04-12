import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import {SkillBasedChallenges, AiMatchedJobs, ApplyAnonymously, RealFeedback} from '/public/images/images.js'

export default function HowItWorks() {
  return (
    <div className="container py-10 px-20">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">How SkillHire Works</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A simple four-step process to get hired based on your actual skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
          <img
            src={SkillBasedChallenges}
            alt="Take skill-based challenges"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h2 className="text-2xl font-bold">Take Skill-Based Challenges</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Instead of submitting a resume, you'll complete real-world coding challenges that showcase your abilities.
            These challenges are designed to reflect actual work you'd do on the job, not abstract puzzles.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Choose challenges that match your skills and interests</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Complete them at your own pace, with clear time expectations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Get immediate feedback on your performance</span>
            </li>
          </ul>
          <Button asChild>
            <Link to="/challenges" className="text-white">Browse Challenges</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col justify-center md:order-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h2 className="text-2xl font-bold">Get AI-Matched to Jobs</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Our AI analyzes your challenge results to identify your strengths and match you with jobs where you'll truly
            excel. This creates more accurate matches than keyword-based resume screening.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>AI evaluates your code quality, problem-solving approach, and technical skills</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Receive personalized job recommendations based on your performance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>See your match percentage for each job opportunity</span>
            </li>
          </ul>
          <Button asChild>
            <Link href="/signup" className="text-white">View Your Matches</Link>
          </Button>
        </div>
        <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden md:order-2">
          <img src={AiMatchedJobs} alt="AI job matching" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
          <img src={ApplyAnonymously} alt="Apply anonymously" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h2 className="text-2xl font-bold">Apply Anonymously</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Your identity is hidden during the initial evaluation process. Employers see your skills and challenge
            results first, not your name, photo, background, or education. This reduces bias and ensures you're
            evaluated on merit alone.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Apply to jobs with your completed challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Your personal information is revealed only after initial selection</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Ensures fair evaluation based on skills, not background</span>
            </li>
          </ul>
          <Button asChild>
            <Link href="/signup" className="text-white">Explore Jobs</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col justify-center md:order-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">4</span>
            </div>
            <h2 className="text-2xl font-bold">Receive Real Feedback</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Whether you're selected for an interview or not, you'll receive constructive feedback on your challenge
            submissions. This helps you improve your skills and understand what employers are looking for.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Get detailed feedback on your challenge performance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Understand your strengths and areas for improvement</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span>Track your progress over time as you complete more challenges</span>
            </li>
          </ul>
          <Button asChild>
            <Link href="/signup" className="text-white">Get Started</Link>
          </Button>
        </div>
        <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden md:order-2">
          <img src={RealFeedback} alt="Receive feedback" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">Common questions about the SkillHire process</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How long do challenges typically take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Challenges range from 1-5 hours, with most taking 2-3 hours to complete. Each challenge clearly states
                the estimated time commitment before you begin, and you can save your progress and return later.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What if I don't have a traditional background?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                That's exactly why SkillHire exists! We focus on your skills, not your background. Self-taught
                developers, bootcamp graduates, and career-switchers all have equal opportunities to showcase their
                abilities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How do employers see my application?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Employers first see your challenge results, code quality, and skill assessments. Your personal
                information (name, photo, background) is only revealed after they've expressed interest based on your
                skills.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Is SkillHire free for job seekers?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes! SkillHire is completely free for candidates. You can take challenges, apply to jobs, and receive
                feedback at no cost. Employers pay to post jobs and access our talent pool.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What types of jobs are available?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We focus primarily on tech roles including software development, data science, design, and product
                management. We're expanding into other skill-based fields regularly.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How do I prepare for challenges?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The best preparation is practicing your actual skills. Challenges are designed to reflect real work, not
                trick questions. We provide resources and practice challenges to help you get comfortable with the
                format.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to get started?</h2>
            <p className="text-primary-foreground/80 md:text-lg">Skip the resume. Prove your skills and get hired.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/challenges">Take a Challenge</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-light/20 text-light hover:bg-light/40"
              asChild
            >
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
