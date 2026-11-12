import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Section from '../ui/Section';
import Button from '../ui/Button';
import TextReveal from '../ui/TextReveal';
import { Linkedin, ArrowRight, Mail, Download } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import OrbitalWrapper from '../ui/OrbitalWrapper';

const ParticleField = (props) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#CCFF00"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const Hero = () => {
    const handleNav = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative" fullWidth>
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 bg-dark-bg">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleField />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-6 md:pt-0">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

                    {/* Text Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <TextReveal delay={0.2}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 text-white">
                                Samuel <br /> Roy
                            </h1>
                        </TextReveal>

                        <TextReveal delay={0.4}>
                            <h2 className="text-xl md:text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-white mb-6 animate-pulse">
                                Business Analyst &amp; Data Analytics Professional
                            </h2>
                        </TextReveal>

                        <TextReveal delay={0.5}>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center text-sm md:text-base font-mono text-neon-green mb-8">
                                <span>BRD / FSD</span>
                                <span className="text-gray-600">•</span>
                                <span>Agile Scrum</span>
                                <span className="text-gray-600">•</span>
                                <span>Power BI</span>
                                <span className="text-gray-600">•</span>
                                <span>SQL &amp; Python</span>
                            </div>
                        </TextReveal>

                        <TextReveal delay={0.6}>
                            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                                Turning business needs into <span className="text-white font-medium">clear requirements, smarter processes, and data-driven decisions</span> across digital banking, onboarding, and analytics projects.
                            </p>
                        </TextReveal>

                        <TextReveal delay={0.8}>
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                                <Button
                                    onClick={() => handleNav('projects')}
                                    size="lg"
                                    className="group w-full md:w-auto"
                                >
                                    View Projects
                                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>

                                <Button
                                    onClick={() => handleNav('contact')}
                                    variant="secondary"
                                    size="lg"
                                    className="group w-full md:w-auto"
                                >
                                    Contact Me
                                </Button>

                                <Button
                                    href="/Samuel_Roy_Resume.pdf"
                                    download
                                    variant="secondary"
                                    size="lg"
                                    className="group w-full md:w-auto"
                                >
                                    Resume
                                    <Download size={18} className="ml-2 transition-transform group-hover:translate-y-0.5" />
                                </Button>

                                <div className="flex items-center gap-6 mt-4 md:mt-0">
                                    <a href="https://api.whatsapp.com/send/?phone=918301968137&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors" aria-label="WhatsApp">
                                        <FaWhatsapp size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/samuelroyp/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors" aria-label="LinkedIn">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="mailto:samuelroy.cr@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors" aria-label="Email">
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </TextReveal>

                        {/* Trust Signals Strip */}
                        <TextReveal delay={1.0}>
                            <div className="border-t border-white/10 pt-6">
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-3 text-xs md:text-sm font-mono text-gray-500 uppercase tracking-wider">
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>Requirements Gathering</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>Process Mapping</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>UAT</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>Data Visualization</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>Stakeholder Management</span>
                                </div>
                            </div>
                        </TextReveal>
                    </div>

                    {/* Profile Image */}
                    <div className="md:w-auto flex justify-center fade-in-up pl-0 md:pl-10">
                        <OrbitalWrapper
                            className="relative group w-[240px] h-[320px] md:w-[300px] md:h-[400px] cursor-default focus:outline-none"
                            tabIndex={0}
                            aria-label="Profile Image Interaction"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-neon-green/10 to-neon-green/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 group-hover:blur-3xl group-focus:opacity-70 group-focus:blur-3xl transition-all duration-700 ease-out"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-neon-green to-transparent rounded-[2rem] blur-lg opacity-0 group-hover:opacity-40 group-focus:opacity-40 transition-all duration-500"></div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-neon-green/50 group-focus:border-neon-green/50 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-focus:scale-[1.03] group-focus:-translate-y-2 shadow-2xl group-hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.3)] bg-dark-bg z-10">
                                <img
                                    src="/profile.jpg"
                                    alt="Samuel Roy - Business Analyst"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-focus:scale-110 group-focus:rotate-12">
                                <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-dark-bg border border-neon-green/30 rounded-xl shadow-lg shadow-neon-green/10 group-hover:border-neon-green group-hover:shadow-neon-green/30 transition-all duration-300">
                                    <span className="text-neon-green text-xs md:text-sm font-mono font-bold">BA</span>
                                </div>
                            </div>
                        </OrbitalWrapper>
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs font-mono text-gray-500">SCROLL</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-neon-green to-transparent"></div>
            </div>
        </Section >
    );
};

export default Hero;
