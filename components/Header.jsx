"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/projects", label: "Projects" },
        { href: "/gallery", label: "Gallery" },
    ];

    return (
        <>
            {/* Desktop Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-blue-800/60 backdrop-blur-lg shadow-md' 
                    : 'bg-blue-800/40 backdrop-blur-md'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-24 md:h-28">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logooo.png"
                                    alt="Sri Sai Interiors Logo"
                                    fill
                                    className="object-contain brightness-150 drop-shadow-2xl group-hover:brightness-200 group-hover:drop-shadow-[0_0_40px_rgba(255,255,0,0.7)] transition-all duration-500 bg-white/10"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                About
                            </Link>
                            <Link href="/projects" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Projects
                            </Link>
                            <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Gallery
                            </Link>
                        </nav>

                        {/* Center Title - Desktop */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                            <div className="text-center">
                                <h1 className="text-4xl font-black text-white leading-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.7)] animate-header-glow">
                                    SRI SAI INTERIORS
                                </h1>
                                <div className="w-32 h-1 bg-yellow-400 mx-auto mt-2 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)] animate-header-line-glow"></div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-blue-700">
                    <nav className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 text-white hover:text-yellow-400 hover:bg-blue-800/50 transition-all duration-300 font-medium ${
                                    pathname === item.href ? 'bg-blue-800/50 text-yellow-400' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            <style jsx global>{`
                @keyframes headerGlow {
                    0%, 100% { text-shadow: 0 0 16px rgba(255,255,255,0.7); }
                    50% { text-shadow: 0 0 32px rgba(255,255,255,1); }
                }
                .animate-header-glow {
                    animation: headerGlow 2.5s infinite alternate;
                }
                @keyframes headerLineGlow {
                    0%, 100% { box-shadow: 0 0 20px 4px rgba(251,191,36,0.3); }
                    50% { box-shadow: 0 0 40px 8px rgba(251,191,36,0.6); }
                }
                .animate-header-line-glow {
                    animation: headerLineGlow 2.5s infinite alternate;
                }
            `}</style>
        </>
    );
};

export default Header;