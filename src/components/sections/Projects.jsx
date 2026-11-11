import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { ArrowUpRight, GraduationCap, BarChart3, Presentation, Landmark, Video, UserCheck, Fingerprint, IdCard, Bot, FileSearch, Banknote, ShieldAlert, Wallet } from 'lucide-react';

const PROJECTS = [
    {
        id: 'ai-education',
        title: 'AI-Powered Education Solutions',
        subtitle: 'AI-Based Educational Products',
        category: 'EDUCATION TECHNOLOGY',
        featured: false,
        description: 'Demonstrated AI-based educational products to schools, explained digital learning applications, and supported school management and teachers in understanding technology-enabled teaching methods.',
        capabilities: [
            'Product demonstrations of AI-based educational products for school management',
            'Explained digital learning applications and technology-enabled teaching methods',
            'Guided teachers and principals through AI integration in modern classrooms',
            'Presented solutions aligned with each school’s business requirements'
        ],
        technologies: ['Product Demos', 'Digital Learning', 'AI Integration', 'Presentations'],
        concepts: ['EdTech', 'Classroom Transformation', 'Teacher Enablement'],
        link: '#projects',
        icon: GraduationCap
    },
    {
        id: 'student-analytics',
        title: 'Student Performance Analytics',
        subtitle: 'Academic Data & Insights',
        category: 'EDUCATION TECHNOLOGY',
        featured: false,
        description: 'Introduced academic data analytics through student assessment reports, performance monitoring, learning-gap identification, and data-driven insights to support academic improvement.',
        capabilities: [
            'Student assessment reports and performance monitoring',
            'Learning-gap identification from academic data',
            'Data-driven insights for academic decision-making',
            'Progress reporting for school management'
        ],
        technologies: ['Assessment Reports', 'Performance Monitoring', 'Analytics', 'MIS Reporting'],
        concepts: ['Student Analytics', 'Data-Driven Decisions', 'Academic Improvement'],
        link: '#projects',
        icon: BarChart3
    },
    {
        id: 'school-implementation',
        title: 'School Implementation & Teacher Training',
        subtitle: 'On-Site Rollout & Adoption',
        category: 'EDUCATION TECHNOLOGY',
        featured: false,
        description: 'Coordinated on-site implementation activities with school management and teachers, communicated feedback to development teams, and conducted practical product training to support adoption.',
        capabilities: [
            'On-site implementation coordination with school management',
            'Requirement and feedback communication to development teams',
            'Practical face-to-face product training for teachers',
            'Adoption support throughout the rollout'
        ],
        technologies: ['Implementation Coordination', 'User Training', 'Feedback Loops'],
        concepts: ['Change Enablement', 'Product Adoption', 'Stakeholder Training'],
        link: '#projects',
        icon: Presentation
    },
    {
        id: 'sib-core-banking',
        title: 'South Indian Bank – Core Banking & Onboarding',
        subtitle: 'Core Banking & ETB/NTB Workflows',
        category: 'CORE BANKING / DIGITAL BANKING',
        featured: true,
        description: 'Worked on SIB Core Banking and ETB/NTB onboarding workflows — coordinating requirements, development activities, mock bank API integration, testing, and project progress through bank UAT.',
        capabilities: [
            'Requirements and development coordination for core banking workflows',
            'ETB / NTB digital onboarding process support',
            'Mock bank API integration and testing coordination',
            'Project progress tracking through bank UAT'
        ],
        technologies: ['Core Banking', 'ETB / NTB Onboarding', 'API Integration', 'UAT', 'Jira'],
        concepts: ['Bank Workflows', 'Digital Onboarding', 'Delivery Coordination'],
        link: '#projects',
        icon: Landmark
    },
    {
        id: 'acemoney-vkyc',
        title: 'Agentless Video KYC – AceMoney',
        subtitle: 'Remote KYC Verification',
        category: 'DIGITAL KYC / COMPLIANCE',
        featured: false,
        description: 'Worked on an Agentless VKYC solution — supporting business requirements, functional documentation, development coordination, testing, and delivery activities throughout the project lifecycle.',
        capabilities: [
            'Business requirements for agentless video verification flows',
            'Functional documentation and development coordination',
            'Testing activities and delivery tracking',
            'Lifecycle support from discovery through release'
        ],
        technologies: ['VKYC', 'FSD', 'User Stories', 'Testing', 'UAT'],
        concepts: ['Remote Verification', 'Compliance Workflows', 'Delivery'],
        link: '#projects',
        icon: Video
    },
    {
        id: 'ntt-vkyc',
        title: 'Video KYC – NTT DATA',
        subtitle: 'Video KYC Solution Delivery',
        category: 'DIGITAL KYC',
        featured: false,
        description: 'Supported requirement understanding, functional coordination, development follow-ups, testing activities, and delivery coordination for a Video KYC solution.',
        capabilities: [
            'Requirement understanding and functional coordination',
            'Development follow-ups and issue tracking',
            'Testing coordination with delivery teams'
        ],
        technologies: ['VKYC', 'Requirements', 'Functional Coordination', 'Testing'],
        concepts: ['KYC', 'Stakeholder Coordination', 'Quality Assurance'],
        link: '#projects',
        icon: UserCheck
    },
    {
        id: 'uae-pass',
        title: 'UAE Pass – Digital Identity & Onboarding',
        subtitle: 'Digital Identity Authentication',
        category: 'DIGITAL IDENTITY / ONBOARDING',
        featured: false,
        description: 'Worked on UAE Pass authentication and digital onboarding workflows — supporting functional requirements, identity verification processes, integration coordination, and customer onboarding activities.',
        capabilities: [
            'Functional requirements for UAE Pass authentication flows',
            'Identity verification process documentation',
            'Integration coordination across identity and onboarding systems',
            'Customer onboarding workflow support'
        ],
        technologies: ['UAE Pass', 'Identity Verification', 'API Integration', 'Onboarding'],
        concepts: ['Digital Identity', 'Authentication', 'Customer Onboarding'],
        link: '#projects',
        icon: Fingerprint
    },
    {
        id: 'ai-chatbot',
        title: 'AI Chatbot & Conversational Platform',
        subtitle: 'Chatbot Configuration & Deployment',
        category: 'AI / CX AUTOMATION',
        featured: false,
        description: 'Prepared functional documentation covering workspace creation, agent configuration, training data, chatbot personality, appearance, plan selection, deployment, embedding, and usage management.',
        capabilities: [
            'Workspace creation and agent configuration requirements',
            'Training data, personality, and appearance configuration',
            'Plan selection, deployment, and embedding documentation',
            'Usage management and ongoing platform support'
        ],
        technologies: ['Functional Docs', 'Training Data', 'Deployment', 'Embedding'],
        concepts: ['Conversational AI', 'Chatbot Configuration', 'CX Automation'],
        link: '#projects',
        icon: Bot
    },
    {
        id: 'vendor-evaluation',
        title: 'Vendor Evaluation & Payment Assessments',
        subtitle: 'EY & KPMG Vendor Exercises',
        category: 'VENDOR ASSESSMENT',
        featured: false,
        description: 'Assisted banks in vendor analysis exercises involving EY and KPMG — vendor information gathering, documentation, and functional/technical assessment coordination — plus payment gateway and verification vendor evaluations.',
        capabilities: [
            'Vendor information gathering and documentation',
            'Functional and technical assessment coordination',
            'Support for payment gateway and KYC vendor evaluations',
            'Evaluation coordination with bank stakeholders'
        ],
        technologies: ['Vendor Analysis', 'Payment Gateway', 'Assessment Coordination', 'Documentation'],
        concepts: ['Vendor Management', 'Evaluation', 'Bank Engagements'],
        link: '#projects',
        icon: FileSearch
    },
    {
        id: 'casmex',
        title: 'CASMEX – Enterprise Financial Software',
        subtitle: 'Remittance, Forex & Financial Accounting',
        category: 'ENTERPRISE FINANCE',
        featured: false,
        description: 'Enterprise financial application supporting remittance, foreign exchange, multi-currency transactions, cash management, and financial accounting across the CASMEX product portfolio.',
        capabilities: [
            'Remittance & forex: inward/outward remittances, Demand Drafts, EFT, multi-currency transactions',
            'Cash & treasury: cash requests, transfers, cheque processing, bank funding operations',
            'Financial accounting: General Ledger, journal vouchers, Balance Sheet, Profit & Loss',
            'Period-end: bank reconciliation, month/year-end closing, currency revaluation, depreciation',
            'Central bank and country-specific regulatory report generation'
        ],
        technologies: ['ASP.NET WebForms', '.NET Framework 4', 'Oracle Database', 'General Ledger'],
        concepts: ['Cross-Border Payments', 'Treasury', 'Regulatory Reporting', 'Reconciliation'],
        link: '#projects',
        icon: Banknote
    },
    {
        id: 'ishield',
        title: 'iShield – Anti-Money Laundering Application',
        subtitle: 'AML Detection & Compliance',
        category: 'FINANCIAL COMPLIANCE',
        featured: false,
        description: 'AML application integrated with money transfer and remittance systems to support customer risk assessment, transaction monitoring, suspicious activity detection, and regulatory compliance.',
        capabilities: [
            'Alerts & case management with ISTR workflows and compliance officer routing',
            'Customer risk profiling, risk-rating configuration, and forex name screening',
            'Four-Eye Authorization and role-based access controls',
            'FIU regulatory reporting, STR analytics, and AML audit logs'
        ],
        technologies: ['AML', 'Name Screening', 'STR / ISTR', 'Four-Eye Authorization'],
        concepts: ['Risk Assessment', 'Compliance Escalation', 'Audit Trails'],
        link: '#projects',
        icon: ShieldAlert
    },
    {
        id: 'wps',
        title: 'WPS – Wage Protection System',
        subtitle: 'UAE Payroll & Regulatory Disbursals',
        category: 'PAYROLL / COMPLIANCE',
        featured: false,
        description: 'Specialized payroll and regulatory module automating salary processing and wage disbursement while supporting UAE government and Central Bank requirements.',
        capabilities: [
            'Centralized company and employee master data management',
            'Automated salary calculations and disbursement file generation',
            'Refund handling and rejected transaction management',
            'Central Bank-compliant files, pension, and domestic worker salary processing'
        ],
        technologies: ['Salary Processing', 'Regulatory Files', 'WPS', 'Role-Based Authorization'],
        concepts: ['Payroll Workflows', 'Data Validation', 'Exception Handling'],
        link: '#projects',
        icon: Wallet
    }
];

