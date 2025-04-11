import React from "react";
import { Zap, Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container flex flex-col gap-6 py-12 px-20">
        <div className="grid gap-12 grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-4 pr-36">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SkillHire</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Reimagining hiring to focus on skills, not resumes. Find your next
              opportunity based on what you can do.
            </p>
            <div className="flex gap-4">
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">For Candidates</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/challenges" className="text-sm text-muted-foreground hover:text-primary">
                  Take a Challenge
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-sm text-muted-foreground hover:text-primary">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="text-sm text-muted-foreground hover:text-primary">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/create-challenge" className="text-sm text-muted-foreground hover:text-primary">
                  Create a Challenge
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/employer-dashboard" className="text-sm text-muted-foreground hover:text-primary">
                  Employer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex justify-between items-center gap-4 text-sm">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} SkillHire, Inc. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Made with skill, not resumes.</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
