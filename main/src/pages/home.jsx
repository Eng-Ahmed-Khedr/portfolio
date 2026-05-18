import { Badge, Button } from "flowbite-react";
import {
    FaGithub,
    FaLinkedinIn,
    FaRegEnvelope,
    FaAngleDown,
    FaCode,
    FaPalette,
    FaBolt,
} from "react-icons/fa";

import souqlinkImg from "../assets/souqlink.png";
import classyadsImg from "../assets/classyads.png";
import watchShopImg from "../assets/WatchShop.png";
import aboutMeImg from "../assets/aboutMe.png";

export default function Home() {
    return (
        <div className="bg-[#0A1226] min-h-screen text-white font-sans antialiased selection:bg-[#2B7FFF]/30">

            {/* 1. HERO SECTION */}
            <header className="relative text-center h-screen flex justify-center items-center flex-col gap-10 px-4">
                <div className="flex flex-col items-center gap-6 mt-12">
                    <Badge className="rounded-full px-5 py-1.5 bg-[#0A1A39] text-[#4E9BF9] text-sm font-bold border border-[#4E9BF9]/20 shadow-sm animate-fade-in">
                        Frontend Developer
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Hi, I'm <span className="bg-linear-to-r from-[#5A9EFF] via-[#8D7CFF] to-[#AC4AFF] bg-clip-text text-transparent">Ahmed Ayman Khedr</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-[#CAD5E2] max-w-2xl mx-auto leading-relaxed font-medium">
                        I craft beautiful, responsive web experiences with modern technologies and clean code
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 z-10">
                    <Button
                        href="#getInTouch"
                        className="bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white font-semibold rounded-xl px-2 transition-all shadow-lg shadow-[#2B7FFF]/20"
                    >
                        Get In Touch
                    </Button>
                    <Button
                        href="#featuredProjects"
                        className="bg-[#1D293D] hover:bg-[#23324a] text-white font-semibold rounded-xl px-2 border border-[#314158] transition-all"
                    >
                        View Work
                    </Button>
                </div>

                {/* Social Navigation */}
                <nav className="flex gap-6 text-2xl text-[#90A1B9] mt-4">
                    <a href="https://github.com/Developer-Ahmed-Ayman-khedr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmed-ayman-khedr-0ba088266/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:ahmed-ayman-khedr@hotmail.com" className="hover:text-white transition-colors duration-200">
                        <FaRegEnvelope />
                    </a>
                </nav>

                {/* Animated Scroll Indicator */}
                <div className="absolute bottom-10 text-4xl animate-bounce text-white/80">
                    <a href="#aboutMe">
                        <FaAngleDown />
                    </a>
                </div>
            </header>

            {/* 2. ABOUT ME SECTION */}
            <section id="aboutMe" className="py-28 bg-[#0A1226]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-linear-to-r after:from-[#5A9EFF] after:to-[#AC4AFF]">
                            About Me
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="rounded-2xl overflow-hidden h-112.5 bg-[#151F33] shadow-xl border border-[#314158]/30">
                            <img src={aboutMeImg} alt="About Me Portfolio Artwork" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[#CAD5D7] text-lg space-y-6 leading-relaxed font-medium">
                            <p>
                                I'm a passionate frontend developer with experience in building modern web applications.
                                I love turning complex problems into simple, beautiful, and intuitive designs.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to open source
                                projects, or sharing knowledge with the developer community.
                            </p>
                            <p>
                                I believe in writing code that not only works but is also clean, maintainable, and follows best practices.
                            </p>
                        </div>
                    </div>

                    {/* Pillars Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#151F33] p-8 rounded-2xl flex flex-col gap-4 border border-[#314158]/20 hover:border-[#45556C] transition-all duration-300 shadow-md">
                            <div className="bg-[#162847] text-[#50A2FF] text-xl p-3.5 rounded-xl w-fit">
                                <FaCode />
                            </div>
                            <h3 className="text-xl font-bold text-white">Clean Code</h3>
                            <p className="text-[#8798AF] text-sm leading-relaxed font-medium">Writing maintainable, scalable, and well-documented code</p>
                        </div>
                        <div className="bg-[#151F33] p-8 rounded-2xl flex flex-col gap-4 border border-[#314158]/20 hover:border-[#45556C] transition-all duration-300 shadow-md">
                            <div className="bg-[#162847] text-[#50A2FF] text-xl p-3.5 rounded-xl w-fit">
                                <FaPalette />
                            </div>
                            <h3 className="text-xl font-bold text-white">Pixel Perfect</h3>
                            <p className="text-[#8798AF] text-sm leading-relaxed font-medium">Translating designs into flawless user interfaces</p>
                        </div>
                        <div className="bg-[#151F33] p-8 rounded-2xl flex flex-col gap-4 border border-[#314158]/20 hover:border-[#45556C] transition-all duration-300 shadow-md">
                            <div className="bg-[#162847] text-[#50A2FF] text-xl p-3.5 rounded-xl w-fit">
                                <FaBolt />
                            </div>
                            <h3 className="text-xl font-bold text-white">Performance</h3>
                            <p className="text-[#8798AF] text-sm leading-relaxed font-medium">Optimizing for speed and seamless user experiences</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SKILLS & TECHNOLOGIES SECTION */}
            <section id="skills" className="py-28 bg-[#0d1429]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-linear-to-r after:from-[#5A9EFF] after:to-[#AC4AFF]">
                            Skills & Technologies
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Frontend Module */}
                        <div className="bg-[#141E33] p-8 rounded-2xl border border-[#314158] flex flex-col gap-6 shadow-inner">
                            <h3 className="text-xl font-bold text-white border-b border-[#314158] pb-2">Frontend</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["React JS", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 text-sm text-[#E0E6EE] bg-[#233045] border border-[#45556C] rounded-xl font-medium tracking-wide">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools & Ecosystem Module */}
                        <div className="bg-[#141E33] p-8 rounded-2xl border border-[#314158] flex flex-col gap-6 shadow-inner">
                            <h3 className="text-xl font-bold text-white border-b border-[#314158] pb-2">Tools & Others</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["Git", "Figma", "REST APIs", "SQL", "GraphQL", "Vercel", "Docker"].map((tool) => (
                                    <span key={tool} className="px-4 py-2 text-sm text-[#E0E6EE] bg-[#233045] border border-[#45556C] rounded-xl font-medium tracking-wide">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Growth Pipeline Module */}
                        <div className="bg-[#141E33] p-8 rounded-2xl border border-[#314158] flex flex-col gap-6 shadow-inner">
                            <h3 className="text-xl font-bold text-white border-b border-[#314158] pb-2">Currently Learning</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["Node.js", "MongoDB + Mongoose", "JWT Authentication", "Web Servers", "Express.js Framework"].map((item) => (
                                    <span key={item} className="px-4 py-2 text-sm text-[#E0E6EE] bg-[#233045] border border-[#45556C] rounded-xl font-medium tracking-wide">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURED PROJECTS SECTION */}
            <section id="featuredProjects" className="py-28 bg-[#0A1226]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-[#5A9EFF] after:to-[#AC4AFF]">
                            Featured Projects
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SouqLink",
                                desc: "A comprehensive B2B industrial dashboard and e-commerce platform designed for streamlined business trading.",
                                tags: ["React.js", "Next.js", "Tailwind CSS", "Flowbite React"],
                                code: "https://github.com/Eng-Ahmed-Khedr/SOUQLINK/tree/master/souqlink",
                                live: "https://souqlink.vercel.app/",
                                img: souqlinkImg
                            },
                            {
                                title: "classyAds",
                                desc: "A sleek, high-performance classified advertisements platform featuring advanced filtering capabilities and modern UI components.",
                                tags: ["React.js", "TypeScript", "Tailwind CSS"],
                                code: "https://github.com/Eng-Ahmed-Khedr/ahmedKhedr.github.io/tree/master/Classy-Ads",
                                live: "https://eng-ahmed-khedr.github.io/ahmedKhedr.github.io/Classy-Ads/index.html",
                                img: classyadsImg
                            },
                            {
                                title: "Watch Shop",
                                desc: "A full-featured watch shop landing page showcasing luxury timepieces with pixel-perfect layout execution.",
                                tags: ["HTML", "CSS", "JavaScript"],
                                code: "https://github.com/Eng-Ahmed-Khedr/ahmedKhedr.github.io/tree/master/watch-shop",
                                live: "https://github.com/Eng-Ahmed-Khedr/ahmedKhedr.github.io/tree/master/watch-shop",
                                img: watchShopImg
                            }
                        ].map((proj, idx) => (
                            <div key={idx} className="bg-[#121C30] rounded-2xl border border-[#45556C]/60 overflow-hidden group flex flex-col shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#51A2FF]/50">
                                <div className="overflow-hidden h-52 bg-[#151F33] relative">
                                    <img
                                        src={proj.img}
                                        alt={`${proj.title} Showcase Preview`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow gap-4">
                                    <h3 className="text-xl font-bold text-white tracking-wide">{proj.title}</h3>
                                    <p className="text-[#8B9CB4] text-sm flex-grow leading-relaxed font-medium">{proj.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tags.map(t => (
                                            <span key={t} className="text-xs text-[#51A2FF] px-3 py-1 bg-[#172948] rounded-lg font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-6 mt-4 pt-4 border-t border-[#45556C]/30 text-sm font-medium text-[#90A1B9]">
                                        <a href={proj.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                            <FaGithub className="text-base" /> Code
                                        </a>
                                        <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                                            <span className="text-sm">↗</span> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GET IN TOUCH SECTION */}
            <section id="getInTouch" className="py-28 bg-[#0A1226]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-linear-to-r after:from-[#5A9EFF] after:to-[#AC4AFF]">
                            Get In Touch
                        </h2>
                    </div>
                    <p className="text-center text-[#CAD5E2] mb-20 max-w-xl mx-auto font-medium text-base">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Info Metrics Column */}
                        <div className="space-y-10">
                            <h3 className="text-3xl font-bold tracking-wide">Let's talk</h3>
                            <ul className="space-y-8">
                                <li className="flex items-center">
                                    <div className="bg-[#112141] text-[#50A2FF] text-2xl p-4 rounded-xl mr-5 flex items-center justify-center border border-[#314158]/30">
                                        <FaRegEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-[#90A1B9] font-bold">Email</h4>
                                        <a href="mailto:ahmed-ayman-khedr@hotmail.com" className="text-white hover:text-[#50A2FF] transition-colors font-medium text-lg">
                                            ahmed-ayman-khedr@hotmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-[#112141] text-[#50A2FF] text-2xl p-4 rounded-xl mr-5 flex items-center justify-center border border-[#314158]/30">
                                        <span className="text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-[#90A1B9] font-bold">Location</h4>
                                        <p className="text-white font-medium text-lg">Egypt</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 w-full bg-[#141E33]/40 p-8 rounded-2xl border border-[#314158]/50 shadow-xl backdrop-blur-sm">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#CAD5E2]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="bg-[#1D293D] border border-[#314158] rounded-xl h-12 px-4 text-white placeholder-[#59748E] focus:outline-none focus:ring-2 focus:ring-[#2B7FFF]/50 focus:border-[#2B7FFF] transition-all font-medium"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-[#CAD5E2]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    className="bg-[#1D293D] border border-[#314158] rounded-xl h-12 px-4 text-white placeholder-[#59748E] focus:outline-none focus:ring-2 focus:ring-[#2B7FFF]/50 focus:border-[#2B7FFF] transition-all font-medium"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#CAD5E2]">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    className="bg-[#1D293D] border border-[#314158] rounded-xl p-4 text-white placeholder-[#59748E] focus:outline-none focus:ring-2 focus:ring-[#2B7FFF]/50 focus:border-[#2B7FFF] transition-all font-medium resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white font-bold rounded-xl h-12 flex items-center justify-center transition-all shadow-md shadow-[#2B7FFF]/10 mt-2"
                            >
                                Send Message 🚀
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 6. GLOBAL SITE FOOTER */}
            <footer className="bg-[#0A1226] border-t border-[#1D293D] py-10 text-center text-[#90A1B9] text-sm font-medium tracking-wide">
                <div className="container mx-auto px-4">
                    <p>© 2026 Ahmed Ayman Khedr. Built with React , Flowbite and Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}