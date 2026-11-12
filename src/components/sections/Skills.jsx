import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame, useScroll } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { skillCategories } from '../../config/skills';
import {
    SiPython, SiPandas, SiNumpy, SiPlotly,
    SiJupyter, SiScikitlearn, SiKaggle, SiPostgresql
} from 'react-icons/si';
import { FaChartLine, FaChartArea, FaFileExcel } from 'react-icons/fa';
import { DiMsqlServer } from 'react-icons/di';
import {
    FileText, FileCode, ListTodo, CheckCircle, Search, Calendar, Users,
    Monitor, RefreshCw, Kanban, BarChart3, PieChart, Activity, TrendingUp,
    Target, FlaskConical, GitBranch, Link, Sigma, LayoutDashboard, Eye, FileBarChart,
    Database, Combine, Download, Boxes, Share2, GitMerge, Trees, Gauge,
    ShieldCheck, UserPlus, MessageSquare, Contact, Plug, Cpu,
    Workflow, Landmark, ArrowLeftRight, Coins, BookOpen, ShieldAlert,
    Building2, FileWarning, ClipboardList, Video, ScanText, IdCard,
    FileSpreadsheet, Bot, Rocket
} from 'lucide-react';

const ICON_MAP = {
    FaChartLine,
    SiPython,
    SiPandas,
    SiNumpy,
    SiPlotly,
    FaChartArea,
    SiJupyter,
    SiScikitlearn,
    SiKaggle,
    FaFileExcel,
    SiPostgresql,
    DiMsqlServer,
    FileText,
    FileCode,
    ListTodo,
    CheckCircle,
    Search,
    Calendar,
    Users,
    Monitor,
    RefreshCw,
    Kanban,
    BarChart3,
    PieChart,
    Activity,
    TrendingUp,
    Target,
    FlaskConical,
    GitBranch,
    Link,
    Sigma,
    LayoutDashboard,
    Eye,
    FileBarChart,
    Database,
    Combine,
    Download,
    Boxes,
    Share2,
    GitMerge,
    Trees,
    Gauge,
    ShieldCheck,
    UserPlus,
    MessageSquare,
    Contact,
    Plug,
    Cpu,
    Workflow,
    Landmark,
    ArrowLeftRight,
    Coins,
    BookOpen,
    ShieldAlert,
    Building2,
    FileWarning,
    ClipboardList,
    Video,
    ScanText,
    IdCard,
    FileSpreadsheet,
    Bot,
    Rocket
};

const HOVER_RADIUS = 200;
const BASE_SCALE = 1.0;
const MAX_SCALE = 1.15;
const MAX_SHIFT = 10;

const TechCard = ({ name, description, icon: Icon, color, category, activeCategory, setActiveCategory, mouseX, mouseY }) => {
    const ref = useRef(null);
    const [rect, setRect] = useState(null);

    const scale = useSpring(BASE_SCALE, { stiffness: 150, damping: 20 });
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    const isSystemActive = activeCategory === category;
    const isOtherActive = activeCategory && !isSystemActive;

    useEffect(() => {
        const updateRect = () => {
            if (ref.current) {
                const r = ref.current.getBoundingClientRect();
                setRect({
                    centerX: r.left + r.width / 2,
                    centerY: r.top + r.height / 2
                });
            }
        };
        updateRect();
        window.addEventListener('resize', updateRect);
        window.addEventListener('scroll', updateRect);
        return () => {
            window.removeEventListener('resize', updateRect);
            window.removeEventListener('scroll', updateRect);
        };
    }, []);

    useAnimationFrame(() => {
        if (!rect) return;

        const mx = mouseX.get();
        const my = mouseY.get();

        if (mx === -1000) {
            scale.set(BASE_SCALE);
            x.set(0);
            y.set(0);
            return;
        }

        const dx = mx - rect.centerX;
        const dy = my - rect.centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < HOVER_RADIUS) {
            const intensity = 1 - Math.pow(distance / HOVER_RADIUS, 2);
            scale.set(BASE_SCALE + (MAX_SCALE - BASE_SCALE) * intensity);
            x.set((dx / distance) * MAX_SHIFT * intensity);
            y.set((dy / distance) * MAX_SHIFT * intensity);
        } else {
            scale.set(BASE_SCALE);
            x.set(0);
            y.set(0);
        }
    });

    return (
        <motion.div
            ref={ref}
            style={{ scale, x, y, zIndex: isSystemActive ? 50 : 1 }}
            onMouseEnter={() => setActiveCategory(category)}
            onMouseLeave={() => setActiveCategory(null)}
            className={cn(
                "group relative overflow-hidden rounded-md bg-zinc-900 border border-white/5 flex flex-col items-center justify-center p-2.5 transition-colors duration-300 cursor-none h-[90px] will-change-transform",
                isSystemActive ? "border-white/20 shadow-lg" : "hover:border-white/10 hover:bg-white/[0.02]",
                isOtherActive ? "opacity-30 grayscale blur-[0.5px]" : "opacity-100"
            )}
        >
            <div
                className={cn("absolute bottom-0 left-0 h-[2px] transition-all duration-300", isSystemActive ? "w-full opacity-100" : "w-0 opacity-0")}
                style={{ backgroundColor: color }}
            />

            <div className="relative z-10 mb-1 flex items-center justify-center">
                <Icon className="text-2xl md:text-3xl transition-colors duration-300" style={{ color: isSystemActive || isOtherActive === false ? (isSystemActive ? color : '#e5e7eb') : '#525252' }} />
            </div>

            <h3 className={cn(
                "relative z-10 text-[9px] uppercase tracking-wider font-semibold transition-colors duration-300 text-center leading-tight mb-0.5",
                isSystemActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
            )}>
                {name}
            </h3>

            <span className={cn(
                "relative z-10 text-[6.5px] font-mono tracking-wider font-medium text-center leading-none transition-colors duration-300",
                isSystemActive ? "text-gray-400" : "text-gray-600 group-hover:text-gray-500"
            )}>
                {description}
            </span>
        </motion.div>
    );
};

