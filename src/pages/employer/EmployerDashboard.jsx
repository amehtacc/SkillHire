import {
  BarChart,
  BarChart3,
  Calendar,
  Eye,
  Search,
  Users,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import EmployerSidebar from './EmployerSidebar.jsx'

const jobData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    status: "Active",
    applicants: 24,
    views: 156,
    posted: "2 days ago",
    skillMatch: 85,
  },
  {
    id: 2,
    title: "Backend Engineer (Node.js)",
    status: "Active",
    applicants: 18,
    views: 132,
    posted: "3 days ago",
    skillMatch: 72,
  },
  {
    id: 3,
    title: "Full Stack Developer",
    status: "Closed",
    applicants: 42,
    views: 287,
    posted: "2 weeks ago",
    skillMatch: 90,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    status: "Draft",
    applicants: 0,
    views: 0,
    posted: "-",
    skillMatch: 0,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    status: "Active",
    applicants: 15,
    views: 98,
    posted: "5 days ago",
    skillMatch: 68,
  },
];

const chartData = [
  { name: "Jan", applications: 45 },
  { name: "Feb", applications: 52 },
  { name: "Mar", applications: 49 },
  { name: "Apr", applications: 62 },
  { name: "May", applications: 78 },
  { name: "Jun", applications: 94 },
  { name: "Jul", applications: 82 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="w-[17%]">
        <EmployerSidebar />
      </div>
      <div className="flex flex-col justify-center p-10 space-y-6 w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
            <Button size="sm">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Postings
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Applicants
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">673</div>
              <p className="text-xs text-muted-foreground">
                +32% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Skill Match
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Application Trends</CardTitle>
            <CardDescription>
              Number of applications received over time
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer
              config={{
                applications: {
                  label: "Applications",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="applications"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Job Challenges</CardTitle>
                <CardDescription>
                  Manage your active and past job challenges
                </CardDescription>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search jobs..."
                    className="h-9 w-full sm:w-[200px]"
                  />
                  <Button variant="outline" size="sm" className="h-9 px-3">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="h-9 w-full sm:w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Applicants
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Views</TableHead>
                  <TableHead className="hidden lg:table-cell">Posted</TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Skill Match
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobData.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          job.status === "Active"
                            ? "default"
                            : job.status === "Closed"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {job.applicants}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {job.views}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {job.posted}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {job.skillMatch > 0 ? (
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-full max-w-24 rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${job.skillMatch}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium">
                            {job.skillMatch}%
                          </span>
                        </div>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <span className="sr-only">Open menu</span>
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Challenge</DropdownMenuItem>
                          <DropdownMenuItem>View Applicants</DropdownMenuItem>
                          {job.status === "Active" && (
                            <DropdownMenuItem>Close Challenge</DropdownMenuItem>
                          )}
                          {job.status === "Draft" && (
                            <DropdownMenuItem>Publish</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
