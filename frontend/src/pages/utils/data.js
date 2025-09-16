import {
    Search,
    Users, 
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus
} from "lucide-react";

export const jobSeakerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        desctiption: "AI-powered algorithm matches you with relevant opportunities based on your skill and preference"
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with our intuitive builder and templates designed by experts"
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Connect directly with hiring managers and recruiters through our secure messaging platform."
    },
    {
        icon: Award, 
        title: "Skill Assessment",
        description: "Showcase your abilities with verified skill test and earn badges that employers trust."
    }
]

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access our vast database of pre-screened candidate and find the perfect fit for your team."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your hiring performance with detailed analytics and insights on candidate enguagement."
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "All Candidates undergo background verification to ensure you're hiring trustworthy professionals."
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools."
    }
];

//Navigation items configuration
export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-jobs", name: "Post Job", icon: Plus},
    { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
    { id: "company-profile, "}
]