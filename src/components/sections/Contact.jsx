import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { Mail, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactItem = ({ icon: Icon, label, value, href, isPrimary = false, download }) => (
    <a
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cn(
            "group flex items-center justify-between gap-3 p-4 sm:p-6 md:p-8 w-full border-b border-white/5 transition-all duration-300",
            "hover:bg-neon-green/5 sm:hover:pl-10",
            isPrimary ? "border-t border-white/5" : ""
        )}
    >
        <div className="flex items-center gap-3 sm:gap-6 min-w-0 flex-1">
            <div className={cn(
                "p-2 sm:p-3 rounded-md transition-colors duration-300 shrink-0",
                "text-gray-500 group-hover:text-neon-green bg-white/5 group-hover:bg-neon-green/10"
            )}>
                <Icon size={20} className="sm:hidden" />
                <Icon size={24} className="hidden sm:block" />
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-[10px] sm:text-xs font-mono text-gray-600 uppercase tracking-widest mb-1 group-hover:text-neon-green/80 transition-colors truncate">
                    {label}
                </span>
                <span className={cn(
                    "text-sm sm:text-xl md:text-3xl font-display font-bold transition-colors duration-300 break-all sm:break-words",
                    "text-gray-400 group-hover:text-white"
                )}>
                    {value}
                </span>
            </div>
        </div>

        <div className="text-gray-700 group-hover:text-neon-green transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0">
            <ArrowUpRight size={20} className="sm:hidden" />
            <ArrowUpRight size={24} className="hidden sm:block" />
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
                        icon={FaWhatsapp}
                        label="Direct Message"
                        value="WhatsApp"
                        href="https://api.whatsapp.com/send/?phone=918301968137&text&type=phone_number&app_absent=0"
                    />

                    <ContactItem
                        icon={FileText}
                        label="Professional Profile"
                        value="Download Resume"
                        href="/Samuel_Roy_Resume.pdf"
                        download
                    />
                </div>
            </div>
        </Section>
    );
};

export default Contact;
