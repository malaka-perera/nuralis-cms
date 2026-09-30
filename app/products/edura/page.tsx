"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  Users,
  Radio,
  FileText,
  CreditCard,
  Layers,
  Sliders,
  History,
  LogOut,
  Plus,
  BookOpen,
  Menu,
  Sparkles,
  Search,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Activity,
  ShieldCheck,
  ShieldAlert,
  GraduationCap,
  KeyRound,
  Eye,
  EyeOff,
  Save,
  Loader2,
  HardDrive,
  Banknote,
  ArrowUpRight,
  PlusCircle,
  Edit2,
  Edit3,
  Trash2,
  Calendar as CalendarIcon,
  Clock,
  Tag,
  X,
  Check,
  Zap,
  Globe,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  Shield,
  Settings,
  Table as TableIcon,
  HelpCircle,
  Code,
  Info,
  ArrowLeft,
  Key,
  Megaphone,
  Send,
  AlertTriangle,
  Bell,
  Video,
  Monitor,
  ClipboardList,
  CalendarClock,
  BarChart2,
  LogIn,
  Check as CheckIcon,
  Star,
  ArrowRight,
} from "lucide-react";

// ================= EXACT DATA MATCHING LMS-SaaS SCREENSHOTS =================

interface TeacherTenant {
  id: string;
  teacherName: string;
  type: "teacher" | "school";
  email: string;
  institution?: string;
  subdomain: string;
  studentsCount: number;
  maxStudentsLimit: number;
  storageUsedGB: number;
  maxStorageLimitGB: number;
  coursesCount: number;
  plan: "Custom" | "Standard" | "Enterprise";
  monthlyFee: number;
  status: "Active" | "Trial" | "Suspended";
  avatar: string;
  joinedDate: string;
  permissionsGranted: number;
  totalPermissions: number;
}

const INITIAL_TENANTS: TeacherTenant[] = [
  {
    id: "1",
    teacherName: "Amila Priyanga",
    type: "teacher",
    email: "amila@wiseray.lk",
    institution: "WiseRay",
    subdomain: "amila",
    studentsCount: 0,
    maxStudentsLimit: 1000,
    storageUsedGB: 0,
    maxStorageLimitGB: 100,
    coursesCount: 12,
    plan: "Custom",
    monthlyFee: 0,
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
    joinedDate: "Jan 14, 2026",
    permissionsGranted: 15,
    totalPermissions: 15,
  },
  {
    id: "2",
    teacherName: "Zaeem Sahrudeen",
    type: "teacher",
    email: "zaeem@edura.lk",
    institution: "Zaeem Institute",
    subdomain: "zaeem",
    studentsCount: 1,
    maxStudentsLimit: 1000,
    storageUsedGB: 0,
    maxStorageLimitGB: 50,
    coursesCount: 8,
    plan: "Custom",
    monthlyFee: 0,
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    joinedDate: "Feb 02, 2026",
    permissionsGranted: 15,
    totalPermissions: 15,
  },
  {
    id: "3",
    teacherName: "Gayan Sampath",
    type: "teacher",
    email: "gayan@edura.lk",
    institution: "Gayan Academy",
    subdomain: "gayan",
    studentsCount: 1,
    maxStudentsLimit: 1000,
    storageUsedGB: 0,
    maxStorageLimitGB: 50,
    coursesCount: 14,
    plan: "Custom",
    monthlyFee: 0,
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    joinedDate: "Mar 10, 2026",
    permissionsGranted: 15,
    totalPermissions: 15,
  },
];

// Exact 9 Platform Features from screenshot
const INITIAL_FEATURES = [
  {
    id: "1",
    key: "video_streaming",
    name: "Video Streaming",
    iconName: "Video",
    icon: Video,
    description: "Stream pre-recorded video lessons to students",
  },
  {
    id: "2",
    key: "screen_record",
    name: "Screen Record / Screenshots",
    iconName: "Monitor",
    icon: Monitor,
    description: "Allow or block screen recording and screenshots",
  },
  {
    id: "3",
    key: "session_notes",
    name: "Session Notes / PDF Distribution",
    iconName: "FileText",
    icon: FileText,
    description: "Share session notes and PDFs with students",
  },
  {
    id: "4",
    key: "mcq_assignment",
    name: "Assign MCQs & Assignments",
    iconName: "ClipboardList",
    icon: ClipboardList,
    description: "Create and assign MCQs and written assignments",
  },
  {
    id: "5",
    key: "scheduled_assignment",
    name: "Scheduling Assignment",
    iconName: "CalendarClock",
    icon: CalendarClock,
    description: "Schedule assignments to be released at a specific time",
  },
  {
    id: "6",
    key: "proctored_mode",
    name: "Proctored Mode",
    iconName: "ShieldCheck",
    icon: ShieldCheck,
    description: "Enable proctored exam sessions for integrity",
  },
  {
    id: "7",
    key: "student_rank",
    name: "Student Rank & Marksheet",
    iconName: "BarChart2",
    icon: BarChart2,
    description: "View student rankings and generate marksheets",
  },
  {
    id: "8",
    key: "custom_login",
    name: "Custom Login",
    iconName: "LogIn",
    icon: LogIn,
    description: "Branded login page for your institution",
  },
  {
    id: "9",
    key: "subdomain",
    name: "Subdomain",
    iconName: "Globe",
    icon: Globe,
    description: "Get a dedicated subdomain for your institute",
  },
];

const PLAN_FEATURES_LIST = [
  "Bank_slip",
  "Subdomain",
  "Payment_sms",
  "Custom_login",
  "Student_rank",
  "Screen_record",
  "Session_notes",
  "Custom_support",
  "Mcq_assignment",
  "Online_gateway",
  "Proctored_mode",
  "Smtp_customized",
  "Video_streaming",
];

const BASIC_PLAN_ALLOWED = [
  "Bank_slip",
  "Subdomain",
  "Screen_record",
  "Session_notes",
  "Custom_support",
  "Mcq_assignment",
  "Proctored_mode",
  "Video_streaming",
];

// ================= LANDING PRICING, COMPARISON & FAQS DATA =================

interface LandingPlan {
  id: string;
  name: string;
  slug: string;
  badge?: string;
  description: string;
  period: string;
  is_popular: boolean;
  is_active: boolean;
  cta_text: string;
  cta_link: string;
  sort_order: number;
}

interface ComparisonCategoryItem {
  id: string;
  name: string;
  values: {
    basic?: boolean | string | null;
    standard?: boolean | string | null;
    enterprise?: boolean | string | null;
    custom?: boolean | string | null;
    [key: string]: boolean | string | null | undefined;
  };
  sort_order: number;
}

interface ComparisonCategory {
  id: string;
  name: string;
  sort_order: number;
  items: ComparisonCategoryItem[];
}

interface LandingFAQ {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
  is_active: boolean;
}

const INITIAL_LANDING_PLANS: LandingPlan[] = [
  {
    id: "1",
    name: "Basic",
    slug: "basic",
    badge: "",
    description: "Perfect for small institutes getting started.",
    period: "/Month",
    is_popular: false,
    is_active: true,
    cta_text: "Get Started",
    cta_link: "/login",
    sort_order: 1,
  },
  {
    id: "2",
    name: "Standard",
    slug: "standard",
    badge: "MOST POPULAR",
    description: "For growing institutes that need more power.",
    period: "/Month",
    is_popular: true,
    is_active: true,
    cta_text: "Get Started",
    cta_link: "/login",
    sort_order: 2,
  },
  {
    id: "3",
    name: "Enterprise",
    slug: "enterprise",
    badge: "",
    description: "Full-featured solution for large institutions.",
    period: "One Time",
    is_popular: false,
    is_active: true,
    cta_text: "Get Started",
    cta_link: "/login",
    sort_order: 3,
  },
  {
    id: "4",
    name: "Custom",
    slug: "custom",
    badge: "",
    description: "Fully tailored custom solution with dedicated support & custom requirements.",
    period: "Tailored",
    is_popular: false,
    is_active: true,
    cta_text: "Contact Us",
    cta_link: "/contact",
    sort_order: 4,
  },
];

const INITIAL_COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    id: "1",
    name: "Video & Content",
    sort_order: 1,
    items: [
      {
        id: "101",
        name: "Video Streaming",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 1,
      },
      {
        id: "102",
        name: "Screen Record / Screenshots",
        values: { basic: "Allow", standard: "Blocked", enterprise: "Blocked", custom: null },
        sort_order: 2,
      },
      {
        id: "103",
        name: "Session Notes / PDF Distribution",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 3,
      },
      {
        id: "104",
        name: "Storage",
        values: { basic: "25 GB", standard: "100 GB", enterprise: "250 GB", custom: null },
        sort_order: 4,
      },
    ],
  },
  {
    id: "2",
    name: "Student & Staff Management",
    sort_order: 2,
    items: [
      {
        id: "201",
        name: "Students",
        values: { basic: "250", standard: "1,000", enterprise: "Unlimited", custom: null },
        sort_order: 1,
      },
      {
        id: "202",
        name: "Staff",
        values: { basic: "1", standard: "5", enterprise: "Unlimited", custom: null },
        sort_order: 2,
      },
      {
        id: "203",
        name: "Student Rank & Marksheet",
        values: { basic: false, standard: true, enterprise: true, custom: null },
        sort_order: 3,
      },
      {
        id: "204",
        name: "Custom Login",
        values: { basic: false, standard: false, enterprise: true, custom: null },
        sort_order: 4,
      },
      {
        id: "205",
        name: "Subdomain",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 5,
      },
    ],
  },
  {
    id: "3",
    name: "Exams & Assignments",
    sort_order: 3,
    items: [
      {
        id: "301",
        name: "Assign MCQs & Assignments",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 1,
      },
      {
        id: "302",
        name: "Scheduling Assignment",
        values: { basic: false, standard: true, enterprise: true, custom: null },
        sort_order: 2,
      },
      {
        id: "303",
        name: "Proctored Mode",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 3,
      },
    ],
  },
  {
    id: "4",
    name: "Payments",
    sort_order: 4,
    items: [
      {
        id: "401",
        name: "Upload Bank Slips & Verification",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 1,
      },
      {
        id: "402",
        name: "Online Debit/Credit Gateway",
        values: { basic: false, standard: true, enterprise: true, custom: null },
        sort_order: 2,
      },
      {
        id: "403",
        name: "Payment Receipt via SMS",
        values: { basic: false, standard: false, enterprise: true, custom: null },
        sort_order: 3,
      },
      {
        id: "404",
        name: "Email Announcements",
        values: { basic: true, standard: true, enterprise: true, custom: null },
        sort_order: 4,
      },
    ],
  },
  {
    id: "5",
    name: "Customisation & Support",
    sort_order: 5,
    items: [
      {
        id: "501",
        name: "SMTP Customized",
        values: { basic: false, standard: true, enterprise: true, custom: null },
        sort_order: 1,
      },
      {
        id: "502",
        name: "Custom Support",
        values: { basic: "Standard", standard: "Priority WhatsApp", enterprise: "24×7", custom: null },
        sort_order: 2,
      },
    ],
  },
];

