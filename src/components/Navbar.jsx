import React from "react";
import { Zap } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[70px] items-center justify-between px-20">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary " />
            <span className="text-2xl font-bold">SkillHire</span>
          </NavLink>
        </div>

        <div>
          <nav className="flex items-center gap-6">
            <NavLink
              to="/challenges"
              className="text-base font-medium hover:text-primary"
            >
              Challenges
            </NavLink>

            <NavLink
              to="/how-it-works"
              className="text-base font-medium hover:text-primary"
            >
              How It Works
            </NavLink>

            <HashLink
              smooth
              to="/#why-skillhire"
              className="text-base font-medium hover:text-primary"
            >
              Why SkillHire
            </HashLink>

            <HashLink
              smooth
              to="/#for-companies"
              className="text-base font-medium hover:text-primary"
            >
              For Companies
            </HashLink>
          </nav>
        </div>
        <div className="flex justify-center items-center gap-5">
          <NavLink
            to="/auth?tab=login"
            className="text-base font-medium hover:text-primary"
          >
            Log In
          </NavLink>

          <Button className="bg-primary text-white text-base hover:bg-primary/90">
            <NavLink to="/auth?tab=signup">Sign Up</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
