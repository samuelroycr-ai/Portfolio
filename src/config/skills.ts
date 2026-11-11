export type SkillLevel = "core" | "secondary";

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "business-analysis",
    title: "Business Analysis",
    description: "Eliciting, documenting, and validating requirements from discovery through UAT sign-off.",
    skills: [
      { name: "BRD", level: "core", icon: "FileText", description: "BUSINESS REQUIREMENTS DOC" },
      { name: "FSD", level: "core", icon: "FileCode", description: "FUNCTIONAL SPEC DOC" },
      { name: "Requirement Gathering", level: "core", icon: "Search", description: "STAKEHOLDER ELICITATION" },
      { name: "Gap Analysis", level: "core", icon: "GitBranch", description: "AS-IS VS TO-BE" },
      { name: "Process Mapping", level: "core", icon: "Workflow", description: "WORKFLOW DOCUMENTATION" },
      { name: "Scope Analysis", level: "secondary" },
      { name: "Stakeholder Discussions", level: "secondary" },
      { name: "Client Approvals", level: "secondary" },
      { name: "Workflow Documentation", level: "secondary" },
      { name: "Functional Analysis", level: "secondary" },
      { name: "Vendor Analysis", level: "secondary" },
      { name: "UAT Documentation", level: "secondary" }
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Agile delivery cadence — planning, standups, demos, retros, and cross-team coordination.",
    skills: [
      { name: "Agile", level: "core", icon: "RefreshCw", description: "ITERATIVE DELIVERY" },
      { name: "Scrum", level: "core", icon: "Users", description: "SCRUM MASTER CADENCE" },
      { name: "Jira", level: "core", icon: "Kanban", description: "BACKLOG & TICKET TRACKING" },
      { name: "Sprint Planning", level: "core", icon: "Calendar", description: "SCOPE & COMMITMENT" },
      { name: "User Stories", level: "core", icon: "ListTodo", description: "AGILE BACKLOG ITEMS" },
      { name: "UAT", level: "core", icon: "CheckCircle", description: "USER ACCEPTANCE TESTING" },
      { name: "Epics & Tasks", level: "secondary" },
      { name: "Sprint Reviews", level: "secondary" },
      { name: "Retrospectives", level: "secondary" },
      { name: "Defect Triage", level: "secondary" },
      { name: "Release Sign-off", level: "secondary" },
      { name: "Delivery Coordination", level: "secondary" }
    ]
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    description: "Core banking, cross-border transactions, and financial accounting domains.",
    skills: [
      { name: "Core Banking", level: "core", icon: "Landmark", description: "BANKING SYSTEMS" },
      { name: "Remittance", level: "core", icon: "ArrowLeftRight", description: "INWARD / OUTWARD TRANSFERS" },
      { name: "Forex", level: "core", icon: "Coins", description: "CURRENCY BUY / SELL" },
      { name: "Treasury", level: "core", icon: "Wallet", description: "CASH & FUNDING OPS" },
      { name: "General Ledger", level: "core", icon: "BookOpen", description: "FINANCIAL ACCOUNTING" },
      { name: "ETB / NTB Onboarding", level: "secondary" },
      { name: "Multi-Currency Transactions", level: "secondary" },
      { name: "Balance Sheet", level: "secondary" },
      { name: "Profit & Loss", level: "secondary" },
      { name: "Bank Reconciliation", level: "secondary" },
      { name: "Financial Reporting", level: "secondary" }
    ]
  },
  {
    id: "compliance",
    title: "Compliance",
    description: "AML, KYC, and regulatory compliance workflows with audit-ready controls.",
    skills: [
      { name: "AML", level: "core", icon: "ShieldAlert", description: "ANTI-MONEY LAUNDERING" },
      { name: "KYC", level: "core", icon: "ShieldCheck", description: "KNOW YOUR CUSTOMER" },
      { name: "KYB", level: "core", icon: "Building2", description: "KNOW YOUR BUSINESS" },
      { name: "FIU", level: "core", icon: "Landmark", description: "FINANCIAL INTELLIGENCE UNIT" },
      { name: "STR", level: "core", icon: "FileWarning", description: "SUSPICIOUS TRANSACTION REPORT" },
      { name: "ISTR", level: "core", icon: "ClipboardList", description: "INTERNAL STR WORKFLOW" },
      { name: "Four-Eye Authorization", level: "core", icon: "Eye", description: "DUAL APPROVAL CONTROL" },
      { name: "Name Screening", level: "secondary" },
      { name: "Risk Profiling", level: "secondary" },
      { name: "Transaction Monitoring", level: "secondary" },
      { name: "Audit Trails", level: "secondary" },
      { name: "Regulatory Reporting", level: "secondary" }
    ]
  },
  {
    id: "digital-banking",
    title: "Digital Banking",
    description: "Digital identity, remote verification, and customer onboarding journeys.",
    skills: [
      { name: "VKYC", level: "core", icon: "Video", description: "VIDEO KYC SYSTEMS" },
      { name: "Re-KYC", level: "core", icon: "RefreshCw", description: "KYC REFRESH CYCLES" },
      { name: "OCR", level: "core", icon: "ScanText", description: "DOCUMENT RECOGNITION" },
      { name: "UAE Pass", level: "core", icon: "IdCard", description: "DIGITAL IDENTITY" },
      { name: "Customer Onboarding", level: "core", icon: "UserPlus", description: "ACCOUNT ACQUISITION" },
      { name: "Agentless VKYC", level: "secondary" },
      { name: "Identity Verification", level: "secondary" },
      { name: "API Integration", level: "secondary" },
      { name: "Onboarding Funnels", level: "secondary" },
      { name: "Digital Workflows", level: "secondary" }
    ]
  },
  {
    id: "payroll",
    title: "Payroll",
    description: "Wage protection, salary processing, and regulatory file generation.",
    skills: [
      { name: "WPS", level: "core", icon: "Banknote", description: "WAGE PROTECTION SYSTEM" },
      { name: "Salary Processing", level: "core", icon: "Wallet", description: "AUTOMATED PAYROLL" },
      { name: "Regulatory File Generation", level: "core", icon: "FileSpreadsheet", description: "CENTRAL BANK FILES" },
      { name: "Employee Master Data", level: "secondary" },
      { name: "Refund Handling", level: "secondary" },
      { name: "Rejected Transactions", level: "secondary" },
      { name: "Pension Processing", level: "secondary" },
      { name: "Batch Exception Handling", level: "secondary" }
    ]
  },
  {
    id: "technology",
    title: "Technology",
    description: "API integrations and enterprise stacks behind the products I analyse.",
    skills: [
      { name: "API Integration", level: "core", icon: "Plug", description: "SYSTEM CONNECTIVITY" },
      { name: "ASP.NET", level: "core", icon: "FileCode", description: "ENTERPRISE WEB APPS" },
      { name: ".NET Framework", level: "core", icon: "Cpu", description: "RUNTIME PLATFORM" },
      { name: "Oracle Database", level: "core", icon: "Database", description: "DATA LAYER" },
      { name: "Mock Bank APIs", level: "secondary" },
      { name: "Payment Gateways", level: "secondary" },
      { name: "Zoho Bigin CRM", level: "secondary" },
      { name: "Batch / Real-Time Processing", level: "secondary" }
    ]
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Dashboards and reports that turn operational data into decisions.",
    skills: [
      { name: "Power BI", level: "core", icon: "FaChartLine", description: "INTERACTIVE DASHBOARDS" },
      { name: "Student Analytics", level: "core", icon: "PieChart", description: "ACADEMIC PERFORMANCE" },
      { name: "Financial Reporting", level: "core", icon: "FileBarChart", description: "REGULATORY & MGMT REPORTS" },
      { name: "MIS", level: "core", icon: "LayoutDashboard", description: "MANAGEMENT INFORMATION" },
      { name: "Progress Monitoring", level: "secondary" },
      { name: "Learning-Gap Analysis", level: "secondary" },
      { name: "KPI Tracking", level: "secondary" },
      { name: "Complaint Tracking", level: "secondary" }
    ]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "AI-powered products — chatbots, training data, deployment, and adoption.",
    skills: [
      { name: "Chatbots", level: "core", icon: "Bot", description: "CONVERSATIONAL AI" },
      { name: "AI-driven Applications", level: "core", icon: "Cpu", description: "AI PRODUCT DEMOS" },
      { name: "Training Data", level: "core", icon: "Database", description: "MODEL KNOWLEDGE BASE" },
      { name: "Deployment", level: "core", icon: "Rocket", description: "EMBED & GO LIVE" },
      { name: "Agent Configuration", level: "secondary" },
      { name: "Chatbot Personality", level: "secondary" },
      { name: "Usage Management", level: "secondary" },
      { name: "Classroom AI Integration", level: "secondary" }
    ]
  }
];
