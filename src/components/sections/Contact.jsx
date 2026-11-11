import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactItem = ({ icon: Icon, label, value, href, isPrimary = false }) => (
    <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cn(
            "group flex items-center justify-between p-6 md:p-8 w-full border-b border-white/5 transition-all duration-300",
            "hover:bg-neon-green/5 hover:pl-10",
            isPrimary ? "border-t border-white/5" : ""
        )}
    >
        <div className="flex items-center gap-6">
            <div className={cn(
                "p-3 rounded-md transition-colors duration-300",
                "text-gray-500 group-hover:text-neon-green bg-white/5 group-hover:bg-neon-green/10"
            )}>
                <Icon size={24} />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-1 group-hover:text-neon-green/80 transition-colors">
                    {label}
                </span>
                <span className={cn(
                    "text-xl md:text-3xl font-display font-bold transition-colors duration-300",
                    "text-gray-400 group-hover:text-white"
                )}>
                    {value}
                </span>
            </div>
        </div>

        <div className="text-gray-700 group-hover:text-neon-green transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={24} />
        </div>
    </a>
);

const Contact = () => {
    return (
        <Section id="contact" className="bg-dark-bg py-32 flex flex-col justify-center min-h-[50vh]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-20">
                    <TextReveal>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Let's Solve <br />
                            <span className="text-neon-green">The Right Problem</span>.
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl font-mono max-w-2xl leading-relaxed">
                            Open for Business Analyst, Data Analyst, and product roles.
                            <br />
                            Direct channels only. No forms.
                        </p>
                    </TextReveal>
                </div>

                <div className="flex flex-col border-t border-b border-white/5">
                    <ContactItem
                        icon={Mail}
                        label="Email"
                        value="samuelroy.cr@gmail.com"
                        href="mailto:samuelroy.cr@gmail.com"
                        isPrimary={true}
                    />

                    <ContactItem
                        icon={Linkedin}
                        label="Professional Network"
                        value="LinkedIn"
                        href="https://www.linkedin.com/in/samuelroyp/"
                    />

                    <ContactItem
                        icon={Github}
                        label="Code Repository"
                        value="GitHub"
                        href="https://github.com/samuelroycr-ai"
                    />

                    <ContactItem
                        icon={FaWhatsapp}
                        label="Direct Message"
                        value="WhatsApp"
                        href="https://api.whatsapp.com/send/?phone=918301968137&text&type=phone_number&app_absent=0"
                    />

                    <ContactItem
                        icon={FileText}
                        label="Professional Profile"
                        value="Add Resume Link"
                        href="#contact"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Contact;