const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    const isFeatured = project.featured;

    return (
        <a
            href={project.link}
            className={cn(
                "group relative block overflow-hidden rounded-xl bg-zinc-900/50 border border-white/5 p-6 md:p-8 transition-all duration-300 outline-none",
                "hover:border-neon-green/20 hover:bg-zinc-900/70 hover:shadow-[0_0_20px_rgba(204,255,0,0.02)]",
                isFeatured ? "col-span-1 md:col-span-2 border-neon-green/10 bg-zinc-900/60 shadow-[0_0_15px_rgba(204,255,0,0.01)]" : ""
            )}
        >
            <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                    {isFeatured && (
                        <span className="px-1.5 py-0.5 rounded bg-neon-green/10 text-neon-green text-[8px] font-mono mr-1">
                            FLAGSHIP PROJECT
                        </span>
                    )}
                    {project.category}
                </span>
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-neon-green transition-colors duration-300" />
                    <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 group-hover:text-neon-green transition-colors duration-300">
                    {project.title}
                </h4>
                <p className="text-xs font-mono text-neon-green/80">
                    {project.subtitle}
                </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light max-w-3xl">
                {project.description}
            </p>

            <div className={cn("grid gap-6", isFeatured ? "lg:grid-cols-2" : "grid-cols-1")}>
                <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-3">
                        Key Contributions
                    </h5>
                    <ul className="space-y-2 mb-2">
                        {project.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400 group/li">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-700 group-hover/li:bg-neon-green transition-colors" />
                                <span className="group-hover/li:text-gray-300 transition-colors leading-relaxed">
                                    {cap}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col justify-between gap-6">
                    <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-3">
                            Tools &amp; Methods
                        </h5>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 text-[9px] font-mono text-gray-400 hover:text-white bg-zinc-950/40 border border-white/5 rounded transition-all duration-300 select-none cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-3">
                            Focus Areas
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                            {project.concepts.map((concept, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 text-[9px] font-mono text-neon-green/60 hover:text-neon-green bg-neon-green/[0.02] border border-neon-green/10 rounded transition-all duration-300 select-none cursor-default"
                                >
                                    {concept}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

const Projects = () => {
    return (
        <Section
            id="projects"
            className="bg-dark-bg py-24 min-h-[50vh] flex flex-col justify-center"
        >
            <div className="w-full max-w-6xl mx-auto px-4 md:px-12">
                <div className="mb-16 border-b border-white/5 pb-6">
                    <TextReveal>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white selection:bg-neon-green selection:text-black">
                            Selected <span className="text-gray-600">Projects</span>
                        </h3>
                    </TextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
