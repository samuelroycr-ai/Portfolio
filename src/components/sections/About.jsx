import React from 'react';
import { motion, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Card from '../ui/Card';
import SystemGraph from '../ui/SystemGraph';
import { useCursorEngine } from '../../hooks/useCursorEngine';
import { FileText, Workflow, BarChart3, Users } from 'lucide-react';

const MagneticTag = ({ children, className }) => {
    const { smoothedX, smoothedY } = useCursorEngine();

    const x = useTransform(smoothedX, value => (value - window.innerWidth / 2) * 0.01);
    const y = useTransform(smoothedY, value => (value - window.innerHeight / 2) * 0.01);

    return (
        <motion.span style={{ x, y }} className={className}>
            {children}
        </motion.span>
    );
};

const About = () => {
    const stats = [
        { icon: FileText, label: 'Documentation', value: 'BRD / FSD' },
        { icon: Workflow, label: 'Methodology', value: 'Agile Scrum' },
        { icon: BarChart3, label: 'Analytics', value: 'BI & SQL' },
        { icon: Users, label: 'Stakeholders', value: 'End-to-End' },
    ];

    return (
        <Section id="about" className="bg-dark-bg relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="relative z-10">
                    <TextReveal>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                            Bridging <span className="text-neon-green">Business Needs</span> <br />
                            And Data-Driven Solutions.
                        </h3>
                    </TextReveal>

                    <TextReveal delay={0.2}>
                        <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
                            <p>
                                I am a <strong>Business Analyst</strong> focused on turning ambiguous stakeholder goals into <MagneticTag className="text-neon-green font-medium inline-block relative cursor-none">clear requirements</MagneticTag>, mapped processes, and measurable outcomes — from BRDs and FSDs to UAT sign-off.
                            </p>

                            <p>
                                I combine rigorous <strong>requirements engineering</strong> with hands-on <MagneticTag className="text-neon-green font-medium inline-block relative cursor-none">data analytics</MagneticTag> — SQL, Python, and Power BI — so decisions are backed by evidence, not assumption.
                            </p>

                            <p className="text-sm border-l-2 border-neon-green/30 pl-4 italic">
                                "The goal isn't just to document what was asked, but to solve the right problem — and prove it with data."
                            </p>
                        </div>
                    </TextReveal>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-10">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-3 sm:p-4 flex items-center gap-2.5 sm:gap-4 hover:border-neon-green/40 transition-colors group min-w-0">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-neon-green/10 transition-colors shrink-0">
                                    <stat.icon className="text-neon-green" size={20} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="font-display font-bold text-white text-sm sm:text-lg leading-snug break-words">{stat.value}</span>
                                    <span className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">{stat.label}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Visual Node */}
                <div className="flex justify-center md:justify-end relative">
                    <SystemGraph className="w-full max-w-sm aspect-square md:w-[400px] md:h-[400px]" />
                </div>

            </div>
        </Section>
    );
};

export default About;