const INITIAL_FAQS: LandingFAQ[] = [
  {
    id: "1",
    sort_order: 1,
    question: "How does the copy-protected video player prevent piracy?",
    answer: "Our video player uses multi-layered protection including hardware-accelerated screen recording blocking, dynamic user-specific watermarking (rendering the student's phone number and ID across the video), and encrypted HLS chunk streaming to make direct downloading impossible.",
    is_active: true,
  },
  {
    id: "2",
    sort_order: 2,
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can upgrade, downgrade, or customize your plan at any point. Upgrades take effect immediately with prorated billing.",
    is_active: true,
  },
  {
    id: "3",
    sort_order: 3,
    question: "What payment options are available for students in Sri Lanka?",
    answer: "Students can pay via local credit/debit cards (Visa, MasterCard, LankaPay) with instant automated enrollment, or upload bank transfer deposit slips for quick 1-click verification.",
    is_active: true,
  },
  {
    id: "4",
    sort_order: 4,
    question: "How quickly can my academy be launched?",
    answer: "Most academies are live within 6 hours. Our onboarding team helps you configure your classes, upload initial lessons, and import existing student directories.",
    is_active: true,
  },
  {
    id: "5",
    sort_order: 5,
    question: "Is there any contract or cancellation fee?",
    answer: "No long-term commitments required for monthly plans. You can cancel your subscription at any time without penalty.",
    is_active: true,
  },
];

