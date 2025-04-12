import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  BarChart,
  Code,
  FileCheck,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Zap } from "lucide-react";

export default function DashboardSidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b p-5">
          <div className="flex justify-center items-center gap-2 px-2">
            <Zap className="h-8 w-8 text-primary " />
            <span className="text-2xl font-bold">SkillHire</span>
            {/* <SidebarTrigger /> */}
          </div>
        </SidebarHeader>
        <SidebarContent className="px-5 py-5">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "auth/candidate/dashboard"}
              >
                <Link to="/auth/candidate/dashboard">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "auth/candidate/profile"}
              >
                <Link to="/auth/candidate/profile">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t p-5">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
