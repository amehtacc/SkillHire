import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Github, Globe, Linkedin, Mail, MapPin, X } from "lucide-react";
import CandidateSidebar from "./CandidateSidebar.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ForCompanies } from "/public/images/images.js";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const defaultProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  category: "Frontend Developer",
  bio: "Frontend developer with 4+ years of experience building responsive, user-friendly web applications. Passionate about creating clean, efficient code and delivering exceptional user experiences. Skilled in React, TypeScript, and modern frontend frameworks.",
  address: "San Francisco, CA (Remote)",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  website: "https://example.com",
};

export default function CandidateProfile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsEditing(false);
  };
  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="w-[17%]">
        <CandidateSidebar />
      </div>

      <div className="flex-1 p-6 lg:p-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
              <p className="text-muted-foreground">
                Manage your profile and showcase your skills
              </p>
            </div>
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 flex justify-center">
                    <img
                      src={ForCompanies}
                      alt="Profile"
                      className="rounded-full object-cover border-4 border-background"
                    />
                  </div>
                </div>
                <CardTitle>{profile.name}</CardTitle>
                <CardDescription>{profile.category}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex justify-center gap-3 pt-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link to={profile.github} target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link to={profile.linkedin} target="_blank">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link to={profile.website} target="_blank">
                      <Globe className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/profile/preview">View Public Profile</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Bio Section */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{profile.bio}</p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Verified Skill Badges</CardTitle>
                <CardDescription>
                  Skills verified through completed challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center p-0">
                        92%
                      </Badge>
                    </div>
                    <h3 className="font-medium">React</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Advanced
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center p-0">
                        88%
                      </Badge>
                    </div>
                    <h3 className="font-medium">TypeScript</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Advanced
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center p-0">
                        85%
                      </Badge>
                    </div>
                    <h3 className="font-medium">Tailwind CSS</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Advanced
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center p-0">
                        78%
                      </Badge>
                    </div>
                    <h3 className="font-medium">Node.js</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Intermediate
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center p-0">
                        75%
                      </Badge>
                    </div>
                    <h3 className="font-medium">Next.js</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Intermediate
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center p-0">
                        72%
                      </Badge>
                    </div>
                    <h3 className="font-medium">GraphQL</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Intermediate
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center p-0">
                        65%
                      </Badge>
                    </div>
                    <h3 className="font-medium">React Native</h3>
                    <p className="text-xs text-muted-foreground mt-1">Basic</p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Badge className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center p-0">
                        60%
                      </Badge>
                    </div>
                    <h3 className="font-medium">AWS</h3>
                    <p className="text-xs text-muted-foreground mt-1">Basic</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/challenges">Take More Skill Challenges</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Completed Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Portfolio Website</CardTitle>
                          <CardDescription>Frontend Challenge</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Built a responsive personal portfolio using React
                            and Tailwind CSS.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild>
                            <Link href="/challenges/portfolio">View</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Auth API</CardTitle>
                          <CardDescription>Backend Challenge</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Developed a secure authentication API with JWT and
                            role-based access.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild>
                            <Link href="/challenges/auth-api">View</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Blog App</CardTitle>
                          <CardDescription>
                            Full Stack Challenge
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Created a full-stack blog with CRUD features using
                            Next.js and MongoDB.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild>
                            <Link href="/challenges/blog-app">View</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="frontend">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Landing Page</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Built a modern landing page with Tailwind and
                            animations.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild>
                            <Link href="/challenges/landing-page">View</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="backend">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>RESTful API</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Built a REST API using Express and MongoDB with
                            complete documentation.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild>
                            <Link href="/challenges/rest-api">View</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="fullstack">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Task Manager</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            A full-stack task manager with login, task CRUD, and
                            dashboard view.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild>
                            <Link href="/challenges/task-manager">View</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <Input
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <Input
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <Input
                name="category"
                value={profile.category}
                onChange={handleChange}
                placeholder="Category"
              />
              <Textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
              <Input
                name="address"
                value={profile.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <Input
                name="github"
                value={profile.github}
                onChange={handleChange}
                placeholder="GitHub Link"
              />
              <Input
                name="linkedin"
                value={profile.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Link"
              />
              <Input
                name="website"
                value={profile.website}
                onChange={handleChange}
                placeholder="Website Link"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