const CategoryGroup = ({ title, category, skills, color, activeCategory, setActiveCategory, mouseX, mouseY }) => {
    const coreSkills = skills.filter(s => s.level === 'core');
    const secondarySkills = skills.filter(s => s.level === 'secondary');

    return (
        <div className="flex flex-col h-full">
            <h4 className={cn(
                "text-[10px] font-mono uppercase tracking-widest mb-3 flex items-center gap-2",
                activeCategory === category ? "text-white" : "text-gray-600"
            )}>
                <span className={cn("w-1.5 h-1.5 rounded-full transition-colors", activeCategory === category ? "animate-pulse" : "bg-gray-800")} style={{ backgroundColor: activeCategory === category ? color : undefined }}></span>
                {title}
            </h4>

            {coreSkills.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {coreSkills.map((skill, idx) => {
                        const IconComponent = ICON_MAP[skill.icon] || Cpu;
                        return (
                            <TechCard
                                key={idx}
                                name={skill.name}
                                description={skill.description}
                                icon={IconComponent}
                                color={color}
                                category={category}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                        );
                    })}
                </div>
            )}

            {secondarySkills.length > 0 && (
                <div className={cn(
                    "flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/5",
                    activeCategory === category ? "border-white/10" : "border-white/5"
                )}>
                    {secondarySkills.map((skill, idx) => (
                        <span
                            key={idx}
                            className={cn(
                                "px-2 py-0.5 text-[9px] font-mono text-gray-500 hover:text-white bg-zinc-900/60 border border-white/5 rounded transition-all duration-300 select-none cursor-default",
                                activeCategory === category ? "text-gray-400 border-white/10" : "text-gray-500"
                            )}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const containerRef = useRef(null);

    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    const bgX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const bgY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const isCoarsePointer = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches,
        []
    );

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
        mouseX.set(-1000);
        mouseY.set(-1000);
    };

    const bgGradient = useTransform([bgX, bgY, scrollYProgress], ([x, y, progress]) => {
        const el = containerRef.current;
        if (!el) return 'none';
        const rect = el.getBoundingClientRect();

        let localX;
        let localY;

        if (x !== -1000) {
            localX = x - rect.left;
            localY = y - rect.top;
        } else if (isCoarsePointer) {
            localX = rect.width / 2;
            localY = rect.height * progress;
        } else {
            return 'none';
        }

        const alpha = isCoarsePointer ? 0.07 : 0.04;
        return `radial-gradient(600px circle at ${localX}px ${localY}px, rgba(20, 255, 100, ${alpha}), transparent 40%)`;
    });

    const col1Ids = ["business-analysis", "project-management", "banking-finance", "compliance"];
    const leftCategories = skillCategories.filter(c => col1Ids.includes(c.id));
    const rightCategories = skillCategories.filter(c => !col1Ids.includes(c.id));

    return (
        <Section
            id="skills"
            className="bg-dark-bg min-h-screen flex items-center relative overflow-hidden"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <motion.div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{ background: bgGradient }}
            />

            <div className="max-w-6xl mx-auto px-4 py-12 relative z-10 w-full">
                <TextReveal>
                    <div className="mb-12 border-b border-white/5 pb-6 flex items-end justify-between">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-none">
                                Skills &amp; <span className="text-gray-500">Expertise</span>
                            </h3>
                        </div>
                    </div>
                </TextReveal>

                <div className="hidden md:grid grid-cols-2 gap-x-12 items-start">
                    <div className="flex flex-col gap-y-12">
                        {leftCategories.map((category) => (
                            <CategoryGroup
                                key={category.id}
                                title={category.title}
                                category={category.id}
                                skills={category.skills}
                                color="#CCFF00"
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-12">
                        {rightCategories.map((category) => (
                            <CategoryGroup
                                key={category.id}
                                title={category.title}
                                category={category.id}
                                skills={category.skills}
                                color="#CCFF00"
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-y-12 md:hidden">
                    {skillCategories.map((category) => (
                        <CategoryGroup
                            key={category.id}
                            title={category.title}
                            category={category.id}
                            skills={category.skills}
                            color="#CCFF00"
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