export default function EduraExactSuperAdmin() {
  // Navigation State
  const [activeRoute, setActiveRoute] = useState<string>("/admin/teachers");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Real-time Clock
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close profile dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Data States
  const [tenants, setTenants] = useState<TeacherTenant[]>(INITIAL_TENANTS);
  const [features, setFeatures] = useState(INITIAL_FEATURES);

  // Landing Pricing & FAQs Tab States (Matching exact 3 subtabs)
  const [pricingSubTab, setPricingSubTab] = useState<"plans" | "comparison" | "faqs">("plans");
  const [landingPlans, setLandingPlans] = useState<LandingPlan[]>(INITIAL_LANDING_PLANS);
  const [comparisonCategories, setComparisonCategories] = useState<ComparisonCategory[]>(INITIAL_COMPARISON_CATEGORIES);
  const [landingFaqs, setLandingFaqs] = useState<LandingFAQ[]>(INITIAL_FAQS);

  // Modals for Landing Pricing
  const [planModal, setPlanModal] = useState<{ isOpen: boolean; plan: LandingPlan | null }>({
    isOpen: false,
    plan: null,
  });
  const [planForm, setPlanForm] = useState({
    name: "",
    slug: "",
    badge: "",
    description: "",
    period: "/Month",
    is_popular: false,
    is_active: true,
    cta_text: "Get Started",
    cta_link: "/login",
    sort_order: 1,
  });

  const [categoryModal, setCategoryModal] = useState<{ isOpen: boolean; category: ComparisonCategory | null }>({
    isOpen: false,
    category: null,
  });
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    sort_order: 1,
  });

  const [itemModal, setItemModal] = useState<{
    isOpen: boolean;
    item: ComparisonCategoryItem | null;
    categoryId: string | null;
  }>({
    isOpen: false,
    item: null,
    categoryId: null,
  });
  const [itemForm, setItemForm] = useState({
    name: "",
    values: {
      basic: "true",
      standard: "true",
      enterprise: "true",
      custom: "",
    },
    sort_order: 1,
  });

  const [faqModal, setFaqModal] = useState<{ isOpen: boolean; faq: LandingFAQ | null }>({
    isOpen: false,
    faq: null,
  });
  const [faqForm, setFaqForm] = useState({
    question: "",
    answer: "",
    sort_order: 1,
    is_active: true,
  });

  // Portal Dev Mode State
  const [portalSettings, setPortalSettings] = useState({
    student_portal_dev_mode: false,
    student_portal_dev_password: "dev@edura2026",
    teacher_portal_dev_mode: false,
    teacher_portal_dev_password: "teach@edura2026",
  });
  const [showStudentPassword, setShowStudentPassword] = useState(false);
  const [showTeacherPassword, setShowTeacherPassword] = useState(false);
  const [savedSettingsSuccess, setSavedSettingsSuccess] = useState(false);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  // Teachers View Filters
  const [teacherSearch, setTeacherSearch] = useState("");
  const [selectedPlanFilter, setSelectedPlanFilter] = useState("All");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("All");
  const [teacherViewMode, setTeacherViewMode] = useState<"table" | "cards">("table");

  // Broadcast & Pop-up States (Exact from screenshot 1)
  const [broadcastSubTab, setBroadcastSubTab] = useState<"popups" | "notifications">("popups");
  const [popupTargetAudience, setPopupTargetAudience] = useState("Teachers (Customers) Only");
  const [popupThemeStyle, setPopupThemeStyle] = useState("Maintenance Notice (Amber Warning)");
  const [popupHeadline, setPopupHeadline] = useState("");
  const [popupBody, setPopupBody] = useState("");
  const [popupDismissText, setPopupDismissText] = useState("I Understand");

  // Invoices & Billing States (Exact from screenshot 2)
  const [billingCalendarMonth, setBillingCalendarMonth] = useState(new Date(2026, 6, 1)); // July 2026
  const [selectedBillingDate, setSelectedBillingDate] = useState("");
  const [billingSearch, setBillingSearch] = useState("");
  const [billingStatusFilter, setBillingStatusFilter] = useState("All");

  // Feature Search State (Exact from screenshot 4)
  const [featureSearch, setFeatureSearch] = useState("");

  // Modals State
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
  const [inspectingTenant, setInspectingTenant] = useState<TeacherTenant | null>(null);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    school: "",
    subdomain: "",
    plan: "Custom" as "Custom" | "Standard" | "Enterprise",
  });

  // Calculate Metrics
  const totalMRR = tenants.reduce((acc, t) => acc + (t.status === "Active" ? t.monthlyFee : 0), 0);
  const totalStudents = tenants.reduce((acc, t) => acc + t.studentsCount, 0);
  const activeTenantsCount = tenants.filter((t) => t.status === "Active").length;

  // Filtered Teachers
  const filteredTenants = tenants.filter((t) => {
    const matchesSearch =
      t.teacherName.toLowerCase().includes(teacherSearch.toLowerCase()) ||
      (t.institution && t.institution.toLowerCase().includes(teacherSearch.toLowerCase())) ||
      t.subdomain.toLowerCase().includes(teacherSearch.toLowerCase()) ||
      t.email.toLowerCase().includes(teacherSearch.toLowerCase());

    const matchesPlan = selectedPlanFilter === "All" || t.plan === selectedPlanFilter;
    const matchesStatus = selectedStatusFilter === "All" || t.status === selectedStatusFilter;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  // Filtered Features
  const filteredFeatures = features.filter((f) =>
    f.name.toLowerCase().includes(featureSearch.toLowerCase()) ||
    f.key.toLowerCase().includes(featureSearch.toLowerCase()) ||
    f.description.toLowerCase().includes(featureSearch.toLowerCase())
  );

  // Calendar calculations for Billing
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth, year, month };
  };
  const { firstDay, daysInMonth, year, month } = getDaysInMonth(billingCalendarMonth);
  const billingMonthName = billingCalendarMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Handle Save Dev Settings
  const handleSaveDevSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    setTimeout(() => {
      setIsSavingSettings(false);
      setSavedSettingsSuccess(true);
      setTimeout(() => setSavedSettingsSuccess(false), 4000);
    }, 600);
  };

  // Sidebar navigation menu definition (EXACT MATCH FROM LMS-SaaS AdminSidebar.jsx)
  const menuSections = [
    {
      title: "SAAS GOVERNANCE",
      items: [
        {
          href: "/admin/dashboard",
          label: "Executive Overview",
          icon: LayoutGrid,
        },
        {
          href: "/admin/teachers",
          label: "Teachers / Schools",
          icon: Users,
          badge: tenants.length.toString(),
          badgeColor: "cyan",
        },
        {
          href: "/admin/announcements",
          label: "Broadcast & Pop-ups",
          icon: Radio,
        },
      ],
    },
    {
      title: "MONETIZATION & BILLING",
      items: [
        {
          href: "/admin/subscriptions",
          label: "Subscriptions",
          icon: CreditCard,
        },
        {
          href: "/admin/payments",
          label: "Billing & Invoices",
          icon: FileText,
        },
        { href: "/admin/plans", label: "Subscription Plans", icon: Layers },
        { href: "/admin/prices", label: "Membership Prices", icon: Banknote },
        { href: "/admin/features", label: "Feature Management", icon: Sliders },
        {
          href: "/admin/pricing-settings",
          label: "Landing Pricing & FAQs",
          icon: Sparkles,
        },
      ],
    },
    {
      title: "SECURITY & LOGS",
      items: [
        { href: "/admin/logs", label: "Audit Trail", icon: History },
      ],
    },
  ];

  // Header Title & Subtitle helper matching exact screenshots
  const getHeaderInfo = () => {
    switch (activeRoute) {
      case "/admin/teachers":
        return {
          title: "Teacher & Customer Directory",
          subtitle: "Manage customer accounts, assign plans, inspect payment histories, and feature flags",
        };
      case "/admin/dashboard":
        return {
          title: "Executive Overview & SaaS Metrics",
          subtitle: "Real-time SaaS health, MRR growth, and platform feature access utilization",
        };
      case "/admin/announcements":
        return {
          title: "Customer Notifications & Broadcasts",
          subtitle: "Manage system announcements, notifications, and alert messages",
        };
      case "/admin/payments":
        return {
          title: "Customer Billing & Invoices Ledger",
          subtitle: "Track platform subscription revenue, check transactions history, and invoices",
        };
      case "/admin/plans":
        return {
          title: "SaaS Subscription Plans",
          subtitle: "Configure subscription tiers, resource limits, and default features",
        };
      case "/admin/features":
        return {
          title: "Platform Feature Management",
          subtitle: "Configure global system feature flags, keys, icons, and descriptions",
        };
      case "/admin/subscriptions":
        return {
          title: "Tenant Subscriptions Ledger",
          subtitle: "Manage recurring subscriptions, automated renewals, and quota limits",
        };
      case "/admin/prices":
        return {
          title: "Membership Prices Management",
          subtitle: "Multi-currency dynamic prices synced directly with Stripe",
        };
      case "/admin/pricing-settings":
        return {
          title: "Landing Pricing, Comparison Table & FAQs",
          subtitle: "Customize public pricing cards, plan feature comparison matrix, and FAQ answers",
        };
      case "/admin/logs":
        return {
          title: "Platform Audit Trail",
          subtitle: "Real-time chronological log of administrative and system activities",
        };
      default:
        return {
          title: "Super Admin Dashboard",
          subtitle: "Control LMS system feature permissions and provision new teacher portals",
        };
    }
  };

  const headerInfo = getHeaderInfo();

  return (
    <div className={`h-screen flex font-sans antialiased overflow-hidden ${isDark ? "bg-[#0c0f17] text-slate-100 dark" : "bg-[#F8FAFC] text-slate-800"}`}>
      
      {/* ================= EXACT LMS-SaaS SUPER ADMIN SIDEBAR ================= */}
      <aside
        className={`border-r border-slate-200/80 dark:border-slate-800/80 h-screen flex flex-col z-30 shrink-0 transition-all duration-300 bg-white dark:bg-[#0c0f17] text-slate-800 dark:text-slate-100 shadow-xs ${
          isSidebarCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full pt-5 pb-3">
          {/* Header */}
          <div
            className={`flex items-center justify-between ${
              isSidebarCollapsed ? "flex-col gap-3 py-2 px-2" : "px-4 py-2"
            }`}
          >
            <div className="flex-1 flex items-center justify-center min-w-0">
              <img
                src="/Logos/Edura/logo.png"
                alt="Edura LMS"
                className={`object-contain transition-all ${
                  isSidebarCollapsed ? "h-8 w-8" : "h-9 w-auto max-w-[140px]"
                }`}
              />
            </div>

            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 rounded-lg transition-all flex items-center shrink-0 cursor-pointer border border-slate-200 bg-slate-100/80 text-slate-500 hover:bg-slate-200/80 hover:text-slate-900 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

          {/* Mini Stats Box */}
          {!isSidebarCollapsed && (
            <div className="mt-3 px-3">
              <div className="rounded-xl p-3 bg-slate-50 border border-slate-200/80 dark:bg-slate-800/80 dark:border-slate-800 text-[11px] space-y-2 shadow-2xs">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xs text-slate-500 dark:text-slate-400">
                    Monthly MRR:
                  </span>
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-xs">
                    LKR {totalMRR.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xs text-slate-500 dark:text-slate-400">
                    Active Teachers:
                  </span>
                  <span className="font-extrabold text-cyan-600 dark:text-cyan-400 text-xs">
                    {activeTenantsCount} / {tenants.length}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav
            className={`flex-1 space-y-5 overflow-y-auto custom-scrollbar pb-3 mt-4 ${
              isSidebarCollapsed ? "px-2" : "px-3"
            }`}
          >
            {menuSections.map((section, secIdx) => (
              <div key={section.title} className="space-y-1">
                {!isSidebarCollapsed ? (
                  <div className="px-3 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-2 text-slate-400 text-left">
                    <span>{section.title}</span>
                    <div className="h-[1px] flex-1 bg-slate-200/80 dark:bg-slate-800/60" />
                  </div>
                ) : secIdx > 0 ? (
                  <div className="w-8 h-[1px] mx-auto my-2 bg-slate-200/80 dark:bg-slate-800/60" />
                ) : null}

                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeRoute === item.href;
                    return (
                      <button
                        key={item.href}
                        onClick={() => setActiveRoute(item.href)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 relative group cursor-pointer ${
                          isActive
                            ? "bg-[#008ecf] text-white font-black shadow-md shadow-cyan-600/25"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
                        } ${isSidebarCollapsed ? "justify-center px-0" : ""}`}
                        title={isSidebarCollapsed ? item.label : undefined}
                      >
                        <Icon
                          className={`w-4 h-4 transition-colors shrink-0 ${
                            isActive
                              ? "text-white"
                              : "text-slate-400 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200"
                          }`}
                        />
                        {!isSidebarCollapsed && (
                          <div className="flex-1 flex items-center justify-between min-w-0">
                            <span className="truncate">{item.label}</span>
                            {item.badge && (
                              <span
                                className={`px-2 py-0.5 text-[9px] font-black rounded-full uppercase tracking-wider ${
                                  isActive
                                    ? "bg-white/25 text-white dark:bg-white/20"
                                    : "bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-800"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer / Add Customer Action */}
          <div className="p-3 border-t border-slate-200/80 dark:border-slate-800/80 space-y-2">
            <button
              onClick={() => setIsAddCustomerOpen(true)}
              className={`w-full py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none ${
                isSidebarCollapsed ? "px-0" : "px-3"
              }`}
              title="Add Customer"
            >
              <Plus className="w-4 h-4 shrink-0" />
              {!isSidebarCollapsed && <span>Add Customer</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        {/* ================= EXACT LMS-SaaS SUPER ADMIN TOP NAVBAR ================= */}
        <header className="border-b px-6 md:px-8 py-3.5 flex items-center justify-between sticky top-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#131620]/95 border-slate-200/80 dark:border-[#1f293d] w-full min-w-0 transition-colors">
          {/* Left Side: Page Title & Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 text-left min-w-0 flex-1 mr-2 sm:mr-4">
            <div className="text-left min-w-0 flex-1">
              <h1 className="text-sm sm:text-lg md:text-xl font-black tracking-tight leading-tight text-slate-900 dark:text-white break-words sm:whitespace-nowrap">
                {headerInfo.title}
              </h1>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5 truncate hidden sm:block">
                {headerInfo.subtitle}
              </p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all cursor-pointer shadow-2xs flex items-center justify-center"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* User Profile Dropdown Pill */}
            <div className="relative" ref={profileRef}>
              <div
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl p-1 sm:p-1.5 sm:pr-3 border border-slate-200/90 bg-slate-50 hover:bg-slate-100/80 dark:border-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-750 transition-all cursor-pointer select-none shadow-2xs"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-cyan-100 text-[#008ecf] dark:bg-cyan-950/80 dark:text-cyan-300 rounded-md sm:rounded-lg border border-cyan-200/60 dark:border-cyan-800/60 flex items-center justify-center overflow-hidden relative shadow-2xs shrink-0 font-black text-xs">
                  <span>SA</span>
                </div>

                <div className="text-left hidden sm:block">
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-tight truncate max-w-[120px]">
                    Super Admin
                  </p>
                  <span className="text-[10px] font-bold text-[#008ecf] dark:text-cyan-400 uppercase tracking-wider block">
                    SAAS ADMINISTRATOR
                  </span>
                </div>

                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-xl shadow-xl border overflow-hidden py-1.5 transition-all bg-white dark:bg-[#161b27] border-slate-200 dark:border-[#263147] text-slate-700 dark:text-slate-200 z-50">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-[#263147] text-left">
                    <p className="text-xs font-black truncate text-slate-900 dark:text-white">
                      Super Admin
                    </p>
                    <p className="text-[10px] text-slate-500 truncate mt-1 font-bold">
                      superadmin@nuralislabs.com
                    </p>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => {
                        setActiveRoute("/admin/logs");
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold transition-colors text-left hover:bg-slate-50 dark:hover:bg-[#1a2336] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-none bg-transparent"
                    >
                      <Shield className="w-4 h-4 text-[#008ecf]" />
                      <span>Audit Trail</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveRoute("/admin/plans");
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold transition-colors text-left hover:bg-slate-50 dark:hover:bg-[#1a2336] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-none bg-transparent"
                    >
                      <Settings className="w-4 h-4 text-[#008ecf]" />
                      <span>SaaS Settings</span>
                    </button>
                  </div>

                  <div className="border-t border-slate-100 dark:border-[#263147] pt-1">
                    <Link
                      href="/products"
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-extrabold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 shrink-0" />
                      <span>Exit Super Admin</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ================= SCROLLABLE TAB VIEWS ================= */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 animate-fade-in text-left">
          
          {/* ================= 1. TAB: TEACHERS / CUSTOMER DIRECTORY (EXACT MATCH) ================= */}
          {activeRoute === "/admin/teachers" && (
            <div className="space-y-6 animate-fade-in w-full">
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                    <Users className="w-6 h-6 text-[#008ecf]" />
                    Teacher / Customer Management
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Manage customer accounts, provision new teachers, assign plans, inspect payment histories, send warnings, and toggle feature permissions.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddCustomerOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none shrink-0"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Register Customer (Teacher)</span>
                </button>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="p-3 bg-white dark:bg-[#161b27] border border-slate-200/90 dark:border-[#263147] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={teacherSearch}
                    onChange={(e) => setTeacherSearch(e.target.value)}
                    placeholder="Search by name, institute..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold outline-none text-slate-900 dark:text-white focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto justify-between md:justify-end">
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    {["Standard", "Enterprise", "Custom"].map((plan) => (
                      <button
                        key={plan}
                        onClick={() => setSelectedPlanFilter(selectedPlanFilter === plan ? "All" : plan)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedPlanFilter === plan
                            ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                            : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <span className="text-xs font-bold text-slate-400 px-1">Status:</span>
                    {["All", "Active", "Trial", "Suspended"].map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatusFilter(status)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedStatusFilter === status
                            ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                            : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button
                      onClick={() => setTeacherViewMode("table")}
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                        teacherViewMode === "table"
                          ? "bg-white dark:bg-slate-700 text-[#008ecf] shadow-xs"
                          : "text-slate-400 hover:text-slate-900"
                      }`}
                      title="Table View"
                    >
                      <TableIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setTeacherViewMode("cards")}
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                        teacherViewMode === "cards"
                          ? "bg-white dark:bg-slate-700 text-[#008ecf] shadow-xs"
                          : "text-slate-400 hover:text-slate-900"
                      }`}
                      title="Grid Cards View"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Table View */}
              {teacherViewMode === "table" && (
                <div className="bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-xs overflow-hidden w-full">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-[#263147] text-slate-400 font-extrabold uppercase text-[10px] tracking-wider">
                          <th className="py-4 px-6">TEACHER CUSTOMER</th>
                          <th className="py-4 px-4">PLAN TIER</th>
                          <th className="py-4 px-4">STATUS</th>
                          <th className="py-4 px-4">PERMISSIONS</th>
                          <th className="py-4 px-4">STUDENTS & STORAGE</th>
                          <th className="py-4 px-6 text-right">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-[#263147]/60 font-medium text-slate-700 dark:text-slate-300">
                        {filteredTenants.map((t) => (
                          <tr key={t.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <img
                                  src={t.avatar}
                                  alt={t.teacherName}
                                  className="w-10 h-10 rounded-lg object-cover border border-slate-200 dark:border-[#263147]"
                                />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="font-extrabold text-sm text-slate-900 dark:text-white">
                                      {t.teacherName}
                                    </p>
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
                                      TEACHER
                                    </span>
                                  </div>
                                  {t.institution && (
                                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                                      {t.institution}
                                    </p>
                                  )}
                                  <p className="text-xs font-mono text-[#008ecf] font-semibold mt-0.5">
                                    {t.subdomain}.edura.nuralislabs.com
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="py-4 px-4">
                              <div className="space-y-0.5">
                                <span className="px-2.5 py-0.5 rounded-md font-bold text-xs bg-amber-50 text-amber-700 border border-amber-300 inline-block">
                                  {t.plan}
                                </span>
                                <div className="text-[11px] font-bold text-slate-500">
                                  LKR {t.monthlyFee}/mo
                                </div>
                              </div>
                            </td>

                            <td className="py-4 px-4">
                              <span className="px-2.5 py-1 rounded-md font-extrabold text-xs bg-emerald-50 text-emerald-600 border border-emerald-200">
                                {t.status}
                              </span>
                            </td>

                            <td className="py-4 px-4">
                              <button
                                onClick={() => alert(`Access permissions for ${t.teacherName}: 15/15 Active`)}
                                className="px-3 py-1.5 rounded-lg bg-cyan-50 text-[#008ecf] border border-cyan-200 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-100 transition-all cursor-pointer"
                              >
                                <Sliders className="w-3.5 h-3.5" />
                                <span>Access ({t.permissionsGranted}/{t.totalPermissions})</span>
                              </button>
                            </td>

                            <td className="py-4 px-4">
                              <div className="space-y-0.5">
                                <p className="font-extrabold text-xs text-slate-900 dark:text-white">
                                  {t.studentsCount} / {t.maxStudentsLimit} std
                                </p>
                                <p className="text-[11px] text-slate-400 font-semibold">
                                  {t.storageUsedGB} / {t.maxStorageLimitGB} GB
                                </p>
                              </div>
                            </td>

                            <td className="py-4 px-6 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setInspectingTenant(t)}
                                  className="w-8 h-8 rounded-lg bg-cyan-50 text-[#008ecf] hover:bg-cyan-100 border border-cyan-200 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                                  title="View Customer Profile"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => alert(`Reset temporary password for ${t.email}`)}
                                  className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                                  title="Reset & Resend Password"
                                >
                                  <Key className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => alert(`Editing quotas and profile for ${t.teacherName}`)}
                                  className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                                  title="Edit Teacher Profile & Quotas"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => {
                                    if (confirm(`Are you sure you want to de-provision ${t.teacherName}?`)) {
                                      setTenants(tenants.filter((item) => item.id !== t.id));
                                    }
                                  }}
                                  className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                                  title="De-provision Customer Tenant"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 px-6 border-t border-slate-100 dark:border-[#263147] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span>Showing <b>1</b> to <b>{filteredTenants.length}</b> of <b>{filteredTenants.length}</b> entries</span>
                      <span className="text-slate-300">|</span>
                      <span>Rows:</span>
                      <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded-md px-2 py-0.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded-md bg-[#008ecf] text-white font-bold flex items-center justify-center text-xs shadow-xs cursor-pointer">
                        1
                      </button>
                      <button className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================= 2. TAB: BROADCAST & POP-UPS (EXACT MATCH SCREENSHOT 1) ================= */}
          {activeRoute === "/admin/announcements" && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                    <Megaphone className="w-6 h-6 text-[#008ecf]" />
                    Customer Notifications & System Pop-up Messages
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Broadcast notifications to teachers (customers) and create real-time pop-up modal alert messages for teachers or students.
                  </p>
                </div>

                {/* Top Two Toggle Buttons */}
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#161b27] p-1.5 rounded-2xl border border-slate-200 dark:border-[#263147]">
                  <button
                    onClick={() => setBroadcastSubTab("popups")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      broadcastSubTab === "popups"
                        ? "bg-[#008ecf] text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>Pop-up Alerts Engine (0 Active)</span>
                  </button>

                  <button
                    onClick={() => setBroadcastSubTab("notifications")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      broadcastSubTab === "notifications"
                        ? "bg-[#008ecf] text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    <Bell className="w-4 h-4" />
                    <span>Customer Notifications</span>
                  </button>
                </div>
              </div>

              {/* 2-Column Grid matching Screenshot 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Left Card: Create Broadcast Pop-up Alert Message (2/3) */}
                <div className="lg:col-span-2 p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#008ecf]" />
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                        Create Broadcast Pop-up Alert Message
                      </h2>
                      <p className="text-xs text-slate-400 font-medium">
                        Configure real-time modal pop-up alerts displayed to teachers or students when navigating their portals.
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Broadcast pop-up alert published successfully!");
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          Target Audience *
                        </label>
                        <select
                          value={popupTargetAudience}
                          onChange={(e) => setPopupTargetAudience(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white focus:ring-2 focus:ring-[#008ecf] outline-none"
                        >
                          <option>Teachers (Customers) Only</option>
                          <option>Students Only</option>
                          <option>All Users (Teachers & Students)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          Pop-up Visual Theme Style *
                        </label>
                        <select
                          value={popupThemeStyle}
                          onChange={(e) => setPopupThemeStyle(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white focus:ring-2 focus:ring-[#008ecf] outline-none"
                        >
                          <option>Maintenance Notice (Amber Warning)</option>
                          <option>Urgent Security Alert (Red Warning)</option>
                          <option>New Feature Release (Purple Theme)</option>
                          <option>General Note (Cyan Theme)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Pop-up Headline Title *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 🚀 Scheduled Platform Maintenance"
                        value={popupHeadline}
                        onChange={(e) => setPopupHeadline(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white focus:ring-2 focus:ring-[#008ecf] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Pop-up Message Body *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Write detailed pop-up alert message content..."
                        value={popupBody}
                        onChange={(e) => setPopupBody(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:ring-2 focus:ring-[#008ecf] outline-none"
                      />
                    </div>

                    <div className="max-w-xs">
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Dismiss Button Text
                      </label>
                      <input
                        type="text"
                        value={popupDismissText}
                        onChange={(e) => setPopupDismissText(e.target.value)}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white focus:ring-2 focus:ring-[#008ecf] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#008ecf] hover:bg-[#007cb5] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 border-none mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Publish Pop-up Alert Message</span>
                    </button>
                  </form>
                </div>

                {/* Right Card: Live Pop-up Preview (1/3) */}
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#008ecf]" />
                      LIVE POP-UP PREVIEW
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-cyan-100 text-[#008ecf]">
                      Target: TEACHERS
                    </span>
                  </div>

                  {/* Dark Amber Pop-up Mockup (Exact match from screenshot 1) */}
                  <div className="p-6 rounded-2xl bg-[#2A170B] text-white shadow-xl border border-amber-900/50 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-white">
                          {popupHeadline || "Pop-up Title"}
                        </h4>
                        <p className="text-xs text-amber-100/70 mt-1 leading-relaxed">
                          {popupBody || "Pop-up content message preview..."}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-lg bg-amber-900/80 hover:bg-amber-800 text-amber-100 font-bold text-xs border-none"
                      >
                        {popupDismissText || "I Understand"}
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    This exact pop-up modal will render on the target user's screen upon portal entry.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= 3. TAB: BILLING & INVOICES (EXACT MATCH SCREENSHOT 2) ================= */}
          {activeRoute === "/admin/payments" && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="space-y-1">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <CreditCard className="w-6 h-6 text-[#008ecf]" />
                  Platform Customer Billing & Invoices
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  View complete payment history, track subscription revenue, filter transactions by day using the left calendar, and inspect customer receipts.
                </p>
              </div>

              {/* 2-Column Grid matching Screenshot 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                {/* Left Mini Calendar Widget (1/4) */}
                <div className="lg:col-span-1 p-5 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm space-y-4">
                  {/* Calendar Month Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#263147] pb-3">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-[#008ecf]" />
                      <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                        {billingMonthName}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setBillingCalendarMonth(new Date(year, month - 1, 1))}
                        className="p-1 rounded-md text-slate-400 hover:bg-slate-100 cursor-pointer border-none bg-transparent"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setBillingCalendarMonth(new Date(year, month + 1, 1))}
                        className="p-1 rounded-md text-slate-400 hover:bg-slate-100 cursor-pointer border-none bg-transparent"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Weekday Labels */}
                  <div className="grid grid-cols-7 text-center text-[10px] font-extrabold text-slate-400 uppercase">
                    <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1 text-xs text-center">
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-8" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setSelectedBillingDate(`${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${i + 1 < 10 ? `0${i + 1}` : i + 1}`)}
                        className="h-8 rounded-lg font-bold text-xs flex items-center justify-center hover:bg-slate-100 text-slate-700 dark:text-slate-300 cursor-pointer border-none bg-transparent"
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  {/* Active Billing Days Box */}
                  <div className="pt-3 border-t border-slate-100 dark:border-[#263147] space-y-2">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      ACTIVE BILLING DAYS
                    </span>
                    <button className="w-full py-2 px-3 bg-[#008ecf] text-white rounded-xl text-xs font-bold flex items-center justify-between shadow-xs border-none cursor-pointer">
                      <span>All Billing Days</span>
                      <span className="text-[10px] opacity-80">0 Inv</span>
                    </button>
                  </div>

                  {/* Custom Date Input */}
                  <div className="pt-2 border-t border-slate-100 dark:border-[#263147] flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Custom Date:</span>
                    <input
                      type="date"
                      value={selectedBillingDate}
                      onChange={(e) => setSelectedBillingDate(e.target.value)}
                      className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                {/* Right Column: 3 KPI Cards + Table (3/4) */}
                <div className="lg:col-span-3 space-y-6">
                  {/* 3 KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="p-5 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          TOTAL REVENUE COLLECTED
                        </span>
                        <Banknote className="text-emerald-500 w-4 h-4" />
                      </div>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">LKR 0.00</p>
                      <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        0 successful invoice transactions
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-5 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          PENDING / TRIAL INVOICES
                        </span>
                        <Clock className="text-amber-500 w-4 h-4" />
                      </div>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">LKR 0.00</p>
                      <p className="text-xs font-bold text-amber-600 mt-2">
                        Awaiting automatic renewal clearance
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-5 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          TOTAL CUSTOMERS BILLED
                        </span>
                        <CreditCard className="text-[#008ecf] w-4 h-4" />
                      </div>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">3 Active Accounts</p>
                      <p className="text-xs font-bold text-[#008ecf] mt-2">
                        100% automated recurring billing
                      </p>
                    </div>
                  </div>

                  {/* Filter Toolbar */}
                  <div className="p-3 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative w-full md:w-80">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by invoice #, teacher..."
                        value={billingSearch}
                        onChange={(e) => setBillingSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded-xl text-xs font-medium outline-none text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                      <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                        <span className="text-xs font-bold text-slate-400 px-2">Filter Status:</span>
                        {["All", "Paid", "Pending", "Failed"].map((st) => (
                          <button
                            key={st}
                            onClick={() => setBillingStatusFilter(st)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border-none ${
                              billingStatusFilter === st
                                ? "bg-[#008ecf] text-white"
                                : "text-slate-500 hover:text-slate-900 bg-transparent"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                        <button className="p-1.5 rounded-md bg-[#008ecf] text-white shadow-xs">
                          <TableIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-md text-slate-400">
                          <LayoutGrid className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Empty Table */}
                  <div className="bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-xs overflow-hidden">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-400 font-extrabold uppercase text-[10px]">
                          <th className="py-4 px-6">INVOICE #</th>
                          <th className="py-4 px-4">CUSTOMER / INSTITUTION</th>
                          <th className="py-4 px-4">PLAN TIER</th>
                          <th className="py-4 px-4">AMOUNT</th>
                          <th className="py-4 px-4">BILLING DATE</th>
                          <th className="py-4 px-4">STATUS</th>
                          <th className="py-4 px-6 text-right">PAYMENT HISTORY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={7} className="py-16 text-center text-slate-400 text-xs font-medium">
                            No matching payment invoices found.
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="p-4 px-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <span>Showing <b>0</b> to <b>0</b> of <b>0</b> entries</span>
                        <span className="text-slate-300">|</span>
                        <span>Rows:</span>
                        <select className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-xs font-bold">
                          <option>10</option>
                          <option>25</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-1">
                        <button className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-300">
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded-md bg-[#008ecf] text-white font-bold flex items-center justify-center text-xs">
                          1
                        </button>
                        <button className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-300">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 4. TAB: SUBSCRIPTION PLANS (EXACT MATCH SCREENSHOT 3) ================= */}
          {activeRoute === "/admin/plans" && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                    <Layers className="w-6 h-6 text-[#008ecf]" />
                    SaaS Subscription Plans & Tier Configuration
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Configure subscription tier pricing, resource quotas, and default feature access permissions granted to customers.
                  </p>
                </div>

                <button
                  onClick={() => alert("Create subscription plan modal triggered.")}
                  className="px-5 py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none shrink-0"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Create Subscription Plan</span>
                </button>
              </div>

              {/* 3 Subscription Plan Cards matching Screenshot 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* 1. Basic Plan */}
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white">Basic Plan</h3>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px] font-bold">
                          basic
                        </span>
                      </div>
                      <button className="p-1.5 rounded-lg bg-cyan-50 text-[#008ecf] hover:bg-cyan-100 border border-cyan-200">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <p className="text-3xl font-black text-[#008ecf]">
                        LKR 5,000 <span className="text-xs text-slate-400 font-semibold">/ month</span>
                      </p>
                    </div>

                    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#008ecf]" />
                          Student Limit:
                        </span>
                        <span className="font-extrabold text-slate-800 dark:text-white">250 Students</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <HardDrive className="w-3.5 h-3.5 text-[#008ecf]" />
                          Storage Quota:
                        </span>
                        <span className="font-extrabold text-slate-800 dark:text-white">25 GB Allocation</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2.5">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                        DEFAULT INCLUDED FEATURES:
                      </p>
                      <div className="space-y-2 text-xs font-medium">
                        {PLAN_FEATURES_LIST.map((feat) => {
                          const isIncluded = BASIC_PLAN_ALLOWED.includes(feat);
                          return (
                            <div key={feat} className="flex items-center justify-between">
                              <span className={isIncluded ? "text-slate-800 dark:text-slate-200 font-semibold" : "text-slate-400 line-through"}>
                                {feat}
                              </span>
                              {isIncluded ? (
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                                  ✓
                                </span>
                              ) : (
                                <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                                  ✕
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Standard Plan */}
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200/90 dark:border-[#263147] shadow-sm flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white">Standard Plan</h3>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px] font-bold">
                          standard
                        </span>
                      </div>
                      <button className="p-1.5 rounded-lg bg-cyan-50 text-[#008ecf] hover:bg-cyan-100 border border-cyan-200">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <p className="text-3xl font-black text-[#008ecf]">
                        LKR 8,000 <span className="text-xs text-slate-400 font-semibold">/ month</span>
                      </p>
                    </div>

                    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#008ecf]" />
                          Student Limit:
                        </span>
                        <span className="font-extrabold text-slate-800 dark:text-white">1,000 Students</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <HardDrive className="w-3.5 h-3.5 text-[#008ecf]" />
                          Storage Quota:
                        </span>
                        <span className="font-extrabold text-slate-800 dark:text-white">100 GB Allocation</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2.5">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                        DEFAULT INCLUDED FEATURES:
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Enterprise Plan (Purple Tier with Badge) */}
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border-2 border-purple-400 dark:border-purple-600 shadow-xl relative flex flex-col justify-between space-y-6">
                  <span className="absolute -top-3 right-6 bg-[#6366F1] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    ENTERPRISE TIER
                  </span>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white">Enterprise Plan</h3>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px] font-bold">
                          enterprise
                        </span>
                      </div>
                      <button className="p-1.5 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-200">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <p className="text-3xl font-black text-[#008ecf]">
                        LKR 200,000 <span className="text-xs text-slate-400 font-semibold">one time</span>
                      </p>
                    </div>

                    <div className="mt-4 p-3 bg-purple-50/50 dark:bg-purple-950/30 rounded-xl space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-purple-600" />
                          Student Limit:
                        </span>
                        <span className="font-extrabold text-slate-800 dark:text-white">0 Students</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <HardDrive className="w-3.5 h-3.5 text-purple-600" />
                          Storage Quota:
                        </span>
                        <span className="font-extrabold text-slate-800 dark:text-white">250 GB Allocation</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2.5">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                        DEFAULT INCLUDED FEATURES:
                      </p>
                      <div className="space-y-2 text-xs font-medium">
                        {PLAN_FEATURES_LIST.map((feat) => (
                          <div key={feat} className="flex items-center justify-between">
                            <span className="text-slate-800 dark:text-slate-200 font-semibold">
                              {feat}
                            </span>
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 5. TAB: FEATURE MANAGEMENT (EXACT MATCH SCREENSHOT 4) ================= */}
          {activeRoute === "/admin/features" && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                    <Sliders className="w-6 h-6 text-[#008ecf]" />
                    Feature Management
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Create and manage system feature flags, icons, and permissions used across subscription tiers
                  </p>
                </div>

                <button
                  onClick={() => alert("Create new feature flag modal triggered.")}
                  className="px-5 py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Feature</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search features by key, name, or description..."
                  value={featureSearch}
                  onChange={(e) => setFeatureSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#161b27] border border-slate-200/90 dark:border-[#263147] rounded-xl text-xs font-semibold outline-none text-slate-900 dark:text-white focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              {/* 9 Feature Cards Grid (Exact from Screenshot 4) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredFeatures.map((feat) => {
                  const IconComp = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      className="p-5 rounded-2xl bg-white dark:bg-[#161b27] border border-slate-200/90 dark:border-[#263147] shadow-xs space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#008ecf] flex items-center justify-center shrink-0">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                                {feat.name}
                              </h3>
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md inline-block mt-0.5">
                                {feat.key}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => alert(`Editing feature flag: ${feat.name}`)}
                              className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-[#008ecf] transition-colors border-none cursor-pointer"
                              title="Edit Feature"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Delete feature ${feat.name}?`)) {
                                  setFeatures(features.filter((f) => f.id !== feat.id));
                                }
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-rose-600 transition-colors border-none cursor-pointer"
                              title="Delete Feature"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                          {feat.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-mono flex items-center gap-1">
                          &lt;&gt; Icon: {feat.iconName}
                        </span>
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          ✓ Active System Flag
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= 6. TAB: OTHER REMAINING SUBPAGES ================= */}
          {activeRoute === "/admin/dashboard" && (
            <div className="space-y-8">
              {/* Dashboard Banner */}
              <div className="p-8 bg-gradient-to-r from-[#015f7f] via-[#092d3e] to-[#0c121e] rounded-2xl text-white shadow-2xl relative overflow-hidden border border-[#1d273a]/60">
                <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-2xl text-left">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        SaaS SuperAdmin Hub
                      </span>
                      <span className="text-[11px] text-slate-300 font-semibold">
                        v2.4 Core Platform
                      </span>
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-white leading-tight">
                      SaaS Application & Teacher Customer Management
                    </h1>
                    <p className="text-sm text-cyan-50/80 leading-relaxed font-medium">
                      Control LMS system feature permissions per customer, manage subscriptions, monitor MRR growth, and provision new teacher portals in real-time.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setActiveRoute("/admin/teachers")}
                      className="px-6 py-3.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs shadow-lg shadow-cyan-900/40 transition-all cursor-pointer flex items-center gap-2 border-none"
                    >
                      <Users className="w-4 h-4" />
                      <span>Manage All Customers</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 KPI Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">MONTHLY REVENUE (MRR)</span>
                  <p className="text-3xl font-black text-slate-900">LKR 0.00 <span className="text-xs text-slate-400 font-semibold">/mo</span></p>
                  <p className="text-xs font-bold text-emerald-600 mt-4 flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> Active subscription revenue</p>
                </div>
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">ACTIVE CUSTOMERS</span>
                  <p className="text-3xl font-black text-slate-900">3 <span className="text-xs text-slate-400 font-semibold">/ 3 Total</span></p>
                  <p className="text-xs font-bold text-[#008ecf] mt-4 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> All accounts currently active</p>
                </div>
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">PLATFORM STUDENTS</span>
                  <p className="text-3xl font-black text-slate-900">2</p>
                  <p className="text-xs font-bold text-amber-500 mt-4 flex items-center gap-1"><Activity className="w-3.5 h-3.5" /> Across active institutes</p>
                </div>
                <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">STORAGE USAGE</span>
                  <p className="text-3xl font-black text-slate-900">0 <span className="text-xs text-slate-400 font-semibold">GB</span></p>
                  <p className="text-xs font-bold text-blue-500 mt-4 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Quota healthy across tenants</p>
                </div>
              </div>
            </div>
          )}

          {activeRoute === "/admin/subscriptions" && (
            <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Subscriptions</h2>
              <p className="text-xs text-slate-500 mt-1">Tenant subscription lifecycles, renewal cycles, and payment methods.</p>
            </div>
          )}

          {activeRoute === "/admin/prices" && (
            <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Membership Prices</h2>
              <p className="text-xs text-slate-500 mt-1">Configure multi-currency dynamic prices synced with Stripe.</p>
            </div>
          )}

          {/* ================= 7. TAB: LANDING PRICING, COMPARISON MATRIX & FAQS (EXACT MATCH SCREENSHOTS 1, 2, 3) ================= */}
          {activeRoute === "/admin/pricing-settings" && (
            <div className="space-y-6 animate-fade-in">
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                    <Sparkles className="w-6 h-6 text-[#008ecf]" />
                    Landing Pricing, Comparison Table & FAQs
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Customize pricing cards, subscription feature comparison matrix, and frequently asked questions for public landing visitors.
                  </p>
                </div>

                <div>
                  {pricingSubTab === "plans" && (
                    <button
                      onClick={() => {
                        setPlanForm({
                          name: "",
                          slug: "",
                          badge: "",
                          description: "",
                          period: "/Month",
                          is_popular: false,
                          is_active: true,
                          cta_text: "Get Started",
                          cta_link: "/login",
                          sort_order: landingPlans.length + 1,
                        });
                        setPlanModal({ isOpen: true, plan: null });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none shrink-0"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Add Pricing Plan</span>
                    </button>
                  )}

                  {pricingSubTab === "comparison" && (
                    <button
                      onClick={() => {
                        setCategoryForm({
                          name: "",
                          sort_order: comparisonCategories.length + 1,
                        });
                        setCategoryModal({ isOpen: true, category: null });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none shrink-0"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Add Category</span>
                    </button>
                  )}

                  {pricingSubTab === "faqs" && (
                    <button
                      onClick={() => {
                        setFaqForm({
                          question: "",
                          answer: "",
                          sort_order: landingFaqs.length + 1,
                          is_active: true,
                        });
                        setFaqModal({ isOpen: true, faq: null });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#008ecf] hover:bg-[#007cb5] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer border-none shrink-0"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Add FAQ</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Sub-Tabs Switcher matching Screenshot */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  type="button"
                  onClick={() => setPricingSubTab("plans")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer border-none ${
                    pricingSubTab === "plans"
                      ? "bg-[#008ecf] text-white shadow-md shadow-cyan-600/20"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Pricing Plans (Cards)</span>
                  <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-black">
                    {landingPlans.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPricingSubTab("comparison")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer border-none ${
                    pricingSubTab === "comparison"
                      ? "bg-[#008ecf] text-white shadow-md shadow-cyan-600/20"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <TableIcon className="w-4 h-4" />
                  <span>Comparison Matrix Table</span>
                  <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-black">
                    {comparisonCategories.length} Categories
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPricingSubTab("faqs")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer border-none ${
                    pricingSubTab === "faqs"
                      ? "bg-[#008ecf] text-white shadow-md shadow-cyan-600/20"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                  <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-black">
                    {landingFaqs.length}
                  </span>
                </button>
              </div>

              {/* ─────────────────────────────────────────────────────────── */}
              {/* SUBTAB 1: PRICING PLANS (CARDS) (MATCHING SCREENSHOT 1)   */}
              {/* ─────────────────────────────────────────────────────────── */}
              {pricingSubTab === "plans" && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch pt-2">
                  {landingPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`rounded-2xl p-6 flex flex-col justify-between transition-all relative border shadow-sm ${
                        plan.is_popular
                          ? "bg-[#0c1e33] text-white border-2 border-[#008ecf] shadow-xl shadow-cyan-500/10"
                          : "bg-white dark:bg-[#161b27] border-slate-200/90 dark:border-[#263147] text-slate-900 dark:text-white"
                      }`}
                    >
                      {/* Top Badge (e.g. MOST POPULAR) */}
                      {plan.badge && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#008ecf] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                          {plan.badge}
                        </div>
                      )}

                      <div>
                        {/* Top Action Bar */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                                plan.is_active
                                  ? plan.is_popular
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : "bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                                  : "bg-slate-100 text-slate-500 border border-slate-200"
                              }`}
                            >
                              {plan.is_active ? "Active" : "Hidden"}
                            </span>

                            {plan.is_popular && (
                              <span className="flex items-center gap-1 text-[11px] font-black text-amber-400 bg-amber-400/15 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                                <Star className="w-3 h-3 fill-amber-400" />
                                <span>Popular</span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => {
                                setPlanForm({
                                  name: plan.name,
                                  slug: plan.slug,
                                  badge: plan.badge || "",
                                  description: plan.description,
                                  period: plan.period,
                                  is_popular: plan.is_popular,
                                  is_active: plan.is_active,
                                  cta_text: plan.cta_text,
                                  cta_link: plan.cta_link,
                                  sort_order: plan.sort_order,
                                });
                                setPlanModal({ isOpen: true, plan });
                              }}
                              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                plan.is_popular
                                  ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                              }`}
                              title="Edit Plan"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete plan ${plan.name}?`)) {
                                  setLandingPlans(landingPlans.filter((p) => p.id !== plan.id));
                                }
                              }}
                              className="p-1.5 rounded-lg border border-rose-200/60 bg-rose-50/80 dark:bg-rose-950/40 text-rose-500 hover:bg-rose-100 transition-colors cursor-pointer"
                              title="Delete Plan"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-xl font-black tracking-tight mb-1.5 ${
                            plan.is_popular ? "text-white" : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {plan.name}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-xs min-h-[36px] leading-relaxed mb-4 ${
                            plan.is_popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {plan.description}
                        </p>

                        {/* Period Tag */}
                        <div className="mb-6">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full ${
                              plan.is_popular
                                ? "bg-white/10 text-slate-200"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <button
                          type="button"
                          className={`w-full py-3 px-4 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border-none ${
                            plan.is_popular
                              ? "bg-white text-[#0c1e33] hover:bg-slate-100 shadow-md"
                              : "bg-[#0c1528] dark:bg-[#008ecf] hover:bg-[#16223b] text-white shadow-sm"
                          }`}
                        >
                          <span>{plan.cta_text}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────── */}
              {/* SUBTAB 2: COMPARISON MATRIX TABLE (MATCHING SCREENSHOT 2) */}
              {/* ─────────────────────────────────────────────────────────── */}
              {pricingSubTab === "comparison" && (
                <div className="space-y-6">
                  {comparisonCategories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-white dark:bg-[#161b27] border border-slate-200/90 dark:border-[#263147] rounded-2xl p-6 shadow-xs space-y-4"
                    >
                      {/* Category Header */}
                      <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#008ecf]/10 text-[#008ecf] flex items-center justify-center font-black text-sm">
                            {category.sort_order}
                          </div>
                          <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                            {category.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setItemForm({
                                name: "",
                                values: {
                                  basic: "true",
                                  standard: "true",
                                  enterprise: "true",
                                  custom: "",
                                },
                                sort_order: (category.items?.length || 0) + 1,
                              });
                              setItemModal({
                                isOpen: true,
                                item: null,
                                categoryId: category.id,
                              });
                            }}
                            className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <PlusCircle className="w-3.5 h-3.5 text-[#008ecf]" />
                            <span>Add Feature Row</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setCategoryForm({
                                name: category.name,
                                sort_order: category.sort_order,
                              });
                              setCategoryModal({ isOpen: true, category });
                            }}
                            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#008ecf] hover:text-white transition-colors cursor-pointer"
                            title="Edit Category"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete category "${category.name}" and its rows?`)) {
                                setComparisonCategories(
                                  comparisonCategories.filter((c) => c.id !== category.id)
                                );
                              }
                            }}
                            className="p-1.5 rounded-lg border border-rose-200 dark:border-rose-900/40 bg-rose-50 dark:bg-rose-950/40 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
                            title="Delete Category"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Comparison Items Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                          <thead>
                            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                              <th className="py-3 px-3 font-bold w-2/6">Feature Name</th>
                              <th className="py-3 px-3 font-bold text-center w-1/6">Basic</th>
                              <th className="py-3 px-3 font-bold text-center w-1/6 text-[#008ecf]">
                                Standard
                              </th>
                              <th className="py-3 px-3 font-bold text-center w-1/6">Enterprise</th>
                              <th className="py-3 px-3 font-bold text-center w-1/6">Custom</th>
                              <th className="py-3 px-3 font-bold text-right w-24">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.items.map((item) => (
                              <tr
                                key={item.id}
                                className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                              >
                                <td className="py-3.5 px-3 font-bold text-slate-800 dark:text-slate-200">
                                  {item.name}
                                </td>

                                {["basic", "standard", "enterprise", "custom"].map((planSlug) => {
                                  const val = item.values ? item.values[planSlug] : null;
                                  const isBool = typeof val === "boolean";
                                  return (
                                    <td key={planSlug} className="py-3.5 px-3 text-center">
                                      {isBool ? (
                                        val ? (
                                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-black text-xs">
                                            ✓
                                          </span>
                                        ) : (
                                          <span className="text-slate-300 dark:text-slate-600 font-bold">
                                            —
                                          </span>
                                        )
                                      ) : (
                                        <span
                                          className={`font-semibold ${
                                            val === "Blocked"
                                              ? "text-slate-700 dark:text-slate-300"
                                              : val === "Allow"
                                              ? "text-slate-700 dark:text-slate-300"
                                              : val
                                              ? "text-slate-700 dark:text-slate-300"
                                              : "text-slate-400"
                                          }`}
                                        >
                                          {val || "—"}
                                        </span>
                                      )}
                                    </td>
                                  );
                                })}

                                <td className="py-3.5 px-3 text-right">
                                  <div className="inline-flex items-center gap-1.5">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setItemForm({
                                          name: item.name,
                                          values: {
                                            basic: String(item.values.basic ?? ""),
                                            standard: String(item.values.standard ?? ""),
                                            enterprise: String(item.values.enterprise ?? ""),
                                            custom: String(item.values.custom ?? ""),
                                          },
                                          sort_order: item.sort_order,
                                        });
                                        setItemModal({
                                          isOpen: true,
                                          item,
                                          categoryId: category.id,
                                        });
                                      }}
                                      className="p-1 rounded-md text-slate-500 hover:text-[#008ecf] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border-none bg-transparent"
                                      title="Edit Feature Row"
                                    >
                                      <Edit2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        if (confirm(`Delete feature row "${item.name}"?`)) {
                                          setComparisonCategories(
                                            comparisonCategories.map((c) =>
                                              c.id === category.id
                                                ? {
                                                    ...c,
                                                    items: c.items.filter((i) => i.id !== item.id),
                                                  }
                                                : c
                                            )
                                          );
                                        }
                                      }}
                                      className="p-1 rounded-md text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer border-none bg-transparent"
                                      title="Delete Feature Row"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────── */}
              {/* SUBTAB 3: FREQUENTLY ASKED QUESTIONS (MATCHING SCREENSHOT 3)*/}
              {/* ─────────────────────────────────────────────────────────── */}
              {pricingSubTab === "faqs" && (
                <div className="space-y-4">
                  {landingFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white dark:bg-[#161b27] border border-slate-200/90 dark:border-[#263147] rounded-2xl p-6 shadow-xs space-y-3 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3.5">
                          <div className="w-8 h-8 rounded-lg bg-[#008ecf]/10 text-[#008ecf] flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                            #{faq.sort_order}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                              {faq.question}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed font-normal">
                              {faq.answer}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setFaqForm({
                                question: faq.question,
                                answer: faq.answer,
                                sort_order: faq.sort_order,
                                is_active: faq.is_active,
                              });
                              setFaqModal({ isOpen: true, faq });
                            }}
                            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#008ecf] hover:text-white transition-colors cursor-pointer"
                            title="Edit FAQ"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm("Delete this FAQ item?")) {
                                setLandingFaqs(landingFaqs.filter((f) => f.id !== faq.id));
                              }
                            }}
                            className="p-1.5 rounded-lg border border-rose-200 dark:border-rose-900/40 bg-rose-50 dark:bg-rose-950/40 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
                            title="Delete FAQ"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeRoute === "/admin/logs" && (
            <div className="p-6 bg-white dark:bg-[#161b27] rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Audit Trail</h2>
              <p className="text-xs text-slate-500 mt-1">Real-time system events, tenant provisions, and credential modifications.</p>
            </div>
          )}

        </main>
      </div>

      {/* ================= MODAL: REGISTER CUSTOMER (TEACHER) ================= */}
      {isAddCustomerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161b27] rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-[#263147] animate-in fade-in zoom-in duration-150 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#263147] mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Register Customer (Teacher)
                </h3>
                <p className="text-xs text-slate-400">
                  Provisions a new isolated Edura LMS tenant
                </p>
              </div>
              <button
                onClick={() => setIsAddCustomerOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const created: TeacherTenant = {
                  id: String(tenants.length + 1),
                  teacherName: newCustomer.name,
                  type: "teacher",
                  email: newCustomer.email,
                  institution: newCustomer.school,
                  subdomain: newCustomer.subdomain || "portal",
                  studentsCount: 0,
                  maxStudentsLimit: 1000,
                  storageUsedGB: 0,
                  maxStorageLimitGB: 100,
                  coursesCount: 0,
                  plan: newCustomer.plan,
                  monthlyFee: 0,
                  status: "Active",
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
                  joinedDate: "Just now",
                  permissionsGranted: 15,
                  totalPermissions: 15,
                };
                setTenants([...tenants, created]);
                setIsAddCustomerOpen(false);
              }}
              className="space-y-3.5 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  School / Academy Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. WiseRay"
                  value={newCustomer.school}
                  onChange={(e) => setNewCustomer({ ...newCustomer, school: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Teacher Customer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amila Priyanga"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="amila@wiseray.lk"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Subdomain Prefix *
                </label>
                <div className="flex items-center bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5">
                  <input
                    type="text"
                    required
                    placeholder="amila"
                    value={newCustomer.subdomain}
                    onChange={(e) => setNewCustomer({ ...newCustomer, subdomain: e.target.value })}
                    className="w-full bg-transparent text-slate-800 dark:text-white focus:outline-none font-semibold"
                  />
                  <span className="text-slate-400 font-mono text-[11px]">.edura.nuralislabs.com</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Plan Tier
                </label>
                <select
                  value={newCustomer.plan}
                  onChange={(e) => setNewCustomer({ ...newCustomer, plan: e.target.value as any })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf] font-semibold"
                >
                  <option value="Custom">Custom Plan (LKR 0/mo)</option>
                  <option value="Standard">Standard Tier (LKR 25,000/mo)</option>
                  <option value="Enterprise">Enterprise Scale (LKR 65,000/mo)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-[#263147] mt-5">
                <button
                  type="button"
                  onClick={() => setIsAddCustomerOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-all cursor-pointer border-none bg-transparent"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-[#008ecf] hover:bg-[#007cb5] text-white shadow-sm transition-all cursor-pointer border-none"
                >
                  Register Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: INSPECT CUSTOMER PROFILE ================= */}
      {inspectingTenant && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161b27] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-[#263147] animate-in fade-in zoom-in duration-150 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#263147]">
              <div className="flex items-center gap-3">
                <img
                  src={inspectingTenant.avatar}
                  alt={inspectingTenant.teacherName}
                  className="w-11 h-11 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {inspectingTenant.teacherName}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {inspectingTenant.subdomain}.edura.nuralislabs.com
                  </p>
                </div>
              </div>
              <button
                onClick={() => setInspectingTenant(null)}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-slate-400 font-bold text-[10px] uppercase">Students Limit</p>
                <p className="text-sm font-black text-slate-900 dark:text-white mt-1">
                  {inspectingTenant.studentsCount} / {inspectingTenant.maxStudentsLimit}
                </p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-slate-400 font-bold text-[10px] uppercase">Storage Allocation</p>
                <p className="text-sm font-black text-slate-900 dark:text-white mt-1">
                  {inspectingTenant.storageUsedGB} / {inspectingTenant.maxStorageLimitGB} GB
                </p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-slate-400 font-bold text-[10px] uppercase">Plan Tier</p>
                <p className="text-sm font-black text-amber-700 mt-1">
                  {inspectingTenant.plan} (LKR {inspectingTenant.monthlyFee}/mo)
                </p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-slate-400 font-bold text-[10px] uppercase">Active Features</p>
                <p className="text-sm font-black text-[#008ecf] mt-1">
                  {inspectingTenant.permissionsGranted} / {inspectingTenant.totalPermissions} Microservices
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-100 dark:border-[#263147]">
              <button
                onClick={() => setInspectingTenant(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer border-none"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: CREATE / EDIT PRICING PLAN ================= */}
      {planModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161b27] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-[#263147] animate-in fade-in zoom-in duration-150 text-left space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#263147]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {planModal.plan ? "Edit Pricing Plan" : "Create Pricing Plan"}
              </h3>
              <button
                onClick={() => setPlanModal({ isOpen: false, plan: null })}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (planModal.plan) {
                  setLandingPlans(
                    landingPlans.map((p) =>
                      p.id === planModal.plan?.id
                        ? {
                            ...p,
                            name: planForm.name,
                            slug: planForm.slug,
                            badge: planForm.badge,
                            description: planForm.description,
                            period: planForm.period,
                            is_popular: planForm.is_popular,
                            is_active: planForm.is_active,
                            cta_text: planForm.cta_text,
                            cta_link: planForm.cta_link,
                            sort_order: planForm.sort_order,
                          }
                        : p
                    )
                  );
                } else {
                  const newP: LandingPlan = {
                    id: String(Date.now()),
                    name: planForm.name,
                    slug: planForm.slug || planForm.name.toLowerCase().replace(/\s+/g, "-"),
                    badge: planForm.badge,
                    description: planForm.description,
                    period: planForm.period,
                    is_popular: planForm.is_popular,
                    is_active: planForm.is_active,
                    cta_text: planForm.cta_text,
                    cta_link: planForm.cta_link,
                    sort_order: planForm.sort_order,
                  };
                  setLandingPlans([...landingPlans, newP]);
                }
                setPlanModal({ isOpen: false, plan: null });
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Plan Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={planForm.name}
                    onChange={(e) =>
                      setPlanForm({
                        ...planForm,
                        name: e.target.value,
                        slug: planModal.plan
                          ? planForm.slug
                          : e.target.value.toLowerCase().replace(/\s+/g, "-"),
                      })
                    }
                    className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Slug / Key *
                  </label>
                  <input
                    type="text"
                    required
                    value={planForm.slug}
                    onChange={(e) => setPlanForm({ ...planForm, slug: e.target.value })}
                    className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Badge Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MOST POPULAR"
                    value={planForm.badge}
                    onChange={(e) => setPlanForm({ ...planForm, badge: e.target.value })}
                    className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Period Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. /Month, One Time"
                    value={planForm.period}
                    onChange={(e) => setPlanForm({ ...planForm, period: e.target.value })}
                    className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Tagline / Description
                </label>
                <textarea
                  rows={2}
                  value={planForm.description}
                  onChange={(e) => setPlanForm({ ...planForm, description: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={planForm.cta_text}
                    onChange={(e) => setPlanForm({ ...planForm, cta_text: e.target.value })}
                    className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    CTA Button Link
                  </label>
                  <input
                    type="text"
                    value={planForm.cta_link}
                    onChange={(e) => setPlanForm({ ...planForm, cta_link: e.target.value })}
                    className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2 border-t border-slate-100 dark:border-[#263147]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={planForm.is_popular}
                    onChange={(e) => setPlanForm({ ...planForm, is_popular: e.target.checked })}
                    className="w-4 h-4 rounded text-[#008ecf] focus:ring-[#008ecf]"
                  />
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Most Popular
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={planForm.is_active}
                    onChange={(e) => setPlanForm({ ...planForm, is_active: e.target.checked })}
                    className="w-4 h-4 rounded text-[#008ecf] focus:ring-[#008ecf]"
                  />
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Active & Visible
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-[#263147]">
                <button
                  type="button"
                  onClick={() => setPlanModal({ isOpen: false, plan: null })}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-all cursor-pointer border-none bg-transparent"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-[#008ecf] hover:bg-[#007cb5] text-white shadow-sm transition-all cursor-pointer border-none"
                >
                  Save Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: CREATE / EDIT CATEGORY ================= */}
      {categoryModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161b27] rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-[#263147] animate-in fade-in zoom-in duration-150 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#263147]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {categoryModal.category ? "Edit Category" : "Create Comparison Category"}
              </h3>
              <button
                onClick={() => setCategoryModal({ isOpen: false, category: null })}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (categoryModal.category) {
                  setComparisonCategories(
                    comparisonCategories.map((c) =>
                      c.id === categoryModal.category?.id
                        ? {
                            ...c,
                            name: categoryForm.name,
                            sort_order: categoryForm.sort_order,
                          }
                        : c
                    )
                  );
                } else {
                  const newCat: ComparisonCategory = {
                    id: String(Date.now()),
                    name: categoryForm.name,
                    sort_order: categoryForm.sort_order,
                    items: [],
                  };
                  setComparisonCategories([...comparisonCategories, newCat]);
                }
                setCategoryModal({ isOpen: false, category: null });
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Video & Content"
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Sort Order
                </label>
                <input
                  type="number"
                  value={categoryForm.sort_order}
                  onChange={(e) =>
                    setCategoryForm({ ...categoryForm, sort_order: parseInt(e.target.value) || 1 })
                  }
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-[#263147]">
                <button
                  type="button"
                  onClick={() => setCategoryModal({ isOpen: false, category: null })}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-all cursor-pointer border-none bg-transparent"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-[#008ecf] hover:bg-[#007cb5] text-white shadow-sm transition-all cursor-pointer border-none"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: CREATE / EDIT COMPARISON ITEM ================= */}
      {itemModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161b27] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-[#263147] animate-in fade-in zoom-in duration-150 text-left space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#263147]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {itemModal.item ? "Edit Feature Row" : "Add Feature Row to Matrix"}
              </h3>
              <button
                onClick={() => setItemModal({ isOpen: false, item: null, categoryId: null })}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const parseVal = (v: string) => {
                  if (v === "true") return true;
                  if (v === "false") return false;
                  if (!v) return null;
                  return v;
                };

                const valuesObj = {
                  basic: parseVal(itemForm.values.basic),
                  standard: parseVal(itemForm.values.standard),
                  enterprise: parseVal(itemForm.values.enterprise),
                  custom: parseVal(itemForm.values.custom),
                };

                if (itemModal.item && itemModal.categoryId) {
                  setComparisonCategories(
                    comparisonCategories.map((c) =>
                      c.id === itemModal.categoryId
                        ? {
                            ...c,
                            items: c.items.map((i) =>
                              i.id === itemModal.item?.id
                                ? {
                                    ...i,
                                    name: itemForm.name,
                                    values: valuesObj,
                                    sort_order: itemForm.sort_order,
                                  }
                                : i
                            ),
                          }
                        : c
                    )
                  );
                } else if (itemModal.categoryId) {
                  const newItem: ComparisonCategoryItem = {
                    id: String(Date.now()),
                    name: itemForm.name,
                    values: valuesObj,
                    sort_order: itemForm.sort_order,
                  };
                  setComparisonCategories(
                    comparisonCategories.map((c) =>
                      c.id === itemModal.categoryId
                        ? { ...c, items: [...c.items, newItem] }
                        : c
                    )
                  );
                }
                setItemModal({ isOpen: false, item: null, categoryId: null });
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Feature Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Screen Record / Screenshots"
                  value={itemForm.name}
                  onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div className="space-y-3">
                <p className="font-extrabold uppercase text-[10px] text-slate-400 tracking-wider">
                  Values per Tier:
                </p>

                {(["basic", "standard", "enterprise", "custom"] as const).map((slug) => (
                  <div key={slug} className="flex items-center justify-between gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <span className="font-bold text-slate-700 dark:text-slate-300 capitalize text-xs">
                      {slug}:
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setItemForm({
                            ...itemForm,
                            values: { ...itemForm.values, [slug]: "true" },
                          })
                        }
                        className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer border-none ${
                          itemForm.values[slug] === "true"
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        ✓ Yes
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setItemForm({
                            ...itemForm,
                            values: { ...itemForm.values, [slug]: "false" },
                          })
                        }
                        className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer border-none ${
                          itemForm.values[slug] === "false"
                            ? "bg-rose-600 text-white"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        ✕ No
                      </button>
                      <input
                        type="text"
                        placeholder="Custom text..."
                        value={
                          itemForm.values[slug] !== "true" && itemForm.values[slug] !== "false"
                            ? itemForm.values[slug]
                            : ""
                        }
                        onChange={(e) =>
                          setItemForm({
                            ...itemForm,
                            values: { ...itemForm.values, [slug]: e.target.value },
                          })
                        }
                        className="w-28 px-2 py-1 rounded-md border border-slate-300 dark:border-slate-600 text-xs bg-white dark:bg-slate-900"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-[#263147]">
                <button
                  type="button"
                  onClick={() => setItemModal({ isOpen: false, item: null, categoryId: null })}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-all cursor-pointer border-none bg-transparent"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-[#008ecf] hover:bg-[#007cb5] text-white shadow-sm transition-all cursor-pointer border-none"
                >
                  Save Feature Row
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: CREATE / EDIT FAQ ================= */}
      {faqModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161b27] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-[#263147] animate-in fade-in zoom-in duration-150 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#263147]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {faqModal.faq ? "Edit FAQ" : "Create FAQ"}
              </h3>
              <button
                onClick={() => setFaqModal({ isOpen: false, faq: null })}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (faqModal.faq) {
                  setLandingFaqs(
                    landingFaqs.map((f) =>
                      f.id === faqModal.faq?.id
                        ? {
                            ...f,
                            question: faqForm.question,
                            answer: faqForm.answer,
                            sort_order: faqForm.sort_order,
                            is_active: faqForm.is_active,
                          }
                        : f
                    )
                  );
                } else {
                  const newFaq: LandingFAQ = {
                    id: String(Date.now()),
                    question: faqForm.question,
                    answer: faqForm.answer,
                    sort_order: faqForm.sort_order,
                    is_active: faqForm.is_active,
                  };
                  setLandingFaqs([...landingFaqs, newFaq]);
                }
                setFaqModal({ isOpen: false, faq: null });
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Question *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How quickly can my academy be launched?"
                  value={faqForm.question}
                  onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Detailed Answer *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Enter comprehensive answer..."
                  value={faqForm.answer}
                  onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                  className="w-full bg-[#F4F6FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008ecf]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={faqForm.is_active}
                    onChange={(e) => setFaqForm({ ...faqForm, is_active: e.target.checked })}
                    className="w-4 h-4 rounded text-[#008ecf] focus:ring-[#008ecf]"
                  />
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Visible on Landing
                  </span>
                </label>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Order:
                  </span>
                  <input
                    type="number"
                    value={faqForm.sort_order}
                    onChange={(e) =>
                      setFaqForm({ ...faqForm, sort_order: parseInt(e.target.value) || 1 })
                    }
                    className="w-16 px-2 py-1 rounded-md border border-slate-300 dark:border-slate-700 text-xs text-center bg-white dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-[#263147]">
                <button
                  type="button"
                  onClick={() => setFaqModal({ isOpen: false, faq: null })}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-all cursor-pointer border-none bg-transparent"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-[#008ecf] hover:bg-[#007cb5] text-white shadow-sm transition-all cursor-pointer border-none"
                >
                  Save FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
