"use client";

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "react-toastify";

export default function AuthPage() {
  const [userType, setUserType] = useState("candidate");
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState(() => searchParams.get("tab") || "login");

  useEffect(() => {
    setTab(searchParams.get("tab") || "login");
  }, [searchParams]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      toast.error("User already exists!");
      return;
    }
    if (!form.email || !form.name) {
      toast.error("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      userType,
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    toast.success("Signup successful!");
    navigate(
      userType === "employer" ? "employer/dashboard" : "candidate/dashboard"
    );
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password &&
        u.userType === userType
    );
    if (!user) {
      toast.error("Invalid credentials or wrong user type selected");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    toast.success("Login successful!");
    navigate(
      userType === "employer" ? "employer/dashboard" : "candidate/dashboard"
    );
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Tabs
              defaultValue={userType}
              className="w-full"
              onValueChange={setUserType}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="candidate">Candidate</TabsTrigger>
                <TabsTrigger value="employer">Employer</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {userType === "candidate" ? "Candidate Login" : "Employer Login"}
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue={tab} className="w-full" onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* LOGIN */}
          <TabsContent value="login">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <Button className="w-full" onClick={handleLogin}>
                Log In
              </Button>
            </CardContent>
          </TabsContent>

          {/* SIGNUP */}
          <TabsContent value="signup">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <Button className="w-full" onClick={handleSignup}>
                Sign Up
              </Button>
            </CardContent>
          </TabsContent>
        </Tabs>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
