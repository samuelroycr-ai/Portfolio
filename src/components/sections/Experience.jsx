import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';

const ExperienceItem = ({ job, index, activeId, setActive }) => {
    const isActive = activeId === index;
    const isDimmed = activeId !== null && !isActive;

    return (
        <div
            className={cn(
                "relative pl-8 md:pl-0 group transition-all duration-300",
                isDimmed ? "opacity-30 blur-[0.5px]" : "opacity-100"
            )}
            onMouseEnter={() => setActive(index)}
        >
            {isActive && (
                <motion.div
                    layoutId="experience-highlight"
                    className="absolute -inset-x-4 -inset-y-4 bg-neon-green/[0.03] rounded-lg -z-10 hidden md:block"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <div className="md:grid md:grid-cols-[180px_auto] gap-8 md:gap-12 relative">

                <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px bg-white/5 md:translate-x-[24px]">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-green/0 via-neon-green/20 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="hidden md:flex flex-col items-end pt-1">
                    <span className="font-mono text-xs font-medium text-neon-green/80 group-hover:text-neon-green transition-colors">
                        {job.period}
                    </span>
                    <span className="mt-1 text-[10px] font-mono uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
                        {job.location}
                    </span>
                </div>

                <div className="absolute left-[-5px] md:left-[199px] top-2.5 w-2 h-2 rounded-full bg-dark-bg border border-gray-700 z-20 transition-all duration-300 group-hover:border-neon-green group-hover:bg-neon-green group-hover:shadow-[0_0_8px_rgba(204,255,0,0.4)] md:translate-x-[4px]" />

                <div className="relative group-hover:translate-x-1 transition-transform duration-300">
                    <div className="md:hidden flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                        <span className="font-mono text-neon-green text-xs">{job.period}</span>
                        <span className="text-[10px] uppercase text-gray-500">{job.location}</span>
                    </div>

                    <header className="mb-6">
                        <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-neon-green transition-colors duration-300">
                            {job.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                            <span>at</span>
                            <span className="text-white font-medium tracking-wide">
                                {job.company}
                            </span>
                        </div>
                    </header>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl font-light">
                        {job.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                        {job.responsibilities.map((task, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group/li">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 group-hover/li:bg-neon-green transition-colors" />
                                <span className="group-hover/li:text-gray-300 transition-colors leading-relaxed">
                                    {task}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-500">
                        {job.stack.map((tech, i) => (
                            <span key={i} className="px-2 py-1 border border-white/5 rounded hover:border-white/10 hover:text-gray-300 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const [activeId, setActiveId] = useState(null);

    const jobs = [
        {
            role: 'Business Analyst',
            company: 'Distinct Infotech Solutions',
            period: 'NOV 2026 — PRESENT',
            current: true,
            location: 'Kochi, Kerala',
            description: 'Working in the Engineering & Development department as a Business Analyst across enterprise financial software, anti-money laundering applications, and regulatory payroll systems.',
            responsibilities: [
                'Enterprise product analysis across financial software, AML applications, and regulatory payroll systems',
                'Building product knowledge in core banking, remittance, forex, treasury, financial accounting, General Ledger, and regulatory reporting through the CASMEX portfolio',
                'Developing domain understanding of AML workflows, customer risk profiling, transaction screening, suspicious transaction reporting, salary processing, and UAE Wage Protection System requirements'
            ],
            stack: ['CASMEX', 'iShield AML', 'WPS Payroll', 'AML / KYC', 'General Ledger', 'Regulatory Reporting'],
        },
        {
            role: 'Business Analyst / Scrum Master',
            company: 'PixDynamics (Pixl.ai)',
            period: 'AUG 2025 — AUG 2026',
            current: false,
            location: 'Kochi, Kerala',
            description: 'Handled business analysis and Scrum Master responsibilities on banking, FinTech, and technology projects — from requirements and agile ceremonies through UAT and release sign-off.',
            responsibilities: [
                'Managed requirement gathering, scope analysis, BRD and FSD preparation, workflow documentation, stakeholder discussions, internal reviews, and client approvals',
                'Ran Scrum ceremonies — epics, user stories, sprint backlogs, daily stand-ups, sprint planning, reviews, demos, and retrospectives',
                'Coordinated development, QA, and stakeholder activities in Jira — monitoring task updates, dependencies, blockers, and delivery timelines',
                'Coordinated testing sprints, functional validation, bug reporting, client UAT, feedback follow-up, and final sign-off',
                'Supported bank-led vendor analysis exercises involving EY and KPMG — vendor information gathering, documentation, and functional/technical assessment coordination',
                'Coordinated with AI, DevOps, development, and QA teams; worked with Zoho Bigin CRM and prepared Power BI project progress reports'
            ],
            stack: ['BRD / FSD', 'Jira', 'Scrum', 'UAT', 'VKYC', 'UAE Pass', 'Power BI'],
        },
        {
            role: 'Assistant Sales Manager',
            company: 'Wexl Edu Tech',
            period: 'JUN 2024 — FEB 2025',
            current: false,
            location: 'Agra & Noida',
            description: 'Drove school business development and product adoption for AI-powered education solutions — from lead engagement and demonstrations to workshops, implementation, and teacher training.',
            responsibilities: [
                'Managed qualified leads from pre-sales, engaged school management and decision-makers, understood requirements, presented solutions, and maintained follow-ups through the sales cycle',
                'Developed business relationships across Agra and Noida schools — product presentations, negotiations, prospect engagement, and conversion of qualified opportunities',
                'Demonstrated AI-powered education solutions and explained digital learning, AI integration, modern teaching methods, and classroom transformation',
                'Organised school meetings, workshops, and product sessions with principals, teachers, and school representatives',
                'Promoted data-driven academic decision-making through student performance reports, learning-gap identification, and analytics-based insights',
                'Coordinated on-site implementation with school management and delivered face-to-face teacher training on product features and usage'
            ],
            stack: ['Product Demos', 'Workshops', 'Teacher Training', 'Sales Analytics', 'Client Engagement'],
        }
    ];

    return (
        <Section
            id="work"
            className="bg-dark-bg py-24"
            onMouseLeave={() => setActiveId(null)}
        >
            <div className="container mx-auto px-4 md:px-12 max-w-5xl">
                <div className="mb-24 flex items-end justify-between border-b border-white/5 pb-6">
                    <TextReveal>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white selection:bg-neon-green selection:text-black">
                            Work <span className="text-gray-600">Experience</span>
                        </h3>
                    </TextReveal>
                    <div className="hidden md:flex items-center gap-3 text-xs font-mono text-gray-600">
                        <span>Status:</span>
                        <div className="flex items-center gap-1.5 text-neon-green">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                            <span>ACTIVE</span>
                        </div>
                    </div>
                </div>

                <div className="relative space-y-16">
                    <div className="hidden md:block absolute left-[204px] top-0 bottom-0 w-px bg-white/5" />

                    {jobs.map((job, index) => (
                        <ExperienceItem
                            key={index}
                            job={job}
                            index={index}
                            activeId={activeId}
                            setActive={setActiveId}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
